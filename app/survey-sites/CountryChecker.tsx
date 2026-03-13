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
    name: "Prolific",
    url: "https://www.prolific.com/",
    availability: (c) => {
      const excluded = [
        "China", "Russia", "Nigeria", "Ghana", "Uganda",
        "Indonesia", "Philippines", "India", "Pakistan", "Brazil",
        "Mexico", "Turkey", "Lithuania", "Colombia", "Costa Rica",
      ];
      if (excluded.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const majorExcluded = ["Nigeria", "Ghana", "Uganda", "Indonesia", "Philippines", "India", "Pakistan", "Brazil", "Mexico"];
      if (majorExcluded.includes(c)) return "Not currently available in your region. Prolific is mostly limited to OECD nations.";
      const oecd = ["Turkey", "Lithuania", "Colombia", "Costa Rica"];
      if (oecd.includes(c)) return "Explicitly not supported despite being an OECD member country.";
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Available. Pays in GBP/USD via PayPal. Minimum cash-out is £6 / $6. Best-paying survey platform globally.";
    },
    payment: "PayPal (via Hyperwallet)",
  },
  {
    name: "Respondent.io",
    url: "https://app.respondent.io/login",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const strong = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Ireland", "New Zealand",
      ];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      const strong = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Ireland", "New Zealand",
      ];
      if (strong.includes(c))
        return "High-paying research interviews ($50–$200+/hr). Pays via PayPal. Studies are selective — apply to ones matching your background.";
      return "You can create a profile but most high-paying studies target US, UK, Canada, and EU participants. Worth signing up to be notified of studies in your region.";
    },
    payment: "PayPal",
  },
  {
    name: "User Interviews",
    url: "https://www.userinterviews.com/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France"];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France"];
      if (strong.includes(c))
        return "Research interview platform paying $50–$400+ per session. Your profile is matched to studies automatically.";
      return "Primarily US/UK/Canada/EU focused. You can register but study availability for your region may be limited.";
    },
    payment: "PayPal, bank transfer",
  },
  {
    name: "Survey Junkie",
    url: "https://www.surveyjunkie.com",
    availability: (c) => {
      const supported = ["United States", "Canada", "Australia"];
      if (supported.includes(c)) return "yes";
      return "no";
    },
    note: (c) =>
      ["United States", "Canada", "Australia"].includes(c)
        ? "Available in your country. Earn points redeemable for PayPal cash or e-gift cards. One of the most reliable consumer survey platforms."
        : "Only available in the US, Canada, and Australia.",
    payment: "PayPal, e-gift cards",
  },
  {
    name: "Swagbucks",
    url: "https://www.swagbucks.com",
    availability: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "Australia", "Ireland",
        "Germany", "France", "India", "Brazil", "Spain",
      ];
      if (supported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "Australia", "Ireland",
        "Germany", "France", "India", "Brazil", "Spain",
      ];
      if (supported.includes(c))
        return "Swagbucks is available in your country — earn SB points for surveys, videos, and shopping. Redeem for PayPal cash or gift cards.";
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Swagbucks may have limited availability in your country. Check their site for current supported regions.";
    },
    payment: "PayPal, gift cards",
  },
  {
    name: "Branded Surveys",
    url: "https://www.brandedsurveys.com",
    availability: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Spain", "Italy", "Netherlands", "Poland", "Mexico", "Brazil",
      ];
      if (supported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Spain", "Italy", "Netherlands", "Poland", "Mexico", "Brazil",
      ];
      if (supported.includes(c))
        return "Branded Surveys is open in your country. Steady survey supply, low cash-out threshold ($5).";
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Check brandedsurveys.com — availability varies. Not supported in all countries.";
    },
    payment: "PayPal, gift cards, direct deposit (US)",
  },
  {
    name: "YouGov",
    url: "https://yougov.com/become-a-member",
    availability: (c) => {
      const supported = [
        "United States", "United Kingdom", "Australia", "Canada", "Germany",
        "France", "Spain", "Italy", "Denmark", "Norway", "Sweden", "Finland",
        "India", "Indonesia", "Malaysia", "Philippines", "Thailand", "Singapore",
        "Egypt", "Saudi Arabia", "United Arab Emirates", "Turkey", "Poland",
        "Romania", "Serbia", "South Africa", "Mexico", "Brazil",
      ];
      if (supported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const supported = [
        "United States", "United Kingdom", "Australia", "Canada", "Germany",
        "France", "Spain", "Italy", "Denmark", "Norway", "Sweden", "Finland",
        "India", "Indonesia", "Malaysia", "Philippines", "Thailand", "Singapore",
        "Egypt", "Saudi Arabia", "United Arab Emirates", "Turkey", "Poland",
        "Romania", "Serbia", "South Africa", "Mexico", "Brazil",
      ];
      if (supported.includes(c))
        return "YouGov is available in your country. Political and consumer opinion surveys. Points redeemable for cash or vouchers.";
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "YouGov may not be available in your country yet — check yougov.com for your region.";
    },
    payment: "PayPal, gift cards (varies by country)",
  },
  {
    name: "Pinecone Research",
    url: "https://www.pineconeresearch.com",
    availability: (c) => {
      const supported = ["United States", "United Kingdom", "Canada", "Germany"];
      if (supported.includes(c)) return "yes";
      return "no";
    },
    note: (c) =>
      ["United States", "United Kingdom", "Canada", "Germany"].includes(c)
        ? "Invite-only panel — opens recruitment periodically. $3–$5 per survey. One of the most reliable panels for consistent earnings."
        : "Only available in the US, UK, Canada, and Germany.",
    payment: "PayPal, check, gift cards",
  },
  {
    name: "LifePoints",
    url: "https://www.lifepointspanel.com",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Available in 40+ countries. Consumer surveys with points redeemable for PayPal cash or gift cards. Good survey volume globally.";
    },
    payment: "PayPal, gift cards",
  },
  {
    name: "Toluna",
    url: "https://us.toluna.com/register",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Available in 70+ countries. One of the largest consumer panels globally. Mix of surveys, polls, and product testing opportunities.";
    },
    payment: "PayPal, gift cards, donations",
  },
  {
    name: "InboxDollars",
    url: "https://www.inboxdollars.com",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "US only. Surveys, videos, games, and shopping cashback. Pays in cash (not points). Minimum $30 payout threshold."
        : "US residents only.",
    payment: "Check, PayPal, gift cards",
  },
  {
    name: "UserTesting",
    url: "https://www.usertesting.com/be-a-contributor",
    availability: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Spain", "Italy", "Ireland",
      ];
      if (supported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const supported = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Spain", "Italy", "Ireland",
      ];
      if (supported.includes(c))
        return "UserTesting pays $10–$60 per session to test websites and apps. Tests take 15–20 minutes. Requires microphone and screen recording.";
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "UserTesting focuses on US, UK, Canada, and Western Europe. You can apply but test availability for your region is limited.";
    },
    payment: "PayPal",
  },
  {
    name: "Mindswarms",
    url: "https://www.mindswarms.com",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (["China", "Russia"].includes(c)) return "Not available.";
      return "Mobile-based video survey platform. Pays $10 per 7-question video study. Studies are selective but pay well for the time involved.";
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
          Select your country to see which survey and research platforms are available to you.
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
