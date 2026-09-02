"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { captureAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";

export default function Analytics(){
 const [consent,setConsent]=useState(false); const ga=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID; const gtm=process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
 useEffect(()=>{captureAttribution(); const sync=()=>setConsent(localStorage.getItem("myl3d-cookie-consent")==="analytics");sync();window.addEventListener("myl3d:consent",sync); const click=(e:MouseEvent)=>{const a=(e.target as Element).closest("a");if(!a)return;const href=a.getAttribute("href")||"";if(href.startsWith("https://wa.me/"))trackEvent("whatsapp_click",{link_url:href});else if(href.startsWith("tel:"))trackEvent("phone_click");else if(href.startsWith("mailto:"))trackEvent("email_click");else if(a.hasAttribute("data-track-cta"))trackEvent("cta_click",{cta:a.textContent?.trim(),location:a.getAttribute("data-track-cta")});};document.addEventListener("click",click);return()=>document.removeEventListener("click",click)},[]);
 if(!consent||(!ga&&!gtm))return null;
 if(gtm)return <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}</Script>;
 return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive"/><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}',{send_page_view:true});window.addEventListener('myl3d:analytics',function(e){gtag('event',e.detail.event,e.detail.parameters)});`}</Script></>;
}
