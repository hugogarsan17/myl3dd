import type { Metadata } from "next";
import SiteHeader from "../Components/site-header/Siteheader";
import Productos from "../Components/productos/productos";

export const metadata: Metadata = {
  title: "Pantallas LED profesionales para empresas",
  description:
    "Pantallas LED de interior, exterior y escaparate dimensionadas según el espacio. Solicita una propuesta completa para tu empresa.",
  alternates: { canonical: "/productos" },
  openGraph: {
    title: "Productos audiovisuales profesionales | MyL3d",
    description:
      "Soluciones LED modulares, soportes y controladores seleccionados según los requisitos de cada proyecto.",
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
