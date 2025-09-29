import type { Metadata } from "next";
import SiteHeader from "../../Components/site-header/Siteheader";
import Eventos from "@/app/Components/eventos/eventos";

export const metadata: Metadata = {
  title: "Producción audiovisual para eventos | MyL3d",
  description:
    "Realización multicámara, streaming y alquiler de pantallas LED para conciertos, festivales y eventos corporativos en España.",
  alternates: { canonical: "/servicios/eventos" },
  openGraph: {
    title: "Producción audiovisual para eventos | MyL3d",
    description:
      "Servicios técnicos llave en mano: cámaras PTZ, mezcladores HD/4K, gestión de señales y soporte en directo.",
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
