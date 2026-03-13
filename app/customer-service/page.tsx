import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "Remote Customer Service Jobs – Work From Home | AI Income Guide",
  description:
    "Find the best remote customer service platforms hiring right now. Contractor and employee roles for US and international workers. Real pay rates included.",
};

const platforms = [
  {
    name: "Apple At Home Advisor",
    url: "https://www.apple.com/jobs/us/aha.html",
    type: "Tech Support & Customer Service",
    description: "One of the best-paying remote customer service roles available — $20–$30/hr. Apple provides a MacBook, headset, and Wi-Fi reimbursement. Full employee benefits. Competitive but worth applying.",
    tags: ["W2 Employee", "Equipment Provided", "US"],
    tagColor: "bg-emerald-100 text-emerald-700",
    employment: "W2",
    highlight: true,
  },
  {
    name: "Amazon Virtual Customer Service",
    url: "https://amazon.jobs",
    type: "Calls, Chat & Email",
    description: "Hire directly as a full Amazon employee. Handles orders, returns, and account support. $15–$22/hr with full benefits (health, 401k, PTO). Equipment provided. Hires in the US, UK, India, and more.",
    tags: ["W2 Employee", "Equipment Provided", "Global"],
    tagColor: "bg-blue-100 text-blue-700",
    employment: "W2",
    highlight: false,
  },
  {
    name: "Teleperformance",
    url: "https://jobs.teleperformance.com",
    type: "Calls, Chat & Email",
    description: "Operates in 91 countries — the widest global reach of any BPO. $13–$18/hr for US entry-level remote roles. Benefits for full-time employees. Wide range of client programs across healthcare, tech, and retail.",
    tags: ["W2 Employee", "91 Countries", "Bilingual Bonus"],
    tagColor: "bg-indigo-100 text-indigo-700",
    employment: "W2",
    highlight: false,
  },
  {
    name: "Concentrix",
    url: "https://jobs.concentrix.com",
    type: "Calls, Chat, Email & Back-Office",
    description: "One of the world's largest BPOs — $15–$22/hr for US remote roles. Hires in 40+ countries. Equipment sometimes provided depending on the client program. Frequent openings across all experience levels.",
    tags: ["W2 Employee", "40+ Countries", "High Volume"],
    tagColor: "bg-purple-100 text-purple-700",
    employment: "W2",
    highlight: false,
  },
  {
    name: "TTEC",
    url: "https://www.ttecjobs.com",
    type: "Calls, Chat & Tech Support",
    description: "Fortune 500 clients including major healthcare, financial, and tech brands. $15–$20/hr for US entry-level remote. Hires in 24+ countries with benefits for full-time employees. Strong internal growth pathways.",
    tags: ["W2 Employee", "24 Countries", "Fortune 500 Clients"],
    tagColor: "bg-teal-100 text-teal-700",
    employment: "W2",
    highlight: false,
  },
  {
    name: "Foundever",
    url: "https://jobs.foundever.com",
    type: "Calls, Chat & Email",
    description: "Formed from the merger of Sitel and Sykes — operates in 45 countries. 57% of their workforce is fully remote. $14–$17/hr for US entry-level. Equipment sometimes provided. Frequent multilingual openings.",
    tags: ["W2 Employee", "45 Countries", "Often Remote"],
    tagColor: "bg-rose-100 text-rose-700",
    employment: "W2",
    highlight: false,
  },
  {
    name: "ModSquad",
    url: "https://join.modsquad.com",
    type: "Chat, Email & Content Moderation",
    description: "No phone calls — purely digital work: live chat, email support, community management, and content moderation for tech and gaming brands. $13–$26/hr. Available in 90+ countries as a contractor.",
    tags: ["1099 Contractor", "90+ Countries", "No Phone Calls"],
    tagColor: "bg-orange-100 text-orange-700",
    employment: "1099",
    highlight: false,
  },
  {
    name: "Omni Interactions",
    url: "https://omniinteractions.com/apply/",
    type: "Inbound Calls & Chat",
    description: "US contractor platform with client programs in retail, healthcare, and financial services. $14–$20/hr paid on productive time. Flexible scheduling — you pick your own shifts. $40 background check fee. Windows PC required.",
    tags: ["1099 Contractor", "US Only", "Flexible Hours"],
    tagColor: "bg-yellow-100 text-yellow-700",
    employment: "1099",
    highlight: false,
  },
  {
    name: "Working Solutions",
    url: "https://apply.workingsolutions.com",
    type: "Calls, Chat & Email",
    description: "Higher-than-average pay rates ($12–$20/hr equivalent) with premium brand clients including luxury hospitality and TurboTax. US, Canada, and Jamaica. Paid per productive minute — not idle time.",
    tags: ["1099 Contractor", "US / Canada / Jamaica", "Premium Brands"],
    tagColor: "bg-amber-100 text-amber-700",
    employment: "1099",
    highlight: false,
  },
  {
    name: "Transcom",
    url: "https://transcom.com/work-at-home/",
    type: "Inbound Calls & Chat",
    description: "A standout perk: Transcom provides all equipment (computer, headset, webcam) at no cost. $13–$16/hr. W2 employee status. Hires in 30+ countries. Webcam use required during training and team check-ins.",
    tags: ["W2 Employee", "Equipment Provided", "30+ Countries"],
    tagColor: "bg-cyan-100 text-cyan-700",
    employment: "W2",
    highlight: false,
  },
  {
    name: "Kelly Connect",
    url: "https://www.workforkellyconnect.com",
    type: "Inbound Calls & Tech Support",
    description: "Solid pay ($17–$21/hr) and equipment is often provided. Background check cost covered by the employer (rare). W2 employment through Kelly Services staffing. US only — some states excluded.",
    tags: ["W2 Employee", "Equipment Often Provided", "US"],
    tagColor: "bg-lime-100 text-lime-700",
    employment: "W2",
    highlight: false,
  },
  {
    name: "Liveops",
    url: "https://join.liveops.com",
    type: "Inbound Calls",
    description: "Multiple client programs to choose from including insurance, healthcare, and roadside assistance. You set your own schedule. ~$10–$20/hr based on talk time. US only. $35 background check fee. Windows PC required.",
    tags: ["1099 Contractor", "US Only", "Flexible Schedule"],
    tagColor: "bg-violet-100 text-violet-700",
    employment: "1099",
    highlight: false,
  },
  {
    name: "NexRep",
    url: "https://nexrep.com",
    type: "Calls, Sales & Healthcare Scheduling",
    description: "One of the few contractor platforms that accepts Mac computers. Includes healthcare scheduling programs that connect patients with doctors — less common work that pays well. $13–$25/hr. US only. $25 background check fee.",
    tags: ["1099 Contractor", "Mac Accepted", "US Only"],
    tagColor: "bg-fuchsia-100 text-fuchsia-700",
    employment: "1099",
    highlight: false,
  },
  {
    name: "Arise Virtual Solutions",
    url: "https://www.ariseworkfromhome.com",
    type: "Inbound Calls & Customer Support",
    description: "Work for brands like Amazon, Disney, and Carnival Cruise from home. US, Canada, and UK accepted. Important: you must form an LLC before applying. Startup costs can reach $400–$700+ (courses, background check, platform fees).",
    tags: ["1099 Contractor", "US / Canada / UK", "LLC Required"],
    tagColor: "bg-red-100 text-red-700",
    employment: "1099",
    highlight: false,
  },
];

const tips = [
  {
    icon: "📋",
    title: "Know the Difference: 1099 vs W2",
    body: "1099 contractor roles are flexible but you pay your own taxes (~25–30% set aside). W2 roles withhold taxes and often include benefits.",
  },
  {
    icon: "💻",
    title: "Most Platforms Require Windows",
    body: "Macs and Chromebooks are often excluded. NexRep and ModSquad are rare exceptions. Verify before applying.",
  },
  {
    icon: "🔌",
    title: "Wired Internet Is Usually Required",
    body: "Nearly every platform requires a hardwired ethernet connection. Wi-Fi, satellite, and mobile hotspots are typically rejected.",
  },
  {
    icon: "🔍",
    title: "Budget for Background Check Fees",
    body: "Contractor platforms often charge $25–$40 for background checks. W2 employers usually cover this cost themselves.",
  },
  {
    icon: "⏱️",
    title: "Talk-Time Pay vs Hourly Pay",
    body: "Contractor platforms often pay per active minute only — not for waiting. Slow call days mean lower real earnings than advertised.",
  },
  {
    icon: "🌍",
    title: "Outside the US? Start Here",
    body: "Teleperformance (91 countries), Concentrix (40+), and ModSquad (90+ countries) offer the widest international availability.",
  },
];

const payRates = [
  { type: "Apple At Home Advisor", rate: "$20 – $30/hr", note: "W2, full benefits, equipment provided" },
  { type: "Amazon Virtual Customer Service", rate: "$15 – $22/hr", note: "W2, full benefits, equipment provided" },
  { type: "Kelly Connect", rate: "$17 – $21/hr", note: "W2, equipment often provided" },
  { type: "Working Solutions", rate: "$12 – $20/hr", note: "1099, pay-per-minute" },
  { type: "TTEC / Concentrix / Foundever", rate: "$13 – $22/hr", note: "W2, global BPO employers" },
  { type: "Omni Interactions / Liveops", rate: "$14 – $20/hr", note: "1099, US only, flexible scheduling" },
  { type: "NexRep (sales programs)", rate: "$13 – $25/hr", note: "1099, commission-based sales roles" },
  { type: "ModSquad (chat/moderation)", rate: "$13 – $26/hr", note: "1099, 90+ countries, no phone calls" },
  { type: "Arise Virtual Solutions", rate: "$10 – $16/hr", note: "1099, after platform fees (~$40/mo)" },
];

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/customer-service" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">💬</span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner Friendly
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Remote Customer Service Jobs
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Handle customer calls, chats, and emails from home. Choose between flexible contractor roles or stable W2 employment with full benefits — including roles at Apple and Amazon.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$13 – $30/hr</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Platforms Listed</div>
              <div className="text-white font-bold text-lg">14</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">None (most roles)</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">14 Platforms to Apply to Right Now</h2>
          <p className="text-gray-500 text-lg">
            Sorted by pay — from the highest-earning brand-name roles to flexible contractor platforms.
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
            Pay varies widely by platform type, role, and country. W2 roles come with benefits that add significant value beyond the hourly rate.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Platform / Role</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Rate</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {payRates.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-5 py-3 font-bold text-emerald-700">{row.rate}</td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Contractor platforms pay per productive minute — your real hourly earnings depend on call volume. W2 roles include benefits worth an additional $3–$8/hr in real value. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your remote customer service career?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Apply to Apple At Home or Amazon if you want top pay and full benefits. Start with Omni Interactions or ModSquad if you need flexibility now.
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
          <Link href="/agentic-coding" className="hover:text-white transition-colors">Agentic Coding</Link>
        </div>
        <p className="text-gray-600">© 2026 AI Income Guide. For informational purposes only.</p>
      </footer>
    </div>
  );
}
