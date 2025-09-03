"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./carteleria-digital.css";

export default function CarteleriaDigital() {
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
            src="/img/carteleria-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={72}
            placeholder="blur"
            // reemplaza por tu blurDataURL real generado (o quita esta línea)
            blurDataURL="data:image/jpeg;base64,/9j/2wBD..."
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="container">
          <h1 className="service-hero__title">Cartelería digital</h1>
        </div>
      </main>

      {/* SECCIÓN: Cartelería digital */}
      <section id="about" className="section section--alt">
        <div className="container about-grid">
          {/* Texto */}
          <div className="about-text">
            <h2 className="section__title" style={{ color: "#000" }}>
              — {/* subtítulo opcional o quítalo */}
            </h2>

            <p className="section__copy">
              Diseñamos e integramos <strong>cartelería digital</strong> para exteriores, interiores y retail:
              pantallas LED y <strong>monitores profesionales 24/7</strong>, con <strong>gestión de contenidos
              remota y centralizada</strong> para publicar información relevante en el momento adecuado.
            </p>

            {/* Bloques OUTDOOR / INDOOR / RETAIL */}
            <div className="cd-grid">
              {[
                {
                  t: "Outdoor",
                  d: (
                    <>
                      <strong>Pantallas LED y monitores 24/7</strong> preparados para entornos exigentes y
                      <strong> alto brillo</strong> para máxima visibilidad en exterior.
                    </>
                  ),
                },
                {
                  t: "Indoor",
                  d: (
                    <>
                      <strong>LED + monitores profesionales</strong> con múltiples resoluciones y niveles de brillo.
                      Control <strong>remoto y centralizado</strong> de contenidos para cadenas y sedes.
                    </>
                  ),
                },
                {
                  t: "Retail",
                  d: (
                    <>
                      Evolución de la rotulación tradicional: <strong>señalización dinámica</strong> y
                      <strong> kioscos táctiles</strong> con TPV integrado para mejorar interacción y conversión.
                    </>
                  ),
                },
              ].map((c, i) => (
                <motion.article
                  key={c.t}
                  className="cd-card"
                  initial={reduce ? {} : { opacity: 0, y: 10 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </motion.article>
              ))}
            </div>

            {/* Beneficios */}
            <ul className="cd-bullets">
              <li>Operación <strong>24/7</strong> y alta fiabilidad</li>
              <li><strong>Alto brillo</strong> y formatos a medida (indoor/outdoor)</li>
              <li><strong>Gestión remota</strong> y multi-sede</li>
              <li><strong>Interactividad</strong> con kioscos táctiles (opcional)</li>
            </ul>

            <a href="/contacto" className="btn-cta sheen" style={{ marginTop: "1rem" }}>
              Más información
            </a>
          </div>

          {/* Imagen (derecha) */}
          <div className="about-image">
            <Image
              src="/about.png"
              alt="Cartelería digital: pantallas LED y monitores 24/7"
              width={800}
              height={600}
              sizes="(min-width: 1024px) 520px, 100vw"
              quality={70}
              placeholder="empty"
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: 12, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
