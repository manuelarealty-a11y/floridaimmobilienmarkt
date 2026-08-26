import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BedDouble, Bath, Home as HomeIcon, MapPin } from "lucide-react";
import { properties, regions, site } from "@/lib/site";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((x) => x.slug === slug);
  if (!property) return {};
  return {
    title: `${property.title} | ${property.price}`,
    description: property.description,
    alternates: { canonical: `/objekte/${property.slug}` },
    openGraph: { images: [{ url: property.image }] },
  };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((x) => x.slug === slug);
  if (!property) notFound();
  const region = regions.find((r) => r.slug === property.region);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-[480px]">
        <Image src={property.image} alt={property.title} fill className="object-cover" priority />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="flex items-center gap-1 text-sm text-stone-500">
            <MapPin className="h-4 w-4" /> {property.location}
          </p>
          <h1 className="mt-2 font-serif text-3xl text-stone-900">{property.title}</h1>
          <p className="mt-4 text-lg text-stone-700">{property.description}</p>

          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center gap-1">
              <BedDouble className="h-5 w-5 text-[#0f6b5c]" />
              <span className="text-sm text-stone-700">{property.beds} Zimmer</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bath className="h-5 w-5 text-[#0f6b5c]" />
              <span className="text-sm text-stone-700">{property.baths} Bad</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <HomeIcon className="h-5 w-5 text-[#0f6b5c]" />
              <span className="text-sm text-stone-700">{property.size}</span>
            </div>
          </div>

          {region && (
            <p className="mt-8 text-sm text-stone-600">
              Mehr über diese Lage:{" "}
              <Link href={`/regionen/${region.slug}`} className="text-[#0f6b5c] hover:underline">
                {region.name} Immobilienmarkt
              </Link>
            </p>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="font-serif text-3xl text-stone-900">{property.price}</p>
          <p className="text-sm text-stone-500">{property.type}</p>
          <hr className="my-6 border-stone-200" />
          <p className="text-sm text-stone-600">
            Interesse an diesem Objekt? Manuela berät Sie persönlich auf Deutsch.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 block rounded-full bg-[#0f6b5c] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0b5346]"
          >
            Besichtigung anfragen
          </Link>
          <a href={site.phoneHref} className="mt-3 block text-center text-sm text-stone-600 hover:text-[#0f6b5c]">
            {site.phone}
          </a>
        </aside>
      </div>
    </div>
  );
}
