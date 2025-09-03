import SiteHeader from "../../Components/site-header/Siteheader";
import SalasDeControl from "@/app/Components/salas-de-control/salas-de-control";
export default function ContactPage() {
  return (
    <>
      <SiteHeader logoSrc="/logo.png" logoAlt="Nombre de la marca" />
      <SalasDeControl />
    </>
  );
}
