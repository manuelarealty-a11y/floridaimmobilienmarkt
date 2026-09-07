import Link from "next/link";
import { TrendingUp, TrendingDown, Activity, ArrowRight } from "lucide-react";
import { regions, marketStats } from "@/lib/site";

export const metadata = {
  title: "Immobilienmarkt SW-Florida 2026 – für Käufer & Verkäufer",
  alternates: { canonical: "/markt" },
  description:
    "Marktbericht Southwest Florida für Käufer und Verkäufer: Median-Preise, Trends und was das für Ihre Kauf- oder Verkaufsentscheidung bedeutet.",
  keywords: [
    "Immobilienmarkt Southwest Florida",
    "Marktbericht Florida Verkäufer",
    "Haus verkaufen Florida Preis",
    "Verkaufspreis Immobilie Florida 2026",
    "Immobilienmarkt Naples Marco Island Verkäufer",
  ],
};

export default function MarktPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Marktberichte für Käufer &amp; Verkäufer</p>
      <h1 className="mt-2 font-serif text-4xl text-stone-900">
        Immobilienmarkt Southwest Florida 2026
      </h1>
      <p className="mt-4 max-w-2xl text-stone-600">
        Aktuelle Median-Verkaufspreise und Markttrends für Marco Island,
        Naples, Bonita Springs und Estero – recherchiert über Redfin, Zillow
        und Realtor.com. Für eine detaillierte, aktuelle Bewertung Ihrer
        Zielregion empfehlen wir ein persönliches Beratungsgespräch mit
        Manuela Schinagl.
      </p>
      <p className="mt-3 max-w-2xl text-sm text-stone-500">
        Dies ist der vollständige, laufend aktualisierte Marktbericht für
        Southwest Florida. Was diese Zahlen konkret für Ihre Kaufentscheidung
        bedeuten, lesen Sie in unserer{" "}
        <a
          href="https://floridaimmobilienkauf.de/marktbericht"
          className="text-[#0f6b5c] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marktanalyse für Käufer auf floridaimmobilienkauf.de
        </a>.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {marketStats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-stone-500">{s.label}</p>
              {s.trend === "up" && <TrendingUp className="h-4 w-4 text-[#0f6b5c]" />}
              {s.trend === "down" && <TrendingDown className="h-4 w-4 text-[#0f6b5c]" />}
              {s.trend === "flat" && <Activity className="h-4 w-4 text-stone-400" />}
            </div>
            <p className="mt-3 font-serif text-2xl text-stone-900">{s.value}</p>
            <p className="mt-1 text-xs text-stone-500">{s.change}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-serif text-2xl text-stone-900">Marktdaten nach Region</h2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-stone-50 text-xs uppercase tracking-wide text-stone-500">
            <tr>
              <th className="px-6 py-4">Region</th>
              <th className="px-6 py-4">Median-Verkaufspreis</th>
              <th className="px-6 py-4">Trend</th>
              <th className="px-6 py-4">Charakter</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {regions.map((r) => (
              <tr key={r.slug}>
                <td className="px-6 py-4 font-medium text-stone-900">{r.name}</td>
                <td className="px-6 py-4 text-stone-700">{r.medianPrice}</td>
                <td className="px-6 py-4 text-stone-600">{r.trend}</td>
                <td className="px-6 py-4 text-stone-600">{r.tagline}</td>
                <td className="px-6 py-4">
                  <Link href={`/regionen/${r.slug}`} className="inline-flex items-center gap-1 text-[#0f6b5c] hover:underline">
                    Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-stone-400">
        Quellen: {regions.map((r) => r.medianSource).filter((v, i, a) => a.indexOf(v) === i).join(" · ")}
      </p>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-stone-900">Was den Markt aktuell bewegt</h2>
          <ul className="mt-4 space-y-4 text-stone-700">
            <li>
              <strong>Naples bleibt Preisspitzenreiter:</strong> Mit einem
              Median-Verkaufspreis von 1,4 Mio. $ und +3,5% Jahreswachstum
              (Redfin, Juni 2026) ist Naples weiterhin die exklusivste Region
              in Southwest Florida.
            </li>
            <li>
              <strong>Marco Island und Bonita Springs stabilisieren sich:</strong>{" "}
              Nach den starken Preisanstiegen der Vorjahre zeigen sich hier
              leicht rückläufige Median-Preise – ein Fenster für Käufer mit
              mehr Verhandlungsspielraum.
            </li>
            <li>
              <strong>Estero mit spürbarer Korrektur:</strong> -7,0% ggü.
              Vorjahr (Redfin, Juni 2026) machen die wachsende Gemeinde
              aktuell besonders attraktiv für Erstkäufer und Investoren.
            </li>
            <li>
              <strong>Hurrikansaison im Blick:</strong> Juni bis November gilt
              als ruhigere Verkaufsphase – oft mit mehr Auswahl und
              Verhandlungsspielraum für gut informierte Käufer.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-stone-900">Für wen lohnt sich der Einstieg jetzt?</h2>
          <p className="mt-4 text-stone-700">
            Investoren, die auf Ferienvermietung setzen, profitieren aktuell
            von moderateren Einstiegspreisen in Estero und Bonita Springs.
            Käufer, die einen Alters- oder Zweitwohnsitz suchen, finden auf
            Marco Island und in Naples weiterhin ein begrenztes, aber
            hochwertiges Angebot – trotz leicht steigender Verkaufszeiten.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center gap-1 rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]"
          >
            Persönliche Markteinschätzung anfragen
          </Link>
        </div>
      </section>

      <section id="verkaeufer" className="mt-16 rounded-2xl border border-stone-200 bg-stone-50 p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Für Verkäufer</p>
        <h2 className="mt-2 font-serif text-2xl text-stone-900">
          Was der Markt 2026 für Ihren Verkauf bedeutet
        </h2>
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <ul className="space-y-4 text-stone-700">
            <li>
              <strong>Naples:</strong> Weiter steigende Preise (+3,5% ggü.
              Vorjahr) sprechen für eine realistische, aber selbstbewusste
              Preisstrategie – besonders bei hochwertigen und Wasserlagen.
            </li>
            <li>
              <strong>Marco Island &amp; Bonita Springs:</strong> Leicht
              rückläufige Median-Preise bedeuten mehr Verhandlungsbereitschaft
              der Käuferseite – eine marktgerechte Einstiegspreisstrategie ist
              hier entscheidend für eine zügige Vermarktung.
            </li>
            <li>
              <strong>Estero:</strong> Die spürbare Preiskorrektur (-7,0%)
              erfordert eine besonders sorgfältige Bewertung, um im
              aktuellen Käufermarkt konkurrenzfähig zu bleiben.
            </li>
            <li>
              <strong>Timing:</strong> Die ruhigere Verkaufsphase Juni bis
              November eignet sich oft gut zur Vorbereitung (Home Staging,
              Fotos, Preisstrategie) für den Verkaufsstart zur Hochsaison
              ab Dezember.
            </li>
          </ul>
          <div>
            <p className="text-stone-700">
              Eine erfolgreiche Preisstrategie berücksichtigt nicht nur den
              regionalen Median, sondern auch Lage, Zustand und
              Vergleichsverkäufe Ihrer konkreten Immobilie. Eine kostenlose
              erste Einschätzung hilft, realistische Erwartungen zu setzen.
            </p>
            <Link
              href="https://floridaimmobilienkauf.de/ratgeber/verkaufsablauf-florida-deutsche"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-[#0f6b5c] hover:underline"
            >
              Verkaufsablauf &amp; Steuertipps für Verkäufer <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <br />
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-1 rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346]"
            >
              Kostenlose Verkaufseinschätzung anfragen
            </Link>
          </div>
        </div>
      </section>

      <p className="mt-16 text-xs text-stone-400">
        Hinweis: Die genannten Median-Verkaufspreise stammen aus öffentlich
        zugänglichen Marktdaten (Redfin, Zillow, Realtor.com, Stand Sommer
        2026) und dienen der ersten Orientierung. Sie ersetzen keine
        individuelle Marktbewertung Ihrer Zielimmobilie. Für eine verbindliche
        Einschätzung kontaktieren Sie uns bitte direkt.
      </p>
    </div>
  );
}
