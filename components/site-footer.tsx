import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";
import { site, regions } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-lg text-white">
            Florida<span className="text-[#3fae98]">immobilienmarkt</span>
          </p>
          <p className="mt-3 text-sm text-stone-400">
            Deutschsprachige Marktberichte, Regionen und Immobilienangebote für
            Southwest Florida — betreut von Maklerin Manuela Schinagl, FL-Lizenz{" "}
            {site.license}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-colors hover:border-[#3fae98] hover:text-[#3fae98]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-colors hover:border-[#3fae98] hover:text-[#3fae98]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-colors hover:border-[#3fae98] hover:text-[#3fae98]"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Regionen</p>
          <ul className="mt-3 space-y-2 text-sm">
            {regions.map((r) => (
              <li key={r.slug}>
                <Link href={`/regionen/${r.slug}`} className="hover:text-white">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Für Käufer</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/objekte" className="hover:text-white">Objekte ansehen</Link></li>
            <li><Link href="/markt" className="hover:text-white">Marktberichte</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/ueber-manuela" className="hover:text-white">Über Manuela</Link></li>
            <li>
              <a href={site.rateMyAgent} target="_blank" rel="noreferrer" className="hover:text-white">
                Bewertungen (RateMyAgent)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Kontakt</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {site.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Florida Immobilienmarkt · Manuela Schinagl, Manuela Realty
        International · FL-Maklerlizenz {site.license}
      </div>
    </footer>
  );
}
