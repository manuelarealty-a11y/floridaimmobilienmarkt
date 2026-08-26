export const metadata = { title: "Cookie-Richtlinie | Florida Immobilienmarkt" };

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl text-stone-900">Cookie-Richtlinie</h1>
      <div className="prose prose-stone mt-6 max-w-none text-stone-700">
        <p>
          Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung
          zu bieten und unsere Inhalte kontinuierlich zu verbessern.
        </p>
        <h2>Notwendige Cookies</h2>
        <p>
          Diese Cookies sind für den Betrieb der Website erforderlich und können in
          unseren Systemen nicht deaktiviert werden.
        </p>
        <h2>Optionale Cookies</h2>
        <p>
          Mit Ihrer Zustimmung verwenden wir zusätzliche Cookies zur
          Reichweitenmessung und zur Verbesserung unserer Inhalte. Sie können Ihre
          Einwilligung jederzeit über die Cookie-Einstellungen anpassen.
        </p>
        <p>
          Für Fragen zum Datenschutz kontaktieren Sie uns unter{" "}
          <a href="mailto:office@floridaimmobilienkauf.de">office@floridaimmobilienkauf.de</a>.
        </p>
      </div>
    </div>
  );
}
