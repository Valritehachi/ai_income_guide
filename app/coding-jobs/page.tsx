import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "Online Coding Jobs – Get Paid to Code From Home | AI Income Guide",
  description:
    "Find the best platforms to sell your programming skills online. From Toptal to Upwork to AI code evaluation — real pay rates and global availability.",
};

const platforms = [
  {
    name: "Toptal",
    url: "https://www.toptal.com/freelance-jobs",
    type: "Vetted Freelance Marketplace",
    description: "Accepts only the top 3% of applicants through a rigorous 5-step screening process. In return, you work with premium clients at premium rates ($60–$200/hr). Once accepted, work flows consistently without constant bidding.",
    tags: ["Vetted", "High Pay", "Global"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: true,
  },
  {
    name: "Arc.dev",
    url: "https://arc.dev",
    type: "Remote Developer Job Matching",
    description: "Matches vetted developers with US companies looking for long-term remote hires. $60–$150/hr. Once approved, Arc handles the job search — clients come to you. Strong for full-stack, backend, and mobile developers.",
    tags: ["Vetted", "Long-Term", "Global"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Turing",
    url: "https://www.turing.com",
    type: "AI-Matched Remote Developer Roles",
    description: "AI-powered platform that matches developers with US tech companies. $40–$120/hr. Technical tests assess your skills upfront, then Turing pitches you to clients. Requires US timezone overlap (4+ hrs/day).",
    tags: ["AI Matching", "Long-Term", "Global"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "Gun.io",
    url: "https://www.gun.io",
    type: "Vetted Developer Marketplace",
    description: "Curated network of senior developers. $50–$150/hr. Unlike Upwork, you don't bid on jobs — Gun.io matches you to clients based on your skills. Focuses on US and Canada. Weekly pay.",
    tags: ["Vetted", "No Bidding", "US / Canada"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "Lemon.io",
    url: "https://lemon.io",
    type: "European Remote Developer Matching",
    description: "Focuses on sourcing developers from Eastern Europe and Latin America for US startups. $50–$120/hr. Handles client matching, contracts, and payments. Strong placement rates for React, Node.js, and Python developers.",
    tags: ["Vetted", "EU / LATAM Focus", "No Bidding"],
    tagColor: "bg-lime-100 text-lime-700",
    highlight: false,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com",
    type: "General Freelance Marketplace",
    description: "World's largest freelance marketplace with the highest volume of coding jobs globally. $15–$150/hr depending on your skills and reputation. Competitive at entry level — build reviews on smaller projects first, then raise rates.",
    tags: ["180+ Countries", "High Volume", "Bidding"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com",
    type: "Gig-Based Freelance",
    description: "Set your own packages and prices for coding gigs. Great for website development, automation scripts, bug fixes, and API integrations. 20% platform fee. Inbound model — clients find you rather than you bidding.",
    tags: ["Gig-Based", "Global", "Inbound Leads"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "Contra",
    url: "https://contra.com",
    type: "Commission-Free Freelance Platform",
    description: "Zero commission — you keep 100% of your earnings. Growing platform with a strong independent developer community. $30–$120/hr. Focuses on project-based work for startups and tech companies.",
    tags: ["0% Commission", "Global", "Project-Based"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "X-Team",
    url: "https://x-team.com/join/",
    type: "Long-Term Remote Dev Teams",
    description: "Join a curated community of developers placed on long-term contracts with global tech companies. $50–$120/hr. Strong culture with learning stipends and community events. Best for developers wanting stable ongoing work.",
    tags: ["Long-Term", "Americas & Europe", "Community"],
    tagColor: "bg-rose-100 text-rose-700",
    highlight: false,
  },
  {
    name: "Codementor",
    url: "https://www.codementor.io",
    type: "1-on-1 Mentoring & Freelance",
    description: "Earn by helping other developers — live 1-on-1 sessions, async code reviews, and freelance projects. $15–$80/hr. A unique option for experienced developers who enjoy teaching alongside building.",
    tags: ["Mentoring", "Code Review", "Global"],
    tagColor: "bg-cyan-100 text-cyan-700",
    highlight: false,
  },
  {
    name: "PeoplePerHour",
    url: "https://www.peopleperhour.com",
    type: "Freelance Marketplace",
    description: "UK-headquartered freelance marketplace popular in Europe, South Asia, and Africa. $15–$100/hr. Strong for web development, WordPress, and backend work. Lower competition than Upwork for non-US markets.",
    tags: ["Global", "UK-Based", "Web Dev"],
    tagColor: "bg-fuchsia-100 text-fuchsia-700",
    highlight: false,
  },
  {
    name: "Outlier AI",
    url: "https://outlier.ai/",
    type: "AI Code Evaluation & Review",
    description: "Get paid to evaluate AI-generated code — find bugs, rate quality, improve responses. $20–$50/hr. No clients to pitch, no bidding. Apply once and receive task assignments. Available in 61+ countries.",
    tags: ["1099 Contractor", "AI Evaluation", "61+ Countries"],
    tagColor: "bg-amber-100 text-amber-700",
    highlight: false,
  },
  {
    name: "DataAnnotation.tech",
    url: "https://www.dataannotation.tech/",
    type: "AI Coding Evaluation",
    description: "Write and evaluate code to train AI models. Tasks include writing prompts, rating code quality, and debugging AI responses. $15–$45/hr. Consistent work supply. US, Canada, UK, Ireland, Australia & NZ only.",
    tags: ["1099 Contractor", "AI Training", "US / UK / AU / NZ"],
    tagColor: "bg-sky-100 text-sky-700",
    highlight: false,
  },
  {
    name: "Remotasks (Scale AI)",
    url: "https://www.remotasks.com/",
    type: "AI Code Labeling",
    description: "Scale AI's worker platform includes code annotation, script evaluation, and AI output labeling. $10–$30/hr. Complete free training courses to unlock higher-paying coding tasks. Available in 90+ countries.",
    tags: ["1099 Contractor", "AI Training", "90+ Countries"],
    tagColor: "bg-gray-100 text-gray-700",
    highlight: false,
  },
  {
    name: "Mercor",
    url: "https://mercor.com/",
    type: "AI-Matched Developer Jobs",
    description: "AI-powered hiring platform that screens developers and matches them directly with companies. $30–$120/hr. Includes both short-term projects and full-time remote roles. Strong for software engineers, ML/AI specialists, and full-stack developers.",
    tags: ["AI Matching", "Projects & Full-Time", "US / EU Focus"],
    tagColor: "bg-violet-100 text-violet-700",
    highlight: false,
  },
  {
    name: "Handshake",
    url: "https://joinhandshake.com",
    type: "Tech Jobs & Internships",
    description: "Largest early-career platform connecting students and new grads with tech companies. Remote software engineering roles, internships, and entry-level full-time positions. Free to use. Strong pipeline for developers with less than 3 years experience.",
    tags: ["Entry Level", "Internships", "US Focus"],
    tagColor: "bg-pink-100 text-pink-700",
    highlight: false,
  },
];

const tips = [
  {
    icon: "🗂️",
    title: "Build a Portfolio First",
    body: "Clients hire proof, not promises. Even 3 personal projects on GitHub beats a blank profile.",
  },
  {
    icon: "⭐",
    title: "Get Your First 5 Reviews Fast",
    body: "On Upwork and Fiverr, reviews are everything. Bid low on small jobs initially — the reviews unlock higher-paying work.",
  },
  {
    icon: "🤖",
    title: "AI Platforms Need No Pitching",
    body: "Outlier AI and DataAnnotation pay for code evaluation tasks. No bidding, no clients — just apply and get assigned work.",
  },
  {
    icon: "🎯",
    title: "Specialise to Charge More",
    body: "React, Python, Solidity, and AI/ML skills command the highest rates. Generalists compete on price; specialists set their own.",
  },
  {
    icon: "⏳",
    title: "Vetted Platforms Take Time",
    body: "Toptal and Arc.dev require rigorous screening that can take weeks. Apply while actively working on other platforms.",
  },
  {
    icon: "✍️",
    title: "Write Proposals That Show You Read the Brief",
    body: "Most Upwork proposals are generic copy-paste. A tailored 3-sentence opener referencing the actual job wins more contracts.",
  },
];

const payRates = [
  { type: "Junior / general web dev (Upwork, Fiverr)", rate: "$15 – $40/hr", note: "High competition at entry level — build reviews first" },
  { type: "AI code evaluation (Outlier, DataAnnotation)", rate: "$15 – $45/hr", note: "No client pitching — fastest way to start earning" },
  { type: "Mid-level developer (freelance)", rate: "$40 – $80/hr", note: "2–3 years experience, solid portfolio and reviews" },
  { type: "Long-term remote contract (Turing, X-Team)", rate: "$40 – $120/hr", note: "Ongoing engagement, US timezone overlap often required" },
  { type: "Vetted developer (Toptal, Arc.dev, Gun.io)", rate: "$60 – $200/hr", note: "Pass rigorous screening first — highest consistent rates" },
  { type: "Specialist (AI/ML, Solidity, iOS, DevOps)", rate: "$80 – $150/hr", note: "Premium skills command premium rates on all platforms" },
];

export default function CodingJobsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/coding-jobs" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">💻</span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Intermediate
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Online Coding Jobs
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Sell your programming skills to clients and companies worldwide. From beginner-friendly AI code evaluation to elite freelance marketplaces paying $200/hr — there is a path for every skill level.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$15 – $200/hr</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Platforms Listed</div>
              <div className="text-white font-bold text-lg">16</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">Varies by platform</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">16 Platforms to Apply to Right Now</h2>
          <p className="text-gray-500 text-lg">
            From elite vetted marketplaces to AI evaluation platforms — ordered by pay and prestige.
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
            Coding income scales with your experience, specialisation, and reputation. The gap between entry-level and expert is wider here than almost any other remote category.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Role / Platform</th>
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
            AI code evaluation platforms (Outlier, DataAnnotation) are the fastest way to start earning — no pitching required. Build skills and reviews there while applying to higher-paying marketplaces. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get paid to code?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Start with Outlier AI or DataAnnotation for immediate income, then build your Upwork profile in parallel. Apply to Toptal or Arc.dev once your portfolio is strong.
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
