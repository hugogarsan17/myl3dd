@'
"use client"; // quítalo si no usas hooks/cliente

type PageProps = {
  params: { slug: string }
};

export default function Page({ params }: PageProps) {
  const { slug } = params;
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Servicio: {slug}</h1>
      <p>Contenido del servicio {slug}…</p>
    </main>
  );
}

// Opcional: pre-render de slugs conocidos
// export async function generateStaticParams() {
//   return [{ slug: "modelado-3d" }, { slug: "renderizado" }];
// }

// Opcional
export const metadata = { title: "Servicios" };
'@ | Set-Content -Encoding UTF8 "src/app/servicios/[slug]/page.tsx"
