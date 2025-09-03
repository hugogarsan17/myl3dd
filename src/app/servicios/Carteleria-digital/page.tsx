import CarteleriaDigital from "@/app/Components/carteleria-digital/carteleria-digital";
import SiteHeader from "../../Components/site-header/Siteheader";

export default function CarteleriaDigitalPage() {
  return (
    <>
      <SiteHeader logoSrc="/logo.png" logoAlt="Nombre de la marca" />
      <CarteleriaDigital />
    </>
  );
}
