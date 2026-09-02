import type { Metadata } from "next";
import SiteHeader from "../../Components/site-header/Siteheader";
import Eventos from "@/app/Components/eventos/eventos";

export const metadata: Metadata = {
  title: "Producción audiovisual para eventos | MyL3d",
  description:
    "Propuestas audiovisuales para conciertos, festivales y eventos corporativos, coordinadas con profesionales y proveedores según el proyecto.",
  alternates: { canonical: "/servicios/eventos" },
  openGraph: {
    title: "Producción audiovisual para eventos | MyL3d",
    description:
      "Selección y coordinación de pantallas, cámaras, mezcla, streaming y gestión de señales según las necesidades del evento.",
    url: "https://www.myl3d.es/servicios/eventos",
    type: "article",
  },
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader  logoAlt="logo MyL3d" />
      <Eventos />
    </>
  );
}
