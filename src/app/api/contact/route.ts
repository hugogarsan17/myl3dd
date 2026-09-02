// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { SentMessageInfo } from "nodemailer";

export const runtime = "nodejs"; // Nodemailer requiere Node, no Edge.

const isDev = process.env.NODE_ENV !== "production";

type ContactPayload = {
  tab: "empresa";
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  captchaToken: string; // Turnstile

  company?: string;
  eventType: string;
  city: string;

  decisionTime?: string;
  hearAbout?: string;

  attribution: Record<string, string | undefined>;
  page: string;

  attachment?: {
    name: string;
    type: string;
    size: number;
    dataUrl: string;
  };
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object";
}

function isContactPayload(v: unknown): v is ContactPayload {
  if (!isRecord(v)) return false;
  const { name, email, message, captchaToken, tab } = v;
  return (
    tab === "empresa" &&
    typeof name === "string" &&
    typeof email === "string" &&
    typeof message === "string" &&
    typeof captchaToken === "string" &&
    name.trim().length > 1 && name.length <= 120 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254 &&
    message.length <= 5000 && captchaToken.length > 0
  );
}

// Escapa HTML básico para evitar inyección en el correo
function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return ch;
    }
  });
}

// Verifica token de Cloudflare Turnstile
async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY || "";
  if (!secret) throw new Error("Falta TURNSTILE_SECRET_KEY en el entorno.");

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: ip,
    }),
  });

  if (!res.ok) throw new Error(`Fallo verificando Turnstile: ${res.status}`);
  const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };

  if (!data.success) {
    const codes = data["error-codes"]?.join(", ") || "desconocido";
    throw new Error(`Verificación CAPTCHA fallida (${codes})`);
  }
}

export async function POST(req: NextRequest) {
  try {
    // (Opcional) CSRF/same-origin mínimo
    const origin = req.headers.get("origin") || "";
    const host = req.headers.get("host") || "";
    let originHost = "";
    try { originHost = new URL(origin).host; } catch { originHost = ""; }
    if (!originHost || originHost !== host) {
      return NextResponse.json({ success: false, error: "Origen no permitido" }, { status: 403 });
    }

    const raw: unknown = await req.json();
    if (!isContactPayload(raw)) {
      return NextResponse.json(
        { success: false, error: "Cuerpo inválido. Se requieren name, email, message y captchaToken (string)." },
        { status: 400 }
      );
    }

    const {
      name, email, phone, subject, message,
      company,
      eventType, city, decisionTime, hearAbout,
      attribution, page, attachment, captchaToken
    } = raw;

    const xff = req.headers.get("x-forwarded-for") || "";
    const ip = xff.split(",")[0]?.trim() || "";

    await verifyTurnstile(captchaToken, ip);

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (attachment && (!allowedTypes.includes(attachment.type) || attachment.size > 8 * 1024 * 1024 || !attachment.dataUrl.startsWith(`data:${attachment.type};base64,`) || /[\\/]/.test(attachment.name))) {
      return NextResponse.json({ success: false, error: "Archivo no válido." }, { status: 400 });
    }

    // Config SMTP
    const hostSmtp = process.env.MAIL_HOST;
    const port = Number(process.env.MAIL_PORT ?? "465");
    const secure = (process.env.MAIL_SECURE ?? "true") === "true"; // 465->true, 587->false
    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;
    const from = process.env.MAIL_FROM || user;
    const to = process.env.MAIL_TO || "info.myl3d@gmail.com";

    if (!hostSmtp || !user || !pass) {
      return NextResponse.json(
        { success: false, error: "Falta configuración SMTP (MAIL_HOST/MAIL_USER/MAIL_PASS)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: hostSmtp,
      port,
      secure,
      auth: { user, pass },
    });

    if (isDev) await transporter.verify();

    // Texto plano
    const plainText = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone || "No indicado"}`,
      `Empresa: ${company || "No indicada"}`,
      `Asunto: ${subject || "Sin asunto"}`,
      `Tipo de servicio: ${eventType}`,
      `Ciudad: ${city || "No indicada"}`,
      `Tiempo de decisión: ${decisionTime || "No indicado"}`,
      `Cómo nos conoció: ${hearAbout || "No indicado"}`,
      `Página: ${page}`,
      `Atribución: ${JSON.stringify(attribution)}`,
      "",
      "Mensaje:",
      message,
      attachment ? `\nArchivo adjunto: ${attachment.name} (${attachment.type}, ${attachment.size} bytes)` : "",
    ].join("\n");

    // HTML seguro
    const safeHtmlMsg = escapeHtml(message).replace(/\n/g, "<br/>");

    const htmlBody = `
      <h2>Nuevo mensaje desde la web</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(phone || "No indicado")}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company || "No indicada")}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(subject || "Sin asunto")}</p>
      <p><strong>Tipo de servicio:</strong> ${escapeHtml(eventType)}</p>
      <p><strong>Ciudad:</strong> ${escapeHtml(city || "No indicada")}</p>
      <p><strong>Tiempo de decisión:</strong> ${escapeHtml(decisionTime || "No indicado")}</p>
      <p><strong>Cómo nos conoció:</strong> ${escapeHtml(hearAbout || "No indicado")}</p>
      <p><strong>Página:</strong> ${escapeHtml(page)}</p>
      <p><strong>Atribución:</strong> ${escapeHtml(JSON.stringify(attribution))}</p>
      <p><strong>Mensaje:</strong><br/>${safeHtmlMsg}</p>
      ${attachment ? `<p><strong>Archivo adjunto:</strong> ${escapeHtml(attachment.name)} (${escapeHtml(attachment.type)}, ${attachment.size} bytes)</p>` : ""}
      <hr/>
      <small>IP: ${escapeHtml(ip || "desconocida")}</small>
    `;

    const info: SentMessageInfo = await transporter.sendMail({
      from: `"Web Contacto" <${from}>`,
      to,
      replyTo: email,
      subject: subject || "Nuevo mensaje de contacto",
      text: plainText,
      html: htmlBody,
      attachments: attachment ? [{ filename: attachment.name, content: attachment.dataUrl.split(",")[1], encoding: "base64", contentType: attachment.type }] : undefined,
    });

    await transporter.sendMail({ from: `"MYL3D" <${from}>`, to: email, subject: "Hemos recibido tu solicitud", text: "Hemos recibido tu solicitud y revisaremos las necesidades del proyecto.", html: "<p>Hemos recibido tu solicitud y revisaremos las necesidades del proyecto.</p>" }).catch((error)=>console.error("No se pudo enviar la confirmación del lead", error));

    const leadId = crypto.randomUUID();
    if (process.env.LEAD_WEBHOOK_URL) await fetch(process.env.LEAD_WEBHOOK_URL, { method:"POST", headers:{"content-type":"application/json", ...(process.env.LEAD_WEBHOOK_SECRET ? {authorization:`Bearer ${process.env.LEAD_WEBHOOK_SECRET}`} : {})}, body:JSON.stringify({id:leadId,createdAt:new Date().toISOString(),status:"NEW",name,company,email,phone,city,solutionType:eventType,message,image:attachment?{name:attachment.name,type:attachment.type,size:attachment.size}:undefined,landingPage:page,...attribution}) }).catch((error)=>console.error("No se pudo enviar el lead al webhook",error));

    if (isDev) {
      console.log("Email enviado:", info.messageId);
    }

    return NextResponse.json({ success: true, leadId });
  } catch (err: unknown) {
    console.error("Error en /api/contact:", err);
    const msg = err instanceof Error ? err.message : "No se pudo procesar la solicitud.";
    return NextResponse.json(
      { success: false, error: isDev ? msg : "No se pudo enviar el correo." },
      { status: 500 }
    );
  }
}
