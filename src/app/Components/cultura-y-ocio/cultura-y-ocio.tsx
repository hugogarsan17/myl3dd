"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./cultura-y-ocio.css";
import { JSX } from "react";

export default function CulturaYOcio() {
  const reduce = useReducedMotion();

  const breadcrumbs = [
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/#services" },
    { name: "Cultura y ocio", url: "/servicios/cultura-y-ocio" },
  ] as const;

  const summaryCards: {
    t: string;
    d: JSX.Element;
    img: string;
    alt: string;
    width: number;
    height: number;
  }[] = [
    {
      t: "Discotecas",
      d: (
        <>
          <strong>LED de gran impacto</strong>, efectos visuales sincronizados y señalización
          dinámica para ambientar salas, escenarios y barras, elevando la experiencia del público.
        </>
      ),
      img: "/res/discoteca.png",
      alt: "Visuales LED en cabina de DJ y pista de baile",
      width: 720,
      height: 480,
    },
    {
      t: "Teatros",
      d: (
        <>
          Pantallas y monitores para <strong>cartelería, foyer y sala</strong>, soporte a
          <strong> presentaciones multimedia</strong> y contenidos previos/entre actos con control sencillo.
        </>
      ),
      img: "/res/teatro.png",
      alt: "Hall de teatro con cartelería digital",
      width: 720,
      height: 480,
    },
    {
      t: "Museos",
      d: (
        <>
          Soluciones <strong>interactivas y didácticas</strong> para exposiciones: señalética digital,
          piezas audiovisuales inmersivas y kioscos de consulta para ampliar información.
        </>
      ),
      img: "/res/museo.png",
      alt: "Visitantes interactuando con instalación audiovisual en museo",
      width: 720,
      height: 480,
    },
  ];

  return (
    <>
      {/* JSON-LD Organization */}
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

      <SiteHeader logoAlt="logo MyL3d" />

      {/* HERO optimizado con next/image */}
      <main id="service-hero" className="service-hero">
        <div className="service-hero__bg" aria-hidden>
          <Image
            src="/hero.jpg"
            alt="Instalación audiovisual para espacios culturales"
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="empty"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <nav className="breadcrumbs" aria-label="Ruta de navegación">
            <ol>
              {breadcrumbs.map((b, i) => (
                <li key={b.url}>
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.url} prefetch>
                      {b.name}
                    </Link>
                  ) : (
                    <span aria-current="page">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="service-hero__title">Cultura y ocio</h1>
          <p className="service-hero__subtitle">
            Experiencias inmersivas para museos, teatros y ocio nocturno.
          </p>
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
          <div className="summary-grid" role="list">
            {summaryCards.map((c, i) => (
              <motion.article
                key={c.t}
                className="summary-card"
                role="listitem"
                initial={reduce ? {} : { opacity: 0, y: 12 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="summary-card__bg"
                />
                <div className="summary-content" style={{ position: "relative", zIndex: 1 }}>
                  <h3 className="summary-card__title">{c.t}</h3>
                  <p className="summary-card__desc">{c.d}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="cta-wrap" style={{ marginTop: "1rem" }}>
            <Link href="/contacto" className="btn-cta sheen" prefetch>
              Solicitar información
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}