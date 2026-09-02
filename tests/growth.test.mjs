import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const slugs=["pantallas-led-escaparates","precio-pantalla-led","pantallas-led-interior","pantallas-led-exterior","digital-signage"];
test("las cinco rutas SEO usan la plantilla compartida",()=>{for(const slug of slugs){const path=`src/app/${slug}/page.tsx`;assert.ok(existsSync(path));const source=readFileSync(path,"utf8");assert.match(source,/SeoLanding/);assert.match(source,/canonical/);}});
test("la landing Ads no se indexa y declara canonical",()=>{const source=readFileSync("src/app/lp/pantallas-led-escaparates/page.tsx","utf8");assert.match(source,/index:false/);assert.match(source,/canonical:\"\/pantallas-led-escaparates\"/);});
test("el formulario y servidor limitan los adjuntos",()=>{const client=readFileSync("src/app/Components/contact/Contact.tsx","utf8");const server=readFileSync("src/app/api/contact/route.ts","utf8");for(const source of [client,server]){assert.match(source,/image\/jpeg/);assert.match(source,/image\/png/);assert.match(source,/application\/pdf/);assert.match(source,/8\s*\*\s*1024\s*\*\s*1024/);}});
test("analytics no contiene identificadores ficticios",()=>{const source=readFileSync("src/app/Components/analytics/Analytics.tsx","utf8");assert.match(source,/NEXT_PUBLIC_GA_MEASUREMENT_ID/);assert.match(source,/NEXT_PUBLIC_GTM_CONTAINER_ID/);assert.doesNotMatch(source,/G-[A-Z0-9]{8,}/);});
