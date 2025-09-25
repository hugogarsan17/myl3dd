// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Nodemailer requiere Node, no Edge.

const isDev = process.env.NODE_ENV !== "production";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validaciones mínimas
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Faltan campos obligatorios: name, email, message." },
        { status: 400 }
      );
    }

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

    // Verifica la conexión SMTP (muy útil al depurar)
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

    const safeHtmlMsg = String(message).replace(/\n/g, "<br/>"); // formatea saltos de línea

    const info = await transporter.sendMail({
      from: `"Web Contacto" <${from}>`, // desde TU buzón autenticado (evita problemas SPF/DMARC)
      to,                               // receptor en Gmail
      replyTo: email,                   // al responder, va al remitente real
      subject: subject || "Nuevo mensaje de contacto",
      text: plainText,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
        <p><strong>Asunto:</strong> ${subject || "Sin asunto"}</p>
        <p><strong>Mensaje:</strong><br/>${safeHtmlMsg}</p>
      `,
    });

    if (isDev) {
      console.log("Email enviado:", info.messageId);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error enviando correo:", err);
    const msg = typeof err?.message === "string" ? err.message : "No se pudo enviar el correo.";
    return NextResponse.json(
      { success: false, error: isDev ? msg : "No se pudo enviar el correo." },
      { status: 500 }
    );
  }
}
