import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SiteHeader from "@/app/Components/site-header/Siteheader";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";

import "../blog.css";
import "./page.css";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const servicesChildren = [
  { href: "/servicios/Carteleria-digital", label: "Carteleria digital" },
  { href: "/servicios/cultura-y-ocio", label: "Cultura y ocio" },
  { href: "/servicios/eventos", label: "Eventos" },
  { href: "/servicios/corporativos", label: "Corporativos" },
  { href: "/servicios/educacion", label: "Educación" },
  { href: "/servicios/salas-de-control", label: "Salas de control" },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Recurso no encontrado | MyL3d" };
  }

  const canonicalUrl = `https://www.myl3d.es/blog/${post.slug}`;

  return {
    title: `${post.title} | MyL3d`,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      siteName: "MyL3d",
      locale: "es_ES",
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = formatDate(post.date);

  return (
    <>
      <Script
        id={`blog-post-${post.slug}-structured-data`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            inLanguage: "es-ES",
            author: {
              "@type": "Organization",
              name: "MyL3d",
              url: "https://www.myl3d.es",
            },
            publisher: {
              "@type": "Organization",
              name: "MyL3d",
              url: "https://www.myl3d.es",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.myl3d.es/blog/${post.slug}`,
            },
          }),
        }}
      />

      <SiteHeader
        links={[
          { href: "/", label: "Inicio" },
          { label: "Servicios", children: servicesChildren },
          { href: "/blog", label: "Blog y recursos", ariaCurrent: "page" },
          { href: "/contacto", label: "Solicitar presupuesto" },
        ]}
      />

      <main className="blog-article">
        <article>
          <header className="blog-article__hero">
            <div className="container">
              <span className="blog-article__eyebrow">{post.heroEyebrow}</span>
              <h1 className="blog-article__title">{post.heroTitle}</h1>
              <p className="blog-article__lead">{post.heroSubtitle}</p>
              <div className="blog-article__meta">
                <time dateTime={post.date}>{formattedDate}</time>
                <span>{post.readTime}</span>
              </div>
              <Link className="blog-article__back" href="/blog">
                ← Volver al blog
              </Link>
            </div>
          </header>

          <div className="blog-article__body">
            <div className="container">
              {post.sections.map((section) => (
                <section key={section.title} className="blog-article__section">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section className="blog-article__section blog-article__section--highlight">
                <h2>Puntos clave</h2>
                <ul>
                  {post.keyTakeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </section>

              <section className="blog-article__section">
                <h2>Conclusiones y próximos pasos</h2>
                {post.conclusion.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <Link href="/contacto" className="blog-article__cta">
                  Solicitar presupuesto
                </Link>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
