import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./Components/Home/Home.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myl3d.es"),
  title: {
    default: "MyL3d",
    template: "%s | Nombre de la marca",
  },
  description:
    "Innovación visual para cada espacio: pantallas LED, rótulos y soluciones de señalización para comercios y eventos.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.myl3d.es/",
    title: "Innovación visual para cada espacio",
    description:
      "Pantallas LED, rótulos y señalización digital para comercios y eventos.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Proyecto en vía pública" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovación visual para cada espacio",
    description:
      "Pantallas LED, rótulos y señalización digital para comercios y eventos.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}