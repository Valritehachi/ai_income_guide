import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Page Not Found | Best AI Jobs",
  description: "The page you were looking for doesn't exist. Find the best ways to earn money with AI.",
};

const categories = [
  { href: "/ai-annotation", icon: "🏷️", title: "AI Annotation Jobs" },
  { href: "/audio-transcription", icon: "🎙️", title: "Audio & Transcription" },
  { href: "/customer-service", icon: "💬", title: "Customer Service" },
  { href: "/coding-jobs", icon: "💻", title: "Coding Jobs" },
  { href: "/online-writing", icon: "✍️", title: "Online Writing" },
  { href: "/survey-sites", icon: "📋", title: "Survey Sites" },
  { href: "/content-creation", icon: "🎬", title: "Content Creation" },
  { href: "/virtual-assistant", icon: "🗂️", title: "Virtual Assistant" },
  { href: "/ai-stock-images", icon: "🖼️", title: "AI Stock Images" },
  { href: "/agentic-coding", icon: "🤖", title: "Agentic Coding" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-500 mb-3">Page not found</p>
        <p className="text-gray-400 mb-10">
          The page you were looking for doesn&apos;t exist or may have moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-800 transition-colors text-base mb-16"
        >
          ← Back to Home
        </Link>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
            Browse income categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex flex-col items-center gap-2 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl py-4 px-2 transition-colors group"
              >
                <span className="text-2xl">{c.icon}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-emerald-700 text-center leading-tight">
                  {c.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-sm text-center">
        <p className="font-semibold text-white text-base mb-2">Best AI Jobs</p>
        <p className="mb-4">Your complete resource for earning money in the AI economy.</p>
        <p className="text-gray-600">© 2026 Best AI Jobs. For informational purposes only.</p>
      </footer>
    </div>
  );
}
