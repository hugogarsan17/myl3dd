"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="blog__hero">
      <div className="container">
        <motion.span
          className="blog__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog y recursos
        </motion.span>
        <motion.h1
          className="blog__title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Guías, ideas y recursos sobre tecnología audiovisual, pantallas LED y digital signage
        </motion.h1>
        <motion.p
          className="blog__lead"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Seleccionamos contenidos con recomendaciones prácticas sobre cartelería digital, eventos híbridos, espacios culturales
          y producción audiovisual inmersiva.
        </motion.p>
        <motion.div
          className="blog__cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Link className="blog__cta-link" href="#articulos">
            Ver artículos destacados
          </Link>
          <Link className="blog__cta-secondary" href="/contacto">
            Solicitar asesoramiento
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
