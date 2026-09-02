"use client";
import { useEffect,useState } from "react";
import Link from "next/link";
import "./CookieConsent.css";
export default function CookieConsent(){const[choice,setChoice]=useState<string|null>(null);useEffect(()=>setChoice(localStorage.getItem('myl3d-cookie-consent')),[]);function save(v:string){localStorage.setItem('myl3d-cookie-consent',v);setChoice(v);window.dispatchEvent(new Event('myl3d:consent'))}return <>{choice===null&&<section className="cookie-banner" aria-label="Gestión del consentimiento de cookies"><div><strong>Tu privacidad</strong><p>Usamos almacenamiento técnico necesario y, solo si aceptas analítica, herramientas configuradas para medir el uso. Consulta la <Link href="/cookies">política de cookies</Link>.</p></div><div className="cookie-banner__actions"><button onClick={()=>save('necessary')}>Solo necesarias</button><button className="cookie-accept" onClick={()=>save('analytics')}>Aceptar analítica</button></div></section>}</>}
