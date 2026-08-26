import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site";

export const metadata = {
  title: "Blog: Florida Immobilienmarkt | Aktuell & auf Deutsch",
  alternates: { canonical: "/blog" },
  description:
    "Monatliche Marktberichte, Kaufratgeber und aktuelle Entwicklungen für Naples, Marco Island, Bonita Springs und Estero.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Expertenwissen</p>
      <h1 className="mt-2 font-serif text-4xl text-stone-900">
        Florida Immobilienmarkt – aktuell & auf Deutsch
      </h1>
      <p className="mt-4 max-w-2xl text-stone-600">
        Monatliche Marktberichte, Kaufratgeber und aktuelle Entwicklungen für
        Naples, Marco Island, Bonita Springs und Estero.
      </p>

      <div className="mt-10 space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-6 overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row"
          >
            <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-64">
              <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center py-2">
              <p className="text-xs uppercase tracking-wide text-stone-500">
                Marktbericht · {post.date} · {post.readTime}
              </p>
              <h2 className="mt-2 font-serif text-xl text-stone-900">{post.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-stone-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <h2 className="font-serif text-2xl text-stone-900">Persönliche Beratung auf Deutsch</h2>
        <p className="mt-2 text-stone-600">
          Fragen zum aktuellen Markt? Manuela Schinagl berät Sie unverbindlich und kostenlos.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex items-center rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]"
        >
          Jetzt kontaktieren
        </Link>
      </div>
    </div>
  );
}
