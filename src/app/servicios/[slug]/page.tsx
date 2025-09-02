// src/app/servicios/[slug]/page.tsx

type PageProps = {
  params: { slug: string }
};

// Quita "use client" si no usas hooks ni APIs del navegador
// "use client";

export default function Page({ params }: PageProps) {
  const { slug } = params;
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Servicio: {slug}</h1>
      <p>Contenido del servicio {slug}…</p>
    </main>
  );
}

// (Opcional) Solo si quieres SSG de algunos slugs:
export async function generateStaticParams() {
  return [{ slug: "modelado-3d" }, { slug: "renderizado" }];
}

// (Opcional)
export const metadata = { title: "Servicios" };
