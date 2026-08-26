"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Start", external: false },
  { href: "/regionen", label: "Regionen", external: false },
  { href: "/markt", label: "Marktberichte", external: false },
  { href: site.kaufSiteUrl + "/objekte", label: "Objekte", external: true },
  { href: "/blog", label: "Blog", external: false },
  { href: "/ueber-manuela", label: "Über Manuela", external: false },
  { href: "/kontakt", label: "Kontakt", external: false },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fbf8f3]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl tracking-tight text-stone-900">
            Florida<span className="text-[#0f6b5c]">immobilienmarkt</span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
            Southwest Florida · Deutschsprachig
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className={cn(
                "text-sm text-stone-600 transition-colors hover:text-[#0f6b5c]",
                pathname === item.href && "font-medium text-[#0f6b5c]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm text-stone-700 hover:text-[#0f6b5c]"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/kontakt"
            className="rounded-full bg-[#0f6b5c] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0b5346]"
          >
            Beratung anfragen
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-[#fbf8f3] px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="text-sm text-stone-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#0f6b5c] px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Beratung anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
