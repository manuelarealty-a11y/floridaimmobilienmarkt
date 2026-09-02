import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://floridaimmobilienmarkt.de";

export const metadata: Metadata = {
  title: { absolute: "Datenschutzerklärung | floridaimmobilienmarkt.de" },
  description:
    "Datenschutzerklärung gemäß DSGVO für floridaimmobilienmarkt.de — Informationen zur Verarbeitung personenbezogener Daten.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE_URL}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="flex items-center gap-2 text-stone-400 text-sm mb-8">
        <Link href="/" className="hover:text-[#0f6b5c]">Start</Link>
        <span>/</span>
        <span>Datenschutzerklärung</span>
      </nav>

      <h1 className="text-3xl font-bold text-stone-900 mb-2">Datenschutzerklärung</h1>
      <p className="text-stone-500 text-sm mb-10">Stand: September 2026 · Gemäß DSGVO (EU) 2016/679</p>

      <div className="space-y-10 text-stone-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">1. Verantwortliche Stelle</h2>
          <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website im Sinne der DSGVO ist:</p>
          <div className="bg-stone-50 rounded-xl p-4 mt-3 text-sm space-y-1">
            <p className="font-semibold">Manuela Schinagl</p>
            <p>Manuela Realty International</p>
            <p>950 N. Collier Blvd, Suite 400</p>
            <p>Marco Island, FL 34145, USA</p>
            <p>E-Mail: <a href="mailto:office@floridaimmobilienmarkt.de" className="text-[#0f6b5c] hover:underline">office@floridaimmobilienmarkt.de</a></p>
            <p>Telefon: <a href="tel:+12394505622" className="text-[#0f6b5c] hover:underline">+1 239 450 5622</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">2. Hosting &amp; Datenübertragung in die USA</h2>
          <p>
            Diese Website wird gehostet von <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA
            (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#0f6b5c] hover:underline">Datenschutzerklärung Vercel</a>).
          </p>
          <p className="mt-2">
            Im Zuge des Hostings werden technische Zugriffsdaten (IP-Adresse, Browser, Betriebssystem, Referrer-URL, Datum und Uhrzeit des Abrufs) in Server-Logfiles gespeichert. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nach spätestens 30 Tagen automatisch gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und störungsfreien Websitebetrieb).
          </p>
          <p className="mt-2">
            Da Vercel seinen Sitz in den USA hat, kann es zu einer Übermittlung personenbezogener Daten in die USA kommen. Vercel nutzt hierfür EU-Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO als geeignete Garantie für den Drittlandtransfer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">3. Kontaktaufnahme per E-Mail oder Telefon</h2>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die von Ihnen übermittelten Daten (Name, E-Mail-Adresse, Telefonnummer, Ihre Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert und verwendet. Diese Daten werden nicht an Dritte weitergegeben.
          </p>
          <p className="mt-2">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung / vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">4. Cookies</h2>
          <p>
            Diese Website verwendet <strong>technisch notwendige Cookies</strong>, die für den ordnungsgemäßen Betrieb der Website erforderlich sind. Mit Ihrer Einwilligung setzen wir zusätzlich optionale Cookies zur Reichweitenmessung ein, um unsere Inhalte zu verbessern. Sie können Ihre Einwilligung jederzeit widerrufen.
          </p>
          <p className="mt-2">
            Rechtsgrundlage für notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO. Für optionale Cookies gilt Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
          </p>
          <p className="mt-2">
            Detaillierte Informationen entnehmen Sie unserer{" "}
            <Link href="/cookies" className="text-[#0f6b5c] hover:underline">Cookie-Richtlinie</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">5. Externe Links &amp; Social Media</h2>
          <p>
            Diese Website enthält Links zu externen Diensten (z.&nbsp;B. floridaimmobilienkauf.de, Instagram, LinkedIn, Facebook, Google Maps, RateMyAgent). Durch das Anklicken dieser Links verlassen Sie unsere Website. Wir haben keinen Einfluss auf die Datenschutzpraktiken dieser Anbieter. Es gelten die jeweiligen Datenschutzrichtlinien der Anbieter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">6. SSL/TLS-Verschlüsselung</h2>
          <p>
            Diese Website verwendet aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und am Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">7. Ihre Rechte nach der DSGVO</h2>
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Recht auf Auskunft", "Art. 15 DSGVO — Sie können Auskunft über Ihre bei uns gespeicherten Daten verlangen."],
              ["Recht auf Berichtigung", "Art. 16 DSGVO — Sie können die Berichtigung unrichtiger oder unvollständiger Daten verlangen."],
              ["Recht auf Löschung", "Art. 17 DSGVO — Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen."],
              ["Recht auf Einschränkung", "Art. 18 DSGVO — Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen."],
              ["Recht auf Datenübertragbarkeit", "Art. 20 DSGVO — Sie können Ihre Daten in einem maschinenlesbaren Format herausverlangen."],
              ["Widerspruchsrecht", "Art. 21 DSGVO — Sie können der Verarbeitung Ihrer Daten auf Basis von berechtigtem Interesse widersprechen."],
              ["Recht auf Widerruf der Einwilligung", "Art. 7 Abs. 3 DSGVO — Sofern die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit widerrufen."],
            ].map(([title, text]) => (
              <li key={title} className="flex gap-2">
                <span className="text-[#0f6b5c] font-bold shrink-0">→</span>
                <span><strong>{title}:</strong> {text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:office@floridaimmobilienmarkt.de" className="text-[#0f6b5c] hover:underline">office@floridaimmobilienmarkt.de</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">8. Beschwerderecht bei einer Aufsichtsbehörde</h2>
          <p>Sie haben das Recht, sich bei einer zuständigen Datenschutz-Aufsichtsbehörde zu beschweren. Je nach Wohnsitz können Sie sich an folgende Behörden wenden:</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li><strong>Deutschland:</strong> Zuständige Landesdatenschutzbehörde Ihres Bundeslandes — <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener noreferrer" className="text-[#0f6b5c] hover:underline">Übersicht der Behörden (BfDI)</a></li>
            <li><strong>Österreich:</strong> Datenschutzbehörde (DSB) — <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#0f6b5c] hover:underline">www.dsb.gv.at</a></li>
            <li><strong>Schweiz:</strong> Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB) — <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-[#0f6b5c] hover:underline">www.edoeb.admin.ch</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">9. Aktualität dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand September 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Version finden Sie stets unter{" "}
            <a href={`${BASE_URL}/datenschutz`} className="text-[#0f6b5c] hover:underline">floridaimmobilienmarkt.de/datenschutz</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
