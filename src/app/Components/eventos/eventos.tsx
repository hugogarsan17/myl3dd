"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./eventos.css";

export default function Eventos() {
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
            src="/img/eventos-hero.jpg"           
            alt=""
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="empty"

            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <h1 className="service-hero__title">Eventos</h1>
        </div>
      </main>

      {/* Resumen */}
      <section className="section section--alt">
        <div className="container">
          <p className="section__copy">
            Producción audiovisual llave en mano para <strong>conciertos, festivales, ferias y eventos corporativos</strong>.
            <strong> Realización multicámara</strong>, <strong>streaming</strong>, <strong>cámaras PTZ</strong>,
            <strong> procesadores y mezcladores HD/4K</strong>, <strong>gestión de señales</strong> y
            <strong> sistemas de control</strong> para garantizar una ejecución fluida y un resultado impecable.
          </p>

          {/* Bloques por vertical */}
          <div className="summary-grid">
            {[
              {
                t: "Conciertos",
                d: (
                  <>
                    Cobertura <strong>multicámara</strong> con cámaras PTZ y operadores, mezcla en
                    <strong> HD/4K</strong>, pantallas LED de escenario y side screens, e <strong>intercom</strong> para equipo técnico.
                  </>
                ),
              },
              {
                t: "Festivales",
                d: (
                  <>
                    <strong>Realización en directo</strong> y <strong>streaming</strong> simultáneo, ruteo de señales
                    a pantallas de recinto, <strong>grabación</strong> y <strong>replays</strong> para redes/social wall.
                  </>
                ),
              },
              {
                t: "Ferias y Expos",
                d: (
                  <>
                    Stands con <strong>LED/monitores</strong>, <strong>players</strong> y control de contenidos,
                    además de <strong>captación y edición</strong> para highlights del evento.
                  </>
                ),
              },
              {
                t: "Eventos corporativos",
                d: (
                  <>
                    Keynotes, presentaciones y <strong>híbridos</strong> con videoconferencia, <strong>micros y PA</strong>,
                    <strong> mezcla de medios</strong> y <strong>control</strong> para ponentes y realización.
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

          {/* Bloque de capacidades (chips) */}
          <ul className="evt-chips">
            {[
              "Realización multicámara",
              "Streaming (RTMP, SRT, plataformas)",
              "Cámaras PTZ + operadores",
              "Mezcladores/Procesadores HD/4K",
              "Reparto/gestión de señales",
              "Intercom & tally",
              "Grabación y entregables",
            ].map((x) => (
              <li key={x} className="evt-chip">{x}</li>
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
