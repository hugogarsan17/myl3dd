import SiteHeader from "../Components/site-header/Siteheader";
import "../styles/legal.css";

export const metadata = { title: "Política de privacidad", description: "Información sobre el tratamiento de datos personales en MYL3D." };

export default function Page() {
  return <><SiteHeader /><main className="legal-page"><article className="container">
    <h1>Política de privacidad</h1>
    <h2>Responsable y contacto</h2>
    <p>El responsable del tratamiento es el titular de MYL3D. El canal de contacto para consultas y ejercicio de derechos es <a href="mailto:info@myl3d.es">info@myl3d.es</a>.</p>
    <h2>Datos que recogemos</h2>
    <p>El formulario puede recoger nombre, empresa, email, teléfono, ciudad, tipo de solución, medidas, mensaje y el archivo que decidas adjuntar. También se tratan los datos técnicos imprescindibles para la seguridad y el funcionamiento del formulario.</p>
    <h2>Finalidad y base jurídica</h2>
    <p>Los datos se utilizan únicamente para atender la solicitud, analizar sus necesidades y preparar una respuesta o propuesta. La base jurídica es el consentimiento prestado al enviar el formulario, que puede retirarse mediante el canal de contacto indicado.</p>
    <h2>Conservación y destinatarios</h2>
    <p>Los datos se conservarán durante el tiempo necesario para responder y, posteriormente, durante los plazos exigidos por las obligaciones legales aplicables. No se cederán con fines comerciales. Podrán acceder proveedores técnicos necesarios para operar la web y el correo, sujetos a sus obligaciones de protección de datos, o las autoridades cuando exista obligación legal.</p>
    <h2>Derechos</h2>
    <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad mediante el email indicado. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
  </article></main></>;
}
