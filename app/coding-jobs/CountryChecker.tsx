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
    name: "Toptal",
    url: "https://www.toptal.com/freelance-jobs",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const strong = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Ireland", "Poland", "Romania", "Spain",
        "Portugal", "Italy",
      ];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "Not available.";
      const strong = [
        "United States", "United Kingdom", "Canada", "Australia", "Germany",
        "France", "Netherlands", "Ireland", "Poland", "Romania", "Spain",
        "Portugal", "Italy",
      ];
      if (strong.includes(c))
        return "Strong availability — Toptal has many clients seeking developers from your region. Rigorous screening (top 3%) required.";
      return "You can apply globally but client demand is highest for US, Europe, Canada, and Australia. Screening is selective regardless of location.";
    },
    payment: "Weekly via Payoneer, PayPal, or wire transfer",
  },
  {
    name: "Arc.dev",
    url: "https://arc.dev",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      const strong = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Netherlands"];
      if (strong.includes(c))
        return "Arc.dev has strong demand from US companies for developers in your region. Good match rates for remote-first roles.";
      return "Arc.dev is open globally. US and European time zones get the most job matches — expect to overlap with US business hours.";
    },
    payment: "Varies by employer (direct payment or Deel/Remote.com)",
  },
  {
    name: "Turing",
    url: "https://www.turing.com",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      return "Open globally. Turing places developers with US companies, so you need to be able to overlap with US working hours (at least 4 hours/day). Technical screening required.";
    },
    payment: "Bi-weekly via Payoneer, bank transfer, or Wise",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "Not available due to OFAC restrictions.";
      return "Open to 180+ countries. The world's largest freelance marketplace — high competition but also the highest volume of coding jobs. Takes 10% service fee (reduced at higher earnings).";
    },
    payment: "PayPal, Payoneer, wire transfer, direct deposit (US)",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "Not available due to OFAC/payment restrictions.";
      return "Open globally. Gig-based — you set your own prices and packages. Takes 20% commission. Strong for website development, automation scripts, and bug fixing.";
    },
    payment: "PayPal, Payoneer, bank transfer",
  },
  {
    name: "Gun.io",
    url: "https://www.gun.io",
    availability: (c) => {
      if (c === "United States" || c === "Canada") return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      if (c === "United States" || c === "Canada")
        return "Strong availability — Gun.io primarily serves US and Canadian developers. Technical screening required.";
      if (c === "China" || c === "Russia") return "Not available.";
      return "Gun.io focuses on US and Canada. You can apply internationally but job availability for your region is limited.";
    },
    payment: "Weekly direct deposit or ACH",
  },
  {
    name: "Lemon.io",
    url: "https://lemon.io",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const strong = [
        "Ukraine", "Poland", "Romania", "Serbia", "Germany", "Netherlands",
        "Spain", "Portugal", "France", "Italy", "United Kingdom",
        "Lithuania", "Turkey", "Brazil", "Colombia",
      ];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      const strong = [
        "Ukraine", "Poland", "Romania", "Serbia", "Germany", "Netherlands",
        "Spain", "Portugal", "France", "Italy", "United Kingdom",
        "Lithuania", "Turkey", "Brazil", "Colombia",
      ];
      if (strong.includes(c))
        return "Lemon.io has strong developer supply from your region — well-matched to their client demand. Vetting required.";
      return "Lemon.io focuses on European and Latin American developers. You can apply but acceptance rates are highest in those regions.";
    },
    payment: "Wise, bank transfer (bi-weekly)",
  },
  {
    name: "Contra",
    url: "https://contra.com",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "Not available.";
      return "Open globally. Zero commission — you keep 100% of what clients pay. Growing platform with an active community of independent developers and designers.";
    },
    payment: "Stripe (direct to bank), PayPal",
  },
  {
    name: "Codementor",
    url: "https://www.codementor.io",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "Not available.";
      return "Open globally. Combines 1-on-1 mentoring sessions, on-demand code reviews, and freelance project work. Great for developers who enjoy teaching alongside building.";
    },
    payment: "PayPal, Stripe",
  },
  {
    name: "PeoplePerHour",
    url: "https://www.peopleperhour.com",
    availability: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "no";
      return "yes";
    },
    note: (c) => {
      const blocked = ["China", "Russia", "Iran"];
      if (blocked.includes(c)) return "Not available.";
      const strong = [
        "United Kingdom", "Ireland", "India", "Pakistan", "Philippines",
        "Bangladesh", "Egypt", "Nigeria",
      ];
      if (strong.includes(c))
        return "Strong client activity for your region on PeoplePerHour. UK-headquartered platform with global developer talent pool.";
      return "Available globally. UK-focused client base but growing globally. Good for web dev, WordPress, and backend work.";
    },
    payment: "PayPal, bank transfer, Payoneer",
  },
  {
    name: "X-Team",
    url: "https://x-team.com/join/",
    availability: (c) => {
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      const strong = [
        "Brazil", "Colombia", "Mexico", "Argentina", "Poland", "Romania",
        "Ukraine", "Serbia", "Portugal", "Spain", "United States",
        "Canada", "United Kingdom", "Australia",
      ];
      if (strong.includes(c)) return "yes";
      return "limited";
    },
    note: (c) => {
      if (c === "China" || c === "Russia") return "Not available.";
      const strong = [
        "Brazil", "Colombia", "Mexico", "Argentina", "Poland", "Romania",
        "Ukraine", "Serbia", "Portugal", "Spain", "United States",
        "Canada", "United Kingdom", "Australia",
      ];
      if (strong.includes(c))
        return "X-Team has strong hiring from your region. Long-term remote contracts with a strong developer community culture.";
      return "X-Team hires globally but places most developers in the Americas and Europe. Apply and check current availability.";
    },
    payment: "Bi-weekly via Payoneer or bank transfer",
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
      if (c === "China" || c === "Russia") return "Not available due to US export restrictions.";
      return "Available in 61+ countries. Includes code review, debugging evaluation, and AI code generation rating. No clients to pitch — apply once and get assigned tasks.";
    },
    payment: "PayPal, AirTM, ACH (US)",
  },
  {
    name: "DataAnnotation.tech",
    url: "https://www.dataannotation.tech/",
    availability: (c) =>
      ["United States", "Canada", "United Kingdom", "Ireland", "Australia", "New Zealand"].includes(c)
        ? "yes"
        : "no",
    note: (c) =>
      ["United States", "Canada", "United Kingdom", "Ireland", "Australia", "New Zealand"].includes(c)
        ? "Fully open — includes coding evaluation tasks that pay well for developers. No client pitching required."
        : "Currently restricted to US, Canada, UK, Ireland, Australia & NZ only.",
    payment: "PayPal, ACH",
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
      if (removed.includes(c)) return "Your country was removed from the platform in 2024 without notice.";
      if (c === "China" || c === "Russia") return "Not available due to US export restrictions.";
      return "Available in 90+ countries. Includes code labeling and AI evaluation tasks alongside other annotation work. Complete free training to unlock coding projects.";
    },
    payment: "PayPal, AirTM",
  },
  {
    name: "Mercor",
    url: "https://mercor.com/",
    availability: (c) => {
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Netherlands", "Ireland"];
      if (strong.includes(c)) return "yes";
      const blocked = ["China", "Russia"];
      if (blocked.includes(c)) return "no";
      return "limited";
    },
    note: (c) => {
      const strong = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Netherlands", "Ireland"];
      if (strong.includes(c))
        return "Good availability — Mercor has active job listings for developers in your region. AI screening is fast (usually under 24 hours).";
      if (c === "China" || c === "Russia") return "Not available.";
      return "You can create a profile and complete screening, but most active jobs target US, UK, Canada and EU developers. Check the platform for current listings in your region.";
    },
    payment: "Stripe (weekly), Wise (fallback)",
  },
  {
    name: "Handshake",
    url: "https://joinhandshake.com",
    availability: (c) => (c === "United States" ? "yes" : "limited"),
    note: (c) =>
      c === "United States"
        ? "US-based platform primarily. Strong for remote software engineering roles, internships, and entry-level tech jobs. Free to sign up."
        : "Handshake is US-focused but some international remote roles are posted. Availability for your region is limited — worth checking.",
    payment: "Paid directly by employer",
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
          Select your country to see which coding platforms and marketplaces are open to you.
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
