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
      img: "/res/Stand ISE.png", // ideal renombrar a /res/stand-ise.jpg
      d: (
        <>
          Cobertura <strong>multicámara</strong> con cámaras PTZ y operadores, mezcla en
          <strong> HD/4K</strong>, pantallas LED de escenario y side screens, e <strong>intercom</strong> para equipo técnico.
        </>
      ),
    },
    {
      t: "Festivales",
      img: "/res/stand.png",
      d: (
        <>
          <strong>Realización en directo</strong> y <strong>streaming</strong> simultáneo, ruteo de señales
          a pantallas de recinto, <strong>grabación</strong> y <strong>replays</strong> para redes/social wall.
        </>
      ),
    },
    {
      t: "Ferias y Expos",
      img: "/res/ocio.png",
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
            Producción audiovisual integral para conciertos, festivales y ferias.
          </h2>
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
          {items.map((c, i) => (
            <motion.article
              key={c.t}
              className="summary-card"
              initial={reduce ? {} : { opacity: 0, y: 10 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div className="summary-thumb">
                {c.img ? (
                  <Image
                    src={src(c.img)}
                    alt={c.t}
                    fill
                    // 4 columnas >= 900px, si no 100vw (la card ocupa ancho completo)
                    sizes="(min-width: 900px) 25vw, 100vw"
                    priority={i === 0}
                    placeholder="empty"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="summary-thumb__fallback" aria-hidden />
                )}
              </div>

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
            <a href="/contacto" className="btn-cta sheen">Solicitar información</a>
          </div>
        </div>
      </section>
    </>
  );
}
