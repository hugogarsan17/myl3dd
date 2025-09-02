import Contact from "../Components/contact/Contact";
import SiteHeader from "../Components/site-header/Siteheader";

export default function ContactPage() {
  return (
    <>
      <SiteHeader logoSrc="/logo.png" logoAlt="Nombre de la marca" />
      <Contact />
    </>
  );
}
