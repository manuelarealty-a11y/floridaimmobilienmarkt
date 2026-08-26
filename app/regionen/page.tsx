import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { regions } from "@/lib/site";

export const metadata = {
  title: "Regionen in Southwest Florida | Marco Island, Naples, Bonita Springs, Estero",
  alternates: { canonical: "/regionen" },
  description:
    "Vergleichen Sie die vier wichtigsten Immobilien-Regionen in Southwest Florida: Marco Island, Naples, Bonita Springs und Estero.",
};

export default function RegionenPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Regionen</p>
      <h1 className="mt-2 font-serif text-4xl text-stone-900">
        Regionen in Southwest Florida
      </h1>
      <p className="mt-4 max-w-2xl text-stone-600">
        Vier Regionen, vier Charaktere: von exklusiver Inselarchitektur auf Marco
        Island über mondäne Golf-Communities in Naples bis zu wachsenden,
        modernen Vierteln in Bonita Springs und Estero.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {regions.map((r) => (
          <Link
            key={r.slug}
            href={`/regionen/${r.slug}`}
            className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={r.image}
                alt={`${r.name} Immobilien Florida`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl text-stone-900">{r.name}</h2>
                <span className="text-sm text-stone-500">Median: {r.medianPrice}</span>
              </div>
              <p className="mt-2 text-sm text-stone-600">{r.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0f6b5c]">
                Region entdecken <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
