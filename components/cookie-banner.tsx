"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("fim-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = (value: "all" | "necessary") => {
    window.localStorage.setItem("fim-cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-stone-200 bg-white/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-stone-600">
          🍪 Wir verwenden Cookies, um Ihnen das beste Erlebnis zu bieten und
          unsere Website zu verbessern. Notwendige Cookies sind immer aktiv.{" "}
          <a href="/cookies" className="underline hover:text-[#0f6b5c]">
            Cookie-Richtlinie
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => accept("necessary")}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
          >
            Nur notwendige
          </button>
          <button
            onClick={() => accept("all")}
            className="rounded-full bg-[#0f6b5c] px-4 py-2 text-sm text-white hover:bg-[#0b5346]"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
