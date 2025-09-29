import type { Metadata } from "next";
import SiteHeader from "../../Components/site-header/Siteheader";
import Educacion from "@/app/Components/educacion/educacion";

export const metadata: Metadata = {
  title: "Audiovisuales para educación | MyL3d",
  description:
    "Aulas híbridas, monitores táctiles, cámaras 4K y audio profesional para centros educativos y universidades en España.",
  alternates: { canonical: "/servicios/educacion" },
  openGraph: {
    title: "Audiovisuales para educación | MyL3d",
    description:
      "Integración de tecnología interactiva y sistemas audiovisuales para aulas conectadas y campus multi-sede.",
    url: "https://www.myl3d.es/servicios/educacion",
    type: "article",
  },
};
export default function EducacionPage() {
  return (
    <>
      <SiteHeader  logoAlt="logo MyL3d" />
      <Educacion />
    </>
  );
}
