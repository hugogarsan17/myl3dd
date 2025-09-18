"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./carteleria-digital.css";

export default function CarteleriaDigital() {
  const reduce = useReducedMotion();

  const cards = [
    {
      t: "Outdoor",
      d: (
        <>
          <strong>Pantallas LED y monitores de alto brillo</strong> visibles 24/7, resistentes a la intemperie y perfectos para publicidad exterior.
        </>
      ),
      bg: "/res/tótems.png",
      alt: "Pantallas exteriores",
    },
    {
      t: "Indoor",
      d: (
        <>
          <strong>Monitores profesionales</strong> con gestión centralizada, ideales para oficinas, salas de espera o espacios educativos.
        </>
      ),
      bg: "/res/interior totem.png",
      alt: "Señalización interior",
    },
    {
      t: "Retail",
      d: (
        <>
          <strong>Señalización dinámica</strong> y kioscos táctiles que potencian la interacción del cliente y aumentan la conversión.
        </>
      ),
      bg: "/res/Portada.png",
      alt: "Digital signage retail",
    },
  ];

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Nombre de la marca",
                url: "https://www.tu-dominio.com/",
                logo: "https://www.tu-dominio.com/logo.png",
                sameAs: ["https://www.instagram.com/tumarca/"],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.tu-dominio.com/" },
                  { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.tu-dominio.com/servicios" },
                  { "@type": "ListItem", position: 3, name: "Cartelería digital", item: "https://www.tu-dominio.com/carteleria-digital" },
                ],
              },
              {
                "@type": "Service",
                name: "Cartelería digital",
                serviceType: "MyL3d",
                provider: { "@type": "Organization", name: "Nombre de la marca" },
                areaServed: { "@type": "Country", name: "España" },
                description:
                  "Diseñamos e integramos cartelería digital para exteriores, interiores y retail: pantallas LED y monitores profesionales 24/7, con gestión de contenidos remota y centralizada.",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
          }),
        }}
      />

      <SiteHeader logoSrc="/logo.png" logoAlt="Nombre de la marca" />

      <main id="service-hero" className="service-hero">
        <div className="service-hero__bg" aria-hidden>
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            fetchPriority="high"
            quality={72}
            placeholder="empty"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <h1 className="service-hero__title">Cartelería digital</h1>
          <p className="service-hero__subtitle">
            Pantallas LED y monitores profesionales 24/7 con gestión remota.
          </p>
        </div>
      </main>

      <section id="about" className="section section--alt">
        <div className="container">
          <div className="about-text">
            <h2 className="section__title" style={{ color: "#000" }}>
              Soluciones de digital signage a medida
            </h2>

            <p className="section__copy">
              Diseñamos e integramos <strong>cartelería digital</strong> para exteriores, interiores y retail:
              pantallas LED y <strong>monitores profesionales 24/7</strong>, con <strong>gestión de contenidos
              remota y centralizada</strong> para publicar información relevante en el momento adecuado.
            </p>

            <div className="cd-grid">
              {cards.map((c, i) => (
                <motion.article
                  key={c.t}
                  className="cd-card cd-card--img"
                  initial={reduce ? {} : { opacity: 0, y: 10 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <div className="cd-card__bg" aria-hidden>
                    <Image
                      src={c.bg}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      priority={i === 0}
                      quality={70}
                      placeholder="empty"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div className="cd-card__overlay" />
                  <div className="cd-card__content">
                    <h3>{c.t}</h3>
                    <p>{c.d}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <ul className="cd-bullets">
              <li>Operación <strong>24/7</strong> y alta fiabilidad</li>
              <li><strong>Alto brillo</strong> y formatos a medida (indoor/outdoor)</li>
              <li><strong>Gestión remota</strong> y multi-sede</li>
              <li><strong>Interactividad</strong> con kioscos táctiles (opcional)</li>
            </ul>

            <Link href="/contacto" className="btn-cta sheen" style={{ marginTop: "1rem" }}>
              Más información
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}