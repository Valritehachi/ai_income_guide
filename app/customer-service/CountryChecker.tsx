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
    name: "Apple At Home Advisor",
    url: "https://www.apple.com/jobs/us/aha.html",
    availability: (c) => (c === "United States" ? "yes" : "limited"),
    note: (c) =>
      c === "United States"
        ? "US-based program. Apple provides a MacBook, headset, and Wi-Fi reimbursement. Check apple.com/jobs for current openings."
        : "The main At Home Advisor program is US-based. Some countries may have equivalent roles — check your local Apple jobs site.",
    payment: "W2 payroll (direct deposit)",
  },
  {
    name: "Amazon Virtual Customer Service",
    url: "https://amazon.jobs",
    availability: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "India", "Australia",
        "Germany", "France", "Japan", "Spain", "Italy", "Poland",
      ];
      if (supported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "India", "Australia",
        "Germany", "France", "Japan", "Spain", "Italy", "Poland",
      ];
      if (supported.includes(c))
        return "Amazon hires virtual customer service associates directly in your country. Search 'Virtual Customer Service' on amazon.jobs. Equipment is provided.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "Amazon may have virtual roles through your local amazon.jobs site — availability varies. Search your country's Amazon careers page.";
    },
    payment: "W2 payroll (full Amazon employee benefits)",
  },
  {
    name: "Teleperformance",
    url: "https://jobs.teleperformance.com",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "One of the widest global footprints in the industry — operates in 91 countries. Check your local Teleperformance jobs page for remote openings in your country.";
    },
    payment: "Local W2 payroll equivalent",
  },
  {
    name: "Concentrix",
    url: "https://jobs.concentrix.com",
    availability: (c) => {
      const strong = [
        "United States", "United Kingdom", "Canada", "India", "Philippines",
        "Brazil", "Colombia", "Romania", "Portugal", "Australia", "Japan",
        "Costa Rica", "Poland", "Germany", "France",
      ];
      if (strong.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const strong = [
        "United States", "United Kingdom", "Canada", "India", "Philippines",
        "Brazil", "Colombia", "Romania", "Portugal", "Australia", "Japan",
        "Costa Rica", "Poland", "Germany", "France",
      ];
      if (strong.includes(c))
        return "Concentrix has strong hiring in your country — check jobs.concentrix.com for current remote openings.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "Concentrix hires in 40+ countries. Your country may have openings — search jobs.concentrix.com filtered to your location.";
    },
    payment: "W2 payroll / local equivalent",
  },
  {
    name: "TTEC",
    url: "https://www.ttecjobs.com",
    availability: (c) => {
      const strong = [
        "United States", "United Kingdom", "Canada", "Philippines", "India",
        "Bulgaria", "Colombia", "Costa Rica", "Mexico", "Poland",
        "South Africa", "Australia", "Greece", "Brazil", "Egypt",
      ];
      if (strong.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const strong = [
        "United States", "United Kingdom", "Canada", "Philippines", "India",
        "Bulgaria", "Colombia", "Costa Rica", "Mexico", "Poland",
        "South Africa", "Australia", "Greece", "Brazil", "Egypt",
      ];
      if (strong.includes(c))
        return "TTEC actively hires in your country — check ttecjobs.com for remote customer service roles.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "TTEC hires in 24+ countries. Check ttecjobs.com for availability in your region.";
    },
    payment: "W2 payroll / local equivalent",
  },
  {
    name: "Foundever",
    url: "https://jobs.foundever.com",
    availability: (c) => {
      const strong = [
        "United States", "United Kingdom", "Canada", "Philippines", "India",
        "Colombia", "Mexico", "Brazil", "Romania", "Portugal", "Poland",
        "France", "Germany", "Spain", "Costa Rica", "Australia",
      ];
      if (strong.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const strong = [
        "United States", "United Kingdom", "Canada", "Philippines", "India",
        "Colombia", "Mexico", "Brazil", "Romania", "Portugal", "Poland",
        "France", "Germany", "Spain", "Costa Rica", "Australia",
      ];
      if (strong.includes(c))
        return "Foundever (formerly Sitel + Sykes) has strong hiring in your country — 57% of their workforce is fully remote.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "Foundever operates in 45 countries. Search jobs.foundever.com for current remote openings in your region.";
    },
    payment: "W2 payroll / local equivalent",
  },
  {
    name: "ModSquad",
    url: "https://join.modsquad.com",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "One of the most globally open contractor platforms — 90+ countries accepted. Focuses on chat, email, and content moderation rather than phone calls.";
    },
    payment: "1099 contractor pay (method not publicly disclosed)",
  },
  {
    name: "Omni Interactions",
    url: "https://omniinteractions.com/apply/",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "US only. Not all states accepted — CA, NY, IL, WA, and others are excluded. $40 background check fee. Windows PC required."
        : "US-based contractors only. Not available outside the United States.",
    payment: "1099 — weekly direct deposit",
  },
  {
    name: "Working Solutions",
    url: "https://apply.workingsolutions.com",
    availability: (c) => {
      if (["United States", "Canada", "Jamaica"].includes(c)) return "yes";
      return "no";
    },
    note: (c) => {
      if (c === "United States")
        return "Available — but CA, NY, PA, and WA residents are excluded. Good pay rates and premium brand clients.";
      if (c === "Canada" || c === "Jamaica")
        return "Working Solutions accepts contractors from your country — apply at workingsolutions.com.";
      return "Only available in the US (excluding CA, NY, PA, WA), Canada, and Jamaica.";
    },
    payment: "1099 — direct deposit twice monthly",
  },
  {
    name: "Liveops",
    url: "https://join.liveops.com",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "US only. Not all states accepted — check their eligibility page. Pay is per-minute talk time, not per hour. $35 background check fee."
        : "US-based contractors only. Not available outside the United States.",
    payment: "1099 — direct deposit twice monthly",
  },
  {
    name: "NexRep",
    url: "https://nexrep.com",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "US only. Mac computers are accepted (rare in this industry). Includes healthcare scheduling and inbound sales roles. $25 background check fee."
        : "US-based contractors only. Not available outside the United States.",
    payment: "1099 (method not publicly specified)",
  },
  {
    name: "Arise Virtual Solutions",
    url: "https://www.ariseworkfromhome.com",
    availability: (c) => {
      if (["United States", "Canada", "United Kingdom"].includes(c)) return "yes";
      return "no";
    },
    note: (c) => {
      if (c === "United States")
        return "Available — but CA, CT, MD, MA, NY, OR, and WI are excluded. Important: you must form an LLC before applying. Startup costs can reach $400–$700+.";
      if (c === "Canada" || c === "United Kingdom")
        return "Arise accepts contractors from your country — but the LLC/business entity requirement and certification costs still apply.";
      return "Only available in the US (excluding 7 states), Canada, and UK.";
    },
    payment: "1099 — direct deposit twice monthly (minus $19.75/mo platform fee)",
  },
  {
    name: "Kelly Connect",
    url: "https://www.workforkellyconnect.com",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "US only. Equipment is often provided. Background check covered by employer. Multiple states excluded — check their site for current availability."
        : "US-based workers only. Not available outside the United States.",
    payment: "W2 payroll (Kelly Services staffing)",
  },
  {
    name: "Transcom",
    url: "https://transcom.com/work-at-home/",
    availability: (c) => {
      const supported = [
        "United States", "Canada", "Philippines", "Poland", "Romania",
        "Serbia", "Turkey", "Colombia", "Mexico",
      ];
      if (supported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const supported = [
        "United States", "Canada", "Philippines", "Poland", "Romania",
        "Serbia", "Turkey", "Colombia", "Mexico",
      ];
      if (supported.includes(c))
        return "Transcom hires in your country. A key benefit: they provide all equipment (computer, headset, webcam). Check transcom.com for current remote openings.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "Transcom operates in 30+ countries — check their site for openings in your region. Equipment is provided where available.";
    },
    payment: "W2 payroll / local equivalent",
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
          Select your country to see which remote customer service platforms are open to you.
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
