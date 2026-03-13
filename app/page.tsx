import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import PathQuiz from "./components/PathQuiz";

export const metadata: Metadata = {
  title: "AI Income Guide – Turn AI Into Your Income Stream",
  description:
    "Explore the top ways to earn money with AI in 2026. From data annotation to agentic coding, find the right income stream for your skills.",
};

const categories = [
  {
    href: "/ai-annotation",
    icon: "🏷️",
    title: "AI Annotation Jobs",
    description:
      "Label images, classify text, and provide RLHF feedback to train the world's most powerful AI models.",
    earnings: "$10 – $25/hr",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/audio-transcription",
    icon: "🎙️",
    title: "Audio & Transcription",
    description:
      "Convert spoken audio into accurate text. Work on interviews, podcasts, legal recordings, and more.",
    earnings: "$0.45 – $1.10 / audio min",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/customer-service",
    icon: "💬",
    title: "Remote Customer Service",
    description:
      "Handle customer inquiries from home for major brands. Stable pay, flexible shifts, and no commute.",
    earnings: "$13 – $20/hr",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/coding-jobs",
    icon: "💻",
    title: "Online Coding Jobs",
    description:
      "Sell your programming skills on global platforms. Build apps, APIs, and software for clients worldwide.",
    earnings: "$30 – $150/hr",
    difficulty: "Intermediate",
    difficultyColor: "bg-yellow-100 text-yellow-700",
    featured: false,
  },
  {
    href: "/online-writing",
    icon: "✍️",
    title: "Online Writing Jobs",
    description:
      "Write articles, blogs, and marketing copy for businesses. High-paying niches reward expertise.",
    earnings: "$0.01 – $0.50/word",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/survey-sites",
    icon: "📋",
    title: "Survey Sites",
    description:
      "Get paid to share your opinion. Platforms like Prolific pay for academic and AI research studies — quick tasks, fast payouts.",
    earnings: "$5 – $15/hr",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/content-creation",
    icon: "🎵",
    title: "AI Content Creation",
    description:
      "Generate music, videos, and art with AI tools like Suno and Runway — then earn on YouTube, TikTok, Spotify, and Beatstars.",
    earnings: "$200 – $10k+/month",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/virtual-assistant",
    icon: "🗂️",
    title: "Virtual Assistant Jobs",
    description:
      "Get paid to manage emails, calendars, and admin tasks for businesses — all remotely. No degree required.",
    earnings: "$10 – $60/hr",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/ai-stock-images",
    icon: "🖼️",
    title: "AI Stock Images",
    description:
      "Generate images with AI tools and upload them to Adobe Stock and Shutterstock. Earn a royalty every time someone downloads your image.",
    earnings: "$50 – $2,000+/month",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 text-green-700",
    featured: false,
  },
  {
    href: "/agentic-coding",
    icon: "🤖",
    title: "Agentic Coding",
    description:
      "Use AI tools like Claude, Cursor, and Bolt to build full apps with minimal coding knowledge. The highest-earning opportunity of the AI era.",
    earnings: "$500 – $10k+/month",
    difficulty: "Low Barrier",
    difficultyColor: "bg-emerald-100 text-emerald-700",
    featured: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Updated for 2026 · 10 Income Streams Covered
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Turn AI Into Your<br />
            <span className="text-emerald-300">Income Stream</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            The AI economy is creating thousands of new income opportunities every month.
            Whether you want a side hustle or a full-time remote career, this guide covers
            every real way to earn money in the age of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-annotation"
              className="bg-emerald-400 text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-emerald-300 transition-colors text-lg"
            >
              Most Popular: AI Annotation Jobs →
            </Link>
            <a
              href="#categories"
              className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-lg"
            >
              Browse All Categories
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-emerald-50 border-b border-emerald-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "10", label: "Income Categories" },
            { value: "90+", label: "Vetted Platforms" },
            { value: "$10k+", label: "Top Monthly Earnings" },
            { value: "100%", label: "Work From Home" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-emerald-700">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-6">Earnings vary. These are estimates based on publicly reported rates</p>
      </section>

      <PathQuiz />

      {/* Category Cards */}
      <section id="categories" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Income Stream</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-3">
            Every category is beginner-friendly. Pick one that matches your current skills and start earning this week.
          </p>
          <p className="text-emerald-700 text-sm font-medium">Not sure where to start? Try AI Annotation — it requires no experience and pays immediately.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group relative flex flex-col rounded-2xl border p-6 hover:shadow-lg transition-all duration-200 ${
                cat.featured
                  ? "border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 ring-2 ring-emerald-300"
                  : "border-gray-200 bg-white hover:border-emerald-300"
              }`}
            >
              {cat.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm flex-1 leading-relaxed mb-4">
                {cat.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">Earnings</div>
                  <div className="text-sm font-bold text-emerald-700">{cat.earnings}</div>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat.difficultyColor}`}>
                  {cat.difficulty}
                </span>
              </div>
              <div className="mt-4 text-emerald-700 text-sm font-semibold group-hover:underline">
                View opportunities →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start earning with AI?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            The best time to enter the AI economy is right now. Pick a category, sign up for a platform, and start making money today.
          </p>
          <Link
            href="/agentic-coding"
            className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors text-lg inline-block"
          >
            Explore Agentic Coding – The Future of Freelancing →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-sm text-center">
        <p className="font-semibold text-white text-base mb-2">AI Income Guide</p>
        <p className="mb-4">Your complete resource for earning money in the AI economy.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link href="/ai-annotation" className="hover:text-white transition-colors">AI Annotation</Link>
          <Link href="/audio-transcription" className="hover:text-white transition-colors">Audio &amp; Transcription</Link>
          <Link href="/customer-service" className="hover:text-white transition-colors">Customer Service</Link>
          <Link href="/coding-jobs" className="hover:text-white transition-colors">Coding Jobs</Link>
          <Link href="/online-writing" className="hover:text-white transition-colors">Online Writing</Link>
          <Link href="/survey-sites" className="hover:text-white transition-colors">Survey Sites</Link>
          <Link href="/content-creation" className="hover:text-white transition-colors">Content Creation</Link>
          <Link href="/virtual-assistant" className="hover:text-white transition-colors">Virtual Assistant</Link>
          <Link href="/ai-stock-images" className="hover:text-white transition-colors">AI Stock Images</Link>
          <Link href="/agentic-coding" className="hover:text-white transition-colors">Agentic Coding</Link>
        </div>
        <div className="flex justify-center gap-4 mb-3 text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        <p className="text-gray-600">© 2026 AI Income Guide. For informational purposes only.</p>
      </footer>
    </div>
  );
}
