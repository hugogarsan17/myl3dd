"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./corporativos.css";

export default function Corporativos() {
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

      {/* HERO/Banner servicio – optimizado con next/image */}
      <main id="service-hero" className="service-hero" /* sin style inline */>
        <div className="service-hero__bg">
          <Image
            src="/img/corporativos-hero.jpg"
            alt=""
            fill
            priority              // sube el LCP
            sizes="100vw"
            quality={72}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBD..." // opcional: pon tu blurDataURL real
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <h1 className="service-hero__title">Soluciones corporativas</h1>
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

          <div className="summary-grid">
            {[
              {
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
                t: "Salón de actos",
                d: (
                  <>
                    Imagen de <strong>alta calidad</strong> para que todos vean con claridad; espacios
                    versátiles que integran <strong>presentaciones multimedia</strong> con
                    <strong> control sencillo</strong>.
                  </>
                ),
              },
            ].map((c, i) => (
              <motion.article
                key={c.t}
                className="summary-card"
                initial={reduce ? {} : { opacity: 0, y: 10 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="summary-thumb" />
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </motion.article>
            ))}
          </div>

          <div style={{ marginTop: "1rem" }}>
            <a href="/contacto" className="btn-cta sheen">Pide tu propuesta</a>
          </div>
        </div>
      </section>
    </>
  );
}
