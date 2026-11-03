import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/all-posts";
import { novemberReport } from "@/lib/blog-november-2026";
import { BlogRich } from "@/components/blog-rich";

const BASE = "https://floridaimmobilienmarkt.de";

const plain = (t: string) =>
  t.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\*\*?/g, "").trim();

// Build the FAQPage schema from the visible FAQ (each h3 + the paragraph that follows),
// so schema and page can never drift apart.
function faqFromContent(blocks: typeof novemberReport.content) {
  const start = blocks.findIndex((b) => b.type === "h2" && b.text.startsWith("Häufige Fragen"));
  if (start < 0) return [];
  const out: { "@type": "Question"; name: string; acceptedAnswer: { "@type": "Answer"; text: string } }[] = [];
  for (let i = start + 1; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === "h2") break;
    const next = blocks[i + 1];
    if (b.type === "h3" && next && next.type === "p") {
      out.push({ "@type": "Question", name: plain(b.text), acceptedAnswer: { "@type": "Answer", text: plain(next.text) } });
    }
  }
  return out;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) return {};
  if (slug === novemberReport.slug) {
    const m = novemberReport.meta;
    const url = `${BASE}/blog/${slug}`;
    return {
      title: { absolute: m.title },
      description: m.description,
      alternates: { canonical: url },
      robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      openGraph: {
        type: "article",
        locale: "de_DE",
        siteName: "floridaimmobilienmarkt.de",
        title: m.ogTitle,
        description: m.ogDescription,
        url,
        publishedTime: m.publishedTime,
        section: m.section,
        tags: m.tags,
        images: [{ url: m.image, width: 1200, height: 630, alt: m.imageAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: m.twitterTitle,
        description: m.twitterDescription,
        images: [{ url: m.image, alt: m.imageAlt }],
      },
    };
  }
  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { images: [{ url: post.image }] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) notFound();
  const rich = slug === novemberReport.slug ? novemberReport : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {rich &&
        rich.jsonLd.map((d, i) => {
          const faq = faqFromContent(rich.content);
          const data = d["@type"] === "FAQPage" && faq.length ? { ...d, mainEntity: faq } : d;
          return <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
        })}
      <p className="text-xs uppercase tracking-wide text-stone-500">
        Marktbericht · {post.date} · {post.readTime}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-stone-900">{post.title}</h1>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl md:h-96">
        <Image src={post.image} alt={post.imageAlt ?? post.title} fill className="object-cover" priority />
      </div>

      <div className="prose prose-stone mt-10 max-w-none">
        {rich ? (
          <>
            <BlogRich blocks={rich.content} />
            <h2>Weiterführend</h2>
            <ul>
              {rich.related.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : post.content ? (
          post.content.map((block, i) =>
            block.type === "h2" ? (
              <h2 key={i}>{block.text}</h2>
            ) : (
              <p key={i}>{block.text}</p>
            )
          )
        ) : (
          <>
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
          </>
        )}
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
