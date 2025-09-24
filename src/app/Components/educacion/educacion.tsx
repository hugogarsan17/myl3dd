"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./educacion.css";

export default function Educacion() {
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
            name: "MyL3D",
            url: "https://www.myl3d.es/",
            logo: "https://www.myl3d.es/logo.png",
            sameAs: ["https://www.instagram.com/myl3d/"],
          }),
        }}
      />

      <SiteHeader  logoAlt="logo MyL3d" />

      {/* HERO optimizado con next/image */}
      <main id="service-hero" className="service-hero">
        <div className="service-hero__bg" aria-hidden>
          <Image
            src="/hero.jpg"         /* pon tu imagen */
            alt=""
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="empty"                   /* añade blurDataURL si quieres */
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <h1 className="service-hero__title">Educación</h1>
        </div>
      </main>

      {/* Resumen */}
      <section className="section section--alt">
        <div className="container">
          <p className="section__copy">
            Soluciones audiovisuales para una enseñanza activa y conectada: pantallas y monitores profesionales,
            <strong> aulas interactivas</strong>, cámaras y audio de <strong>alta cobertura</strong>,
            y <strong>gestión centralizada</strong> del contenido para campus multi-sede.
          </p>

          {/* Bloques por vertical */}
          <div className="summary-grid">
            {[
              {
                t: "Aulas interactivas",
                d: (
                  <>
                    Monitores <strong>táctiles</strong> de gran formato con software educativo,
                    <strong> cámaras 4K</strong> y microfonía para participación de alumnos en clase y en remoto.
                  </>
                ),
              },
              {
                t: "Salas híbridas",
                d: (
                  <>
                    <strong>Videoconferencia</strong> sencilla (BYOD/USB), barras de audio y
                    <strong> cámaras inteligentes</strong> que encuadran al profesor y al alumnado automáticamente.
                  </>
                ),
              },
              {
                t: "Auditorios y campus",
                d: (
                  <>
                    Proyección/LED para <strong>actos académicos</strong>, <strong>streaming</strong> multicámara
                    y <strong>control</strong> de señales para emisiones y grabaciones.
                  </>
                ),
              },
              {
                t: "Señalética digital",
                d: (
                  <>
                    <strong>Cartelería</strong> para pasillos y accesos con <strong>gestión remota</strong>:
                    horarios, avisos y eventos del campus en tiempo real.
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

          {/* Beneficios rápidos */}
          <ul className="edu-bullets">
            <li><strong>Docencia híbrida</strong> sin fricción (presencial + remoto).</li>
            <li><strong>Interactividad</strong> y colaboración en tiempo real.</li>
            <li><strong>Audio</strong> con cobertura clara para aulas medianas/grandes.</li>
            <li><strong>Gestión centralizada</strong> de contenidos y salas.</li>
          </ul>

          <div style={{ marginTop: "1rem" }}>
            <a href="/contacto" className="btn-cta sheen">Solicitar información</a>
          </div>
        </div>
      </section>
    </>
  );
}
