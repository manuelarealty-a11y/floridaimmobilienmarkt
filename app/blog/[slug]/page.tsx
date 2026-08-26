import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Florida Immobilienmarkt`,
    description: post.excerpt,
    alternates: { canonical: `https://floridaimmobilienkauf.de/blog/${post.slug}` },
    openGraph: { images: [{ url: post.image }] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-stone-500">
        Marktbericht · {post.date} · {post.readTime}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-stone-900">{post.title}</h1>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl md:h-96">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="prose prose-stone mt-10 max-w-none">
        <p>{post.excerpt}</p>
        <p>
          Als deutschsprachige Maklerin begleite ich meine Kunden seit über 17
          Jahren durch den Immobilienmarkt in Southwest Florida. Dieser Bericht
          fasst die wichtigsten Entwicklungen für Naples, Marco Island, Bonita
          Springs und Estero zusammen.
        </p>
        <p>
          Möchten Sie eine individuelle Einschätzung für Ihre Zielregion oder
          ein konkretes Objekt? Kontaktieren Sie mich gerne für ein
          kostenloses, unverbindliches Beratungsgespräch auf Deutsch.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <h2 className="font-serif text-2xl text-stone-900">Persönliche Beratung auf Deutsch</h2>
        <p className="mt-2 text-stone-600">Manuela Schinagl berät Sie unverbindlich und kostenlos.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/kontakt" className="rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]">
            Jetzt kontaktieren
          </Link>
          <a href={site.phoneHref} className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100">
            {site.phone}
          </a>
        </div>
      </div>
    </article>
  );
}
