import SiteHeader from "../Components/site-header/Siteheader";
import "../styles/legal.css";

export const metadata = { title: "Aviso legal" };

export default function Page() {
  return <><SiteHeader /><main className="legal-page"><article className="container">
    <h1>Aviso legal</h1>
    <h2>Identificación y contacto</h2>
    <p>MYL3D es la denominación utilizada en este sitio web, accesible en <strong>www.myl3d.es</strong>. Para consultas relacionadas con la web puedes escribir a <a href="mailto:info@myl3d.es">info@myl3d.es</a>.</p>
    <h2>Objeto</h2>
    <p>Este sitio presenta soluciones de visualización y facilita solicitudes de información y presupuesto. La información publicada no constituye por sí sola una oferta contractual.</p>
    <h2>Condiciones de uso</h2>
    <p>La persona usuaria se compromete a utilizar el sitio de forma lícita y a no causar daños, impedir su funcionamiento o vulnerar derechos de terceros.</p>
    <h2>Propiedad intelectual</h2>
    <p>Los contenidos, el diseño y los elementos del sitio están protegidos por la normativa aplicable. No se autoriza su reproducción o explotación sin permiso de sus titulares, salvo en los supuestos permitidos por la ley.</p>
    <h2>Responsabilidad</h2>
    <p>La información tiene carácter general y puede actualizarse. Las características, disponibilidad, alcance, precio e instalación de cada solución se concretarán en el presupuesto correspondiente.</p>
  </article></main></>;
}
