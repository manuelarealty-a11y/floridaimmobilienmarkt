export const metadata = { title: "Cookie-Richtlinie" };

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
        <h2>Optionale Cookies (Marketing)</h2>
        <p>
          Nur mit Ihrer Zustimmung („Alle akzeptieren“ im Cookie-Banner) setzen wir
          das Meta-Pixel (Meta Platforms Ireland Limited, Pixel-ID
          1702488940844943) ein, z.&nbsp;B. mit der Cookie-Kennung „_fbp“. Es dient
          der Erfolgsmessung unserer Werbeanzeigen und der Bildung von Zielgruppen
          für Werbung auf Facebook und Instagram (Remarketing). Ohne Ihre
          Zustimmung wird das Pixel nicht geladen. Weitere Informationen finden Sie
          in unserer <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die
          Website-Daten (lokaler Speicher/Cookies) dieser Website in Ihrem Browser
          löschen; der Cookie-Banner erscheint danach erneut und Sie können „Nur
          notwendige“ wählen.
        </p>
        <p>
          Für Fragen zum Datenschutz kontaktieren Sie uns unter{" "}
          <a href="mailto:office@floridaimmobilienmarkt.de">office@floridaimmobilienmarkt.de</a>.
        </p>
      </div>
    </div>
  );
}
