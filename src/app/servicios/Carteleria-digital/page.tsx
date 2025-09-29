import type { Metadata } from "next";
import CarteleriaDigital from "@/app/Components/carteleria-digital/carteleria-digital";
import SiteHeader from "../../Components/site-header/Siteheader";

export const metadata: Metadata = {
  title: "Cartelería digital | MyL3d",
  description:
    "Cartelería digital y pantallas LED para exterior e interior con gestión remota de contenidos, instalación llave en mano y soporte técnico en toda España.",
  alternates: { canonical: "/servicios/Carteleria-digital" },
  openGraph: {
    title: "Cartelería digital | MyL3d",
    description:
      "Diseño e instalación de pantallas LED y monitores profesionales 24/7 para retail, corporate y espacios públicos.",
    url: "https://www.myl3d.es/servicios/Carteleria-digital",
    type: "article",
  },
};

export default function CarteleriaDigitalPage() {
  return (
    <>
      <SiteHeader  logoAlt="logo MyL3d" />
      <CarteleriaDigital />
    </>
  );
}
