import type { Metadata } from "next";
import CarteleriaDigital from "@/app/Components/carteleria-digital/carteleria-digital";
import SiteHeader from "../../Components/site-header/Siteheader";

export const metadata: Metadata = {
  title: "Cartelería digital | MyL3d",
  description:
    "Cartelería digital y pantallas LED para exterior e interior, con configuración, suministro e instalación definidos según cada proyecto.",
  alternates: { canonical: "/servicios/Carteleria-digital" },
  openGraph: {
    title: "Cartelería digital | MyL3d",
    description:
      "Pantallas LED y monitores para retail, espacios corporativos y espacios públicos, seleccionados según el uso previsto.",
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
