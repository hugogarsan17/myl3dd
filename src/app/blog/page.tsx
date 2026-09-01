import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/app/Components/site-header/Siteheader";
import { blogPosts } from "@/lib/blogPosts";
import BlogHero from "./BlogHero";

import "./blog.css";

export const metadata: Metadata = {
  title: "Blog y recursos audiovisuales | MyL3d",
  description:
    "Ideas, guías y casos de uso sobre cartelería digital, pantallas LED y producción audiovisual para empresas, retail y cultura.",
  alternates: {
    canonical: "https://www.myl3d.es/blog",
  },
  openGraph: {
    title: "Blog y recursos audiovisuales | MyL3d",
    description:
      "Explora buenas prácticas, guías y ejemplos de aplicación de pantallas LED, streaming y contenidos audiovisuales.",
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
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `https://www.myl3d.es/blog/${post.slug}`,
              datePublished: post.date,
              description: post.description,
              inLanguage: "es-ES",
            })),
          }),
        }}
      />

      <SiteHeader />

      <main className="blog">
        <BlogHero />

        <section id="articulos" className="blog__listing">
          <div className="container">
            <div className="blog__listing-header">
              <h2>Artículos destacados</h2>
              <p>
                Desde la planificación técnica hasta la creación de contenidos, aquí encontrarás guías accionables que te ayudan a sacar el máximo partido a la tecnología audiovisual.
              </p>
            </div>

            <div className="blog__grid" role="list">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog__card" role="listitem">
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
