import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { properties } from "@/lib/site";

export const metadata = {
  title: "Florida Immobilien kaufen | Villen, Condos, Waterfront",
  alternates: { canonical: "https://floridaimmobilienkauf.de/objekte" },
  description:
    "Exklusive Villen, Condos, Waterfront-Objekte und Investments in Marco Island, Naples, Bonita Springs und Estero.",
};

export default function ObjektePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Immobilien</p>
      <h1 className="mt-2 font-serif text-4xl text-stone-900">Florida Immobilien kaufen</h1>
      <p className="mt-4 max-w-2xl text-stone-600">
        Exklusive Villen, Condos, Waterfront-Objekte und Investments in Marco
        Island, Naples, Bonita Springs und Estero – persönlich beraten von
        Manuela Schinagl.
      </p>
      <p className="mt-6 text-sm text-stone-500">{properties.length} Objekte gefunden</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <Link
            key={p.slug}
            href={`/objekte/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-800">
                {p.type}
              </span>
            </div>
            <div className="p-5">
              <p className="font-serif text-lg text-stone-900">{p.price}</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-stone-500">
                <MapPin className="h-3.5 w-3.5" /> {p.location}
              </p>
              <p className="mt-2 line-clamp-2 text-sm text-stone-600">{p.title}</p>
              <p className="mt-3 text-xs text-stone-500">
                {p.beds} Zi. · {p.baths} Bad · {p.size} · Details →
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <h2 className="font-serif text-2xl text-stone-900">Ihr Traumobjekt nicht dabei?</h2>
        <p className="mt-2 text-stone-600">
          Manuela hat Zugang zu weiteren Off-Market-Objekten und exklusiven Listings – sprechen Sie uns an.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex items-center rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]"
        >
          Kostenlose Beratung anfordern
        </Link>
      </div>
    </div>
  );
}
