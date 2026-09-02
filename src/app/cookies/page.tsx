import SiteHeader from "../Components/site-header/Siteheader";
import "../styles/legal.css";

export const metadata = { title: "Política de cookies" };

export default function Page() {
  return <><SiteHeader /><main className="legal-page"><article className="container">
    <h1>Política de cookies</h1>
    <h2>Qué utiliza esta web</h2>
    <p>La web guarda en el almacenamiento local del navegador la elección realizada en el aviso de cookies. Este dato técnico permite recordar si se aceptaron o rechazaron las cookies opcionales.</p>
    <h2>Medición opcional</h2>
    <p>Google Analytics se carga únicamente después de pulsar «Aceptar». Puede establecer identificadores de medición para elaborar estadísticas agregadas sobre el uso del sitio. Si se pulsa «Rechazar opcionales», esta herramienta no se carga.</p>
    <h2>Servicios técnicos</h2>
    <p>El formulario utiliza Cloudflare Turnstile como medida de seguridad frente a envíos automatizados. La web también utiliza Vercel Speed Insights para observar el rendimiento técnico. Estos servicios pueden tratar datos técnicos necesarios para prestar sus funciones conforme a sus propias condiciones.</p>
    <h2>Cambiar o retirar el consentimiento</h2>
    <p>Puedes borrar los datos y cookies de www.myl3d.es desde la configuración del navegador para volver a mostrar el aviso y elegir de nuevo. También puedes bloquear o eliminar cookies desde esa configuración.</p>
    <h2>Contacto</h2>
    <p>Para consultas sobre esta política puedes escribir a <a href="mailto:info@myl3d.es">info@myl3d.es</a>.</p>
  </article></main></>;
}
