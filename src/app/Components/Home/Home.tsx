"use client";

import Script from "next/script";
import { motion, type Variants } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";

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
    Nuestro objetivo es ofrecer <strong>tecnología audiovisual de vanguardia</strong>, 
    fácil de usar, confiable y con un acabado 100% profesional, 
    para que puedas centrarte en tu mensaje mientras nosotros nos ocupamos de la parte técnica.
  </p>

  <p>Ponemos a tu disposición un amplio catálogo de servicios audiovisuales que incluye:</p>

  <ul>
    <li><strong>Pantallas LED de gran formato</strong> para interiores y exteriores.</li>
    <li><strong>Monitores profesionales</strong> de alta definición ideales para stands, salas de juntas y presentaciones.</li>
    <li><strong>Realización multicámara y streaming en directo</strong>, con transmisión en alta calidad a cualquier plataforma.</li>
    <li><strong>Sistemas de control y gestión audiovisual</strong> que garantizan estabilidad y máxima eficiencia.</li>
  </ul>

  <p>
    Gracias a nuestra experiencia en el sector audiovisual, acompañamos a cada cliente en todo el proceso: 
    desde el <strong>asesoramiento inicial</strong> y el <strong>diseño de la propuesta técnica</strong>, 
    hasta la instalación, operación en el evento y soporte postventa. 
    Nos adaptamos a tus necesidades para crear <strong>experiencias visuales memorables</strong> 
    que refuercen la identidad de tu marca y capten la atención de tu público.
  </p>

  <p>
    Si buscas una empresa de confianza para la 
    <strong>producción audiovisual de tu evento</strong>, en <strong>MyL3d</strong> encontrarás un equipo comprometido con 
    la innovación, la puntualidad y la excelencia.
  </p>
</motion.div>
          <div className="about-image">
<img src="/about.png" alt="Equipo trabajando en soluciones audiovisuales" />
          </div>
        </div>
      </section>

<style jsx global>{`
  .about-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; }
  .about-text { order: 1; }
  .about-image { order: 2; }
  .about-image img { width: 100%; height: auto; border-radius: 12px; }
  @media(min-width: 768px){
    .about-grid { grid-template-columns: 1fr 1fr; }
    .about-text { order: 1; }
    .about-image { order: 2; }
  }
`}</style>

      {/* SECCIÓN: Servicios */}
      <section id="services" className="section">
        <div className="container">
          <motion.h2 variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="section__title">
            Servicios
          </motion.h2>


          <div className="cards">
            {[
              { t: "Cartelería digital", d: "LED/monitores para outdoor, indoor y retail, con gestión remota de contenidos.", img: "carteleria-digital" },
              { t: "Eventos", d: "Realización y streaming con cámaras PTZ, procesadores y mezcladores HD/4K.", img: "carteleria-digital" },
              { t: "Corporativo", d: "Salas de reunión y coworking con videoconferencia, audio pro y reserva de salas.", img: "carteleria-digital" },
              { t: "Cultura y ocio", d: "Experiencias inmersivas en teatros, museos, discotecas y centros religiosos.", img: "carteleria-digital" },
              { t: "Educación", d: "Aulas interactivas: monitores táctiles, cámaras 4K y audio de alta cobertura.", img: "carteleria-digital" },
              { t: "Salas de control", d: "Videowalls para visualización en tiempo real y toma de decisiones ágil.", img: "carteleria-digital" },
            ].map((c, i) => (
              <motion.article key={c.t} className="card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 * i }}>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Estilos mínimos + scroll suave */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
        .hero { position: relative; min-height: 82vh; display: grid; place-items: center; padding: 5rem 0 6rem; }
        .section { padding: 5rem 0; }
        .section--alt { background: #fff; }
        .section__title { font-size: clamp(1.6rem, 2vw + 1rem, 2.25rem); margin-bottom: 0.75rem; }
        .section__copy { color: #000000ff; max-width: 70ch; }
        .cards {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

@media (min-width: 640px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
        .card { border: 1px solid #e5e7eb; border-radius: 14px; padding: 1rem; background: #000000ff; }

        /* Indicador de scroll */
        .scroll-indicator { position: absolute; left: 50%; bottom: 1.75rem; transform: translateX(-50%); display: inline-flex; align-items: center; gap: .5rem; color: #111827; text-decoration: none; font-weight: 500; }
        .scroll-indicator__dot { width: 8px; height: 8px; border-radius: 999px; background: #3001CA; box-shadow: 0 0 0 6px rgba(48,1,202,.12); }
        .scroll-indicator__text { font-size: .95rem; }
        .scroll-indicator:hover { filter: brightness(0.9); }
      `}</style>
    </>
  );
}
