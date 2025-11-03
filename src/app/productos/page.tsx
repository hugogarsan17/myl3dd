import type { Metadata } from "next";
import SiteHeader from "../Components/site-header/Siteheader";
import Productos from "../Components/productos/productos";

export const metadata: Metadata = {
  title: "Productos audiovisuales profesionales | MyL3d",
  description:
    "Catálogo de pantallas LED, tótems digitales, procesadores de vídeo y estructuras para integrar en proyectos corporativos y eventos.",
  alternates: { canonical: "/productos" },
  openGraph: {
    title: "Productos audiovisuales profesionales | MyL3d",
    description:
      "Soluciones LED modulares, soportes y controladores con soporte técnico especializado en toda España.",
    url: "https://www.myl3d.es/productos",
    type: "website",
  },
};

export default function ProductosPage() {
  return (
    <>
      <SiteHeader />
      <Productos />
    </>
  );
}
