import type { Metadata } from "next";
import SiteHeader from "../../Components/site-header/Siteheader";
import Corporativos from "@/app/Components/corporativos/corporativos";

export const metadata: Metadata = {
  title: "Soluciones audiovisuales corporativas | MyL3d",
  description:
    "Integración de salas de reunión, coworking y auditorios con videoconferencia, audio profesional y visualización para empresas en España.",
  alternates: { canonical: "/servicios/corporativos" },
  openGraph: {
    title: "Soluciones audiovisuales corporativas | MyL3d",
    description:
      "Videoconferencia, audio y pantallas profesionales llave en mano para espacios corporativos.",
    url: "https://www.myl3d.es/servicios/corporativos",
    type: "article",
  },
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader  logoAlt="logo MyL3d" />
      <Corporativos />
    </>
  );
}
