import Link from "next/link";
import { TrendingUp, TrendingDown, Activity, ArrowRight } from "lucide-react";
import { regions, marketStats } from "@/lib/site";

export const metadata = {
  title: "Immobilienmarkt Southwest Florida 2026 – Preise, Trends, Kaufchancen",
  alternates: { canonical: "/markt" },
  description:
    "Aktueller Marktbericht Southwest Florida: Median-Verkaufspreise und Trends für Naples, Marco Island, Bonita Springs und Estero – Quellen: Redfin, Zillow.",
};

export default function MarktPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[#0f6b5c]">Marktberichte</p>
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
