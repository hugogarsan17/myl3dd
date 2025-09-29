"use client";

import Script from "next/script";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import Link from "next/link";
import "./Home.css"

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

      <SiteHeader />

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
                <Link className="link-servicios" href="/servicios/eventos">producción audiovisual para eventos</Link>,
                {" "}
                <Link className="link-servicios" href="/servicios/corporativos">salas corporativas</Link>
                {" "}y
                {" "}
                <Link className="link-servicios" href="/servicios/cultura-y-ocio">espacios culturales y de ocio</Link>.
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
            Ponemos a tu disposición un amplio catálogo de servicios audiovisuales que incluye <Link className="link-servicios" href="/servicios/Carteleria-digital">cartelería digital</Link>,
            {" "}
            <Link className="link-servicios" href="/servicios/eventos">realización y streaming para eventos corporativos</Link>, <Link className="link-servicios" href={"/servicios/educacion"}>aulas híbridas para educación</Link> y <Link className="link-servicios" href={"/servicios/salas-de-control"}>videowalls para salas de control</Link>.
          </p>

<div className="cards">
  {[
    { t: "Cartelería digital", d: "LED/monitores para outdoor, indoor y retail con gestión remota de contenidos.", href: "/servicios/Carteleria-digital" },
    { t: "Eventos", d: "Realización y streaming con cámaras PTZ, procesadores y mezcladores HD/4K.", href: "/servicios/eventos" },
    { t: "Corporativo", d: "Salas de reunión, coworking y auditorios con videoconferencia y audio profesional.", href: "/servicios/corporativos" },
    { t: "Cultura y ocio", d: "Experiencias inmersivas en teatros, museos, discotecas y centros culturales.", href: "/servicios/cultura-y-ocio" },
    { t: "Educación", d: "Aulas interactivas con monitores táctiles, cámaras 4K y audio de alta cobertura.", href: "/servicios/educacion" },
    { t: "Salas de control", d: "Videowalls y sistemas de visualización en tiempo real para operaciones críticas.", href: "/servicios/salas-de-control" },
  ].map((card, index) => (
    <Link key={card.href} href={card.href} className="card-link">
      <motion.article
        className="card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 * index }}
      >
        <h3>{card.t}</h3>
        <p>{card.d}</p>
      </motion.article>
    </Link>
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
    </>
  );
}
