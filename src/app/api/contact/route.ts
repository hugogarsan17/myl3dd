// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { SentMessageInfo } from "nodemailer";

export const runtime = "nodejs"; // Nodemailer requiere Node, no Edge.

const isDev = process.env.NODE_ENV !== "production";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object";
}

function isContactPayload(v: unknown): v is ContactPayload {
  if (!isRecord(v)) return false;
  const { name, email, message } = v;
  return (
    typeof name === "string" &&
    typeof email === "string" &&
    typeof message === "string"
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

export async function POST(req: NextRequest) {
  try {
    const raw: unknown = await req.json();

    if (!isContactPayload(raw)) {
      return NextResponse.json(
        { success: false, error: "Cuerpo inválido. Se requieren name, email y message (string)." },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = raw;

    // Carga de ENV con defaults sensatos
    const host = process.env.MAIL_HOST;
    const port = Number(process.env.MAIL_PORT ?? "465");
    const secure = (process.env.MAIL_SECURE ?? "true") === "true"; // 465->true, 587->false
    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;
    const from = process.env.MAIL_FROM || user;
    const to = process.env.MAIL_TO || "info.myl3d@gmail.com";

    if (!host || !user || !pass) {
      return NextResponse.json(
        { success: false, error: "Falta configuración SMTP (MAIL_HOST/MAIL_USER/MAIL_PASS)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    // Verifica la conexión SMTP (útil en desarrollo)
    await transporter.verify();

    const plainText = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone || "No indicado"}`,
      `Asunto: ${subject || "Sin asunto"}`,
      "",
      "Mensaje:",
      message,
    ].join("\n");

    const safeHtmlMsg = escapeHtml(String(message)).replace(/\n/g, "<br/>");

    const info: SentMessageInfo = await transporter.sendMail({
      from: `"Web Contacto" <${from}>`, // desde TU buzón autenticado (evita problemas SPF/DMARC)
      to,                               // receptor en Gmail
      replyTo: email,                   // al responder, va al remitente real
      subject: subject || "Nuevo mensaje de contacto",
      text: plainText,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone ?? "No indicado")}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(subject ?? "Sin asunto")}</p>
        <p><strong>Mensaje:</strong><br/>${safeHtmlMsg}</p>
      `,
    });

    if (isDev) {
      console.log("Email enviado:", info.messageId);
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Error enviando correo:", err);
    const msg = err instanceof Error ? err.message : "No se pudo enviar el correo.";
    return NextResponse.json(
      { success: false, error: isDev ? msg : "No se pudo enviar el correo." },
      { status: 500 }
    );
  }
}

