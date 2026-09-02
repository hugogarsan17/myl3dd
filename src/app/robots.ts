import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules:{userAgent:"*",allow:"/",disallow:["/api/","/lp/"]}, sitemap:"https://www.myl3d.es/sitemap.xml",host:"https://www.myl3d.es" }; }
