import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "AI Annotation Jobs – Label Data & Get Paid | AI Income Guide",
  description:
    "Find the best AI annotation platforms to earn money labelling images, text, and audio. Real platforms, real tips, no fluff.",
};

const platforms = [
  {
    name: "DataAnnotation.tech",
    url: "https://www.dataannotation.tech/",
    type: "RLHF, Coding & Text",
    description: "One of the highest-paying annotation platforms. Base pay starts at $20/hr and goes up to $50+/hr for specialist work (coding, legal, medical). Requires a Core Assessment before tasks unlock.",
    tags: ["RLHF", "Text", "Coding"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: true,
  },
  {
    name: "Handshake AI",
    url: "https://joinhandshake.com/fellowship-program/",
    type: "AI Labelling & Tagging",
    description: "Label and tag images, video, and text to train AI models. One of the more varied platforms with multiple media types.",
    tags: ["Images", "Video", "Text"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Alignerr (Aligner AI)",
    url: "https://www.alignerr.com/",
    type: "Tagging Jobs",
    description: "Mostly text-based tagging work, operated by Labelbox. Good for people who prefer reading and categorising written content.",
    tags: ["Text"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "Outlier AI",
    url: "https://outlier.ai/",
    type: "Tagging Jobs",
    description: "Focuses heavily on audio tagging. A Scale AI subsidiary used by major AI companies. If you have good listening skills and attention to detail, this is a great fit.",
    tags: ["Audio"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Remotasks (Scale AI)",
    url: "https://www.remotasks.com/",
    type: "Mixed Annotation",
    description: "Worker-facing arm of Scale AI — whose clients include OpenAI and Meta. Good variety of tasks. Pay varies widely by task type, so calculate your real hourly rate before committing.",
    tags: ["Images", "Text", "Video"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Appen",
    url: "https://www.appen.com/join-our-crowd/",
    type: "Multilingual & NLP",
    description: "One of the oldest platforms in the space. Strong in multilingual annotation, speech datasets, and NLP. Work availability is inconsistent — good for supplemental income.",
    tags: ["Speech", "NLP", "Multilingual"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Clickworker",
    url: "https://www.clickworker.com/become-a-clickworker/",
    type: "Microtasks",
    description: "6 million+ global contributors. Easy to join, browser-based tasks covering text, images, and audio. Pays per task — calculate your real hourly rate. Good starting point for beginners.",
    tags: ["Text", "Images", "Audio"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "RWS",
    url: "https://www.rws.com/ai-data-services/",
    type: "AI Data & Annotation",
    description: "One of the world's largest language and AI data services companies. RWS runs annotation projects covering text, image, speech, and translation tasks. Well-established company with structured hiring and consistent project flow.",
    tags: ["Text", "Speech", "Multilingual"],
    tagColor: "bg-green-100 text-green-700",
    highlight: false,
  },
  {
    name: "Surge AI",
    url: "https://www.surgehq.ai/",
    type: "Text Annotation & RLHF",
    description: "Used by top AI labs to improve language models. Mostly text annotation and RLHF work. Good pay for quality contributors. Selective — application-based.",
    tags: ["Text", "RLHF"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "Mercor",
    url: "https://mercor.com/",
    type: "Tagging + More",
    description: "Offers tagging jobs alongside other AI-related tasks. More variety than most platforms — worth applying early as project availability shifts.",
    tags: ["Tagging", "Various"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Invisible AI (Meridial)",
    url: "https://www.meridial.ai/projects",
    type: "Data Tasking",
    description: "Invisible Technologies rebranded their worker marketplace as Meridial. AI data tasking and tagging work. Projects vary — keep checking back as new work opens up regularly.",
    tags: ["Tagging"],
    tagColor: "bg-gray-100 text-gray-700",
    highlight: false,
  },
  {
    name: "Tasksus",
    url: "https://www.tasksus.com/careers/",
    type: "Content Moderation & Tagging",
    description: "Content moderation and AI tagging work. Bigger company, more structured — often comes with training. Consistent work once hired.",
    tags: ["Moderation", "Tagging"],
    tagColor: "bg-red-100 text-red-700",
    highlight: false,
  },
  {
    name: "Hive Microtask",
    url: "https://thehive.ai/workers",
    type: "Image, Video & Text",
    description: "Browser-based annotation platform covering image, video, and text. Beginner-accessible with straightforward tasks.",
    tags: ["Images", "Video", "Text"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "Lionbridge AI",
    url: "https://www.lionbridge.com/opportunities-for-contributors/",
    type: "Text, Image & Speech Annotation",
    description: "One of the oldest and most established annotation companies. Projects cover text evaluation, image labeling, speech data collection, and AI model testing. Available in 300+ languages across 100+ countries. Reliable work flow.",
    tags: ["Text", "Speech", "100+ Countries"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "TELUS International AI",
    url: "https://www.telusinternational.com/solutions/ai-data",
    type: "Tagging Jobs",
    description: "Large, reputable company offering AI data tagging work globally. More structured hiring process — sometimes involves an interview. Stable and well-known.",
    tags: ["Tagging"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: false,
  },
  {
    name: "Toloka",
    url: "https://toloka.ai/tolokers/",
    type: "Crowdsourced Annotation",
    description: "One of the world's largest crowdsourcing annotation platforms — millions of contributors globally. Tasks cover image labeling, text classification, search relevance, and audio transcription. Quick signup, pay-per-task model.",
    tags: ["Images", "Text", "Audio", "Global"],
    tagColor: "bg-sky-100 text-sky-700",
    highlight: false,
  },
  {
    name: "OneForma (Centific)",
    url: "https://oneforma.com/work-with-us/",
    type: "Multilingual Data & Annotation",
    description: "Formerly Figure Eight / CrowdFlower — one of the oldest annotation platforms still operating. Owned by Centific. Strong in multilingual tasks, search evaluation, and voice data collection. Available in 100+ countries.",
    tags: ["Multilingual", "Search Eval", "100+ Countries"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "DataForce by TransPerfect",
    url: "https://www.dataforce.com/join-our-community/",
    type: "Speech, Language & Image Data",
    description: "TransPerfect's AI data division — specialises in speech data collection, voice recording, language annotation, and image labeling. Backed by one of the world's largest translation companies. Strong multilingual project flow.",
    tags: ["Speech", "Multilingual", "Global"],
    tagColor: "bg-violet-100 text-violet-700",
    highlight: false,
  },
  {
    name: "RemoExperts (REX)",
    url: "https://www.rex.zone",
    type: "RLHF & LLM Evaluation",
    description: "Premium annotation platform focused on high-value AI work — RLHF, LLM evaluation, computer vision, and content safety labeling. Pays $25–$65/hr, among the highest rates in the industry. Fully remote and global. Requires passing an entry assessment (takes ~2 weeks to review).",
    tags: ["RLHF", "LLM Eval", "$25–$65/hr"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "Prolific",
    url: "https://app.prolific.com/register/participant/join-waitlist/about-yourself",
    type: "AI Evaluation & Research Studies",
    description: "Primarily a research platform, but now includes a dedicated AI Tasker tier — pass their AI Task Assessment to unlock RLHF, model evaluation, image annotation, and preference ranking studies. Enforces a minimum of $8/hr. Available in OECD countries only.",
    tags: ["OECD Only", "AI Eval", "$8–$15/hr"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Amazon Mechanical Turk",
    url: "https://www.mturk.com/worker",
    type: "Microtask Marketplace",
    description: "The original crowdsourcing platform — millions of small tasks (HITs) covering image labeling, text classification, data verification, and surveys. Pay varies wildly by requester. Use browser extensions to filter for best-paying tasks. Primarily US-based; international access is limited.",
    tags: ["US Priority", "Microtasks", "Variable Pay"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Neevo (Defined.ai)",
    url: "https://www.neevo.ai",
    type: "Text, Audio & Image Tasks",
    description: "Worker-facing platform from Defined.ai. Tasks cover text annotation, audio recording and validation, image labeling, and NLP across 70+ languages. Available in 120+ countries — one of the most globally accessible platforms. Requires a verified PayPal account. Task volume can be inconsistent.",
    tags: ["120+ Countries", "Text", "Audio"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "OpenTrain AI",
    url: "https://www.opentrain.ai/become-freelancer/",
    type: "LLM Evaluation & Annotation",
    description: "Described as 'Upwork for AI data labeling' — you create a profile, set your rate, and apply to projects. Covers LLM evaluation, code annotation, medical data, image, audio, and text. Pays $15–$100+/hr depending on specialisation. Available in 130 countries across 70+ languages.",
    tags: ["130 Countries", "LLM Eval", "$15–$100/hr"],
    tagColor: "bg-pink-100 text-pink-700",
    highlight: false,
  },
];

const taskTypes = [
  {
    icon: "🖼️",
    title: "Bounding Boxes",
    description: "Draw rectangles around objects in images. The most beginner-friendly annotation task — e.g. 'draw a box around every car'.",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
  },
  {
    icon: "✏️",
    title: "Image Segmentation",
    description: "Label every pixel in an image by category. More complex than bounding boxes — pays more as a result.",
    level: "Intermediate",
    levelColor: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "💬",
    title: "Sentiment Labeling",
    description: "Mark text as positive, negative, or neutral. One of the most common beginner text tasks.",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
  },
  {
    icon: "🤖",
    title: "RLHF",
    description: "Rank or rate AI-generated responses for accuracy, helpfulness, and safety. Directly trains LLMs like ChatGPT and Claude. Better pay than basic tasks.",
    level: "Mid-level",
    levelColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🎧",
    title: "Audio Tagging",
    description: "Identify sounds, transcribe speech, or classify tone and emotion in audio clips. Great for people with strong listening skills.",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
  },
  {
    icon: "💻",
    title: "Coding Annotation",
    description: "Review, rate, or correct AI-generated code. If you have a coding background, this unlocks the highest-paying annotation tiers ($30–$50+/hr).",
    level: "Advanced",
    levelColor: "bg-red-100 text-red-700",
  },
];

const payRates = [
  { task: "General Text Annotation", range: "$15 – $20/hr", note: "Entry-level, high volume" },
  { task: "Image Labeling", range: "$15 – $20/hr", note: "Bounding boxes, classification" },
  { task: "Audio Tagging", range: "$15 – $20/hr", note: "Transcription, sound ID" },
  { task: "RLHF (Ranking AI outputs)", range: "$20 – $30/hr", note: "Mid-level skill required" },
  { task: "Image Segmentation", range: "$18 – $25/hr", note: "More complex image work" },
  { task: "Coding Annotation", range: "$25 – $50/hr", note: "Requires programming background" },
  { task: "Medical / Legal / Finance", range: "$30 – $50+/hr", note: "Domain credentials required" },
];

const tips = [
  {
    icon: "🎥",
    title: "Expect a Bot Interview",
    body: "Basic English questions. Speak clearly and you'll pass.",
  },
  {
    icon: "📄",
    title: "Update Your CV First",
    body: "Use ChatGPT to tailor it for annotation jobs — takes 10 mins.",
  },
  {
    icon: "📬",
    title: "Apply Everywhere",
    body: "Projects come and go. More platforms = more consistent work.",
  },
  {
    icon: "📖",
    title: "Follow Instructions Exactly",
    body: "Tests score precision, not common sense. Read everything.",
  },
  {
    icon: "🔍",
    title: "Fact-Check AI Responses",
    body: "For RLHF tasks, verify every claim. Accuracy is scored.",
  },
  {
    icon: "⏳",
    title: "Approval Can Be Slow",
    body: "Work may not appear right away. Stay signed up to multiple platforms.",
  },
];

export default function AIAnnotationPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/ai-annotation" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🏷️</span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner Friendly
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            AI Annotation Jobs
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Label images, tag audio, classify text — and get paid to help train the world's most powerful AI models. No experience needed to get started.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$15 – $50/hr</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Platforms Listed</div>
              <div className="text-white font-bold text-lg">23</div>
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">23 Platforms to Apply to Right Now</h2>
          <p className="text-gray-500 text-lg">
            All legitimate, active platforms. Apply to as many as possible — availability varies by project and demand.
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
          <p className="text-gray-500 mb-8">Typical hourly rates by task type. Higher-skill tasks pay significantly more.</p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Task Type</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Typical Rate</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {payRates.map((row, i) => (
                  <tr key={row.task} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.task}</td>
                    <td className="px-5 py-3 font-bold text-emerald-700">{row.range}</td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Rates are approximate. Per-task platforms may pay less per hour depending on your speed. Always calculate your real hourly rate. Earnings vary. These are estimates based on publicly reported rates</p>
        </div>
      </section>

      {/* Task Types */}
      <section className="bg-gray-50 border-b border-gray-100 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What Kind of Work Will You Do?</h2>
          <p className="text-gray-500 mb-8">The main types of annotation tasks — from easiest to most specialised.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {taskTypes.map((t) => (
              <div key={t.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{t.title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.levelColor}`}>{t.level}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start earning?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Update your CV, pick 5+ platforms, and start applying today. The more platforms you&apos;re signed up to, the more consistent your income will be.
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
