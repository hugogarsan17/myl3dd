// src/app/servicios/[slug]/page.tsx

export const metadata = { title: "Servicios" };

export default function Page(props: unknown) {
  const { params } = props as { params: { slug: string } };
  const slug = params.slug;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Servicio: {slug}</h1>
      <p>Contenido del servicio {slug}…</p>
    </main>
  );
}
