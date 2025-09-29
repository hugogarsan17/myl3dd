import type { Metadata } from "next";
import SiteHeader from "../../Components/site-header/Siteheader";
import CulturaYOcio from "@/app/Components/cultura-y-ocio/cultura-y-ocio";

export const metadata: Metadata = {
  title: "Audiovisuales para cultura y ocio | MyL3d",
  description:
    "Experiencias inmersivas con pantallas LED, proyección y señalización digital para museos, teatros y ocio nocturno en España.",
  alternates: { canonical: "/servicios/cultura-y-ocio" },
  openGraph: {
    title: "Audiovisuales para cultura y ocio | MyL3d",
    description:
      "Diseño de instalaciones audiovisuales para museos, teatros y discotecas con contenidos interactivos.",
    url: "https://www.myl3d.es/servicios/cultura-y-ocio",
    type: "article",
  },
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader  logoAlt="logo MyL3d" />
      <CulturaYOcio />
    </>
  );
}
