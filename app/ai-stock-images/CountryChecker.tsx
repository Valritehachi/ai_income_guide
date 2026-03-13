"use client";

import { useState } from "react";

const countries = [
  "Australia", "Brazil", "Canada", "China", "Colombia", "Costa Rica",
  "Egypt", "France", "Germany", "Ghana", "India", "Indonesia", "Ireland",
  "Italy", "Japan", "Kenya", "Malaysia", "Mexico", "Morocco",
  "Netherlands", "New Zealand", "Nigeria", "Pakistan", "Philippines",
  "Poland", "Portugal", "Romania", "Russia", "Serbia", "South Africa",
  "Spain", "Sri Lanka", "Taiwan", "Turkey", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Zimbabwe",
].sort();

type Availability = "yes" | "no" | "limited";

const ofac = ["Russia", "Cuba", "Iran", "North Korea", "Syria"];

// Countries where PayPal has significant limitations (for platforms that pay via PayPal only)
const paypalRestricted = ["Pakistan", "Bangladesh"];

const platformAvailability: {
  name: string;
  url: string;
  availability: (country: string) => Availability;
  note: (country: string) => string;
  payment: string;
}[] = [
  {
    name: "Adobe Stock",
    url: "https://contributor.stock.adobe.com",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      return "Available globally. Upload AI-generated images with 'Generative AI' disclosure. Pays 33% royalty — highest per-download rate of any major platform. Payment via Payoneer or bank transfer.";
    },
    payment: "Payoneer, bank transfer",
  },
  {
    name: "Shutterstock",
    url: "https://submit.shutterstock.com",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      return "Available globally. Disclose AI-generated content during upload. Royalties start at 15% and scale up with downloads. Massive buyer base means high download volume.";
    },
    payment: "Payoneer, PayPal, Skrill",
  },
  {
    name: "Pond5",
    url: "https://www.pond5.com/sell",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      return "Available globally. You set your own price — Pond5 takes 40% commission. Great for abstract and niche AI art with less competition than the bigger platforms.";
    },
    payment: "PayPal, Payoneer",
  },
  {
    name: "Dreamstime",
    url: "https://www.dreamstime.com/sell-stock-photos",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      return "Available globally. Accepts AI-generated images. Royalties range from 25–50% depending on contributor level. Lower competition than Adobe and Shutterstock.";
    },
    payment: "PayPal, Skrill, bank wire",
  },
  {
    name: "Depositphotos",
    url: "https://depositphotos.com/become-contributor.html",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      return "Available globally. 34% royalty on on-demand purchases. Tag AI-generated images with the 'ai_generated' keyword. Strong Eastern European and European buyer base.";
    },
    payment: "PayPal, Payoneer, WebMoney",
  },
  {
    name: "Creative Market",
    url: "https://creativemarket.com/sell",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      if (paypalRestricted.includes(c)) return "limited";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      if (paypalRestricted.includes(c)) return "Platform is accessible but payouts are via PayPal only, which has restrictions in your country. Check PayPal availability before signing up.";
      return "Available globally. Sell AI art as bundle packs, texture sets, and design elements. You keep 70% of every sale. Buyers pay higher prices for quality bundles.";
    },
    payment: "PayPal only",
  },
  {
    name: "Etsy",
    url: "https://www.etsy.com/sell",
    availability: (c) => {
      if (ofac.includes(c) || c === "Russia") return "no";
      const limited = ["India", "Indonesia", "Nigeria", "Ghana", "Uganda", "Kenya", "Zimbabwe", "Morocco", "Egypt"];
      if (limited.includes(c)) return "limited";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      if (c === "Russia") return "Etsy suspended operations in Russia.";
      const limitedCountries = ["India", "Indonesia", "Nigeria", "Ghana", "Uganda", "Kenya", "Zimbabwe", "Morocco", "Egypt"];
      if (limitedCountries.includes(c)) return "You can open an Etsy shop but payout options may be limited — Etsy Payments is not available in your country. You may still accept PayPal. Check etsy.com/sell for current eligibility.";
      return "Available. Sell AI art as digital downloads, printable wall art, or design files. Keep ~75% after fees. One of the best platforms for AI art prints targeting home decor buyers.";
    },
    payment: "Etsy Payments (varies by country), PayPal",
  },
  {
    name: "Alamy",
    url: "https://www.alamy.com/contributor/",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to US export restrictions.";
      return "Available globally. UK-headquartered with 50% royalty — one of the highest rates in the industry. Strong editorial and commercial buyers. Accepts AI images with disclosure.";
    },
    payment: "PayPal, bank transfer",
  },
];

const statusConfig = {
  yes: { label: "Available", color: "bg-green-100 text-green-700", icon: "✓" },
  no: { label: "Not available", color: "bg-red-100 text-red-700", icon: "✕" },
  limited: { label: "Limited", color: "bg-yellow-100 text-yellow-700", icon: "~" },
};

export default function CountryChecker() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const results = selectedCountry
    ? platformAvailability.map((p) => ({
        ...p,
        status: p.availability(selectedCountry),
        note: p.note(selectedCountry),
      }))
    : [];

  const available = results.filter((r) => r.status === "yes");
  const limited = results.filter((r) => r.status === "limited");
  const unavailable = results.filter((r) => r.status === "no");

  return (
    <section className="bg-white border-b border-gray-100 py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Can I Upload From My Country?</h2>
        <p className="text-gray-500 mb-8">
          Select your country to see which stock platforms accept contributors from your location.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
          >
            <option value="">— Select your country —</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {selectedCountry && (
            <button
              onClick={() => setSelectedCountry("")}
              className="text-sm text-gray-400 hover:text-gray-600 px-4 py-3 rounded-xl border border-gray-200 whitespace-nowrap"
            >
              Clear
            </button>
          )}
        </div>

        {selectedCountry && (
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-xl py-4 px-3">
                <div className="text-2xl font-extrabold text-green-700">{available.length}</div>
                <div className="text-xs text-green-600 font-medium mt-1">Available to you</div>
              </div>
              <div className="bg-yellow-50 rounded-xl py-4 px-3">
                <div className="text-2xl font-extrabold text-yellow-600">{limited.length}</div>
                <div className="text-xs text-yellow-600 font-medium mt-1">Limited access</div>
              </div>
              <div className="bg-red-50 rounded-xl py-4 px-3">
                <div className="text-2xl font-extrabold text-red-600">{unavailable.length}</div>
                <div className="text-xs text-red-500 font-medium mt-1">Not available</div>
              </div>
            </div>

            <div className="divide-y divide-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
              {[...available, ...limited, ...unavailable].map((p) => {
                const s = statusConfig[p.status];
                return (
                  <div key={p.name} className="flex items-start gap-4 px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
                    <span className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${s.color}`}>
                      {s.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-900 hover:text-amber-700 transition-colors text-sm"
                        >
                          {p.name} →
                        </a>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.color}`}>{s.label}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{p.note}</p>
                      <p className="text-xs text-gray-400 mt-1">Payment: {p.payment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!selectedCountry && (
          <div className="text-center py-10 text-gray-400 text-sm border border-dashed border-gray-200 rounded-2xl">
            Select a country above to see platform availability
          </div>
        )}
      </div>
    </section>
  );
}
