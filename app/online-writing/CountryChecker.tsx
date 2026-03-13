"use client";

import { useState } from "react";

const countries = [
  "Australia", "Brazil", "Canada", "China", "Colombia", "Costa Rica",
  "Egypt", "France", "Germany", "Ghana", "India", "Indonesia", "Ireland",
  "Italy", "Japan", "Kenya", "Lithuania", "Malaysia", "Mexico", "Morocco",
  "Netherlands", "New Zealand", "Nigeria", "Pakistan", "Philippines",
  "Poland", "Portugal", "Romania", "Russia", "Serbia", "South Africa",
  "Spain", "Sri Lanka", "Taiwan", "Turkey", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Zimbabwe",
].sort();

type Availability = "yes" | "no" | "limited";

const platformAvailability: {
  name: string;
  url: string;
  availability: (country: string) => Availability;
  note: (country: string) => string;
  payment: string;
}[] = [
  {
    name: "Upwork (Writing)",
    url: "https://www.upwork.com",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia", "Iran"].includes(c)) return "Not available due to OFAC restrictions.";
      return "Open to 180+ countries. Largest freelance marketplace for writers — blog posts, copywriting, technical writing, ghostwriting, and more.";
    },
    payment: "PayPal, Payoneer, wire transfer, direct deposit (US)",
  },
  {
    name: "Fiverr (Writing)",
    url: "https://www.fiverr.com",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia", "Iran"].includes(c)) return "Not available due to payment restrictions.";
      return "Gig-based platform open globally. Create writing packages at your own price. Strong demand for SEO articles, product descriptions, and email copy.";
    },
    payment: "PayPal, Payoneer, bank transfer",
  },
  {
    name: "Textbroker",
    url: "https://www.textbroker.com",
    availability: (c) => {
      if (c === "United States") return "yes";
      const intlSupported = [
        "United Kingdom", "Canada", "Australia", "Germany", "France",
        "Spain", "Netherlands", "Italy", "Poland", "Brazil", "Mexico",
      ];
      if (intlSupported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      if (c === "United States") return "US platform open to all US writers. Rates from $0.007–$0.05/word based on your quality rating.";
      const intlSupported = [
        "United Kingdom", "Canada", "Australia", "Germany", "France",
        "Spain", "Netherlands", "Italy", "Poland", "Brazil", "Mexico",
      ];
      if (intlSupported.includes(c)) return "Textbroker International operates in your region — check textbroker.co.uk or your regional site for current availability.";
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Textbroker may not have a regional portal for your country. Try the international portal or check their site for current availability.";
    },
    payment: "PayPal (US: ACH/check)",
  },
  {
    name: "WriterAccess",
    url: "https://www.writeraccess.com/become-a-writer/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Open globally for English-language writers. Rates from $0.02–$2.00/word depending on your star rating. AI-assisted writing tools available.";
    },
    payment: "PayPal",
  },
  {
    name: "Crowd Content",
    url: "https://www.crowdcontent.com/writer/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Open globally for English writers. Pays $0.016–$0.10/word. Steady flow of ecommerce, blog, and marketing content work.";
    },
    payment: "PayPal",
  },
  {
    name: "iWriter",
    url: "https://www.iwriter.com/become-a-writer",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Open globally. Entry-level rates are low ($0.011/word) but increase significantly as you level up. Good for building a track record quickly.";
    },
    payment: "PayPal",
  },
  {
    name: "Verblio",
    url: "https://www.verblio.com/become-a-writer",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "US writers only. Pays $0.04–$0.12/word. Focused on blog content — you choose topics and submit speculatively."
        : "US-based writers only. Not available outside the United States.",
    payment: "PayPal",
  },
  {
    name: "Scripted",
    url: "https://www.scripted.com/freelance-writer-jobs",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Ireland"];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Ireland"];
      if (strong.includes(c)) return "Good availability — Scripted focuses on English-language content. Application and writing test required.";
      return "Scripted primarily hires English-language writers. You can apply but most active projects target US, UK, and Australian writers.";
    },
    payment: "PayPal",
  },
  {
    name: "Contena",
    url: "https://www.contena.co",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Job board + writing course platform. Aggregates high-paying freelance writing jobs. Paid membership ($97/yr) required to access top listings.";
    },
    payment: "Paid directly by clients",
  },
  {
    name: "ProBlogger Job Board",
    url: "https://problogger.com/jobs/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Free job board listing remote writing jobs. No platform fees — apply directly to clients. Good for finding ongoing blog writing gigs.";
    },
    payment: "Paid directly by clients",
  },
  {
    name: "ClearVoice",
    url: "https://www.clearvoice.com/become-a-freelancer/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const strong = ["United States", "United Kingdom", "Canada", "Australia"];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      const strong = ["United States", "United Kingdom", "Canada", "Australia"];
      if (strong.includes(c)) return "Good availability — ClearVoice works with major brands. Rates $0.10–$1.00/word for experienced writers.";
      return "ClearVoice primarily sources writers in English-speaking markets. You can apply but project availability for your region may be limited.";
    },
    payment: "Direct deposit, PayPal",
  },
  {
    name: "Skyword",
    url: "https://www.skyword.com/contributors/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Enterprise content platform — Fortune 500 clients. High rates ($0.25–$1.00/word) but competitive vetting. Best for experienced writers with a strong portfolio.";
    },
    payment: "PayPal",
  },
  {
    name: "Constant Content",
    url: "https://www.constant-content.com/writer/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Write articles and sell them to buyers — or write on request. Rates from $0.05–$1.00/word. Requires a writing test to join.";
    },
    payment: "PayPal",
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Does This Platform Accept My Country?</h2>
        <p className="text-gray-500 mb-8">
          Select your country to see which writing platforms are open to you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white"
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
                          className="font-semibold text-gray-900 hover:text-emerald-700 transition-colors text-sm"
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
