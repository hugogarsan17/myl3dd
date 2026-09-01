"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import "./Home.css";

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const solutions = [
  { title: "Pantallas LED", text: "Soluciones LED para interior, exterior y escaparates, dimensionadas según espacio, distancia de visualización y condiciones de luminosidad.", cta: "Ver pantallas LED", image: "/res/Trabajos-6.jpg", href: "/productos" },
  { title: "Digital signage", text: "Pantallas profesionales y sistemas de gestión de contenidos para comunicar promociones, información y campañas de forma remota.", cta: "Ver digital signage", image: "/res/LCD totem.png", href: "/servicios/Carteleria-digital" },
  { title: "Proyectos audiovisuales", text: "Soluciones personalizadas para espacios corporativos, videowalls y proyectos que requieren integración audiovisual.", cta: "Cuéntanos tu proyecto", image: "/res/sala-reunion-1.png", href: "/contacto" },
];

const sectors = [
  ["Retail y comercios", "Capta la atención desde el escaparate y actualiza promociones y campañas de forma inmediata."],
  ["Gimnasios", "Comunica clases, promociones, horarios y contenidos en recepción y zonas de entrenamiento."],
  ["Hoteles", "Orienta a los huéspedes y muestra servicios, eventos e información en recepción y zonas comunes."],
  ["Restaurantes", "Actualiza menús, promociones y tiempos de espera sin sustituir soportes impresos."],
  ["Concesionarios", "Presenta modelos, prestaciones y campañas con contenidos adaptados a cada zona de exposición."],
  ["Inmobiliarias", "Da visibilidad al catálogo de inmuebles en escaparates con pantallas de alta luminosidad."],
  ["Oficinas", "Comparte información interna, reservas de salas y comunicaciones corporativas."],
  ["Centros comerciales", "Facilita la orientación y difunde campañas en puntos de alto tránsito."],
  ["Espacios corporativos", "Integra videowalls y pantallas profesionales en salas, recepciones y auditorios."],
];

const process = [
  ["Cuéntanos tu proyecto", "Explícanos qué quieres instalar y dónde."],
  ["Analizamos las necesidades", "Valoramos dimensiones, entorno, visibilidad y uso."],
  ["Preparamos la propuesta", "Definimos la solución técnica y el presupuesto."],
  ["Suministro e instalación", "Coordinamos equipos, transporte e instalación según proyecto."],
  ["Configuración y soporte", "Dejamos la solución preparada para su utilización."],
];

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <motion.div className="container hero__inner" initial="hidden" animate="show" variants={reveal}>
          <p className="hero__eyebrow">Visualización profesional para negocios</p>
          <h1 id="hero-title" className="hero__title">Pantallas LED y cartelería digital <span>para empresas</span></h1>
          <p className="hero__subtitle">Diseñamos, suministramos e instalamos soluciones de visualización profesional adaptadas a tu espacio y necesidades.</p>
          <div className="hero__cta">
            <Link className="btn-cta" href="/contacto">Solicitar presupuesto</Link>
            <a className="btn-secondary" href="#soluciones">Ver soluciones</a>
          </div>
          <p className="hero__note">Te ayudamos a elegir tamaño, brillo, resolución, control y estructura según el espacio y el uso.</p>
        </motion.div>
      </section>

      <section id="soluciones" className="section section--light">
        <div className="container">
          <p className="section__eyebrow">Qué ofrecemos</p><h2 className="section__title">Tres soluciones para comunicar mejor</h2>
          <p className="section__intro">No necesitas conocer la configuración técnica. Partimos de dónde irá la pantalla, qué quieres comunicar y cómo se verá.</p>
          <div className="solution-grid">{solutions.map((s) => <article className="solution-card" key={s.title}>
            <div className="solution-card__image"><Image src={s.image} alt={`Ejemplo de ${s.title.toLowerCase()}`} fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
            <div className="solution-card__body"><h3>{s.title}</h3><p>{s.text}</p><Link href={s.href}>{s.cta} <span aria-hidden>→</span></Link></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section section--dark solution-complete">
        <div className="container solution-complete__grid"><div><p className="section__eyebrow">Asesoramiento para tu proyecto</p><h2 className="section__title">¿No sabes qué pantalla necesitas?</h2><p>No necesitas conocer el pixel pitch, brillo, procesador o configuración técnica. Cuéntanos dónde quieres instalar la pantalla, para qué la vas a utilizar y las medidas aproximadas del espacio. Nosotros te ayudamos a definir la solución adecuada.</p><Link className="btn-cta" href="/contacto">Solicitar presupuesto</Link></div><Image src="/res/videwall.webp" alt="Videowall profesional en un entorno corporativo" width={620} height={430} /></div>
      </section>

      <section className="section section--light" id="sectores"><div className="container"><p className="section__eyebrow">Aplicaciones</p><h2 className="section__title">Soluciones para tu negocio</h2><p className="section__intro">Pantallas para informar, promocionar y orientar, adaptadas al contexto de cada espacio.</p><div className="sector-grid">{sectors.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section section--soft"><div className="container"><p className="section__eyebrow">Un proceso claro</p><h2 className="section__title">Cómo trabajamos</h2><div className="process-grid">{process.map(([title, description],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div><p className="network-note">Trabajamos junto a fabricantes, distribuidores, técnicos e instaladores especializados según las necesidades de cada proyecto.</p></div></section>

      <section className="section final-cta"><div className="container"><h2>¿No sabes qué configuración necesitas?</h2><p>Envíanos una fotografía y las medidas aproximadas del espacio. Te ayudaremos a definir la solución.</p><Link className="btn-cta" href="/contacto">Solicitar presupuesto</Link></div></section>
    </main>
  </>;
}
