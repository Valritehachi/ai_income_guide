import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "Online Writing Jobs – Get Paid to Write From Home | AI Income Guide",
  description:
    "Find the best platforms to get paid for writing online. Blog posts, copywriting, technical writing, and more — real pay rates and global availability.",
};

const platforms = [
  {
    name: "Skyword",
    url: "https://www.skyword.com/contributors/",
    type: "Enterprise Content & Copywriting",
    description: "Fortune 500 clients pay premium rates — $0.25–$1.00/word. Skyword works with major brands on content strategy and article production. Competitive to get into but one of the highest-paying writing platforms once accepted.",
    tags: ["High Pay", "Enterprise", "Global"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: true,
  },
  {
    name: "ClearVoice",
    url: "https://www.clearvoice.com/become-a-freelancer/",
    type: "Blog, Marketing & Branded Content",
    description: "Platform used by major brands. Pays $0.10–$1.00/word for experienced writers. Build a portfolio on the platform and get matched to clients. Strong for writers with niche expertise in technology, finance, or health.",
    tags: ["High Pay", "Niche Content", "US / UK / AU"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Upwork (Writing)",
    url: "https://www.upwork.com",
    type: "Freelance Marketplace",
    description: "World's largest freelance platform with the highest volume of writing jobs globally. Blog posts, copywriting, ghostwriting, technical writing, and more. $0.05–$0.50/word or $20–$150/hr. Build reviews on smaller projects first.",
    tags: ["180+ Countries", "High Volume", "All Writing Types"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Fiverr (Writing)",
    url: "https://www.fiverr.com",
    type: "Gig-Based Freelance",
    description: "Set your own packages and prices. Strong demand for SEO articles, product descriptions, email copy, and social media content. 20% platform fee. Clients find you — no bidding required once your gig is live.",
    tags: ["Global", "Gig-Based", "Inbound Leads"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "Scripted",
    url: "https://www.scripted.com/freelance-writer-jobs",
    type: "Blog & Marketing Content",
    description: "Curated platform that matches vetted writers to clients. Application and writing test required. $0.10–$0.20/word for standard content. Once in, work is consistent with regular brand clients in tech, health, and finance.",
    tags: ["Vetted", "Consistent Work", "English"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "WriterAccess",
    url: "https://www.writeraccess.com/become-a-writer/",
    type: "Blog, Web & Marketing Copy",
    description: "Star-rated platform from 2-star ($0.02/word) to 6-star ($2.00/word). AI writing tools built in. Clients include major brands and agencies. The more you build your rating, the higher your pay. Open globally for English writers.",
    tags: ["Global", "Star Ratings", "AI Tools"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "Constant Content",
    url: "https://www.constant-content.com/writer/",
    type: "Articles & Blog Posts",
    description: "Write articles and sell them to buyers in a marketplace — or fulfill specific client requests. Rates from $0.05–$1.00/word. Requires a writing test. Unique model: you can earn passively as buyers purchase your pre-written work.",
    tags: ["Global", "Marketplace Model", "Passive Income"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Crowd Content",
    url: "https://www.crowdcontent.com/writer/",
    type: "eCommerce, Blog & Marketing",
    description: "Steady flow of product descriptions, blog posts, and web copy for ecommerce and digital agencies. Pays $0.016–$0.10/word. Star-based rating system. Good volume of work and reliable weekly payments.",
    tags: ["Global", "eCommerce Focus", "Weekly Pay"],
    tagColor: "bg-lime-100 text-lime-700",
    highlight: false,
  },
  {
    name: "Textbroker",
    url: "https://www.textbroker.com",
    type: "Web Content & SEO Articles",
    description: "One of the longest-running content platforms. Pays $0.007–$0.05/word based on a 2–5 star quality rating. Low rates at entry but reliable work volume. Regional portals for US, UK, Germany, France, and more.",
    tags: ["Beginner", "High Volume", "Regional Portals"],
    tagColor: "bg-rose-100 text-rose-700",
    highlight: false,
  },
  {
    name: "iWriter",
    url: "https://www.iwriter.com/become-a-writer",
    type: "Web Articles & Blog Posts",
    description: "Entry point for new writers. Starts at $0.011/word but rises to $0.038/word at Elite+ level. High article volume. Good for building speed and getting your first writing credits. Open globally.",
    tags: ["Beginner", "Global", "High Volume"],
    tagColor: "bg-cyan-100 text-cyan-700",
    highlight: false,
  },
  {
    name: "Verblio",
    url: "https://www.verblio.com/become-a-writer",
    type: "Blog Content",
    description: "Writers choose topics they find interesting and submit articles speculatively — no assignments. Pays $0.04–$0.12/word. US writers only. Good pay rate for a content mill and you control what you write about.",
    tags: ["US Only", "Choose Your Topics", "Good Rates"],
    tagColor: "bg-amber-100 text-amber-700",
    highlight: false,
  },
  {
    name: "ProBlogger Job Board",
    url: "https://problogger.com/jobs/",
    type: "Freelance Writing Job Board",
    description: "Free job board with remote writing jobs posted by real clients. No platform fees — you apply directly and negotiate your own rate. Good for finding ongoing blog writing relationships with recurring clients.",
    tags: ["Free", "Global", "Direct Client Work"],
    tagColor: "bg-violet-100 text-violet-700",
    highlight: false,
  },
  {
    name: "Contena",
    url: "https://www.contena.co",
    type: "Writing Jobs Aggregator",
    description: "Aggregates high-paying freelance writing jobs from across the web. Paid membership ($97/yr) filters out low-quality gigs and surfaces $0.10–$1.00/word opportunities. Also includes writing courses and pitch templates.",
    tags: ["Job Board", "Global", "Premium Listings"],
    tagColor: "bg-fuchsia-100 text-fuchsia-700",
    highlight: false,
  },
];

const tips = [
  {
    icon: "🎯",
    title: "Specialise in a Niche",
    body: "Tech, finance, health, and SaaS writers earn 3–5x more than generalists. Pick one and own it.",
  },
  {
    icon: "📁",
    title: "Build a Portfolio Before Applying",
    body: "Even 3 published pieces (your own blog counts) make a huge difference to your acceptance rate.",
  },
  {
    icon: "⭐",
    title: "Rates Rise With Your Rating",
    body: "On Textbroker, iWriter, and WriterAccess, consistent quality unlocks significantly higher pay tiers.",
  },
  {
    icon: "💡",
    title: "SEO Knowledge Pays More",
    body: "Writers who understand keyword research and on-page SEO command 50–100% higher rates.",
  },
  {
    icon: "🤝",
    title: "Land Clients Directly",
    body: "Platforms take 10–20% fees. Once you have a relationship, move clients to direct invoicing to keep more.",
  },
  {
    icon: "🤖",
    title: "AI Is a Tool, Not a Replacement",
    body: "Most platforms allow AI-assisted writing, but quality and fact-checking are still human. Use it to write faster, not to replace thinking.",
  },
];

const payRates = [
  { type: "Content mills (iWriter, Textbroker — entry)", rate: "$0.01 – $0.03/word", note: "High volume, low pay — build experience here" },
  { type: "Content mills (advanced tier)", rate: "$0.04 – $0.10/word", note: "Crowd Content, Verblio, WriterAccess mid-tier" },
  { type: "Upwork / Fiverr (mid-level)", rate: "$0.05 – $0.25/word", note: "After building 10+ reviews" },
  { type: "Scripted / ClearVoice", rate: "$0.10 – $0.30/word", note: "Vetted platforms with consistent brand clients" },
  { type: "Skyword / Constant Content (top tier)", rate: "$0.25 – $1.00/word", note: "Enterprise clients, niche expertise required" },
  { type: "Technical / SaaS writing (direct clients)", rate: "$0.15 – $0.50/word", note: "Developer docs, whitepapers, case studies" },
];

export default function OnlineWritingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/online-writing" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">✍️</span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner Friendly
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Online Writing Jobs
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Write articles, blogs, copy, and marketing content for clients worldwide. Start at content mills to build your track record, then move to premium platforms paying $1.00/word and beyond.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$0.01 – $1.00/word</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Platforms Listed</div>
              <div className="text-white font-bold text-lg">13</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">None (entry level)</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">13 Platforms to Apply to Right Now</h2>
          <p className="text-gray-500 text-lg">
            Ordered by pay — from premium enterprise platforms down to beginner-friendly content mills.
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
            Writing pay is measured per word. The difference between a beginner and an expert is enormous — specialise early.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Platform / Level</th>
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
            A 1,000-word article at $0.10/word = $100. At $0.50/word = $500. Niche expertise and strong SEO knowledge are the fastest routes to the higher end. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get paid to write?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Start with iWriter or Textbroker to build your track record. Apply to WriterAccess and ClearVoice as your portfolio grows. Aim for direct clients within 6 months.
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
