import Image from "next/image";
import { MapPin, Mail, Phone, Star, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Kontakt – Kostenlose Erstberatung | Manuela Realty International",
  alternates: { canonical: "/kontakt" },
  description:
    "Immobilienkauf in Florida: Schreiben Sie Manuela Schinagl auf Deutsch. Lizenzierte Brokerin in Marco Island, Naples, Bonita Springs & Estero.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <ContactForm />

        <div>
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl shadow-sm">
            <Image src="https://floridaimmobilienkauf.de/manuela.jpg" alt="Manuela Schinagl" fill className="object-cover" />
          </div>
          <p className="mt-4 font-serif text-xl text-stone-900">Manuela Schinagl</p>
          <p className="text-sm text-stone-500">Lizenzierte Brokerin · Marco Island</p>

          <ul className="mt-6 space-y-4 text-sm text-stone-700">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#0f6b5c]" />
              <a href={site.phoneHref} className="hover:text-[#0f6b5c]">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#0f6b5c]" />
              <a href={`mailto:${site.email}`} className="hover:text-[#0f6b5c]">{site.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0f6b5c]" />
              {site.address}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0f6b5c]" />
              <span>
                Mo–Fr 9–18 Uhr (EST) · Sa 10–15 Uhr (EST)
                <br />
                <span className="text-xs text-stone-500">= +6 Stunden MEZ</span>
              </span>
            </li>
          </ul>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-sm text-stone-700 hover:bg-stone-100"
          >
            Direkt per WhatsApp schreiben
          </a>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-1 text-sm text-stone-700">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 5,0
            </div>
            <p className="mt-2 text-sm italic text-stone-600">
              &ldquo;Ohne Manuela hätten wir nie so reibungslos gekauft. Sie hat
              uns durch jeden Schritt begleitet – auf Deutsch, persönlich,
              professionell.&rdquo;
            </p>
            <p className="mt-2 text-xs text-stone-500">— Klaus &amp; Brigitte M. · RateMyAgent</p>
            <a href={site.rateMyAgent} target="_blank" rel="noreferrer" className="mt-2 block text-xs text-[#0f6b5c] hover:underline">
              49 Bewertungen auf RateMyAgent · 17 auf Google
            </a>
          </div>

          <p className="mt-6 text-xs text-stone-500">
            Florida ist 6 Stunden hinter MEZ (Mitteleuropäische Zeit). Am besten
            schreiben Sie eine Nachricht – Manuela antwortet meist innerhalb
            von 24 Stunden.
          </p>
        </div>
      </div>
    </div>
  );
}
