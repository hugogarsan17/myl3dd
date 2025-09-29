"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ScrollDown() {
  return (
    <motion.a
      href="#services"
      className="scroll-indicator"
      aria-label="Desplázate para ver más"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, 6, 0], opacity: 1 }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="scroll-indicator__dot" />
      <span className="scroll-indicator__text">Desliza</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.a>
  );
}

export default function Home() {
  return (
    <>
      <Script
        id="home-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.myl3d.es/#webpage",
                url: "https://www.myl3d.es/",
                name: "Soluciones audiovisuales y alquiler de pantallas LED en España | MyL3d",
                description:
                  "MyL3d ofrece cartelería digital, alquiler de pantallas LED y producción audiovisual para eventos corporativos, retail y cultura en toda España.",
                inLanguage: "es-ES",
                isPartOf: { "@id": "https://www.myl3d.es/#website" },
              },
              {
                "@type": "Service",
                name: "Soluciones audiovisuales MyL3d",
                url: "https://www.myl3d.es/",
                provider: { "@id": "https://www.myl3d.es/#organization" },
                areaServed: { "@type": "Country", name: "España" },
                serviceType: [
                  "Alquiler de pantallas LED",
                  "Cartelería digital",
                  "Producción audiovisual para eventos",
                ],
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "EUR",
                    price: "0",
                    description: "Presupuestos personalizados a medida de cada proyecto.",
                  },
                },
              },
            ],
          }),
        }}
      />

      <SiteHeader logoSrc="/logo.png" logoAlt="MyL3d, especialistas en soluciones audiovisuales" />

      <main id="home" className="hero">
        <motion.section
          className="container hero__inner"
          aria-labelledby="hero-title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 id="hero-title" className="hero__title" variants={item}>
            <span className="accent accent--glow">Soluciones</span> audiovisuales integrales
          </motion.h1>
          <motion.p className="hero__subtitle" variants={item}>
            Diseño, alquiler e instalación de pantallas LED, cartelería digital y sistemas audiovisuales para eventos, retail y espacios corporativos en toda España.
          </motion.p>
          <motion.div className="hero__cta" variants={item}>
            <motion.a className="btn-cta sheen" href="#about" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Más información
            </motion.a>
            <Link className="hero__secondary" href="/contacto">
              Solicitar presupuesto
            </Link>
          </motion.div>
        </motion.section>

        <ScrollDown />
      </main>

      <section id="about" className="section section--alt">
        <div className="container about-grid">
          <div className="about-text">
            <motion.h2
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="section__title"
              style={{ color: "#000" }}
            >
              Quiénes somos
            </motion.h2>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="section__copy"
            >
              <p>
                En <strong>MyL3d</strong> diseñamos e implantamos <strong>soluciones audiovisuales llave en mano</strong> para empresas, instituciones y marcas que buscan experiencias memorables en ferias, congresos y retail.
              </p>
              <p>
                Nuestro equipo acompaña cada proyecto desde el <strong>asesoramiento técnico</strong> y la ingeniería previa hasta la instalación, operación en directo y soporte post evento.
              </p>
              <p>
                Apostamos por la innovación y la fiabilidad para crear <strong>entornos inmersivos</strong> que refuercen la identidad de tu marca. Descubre nuestras propuestas de
                {" "}
                <Link href="/servicios/eventos">producción audiovisual para eventos</Link>,
                {" "}
                <Link href="/servicios/corporativos">salas corporativas</Link>
                {" "}y
                {" "}
                <Link href="/servicios/cultura-y-ocio">espacios culturales y de ocio</Link>.
              </p>
            </motion.div>
          </div>

          <div className="about-image">
            <Image
              src="/about.png"
              alt="Equipo técnico de MyL3d instalando pantallas LED"
              width={720}
              height={480}
              priority
              className="about-image__media"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <motion.h2 variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="section__title">
            Servicios
          </motion.h2>
          <p>
            Nuestro objetivo es ofrecer <strong>tecnología audiovisual de vanguardia</strong>, fácil de usar, confiable y con un acabado 100% profesional para que puedas centrarte en tu mensaje mientras nosotros nos ocupamos de la parte técnica.
          </p>
          <p>
            Ponemos a tu disposición un amplio catálogo de servicios audiovisuales que incluye <Link href="/servicios/Carteleria-digital">cartelería digital</Link>,
            {" "}
            <Link href="/servicios/eventos">realización y streaming para eventos corporativos</Link>, aulas híbridas para educación y videowalls para salas de control.
          </p>

          <div className="cards">
            {[
              {
                t: "Cartelería digital",
                d: "LED/monitores para outdoor, indoor y retail con gestión remota de contenidos.",
                href: "/servicios/Carteleria-digital",
              },
              {
                t: "Eventos",
                d: "Realización y streaming con cámaras PTZ, procesadores y mezcladores HD/4K.",
                href: "/servicios/eventos",
              },
              {
                t: "Corporativo",
                d: "Salas de reunión, coworking y auditorios con videoconferencia y audio profesional.",
                href: "/servicios/corporativos",
              },
              {
                t: "Cultura y ocio",
                d: "Experiencias inmersivas en teatros, museos, discotecas y centros culturales.",
                href: "/servicios/cultura-y-ocio",
              },
              {
                t: "Educación",
                d: "Aulas interactivas con monitores táctiles, cámaras 4K y audio de alta cobertura.",
                href: "/servicios/educacion",
              },
              {
                t: "Salas de control",
                d: "Videowalls y sistemas de visualización en tiempo real para operaciones críticas.",
                href: "/servicios/salas-de-control",
              },
            ].map((card, index) => (
              <motion.article
                key={card.t}
                className="card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
              >
                <Link href={card.href} className="card-link">
                  <h3>{card.t}</h3>
                  <p>{card.d}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section section--alt">
        <div className="container">
          <motion.h2
            className="section__title"
            style={{ color: "#000" }}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            ¿Por qué MyL3d?
          </motion.h2>
          <motion.p
            className="section__copy"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Somos especialistas en <strong>alquiler de pantallas LED en España</strong>, integración de sistemas audiovisuales y <strong>señalización digital</strong> para marcas que buscan destacar. Trabajamos proyectos llave en mano: diseño técnico, instalación, operación en directo y soporte posterior.
          </motion.p>

          <div className="value-grid" role="list">
            {[
              {
                title: "Equipo experto",
                description: "Ingenieros y técnicos con experiencia en eventos corporativos, ferias, retail y espectáculos en vivo.",
              },
              {
                title: "Tecnología a medida",
                description: "Seleccionamos pantallas LED, procesadores y sonido profesional adaptado a cada espacio y presupuesto.",
              },
              {
                title: "Cobertura nacional",
                description: "Prestamos servicio en las principales ciudades de España con logística y montaje rápido.",
              },
            ].map((value) => (
              <motion.article
                key={value.title}
                className="value-card"
                role="listitem"
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.p
            className="section__copy"
            style={{ marginTop: "1.5rem" }}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            ¿Necesitas asesoramiento? <Link href="/contacto">Contacta con nuestro equipo</Link> para recibir un presupuesto personalizado y descubrir cómo potenciar tu próxima acción con audiovisuales profesionales.
          </motion.p>
        </div>
      </section>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
        .hero { position: relative; min-height: 82vh; display: grid; place-items: center; padding: 5rem 0 6rem; }
        .hero__inner { text-align: center; }
        .hero__title { font-size: clamp(2.2rem, 3vw + 1rem, 3.5rem); line-height: 1.1; }
        .hero__subtitle { margin: 1rem auto 1.5rem; max-width: 65ch; font-size: clamp(1.05rem, 1.4vw + 1rem, 1.35rem); color: #e2e8f0; }
        .hero__cta { display: flex; flex-direction: column; gap: 0.75rem; align-items: center; }
        .hero__secondary { color: #e2e8f0; text-decoration: underline; font-weight: 500; }
        .section { padding: 5rem 0; }
        .section--alt { background: #fff; }
        .section__title { font-size: clamp(1.6rem, 2vw + 1rem, 2.25rem); margin-bottom: 0.75rem; }
        .section__copy { color: #0f172a; max-width: 70ch; }

        .about-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; }
        .about-image__media { width: 100%; height: auto; border-radius: 12px; object-fit: cover; }

        .cards { display: grid; gap: 1rem; margin-top: 1.25rem; }
        .card { border: 1px solid #1e293b; border-radius: 14px; padding: 1.25rem; background: #020617; min-height: 170px; }
        .card-link { color: #f8fafc; text-decoration: none; display: block; height: 100%; }
        .card-link h3 { font-size: 1.15rem; margin-bottom: 0.4rem; }
        .card-link:hover,
        .card-link:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(48, 1, 202, 0.35); border-radius: 12px; }

        .value-grid { display: grid; gap: 1.25rem; margin-top: 1.5rem; }
        .value-card { background: #ffffff; border-radius: 16px; border: 1px solid #e5e7eb; padding: 1.5rem; box-shadow: 0 12px 30px -22px rgba(15, 23, 42, 0.75); color: #0f172a; }
        .value-card h3 { font-size: 1.2rem; margin-bottom: 0.5rem; }
        .value-card p { margin: 0; }

        .scroll-indicator { position: absolute; left: 50%; bottom: 1.75rem; transform: translateX(-50%); display: inline-flex; align-items: center; gap: 0.5rem; color: #e2e8f0; text-decoration: none; font-weight: 500; }
        .scroll-indicator__dot { width: 8px; height: 8px; border-radius: 999px; background: #3001CA; box-shadow: 0 0 0 6px rgba(48, 1, 202, 0.12); }
        .scroll-indicator__text { font-size: 0.95rem; }
        .scroll-indicator:hover { filter: brightness(1.1); }

        @media (min-width: 640px) {
          .cards { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1.05fr 0.95fr; }
          .hero__cta { flex-direction: row; }
          .hero__cta { gap: 1rem; }
          .value-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (min-width: 1024px) {
          .cards { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </>
  );
}
