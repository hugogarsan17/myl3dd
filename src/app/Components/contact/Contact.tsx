"use client";

import { useEffect, useMemo, useState, FormEvent } from "react";
import Script from "next/script";
import Image from "next/image";
import styles from "./Contact.module.css";

type UTM = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
};

type ContactTab = "empresa" | "persona";

type Attachment =
  | {
      name: string;
      type: string;
      size: number;
      dataUrl: string;
    }
  | undefined;

type Payload = {
  tab: ContactTab;

  // Básicos
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;

  // Empresa / Persona
  company?: string;
  role?: string;
  cif?: string;
  dni?: string;

  // Proyecto / servicio
  eventType: string;
  city: string;

  // Comercial
  decisionTime: string;
  hearAbout: string;

  // Meta
  utm: UTM;
  referrer: string;
  page: string;

  attachment: Attachment;
};

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
  }
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [tab, setTab] = useState<ContactTab>("empresa");

  // UTM + referrer
  const [utm, setUtm] = useState<UTM>({});
  const [referrer, setReferrer] = useState<string>("");

  // Turnstile
  const [captchaToken, setCaptchaToken] = useState("");

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setUtm({
      source: sp.get("utm_source") || undefined,
      medium: sp.get("utm_medium") || undefined,
      campaign: sp.get("utm_campaign") || undefined,
      term: sp.get("utm_term") || undefined,
      content: sp.get("utm_content") || undefined,
    });
    setReferrer(document.referrer || "");
  }, []);

  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => setCaptchaToken(token);
  }, []);

  const eventTypes = useMemo(
    () =>
      [
        "Carteleria digital",
        "Cultura y ocio",
        "Eventos",
        "Corporativo",
        "Educación",
        "Sala de control",
      ] as const,
    []
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot
    const website = (fd.get("website") as string) || "";
    if (website.trim() !== "") return;

    // Consent
    if (!fd.get("consent")) {
      setErrorMsg("Debes aceptar la política de privacidad para continuar.");
      return;
    }

    // CAPTCHA
    if (!captchaToken) {
      setErrorMsg("Por favor completa la verificación anti-bot.");
      return;
    }

    // File (opcional)
    const file = fd.get("attachment") as File | null;
    if (file && file.name) {
      const ok = ["application/pdf", "image/jpeg", "image/png"];
      if (!ok.includes(file.type)) {
        setErrorMsg("Adjunto: PDF, JPG o PNG.");
        return;
      }
      if (file.size > 8 * 1024 * 1024) {
        setErrorMsg("Adjunto máximo 8MB.");
        return;
      }
    }

    setLoading(true);

    const attachment: Attachment =
      file && file.name
        ? {
            name: file.name,
            type: file.type,
            size: file.size,
            dataUrl: await fileToDataUrl(file),
          }
        : undefined;

    const data: Payload & { captchaToken: string } = {
      tab, // "empresa" | "persona"

      // Básicos
      name: ((fd.get("name") as string) || "").trim(),
      email: ((fd.get("email") as string) || "").trim(),
      phone: ((fd.get("phone") as string) || "").trim(),
      subject: ((fd.get("subject") as string) || "").trim(),
      message: ((fd.get("message") as string) || "").trim(),

      // Empresa / Persona
      company: tab === "empresa" ? ((fd.get("company") as string) || "").trim() : undefined,
      role: tab === "empresa" ? ((fd.get("role") as string) || "").trim() : undefined,
      cif: tab === "empresa" ? ((fd.get("cif") as string) || "").trim() : undefined,
      dni: tab === "persona" ? ((fd.get("dni") as string) || "").trim() : undefined,

      // Proyecto / servicio
      eventType: (fd.get("eventType") as string) || "",
      city: ((fd.get("city") as string) || "").trim(),

      // Comercial
      decisionTime: (fd.get("decisionTime") as string) || "",
      hearAbout: (fd.get("hearAbout") as string) || "",

      // Meta
      utm,
      referrer,
      page: typeof window !== "undefined" ? window.location.href : "",

      attachment,

      // CAPTCHA
      captchaToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Error desconocido" }));
        throw new Error(error || "No se pudo enviar el formulario");
      }
      setSent(true);
      form.reset();
      setCaptchaToken(""); // opcional: fuerza nuevo challenge
      setTimeout(() => setSent(false), 4500);
    } catch (err: unknown) {
      console.error(err);
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Error al enviar el formulario. Intenta más tarde.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="contact" className={`container ${styles.contact}`} aria-labelledby="contact-title" role="main">
      {/* Script Turnstile */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />

      <h1 id="contact-title" className={styles.contact__heading}>
        CONTACTO
      </h1>

      <div className={styles.contact__grid}>
        {/* FORM */}
        <div className={`${styles.contact__panel} ${styles.contact__form}`}>
          {/* Tabs */}
          <div className={styles.tabs} role="tablist" aria-label="Tipo de solicitante">
            <button
              role="tab"
              aria-selected={tab === "empresa"}
              aria-controls="panel-empresa"
              id="tab-empresa"
              tabIndex={tab === "empresa" ? 0 : -1}
              className={`${styles.tab} ${tab === "empresa" ? styles.tab__active : ""}`}
              onClick={() => setTab("empresa")}
              type="button"
            >
              Empresas
            </button>
            <button
              role="tab"
              aria-selected={tab === "persona"}
              aria-controls="panel-persona"
              id="tab-persona"
              tabIndex={tab === "persona" ? 0 : -1}
              className={`${styles.tab} ${tab === "persona" ? styles.tab__active : ""}`}
              onClick={() => setTab("persona")}
              type="button"
            >
              Personas
            </button>
          </div>

          <form onSubmit={onSubmit} noValidate>
            {/* Datos básicos */}
            <div className={`${styles.group} ${styles.row}`}>
              <div className={styles.field}>
                <label htmlFor="name">Nombre*</label>
                <input id="name" name="name" type="text" required placeholder="Tu nombre" autoComplete="name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email*</label>
                <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" autoComplete="email" />
              </div>
            </div>

            <div className={`${styles.group} ${styles.row}`}>
              <div className={styles.field}>
                <label htmlFor="phone">Teléfono*</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" required placeholder="+34 600 000 000" autoComplete="tel" />
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Asunto</label>
                <input id="subject" name="subject" type="text" placeholder="¿Sobre qué nos escribes?" />
              </div>
            </div>

            {/* Campos específicos por pestaña */}
            <div id="panel-empresa" role="tabpanel" aria-labelledby="tab-empresa" hidden={tab !== "empresa"} className={styles.group}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="company">Empresa*</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de empresa"
                    autoComplete="organization"
                    required={tab === "empresa"}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="role">Cargo*</label>
                  <input id="role" name="role" type="text" placeholder="Tu cargo" required={tab === "empresa"} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="cif">CIF</label>
                  <input id="cif" name="cif" type="text" placeholder="CIF (opcional)" />
                </div>
              </div>
            </div>

            <div id="panel-persona" role="tabpanel" aria-labelledby="tab-persona" hidden={tab !== "persona"} className={styles.group}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="dni">DNI</label>
                  <input id="dni" name="dni" type="text" placeholder="DNI (opcional)" />
                </div>
              </div>
            </div>

            {/* Proyecto / servicio */}
            <div className={`${styles.group} ${styles.row}`}>
              <div className={styles.field}>
                <label htmlFor="eventType">Tipo de servicio</label>
                <select id="eventType" name="eventType" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {eventTypes.map((et) => (
                    <option key={et} value={et}>
                      {et}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`${styles.group} ${styles.row}`}>
              <div className={styles.field}>
                <label htmlFor="city">Ciudad</label>
                <input id="city" name="city" type="text" placeholder="Madrid, Barcelona..." />
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.field}>
                <label htmlFor="message">Mensaje*</label>
                <textarea id="message" name="message" rows={6} required placeholder="Cuéntanos tu proyecto..." />
              </div>
            </div>

            {/* Adjunto (opcional) */}
            <div className={styles.group}>
              <div className={styles.field}>
                <label htmlFor="attachment">Adjunto (PDF/JPG/PNG, máx 8MB)</label>
                <input id="attachment" name="attachment" type="file" accept=".pdf,image/jpeg,image/png" />
              </div>
            </div>

            {/* Turnstile (widget visible “managed”) */}
            <div
              className="cf-turnstile"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              data-callback="onTurnstileSuccess"
              data-action="contact"
              data-theme="auto"
            />

            {/* Consentimiento + estado */}
            <div className={styles.group}>
              <label className={styles.checkbox}>
                <input id="consent" name="consent" type="checkbox" required />
                He leído y acepto la{" "}
                <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                  política de privacidad
                </a>
                .
              </label>
            </div>

            {errorMsg && (
              <p className={styles.error} role="alert">
                {errorMsg}
              </p>
            )}

            <div className={styles.actions}>
              <button type="submit" className={styles.btnCta} disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
              {sent && (
                <span className={styles.sentHint} role="status">
                  ¡Enviado! Te responderemos pronto.
                </span>
              )}
            </div>

            {/* Honeypot + Meta ocultos */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />
            <input type="hidden" name="utm_source" value={utm.source || ""} />
            <input type="hidden" name="utm_medium" value={utm.medium || ""} />
            <input type="hidden" name="utm_campaign" value={utm.campaign || ""} />
            <input type="hidden" name="utm_term" value={utm.term || ""} />
            <input type="hidden" name="utm_content" value={utm.content || ""} />
            <input type="hidden" name="referrer" value={referrer} />
          </form>
        </div>

        {/* FOTO */}
        <aside className={`${styles.contact__panel} ${styles.contact__photo}`} aria-hidden="true">
          <Image
            src="/pantallas.png"
            alt="Instalación de pantallas LED"
            fill
            priority
            className={styles.photoImg}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
          <div className={styles.photoOverlay} />
        </aside>

        {/* INFO */}
        <div className={`${styles.contact__panel} ${styles.contact__infoCard}`} aria-labelledby="contact-info-title">
          <h3 id="contact-info-title" className={styles.infoTitle}>
            ¿Hablamos?
          </h3>
          <address className={styles.infoList} itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="MyL3d" />

            <div className={styles.infoRow}>
              <svg className={styles.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:info@myl3d.es" itemProp="email">
                info@myl3d.es
              </a>
            </div>
            <div className={styles.infoRow}>
              <svg className={styles.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 4v2h10V6H7zm0 4v2h10v-2H7zm0 4v2h7v-2H7z" />
              </svg>
              <time itemProp="openingHours" dateTime="Mo-Fr 09:00-18:00">
                Lun–Vie 9:00–18:00
              </time>
            </div>
            <div className={`${styles.infoRow} ${styles.infoRowWhatsapp}`}>
              <svg className={styles.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2C6.99 2 2.9 6.08 2.9 11.12c0 1.79.47 3.52 1.36 5.05L3 22l6-1.23a9.06 9.06 0 0 0 3.04.5c5.05 0 9.14-4.08 9.14-9.13C21.18 6.08 17.09 2 12.04 2zm0 16.54c-1.5 0-2.98-.4-4.27-1.15l-.31-.18-3.56.73.73-3.47-.2-.33A7.6 7.6 0 0 1 4.43 11.1c0-4.2 3.41-7.61 7.61-7.61s7.61 3.41 7.61 7.61-3.41 7.61-7.61 7.61zm4.29-5.05c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.12-.96-.35-1.83-1.1-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.36.1-.48.1-.1.23-.27.35-.4.12-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.52-1.26-.72-1.72-.19-.46-.38-.4-.52-.4h-.45c-.15 0-.4.06-.6.29-.21.23-.79.77-.79 1.88 0 1.11.81 2.19.93 2.34.12.15 1.59 2.43 3.84 3.41.54.23.95.37 1.28.47.54.17 1.03.15 1.42.09.43-.06 1.36-.56 1.55-1.11.19-.56.19-1.04.13-1.14-.06-.1-.21-.16-.44-.28z" />
              </svg>
              <a
                href="https://wa.me/34692903572?text=Hola%20me%20gustaría%20recibir%20información"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir chat de WhatsApp"
              >
                WhatsApp (+34 692903572)
              </a>
            </div>
          </address>
        </div>
      </div>
    </main>
  );
}

async function fileToDataUrl(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const base64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
  return `data:${file.type};base64,${base64}`;
}
