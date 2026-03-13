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
    name: "DataAnnotation.tech",
    url: "https://www.dataannotation.tech/",
    availability: (c) =>
      ["United States", "Canada", "United Kingdom", "Ireland", "Australia", "New Zealand"].includes(c) ? "yes" : "no",
    note: (c) =>
      ["United States", "Canada", "United Kingdom", "Ireland", "Australia", "New Zealand"].includes(c)
        ? "Fully open — you can apply now."
        : "Currently restricted to US, Canada, UK, Ireland, Australia & NZ only. You can join a waitlist.",
    payment: "PayPal, ACH",
  },
  {
    name: "Outlier AI",
    url: "https://outlier.ai/",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran", "North Korea", "Cuba", "Syria"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const blocked = ["China", "Russia", "Iran", "North Korea", "Cuba", "Syria"];
      if (blocked.includes(c)) return "Not available due to US export restrictions.";
      return "Available in 61+ countries. Higher-paying projects tend to favour English-speaking countries.";
    },
    payment: "PayPal, AirTM, ACH (US)",
  },
  {
    name: "Remotasks (Scale AI)",
    url: "https://www.remotasks.com/",
    availability: (c) => {
      const blocked = ["Kenya", "Nigeria", "Pakistan", "Zimbabwe", "China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const removed = ["Kenya", "Nigeria", "Pakistan", "Zimbabwe"];
      if (removed.includes(c)) return "Your country was removed from the platform in 2024 with no warning.";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "Not available due to US export restrictions.";
      return "Available in 90+ countries, but access can be revoked without notice — apply to other platforms too.";
    },
    payment: "PayPal, AirTM",
  },
  {
    name: "Appen",
    url: "https://www.appen.com/join-our-crowd/",
    availability: () => "yes",
    note: () =>
      "One of the most open platforms globally — available in 170+ countries. Some projects require specific languages or locations.",
    payment: "PayPal, Payoneer, AirTM, SWIFT bank transfer",
  },
  {
    name: "Clickworker",
    url: "https://www.clickworker.com/become-a-clickworker/",
    availability: (c) => (c === "China" || c === "Russia" ? "no" : "yes"),
    note: (c) => {
      if (c === "United States" || c === "Canada")
        return "Available — but PayPal not supported for North America. You'll be paid via Payoneer.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "Available globally. Registration may be temporarily paused if your region is oversaturated.";
    },
    payment: "Payoneer (US/CA), PayPal, SEPA, ACH",
  },
  {
    name: "RWS",
    url: "https://www.rws.com/ai-data-services/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "RWS is a globally operating language and AI data services company. Projects are available in many countries and languages — apply through their AI Data Services portal.";
    },
    payment: "Bank transfer / Payoneer (varies by project)",
  },
  {
    name: "Surge AI",
    url: "https://www.surgehq.ai/",
    availability: (c) => (c === "China" ? "no" : "yes"),
    note: (c) =>
      c === "China"
        ? "Not available in China."
        : "Global workforce. Supports 20+ languages. Project availability varies by language and region.",
    payment: "Not publicly disclosed — contact talent@surgehq.ai",
  },
  {
    name: "TELUS International AI",
    url: "https://www.telusinternational.com/solutions/ai-data",
    availability: () => "yes",
    note: () =>
      "Global — 1M+ contributors across 28+ countries. Check the jobs portal for active projects in your region.",
    payment: "PayPal, bank transfer (Hyperwallet)",
  },
  {
    name: "Mercor",
    url: "https://mercor.com/",
    availability: (c) => {
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Netherlands", "Ireland"];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Netherlands", "Ireland"];
      if (strong.includes(c)) return "Good availability — many active job listings for your region.";
      return "You can create a profile, but most active jobs target US, UK, Canada & EU workers. Check the platform for current listings.";
    },
    payment: "Stripe (weekly), Wise (fallback)",
  },
  {
    name: "Alignerr",
    url: "https://www.alignerr.com/",
    availability: () => "limited",
    note: () =>
      "Open globally as long as you can legally freelance in your country. However, active projects vary by region — some contributors are approved but have no available work.",
    payment: "Per-task (method not publicly disclosed)",
  },
  {
    name: "Hive Microtask",
    url: "https://thehive.ai/workers",
    availability: () => "yes",
    note: () =>
      "Open globally. No official country exclusion list. Task availability varies by region.",
    payment: "PayPal, Bitcoin",
  },
  {
    name: "Tasksus",
    url: "https://www.tasksus.com/careers/",
    availability: (c) => {
      const ops = ["Philippines", "India", "United States", "Mexico", "Ireland", "United Kingdom", "Malaysia", "Serbia", "Taiwan"];
      return ops.includes(c) ? "yes" : "no";
    },
    note: (c) => {
      const ops = ["Philippines", "India", "United States", "Mexico", "Ireland", "United Kingdom", "Malaysia", "Serbia", "Taiwan"];
      if (ops.includes(c)) return "TaskUs has operations in your country — check their careers page for open roles.";
      return "TaskUs only hires in 12 countries: Philippines, India, US, Mexico, Ireland, UK, Malaysia, Serbia, Taiwan & a few others.";
    },
    payment: "Local payroll / bank transfer",
  },
  {
    name: "Lionbridge AI",
    url: "https://www.lionbridge.com/opportunities-for-contributors/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "Available in 100+ countries across 300+ languages. One of the most globally open annotation companies — apply through their contributors portal.";
    },
    payment: "PayPal, bank transfer (varies by project)",
  },
  {
    name: "Handshake AI Fellowship",
    url: "https://joinhandshake.com/fellowship-program/",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "Open to US-based workers with valid US work authorisation."
        : "US-based workers with valid work authorisation only.",
    payment: "US payroll / direct deposit",
  },
  {
    name: "Toloka",
    url: "https://toloka.ai/tolokers/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "One of the most globally open annotation platforms. Quick signup, tasks available immediately. Pay-per-task model — calculate your real hourly rate before committing.";
    },
    payment: "PayPal, Payoneer, bank transfer",
  },
  {
    name: "OneForma (Centific)",
    url: "https://oneforma.com/work-with-us/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "Available in 100+ countries. Strong multilingual and search evaluation projects. One of the oldest annotation platforms still actively hiring.";
    },
    payment: "PayPal, Payoneer",
  },
  {
    name: "DataForce by TransPerfect",
    url: "https://www.dataforce.com/join-our-community/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "Global platform with strong multilingual project flow. Backed by TransPerfect — one of the world's largest translation companies. Good for speakers of non-English languages.";
    },
    payment: "PayPal, bank transfer (varies by project)",
  },
  {
    name: "RemoExperts (REX)",
    url: "https://www.rex.zone",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Fully remote and global. Premium platform paying $25–$65/hr for RLHF, LLM evaluation, and computer vision work. Assessment takes ~2 weeks to review. One of the highest-paying annotation platforms available.";
    },
    payment: "Bank transfer / Wise (via project agreement)",
  },
  {
    name: "Prolific (AI Tasks)",
    url: "https://app.prolific.com/register/participant/join-waitlist/about-yourself",
    availability: (c) => {
      const oecd = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Ireland", "New Zealand", "Japan",
        "South Korea", "Spain", "Italy", "Poland", "Portugal",
        "Romania", "Turkey", "Mexico", "Colombia", "Chile",
      ];
      if (oecd.includes(c)) return "yes";
      return "no";
    },
    note: (c) => {
      const oecd = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Ireland", "New Zealand", "Japan",
        "South Korea", "Spain", "Italy", "Poland", "Portugal",
        "Romania", "Turkey", "Mexico", "Colombia", "Chile",
      ];
      if (oecd.includes(c))
        return "Available. Prolific enforces a minimum of $8/hr. Pass their AI Task Assessment to unlock higher-paying RLHF and model evaluation studies.";
      return "Prolific is restricted to OECD member countries. Your country is not currently on their supported list.";
    },
    payment: "PayPal (via Hyperwallet)",
  },
  {
    name: "Amazon Mechanical Turk",
    url: "https://www.mturk.com/worker",
    availability: (c) => {
      const supported = [
        "United States", "Australia", "Canada", "New Zealand",
        "Japan", "South Korea", "Taiwan",
      ];
      if (supported.includes(c)) return "yes";
      return "no";
    },
    note: (c) => {
      const supported = [
        "United States", "Australia", "Canada", "New Zealand",
        "Japan", "South Korea", "Taiwan",
      ];
      if (c === "United States")
        return "Full access — direct deposit payments available. Use browser extensions (MTurk Suite, HITFinder) to find the best-paying tasks quickly.";
      if (supported.includes(c))
        return "Available in your country, but payments are limited to Amazon gift cards (not cash). US workers get direct deposit.";
      return "MTurk severely restricted international registrations. New accounts from your country are typically rejected within 3 days.";
    },
    payment: "Direct deposit (US only), Amazon gift cards (international)",
  },
  {
    name: "Neevo (Defined.ai)",
    url: "https://www.neevo.ai",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const paypalLimited = ["Pakistan", "Bangladesh"];
      if (paypalLimited.includes(c)) return "limited";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      if (["Pakistan", "Bangladesh"].includes(c))
        return "Platform is accessible (120+ countries) but requires PayPal for payment, which has restrictions in your country. Check PayPal availability first.";
      return "Available in 120+ countries. Text, audio, and image tasks across 70+ languages. Task volume can be inconsistent — check back regularly for new projects.";
    },
    payment: "PayPal only",
  },
  {
    name: "OpenTrain AI",
    url: "https://www.opentrain.ai/become-freelancer/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Available in 130 countries across 70+ languages. Set your own rate and apply to projects covering LLM evaluation, code annotation, medical data, and more. Pays $15–$100+/hr depending on specialisation.";
    },
    payment: "Global payout system (Wise, PayPal, bank transfer)",
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
          Select your country below to instantly see which platforms are open to you.
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
            {/* Summary */}
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

            {/* Results list */}
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
