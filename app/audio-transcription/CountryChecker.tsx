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
    name: "GoTranscript",
    url: "https://gotranscript.com/transcription-jobs",
    availability: () => "yes",
    note: () =>
      "Open globally — 140+ languages supported. Actively hiring non-English speakers right now.",
    payment: "PayPal, Payoneer",
  },
  {
    name: "Rev",
    url: "https://www.rev.com/freelancers",
    availability: (c) => {
      if (c === "United States" || c === "Canada" || c === "United Kingdom" || c === "Australia") return "yes";
      const blocked = ["China", "Russia", "Iran", "North Korea", "Cuba", "Syria"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      if (c === "United States" || c === "Canada" || c === "United Kingdom" || c === "Australia")
        return "Fully supported. Note: currently on a waitlist for new applicants.";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "Not available due to payment restrictions.";
      return "Rev accepts international workers but most consistent work goes to English-speaking countries. Currently on a waitlist — sign up to be notified.";
    },
    payment: "PayPal",
  },
  {
    name: "TranscribeMe",
    url: "https://www.transcribeme.com/jobs",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "Available globally. Beginner-friendly short clips. Medical and legal specialist tracks available.";
    },
    payment: "PayPal",
  },
  {
    name: "Ditto Transcripts",
    url: "https://www.dittotranscripts.com/transcription-jobs/",
    availability: (c) => (c === "United States" ? "yes" : "no"),
    note: (c) =>
      c === "United States"
        ? "US residents only. Background check required. High pay for legal and medical work."
        : "US residents only. Not available outside the United States.",
    payment: "Direct deposit (US bank)",
  },
  {
    name: "Speechpad",
    url: "https://www.speechpad.com/worker/apply",
    availability: (c) => {
      const supported = ["United States", "Canada", "United Kingdom", "Australia", "New Zealand", "Ireland"];
      if (supported.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const supported = ["United States", "Canada", "United Kingdom", "Australia", "New Zealand", "Ireland"];
      if (supported.includes(c)) return "Fully supported. Pays twice per week via PayPal.";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "Not available.";
      return "Speechpad primarily targets English-speaking markets. You can apply but work availability for your region may be limited.";
    },
    payment: "PayPal (twice weekly)",
  },
  {
    name: "Scribie",
    url: "https://scribie.com",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "Available globally — one of the most open transcription platforms. Low base rate but great for beginners.";
    },
    payment: "PayPal",
  },
  {
    name: "QuickTate",
    url: "http://typists.quicktate.com",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "International workers accepted. Background check and references required before starting.";
    },
    payment: "PayPal",
  },
  {
    name: "Outlier AI",
    url: "https://outlier.ai/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "Not available due to US export restrictions.";
      return "Available in 61+ countries. Includes audio evaluation and voice response rating tasks alongside annotation work.";
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
      if (removed.includes(c)) return "Your country was removed from the platform in 2024 without warning.";
      if (c === "China" || c === "Russia") return "Not available due to US export restrictions.";
      return "Available in 90+ countries. Includes audio labeling, speech annotation, and transcription tasks. Complete free training courses first.";
    },
    payment: "PayPal, AirTM",
  },
  {
    name: "Appen (CrowdGen)",
    url: "https://crowdgen.com",
    availability: () => "yes",
    note: () =>
      "One of the most globally open platforms — available in 170+ countries. Includes audio recording, speech transcription, and accent labeling tasks.",
    payment: "PayPal, Payoneer, AirTM, SWIFT",
  },
  {
    name: "Clickworker",
    url: "https://www.clickworker.com/become-a-clickworker/",
    availability: (c) => (c === "China" || c === "Russia" ? "no" : "yes"),
    note: (c) => {
      if (c === "United States" || c === "Canada")
        return "Available — but PayPal not supported in North America. You'll be paid via Payoneer.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "Available in 136 countries. Audio and speech data projects appear regularly — check back frequently.";
    },
    payment: "Payoneer (US/CA), PayPal, SEPA",
  },
  {
    name: "TELUS International AI",
    url: "https://www.telusinternational.com/solutions/ai-data",
    availability: () => "yes",
    note: () =>
      "Global — 1M+ contributors. Includes audio transcription, speech evaluation, and voice recording tasks. Background check required.",
    payment: "PayPal, bank transfer (Hyperwallet)",
  },
  {
    name: "Amazon MTurk",
    url: "https://www.mturk.com/worker",
    availability: (c) => {
      if (c === "United States") return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      if (c === "United States") return "Full cash payments via Amazon Payments. Use Turkopticon to find good-paying requesters.";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "Not available.";
      return "Non-US workers receive Amazon.com gift credits only — not cash. You can still work but cannot withdraw real money.";
    },
    payment: "Amazon Payments (US only); gift credits for non-US",
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
          Select your country below to instantly see which transcription platforms are open to you.
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
