import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "Survey Sites & Paid Research – Earn From Your Opinions | AI Income Guide",
  description:
    "Find the best survey and paid research platforms in 2026. From $1 consumer surveys to $200/hr research interviews — real platforms, real pay rates.",
};

const platforms = [
  {
    name: "Respondent.io",
    url: "https://app.respondent.io/login",
    type: "Paid Research Interviews",
    description: "The highest-paying opportunity in this category — $50–$200+ per session for 30–60 minute research interviews with companies and universities. Selective studies but the per-hour rate is unmatched. Apply with your real professional background.",
    tags: ["High Pay", "Research Interviews", "US / EU Focus"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: true,
  },
  {
    name: "User Interviews",
    url: "https://www.userinterviews.com/",
    type: "UX & Consumer Research Studies",
    description: "Get matched to paid research studies based on your profile — UX testing, product feedback, and consumer interviews. $50–$400 per study. Create a profile and studies come to you automatically.",
    tags: ["High Pay", "Study Matching", "US / UK / EU"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "UserTesting",
    url: "https://www.usertesting.com/be-a-contributor",
    type: "Website & App Testing",
    description: "Get paid $10–$60 per 15–20 minute session to test websites and apps out loud. Requires a microphone and screen recording software. Tests come frequently once you're approved. One of the best-known UX testing platforms.",
    tags: ["$10–$60/session", "UX Testing", "US / EU"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "Prolific",
    url: "https://www.prolific.com/",
    type: "Academic & AI Research Surveys",
    description: "The gold standard of survey platforms — used by universities and AI companies for legitimate research. Average pay is £6–£10/hr, far above typical survey sites. Quick signup, fast payouts, and transparent pay rates shown upfront.",
    tags: ["Academic Research", "AI Studies", "OECD Countries"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Mindswarms",
    url: "https://www.mindswarms.com",
    type: "Video Survey Studies",
    description: "Answer 7 questions on video from your phone and earn $10 per study. Studies take about 20 minutes. Selective matching — you won't qualify for every study — but the pay per minute is excellent when you do.",
    tags: ["$10/study", "Mobile", "Global"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "Survey Junkie",
    url: "https://www.surveyjunkie.com",
    type: "Consumer Surveys",
    description: "One of the most reliable consumer survey panels. Consistent survey supply, points redeemable for PayPal cash or e-gift cards. Focus Groups section offers higher-paid studies. Available in US, Canada, and Australia.",
    tags: ["US / CA / AU", "Reliable Supply", "PayPal"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "YouGov",
    url: "https://yougov.com/become-a-member",
    type: "Political & Consumer Opinions",
    description: "One of the most globally available survey platforms — 50+ countries. Focuses on political polls, consumer trends, and brand research. Known for data quality rather than high pay, but surveys are short and available daily.",
    tags: ["50+ Countries", "Daily Surveys", "Global"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Branded Surveys",
    url: "https://www.brandedsurveys.com",
    type: "Consumer Surveys",
    description: "Steady survey supply with a low $5 cash-out threshold. Daily survey availability across 12+ countries. Points system redeemable for PayPal cash, bank transfer (US), or gift cards. Bonus points for consistent daily activity.",
    tags: ["Low Cash-Out", "12+ Countries", "Daily Surveys"],
    tagColor: "bg-rose-100 text-rose-700",
    highlight: false,
  },
  {
    name: "Toluna",
    url: "https://us.toluna.com/register",
    type: "Consumer Surveys & Polls",
    description: "One of the largest consumer research panels in the world — 70+ countries. Mix of surveys, quick polls, and product testing. Points redeemable for cash or gift cards. Good survey volume across multiple regions.",
    tags: ["70+ Countries", "High Volume", "Product Testing"],
    tagColor: "bg-amber-100 text-amber-700",
    highlight: false,
  },
  {
    name: "Swagbucks",
    url: "https://www.swagbucks.com",
    type: "Surveys, Videos & Cashback",
    description: "More than just surveys — earn SB points for watching videos, shopping online, and completing offers. Surveys pay $0.40–$2.00 each. Best used as a passive earner alongside other platforms. Available in 10+ countries.",
    tags: ["10+ Countries", "Multi-Task", "Gift Cards / PayPal"],
    tagColor: "bg-lime-100 text-lime-700",
    highlight: false,
  },
  {
    name: "Pinecone Research",
    url: "https://www.pineconeresearch.com",
    type: "Consumer Product Surveys",
    description: "Invite-only panel that opens recruitment periodically. Pays a flat $3–$5 per survey — no point calculations, just cash. One of the most reliable panels with consistent payouts. US, UK, Canada, and Germany.",
    tags: ["Flat Cash Pay", "Invite Only", "US / UK / CA / DE"],
    tagColor: "bg-cyan-100 text-cyan-700",
    highlight: false,
  },
  {
    name: "LifePoints",
    url: "https://www.lifepointspanel.com",
    type: "Consumer Surveys",
    description: "Available in 40+ countries with good global survey volume. Points redeemable for PayPal cash or gift cards. Consistent daily surveys available in most regions. Good option for non-US/UK users looking for steady survey income.",
    tags: ["40+ Countries", "Daily Surveys", "PayPal"],
    tagColor: "bg-violet-100 text-violet-700",
    highlight: false,
  },
  {
    name: "InboxDollars",
    url: "https://www.inboxdollars.com",
    type: "Surveys, Videos & Offers",
    description: "US-only platform that pays in actual dollars (not points). Surveys, watching videos, reading emails, and completing shopping offers. Minimum $30 payout. Good supplemental income for US users who want variety beyond surveys.",
    tags: ["US Only", "Cash (Not Points)", "Multi-Task"],
    tagColor: "bg-fuchsia-100 text-fuchsia-700",
    highlight: false,
  },
];

const tips = [
  {
    icon: "🏆",
    title: "Start With Paid Research Interviews",
    body: "Respondent.io and User Interviews pay $50–$200/session. Apply with your real job title and background — companies want real professionals.",
  },
  {
    icon: "📋",
    title: "Sign Up to Multiple Panels",
    body: "Survey availability varies by day. Being on 5+ platforms multiplies how often you qualify for something.",
  },
  {
    icon: "⚡",
    title: "Complete Surveys Quickly",
    body: "Surveys close when quotas fill. Log in early in the day and complete them fast — the best ones disappear within hours.",
  },
  {
    icon: "🎯",
    title: "Fill in Your Profile Fully",
    body: "Platforms match surveys to your demographics. A complete profile means more qualifying surveys and less time screening out.",
  },
  {
    icon: "💰",
    title: "Prioritise Cash Over Points",
    body: "Points can expire or lose value. Platforms that pay in direct cash (Prolific, InboxDollars, Pinecone) are more reliable long-term.",
  },
  {
    icon: "🔔",
    title: "Enable Notifications",
    body: "High-paying research interviews fill fast. Turn on email alerts on Respondent.io and User Interviews so you don't miss openings.",
  },
];

const payRates = [
  { type: "Respondent.io (research interviews)", rate: "$50 – $200+/session", note: "30–60 min interviews with companies and universities" },
  { type: "User Interviews (research studies)", rate: "$50 – $400/study", note: "UX tests, product feedback, consumer research" },
  { type: "UserTesting (website testing)", rate: "$10 – $60/session", note: "15–20 min screen recording + think-aloud tests" },
  { type: "Prolific (academic surveys)", rate: "£6 – £10/hr equivalent", note: "Short surveys, fair pay shown upfront" },
  { type: "Mindswarms (video surveys)", rate: "$10/study", note: "7-question video responses, ~20 minutes" },
  { type: "Pinecone Research", rate: "$3 – $5/survey", note: "Flat cash per survey — no point conversion" },
  { type: "Consumer panels (Toluna, Branded, YouGov)", rate: "$1 – $5/survey", note: "Varies widely by length and topic" },
];

export default function SurveySitesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/survey-sites" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">📋</span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner Friendly
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Survey Sites & Paid Research
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Get paid to share your opinions and participate in research. Consumer surveys pay a few dollars each — but paid research interviews can pay $50–$200+ per session for less than an hour of your time.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$1 – $200+/session</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Platforms Listed</div>
              <div className="text-white font-bold text-lg">13</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">None</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">13 Platforms to Sign Up to Right Now</h2>
          <p className="text-gray-500 text-lg">
            Ordered by pay — from high-value research interviews down to everyday consumer survey panels.
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
                  Sign up →
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
            Consumer surveys are supplemental income. Research interviews are where the real money is — focus your energy on Respondent.io and User Interviews.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Platform / Type</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Pay</th>
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
            Consumer surveys are best treated as passive income while you wait. Paid research interviews take more effort to qualify for but pay 10–50x more per hour. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start earning from your opinions?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Sign up to Respondent.io and User Interviews today for the highest pay. Then add Prolific, Survey Junkie, and YouGov for steady daily income.
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
