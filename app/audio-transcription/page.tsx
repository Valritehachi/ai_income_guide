import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "Audio & Transcription Jobs – Get Paid to Type | AI Income Guide",
  description:
    "Find the best transcription platforms to earn money converting audio to text. Real platforms, real pay rates, beginner tips included.",
};

const platforms = [
  {
    name: "GoTranscript",
    url: "https://gotranscript.com/transcription-jobs",
    type: "General & Multi-language Transcription",
    description: "Up to $1.75 per audio minute — one of the highest rates available. Actively hiring for non-English languages right now. 140+ supported languages.",
    tags: ["General", "Multilingual", "Captions"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: true,
  },
  {
    name: "Rev",
    url: "https://www.rev.com/freelancers",
    type: "Transcription, Captions & Subtitles",
    description: "High-volume platform with steady work. Transcription pays $0.30–$1.10/min, captioning up to $1.10/min, subtitles up to $3.00/min. Currently on a waitlist for new applicants.",
    tags: ["Captions", "Subtitles", "Transcription"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "TranscribeMe",
    url: "https://www.transcribeme.com/jobs",
    type: "General, Medical & Legal",
    description: "Short audio chunks (under 4 mins each) — perfect for beginners. Starts at $15/audio hour. Medical and legal specialist tracks pay significantly more.",
    tags: ["Beginner", "Medical", "Legal"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "Ditto Transcripts",
    url: "https://www.dittotranscripts.com/transcription-jobs/",
    type: "Legal, Medical & Law Enforcement",
    description: "Higher barrier to entry (test + background check) but pays $0.80–$1.10/min for standard work and up to $5.00/min for rush projects. US residents only.",
    tags: ["Legal", "Medical", "US Only"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Speechpad",
    url: "https://www.speechpad.com/worker/apply",
    type: "Transcription, Captions & Translation",
    description: "Pays twice per week — one of the fastest payout schedules in the industry. No minimum hours, fully flexible. Covers transcription, captioning, and translation.",
    tags: ["Transcription", "Captions", "Translation"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "Scribie",
    url: "https://scribie.com",
    type: "General Transcription",
    description: "Low base rate (~$0.10/min) but globally available and beginner-friendly. Short 4-minute clips. Good for building experience and accuracy ratings.",
    tags: ["Beginner", "Global", "Short Clips"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "QuickTate",
    url: "http://typists.quicktate.com",
    type: "Voicemails, Legal & Medical",
    description: "Specialises in very short audio files — voicemails and brief recordings. International workers accepted. Requires background check and references.",
    tags: ["Short Files", "Global", "Medical"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Outlier AI",
    url: "https://outlier.ai/",
    type: "AI Audio Evaluation",
    description: "Primarily AI model training work, but includes audio evaluation and voice response rating tasks. Good pay for contributors with domain expertise.",
    tags: ["AI Training", "Audio Eval"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Remotasks (Scale AI)",
    url: "https://www.remotasks.com/",
    type: "Audio Labeling & Transcription",
    description: "Scale AI's worker platform. Includes audio labeling, speech annotation, and transcription tasks for AI training. Complete free training courses to unlock higher-paying audio projects.",
    tags: ["AI Training", "Audio", "Speech"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Appen (CrowdGen)",
    url: "https://crowdgen.com",
    type: "Speech Data & Audio Recording",
    description: "Audio recording tasks, speech transcription for AI training, dialect and accent labeling, and voice quality rating. Global availability across 170+ countries.",
    tags: ["Speech Data", "Recording", "Global"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Clickworker",
    url: "https://www.clickworker.com/become-a-clickworker/",
    type: "Audio & Speech Microtasks",
    description: "Regularly runs speech and audio data collection projects alongside other microtasks. 8M+ workers in 136 countries. Task availability varies — check back regularly.",
    tags: ["Audio", "Speech", "Global"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "TELUS International AI",
    url: "https://www.telusinternational.com/solutions/ai-data",
    type: "Audio Transcription & Speech Eval",
    description: "Includes audio transcription, speech evaluation, and voice recording tasks for AI training datasets. Consistent work availability. Background check required.",
    tags: ["AI Training", "Speech", "Global"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: false,
  },
  {
    name: "Amazon MTurk",
    url: "https://www.mturk.com/worker",
    type: "Transcription Microtasks",
    description: "Browse transcription HITs posted by various requesters. Pay varies widely — use Turkopticon to filter for good-paying requesters. Non-US workers receive Amazon gift credits only.",
    tags: ["Microtasks", "Variable Pay"],
    tagColor: "bg-gray-100 text-gray-700",
    highlight: false,
  },
];

const tips = [
  {
    icon: "⌨️",
    title: "Typing Speed Matters",
    body: "Aim for 75+ WPM. Below 60 WPM and your hourly rate will be very low.",
  },
  {
    icon: "📖",
    title: "Read the Style Guide First",
    body: "Most test failures come from ignoring formatting rules, not poor accuracy.",
  },
  {
    icon: "🎧",
    title: "Use Good Headphones",
    body: "Closed-back headphones (not earbuds) make difficult audio much clearer.",
  },
  {
    icon: "🦶",
    title: "Get a Foot Pedal",
    body: "A USB foot pedal (~$70) lets you control playback hands-free and speeds you up significantly.",
  },
  {
    icon: "🌍",
    title: "Non-English Speakers: Apply to GoTranscript",
    body: "GoTranscript is actively hiring for 140+ languages right now.",
  },
  {
    icon: "💊",
    title: "Specialise for More Pay",
    body: "Medical and legal transcription pays 2–4x general rates. Worth the extra training.",
  },
];

const payRates = [
  { type: "General Transcription (beginner)", rate: "$3 – $7/hr", note: "Depends on typing speed and audio clarity" },
  { type: "General Transcription (experienced)", rate: "$15 – $25/hr", note: "90+ WPM, high accuracy" },
  { type: "Captioning", rate: "$0.54 – $1.10/audio min", note: "Rev, Speechpad" },
  { type: "Subtitling / Translation", rate: "$1.50 – $3.00/audio min", note: "Rev subtitles" },
  { type: "Legal Transcription", rate: "$20 – $45/hr", note: "Ditto, GoTranscript" },
  { type: "Medical Transcription", rate: "$18 – $35/hr", note: "TranscribeMe specialist track" },
  { type: "Rush / Special Projects", rate: "Up to $5.00/audio min", note: "Ditto Transcripts overnight" },
];

export default function AudioTranscriptionPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/audio-transcription" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🎙️</span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner Friendly
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Audio & Transcription Jobs
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Convert spoken audio into text and get paid. From general transcription to medical and legal specialist work — plus AI platforms that include audio tasks.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$0.10 – $5.00 / audio min</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">13 Platforms to Apply to Right Now</h2>
          <p className="text-gray-500 text-lg">
            Dedicated transcription platforms plus AI annotation sites that regularly include audio work.
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
          <p className="text-gray-500 mb-8">Your real hourly earnings depend on typing speed, audio quality, and specialisation.</p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Type</th>
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
          <p className="text-xs text-gray-400 mt-3">Beginner earnings are lower until you build speed and accuracy. Specialising in medical or legal transcription significantly increases pay. Earnings vary. These are estimates based on publicly reported rates</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start transcribing?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Start with TranscribeMe or GoTranscript — both are beginner-friendly and open globally. Apply to multiple platforms and keep building your speed.
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
