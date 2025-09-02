"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main
      id="contact"
      className={`container ${styles.contact}`}
      aria-labelledby="contact-title"
      role="main"
    >
      <h1 id="contact-title" className={styles.contact__heading}>
        CONTACTO
      </h1>

      <div className={styles.contact__grid}>
        {/* IZQUIERDA: Formulario */}
        <div className={`${styles.contact__panel} ${styles.contact__form}`}>
          <form onSubmit={onSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" required placeholder="Tu nombre" autoComplete="name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" autoComplete="email" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" placeholder="+34 600 000 000" autoComplete="tel" />
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Asunto</label>
                <input id="subject" name="subject" type="text" placeholder="¿Sobre qué nos escribes?" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={6} required placeholder="Cuéntanos tu proyecto..." />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.btnCta}>Enviar</button>
              {sent && <span className={styles.sentHint} role="status">¡Enviado! Te responderemos pronto.</span>}
            </div>
          </form>
        </div>

        {/* DERECHA: Foto */}
        <aside className={`${styles.contact__panel} ${styles.contact__photo}`} aria-hidden="true">
          <Image
            src="/pantallas.png"          // coloca esta imagen en /public
            alt="Instalación de pantallas LED"
            fill
            priority
            className={styles.photoImg}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
          <div className={styles.photoOverlay} />
        </aside>

        {/* DEBAJO DEL FORM: Recuadro con datos */}
        <div
  className={`${styles.contact__panel} ${styles.contact__infoCard}`}
  aria-labelledby="contact-info-title"
>
  <h3 id="contact-info-title" className={styles.infoTitle}>¿Hablamos?</h3>

  {/* Microdatos de Organization + dirección/horario */}
  <address
    className={styles.infoList}
    itemScope
    itemType="https://schema.org/Organization"
  >
    <meta itemProp="name" content="Nombre de la marca" />

    <div className={styles.infoRow}>
      <svg className={styles.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8c.3-.3.7-.4 1.1-.3 1.2.4 2.4.7 3.7.7.6 0 1 .4 1 .9V19c0 .6-.4 1-1 1C10.3 20 4 13.7 4 6c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1.3.3 2.5.7 3.7.1.4 0 .8-.3 1.1l-2 2z" />
      </svg>
      <a href="tel:+34123456789" itemProp="telephone">+34 123 456 789</a>
    </div>

    <div className={styles.infoRow}>
      <svg className={styles.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
      <a href="mailto:info@tudominio.com" itemProp="email">info@tudominio.com</a>
    </div>

    <div className={styles.infoRow}>
      <svg className={styles.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 4v2h10V6H7zm0 4v2h10v-2H7zm0 4v2h7v-2H7z" />
      </svg>
      <time itemProp="openingHours" dateTime="Mo-Fr 09:00-18:00">
        Lun–Dom 9:00–18:00
      </time>
    </div>
    <div className={`${styles.infoRow} ${styles.infoRowWhatsapp}`}>
  <svg className={styles.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
    {/* Logo WhatsApp */}
    <path d="M12.04 2C6.99 2 2.9 6.08 2.9 11.12c0 1.79.47 3.52 1.36 5.05L3 22l6-1.23a9.06 9.06 0 0 0 3.04.5c5.05 0 9.14-4.08 9.14-9.13C21.18 6.08 17.09 2 12.04 2zm0 16.54c-1.5 0-2.98-.4-4.27-1.15l-.31-.18-3.56.73.73-3.47-.2-.33A7.6 7.6 0 0 1 4.43 11.1c0-4.2 3.41-7.61 7.61-7.61s7.61 3.41 7.61 7.61-3.41 7.61-7.61 7.61zm4.29-5.05c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.12-.96-.35-1.83-1.1-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.36.1-.48.1-.1.23-.27.35-.4.12-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.52-1.26-.72-1.72-.19-.46-.38-.4-.52-.4h-.45c-.15 0-.4.06-.6.29-.21.23-.79.77-.79 1.88 0 1.11.81 2.19.93 2.34.12.15 1.59 2.43 3.84 3.41.54.23.95.37 1.28.47.54.17 1.03.15 1.42.09.43-.06 1.36-.56 1.55-1.11.19-.56.19-1.04.13-1.14-.06-.1-.21-.16-.44-.28z" />
  </svg>
  <a
    href="https://wa.me/34123456789?text=Hola%20me%20gustaría%20recibir%20información"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Abrir chat de WhatsApp"
  >
    WhatsApp (+34 123 456 789)
  </a>
</div>
  </address>

</div>

      </div>
    </main>
  );
}
