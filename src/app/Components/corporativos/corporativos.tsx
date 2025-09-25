"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./corporativos.css";

export default function Corporativos() {
  const reduce = useReducedMotion();

  const brand = {
    name: "MyL3D",
    url: "https://www.myl3d.es/",
    logo: "https://www.myl3d.es/logo.png",
    ig: "https://www.instagram.com/myl3d/",
  };

  const breadcrumbs = [
    { name: "Inicio", url: "/" },
    { name: "Soluciones corporativas", url: "/corporativo" },
  ];

  const summary = [
    {
      id: "salas",
      t: "Salas de reunión",
      d: (
        <>
          Sistemas de <strong>videoconferencia</strong> ideales para trabajo híbrido, con
          <strong> cámaras inteligentes</strong> y <strong>audio de alta calidad</strong>.
          Conectividad y usabilidad cuidada para reuniones fluidas.
        </>
      ),
    },
    {
      id: "coworking",
      t: "Coworking",
      d: (
        <>
          Soluciones para <strong>espacios compartidos</strong>: videoconferencia,
          <strong> integración A/V completa</strong> y kits con todo lo necesario para
          colaboración eficaz.
        </>
      ),
    },
    {
      id: "salon",
      t: "Salón de actos",
      d: (
        <>
          Imagen de <strong>alta calidad</strong> para que todos vean con claridad; espacios
          versátiles que integran <strong>presentaciones multimedia</strong> con
          <strong> control sencillo</strong>.
        </>
      ),
    },
  ];

  return (
    <>
      {/* JSON-LD: Organization + Service + BreadcrumbList */}
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: brand.name,
              url: brand.url,
              logo: brand.logo,
              sameAs: [brand.ig],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Soluciones audiovisuales corporativas",
              provider: {
                "@type": "Organization",
                name: brand.name,
                url: brand.url,
                logo: brand.logo,
              },
              areaServed: "ES",
              url: `${brand.url}corporativo`,
              description:
                "Integración llave en mano de videoconferencia, audio profesional y visualización para empresas.",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((b, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: b.name,
                item: `${brand.url.replace(/\/$/, "")}${b.url}`,
              })),
            },
          ]),
        }}
      />

      <SiteHeader logoAlt={brand.name} />

      {/* HERO */}
      <main id="service-hero" className="service-hero">
        <div className="service-hero__bg" aria-hidden="true">
          <Image
            src="/hero.jpg"
            alt="" /* decorativo */
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={72}
            placeholder="blur"
            /* TODO: sustituye por tu blurDataURL real */
            blurDataURL="data:image/jpeg;base64,/9j/2wBD..."
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className="container">
          {/* Breadcrumbs */}
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

          <h1 className="service-hero__title">Soluciones corporativas</h1>
          <h2 className="service-hero__subtitle">
            Integración audiovisual llave en mano para salas, coworkings y auditorios.
          </h2>
        </div>
      </main>

      {/* Resumen corporativo */}
      <section className="section section--alt">
        <div className="container">
          <motion.p
            className="section__copy"
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            Amplia gama de soluciones audiovisuales para mejorar la colaboración y la comunicación
            en la empresa, adaptadas a cada cliente. Integración llave en mano con equipos fiables
            y operación sencilla.
          </motion.p>

          {/* Cards clicables */}
          <ul className="summary-grid" role="list">
            {summary.map((c, i) => (
              <li key={c.id}>
                <motion.article
                  className="summary-card"
                  initial={reduce ? {} : { opacity: 0, y: 10 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`#${c.id}`} className="summary-card__link">
                    <div className="summary-thumb" aria-hidden="true" />
                    <h2 className="summary-card__title">{c.t}</h2>
                    <p>{c.d}</p>
                  </Link>
                </motion.article>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "1rem" }}>
            <Link href="/contacto" className="btn-cta sheen" prefetch>
              Solicitar información
            </Link>
          </div>
        </div>
      </section>


    </>
  );
}
