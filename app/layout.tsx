import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { CookieBanner } from "@/components/cookie-banner";
import { site } from "@/lib/site";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const BASE_URL = "https://floridaimmobilienmarkt.de";
const TITLE = "Florida Immobilienmarkt | Marktberichte & Immobilien SW-Florida auf Deutsch";
const DESCRIPTION =
  "Aktuelle Marktberichte, Regionen und Immobilienangebote für Southwest Florida – Marco Island, Naples, Bonita Springs, Estero. Deutschsprachig betreut von Maklerin Manuela Schinagl.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: TITLE, template: "%s | Florida Immobilienmarkt" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Florida Immobilienmarkt",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: site.heroImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [site.heroImage],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Manuela Realty International",
  founder: { "@type": "Person", name: "Manuela Schinagl" },
  url: BASE_URL,
  telephone: site.phone,
  email: site.email,
  image: site.heroImage,
  address: {
    "@type": "PostalAddress",
    streetAddress: "950 N. Collier Blvd, Suite 400",
    addressLocality: "Marco Island",
    addressRegion: "FL",
    postalCode: "34145",
    addressCountry: "US",
  },
  areaServed: ["Marco Island", "Naples", "Bonita Springs", "Estero"],
  availableLanguage: ["de", "en"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "49",
  },
  sameAs: [
    "https://floridaimmobilienkauf.de",
    site.rateMyAgent,
    site.instagram,
    site.linkedin,
    site.facebook,
  ],
  mainEntityOfPage: "https://floridaimmobilienkauf.de",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${serif.variable} ${sans.variable} bg-[#fbf8f3] font-sans text-stone-800 antialiased`}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <WhatsappButton />
        <CookieBanner />
      </body>
    </html>
  );
}
