import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";
import { seoSlugs } from "@/lib/seoPages";
const base="https://www.myl3d.es";
export default function sitemap(): MetadataRoute.Sitemap { const routes=["","/productos","/contacto","/blog","/servicios/Carteleria-digital","/servicios/cultura-y-ocio","/servicios/eventos","/servicios/corporativos","/servicios/educacion","/servicios/salas-de-control",...seoSlugs.map(s=>`/${s}`)]; return [...routes.map((route)=>({url:`${base}${route}`,changeFrequency:route===""?"weekly" as const:"monthly" as const,priority:route===""?1:route==="/contacto"?.9:.8})),...blogPosts.map(p=>({url:`${base}/blog/${p.slug}`,lastModified:new Date(p.date),changeFrequency:"yearly" as const,priority:.5}))]; }
