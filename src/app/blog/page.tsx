import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Metadata } from "next";
import SiteHeader from "@/app/Components/site-header/Siteheader";

import "./blog.css";

const servicesChildren = [
  { href: "/servicios/Carteleria-digital", label: "Carteleria digital" },
  { href: "/servicios/cultura-y-ocio", label: "Cultura y ocio" },
  { href: "/servicios/eventos", label: "Eventos" },
  { href: "/servicios/corporativos", label: "Corporativos" },
  { href: "/servicios/educacion", label: "Educación" },
  { href: "/servicios/salas-de-control", label: "Salas de control" },
];

const posts = [
  {
    title: "Cómo planificar un evento híbrido con éxito",
    description:
      "Checklist técnico, guion y recomendaciones logísticas para ofrecer una experiencia fluida a asistentes presenciales y online.",
    href: "/blog/eventos-hibridos",
    category: "Eventos corporativos",
    readTime: "6 min de lectura",
    date: "2024-03-12",
    excerpt:
      "Analizamos los elementos esenciales para sincronizar producción audiovisual, streaming y participación de la audiencia en eventos híbridos de gran escala.",
  },
  {
    title: "Pantallas LED vs. LCD: cuál es la mejor opción para tu espacio comercial",
    description:
      "Comparamos tecnologías, costes operativos y mantenimiento para ayudarte a escoger la solución de digital signage que mejor encaja con tu negocio.",
    href: "/blog/pantallas-led-vs-lcd",
    category: "Cartelería digital",
    readTime: "5 min de lectura",
    date: "2024-02-26",
    excerpt:
      "Te explicamos cuándo apostar por paneles LED, qué ventajas ofrecen frente a LCD y cómo calcular el retorno de inversión de tu circuito de pantallas.",
  },
  {
    title: "Caso de éxito: experiencia inmersiva en museo interactivo",
    description:
      "Descubre cómo integramos pantallas LED de gran formato, sonido 3D y contenidos interactivos para transformar la visita del público en un museo tecnológico.",
    href: "/blog/caso-exito-museo-inmersivo",
    category: "Cultura y ocio",
    readTime: "7 min de lectura",
    date: "2024-01-30",
    excerpt:
      "Repasamos los hitos técnicos del proyecto, desde la ingeniería audiovisual hasta la creación de contenidos inmersivos que aumentaron el tiempo de permanencia en sala.",
  },
  {
    title: "Guía rápida para implantar cartelería digital en retail",
    description:
      "Pasos clave para definir objetivos, elegir hardware y establecer un plan de contenidos que incremente las ventas en tienda.",
    href: "/blog/guia-carteleria-digital-retail",
    category: "Retail",
    readTime: "8 min de lectura",
    date: "2023-12-12",
    excerpt:
      "Incluimos checklist de despliegue, recomendaciones de tamaños de pantalla según superficie y métricas para evaluar el éxito de la instalación.",
  },
  {
    title: "Cómo producir contenido 3D para pantallas LED gigantes",
    description:
      "Buenas prácticas para desarrollar visuales volumétricos que aprovechen la profundidad de las pantallas LED de última generación.",
    href: "/blog/contenido-3d-pantallas-led",
    category: "Producción audiovisual",
    readTime: "9 min de lectura",
    date: "2023-11-03",
    excerpt:
      "Revisamos herramientas, pipeline creativo y recomendaciones técnicas para evitar distorsiones y optimizar tiempos de render.",
  },
  {
    title: "Checklist técnico para ferias y congresos con pantallas LED",
    description:
      "Todo lo que debes revisar antes de abrir puertas: estructura, electricidad, redundancia de señal y planes de contingencia.",
    href: "/blog/checklist-pantallas-led-ferias",
    category: "Eventos",
    readTime: "6 min de lectura",
    date: "2023-09-14",
    excerpt:
      "Compartimos la metodología que emplea MyL3d para asegurar despliegues fiables en entornos de alto tráfico y montajes express.",
  },
];

export const metadata: Metadata = {
  title: "Blog y recursos audiovisuales | MyL3d",
  description:
    "Ideas, guías y casos de éxito sobre cartelería digital, pantallas LED y producción audiovisual para eventos corporativos, retail y cultura en España.",
  alternates: {
    canonical: "https://www.myl3d.es/blog",
  },
  openGraph: {
    title: "Blog y recursos audiovisuales | MyL3d",
    description:
      "Explora buenas prácticas, tendencias y casos reales de proyectos audiovisuales con pantallas LED, streaming y contenidos inmersivos.",
    url: "https://www.myl3d.es/blog",
    type: "website",
    locale: "es_ES",
    siteName: "MyL3d",
  },
};

export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog y recursos MyL3d",
            url: "https://www.myl3d.es/blog",
            description:
              "Guías, tendencias y casos prácticos sobre pantallas LED, cartelería digital y producción audiovisual profesional en España.",
            inLanguage: "es-ES",
            publisher: {
              "@type": "Organization",
              name: "MyL3d",
              url: "https://www.myl3d.es",
            },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `https://www.myl3d.es${post.href}`,
              datePublished: post.date,
              description: post.description,
              inLanguage: "es-ES",
            })),
          }),
        }}
      />

      <SiteHeader
        links={[
          { href: "/", label: "Inicio" },
          { label: "Servicios", children: servicesChildren },
          { href: "/blog", label: "Blog y recursos", ariaCurrent: "page" },
          { href: "/contacto", label: "Contacto" },
        ]}
      />

      <main className="blog">
        <section className="blog__hero">
          <div className="container">
            <motion.span className="blog__eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              Blog y recursos
            </motion.span>
            <motion.h1
              className="blog__title"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Ideas, guías y casos reales para potenciar tus proyectos audiovisuales
            </motion.h1>
            <motion.p
              className="blog__lead"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Seleccionamos contenidos con recomendaciones prácticas sobre cartelería digital, eventos híbridos, espacios culturales y producción audiovisual inmersiva.
            </motion.p>
            <motion.div className="blog__cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <Link className="blog__cta-link" href="#articulos">
                Ver artículos destacados
              </Link>
              <Link className="blog__cta-secondary" href="/contacto">
                Solicitar asesoramiento
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="articulos" className="blog__listing">
          <div className="container">
            <div className="blog__listing-header">
              <h2>Artículos destacados</h2>
              <p>
                Desde la planificación técnica hasta la creación de contenidos, aquí encontrarás guías accionables que te ayudan a sacar el máximo partido a la tecnología audiovisual.
              </p>
            </div>

            <div className="blog__grid" role="list">
              {posts.map((post) => (
                <Link key={post.href} href={post.href} className="blog__card" role="listitem">
                  <article>
                    <div className="blog__card-meta">
                      <span className="blog__badge">{post.category}</span>
                      <time dateTime={post.date}>{post.readTime}</time>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog__card-cta">
                      Leer artículo
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13.5 5l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.5 11h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="blog__cta-banner">
          <div className="container">
            <div className="blog__cta-banner-content">
              <h2>¿Quieres lanzar un proyecto audiovisual?</h2>
              <p>
                Nuestro equipo puede ayudarte a definir la tecnología adecuada, producir el contenido y coordinar la ejecución en ferias, museos o espacios corporativos.
              </p>
            </div>
            <Link href="/contacto" className="blog__cta-banner-link">
              Contacta con MyL3d
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

