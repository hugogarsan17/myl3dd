# MYL3D Growth V1 — operación

## Analytics y consentimiento

La medición se carga solo tras aceptar la categoría **analítica**. Configure `NEXT_PUBLIC_GA_MEASUREMENT_ID` para GA4 directo **o** `NEXT_PUBLIC_GTM_CONTAINER_ID` para GTM; no configure ambos. La capa de datos recibe: `page_view` (GA4), `view_service`, `view_product`, `start_quote_form`, `submit_quote_form`, `lead`, `whatsapp_click`, `phone_click`, `email_click`, `upload_project_photo`, `cta_click` y los eventos reservados `calculator_start`/`calculator_complete`. El evento `lead` se emite tras una respuesta válida y se deduplica por ID durante la sesión.

En GTM, cree activadores de evento personalizado con esos nombres. Google Ads debe configurarse allí usando `GOOGLE_ADS_CONVERSION_ID` y `GOOGLE_ADS_LEAD_LABEL` como referencia operativa; la aplicación no inserta IDs ni carga GA4 y GTM simultáneamente.

## Leads y CRM

El endpoint `/api/contact` valida origen, campos, Turnstile y adjuntos (JPG, PNG o PDF, máximo 8 MB), envía aviso SMTP y confirmación. Configure las variables `MAIL_*`, Turnstile y el destinatario. `LEAD_WEBHOOK_URL` habilita un POST JSON genérico; `LEAD_WEBHOOK_SECRET` añade autorización Bearer. Un fallo de confirmación o webhook se registra sin invalidar el lead principal.

La atribución conserva durante la sesión `source`, `medium`, `campaign`, `term`, `content`, `gclid`, primera landing y referrer, y se adjunta al lead. Revise con asesoría legal la política y retención del CRM elegido.

## SEO y nuevas páginas

Las páginas comerciales se definen en `src/lib/seoPages.ts` y se renderizan con `SeoLanding`. Para añadir una página futura: agregue una entrada con texto revisado, cree su ruta fina con metadata única y añada el slug al sitemap solo si será pública e indexable. No publique páginas sin contenido útil y comercial. Para landings Ads use una ruta bajo `/lp`, metadata `noindex,follow`, canonical hacia la página SEO relacionada y un formulario temprano.

## Calculadora

No está activa. Consulte `docs/led-calculator.md`; faltan reglas técnicas y tarifas verificadas.

## Search Console después del despliegue

Envíe `/sitemap.xml`, inspeccione las seis URLs nuevas, valide canonical/noindex, cobertura y Core Web Vitals. Tras acumular datos, revise consultas comerciales en posiciones 5–20, impresiones con CTR bajo y posible canibalización. No había export de Search Console en el repositorio durante esta implementación.

## Variables manuales

Consulte `.env.example`. Son obligatorias para formulario: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` y un remitente/destinatario válido. Analytics, GTM, Ads y webhook son opcionales. Nunca publique secretos con prefijo `NEXT_PUBLIC_`.
