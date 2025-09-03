"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./salas-de-control.css";

export default function SalasDeControl() {
  const reduce = useReducedMotion();

  return (
    <>
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nombre de la marca",
            url: "https://www.tu-dominio.com/",
            logo: "https://www.tu-dominio.com/logo.png",
            sameAs: ["https://www.instagram.com/tumarca/"],
          }),
        }}
      />

      <SiteHeader logoSrc="/logo.png" logoAlt="Nombre de la marca" />

      {/* HERO optimizado con next/image */}
      <main id="service-hero" className="service-hero">
        <div className="service-hero__bg" aria-hidden>
          <Image
            src="/img/sala-control-hero.jpg"    /* tu imagen de hero */
            alt=""
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="empty"                 /* añade blurDataURL si quieres */
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <h1 className="service-hero__title">Salas de control</h1>
        </div>
      </main>

      {/* Resumen */}
      <section className="section section--alt">
        <div className="container">
          <p className="section__copy">
            Diseño e integración de <strong>videowalls</strong> y puestos de operador para
            <strong> visualización en tiempo real</strong> y <strong>toma de decisiones ágil</strong>.
            Enrutado de señales, <strong>control centralizado</strong> y máxima fiabilidad 24/7.
          </p>

          {/* Bloques principales */}
          <div className="summary-grid">
            {[
              {
                t: "Videowall",
                d: (
                  <>
                    LED o <strong>monitores “narrow bezel”</strong> con controladora de muro,
                    <strong> layouts dinámicos</strong> (PIP, mosaicos) y perfiles por turno.
                  </>
                ),
              },
              {
                t: "Fuentes y señales",
                d: (
                  <>
                    Ingesta de <strong>multifuente</strong> (HDMI/SDI/DP/IP, NDI/SRT), decodificación
                    y <strong>ruteo</strong> hacia el videowall y puestos de trabajo.
                  </>
                ),
              },
              {
                t: "Operación y control",
                d: (
                  <>
                    <strong>Control por presets</strong>, KVM sobre IP, teclados/encoders
                    y panel táctil para cambiar vistas y escenas en segundos.
                  </>
                ),
              },
              {
                t: "Continuidad 24/7",
                d: (
                  <>
                    Hardware de <strong>grado profesional</strong> con redundancia (PSU/red),
                    <strong> monitorización/alertas</strong> y mantenimiento preventivo.
                  </>
                ),
              },
            ].map((c, i) => (
              <motion.article
                key={c.t}
                className="summary-card"
                initial={reduce ? {} : { opacity: 0, y: 10 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <div className="summary-thumb" />
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </motion.article>
            ))}
          </div>

          {/* Chips de capacidades */}
          <ul className="ctrl-chips">
            {[
              "Wall controller (layouts/presets)",
              "KVM sobre IP / matrices",
              "Decoders/encoders AV sobre IP",
              "Integración SCADA/BMS",
              "Alarmas y monitorización",
              "Plan de mantenimiento 24/7",
            ].map((x) => (
              <li key={x} className="ctrl-chip">{x}</li>
            ))}
          </ul>

          <div style={{ marginTop: "1rem" }}>
            <a href="/contacto" className="btn-cta sheen">Pide tu propuesta</a>
          </div>
        </div>
      </section>
    </>
  );
}
