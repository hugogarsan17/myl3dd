"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./productos.css";

type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  specs: string[];
};

type Filter = {
  label: string;
  value: string;
};

const filters: Filter[] = [
  { label: "Todos", value: "Todos" },
  { label: "Pantallas LED", value: "Pantallas LED" },
  { label: "Tótems digitales", value: "Tótems digitales" },
  { label: "Soportes", value: "Soportes" },
];

const products: Product[] = [
  {
    name: "Panel modular LED P1.9 UHD",
    category: "Pantallas LED",
    description:
      "Módulos de alta densidad diseñados para estudios y espacios premium donde la nitidez y la reproducción cromática son clave.",
    image: "/res/LCD.png",
    alt: "Video wall LED de alta resolución instalado en showroom",
    specs: ["Pitch 1.9 mm", "Brillo 1.800 nits", "Calibración HDR10"],
  },
  {
    name: "Panel LED exterior P3.9",
    category: "Pantallas LED",
    description:
      "Chasis ligero y sellado IP65 ideal para giras, festivales y fachadas. Sistema de bloqueo rápido para montaje ágil.",
    image: "/res/Cabinet TV Studio.jpg",
    alt: "Escenario exterior con paneles LED modulares",
    specs: ["Pitch 3.9 mm", "Brillo 4.500 nits", "Curvatura ±10°"],
  },
  {
    name: "Tótem digital doble cara",
    category: "Tótems digitales",
    description:
      "Estructura autoportante con players sincronizados para retail, hoteles y recepción corporativa.",
    image: "/res/totem4.png",
    alt: "Tótem digital doble cara en lobby corporativo",
    specs: ["Pantalla 55\" UHD", "Reproductor 4K integrado", "Cristal templado antivandálico"],
  },
  {
    name: "Pantalla Lineal LED",
    category: "Pantallas LED",
    description:
      "Display LED en formato lineal para rótulos, cenefas y textos dinámicos. Ideal para retail, escenografía y señalética.",
    image: "/res/Lineal.png",
    alt: "Pantalla lineal LED vista en perspectiva",
    specs: ["Formato ultrapanorámico", "Uso interior", "Compatible con control NovaStar"],
  },
  {
    name: "Estructura truss y soporte modular",
    category: "Soportes",
    description:
      "Solución modular para colgado o apilado de pantallas LED, definida según las cargas y requisitos de cada instalación.",
    image: "/res/LCD Con soporte.png",
    alt: "Estructura truss soportando pantalla LED en feria",
    specs: ["Configuración personalizada", "Montaje según proyecto", "Validación técnica según instalación"],
  },

  // --- Nuevos productos añadidos ---
  {
    name: "Videowall LCD bisel ultrafino 55”",
    category: "Videowalls",
    description:
      "Monitores profesionales para composiciones 2x2, 3x3 o superiores con gestión por controlador y empalme casi imperceptible.",
    image: "/res/LCD.png",
    alt: "Videowall LCD de bisel fino mostrando contenido corporativo",
    specs: ["Bisel 1.8–3.5 mm", "24/7", "Montaje VESA y matriz flexible"],
  },
  {
    name: "Cabinet LED alquiler (500×500 / 500×1000)",
    category: "Pantallas LED",
    description:
      "Gabinetes de aluminio para touring con cierres rápidos, stacking/hanging y compatibilidad con curvatura.",
    image: "/res/4 cabinets.png",
    alt: "Gama de gabinetes LED de alquiler en varios tamaños",
    specs: ["Pitch 2.6–4.8 mm", "IP54/65 según modelo", "Curvatura convexa/cóncava"],
  },
  {
    name: "Módulo LED servicio frontal",
    category: "Pantallas LED",
    description:
      "Paneles con extracción magnética para mantenimiento frontal. Perfectos para integración sobre pared.",
    image: "/res/Cabinet desmontado.png",
    alt: "Módulo LED desmontado mostrando mantenimiento frontal",
    specs: ["Servicio frontal", "Pitch 1.9–3.9 mm", "Instalación fija"],
  },
  {
    name: "Banderola LED proyectada",
    category: "Pantallas LED",
    description:
      "Pantalla LED doble cara en soporte de pared tipo banderola para comercios y calles con alto tránsito.",
    image: "/res/Banderola.png",
    alt: "Banderola LED doble cara montada en pared",
    specs: ["Doble cara", "Alto brillo exteriores", "Player integrado y WiFi"],
  },
  {
    name: "Batería de tótems conectados",
    category: "Tótems digitales",
    description:
      "Conjunto de tótems sincronizados para galerías, exposiciones y retail. Gestión remota del contenido.",
    image: "/res/6 tótems juntos.png",
    alt: "Seis tótems digitales alineados mostrando un escenario sincronizado",
    specs: ["Número de unidades según espacio", "CMS remoto", "Sincronización de contenidos"],
  },
  {
    name: "Cabinet LED Outdoor P5",
    category: "Pantallas LED",
    description:
      "Gabinete de exterior IP65 para rótulos y monopostes. Alta luminosidad y electrónica preparada para 24/7.",
    image: "/res/cabinet billboard.png",
    alt: "Cabinet LED outdoor P5 para valla publicitaria",
    specs: ["Pitch 5 mm", "Brillo 6.000–7.000 nits", "IP65 frontal / IP54 trasera"],
  },
];


export default function Productos() {
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]?.value ?? "Todos");

  const visibleProducts = useMemo(() => {
    if (activeFilter === "Todos") {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="productos-page">
      <section className="products-hero" aria-labelledby="products-title">
        <div className="products-hero__overlay" aria-hidden />
        <div className="container products-hero__content">
          <p className="products-hero__eyebrow">Catálogo especializado</p>
          <h1 id="products-title" className="products-hero__title">
            Soluciones LED profesionales para cada proyecto
          </h1>
          <p className="products-hero__subtitle">
            Selección de módulos, tótems y sistemas de control listos para integrar en instalaciones fijas o eventos en directo.
          </p>
        </div>
      </section>

      <section className="section section--alt products-section" aria-labelledby="products-section-title">
        <div className="container">
          <header className="products-section__header">
            <div>
              <h2 id="products-section-title" className="section__title">
                Nuestros productos destacados
              </h2>
              <p className="products-section__copy">
                Seleccionamos la configuración según dimensiones, distancia de visualización, luminosidad y uso previsto. El
                suministro, transporte e instalación se presupuestan según cada proyecto.
              </p>
            </div>
            <Link className="btn-cta products-section__cta" href="/contacto">
              Solicitar presupuesto
            </Link>
          </header>

          <div className="product-filters" role="tablist" aria-label="Categorías de productos">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`product-filters__button${activeFilter === filter.value ? " is-active" : ""}`}
                role="tab"
                aria-selected={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-card__media">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1200px) 25vw, (min-width: 900px) 30vw, 90vw"
                    priority={product.name === visibleProducts[0]?.name}
                    className="product-card__image"
                  />
                </div>
                <div className="product-card__body">
                  <span className="product-card__category">{product.category}</span>
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  <ul className="product-card__specs">
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  <div className="product-card__footer">
                    <span className="product-card__price">Configuración y precio según proyecto</span>
                    <Link className="product-card__link" href="/contacto">
                      Solicitar presupuesto
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
