import type { Metadata } from "next";
import Contact from "../Components/contact/Contact";
import SiteHeader from "../Components/site-header/Siteheader";

export const metadata: Metadata = {
  title: "Contacto | MyL3d",
  description:
    "Solicita presupuesto para pantallas LED, cartelería digital o soluciones audiovisuales integrales. Atención de lunes a viernes de 9:00 a 18:00.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | MyL3d",
    description:
      "Contacta con MyL3d para asesoramiento en alquiler de pantallas LED y producción audiovisual en España.",
    url: "https://www.myl3d.es/contacto",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader  logoAlt="Logo MyL3D" />
      <Contact />
    </>
  );
}
