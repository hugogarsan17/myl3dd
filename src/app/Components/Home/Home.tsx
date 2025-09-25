"use client";

import Script from "next/script";
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

// Indicador/flotante "scroll down"
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
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.a>
  );
}

export default function Home() {
  return (
    <>
    <meta name="google-site-verification" content="F2KbcllmUmkhOsHGLBPPZZtBUPRVPvrA8_cJe1pNySo" />
      <Script id="ld-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org", "@type":"Organization", name:"Nombre de la marca", url:"https://www.tu-dominio.com/", logo:"https://www.tu-dominio.com/logo.png", sameAs:["https://www.instagram.com/tumarca/"] }) }}
      />

      <SiteHeader logoSrc="/logo.png" logoAlt="Nombre de la marca" />

      {/* HERO */}
      <main id="home" className="hero">
        <motion.section className="container hero__inner" aria-labelledby="hero-title"
          variants={container} initial="hidden" animate="show">
          <motion.h1 id="hero-title" className="hero__title" variants={item}>
            <span className="accent accent--glow">Soluciones</span> audiovisuales
          </motion.h1>
          <motion.div className="hero__cta" variants={item}>
            <h2><i>Innovación visual para cada espacio</i></h2>
            <motion.a className="btn-cta sheen" href="#about" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Más información
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Indicador de scroll */}
        <ScrollDown />  
      </main>

{/* SECCIÓN: Quiénes somos */}
<section id="about" className="section section--alt">
  <div className="container about-grid">
    {/* Columna texto */}
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
          En <strong>MyL3d</strong> somos especialistas en
          <strong> soluciones audiovisuales llave en mano</strong> para empresas, marcas e instituciones
          que buscan generar impacto en sus <strong>eventos corporativos, conferencias, ferias y presentaciones</strong>.
          </p>


                <p>
          Gracias a nuestra experiencia en el sector audiovisual, acompañamos a cada cliente en todo el proceso:
          desde el <strong>asesoramiento inicial</strong> y el <strong>diseño de la propuesta técnica</strong>,
          hasta la instalación, operación en el evento y soporte postventa.</p>
          <p>
          Nos adaptamos a tus necesidades para crear <strong>experiencias visuales memorables</strong>
          que refuercen la identidad de tu marca y capten la atención de tu público.
        </p>

                <p>
          Si buscas una empresa de confianza para la
          <strong>producción audiovisual de tu evento</strong>, en <strong>MyL3d</strong> encontrarás un equipo comprometido con
          la innovación, la puntualidad y la excelencia.
        </p>



      </motion.div>
    </div>{/* <-- cierre about-text */}

    {/* Columna imagen (hermana de about-text) */}
    <div className="about-image">
      <img src="/about.png" alt="Equipo trabajando en soluciones audiovisuales" />
    </div>
  </div>{/* <-- cierre container */}
</section>


      {/* SECCIÓN: Servicios */}
      <section id="services" className="section">
        <div className="container">
          <motion.h2 variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="section__title">
            Servicios
          </motion.h2>
          <p>
          Nuestro objetivo es ofrecer <strong>tecnología audiovisual de vanguardia</strong>,
          fácil de usar, confiable y con un acabado 100% profesional,
          para que puedas centrarte en tu mensaje mientras nosotros nos ocupamos de la parte técnica.
        </p>

        <p>Ponemos a tu disposición un amplio catálogo de servicios audiovisuales que incluye:</p>
<div className="cards">
  {[
    { t: "Cartelería digital", d: "LED/monitores para outdoor, indoor y retail, con gestión remota de contenidos.", img: "carteleria-digital", href: "/servicios/Carteleria-digital" },
    { t: "Eventos", d: "Realización y streaming con cámaras PTZ, procesadores y mezcladores HD/4K.", img: "eventos", href: "/servicios/eventos" },
    { t: "Corporativo", d: "Salas de reunión y coworking con videoconferencia, audio pro y reserva de salas.", img: "corporativo", href: "/servicios/corporativos" },
    { t: "Cultura y ocio", d: "Experiencias inmersivas en teatros, museos, discotecas y centros religiosos.", img: "cultura-ocio", href: "/servicios/cultura-y-ocio" },
    { t: "Educación", d: "Aulas interactivas: monitores táctiles, cámaras 4K y audio de alta cobertura.", img: "educacion", href: "/servicios/educacion" },
    { t: "Salas de control", d: "Videowalls para visualización en tiempo real y toma de decisiones ágil.", img: "salas-control", href: "/servicios/salas-de-control" },
  ].map((c, i) => (
    <motion.article
      key={c.t}
      className="card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.08 * i }}
    >
      <Link href={c.href} className="card-link">
        <h3>{c.t}</h3>
        <p>{c.d}</p>
      </Link>
    </motion.article>
  ))}
</div>
        </div>
      </section>
      <style jsx global>{`
        html { scroll-behavior: smooth; }

        /* Hero */
        .hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 5rem 0 6rem;
          background:
            linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
            url("/hero.jpg") center / cover no-repeat fixed;
          isolation: isolate;
        }

        .hero__inner {
          width: 100%;
          min-height: 100vh;
          padding-top: 92px;
          display: grid;
          align-items: center;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(1rem, 4vw, 4rem);
        }

        .hero__title {
          margin: 0;
          font-weight: 800;
          line-height: 1.02;
          font-size: clamp(2.2rem, 7.8vw, 5.4rem);
          color: var(--muted);
          transition: color 0.2s ease;
        }

        .accent {
          color: #3001ca;
          transition: color 0.2s ease;
        }

        .accent--glow {
          text-shadow: 0 0 18px rgba(48, 1, 202, 0.35);
        }

        .hero__title:hover {
          color: #3001ca;
        }

        .hero__title:hover .accent {
          color: #fff;
        }

        .hero__cta {
          justify-self: end;
          align-self: center;
          text-align: left;
        }

        .hero__cta h2 {
          margin: 0 0 1rem;
          color: var(--muted);
          font-weight: 600;
        }

        .btn-cta {
          display: inline-block;
          text-decoration: none;
          background: #3001ca;
          color: #fff;
          font-weight: 700;
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          padding: 1rem 1.6rem;
          border-radius: 14px;
          transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
        }

        .btn-cta:hover {
          transform: translateY(-1px);
          background: #fff;
          color: #3001ca;
        }

        /* Header */
        .navbar {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          background: var(--glass);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .navbar__inner {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          color: #0b0b0b;
          font-weight: 800;
          padding: 0.6rem 1.1rem;
          border-radius: 0.5rem;
        }

        .nav__toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          color: var(--text, #fff);
          cursor: pointer;
        }

        .nav__links {
          list-style: none;
          display: flex;
          gap: 2.25rem;
          margin: 0;
          padding: 0;
        }

        .nav__links a,
        .dropdown__trigger {
          color: var(--text);
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.2px;
          transition: opacity 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .nav__links a:hover {
          opacity: 0.85;
        }

        .nav__item.has-dropdown details {
          position: relative;
        }

        .nav__item.has-dropdown summary::-webkit-details-marker {
          display: none;
        }

        .dropdown__chevron {
          transition: transform 0.15s ease;
        }

        .nav__item.has-dropdown details[open] .dropdown__chevron {
          transform: rotate(180deg);
        }

        .dropdown__menu {
          position: absolute;
          top: calc(100% + 0.6rem);
          left: 0;
          min-width: 220px;
          padding: 0.5rem;
          margin: 0;
          list-style: none;
          background: var(--glass, rgba(0, 0, 0, 0.45));
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 100;
        }

        .dropdown__menu li {
          margin: 0;
        }

        .dropdown__menu a {
          display: block;
          padding: 0.6rem 0.75rem;
          border-radius: 8px;
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          white-space: nowrap;
          transition: background 0.12s ease, opacity 0.12s ease;
        }

        .dropdown__menu a:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Content sections */
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .section {
          padding: 5rem 0;
        }

        .section--alt {
          background: #fff;
        }

        .section__title {
          font-size: clamp(1.6rem, 2vw + 1rem, 2.25rem);
          margin-bottom: 0.75rem;
        }

        .section__copy {
          color: #000;
          max-width: 70ch;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        .about-image img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
        }

        .cards {
          display: grid;
          gap: 1rem;
          margin-top: 1rem;
        }

        .card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 1rem;
          background: #fff;
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .card-link {
          display: block;
          color: inherit;
          text-decoration: none;
          height: 100%;
        }

        .card-link:hover {
          filter: brightness(1.03);
        }

        .card--with-image {
          position: relative;
          background-size: cover;
          background-position: center;
          border-radius: 14px;
          overflow: hidden;
          min-height: 200px;
          display: flex;
          align-items: flex-end;
        }

        .card__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }

        .card__content {
          position: relative;
          z-index: 1;
          padding: 1rem;
          color: #fff;
        }

        .card__content h3 {
          margin: 0 0 0.35rem;
          font-size: 1.05rem;
          font-weight: 600;
        }

        .card__content p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.85);
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 1.75rem;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-weight: 500;
        }

        .scroll-indicator__dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #3001ca;
          box-shadow: 0 0 0 6px rgba(48, 1, 202, 0.12);
        }

        .scroll-indicator__text {
          font-size: 0.95rem;
        }

        .scroll-indicator:hover {
          filter: brightness(0.9);
        }

        /* Desktop dropdown hover behaviour */
        @media (hover: hover) {
          .nav__item.has-dropdown details:not([open]) .dropdown__menu {
            display: none;
          }

          .nav__item.has-dropdown details[open] .dropdown__menu {
            display: block;
          }
        }

        @media (min-width: 640px) {
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Mobile adjustments */
        @media (max-width: 900px) {
          .container {
            padding: 0 1rem;
          }

          .section {
            padding: 3.5rem 0;
          }

          .section__title {
            font-size: clamp(1.4rem, 6vw, 1.9rem);
          }

          .section__copy {
            font-size: 0.95rem;
            line-height: 1.6;
            max-width: 65ch;
          }

          .hero {
            background-attachment: scroll;
            min-height: 92vh;
          }

          .hero__inner {
            min-height: auto;
            padding-top: 88px;
            grid-template-columns: 1fr;
            gap: 1.25rem;
            text-align: center;
          }

          .hero__title {
            font-size: clamp(2rem, 9vw, 3rem);
            line-height: 1.08;
          }

          .hero__cta {
            justify-self: center;
          }

          .btn-cta {
            font-size: 1rem;
            padding: 0.9rem 1.2rem;
            border-radius: 12px;
          }

          .navbar {
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .navbar__inner {
            height: 68px;
          }

          .logo {
            padding: 0.5rem 0.9rem;
          }

          .nav__toggle {
            display: inline-flex;
          }

          .nav {
            position: fixed;
            inset: 72px 0 auto 0;
            background: rgba(0, 0, 0, 0.92);
            backdrop-filter: blur(8px);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: 0.75rem 1rem 1.25rem;
            transform: translateY(-16px);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.18s ease, opacity 0.18s ease;
            z-index: 60;
          }

          .nav.nav--open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .nav__links {
            flex-direction: column;
            gap: 0.25rem;
          }

          .nav__links a,
          .dropdown__trigger {
            display: block;
            padding: 0.9rem 1rem;
            border-radius: 10px;
          }

          .nav__links a:hover {
            background: rgba(255, 255, 255, 0.08);
          }

          .nav__item.has-dropdown details {
            position: static;
          }

          .dropdown__menu {
            position: static;
            background: transparent;
            border: 0;
            box-shadow: none;
            padding: 0.25rem 0 0.5rem;
            margin-left: 0.25rem;
          }

          .dropdown__menu a {
            padding: 0.6rem 1rem;
            font-weight: 500;
          }

          .about-grid {
            gap: 1.25rem;
          }

          .scroll-indicator {
            bottom: 1rem;
            gap: 0.4rem;
          }

          .scroll-indicator__text {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 901px) {
          .nav {
            display: block;
          }

          .nav__toggle {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .btn-cta,
          .card,
          .dropdown__chevron {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
