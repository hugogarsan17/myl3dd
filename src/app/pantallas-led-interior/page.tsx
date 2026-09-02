import type { Metadata } from "next";
import SeoLanding from "@/app/Components/growth/SeoLanding";
import { seoPages } from "@/lib/seoPages";
const page = seoPages["pantallas-led-interior"];
export const metadata: Metadata = { title: page.title, description: page.description, alternates:{canonical:`/${page.slug}`}, openGraph:{title:page.title,description:page.description,url:`https://www.myl3d.es/${page.slug}`,type:"website",images:[{url:"/hero.jpg",width:1200,height:630,alt:page.title}]}, twitter:{card:"summary_large_image",title:page.title,description:page.description,images:["/hero.jpg"]} };
export default function Page(){return <SeoLanding page={page}/>}
