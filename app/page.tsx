import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MapPin, ShieldCheck } from "lucide-react";
import { site, regions, properties, blogPosts } from "@/lib/site";

const faqs = [
  {
    q: "Kann ich als Deutscher in Florida eine Immobilie kaufen?",
    a: "Ja, der Immobilienkauf in Florida ist für Ausländer – auch ohne US-Visum oder Aufenthaltstitel – problemlos möglich. Es gibt keine Beschränkungen für ausländische Käufer.",
  },
  {
    q: "Brauche ich eine US-amerikanische Bank für die Finanzierung?",
    a: "Eine Finanzierung über US-Banken ist möglich, aber viele unserer Kunden aus dem DACH-Raum kaufen mit Eigenkapital. Wir beraten Sie zu beiden Optionen.",
  },
  {
    q: "Welche Nebenkosten fallen beim Kauf an?",
    a: "Typischerweise 2–4% des Kaufpreises: Title Insurance, Notargebühren, Stempelsteuer und Maklergebühren (in Florida üblicherweise vom Verkäufer getragen).",
  },
  {
    q: "Kann ich die Immobilie vermieten, wenn ich nicht in Florida bin?",
    a: "Ja, viele unserer Käufer nutzen die Immobilie als Ferienvermietung (z.B. über Airbnb/VRBO) oder als Langzeitmiete. Wir empfehlen erfahrene Property-Manager.",
  },
];

const steps = [
  { n: "01", title: "Marktanalyse", desc: "Aktuelle Marktberichte, Preise und Trends für Ihre Wunschregion." },
  { n: "02", title: "Objektauswahl", desc: "Besichtigungen – auch per Video für Käufer aus Deutschland, Österreich und der Schweiz." },
  { n: "03", title: "Angebot & Verhandlung", desc: "Kaufangebot einreichen, Preisverhandlung, Vertrag prüfen." },
  { n: "04", title: "Closing & Übergabe", desc: "Title-Prüfung, Signing, Schlüsselübergabe – fertig!" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={site.heroImage}
            alt="Luxusvilla in Southwest Florida"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-stone-950/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7fd9c4]">
            Marktberichte & Immobilien · Southwest Florida seit 2009
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl">
            Der deutschsprachige Immobilienmarkt-Guide für Southwest Florida
          </h1>
          <p className="mt-5 max-w-xl text-stone-200">
            Monatliche Marktberichte, Regionsprofile und ausgewählte Objekte in
            Marco Island, Naples, Bonita Springs und Estero – betreut von Ihrer
            deutschsprachigen Maklerin Manuela Schinagl.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/markt"
              className="rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]"
            >
              Aktuellen Marktbericht lesen
            </Link>
            <Link
              href="/objekte"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Immobilien ansehen
            </Link>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["17+", "Jahre Erfahrung"],
              ["5,0/5,0", "49 Reviews"],
              ["4", "Regionen SW-Florida"],
              [site.license, "FL-Maklerlizenz"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-2xl text-white">{n}</p>
                <p className="text-xs text-stone-300">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Regionen</p>
            <h2 className="mt-2 font-serif text-3xl text-stone-900">
              Regionen in Southwest Florida
            </h2>
          </div>
          <Link href="/regionen" className="hidden items-center gap-1 text-sm text-[#0f6b5c] hover:underline md:flex">
            Alle Regionen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((r) => (
            <Link
              key={r.slug}
              href={`/regionen/${r.slug}`}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={r.image}
                  alt={`${r.name} Immobilien Florida`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-stone-900">{r.name}</h3>
                <p className="mt-1 text-sm text-stone-500">{r.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Manuela */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Warum Manuela Realty International?</p>
            <h2 className="mt-2 font-serif text-3xl text-stone-900">
              Ihre Brücke zwischen zwei Immobilienmärkten
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                "Deutschsprachig – Beratung, Verhandlung und Abwicklung komplett auf Deutsch.",
                "Vor Ort in Florida – 950 N. Collier Blvd, Marco Island – persönlich erreichbar.",
                "17+ Jahre Marktkenntnis – seit 2009 aktiv im SW-Florida Immobilienmarkt.",
                "Top bewertet – 5,0/5,0, 49 Bewertungen auf RateMyAgent, 17 auf Google.",
                "Lizenzierte Maklerin – Florida Real Estate Broker BK3216655.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-stone-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0f6b5c]" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/ueber-manuela"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-[#0f6b5c] hover:underline"
            >
              Mehr über Manuela <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="relative mx-auto h-96 w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://floridaimmobilienkauf.de/manuela.jpg"
                alt="Manuela Schinagl – Immobilienmaklerin Florida"
                fill
                className="object-cover"
              />
            </div>
            <div className="mx-auto mt-4 flex max-w-sm items-center justify-center gap-2 text-sm text-stone-600">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              5,0 / 5,0 ·{" "}
              <a href={site.rateMyAgent} target="_blank" rel="noreferrer" className="underline">
                49 Bewertungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Immobilien</p>
            <h2 className="mt-2 font-serif text-3xl text-stone-900">Ausgewählte Objekte</h2>
          </div>
          <Link href="/objekte" className="hidden items-center gap-1 text-sm text-[#0f6b5c] hover:underline md:flex">
            Alle Objekte <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {properties.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/objekte/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
                  {p.beds} Zi. · {p.baths} Bad · {p.size}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-stone-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7fd9c4]">So läuft es ab</p>
          <h2 className="mt-2 font-serif text-3xl">Immobilienkauf in Florida – Schritt für Schritt</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-serif text-3xl text-[#3fae98]">{s.n}</p>
                <h3 className="mt-2 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-300">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/markt"
            className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-[#7fd9c4] hover:underline"
          >
            Vollständigen Marktbericht lesen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Expertenwissen</p>
            <h2 className="mt-2 font-serif text-3xl text-stone-900">Aktuelle Marktberichte</h2>
          </div>
          <Link href="/blog" className="hidden items-center gap-1 text-sm text-[#0f6b5c] hover:underline md:flex">
            Zum Blog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs text-stone-500">{post.date} · {post.readTime}</p>
                <h3 className="mt-2 font-serif text-lg text-stone-900">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">FAQ</p>
          <h2 className="mt-2 text-center font-serif text-3xl text-stone-900">
            Häufige Fragen zum Immobilienkauf in Florida
          </h2>
          <div className="mt-10 divide-y divide-stone-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-stone-900">
                  <span className="font-medium">{f.q}</span>
                  <span className="ml-4 text-[#0f6b5c] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-stone-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-stone-900">Bereit für Ihre Florida-Immobilie?</h2>
        <p className="mx-auto mt-3 max-w-xl text-stone-600">
          Starten Sie mit einem kostenlosen, unverbindlichen Beratungsgespräch auf Deutsch.
          Manuela meldet sich persönlich bei Ihnen.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/kontakt" className="rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]">
            Jetzt Beratung anfragen
          </Link>
          <a href={site.phoneHref} className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100">
            {site.phone} anrufen
          </a>
        </div>
      </section>
    </div>
  );
}
