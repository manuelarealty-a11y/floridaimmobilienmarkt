export const site = {
  name: "Florida Immobilienmarkt",
  domain: "floridaimmobilienmarkt.de",
  kaufSiteUrl: "https://floridaimmobilienkauf.de",
  phone: "+1 (239) 450-5622",
  phoneHref: "tel:+12394505622",
  whatsapp:
    "https://wa.me/12394505622?text=Hallo%20Manuela%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Immobilie%20in%20SW-Florida.",
  email: "office@floridaimmobilienmarkt.de",
  address: "950 N. Collier Blvd, Suite 400, Marco Island, FL 34145",
  rateMyAgent:
    "https://www.ratemyagent.com/real-estate-agent/manuela-schinagl-azzgvy/sales/overview",
  license: "BK3216655",
  heroImage: "https://galaxy-prod.tlcdn.com/gen/30fcbd74b5c94293b9bc3b42f60a2ea4.png",
  instagram: "https://www.instagram.com/manuelarealty",
  linkedin: "https://www.linkedin.com/in/manuela-schinagl-67975631",
  facebook: "https://www.facebook.com/Floridaimmobilienkauf/",
};

export const regions = [
  {
    slug: "marco-island",
    name: "Marco Island",
    tagline: "Exklusive Strandlage, Wasserfront-Immobilien, gehobenes Inselleben",
    image: "https://galaxy-prod.tlcdn.com/gen/db6a9019316a4ef8bd950a5f6f8a5878.png",
    medianPrice: "852.500 $ (Median-Verkaufspreis)",
    medianSource: "Zillow, Stand Juli 2026",
    trend: "Ø 88 Tage bis Pending · 547 aktive Angebote",
    description:
      "Marco Island gilt als eine der exklusivsten Barriereinseln Südwestfloridas – kilometerlange weiße Sandstrände, türkisfarbenes Wasser und ein ruhiges Inselleben treffen auf gehobene Wasserfront-Architektur.",
    highlights: [
      "Direkter Zugang zum Golf von Mexiko",
      "Bootsdocks & Kanal-Grundstücke",
      "Tigertail Beach & Crescent Beach",
      "Ruhige, familienfreundliche Inselgemeinde",
    ],
  },
  {
    slug: "naples",
    name: "Naples",
    tagline: "Fifth Avenue, Top-Golfanlagen, luxuriöse Condos & Villen",
    image: "https://galaxy-prod.tlcdn.com/gen/9c5e58ce919b463987a7ff55c96b90ac.png",
    medianPrice: "1.400.000 $ (Median-Verkaufspreis)",
    medianSource: "Redfin, Stand Juni 2026",
    trend: "+3,5% ggü. Vorjahr · Ø 95 Tage bis Verkauf",
    description:
      "Naples verbindet mondäne Einkaufsmeilen wie die 5th Avenue South mit erstklassigen Golfclubs und einigen der teuersten Postleitzahlen der USA – etwa Port Royal und Pelican Bay.",
    highlights: [
      "Port Royal & Pelican Bay",
      "Weltklasse-Golfplätze",
      "Fine Dining & Kunstgalerien",
      "Naples Pier & Downtown-Flair",
    ],
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    tagline: "Familienfreundlich, Naturparks, attraktive Preisspanne",
    image: "https://galaxy-prod.tlcdn.com/gen/233820ee371648748bc601e4cba423ba.png",
    medianPrice: "585.000 $ (Median-Verkaufspreis)",
    medianSource: "Redfin, Stand Juni 2026",
    trend: "-0,9% ggü. Vorjahr · Ø 76 Tage bis Verkauf",
    description:
      "Bonita Springs bietet ein attraktives Preis-Leistungs-Verhältnis zwischen Naples und Fort Myers, mit Naturschutzgebieten, Golf-Communities und direktem Strandzugang.",
    highlights: [
      "Bonita Bay & Barefoot Beach",
      "Gutes Preis-Leistungs-Verhältnis",
      "Naturschutzgebiete & Kanäle",
      "Kurze Distanz zu Naples & Estero",
    ],
  },
  {
    slug: "estero",
    name: "Estero",
    tagline: "Moderne Entwicklungen, hervorragende Infrastruktur",
    image: "https://galaxy-prod.tlcdn.com/gen/9997cc685ae94d17a65f6e8f35ad6d41.png",
    medianPrice: "484.700 $ (Median-Verkaufspreis)",
    medianSource: "Redfin, Stand Juni 2026",
    trend: "-7,0% ggü. Vorjahr · Ø 71 Tage bis Verkauf",
    description:
      "Estero zählt zu den am schnellsten wachsenden Gemeinden in Southwest Florida – mit modernen Golf- und See-Communities wie Miromar Lakes und exzellenter Infrastruktur.",
    highlights: [
      "Miromar Lakes Beach & Golf Club",
      "Junge, wachsende Infrastruktur",
      "Gute Anbindung an RSW Airport",
      "Attraktiv für Investoren",
    ],
  },
];

type BlogPostContentBlock = { type: "h2" | "p"; text: string };

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content?: BlogPostContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sw-florida-immobilien-september-2026",
    title: "Marktbericht September 2026: SW-Florida Immobilienmarkt",
    date: "1. September 2026",
    readTime: "7 Min. Lesezeit",
    excerpt:
      "Zinsen, Käufermarkt bei Eigentumswohnungen und stabile Nachfrage: Der Marktbericht September 2026 für Naples, Marco Island, Bonita Springs und Estero.",
    image: "https://galaxy-prod.tlcdn.com/gen/b90ced06d8684387b7bb6c4e03e4ebd3.png",
    content: [
      {
        type: "p",
        text: "Der September markiert traditionell den Übergang in die ruhigere Nebensaison in Southwest Florida – doch 2026 bringt zusätzliche Dynamik durch steigende Finanzierungskosten und ein zunehmend differenziertes Angebot zwischen Eigentumswohnungen und Einfamilienhäusern. Als deutschsprachige Maklerin mit über 17 Jahren Erfahrung in Naples, Marco Island, Bonita Springs und Estero ordne ich die wichtigsten Entwicklungen für Käufer und Verkäufer ein.",
      },
      {
        type: "h2",
        text: "Zinsen und Wirtschaft: Was Käufer jetzt wissen müssen",
      },
      {
        type: "p",
        text: "Die Rendite zehnjähriger US-Staatsanleihen ist zuletzt auf rund 4,79% gestiegen – den höchsten Stand seit Anfang 2025. Gleichzeitig gilt eine Zinserhöhung der US-Notenbank im September mit über 50% Wahrscheinlichkeit als möglich, während steigende Ölpreise die allgemeine Inflationssorge zusätzlich befeuern. Für Käufer bedeutet das: Wer heute eine Finanzierung darstellen kann, sollte nicht auf niedrigere Zinsen warten, da eine kurzfristige Verbesserung nicht gesichert ist.",
      },
      {
        type: "h2",
        text: "Preisentwicklung im Regionsvergleich: Naples, Marco Island, Bonita Springs, Estero",
      },
      {
        type: "p",
        text: "Im Regionsvergleich zeigt sich weiterhin eine deutliche Differenzierung. Naples bleibt mit einem Median-Verkaufspreis von rund 1.400.000 $ (+3,5% ggü. Vorjahr) die preislich stärkste Region, wobei aktuelle Marktberichte für August 2026 auch hier eine leichte monatliche Abkühlung von etwa -1% andeuten. Marco Island notiert bei 852.500 $ mit stabiler bis leicht rückläufiger Tendenz. Bonita Springs (585.000 $) und Estero (484.700 $) verzeichnen die deutlichsten Preisrückgänge gegenüber dem Vorjahr, wobei aktuelle Berichte für Bonita/Estero eine weitere Abschwächung von bis zu -3,9% im Jahresvergleich nennen. Southwest Florida insgesamt meldete für August 2026 einen regionalen Median-Verkaufspreis von rund 360.000 $ bei 32.307 aktiven Angeboten laut regionalen MLS-Daten.",
      },
      {
        type: "h2",
        text: "Eigentumswohnungen: Käufermarkt mit Verhandlungsspielraum",
      },
      {
        type: "p",
        text: "Bei Eigentumswohnungen hat sich die Marktlage klar zugunsten der Käufer verschoben. Das Angebot ist auf 7 bis 10 Monate Bestand angewachsen, was Käufern deutlich mehr Verhandlungsspielraum bei Preis und Konditionen verschafft. Ein wesentlicher Treiber sind die nach den verschärften Vorschriften in Folge des Surfside-Einsturzes gestiegenen HOA-Gebühren und Sonderumlagen, die viele Eigentümer zum Verkauf bewegen. Käufer, die eine Eigentumswohnung in Naples oder Marco Island suchen, profitieren aktuell von einer deutlich stärkeren Verhandlungsposition als noch vor einem Jahr.",
      },
      {
        type: "h2",
        text: "Einfamilienhäuser und Neubau: Anreize für Käufer",
      },
      {
        type: "p",
        text: "Bei Einfamilienhäusern zeigt sich ein gegensätzliches Bild: Die Zahl aktiver Angebote ist um 22 bis 24% gesunken, was gut positionierte, richtig bepreiste Objekte weiterhin schnell verkaufen lässt. Gleichzeitig bauen Bauträger in Teilen Floridas ihre Fertigstellungs-Incentives aus, da ein Teil der Neubauten unverkauft bleibt – für Käufer ergeben sich dadurch Verhandlungsmöglichkeiten bei Ausstattung, Abschlusskosten und Konditionen, insbesondere bei Neubauprojekten in Estero und den Randlagen von Bonita Springs.",
      },
      {
        type: "h2",
        text: "Fazit & Ausblick für Käufer und Verkäufer",
      },
      {
        type: "p",
        text: "Mit der Hurrikansaison, die formal noch bis Ende November andauert, bleibt eine gewisse saisonale Zurückhaltung im Markt üblich. Dennoch bewegen sich gut positionierte, marktgerecht bepreiste Immobilien weiterhin zügig, während Käufer bei Eigentumswohnungen aktuell von spürbar mehr Verhandlungsspielraum profitieren. Verkäufer sollten ihre Preisstrategie an die jeweilige Objektklasse anpassen, Käufer sollten Finanzierungsangebote frühzeitig sichern.",
      },
      {
        type: "p",
        text: "Möchten Sie eine individuelle Einschätzung für Ihre Zielregion oder ein konkretes Objekt? Kontaktieren Sie mich gerne für ein kostenloses, unverbindliches Beratungsgespräch auf Deutsch.",
      },
    ],
  },
  {
    slug: "sw-florida-immobilien-august-2026",
    title: "Investitionsstrategien SW Florida August 2026",
    date: "1. August 2026",
    readTime: "6 Min. Lesezeit",
    excerpt:
      "Seit mehr als zwei Jahrzehnten begleite ich deutschsprachige Investoren bei ihren Immobilienprojekten in Southwest Florida. Die Region hat sich zu einem der gefragtesten Investmentmärkte der USA entwickelt.",
    image: "https://galaxy-prod.tlcdn.com/gen/2d6d7af5905a4100a3db32783b11ab94.png",
  },
  {
    slug: "sw-florida-immobilien-juli-2026",
    title: "Marktbericht Juli 2026: Auswirkungen der Hurricane-Saison auf Angebot und Preise",
    date: "1. Juli 2026",
    readTime: "6 Min. Lesezeit",
    excerpt:
      "Unsere monatliche Datenauswertung zeigt: Zwischen Juni und November verschiebt sich die Nachfrage in SW-Florida saisonal – Inventar, Preisverhandlungsspielraum und Tage-bis-Verkauf entwickeln sich in Naples, Marco Island, Bonita Springs und Estero unterschiedlich stark.",
    image: "https://galaxy-prod.tlcdn.com/gen/bca8a3774ce8459a93714de64dea8014.png",
  },
  {
    slug: "sw-florida-immobilienmarkt-juni-2026",
    title: "Marktdaten Juni 2026: Medianpreise und Angebotslage im Regionsvergleich",
    date: "9. Juni 2026",
    readTime: "6 Min. Lesezeit",
    excerpt:
      "Im Regionsvergleich Juni 2026 zeigen sich deutliche Unterschiede: Während Naples weiter zulegt, kühlen Bonita Springs und Estero leicht ab. Ein datengestützter Überblick über Medianpreise, Tage-bis-Verkauf und Angebotsdichte in allen vier SW-Florida-Regionen.",
    image: "https://galaxy-prod.tlcdn.com/gen/017994a446204c5cbbb596b09c095d66.png",
  },
];

export const marketStats = [
  {
    label: "Median-Verkaufspreis Naples",
    value: "1.400.000 $",
    trend: "up" as const,
    change: "+3,5% ggü. Vorjahr (Redfin, Juni 2026)",
  },
  {
    label: "Median-Verkaufspreis Marco Island",
    value: "852.500 $",
    trend: "flat" as const,
    change: "-0,9% ggü. Vorjahr (Zillow, Juli 2026)",
  },
  {
    label: "Median-Verkaufspreis Bonita Springs",
    value: "585.000 $",
    trend: "down" as const,
    change: "-0,9% ggü. Vorjahr (Redfin, Juni 2026)",
  },
  {
    label: "Median-Verkaufspreis Estero",
    value: "484.700 $",
    trend: "down" as const,
    change: "-7,0% ggü. Vorjahr (Redfin, Juni 2026)",
  },
];
