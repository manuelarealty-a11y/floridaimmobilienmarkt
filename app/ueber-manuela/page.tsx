import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = {
  title: "Manuela Schinagl | Immobilienmaklerin Florida Deutsch",
  alternates: { canonical: "/ueber-manuela" },
  description:
    "Manuela Schinagl – Österreicherin, Brokerin in SW-Florida seit 2009. 3× Top 5 Agent (RateMyAgent). Beratung für Käufer aus Deutschland, Österreich & Schweiz.",
};

const stats = [
  ["17+", "Jahre in SW-Florida"],
  ["2009", "FL Real Estate License seit"],
  ["3×", "Collier County Top 5 Agent"],
  ["49", "Fünf-Sterne-Bewertungen"],
];

const qualifications = [
  "Florida Real Estate License – aktiv seit 2009",
  "Licensed Real Estate Broker",
  "Mitglied der National Association of Realtors (NAR)",
  "Büro auf Marco Island seit 2009",
  "Spezialisierung auf D-A-CH (Deutschland, Österreich & Schweiz)-Klientel",
];

const testimonials = [
  {
    quote:
      "Manuela hat uns durch den gesamten Kaufprozess begleitet – von der ersten Online-Besichtigung bis zur Schlüsselübergabe. Als Deutsche hätten wir ohne sie nie so reibungslos eine Immobilie in Florida kaufen können.",
    author: "Klaus & Brigitte M.",
    from: "München → Marco Island",
  },
  {
    quote:
      "Endlich ein deutschsprachiger Makler, der den amerikanischen Markt wirklich kennt. Wir haben 8% unter Listenpreis gekauft – ein Ergebnis, das für sich spricht.",
    author: "Thomas R.",
    from: "Hamburg → Naples, Port Royal",
  },
  {
    quote:
      "Wir haben unsere Traumimmobilie in Bonita Springs gefunden – dank Manuela. Besonders geschätzt haben wir ihre Ehrlichkeit: Sie hat uns auch von einem Objekt abgeraten, das nicht optimal war.",
    author: "Sabine & Peter K.",
    from: "Wien → Bonita Springs",
  },
  {
    quote:
      "Manuela analysierte den Markt präzise und empfahl Miromar Lakes in Estero – die beste Empfehlung, die ich hätte bekommen können.",
    author: "Markus H.",
    from: "Zürich → Estero, Miromar Lakes",
  },
];

export default function UeberManuelaPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Ihre Ansprechpartnerin</p>
          <h1 className="mt-2 font-serif text-4xl text-stone-900">
            Manuela Schinagl – Ihre Maklerin in SW-Florida
          </h1>
          <p className="mt-5 text-stone-700">
            Als gebürtige Österreicherin lebe und arbeite ich seit mehr als 17
            Jahren in Southwest Florida. Meine Mission: deutschsprachigen
            Käufern den Weg zu ihrer Traumimmobilie ebnen – transparent, ehrlich
            und immer in Ihrem besten Interesse.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/kontakt" className="rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]">
              Erstgespräch anfragen
            </Link>
            <a href={site.phoneHref} className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100">
              {site.phone}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-2xl text-stone-900">{n}</p>
                <p className="text-xs text-stone-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative mx-auto h-96 w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
            <Image src="https://floridaimmobilienkauf.de/manuela.jpg" alt="Manuela Schinagl" fill className="object-cover" />
          </div>
          <div className="mx-auto mt-4 flex max-w-sm items-center justify-center gap-2 text-sm text-stone-600">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            5,0 / 5,0 ·{" "}
            <a href={site.rateMyAgent} target="_blank" rel="noreferrer" className="underline">
              49 Reviews RateMyAgent
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl text-stone-900">Meine Geschichte in Southwest Florida</h2>
          <div className="prose prose-stone mt-6 max-w-none">
            <p>
              Ich verstehe die besonderen Herausforderungen, mit denen
              europäische Käufer beim Immobilienerwerb in den USA konfrontiert
              sind: andere Rechtssysteme, unbekannte Finanzierungsstrukturen,
              kulturelle Unterschiede im Verhandlungsprozess. Meine Aufgabe ist
              es, diese Komplexität für Sie zu navigieren – transparent,
              ehrlich und immer in Ihrem besten Interesse.
            </p>
            <h3>Mein Büro auf Marco Island</h3>
            <p>
              Mein Büro befindet sich auf Marco Island, dem Herzstück meines
              Tätigkeitsgebiets. Von hier aus betreue ich Kunden in Marco
              Island, Naples, Bonita Springs, Estero und Fort Myers Beach –
              persönlich, zuverlässig und mit der tiefen Marktkenntnis, die nur
              durch jahrelange Präsenz vor Ort entsteht.
            </p>
            <h3>Was mich von anderen Maklern unterscheidet</h3>
            <p>
              Als deutschsprachige Brokerin in einer anglophonen Welt bin ich
              Ihre Brücke zwischen zwei Kulturen. Meine Philosophie: Ehrlichkeit
              vor allem. Ich rate Ihnen auch von einem Kauf ab, wenn ich das
              Objekt oder die Konditionen nicht für optimal halte.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-xl text-stone-900">Qualifikationen</h3>
          <ul className="mt-4 space-y-2 text-stone-700">
            {qualifications.map((q) => (
              <li key={q}>• {q}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-3xl text-stone-900">Was Kunden sagen</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-stone-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-stone-900">{t.author}</p>
              <p className="text-xs text-stone-500">{t.from}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
