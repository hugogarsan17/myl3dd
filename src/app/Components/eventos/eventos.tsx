"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./eventos.css";

export default function Eventos() {
  const reduce = useReducedMotion();

  const breadcrumbs = [
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/#services" },
    { name: "Eventos", url: "/servicios/eventos" },
  ];

  // Helper por si hay espacios en el nombre del archivo
  const src = (p: string) => encodeURI(p);

  const items = [
    {
      t: "Conciertos",
      img: "/res/conciertos.png", // ideal renombrar a /res/stand-ise.jpg
      alt: "Concierto con pantallas LED en escenario",
      d: (
        <>
          Una posible solución puede combinar <strong>captación multicámara</strong>, mezcla, pantallas LED e intercom, coordinando los perfiles técnicos y proveedores necesarios.
        </>
      ),
    },
    {
      t: "Festivales",
      img: "/res/festivales.png",
      alt: "Festival al aire libre con pantallas gigantes",
      d: (
        <>
          Se puede plantear <strong>realización en directo</strong>, <strong>streaming</strong>, distribución de señales y grabación junto a profesionales especializados según el evento.
        </>
      ),
    },
    {
      t: "Ferias y Expos",
      img: "/res/stand-ise.png",
      alt: "Stand ferial con pantalla LED",
      d: (
        <>
          Stands con <strong>LED/monitores</strong>, <strong>players</strong> y control de contenidos,
          además de <strong>captación y edición</strong> para highlights del evento.
        </>
      ),
    },
    // Si luego añades un cuarto item, la grid ya está lista para 4 columnas en desktop
  ];

  return (
    <div className="service-page">
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
            alt="Producción audiovisual en escenario para eventos"
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="empty"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol>
              {breadcrumbs.map((b, i) => (
                <li key={b.url}>
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.url}>{b.name}</Link>
                  ) : (
                    <span aria-current="page">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="service-hero__title">Eventos</h1>
          <h2 className="service-hero__subtitle">
            Soluciones audiovisuales coordinadas para conciertos, festivales y ferias.
          </h2>
        </div>
      </main>

      {/* Resumen */}
      <section className="section section--alt">
        <div className="container">
          <p className="section__copy">
            Podemos plantear soluciones para <strong>conciertos, festivales, ferias y eventos corporativos</strong>, seleccionar la tecnología y coordinar profesionales y proveedores especializados. La captación, el streaming, la mezcla, las pantallas y la gestión de señales se definen según las necesidades del evento.
          </p>

        {/* Bloques por vertical */}
        <div className="summary-grid">
          {items.map((c, i) => (
            <motion.article
              key={c.t}
              className="summary-card"
              initial={reduce ? {} : { opacity: 0, y: 10 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              {c.img ? (
                <Image
                  src={src(c.img)}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 900px) 25vw, 100vw"
                  priority={i === 0}
                  placeholder="empty"
                  className="summary-card__bg"
                />
              ) : null}

              <div className="summary-content">
                <h3 className="summary-card__title">{c.t}</h3>
                <p className="summary-card__desc">{c.d}</p>
              </div>
            </motion.article>
          ))}
        </div>

          {/* Bloque de capacidades (chips) */}
          <ul className="evt-chips">
            {[
              "Captación multicámara según proyecto",
              "Streaming (RTMP, SRT, plataformas)",
              "Cámaras y perfiles técnicos a coordinar",
              "Mezcladores/Procesadores HD/4K",
              "Reparto/gestión de señales",
              "Intercom & tally",
              "Grabación y entregables",
            ].map((x) => (
              <li key={x} className="evt-chip">{x}</li>
            ))}
          </ul>

          <div style={{ marginTop: "1rem" }}>
            <a href="/contacto" className="btn-cta sheen">Solicitar información</a>
          </div>
        </div>
      </section>
    </div>
  );
}
