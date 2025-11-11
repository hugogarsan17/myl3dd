import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"; // 👈 Importa aquí
import "./globals.css";
import "./Components/Home/Home.css";
import "./styles/service-base.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myl3d.es"),
  title: {
    default: "MyL3d | Soluciones audiovisuales",
    template: "%s | MyL3d",
  },
  description:
    "Soluciones audiovisuales llave en mano, alquiler de pantallas LED y cartelería digital para eventos, retail y espacios corporativos en toda España.",
  keywords: [
    "alquiler de pantallas LED",
    "cartelería digital",
    "producción audiovisual",
    "soluciones audiovisuales",
    "España",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.myl3d.es/",
    title: "MyL3d | Soluciones audiovisuales",
    description:
      "Instalación y alquiler de pantallas LED, rótulos digitales y equipamiento audiovisual profesional para eventos y comercios en España.",
    siteName: "MyL3d",
    locale: "es_ES",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Instalación de pantallas LED de MyL3d" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyL3d | Soluciones audiovisuales",
    description:
      "Servicios audiovisuales profesionales: pantallas LED, cartelería digital y soporte técnico para eventos y retail.",
    images: ["/og.jpg"],
    creator: "@myl3d",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <head>
        {/* Google Tag Manager */}
<Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5LCJJD8M');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      </head>
       <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LCJJD8M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      <body className={inter.className}>
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
                    "Soluciones audiovisuales llave en mano, alquiler de pantallas LED y cartelería digital para eventos y retail en España.",
                  inLanguage: "es-ES",
                  publisher: { "@id": "https://www.myl3d.es/#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://www.myl3d.es/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
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
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.myl3d.es/#localbusiness",
                  name: "MyL3d",
                  url: "https://www.myl3d.es/",
                  image: "https://www.myl3d.es/og.jpg",
                  email: "info@myl3d.es",
                  telephone: "+34 692 903 572",
                  priceRange: "€€",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "ES",
                  },
                  areaServed: [{ "@type": "Country", name: "España" }],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "09:00",
                      closes: "18:00",
                    },
                  ],
                  sameAs: ["https://www.instagram.com/myl3d/"],
                  parentOrganization: { "@id": "https://www.myl3d.es/#organization" },
                },
              ],
            }),
          }}
        />
        {children}
        <SpeedInsights /> {/* 👈 Ya está disponible en toda la app */}
      </body>
    </html>
  );
}