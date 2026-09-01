"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "c07628c5-1ba3-4aef-87c8-8b8d8d1e42f4";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", `Neue Anfrage über floridaimmobilienmarkt.de – ${data.get("name") || ""}`);
    data.append("from_name", "Florida Immobilienmarkt – Kontaktformular");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-10 w-10 text-[#0f6b5c]" />
        <h2 className="mt-4 font-serif text-xl text-stone-900">Vielen Dank für Ihre Anfrage!</h2>
        <p className="mt-2 text-sm text-stone-600">
          Manuela meldet sich in der Regel innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      <h1 className="font-serif text-2xl text-stone-900">Kostenlose Erstberatung anfragen</h1>
      <p className="text-sm text-stone-600">
        Schreiben Sie Manuela oder rufen Sie direkt an – auf Deutsch, unverbindlich und kostenlos.
      </p>

      <div>
        <label className="text-sm font-medium text-stone-700">Ihr Name *</label>
        <input required name="name" type="text" className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-[#0f6b5c] focus:outline-none" />
      </div>
      <div>
        <label className="text-sm font-medium text-stone-700">E-Mail-Adresse *</label>
        <input required name="email" type="email" className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-[#0f6b5c] focus:outline-none" />
      </div>
      <div>
        <label className="text-sm font-medium text-stone-700">Telefon / WhatsApp</label>
        <input name="phone" type="tel" className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-[#0f6b5c] focus:outline-none" />
      </div>
      <div>
        <label className="text-sm font-medium text-stone-700">Interessiert an</label>
        <select name="region" className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-[#0f6b5c] focus:outline-none">
          <option>Bitte wählen</option>
          <option>Marco Island</option>
          <option>Naples</option>
          <option>Bonita Springs</option>
          <option>Estero</option>
          <option>Alle Regionen – Beratung gewünscht</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-stone-700">Ihre Nachricht / Anfrage *</label>
        <textarea required name="message" rows={4} className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-[#0f6b5c] focus:outline-none" />
      </div>

      <p className="text-xs text-stone-500">
        * Pflichtfelder. Ihre Daten werden nur zur Beantwortung Ihrer Anfrage genutzt und nicht an Dritte weitergegeben.
      </p>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" /> Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie direkt an.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0f6b5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#0b5346] disabled:opacity-70"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        Anfrage senden – kostenlos & unverbindlich
      </button>
    </form>
  );
}
