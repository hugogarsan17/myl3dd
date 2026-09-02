import type { Metadata } from "next";
import SiteHeader from "../../Components/site-header/Siteheader";
import SalasDeControl from "@/app/Components/salas-de-control/salas-de-control";

export const metadata: Metadata = {
  title: "Salas de control y videowalls | MyL3d",
  description:
    "Estudio de videowalls, gestión de señales y puestos de operador para salas de control en empresas e instituciones.",
  alternates: { canonical: "/servicios/salas-de-control" },
  openGraph: {
    title: "Salas de control y videowalls | MyL3d",
    description:
      "Propuestas de videowalls, controladores y monitorización cuya viabilidad se define con especialistas según el proyecto.",
    url: "https://www.myl3d.es/servicios/salas-de-control",
    type: "article",
  },
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader  logoAlt="logo MyL3d" />
      <SalasDeControl />
    </>
  );
}
