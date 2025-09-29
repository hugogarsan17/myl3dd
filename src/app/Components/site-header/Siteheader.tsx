"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type SubItem = { href: string; label: string };
type NavItem = { label: string; href?: string; ariaCurrent?: "page" | "true" | "false"; children?: SubItem[] };

interface SiteHeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  links?: NavItem[];
  className?: string;
}

export default function SiteHeader({
  logoSrc = "/logo.png",
  logoAlt = "MyL3d",
  logoWidth = 200,
  logoHeight = 80,
  links = [
    { href: "/", label: "Inicio", ariaCurrent: "page" },
    {
      label: "Servicios",
      children: [
        { href: "/servicios/Carteleria-digital", label: "Carteleria digital" },
        { href: "/servicios/cultura-y-ocio", label: "Cultura y ocio" },
        { href: "/servicios/eventos", label: "Eventos" },
        { href: "/servicios/corporativos", label: "Corporativos" },
        { href: "/servicios/educacion", label: "Educación" },
        { href: "/servicios/salas-de-control", label: "Salas de control" },
      ],
    },

    { href: "/contacto", label: "Contacto" }, // ✅ ruta real
        
  ],
  className = "",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.matchMedia("(min-width: 901px)").matches && setOpen(false);
    window.addEventListener("keydown", onEsc);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onEsc);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navbar ${className}`} role="banner">
      <div className="container navbar__inner">
        <Link href="/" aria-label="Ir al inicio" className="logo" onClick={handleNavClick}>
          <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} priority />
        </Link>

        <button
          className="nav__toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav id="primary-nav" aria-label="Principal" className={`nav ${open ? "nav--open" : ""}`}>
          <ul className="nav__links" role="menubar">
            {links.map((item) =>
              item.children?.length ? (
                <li key={item.label} className="nav__item has-dropdown" role="none">
                  <details>
                    <summary className="dropdown__trigger" role="menuitem" aria-haspopup="menu">
                      {item.label}
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 20 20" className="dropdown__chevron">
                        <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </summary>
                    <ul className="dropdown__menu" role="menu" onClick={handleNavClick}>
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link role="menuitem" href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href ?? item.label} role="none">
                  {item.href?.startsWith("/") ? (
                    <Link href={item.href} aria-current={item.ariaCurrent} role="menuitem" onClick={handleNavClick}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} aria-current={item.ariaCurrent} role="menuitem" onClick={handleNavClick}>
                      {item.label}
                    </a>
                  )}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
