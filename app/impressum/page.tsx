import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | floridaimmobilienmarkt.de",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://floridaimmobilienmarkt.de/impressum" },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="flex items-center gap-2 text-stone-400 text-sm mb-8">
        <Link href="/" className="hover:text-[#0f6b5c]">Start</Link>
        <span>/</span>
        <span>Impressum</span>
      </nav>
      <h1 className="text-3xl font-bold text-stone-900 mb-8">Impressum</h1>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Manuela Realty International</strong><br />
            Manuela Schinagl<br />
            950 N. Collier Blvd, Suite #400<br />
            Marco Island, FL 34145<br />
            USA
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+12394505622" className="text-[#0f6b5c] hover:underline">+1 (239) 450-5622</a><br />
            E-Mail: <a href="mailto:office@floridaimmobilienmarkt.de" className="text-[#0f6b5c] hover:underline">office@floridaimmobilienmarkt.de</a><br />
            Website: floridaimmobilienmarkt.de
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Berufsbezeichnung &amp; Zulassung</h2>
          <p>
            Lizenzierte Immobilienmaklerin (Licensed Real Estate Broker)<br />
            Florida Real Estate License — aktiv seit 2004<br />
            Zulassende Behörde: Florida Department of Business and Professional Regulation (DBPR)<br />
            Mitglied der National Association of Realtors (NAR)
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Marktberichte, Immobilienpreise und Marktdaten ändern sich regelmäßig — alle Angaben sind unverbindlich.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin
            bzw. Erstellerin.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Verantwortlich für den Inhalt</h2>
          <p>
            Manuela Schinagl<br />
            950 N. Collier Blvd, Suite #400<br />
            Marco Island, FL 34145, USA
          </p>
        </section>
      </div>
    </div>
  );
}
