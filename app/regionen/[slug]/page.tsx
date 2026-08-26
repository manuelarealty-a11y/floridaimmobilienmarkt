import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { regions, properties, site } from "@/lib/site";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = regions.find((x) => x.slug === slug);
  if (!region) return {};
  return {
    title: `${region.name} Immobilien Florida | Preise & Objekte`,
    description: `${region.tagline}. Aktuelle Marktdaten und Objekte in ${region.name}, betreut von Maklerin Manuela Schinagl.`,
    alternates: { canonical: `/regionen/${region.slug}` },
    openGraph: { images: [{ url: region.image }] },
  };
}

export default async function RegionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = regions.find((x) => x.slug === slug);
  if (!region) notFound();

  const localProperties = properties.filter((p) => p.region === region.slug);

  return (
    <div>
      <section className="relative h-72 w-full overflow-hidden md:h-96">
        <Image src={region.image} alt={`${region.name} Immobilien Florida`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 py-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7fd9c4]">Region · Southwest Florida</p>
          <h1 className="mt-2 font-serif text-4xl text-white">{region.name}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-lg text-stone-700">{region.description}</p>
            <h2 className="mt-8 font-serif text-2xl text-stone-900">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {region.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#0f6b5c]" />
                  {h}
                </li>
              ))}
            </ul>

            {localProperties.length > 0 && (
              <>
                <h2 className="mt-12 font-serif text-2xl text-stone-900">
                  Objekte in {region.name}
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {localProperties.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/objekte/${p.slug}`}
                      className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-4">
                        <p className="font-serif text-stone-900">{p.price}</p>
                        <p className="mt-1 line-clamp-2 text-sm text-stone-600">{p.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.15em] text-stone-500">Marktdaten</p>
            <p className="mt-2 font-serif text-2xl text-stone-900">{region.medianPrice}</p>
            <p className="text-sm text-stone-500">{region.trend}</p>
            <p className="mt-1 text-xs text-stone-400">Quelle: {region.medianSource}</p>
            <Link
              href="/markt"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0f6b5c] hover:underline"
            >
              Vollständigen Marktbericht ansehen <ArrowRight className="h-4 w-4" />
            </Link>
            <hr className="my-6 border-stone-200" />
            <p className="text-sm text-stone-600">
              Interesse an {region.name}? Manuela berät Sie persönlich auf Deutsch.
            </p>
            <Link
              href="/kontakt"
              className="mt-4 block rounded-full bg-[#0f6b5c] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0b5346]"
            >
              Beratung anfragen
            </Link>
            <a href={site.phoneHref} className="mt-3 block text-center text-sm text-stone-600 hover:text-[#0f6b5c]">
              {site.phone}
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
