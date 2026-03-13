import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "Virtual Assistant Jobs – Get Paid to Work Remotely | AI Income Guide",
  description:
    "Find the best platforms to get hired as a virtual assistant. Remote admin, scheduling, social media, and more — $15–$60/hr from anywhere.",
};

const platforms = [
  {
    name: "Belay",
    url: "https://belaysolutions.com/become-a-contractor/",
    type: "Premium VA Agency",
    description: "One of the highest-paying VA agencies. Matches experienced VAs with busy executives and entrepreneurs. Requires 2+ years of relevant experience. US-based VAs only. Once accepted, clients are assigned to you.",
    tags: ["US Only", "Experienced VAs", "$25–$40/hr"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: true,
  },
  {
    name: "Boldly",
    url: "https://boldly.com/work-with-us/",
    type: "Executive VA Subscription Service",
    description: "Top-tier VA agency that places experienced professionals with C-suite executives. Highest pay in the industry at $40–$60/hr. Requires 7+ years of experience. US, Canada, and UK only.",
    tags: ["US / UK / CA", "7+ Yrs Required", "$40–$60/hr"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Time Etc",
    url: "https://web.timeetc.com/become-an-assistant",
    type: "Experienced VA Platform",
    description: "Hire out your skills to entrepreneurs and small business owners. Requires 5+ years of experience. US and UK VAs. Consistent part-time hours — typically 10–20 hrs/week per client.",
    tags: ["US / UK", "5+ Yrs", "$19/hr"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "Fancy Hands",
    url: "https://www.fancyhands.com/jobs",
    type: "Task-Based VA Work",
    description: "Bite-size tasks rather than ongoing client relationships. Research, scheduling, calls, data entry — each task pays $3–$7. Good for beginners or anyone who wants flexible fill-in work. US residents only.",
    tags: ["US Only", "Beginner-Friendly", "$3–$7/task"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Zirtual",
    url: "https://www.zirtual.com/become-a-zirtual-assistant/",
    type: "Dedicated VA Roles",
    description: "Hire VAs on a dedicated basis for entrepreneurs and startups. US-only contractors. Requires strong organizational skills and experience with tools like Google Workspace and project management apps.",
    tags: ["US Only", "Dedicated Clients", "$15–$25/hr"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "Virtual Staff Finder",
    url: "https://www.virtualstafffinder.com",
    type: "Philippines-Based VA Placement",
    description: "Specialist agency connecting Philippines-based VAs with international clients. Covers admin, social media, customer support, and web tasks. Strong demand for Filipino VAs — lower cost advantage.",
    tags: ["Philippines", "Admin & Social", "$5–$15/hr"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "Woodbows",
    url: "https://www.woodbows.com/careers/",
    type: "Global VA Agency",
    description: "Accepts VAs globally. Tasks range from email management and scheduling to research and social media. Beginner-friendly — no minimum experience required. Steady stream of part-time assignments.",
    tags: ["Global", "Beginner OK", "$8–$18/hr"],
    tagColor: "bg-rose-100 text-rose-700",
    highlight: false,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com",
    type: "Freelance Marketplace",
    description: "Largest pool of VA job postings globally. Create a profile listing your skills (admin, social media, customer support, research) and bid on jobs. Competitive at first — build reviews on smaller jobs, then raise rates.",
    tags: ["Global", "Self-Directed", "$8–$35/hr"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com",
    type: "Gig-Based VA Services",
    description: "Create gigs like 'I will manage your inbox', 'I will handle your scheduling', or 'I will do data entry'. Clients find you — no bidding required. 20% platform fee. Good for niche VA skills.",
    tags: ["Global", "Inbound Clients", "20% Fee"],
    tagColor: "bg-pink-100 text-pink-700",
    highlight: false,
  },
  {
    name: "PeoplePerHour",
    url: "https://www.peopleperhour.com",
    type: "Freelance Marketplace",
    description: "UK-headquartered platform popular in Europe, Africa, and South Asia. Strong demand for VA, admin, and data entry work. Lower competition than Upwork outside the US. Project and hourly work available.",
    tags: ["Global", "UK-Based", "$10–$30/hr"],
    tagColor: "bg-amber-100 text-amber-700",
    highlight: false,
  },
];

const tips = [
  {
    icon: "🎯",
    title: "Pick a niche skill",
    body: "General VAs compete on price. Specialize in social media, executive support, bookkeeping, or a specific tool (Notion, HubSpot) and charge more.",
  },
  {
    icon: "📋",
    title: "List every tool you know",
    body: "Clients search by tools — Google Workspace, Trello, Asana, Canva, Slack, Zoom. List all of them on your profile even if you've only used them briefly.",
  },
  {
    icon: "⭐",
    title: "Land 3 reviews fast",
    body: "On Upwork and Fiverr, your first 3 reviews are everything. Undercharge initially to get them — then raise your rate.",
  },
  {
    icon: "🕐",
    title: "Offer a fixed-hours package",
    body: "Clients love predictability. 'I'll give you 10 hours/week of VA work' is easier to buy than open-ended hourly billing.",
  },
  {
    icon: "🤝",
    title: "Ask for a referral after every job",
    body: "Happy clients refer you to other founders and executives. One referral can be worth 10 job applications.",
  },
  {
    icon: "🤖",
    title: "Use AI to do more in less time",
    body: "ChatGPT, Grammarly, and Notion AI make you 2–3× faster at common VA tasks — research, writing emails, summarizing. Clients pay hourly; you deliver in half the time.",
  },
];

const payRates = [
  { role: "Entry-level VA (general admin, data entry)", rate: "$8 – $15/hr", note: "Fancy Hands, Woodbows, Fiverr — good starting point" },
  { role: "Experienced VA (executive support, project mgmt)", rate: "$18 – $35/hr", note: "Upwork, Time Etc — requires strong work history" },
  { role: "Specialized VA (social media, bookkeeping, CRM)", rate: "$25 – $45/hr", note: "Niche expertise commands premium rates" },
  { role: "Premium agency VA (Belay, Boldly)", rate: "$35 – $60/hr", note: "Highest pay — requires 5–7+ years of experience" },
  { role: "Philippines-based VA", rate: "$5 – $15/hr", note: "Virtual Staff Finder — lower rate, high global demand" },
];

export default function VirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/virtual-assistant" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🗂️</span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner-Friendly
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Virtual Assistant Jobs
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Get paid to manage emails, calendars, social media, and admin tasks for businesses — all remotely. No degree required. If you're organised and reliable, you can start this week.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$10 – $60/hr</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Platforms Listed</div>
              <div className="text-white font-bold text-lg">10</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">None to 7 years (varies)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-emerald-50 border-b border-emerald-100 py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-bold text-gray-900 mb-4">Before You Apply</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl border border-emerald-100 px-4 py-3 flex gap-3 items-start">
                <span className="text-xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm tracking-tight">{tip.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryChecker />

      {/* Platforms */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">10 Platforms to Apply to Right Now</h2>
          <p className="text-gray-500 text-lg">
            From premium US agencies to global freelance marketplaces — ordered by pay and selectivity.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex flex-row items-center gap-5 rounded-2xl border px-6 py-4 transition-all duration-200 group ${
                p.highlight
                  ? "border-emerald-400 bg-gradient-to-r from-emerald-50 to-teal-50 ring-2 ring-emerald-300 shadow-md hover:shadow-lg"
                  : "border-gray-200 bg-white hover:shadow-md hover:border-emerald-300"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Top Pick
                  </span>
                </div>
              )}
              <div className="w-52 flex-shrink-0">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{p.name}</h3>
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mt-0.5">{p.type}</p>
              </div>
              <p className="text-gray-900 text-sm leading-relaxed flex-1 hidden sm:block">{p.description}</p>
              <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
                <div className="hidden md:flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-emerald-700 text-sm font-semibold group-hover:underline whitespace-nowrap">
                  Apply now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Pay rates */}
      <section className="bg-white border-b border-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What Does It Actually Pay?</h2>
          <p className="text-gray-500 mb-8">
            VA income scales with experience, specialisation, and the platform you use. Beginners can start earning this week; experienced VAs at premium agencies earn more than many office jobs.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Role / Level</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Rate</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {payRates.map((row, i) => (
                  <tr key={row.role} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.role}</td>
                    <td className="px-5 py-3 font-bold text-emerald-700">{row.rate}</td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Start with Fancy Hands or Woodbows for your first paid VA work, then build a profile on Upwork simultaneously. Once you have reviews and a track record, apply to Belay or Time Etc for higher-paying ongoing roles. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your VA career?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Apply to Fancy Hands or Woodbows today for your first clients, then build your Upwork profile in parallel. Within 30 days you can have steady recurring work.
          </p>
          <Link
            href="/"
            className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors text-lg inline-block"
          >
            Explore Other Income Streams →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-sm text-center">
        <p className="font-semibold text-white text-base mb-2">AI Income Guide</p>
        <p className="mb-4">Your complete resource for earning money in the AI economy.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link href="/ai-annotation" className="hover:text-white transition-colors">AI Annotation</Link>
          <Link href="/audio-transcription" className="hover:text-white transition-colors">Audio & Transcription</Link>
          <Link href="/customer-service" className="hover:text-white transition-colors">Customer Service</Link>
          <Link href="/coding-jobs" className="hover:text-white transition-colors">Coding Jobs</Link>
          <Link href="/online-writing" className="hover:text-white transition-colors">Online Writing</Link>
          <Link href="/survey-sites" className="hover:text-white transition-colors">Survey Sites</Link>
          <Link href="/content-creation" className="hover:text-white transition-colors">Content Creation</Link>
          <Link href="/virtual-assistant" className="hover:text-white transition-colors">Virtual Assistant</Link>
          <Link href="/ai-stock-images" className="hover:text-white transition-colors">AI Stock Images</Link>
          <Link href="/agentic-coding" className="hover:text-white transition-colors">Agentic Coding</Link>
        </div>
        <p className="text-gray-600">© 2026 AI Income Guide. For informational purposes only.</p>
      </footer>
    </div>
  );
}
