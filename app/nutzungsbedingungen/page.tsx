import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | floridaimmobilienmarkt.de",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://floridaimmobilienmarkt.de/nutzungsbedingungen" },
};

export default function NutzungsbedingungenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="flex items-center gap-2 text-stone-400 text-sm mb-8">
        <Link href="/" className="hover:text-[#0f6b5c]">Start</Link>
        <span>/</span>
        <span>Nutzungsbedingungen</span>
      </nav>
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Nutzungsbedingungen</h1>
      <p className="text-stone-500 text-sm mb-10">Stand: September 2026</p>

      <div className="space-y-8 text-stone-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">1. Geltungsbereich</h2>
          <p>
            Diese Nutzungsbedingungen gelten für die Nutzung der Website floridaimmobilienmarkt.de
            ("Website"), betrieben von Manuela Schinagl, Manuela Realty International, lizenzierte
            Immobilienmaklerin in Florida (License BK3216655). Mit dem Zugriff auf diese Website erklären
            Sie sich mit diesen Bedingungen einverstanden.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">2. Informationscharakter der Inhalte</h2>
          <p>
            Sämtliche Inhalte dieser Website — insbesondere Marktberichte, Preisanalysen, Regionsprofile
            und Blogbeiträge — dienen ausschließlich der allgemeinen Information und stellen keine
            Rechts-, Steuer- oder Finanzberatung dar. Marktdaten basieren auf öffentlich zugänglichen
            Quellen (z.&nbsp;B. Redfin, Zillow, regionale MLS-Daten) und werden nach bestem Wissen
            aufbereitet, jedoch ohne Gewähr für Richtigkeit, Vollständigkeit oder Aktualität. Vor
            geschäftlichen Entscheidungen sollten Sie qualifizierte Fachleute konsultieren.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">3. Kein Angebot, keine Beauftragung</h2>
          <p>
            Die Nutzung dieser Website oder die Kontaktaufnahme über Formulare oder E-Mail begründet
            keinen Makler- oder Beratungsvertrag. Ein solcher kommt erst durch gesonderte, ausdrückliche
            Vereinbarung zustande.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">4. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter (u.&nbsp;a. floridaimmobilienkauf.de,
            Social-Media-Plattformen, Google Maps). Wir haben keinen Einfluss auf deren Inhalte und
            übernehmen dafür keine Haftung. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter verantwortlich.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">5. Urheberrecht</h2>
          <p>
            Alle Inhalte dieser Website (Texte, Grafiken, Bilder) sind, sofern nicht anders gekennzeichnet,
            Eigentum von Manuela Schinagl / Manuela Realty International und dürfen ohne vorherige
            schriftliche Zustimmung nicht kopiert, vervielfältigt oder verbreitet werden.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">6. Haftungsausschluss</h2>
          <p>
            Die Website und ihre Inhalte werden "wie besehen" ohne ausdrückliche oder stillschweigende
            Garantien bereitgestellt. Soweit gesetzlich zulässig, haftet Manuela Schinagl / Manuela Realty
            International nicht für Schäden, die aus der Nutzung dieser Website oder dem Vertrauen auf
            deren Inhalte entstehen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">7. Änderungen dieser Nutzungsbedingungen</h2>
          <p>
            Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. Die fortgesetzte Nutzung
            der Website nach Veröffentlichung von Änderungen gilt als Zustimmung zu den geänderten
            Bedingungen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">8. Kontakt</h2>
          <p>
            Fragen zu diesen Nutzungsbedingungen richten Sie bitte an{" "}
            <a href="mailto:office@floridaimmobilienmarkt.de" className="text-[#0f6b5c] hover:underline">
              office@floridaimmobilienmarkt.de
            </a>{" "}
            oder{" "}
            <a href="tel:+12394505622" className="text-[#0f6b5c] hover:underline">+1 (239) 450-5622</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
