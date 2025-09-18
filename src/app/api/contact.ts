// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Configura el transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.tu-servidor.com", // ej: smtp.gmail.com
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Envía el correo
    await transporter.sendMail({
      from: `"Web Contacto" <${process.env.MAIL_USER}>`,
      to: "info@tudominio.com", // tu correo destino
      subject: subject || "Nuevo mensaje de contacto",
      text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || "No indicado"}
        Mensaje: ${message}
      `,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
        <p><strong>Asunto:</strong> ${subject || "Sin asunto"}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error enviando correo:", err);
    return NextResponse.json({ success: false, error: "No se pudo enviar el correo." }, { status: 500 });
  }
}
