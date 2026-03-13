"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/ai-annotation", label: "Annotation" },
  { href: "/audio-transcription", label: "Transcription" },
  { href: "/customer-service", label: "Customer Service" },
  { href: "/coding-jobs", label: "Coding" },
  { href: "/online-writing", label: "Writing" },
  { href: "/survey-sites", label: "Surveys" },
  { href: "/content-creation", label: "Content" },
  { href: "/virtual-assistant", label: "VA Jobs" },
  { href: "/ai-stock-images", label: "Stock Images" },
  { href: "/agentic-coding", label: "Agentic Coding ✨" },
];

export default function SiteHeader({ activePath }: { activePath: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-xl font-bold text-emerald-700 tracking-tight flex-shrink-0"
        >
          AI Income Guide
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2 text-xs font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                activePath === link.href
                  ? "text-emerald-700 font-semibold"
                  : "hover:text-emerald-700 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button — shown below xl */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="xl:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-700 hover:bg-gray-50 transition-colors"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="xl:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-5 py-3.5 text-sm border-b border-gray-50 transition-colors ${
                  activePath === link.href
                    ? "text-emerald-700 font-semibold bg-emerald-50"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
