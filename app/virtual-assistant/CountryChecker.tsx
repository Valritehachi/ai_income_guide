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

const platformAvailability: {
  name: string;
  url: string;
  availability: (country: string) => Availability;
  note: (country: string) => string;
  payment: string;
}[] = [
  {
    name: "Belay",
    url: "https://belaysolutions.com/become-a-contractor/",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "Available. US-based contractors only. Requires 2+ years of relevant experience. One of the highest-paying VA agencies."
        : "US residents only. Belay only hires US-based virtual assistants.",
    payment: "Direct deposit (US)",
  },
  {
    name: "Boldly",
    url: "https://boldly.com/work-with-us/",
    availability: (c) => {
      if (["United States", "Canada", "United Kingdom"].includes(c)) return "yes";
      return "no";
    },
    note: (c) => {
      if (["United States", "Canada", "United Kingdom"].includes(c))
        return "Available. Premium VA agency paying $40–$60/hr. Requires 7+ years of experience. Highest-paying VA employer in the industry.";
      return "Only available in the US, Canada, and UK.";
    },
    payment: "Direct deposit / bank transfer",
  },
  {
    name: "Time Etc",
    url: "https://web.timeetc.com/become-an-assistant",
    availability: (c) => {
      if (["United States", "United Kingdom"].includes(c)) return "yes";
      return "no";
    },
    note: (c) =>
      ["United States", "United Kingdom"].includes(c)
        ? "Available. Pays $19/hr for experienced VAs. Requires 5+ years of experience. Consistent 10–20 hrs/week per client."
        : "Only accepts VAs based in the US or UK.",
    payment: "Direct deposit / bank transfer",
  },
  {
    name: "Fancy Hands",
    url: "https://www.fancyhands.com/jobs",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "Available. Task-based VA work — each task pays $3–$7. Great for beginners. Flexible and no minimum hours required."
        : "US residents only.",
    payment: "Dwolla (US bank transfer)",
  },
  {
    name: "Zirtual",
    url: "https://www.zirtual.com/become-a-zirtual-assistant/",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "Available. Dedicated VA roles for entrepreneurs and startups. Requires strong organisational skills and experience with Google Workspace."
        : "US residents only.",
    payment: "Direct deposit (US)",
  },
  {
    name: "Virtual Staff Finder",
    url: "https://www.virtualstafffinder.com",
    availability: (c) => {
      if (c === "Philippines") return "yes";
      return "no";
    },
    note: (c) =>
      c === "Philippines"
        ? "Available. This platform specifically places Philippines-based VAs with international clients. Strong demand for Filipino virtual staff."
        : "This platform exclusively places Philippines-based virtual assistants.",
    payment: "Bank transfer (Philippines)",
  },
  {
    name: "Woodbows",
    url: "https://www.woodbows.com/careers/",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to international sanctions.";
      return "Available globally. Accepts VAs with no minimum experience. Steady part-time assignments in email management, scheduling, and social media.";
    },
    payment: "PayPal, bank transfer",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to OFAC sanctions.";
      return "Available in your country. Largest global marketplace for VA jobs. Create a profile and bid on jobs. Build reviews to increase your rate over time.";
    },
    payment: "PayPal, Payoneer, direct bank transfer",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to OFAC sanctions.";
      return "Available in your country. Create gigs for inbox management, scheduling, data entry, or social media VA services. Clients find you — no bidding.";
    },
    payment: "PayPal, Payoneer, bank transfer",
  },
  {
    name: "PeoplePerHour",
    url: "https://www.peopleperhour.com",
    availability: (c) => {
      if (ofac.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (ofac.includes(c)) return "Not available due to OFAC sanctions.";
      return "Available in your country. UK-based platform with strong demand in Europe, Africa, and South Asia for VA and admin work. Lower competition than Upwork outside the US.";
    },
    payment: "PayPal, Payoneer, bank transfer",
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
          Select your country to see which VA platforms you can apply to right now.
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
