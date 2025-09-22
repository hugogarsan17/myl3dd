"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./cultura-y-ocio.css";

export default function CulturaYOcio() {
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

      <SiteHeader  logoAlt="logo MyL3d" />

      {/* HERO optimizado con next/image */}
      <main id="service-hero" className="service-hero">
        <div className="service-hero__bg" aria-hidden>
          <Image
            src="/hero.jpg"   /* coloca aquí tu imagen */
            alt=""
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="empty" /* pon blurDataURL si quieres */
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <h1 className="service-hero__title">Cultura y ocio</h1>
        </div>
      </main>

      {/* Resumen */}
      <section className="section section--alt">
        <div className="container">
          <p className="section__copy">
            Contenido visual de alta calidad para exposiciones y eventos en vivo, con pantallas
            versátiles, fáciles de integrar y pensadas para crear experiencias inmersivas que se
            adaptan a cada espacio y momento.
          </p>

          {/* Bloques por vertical */}
          <div className="summary-grid">
            {[
              {
                t: "Discotecas",
                d: (
                  <>
                    <strong>LED de gran impacto</strong>, efectos visuales sincronizados y señalización
                    dinámica para ambientar salas, escenarios y barras, elevando la experiencia del público.
                  </>
                ),
              },
              {
                t: "Teatros",
                d: (
                  <>
                    Pantallas y monitores para <strong>cartelería, foyer y sala</strong>, soporte a
                    <strong> presentaciones multimedia</strong> y contenidos previos/entre actos con control sencillo.
                  </>
                ),
              },
              {
                t: "Museos",
                d: (
                  <>
                    Soluciones <strong>interactivas y didácticas</strong> para exposiciones: señalética digital,
                    piezas audiovisuales inmersivas y kioscos de consulta para ampliar información.
                  </>
                ),
              },
              {
                t: "Centros religiosos",
                d: (
                  <>
                    Visualización discreta y clara de <strong>contenido informativo y litúrgico</strong>, con
                    integración respetuosa en el entorno arquitectónico.
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

          <div style={{ marginTop: "1rem" }}>
            <a href="/contacto" className="btn-cta sheen">Solicitar información</a>
          </div>
        </div>
      </section>
    </>
  );
}
