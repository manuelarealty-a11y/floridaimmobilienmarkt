export type BlogContentBlock =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type BlogPostMeta = {
  title: string; // exact <title> (absolute, no site suffix)
  description: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  publishedTime: string;
  modifiedTime: string;
  section: string;
  tags: string[];
  image: string; // 1200x630
  imageAlt: string;
};

export type BlogRelatedLink = { href: string; label: string };

export const novemberReport = {
  slug: "immobilienmarkt-suedwest-florida-november-2026",
  title: "Immobilienmarkt Südwest-Florida im November 2026: Die Zahlen",
  seoTitle: "Immobilienmarkt Südwest-Florida November 2026: Die Zahlen",
  date: "3. November 2026",
  readTime: "7 Min. Lesezeit",
  excerpt:
    "Marktbericht November 2026: Medianpreis Naples 575.000 $, Marco Island 995.000 $, Bestand −17,3 %, Bauzins 7,24 %. Alle Zahlen mit Quellen & Einordnung.",
  image: "https://g.tlcdn.com/gen/a194ef1bf4ea4ef49ca5c33d2db70071.jpeg",
  imageAlt:
    "Immobilienmarkt Südwest-Florida November 2026 – Medianpreise und Marktentwicklung in Naples, Marco Island, Bonita Springs und Estero",
  meta: {
    title: "Immobilienmarkt Südwest-Florida November 2026: Die Zahlen",
    description:
      "Marktbericht November 2026: Medianpreis Naples 575.000 $, Marco Island 995.000 $, Bestand −17,3 %, Bauzins 7,24 %. Alle Zahlen mit Quellen & Einordnung.",
    ogTitle: "Immobilienmarkt Südwest-Florida im November 2026: Die Zahlen",
    ogDescription:
      "Medianpreis Naples 575.000 $, Marco Island 995.000 $, Bestand −17,3 %, Bauzins 7,24 %. Der Marktbericht mit allen Zahlen und Quellen.",
    twitterTitle: "Immobilienmarkt Südwest-Florida im November 2026: Die Zahlen",
    twitterDescription:
      "Naples-Median 575.000 $, Bestand −17,3 %, Bauzins 7,24 %. Alle Marktzahlen für Naples, Marco Island, Bonita Springs & Estero – mit Quellen.",
    publishedTime: "2026-11-03T10:00:00-05:00",
    modifiedTime: "2026-11-03T10:00:00-05:00",
    section: "Marktbericht",
    tags: ["Immobilienmarkt Florida", "Naples", "Marco Island"],
    image: "https://g.tlcdn.com/gen/a194ef1bf4ea4ef49ca5c33d2db70071.jpeg",
    imageAlt:
      "Immobilienmarkt Südwest-Florida November 2026 – Marktbericht mit Medianpreisen für Naples, Marco Island, Bonita Springs und Estero",
  } satisfies BlogPostMeta,
  related: [
    { href: "/markt", label: "Marktübersicht: aktuelle Zahlen je Region" },
    { href: "/regionen", label: "Regionen im Detail: Naples, Marco Island, Bonita Springs, Estero" },
  ] satisfies BlogRelatedLink[],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Immobilienmarkt Südwest-Florida im November 2026: Die Zahlen",
      description:
        "Marktbericht November 2026: Medianpreise, Verkaufsbestand, Verkaufsdauer und Zinsen für Naples, Marco Island, Bonita Springs und Estero – mit Quellen.",
      datePublished: "2026-11-03T10:00:00-05:00",
      dateModified: "2026-11-03T10:00:00-05:00",
      inLanguage: "de-DE",
      image: "https://g.tlcdn.com/gen/a194ef1bf4ea4ef49ca5c33d2db70071.jpeg",
      mainEntityOfPage: "https://floridaimmobilienmarkt.de/blog/immobilienmarkt-suedwest-florida-november-2026",
      author: { "@type": "Organization", name: "Redaktion floridaimmobilienmarkt.de", url: "https://floridaimmobilienmarkt.de" },
      publisher: { "@type": "Organization", name: "floridaimmobilienmarkt.de", url: "https://floridaimmobilienmarkt.de" },
      about: ["Immobilienmarkt Südwest-Florida", "Naples", "Marco Island", "Bonita Springs", "Estero"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Wie hoch ist der Medianpreis für Immobilien in Naples, Florida im Herbst 2026?", acceptedAnswer: { "@type": "Answer", text: "Der Medianpreis aller geschlossenen Verkäufe in Naples (Collier County ohne Marco Island) lag im September 2026 bei 575.000 US-Dollar, ein Plus von 4,5 % gegenüber dem Vorjahr. Einfamilienhäuser lagen bei 747.500 $, Eigentumswohnungen bei 400.000 $ (Quelle: NABOR)." } },
        { "@type": "Question", name: "Ist Südwest-Florida aktuell ein Käufer- oder Verkäufermarkt?", acceptedAnswer: { "@type": "Answer", text: "Weitgehend ausgeglichen: Der Verkaufsbestand entspricht in Naples 5,5 Monaten und auf Marco Island 5,4 Monaten; in Bonita Springs und Estero sind es 3,8 Monate. Werte um 5 bis 6 Monate gelten als ausgeglichener Markt." } },
        { "@type": "Question", name: "Wie hoch sind die Hypothekenzinsen in den USA im November 2026?", acceptedAnswer: { "@type": "Answer", text: "Der durchschnittliche Zinssatz für 30-jährige Festzinsdarlehen lag in der Woche zum 29. Oktober 2026 bei 7,24 % (Freddie Mac), nach einem Oktober-Hoch von 7,40 %. Prognosen von Fannie Mae und der MBA erwarten Werte über 7 % auch für 2027." } },
        { "@type": "Question", name: "Wie viele Immobilien stehen in Naples zum Verkauf?", acceptedAnswer: { "@type": "Answer", text: "Ende September 2026 standen in Naples (Collier County ohne Marco Island) 4.240 Immobilien zum Verkauf – 17,3 % weniger als ein Jahr zuvor (Quelle: NABOR)." } },
      ],
    },
  ],
  content: [
    { type: "p", text: "**Stand: 3. November 2026 · Berichtszeitraum: September / Oktober 2026 (letzte verfügbare geschlossene Verkaufsdaten)**" },
    { type: "quote", text: "**Das Wichtigste in 30 Sekunden:** Naples meldet für September 2026 einen Medianpreis von 575.000 $ (+4,5 % zum Vorjahr) bei einem um 17,3 % gesunkenen Angebot von 4.240 Immobilien und 5,5 Monaten Verkaufsbestand. Marco Island liegt im 12-Monats-Median bei 995.000 $. Die US-Bauzinsen sind Ende Oktober auf 7,24 % gefallen. Floridaweit kostete ein Einfamilienhaus im Median 415.000 $, eine Eigentumswohnung 293.500 $." },
    { type: "h2", text: "Naples: Weniger Angebot, stabile Preise" },
    { type: "p", text: "Die Naples Area Board of REALTORS® (NABOR®) berichtet für Collier County **ohne** Marco Island im September 2026:" },
    {
      type: "table",
      head: ["Kennzahl (September 2026)", "Wert", "Veränderung zum Vorjahr"],
      rows: [
        ["Medianpreis gesamt", "575.000 $", "+4,5 %"],
        ["Medianpreis Einfamilienhaus", "747.500 $", "+3,1 %"],
        ["Medianpreis Eigentumswohnung", "400.000 $", "−2,4 %"],
        ["Geschlossene Verkäufe", "623", "+2,5 %"],
        ["Immobilien im Angebot", "4.240", "−17,3 %"],
        ["Verkaufsbestand", "5,5 Monate", "Vorjahr: 7,8 Monate"],
        ["Durchschnittliche Vermarktungsdauer", "99 Tage", "Vorjahr: 107 Tage"],
        ["Erzielter Anteil am Angebotspreis", "94,8 %", "Vorjahr: 93,9 %"],
        ["Neue Kaufverträge (pending)", "702", "−6,8 %"],
      ],
    },
    { type: "p", text: "Über die ersten neun Monate 2026 summiert sich das Bild: Die geschlossenen Verkäufe in Naples stiegen um 15,1 %, der Medianpreis über diesen Zeitraum blieb mit 600.000 $ unverändert. Das Angebot hat sich damit im Jahresverlauf deutlich verknappt – von einem käuferfreundlichen Bestand Anfang des Jahres hin zu einem weitgehend ausgeglichenen Markt zum Start der Wintersaison." },
    { type: "h2", text: "Marco Island: Kleiner Markt, hohes Preisniveau" },
    { type: "p", text: "Marco Island wird von NABOR® nicht erfasst; die folgenden Werte stammen aus dem Southwest Florida MLS (geschlossene Verkäufe der 12 Monate bis 29. September 2026). Bei einem kleinen Markt mit rund 900 Verkäufen pro Jahr sind 12-Monats-Werte aussagekräftiger als einzelne Monate, deren Median stark schwanken kann:" },
    {
      type: "table",
      head: ["Kennzahl (12 Monate bis Sept. 2026)", "Wert"],
      rows: [
        ["Geschlossene Verkäufe", "899 (+13,0 % laut John R. Wood Report)"],
        ["Medianpreis", "995.000 $"],
        ["Durchschnittspreis", "1.400.684 $ (−3,3 %)"],
        ["Verkaufsbestand", "5,4 Monate"],
        ["Mediane Vermarktungsdauer", "80 Tage"],
        ["Verkäufe ab 1 Mio. $", "49,6 % aller Verkäufe"],
        ["Höchster Verkauf des Zeitraums", "11,9 Mio. $"],
      ],
    },
    { type: "p", text: "Das knappe Angebot stützt das Niveau: Auf der Insel stehen aktuell weniger als 400 Immobilien zum Verkauf – üblich waren in früheren Jahren 800 bis 1.000." },
    { type: "h2", text: "Bonita Springs und Estero: Engster Bestand der Region" },
    { type: "p", text: "Der John R. Wood Market Report fasst Bonita Springs und Estero zusammen (12 Monate bis 30. September 2026): 3.274 geschlossene Verkäufe (+18,8 %), Durchschnittspreis 747.483 $ (+0,3 %) und mit **3,8 Monaten der engste Verkaufsbestand** der vier hier betrachteten Märkte." },
    { type: "p", text: "Für Estero separat (Southwest Florida MLS, 12 Monate bis 22. Oktober 2026): Medianpreis 520.000 $, ein Rückgang um 5,5 % gegenüber 550.000 $ im Vorjahr; der Preis pro Quadratfuß fiel von 276 $ auf 257 $. Im Detail: Einfamilienhäuser in Estero lagen im Median bei 650.000 $, Eigentumswohnungen bei 345.000 $. Estero ist damit der einzige der vier Märkte mit zuletzt rückläufigem Median – bei gleichzeitig 17,1 % mehr Verkäufen als im Vorjahr." },
    { type: "h2", text: "Florida im Vergleich: Häuser stabil, Condos weicher" },
    { type: "p", text: "Die landesweiten Zahlen von Florida Realtors® für September 2026 zeigen dieselbe Zweiteilung wie in Naples:" },
    {
      type: "table",
      head: ["Florida gesamt (September 2026)", "Wert", "Veränderung zum Vorjahr"],
      rows: [
        ["Medianpreis Einfamilienhaus", "415.000 $", "+1,2 %"],
        ["Geschlossene Verkäufe Einfamilienhaus", "20.537", "−3,5 %"],
        ["Verkaufsbestand Einfamilienhaus", "4,4 Monate", "–"],
        ["Medianpreis Eigentumswohnung", "293.500 $", "−1,8 %"],
        ["Geschlossene Verkäufe Eigentumswohnung", "7.179", "−0,1 %"],
        ["Verkaufsbestand Eigentumswohnung", "7,7 Monate", "–"],
      ],
    },
    { type: "p", text: "Eigentumswohnungen sind landesweit wie in Naples das weichere Segment: mehr Bestand (7,7 Monate), leicht fallende Medianpreise. Einfamilienhäuser zeigen sich dagegen preisstabil – der Median stieg im September den siebten Monat in Folge gegenüber dem Vorjahr." },
    { type: "h2", text: "Zinsen: Leichte Entspannung auf hohem Niveau" },
    { type: "p", text: "Der durchschnittliche Zinssatz für 30-jährige Festzinsdarlehen in den USA lag in der Woche zum 29. Oktober 2026 bei **7,24 %** (Freddie Mac Primary Mortgage Market Survey), nach 7,40 % in den beiden Wochen zuvor – dem höchsten Stand des Herbstes. 15-jährige Darlehen lagen bei 6,60 %. Die US-Notenbank ließ ihren Leitzins am 28. Oktober unverändert bei 3,75 bis 4,00 %. Die Oktober-Prognosen von Fannie Mae und der Mortgage Bankers Association erwarten für 2027 weiterhin Werte über 7 % – das ist eine Prognose, keine Zusage." },
    { type: "p", text: "Für die Einordnung: Ein erheblicher Teil der Käufe in Südwest-Florida wird bar bezahlt; in Collier County lag der Barzahlungsanteil zuletzt bei über 50 % der geschlossenen Verkäufe. Zinsänderungen wirken auf diesen Markt daher gedämpfter als auf klassische Finanzierungsmärkte." },
    { type: "h2", text: "Einordnung: Was die Zahlen bedeuten" },
    {
      type: "ol",
      items: [
        "**Der Angebotsüberhang von 2025 ist abgebaut.** In Naples sank der Bestand um 17,3 %, der Verkaufsbestand von 7,8 auf 5,5 Monate. Aus einem Käufermarkt ist ein ausgeglichener Markt geworden.",
        "**Preise halten – mit einer Ausnahme.** Naples (+4,5 % im September-Median) und Florida gesamt (+1,2 % bei Häusern) sind stabil bis leicht steigend; Estero (−5,5 % im 12-Monats-Median) und Eigentumswohnungen fast überall bilden die weiche Seite.",
        "**Tempo statt Preis entscheidet.** 94,8 % des Angebotspreises werden in Naples im Schnitt erzielt, die Vermarktungsdauer sank auf 99 Tage. Realistisch bepreiste Immobilien verkaufen sich; über dem Markt angebotene bleiben liegen – unabhängig von der Region.",
      ],
    },
    { type: "h2", text: "Ausblick" },
    { type: "p", text: "Die Oktober-Verkaufsdaten erscheinen Ende November; der nächste Marktbericht an dieser Stelle folgt im Dezember und wird erstmals zeigen, wie die Saison 2026/27 angelaufen ist. Zu beobachten bleiben die Zinsentwicklung nach der nächsten Fed-Sitzung am 8./9. Dezember und der Bestandsaufbau über die Wintermonate." },
    { type: "p", text: "*Sie suchen konkrete Angebote statt Marktzahlen? Aktuelle Immobilien in Naples, Marco Island, Bonita Springs und Estero finden Sie auf unserer Partnerseite [floridaimmobilienkauf.de](https://floridaimmobilienkauf.de/objekte).*" },
    { type: "h2", text: "Häufige Fragen zum Immobilienmarkt Südwest-Florida" },
    { type: "h3", text: "Wie hoch ist der Medianpreis in Naples im Herbst 2026?" },
    { type: "p", text: "575.000 $ im September 2026 (alle Property-Typen, Collier County ohne Marco Island), +4,5 % zum Vorjahr. Einfamilienhäuser: 747.500 $, Eigentumswohnungen: 400.000 $." },
    { type: "h3", text: "Ist Südwest-Florida aktuell ein Käufer- oder Verkäufermarkt?" },
    { type: "p", text: "Weitgehend ausgeglichen: 5,5 Monate Verkaufsbestand in Naples, 5,4 auf Marco Island, 3,8 in Bonita Springs/Estero. Werte um 5–6 Monate gelten als ausgeglichen." },
    { type: "h3", text: "Wie viele Immobilien stehen in Naples zum Verkauf?" },
    { type: "p", text: "4.240 (Ende September 2026), 17,3 % weniger als ein Jahr zuvor." },
    { type: "h3", text: "Wie hoch sind die Bauzinsen in den USA im November 2026?" },
    { type: "p", text: "7,24 % im Durchschnitt für 30-jährige Festzinsdarlehen (Freddie Mac, Woche zum 29. Oktober 2026). Es handelt sich um einen nationalen Durchschnittswert für bonitätsstarke Käufer, nicht um ein individuelles Angebot." },
    { type: "h3", text: "Warum unterscheiden sich die Marco-Island-Zahlen von denen in Naples?" },
    { type: "p", text: "Marco Island wird von einer eigenen MLS-Statistik erfasst und hier als 12-Monats-Wert ausgewiesen, weil der kleine Markt (ca. 900 Verkäufe/Jahr) in Einzelmonaten stark schwankt. Naples-Werte stammen von NABOR® für Collier County ohne Marco Island." },
    { type: "h2", text: "Quellen" },
    {
      type: "ul",
      items: [
        "NABOR®, September 2026 Monthly Market Report (veröffentlicht 23./29. Oktober 2026) – Naples / Collier County ohne Marco Island",
        "John R. Wood Properties, September 2026 Monthly Market Report – Marco Island, Bonita Springs/Estero (rollierende 12 Monate bis 30. September 2026)",
        "Southwest Florida MLS über Domain Realty Group, Estero Market Report Oktober 2026 (12 Monate bis 22. Oktober 2026)",
        "Florida Realtors®, Housing Data September & Q3 2026 (veröffentlicht 16. Oktober 2026)",
        "Freddie Mac, Primary Mortgage Market Survey, Woche zum 29. Oktober 2026; Federal Reserve, FOMC-Entscheidung 28. Oktober 2026",
      ],
    },
    { type: "p", text: "*Hinweis: Medianpreise spiegeln die Zusammensetzung der verkauften Objekte wider und sind keine Wertentwicklung einzelner Immobilien. Alle Angaben ohne Gewähr; Stand 3. November 2026.*" },
  ] satisfies BlogContentBlock[],
};
