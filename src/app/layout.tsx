import type { Metadata } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"; // 👈 Importa aquí
import SiteFooter from "./Components/site-footer/SiteFooter";
import CookieConsent from "./Components/cookie-consent/CookieConsent";
import Analytics from "./Components/analytics/Analytics";
import "./globals.css";
import "./Components/Home/Home.css";
import "./styles/service-base.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myl3d.es"),
  title: {
    default: "Pantallas LED y cartelería digital para empresas | MYL3D",
    template: "%s | MyL3d",
  },
  description:
    "Diseño, suministro e instalación de pantallas LED, cartelería digital y soluciones audiovisuales para empresas, comercios y espacios corporativos.",
  keywords: [
    "pantallas LED para empresas",
    "pantallas LED para escaparates",
    "pantallas LED interior",
    "pantallas LED exterior",
    "cartelería digital",
    "digital signage",
    "instalación de pantallas LED",
    "videowall profesional",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.myl3d.es/",
    title: "Pantallas LED y cartelería digital para empresas | MYL3D",
    description:
      "Diseño, suministro e instalación de pantallas LED, digital signage y soluciones de visualización para empresas.",
    siteName: "MyL3d",
    locale: "es_ES",
    images: [
      { url: "/hero.jpg", width: 1200, height: 630, alt: "Pantallas LED y cartelería digital para empresas" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantallas LED y cartelería digital para empresas | MYL3D",
    description:
      "Pantallas LED, cartelería digital y proyectos audiovisuales adaptados a empresas, comercios y espacios corporativos.",
    images: ["/hero.jpg"],
    creator: "@myl3d",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />

      <body>
        <Script
          id="global-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.myl3d.es/#website",
                  url: "https://www.myl3d.es/",
                  name: "MyL3d",
                  description:
                    "Pantallas LED y cartelería digital para empresas, comercios y espacios corporativos.",
                  inLanguage: "es-ES",
                  publisher: { "@id": "https://www.myl3d.es/#organization" },
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.myl3d.es/#organization",
                  name: "MyL3d",
                  url: "https://www.myl3d.es/",
                  logo: "https://www.myl3d.es/logo.png",
                  sameAs: ["https://www.instagram.com/myl3d/"],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+34 692 903 572",
                      contactType: "customer service",
                      areaServed: "ES",
                      availableLanguage: ["es"],
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {children}
        <SiteFooter />
        <CookieConsent />
        <Analytics />
        <SpeedInsights /> {/* 👈 Ya está disponible en toda la app */}
      </body>
    </html>
  );
}
