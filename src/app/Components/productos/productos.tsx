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
  price: string;
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
  { label: "Procesadores", value: "Procesadores" },
  { label: "Soportes", value: "Soportes" },
];

const products: Product[] = [
  {
    name: "Panel modular LED P1.9 UHD",
    category: "Pantallas LED",
    description:
      "Módulos de alta densidad diseñados para estudios y espacios premium donde la nitidez y la reproducción cromática son clave.",
    image: "/res/videwall.webp",
    alt: "Video wall LED de alta resolución instalado en showroom",
    price: "Desde 385 € / m²",
    specs: ["Pitch 1.9 mm", "Brillo 1.800 nits", "Calibración HDR10"],
  },
  {
    name: "Panel LED exterior P3.9",
    category: "Pantallas LED",
    description:
      "Chasis ligero y sellado IP65 ideal para giras, festivales y fachadas. Sistema de bloqueo rápido para montaje ágil.",
    image: "/res/stand.png",
    alt: "Escenario exterior con paneles LED modulares",
    price: "Desde 340 € / m²",
    specs: ["Pitch 3.9 mm", "Brillo 4.500 nits", "Curvatura ±10°"],
  },
  {
    name: "Tótem digital doble cara",
    category: "Tótems digitales",
    description:
      "Estructura autoportante con players sincronizados para retail, hoteles y recepción corporativa.",
    image: "/res/totems.png",
    alt: "Tótems digitales en lobby corporativo",
    price: "Desde 189 € / unidad",
    specs: ["Pantalla 55\" UHD", "Reproductor 4K integrado", "Cristal templado antivandálico"],
  },
  {
    name: "Procesador NovaStar VX600",
    category: "Procesadores",
    description:
      "Controlador híbrido con escalado profesional, redundancia HDMI/DP y preset de escenas para directos.",
    image: "/res/interior-totem.png",
    alt: "Procesador de vídeo NovaStar instalado en rack",
    price: "Desde 1.890 €",
    specs: ["Entrada 4K", "Hasta 6 salidas", "Edición en vivo"],
  },
  {
    name: "Estructura truss y soporte modular",
    category: "Soportes",
    description:
      "Solución modular en aluminio para colgado o apilado de pantallas LED con certificación europea.",
    image: "/res/stand-ise.png",
    alt: "Estructura truss soportando pantalla LED en feria",
    price: "Bajo pedido",
    specs: ["Carga hasta 1.000 kg", "Configuración personalizada", "Incluye ingeniería y montaje"],
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
                Trabajamos con equipamiento certificado y soporte técnico para garantizar un rendimiento óptimo tanto en interior
                como exterior.
              </p>
            </div>
            <Link className="btn-cta products-section__cta" href="/contacto">
              Solicita asesoramiento
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
                    <span className="product-card__price">{product.price}</span>
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
