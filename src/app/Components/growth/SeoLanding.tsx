import Link from "next/link";
import Script from "next/script";
import SiteHeader from "../site-header/Siteheader";
import type { SeoPage } from "@/lib/seoPages";
import "./growth.css";

export default function SeoLanding({ page }: { page: SeoPage }) {
  const url = `https://www.myl3d.es/${page.slug}`;
  return <><SiteHeader/><main className="growth-page">
    <Script id={`schema-${page.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:"https://www.myl3d.es/"},{"@type":"ListItem",position:2,name:page.title,item:url}]},{"@type":"Service",name:page.title,description:page.description,url,provider:{"@type":"Organization",name:"MYL3D",url:"https://www.myl3d.es/"}}]})}}/>
    <section className="growth-hero"><div className="container"><nav aria-label="Migas de pan"><ol className="growth-breadcrumb"><li><Link href="/">Inicio</Link></li><li aria-current="page">{page.title}</li></ol></nav><p className="growth-eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="growth-lead">{page.intro}</p><div className="growth-actions"><Link className="growth-primary" href="/contacto" data-track-cta="hero">{page.cta}</Link><a className="growth-secondary" href="#guia">Ver qué debes tener en cuenta</a></div></div></section>
    <section className="growth-section" id="guia"><div className="container growth-grid">{page.sections.map(s=><article className="growth-card" key={s.title}><h2>{s.title}</h2><p>{s.text}</p>{s.items&&<ul>{s.items.map(i=><li key={i}>{i}</li>)}</ul>}</article>)}</div></section>
    <section className="growth-section growth-alt"><div className="container"><h2>Aplicaciones habituales</h2><div className="growth-tags">{page.uses.map(x=><span key={x}>{x}</span>)}</div></div></section>
    <section className="growth-section"><div className="container growth-narrow"><h2>Cómo preparar tu solicitud</h2><ol className="growth-process"><li><strong>Describe el objetivo.</strong> Qué quieres comunicar y a quién.</li><li><strong>Envía el espacio.</strong> Fotografía, medidas aproximadas y ubicación.</li><li><strong>Revisamos las variables.</strong> Distancia, luz, instalación y contenidos.</li><li><strong>Recibe una propuesta.</strong> Con el alcance definido para tu caso.</li></ol></div></section>
    <section className="growth-section growth-alt"><div className="container growth-narrow"><h2>Preguntas frecuentes</h2>{page.faqs.map(f=><details className="growth-faq" key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></section>
    <section className="growth-cta"><div className="container"><h2>{page.cta}</h2><p>{page.ctaText}</p><Link className="growth-primary" href={`/contacto?solution=${encodeURIComponent(page.title)}`}>Solicitar presupuesto</Link></div></section>
    <section className="growth-related"><div className="container"><h2>Soluciones relacionadas</h2><nav>{[["/pantallas-led-escaparates","Escaparates"],["/pantallas-led-interior","Interior"],["/pantallas-led-exterior","Exterior"],["/precio-pantalla-led","Precio de pantalla LED"],["/digital-signage","Digital signage"]].filter(([href])=>href!==`/${page.slug}`).map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></div></section>
  </main></>;
}
