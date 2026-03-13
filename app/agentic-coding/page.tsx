import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Agentic Coding – Build & Sell Software With AI | AI Income Guide",
  description:
    "Use AI tools like Cursor, Claude, and Bolt.new to build real software products and sell them. The highest-earning path in the AI economy — $500 to $10k+/month.",
};

const tools = [
  {
    name: "Cursor",
    url: "https://www.cursor.com",
    tagline: "AI-native code editor",
    description:
      "The most popular AI-native IDE. Cursor writes, edits, and debugs code alongside you in real time. Understands your entire codebase context and handles multi-file changes. Dramatically cuts the time to ship features.",
    tags: ["Code Editor", "Codebase-Aware", "$20/month"],
    tagColor: "bg-emerald-100 text-emerald-700",
    price: "$20/month",
    highlight: true,
  },
  {
    name: "Lovable.dev",
    url: "https://lovable.dev",
    tagline: "Full-stack apps from a prompt",
    description:
      "Describe your app idea and Lovable builds the entire frontend and backend — React, Supabase, auth, and all. One of the fastest ways to go from idea to working product. Deploys instantly. No local setup needed.",
    tags: ["Full-Stack", "No Setup", "Free / $20/month"],
    tagColor: "bg-rose-100 text-rose-700",
    price: "Free / $20/month",
    highlight: false,
  },
  {
    name: "Bolt.new",
    url: "https://bolt.new",
    tagline: "Instant runnable apps in the browser",
    description:
      "Generate full Next.js, React, or Node apps from a single prompt, instantly runnable in the browser. Best for shipping MVPs quickly. Integrates with GitHub and Netlify for one-click deploy.",
    tags: ["Full-Stack", "Browser-Based", "Free / $20/month"],
    tagColor: "bg-orange-100 text-orange-700",
    price: "Free / $20/month",
    highlight: false,
  },
  {
    name: "Windsurf",
    url: "https://www.windsurf.com",
    tagline: "Agentic code editor by Codeium",
    description:
      "Uses an 'agentic flow' where the AI handles multi-step tasks end to end — not just completions. Excellent context awareness and a generous free tier. Strong alternative to Cursor.",
    tags: ["Code Editor", "Agentic Flow", "Free / $15/month"],
    tagColor: "bg-blue-100 text-blue-700",
    price: "Free / $15/month",
    highlight: false,
  },
  {
    name: "v0 by Vercel",
    url: "https://v0.dev",
    tagline: "UI generation with shadcn/Tailwind",
    description:
      "Describe a UI component or screen and v0 generates production-ready React code with Tailwind and shadcn/ui. Perfect for rapidly building polished frontends without being a designer.",
    tags: ["UI Builder", "React/Tailwind", "Free / $20/month"],
    tagColor: "bg-gray-100 text-gray-700",
    price: "Free / $20/month",
    highlight: false,
  },
  {
    name: "Claude (Anthropic)",
    url: "https://claude.ai",
    tagline: "Best reasoning for complex builds",
    description:
      "Claude excels at architecture planning, debugging complex logic, and writing clean boilerplate. Use it for larger reasoning tasks and system design — then drop code into Cursor or Windsurf to execute.",
    tags: ["AI Assistant", "Architecture", "Free / $20/month"],
    tagColor: "bg-purple-100 text-purple-700",
    price: "Free / $20/month",
    highlight: false,
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    tagline: "General-purpose AI assistant",
    description:
      "The most widely used AI tool. Great for debugging, writing copy, generating ideas, explaining error messages, and code-alongside. GPT-4o handles code well across all languages and frameworks.",
    tags: ["AI Assistant", "Debugging", "Free / $20/month"],
    tagColor: "bg-teal-100 text-teal-700",
    price: "Free / $20/month",
    highlight: false,
  },
  {
    name: "Replit",
    url: "https://replit.com",
    tagline: "Build and host in the browser",
    description:
      "Browser-based IDE with AI assistance built in. Ideal for scripting automation, building small SaaS tools, and sharing projects without managing servers. No local setup needed.",
    tags: ["Browser IDE", "Hosting Included", "Free / $25/month"],
    tagColor: "bg-pink-100 text-pink-700",
    price: "Free / $25/month",
    highlight: false,
  },
  {
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    tagline: "AI pair programmer in any IDE",
    description:
      "Integrates into VS Code, JetBrains, and other editors. Strong autocomplete, inline chat, and code explanation. Best for developers who already have a preferred editor and want AI augmentation without switching.",
    tags: ["IDE Plugin", "Autocomplete", "$10/month"],
    tagColor: "bg-indigo-100 text-indigo-700",
    price: "$10/month",
    highlight: false,
  },
];

const hostingPlatforms = [
  {
    name: "Vercel",
    url: "https://vercel.com",
    type: "Frontend & Next.js Hosting",
    description:
      "The default hosting platform for Next.js apps. Free tier handles most early-stage projects. One-command deploy from GitHub. Scales automatically. Add a custom domain in minutes.",
    tags: ["Free Tier", "Next.js Native", "Auto-Scale"],
    tagColor: "bg-gray-100 text-gray-700",
    highlight: true,
  },
  {
    name: "Supabase",
    url: "https://supabase.com",
    type: "Database, Auth & Storage",
    description:
      "Open-source Firebase alternative. Postgres database, user authentication, file storage, and realtime subscriptions — all in one free-tier platform. The go-to backend for indie SaaS projects.",
    tags: ["Free Tier", "Postgres", "Auth + Storage"],
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: false,
  },
  {
    name: "Railway",
    url: "https://railway.app",
    type: "Backend & Database Hosting",
    description:
      "Deploy Node.js, Python, or any backend service with one click. Supports Postgres, Redis, and MySQL. Simpler than AWS. $5/month starter plan. Perfect for SaaS backends and APIs.",
    tags: ["Easy Deploy", "Any Language", "From $5/month"],
    tagColor: "bg-violet-100 text-violet-700",
    highlight: false,
  },
  {
    name: "Netlify",
    url: "https://www.netlify.com",
    type: "Static Sites & Serverless Functions",
    description:
      "Great for deploying static React sites, landing pages, and JAMstack apps. Free tier is generous. Built-in forms, serverless functions, and A/B testing. Strong alternative to Vercel for non-Next.js projects.",
    tags: ["Free Tier", "Serverless", "CI/CD Built-In"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "PlanetScale",
    url: "https://planetscale.com",
    type: "Serverless MySQL Database",
    description:
      "Serverless MySQL with branching — think Git for your database schema. Scales infinitely. Free hobby tier. Popular with Next.js SaaS starters using Prisma ORM.",
    tags: ["MySQL", "Schema Branching", "Free Tier"],
    tagColor: "bg-amber-100 text-amber-700",
    highlight: false,
  },
];

const buildIdeas = [
  {
    icon: "📦",
    title: "Micro-SaaS Tools",
    description:
      "Build small, focused software that solves one problem. Examples: invoice generators, SEO audit tools, link-in-bio builders, AI form creators. Sell subscriptions on Gumroad or Lemon Squeezy.",
    earning: "$100–$5k+/month",
  },
  {
    icon: "🧩",
    title: "Chrome Extensions",
    description:
      "Extensions that add AI features to existing sites are hot. Examples: LinkedIn message writers, email summarizers, GPT-powered research assistants. Ship in a weekend and sell on Gumroad.",
    earning: "$50–$2k+/month",
  },
  {
    icon: "⚙️",
    title: "Automation Scripts",
    description:
      "Build Python or Node.js scripts that automate repetitive business workflows — scraping, data processing, report generation, API integrations. Sell one-time or pitch directly to businesses.",
    earning: "$200–$3k per script",
  },
  {
    icon: "🌐",
    title: "Client Websites",
    description:
      "Build full websites for local businesses, startups, and creators using AI tools. What used to take 2 weeks now takes 2 days. With Cursor + Next.js + Tailwind, you can triple your hourly rate.",
    earning: "$500–$5k per project",
  },
  {
    icon: "🔗",
    title: "APIs & Integrations",
    description:
      "Build custom API wrappers, Zapier-style integrations, or webhook connectors for businesses. Sell as one-time products or recurring SaaS. Strong demand from non-technical business owners.",
    earning: "$300–$2k per project",
  },
  {
    icon: "📚",
    title: "Templates & Boilerplates",
    description:
      "Package your best project setups as sellable templates — Next.js SaaS starters, Notion dashboard templates, AI prompt packs. One build, infinite sales. Low maintenance, passive income.",
    earning: "$5–$200 per sale",
  },
];

const monetizePlatforms = [
  {
    name: "Gumroad",
    url: "https://gumroad.com",
    type: "Digital product marketplace",
    description:
      "The default platform for indie makers. Sell software, templates, scripts, or SaaS access. 10% fee. Instant payouts. Built-in audience via Gumroad Discover. Thousands of developers already sell here.",
    tagColor: "bg-pink-100 text-pink-700",
    tags: ["Global", "10% Fee", "Instant Payouts"],
    highlight: true,
  },
  {
    name: "Lemon Squeezy",
    url: "https://www.lemonsqueezy.com",
    type: "SaaS payments & digital storefront",
    description:
      "Better than Gumroad for recurring SaaS subscriptions. Handles VAT/tax globally, license keys, and subscription management. 5% + $0.50 fee. Growing as the go-to for indie SaaS.",
    tagColor: "bg-yellow-100 text-yellow-700",
    tags: ["SaaS-Ready", "Tax Handled", "Subscriptions"],
    highlight: false,
  },
  {
    name: "AppSumo",
    url: "https://sell.appsumo.com",
    type: "SaaS launch platform",
    description:
      "List your SaaS product as a lifetime deal and reach 1M+ deal hunters instantly. Huge launch exposure. 30–70% revenue share. Best for tools with real utility that benefit from a large user base at launch.",
    tagColor: "bg-orange-100 text-orange-700",
    tags: ["1M+ Users", "Launch Boost", "Lifetime Deals"],
    highlight: false,
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com",
    type: "Product launch community",
    description:
      "Launch your product to a community of 700k+ tech enthusiasts. A top-5 ranking generates massive free traffic. Free to list. Best paired with a Gumroad or Lemon Squeezy store.",
    tagColor: "bg-red-100 text-red-700",
    tags: ["Free", "Organic Traffic", "Launch Community"],
    highlight: false,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com",
    type: "Freelance marketplace",
    description:
      "Sell your agentic coding skills as a service. Offer 'AI-accelerated web development' or 'build your SaaS MVP in 72 hours'. Clients pay premium rates for speed — and AI tools let you deliver it.",
    tagColor: "bg-indigo-100 text-indigo-700",
    tags: ["Freelance", "Global", "Service-Based"],
    highlight: false,
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com",
    type: "Gig-based freelance",
    description:
      "Create gigs like 'I will build your SaaS MVP with AI', 'Chrome extension developer', or 'automation script'. With AI tools, you can deliver projects faster and take on more clients simultaneously.",
    tagColor: "bg-teal-100 text-teal-700",
    tags: ["Gig-Based", "Inbound", "Global"],
    highlight: false,
  },
  {
    name: "Stripe",
    url: "https://stripe.com",
    type: "Direct payments",
    description:
      "Once you have users, add a direct Stripe checkout to your own site. Keep ~97% of revenue (2.9% + $0.30 per transaction). Build once, earn passively. Pairs with any Next.js or React project.",
    tagColor: "bg-violet-100 text-violet-700",
    tags: ["97% Revenue", "Self-Hosted", "Subscriptions"],
    highlight: false,
  },
];

const steps = [
  { step: "1", title: "Pick your AI tool", body: "Start with Cursor or Lovable.dev. If you're not a developer, Lovable or Bolt.new require no local setup. If you can code, Cursor will multiply your speed." },
  { step: "2", title: "Pick a real problem", body: "Find one specific pain point you personally have or see in a community you're part of. Don't build for an imaginary user — solve something real." },
  { step: "3", title: "Build an MVP in 72 hours", body: "Set a 72-hour limit. Ship the core feature only. No onboarding flow, no settings page, no polish. Just the thing that does the one thing." },
  { step: "4", title: "Deploy for free", body: "Push to GitHub and deploy to Vercel in one click. Add Supabase for a free database. Your app is live on the internet in under 10 minutes." },
  { step: "5", title: "List on Gumroad", body: "Create a Gumroad product. Write one paragraph describing the problem you solve. Set a price ($9–$29 for a first product). Add a screenshot." },
  { step: "6", title: "Launch publicly", body: "Post to Product Hunt, the relevant subreddit, and Twitter/X. Tell people what problem it solves in one sentence. Your first sale is the goal — not perfection." },
];

const tips = [
  {
    icon: "🚢",
    title: "Ship Ugly Early",
    body: "Your first version doesn't need to be perfect. Launch with the core feature working and iterate based on real user feedback. Done beats polished.",
  },
  {
    icon: "🎯",
    title: "Solve a Problem You Have",
    body: "The best micro-SaaS products come from real frustrations. If you built a tool to scratch your own itch, others likely have the same itch.",
  },
  {
    icon: "📣",
    title: "Distribution Is the Product",
    body: "A Product Hunt launch + Reddit post in a relevant subreddit can drive thousands of visitors for free. Build distribution into your launch plan from day one.",
  },
  {
    icon: "🤖",
    title: "Use AI for the Whole Stack",
    body: "Cursor for code, Claude for architecture and debugging, v0 for UI, ChatGPT for copy and SEO. Use the full stack of AI tools — not just one.",
  },
  {
    icon: "💸",
    title: "Start With One-Time Sales, Move to Subscriptions",
    body: "One-time products on Gumroad are easier to sell at first. Once you have users and proof, introduce a monthly plan for ongoing revenue.",
  },
  {
    icon: "🔁",
    title: "Repurpose Into Freelance",
    body: "Every tool you build is a portfolio piece. Use it to pitch freelance clients. 'I built this in 3 days with AI — I can build yours in a week' is a powerful pitch.",
  },
];

const earningsTable = [
  { path: "Freelance (Upwork/Fiverr) — AI-accelerated dev", range: "$30 – $150/hr", note: "AI tools 3–5× your output speed vs traditional developers" },
  { path: "Client website projects", range: "$500 – $5,000/project", note: "Deliver in days instead of weeks; take on more clients" },
  { path: "Automation scripts & API integrations", range: "$300 – $3,000/project", note: "High demand from non-technical business owners" },
  { path: "Micro-SaaS (subscriptions via Lemon Squeezy)", range: "$200 – $5,000+/month", note: "Recurring — grows as user base grows" },
  { path: "Chrome extensions + digital products (Gumroad)", range: "$50 – $2,000+/month", note: "Passive after launch — one build, ongoing sales" },
  { path: "Successful SaaS (post-Product Hunt launch)", range: "$2,000 – $10,000+/month", note: "Takes 3–6 months to grow; exponential upside" },
];

export default function AgenticCodingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/agentic-coding" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-emerald-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🤖</span>
            <span className="bg-amber-400/20 border border-amber-400/40 text-amber-200 text-sm font-bold px-4 py-1.5 rounded-full">
              ✦ Highest Earning
            </span>
            <span className="bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Low Barrier
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Agentic Coding
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
            Use AI tools to build real software products — then sell them. No CS degree required. With Cursor, Claude, and Bolt.new, anyone who can think clearly can ship software that earns.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$500 – $10k+/month</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">AI Tools Covered</div>
              <div className="text-white font-bold text-lg">9</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">Beginner-friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Agentic Coding */}
      <section className="bg-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Agentic Coding?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            You tell an AI what you want to build — it writes the code for you.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            No coding experience needed. You focus on the idea; the AI handles the technical work. Then you sell what you built.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 px-5 py-4">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-900 mb-1">Build in hours, not months</h3>
              <p className="text-gray-600 text-sm">AI writes the code — you just describe what you want.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 px-5 py-4">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-bold text-gray-900 mb-1">Work from anywhere</h3>
              <p className="text-gray-600 text-sm">All you need is a laptop and an internet connection.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 px-5 py-4">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-bold text-gray-900 mb-1">Earn while you sleep</h3>
              <p className="text-gray-600 text-sm">A product you build once can sell to thousands of people automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="bg-gray-50 border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How to Start in 6 Steps</h2>
          <p className="text-gray-500 text-lg mb-10">
            The exact sequence from zero to your first product live and listed for sale.
          </p>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-5 bg-white rounded-2xl border border-gray-200 px-6 py-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-extrabold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">The AI Tools You Need</h2>
          <p className="text-gray-500 text-lg">
            These 9 tools cover the full agentic coding stack — from writing code to building UIs to shipping products.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex flex-row items-center gap-5 rounded-2xl border px-6 py-4 transition-all duration-200 group ${
                tool.highlight
                  ? "border-emerald-400 bg-gradient-to-r from-emerald-50 to-teal-50 ring-2 ring-emerald-300 shadow-md hover:shadow-lg"
                  : "border-gray-200 bg-white hover:shadow-md hover:border-emerald-300"
              }`}
            >
              {tool.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Top Pick
                  </span>
                </div>
              )}
              <div className="w-52 flex-shrink-0">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{tool.name}</h3>
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mt-0.5">{tool.tagline}</p>
              </div>
              <p className="text-gray-900 text-sm leading-relaxed flex-1 hidden sm:block">{tool.description}</p>
              <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
                <div className="hidden md:flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tool.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-emerald-700 text-sm font-semibold group-hover:underline whitespace-nowrap">
                  Try it →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* What to Build */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What to Build</h2>
          <p className="text-gray-500 text-lg mb-10">
            Six proven product types that consistently earn. Start with one, validate fast, and double down on what works.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildIdeas.map((idea) => (
              <div key={idea.title} className="bg-white rounded-2xl border border-gray-200 px-5 py-5">
                <div className="text-3xl mb-3">{idea.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{idea.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{idea.description}</p>
                <p className="text-sm font-bold text-emerald-700">{idea.earning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Sell */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Where to Sell & Monetize</h2>
          <p className="text-gray-500 text-lg">
            Building is only half the work. These 7 platforms handle distribution, payments, and your launch.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {monetizePlatforms.map((p) => (
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
                    Start Here
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
                  Visit →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Deploy & Host */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Deploy & Host Your Product</h2>
            <p className="text-gray-500 text-lg">
              Once you've built it, you need to run it somewhere. These 5 platforms cover everything from frontend hosting to databases — most with free tiers to get you started.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {hostingPlatforms.map((p) => (
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
                      Start Here
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
                    Visit →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-emerald-50 border-y border-emerald-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-bold text-gray-900 mb-4">Before You Start</h2>
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

      {/* Earnings Table */}
      <section className="bg-white border-b border-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What Does It Actually Pay?</h2>
          <p className="text-gray-500 mb-8">
            Agentic coding has the widest earning range of any income stream on this site. The ceiling is not hours — it is how useful your product is and how many people want it.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Income Path</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Earnings</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {earningsTable.map((row, i) => (
                  <tr key={row.path} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.path}</td>
                    <td className="px-5 py-3 font-bold text-emerald-700">{row.range}</td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Start with freelance (Upwork/Fiverr) for immediate income while building your first product. Reinvest earnings into AI tool subscriptions and iterate until you find a SaaS that sticks. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build your first AI-powered product?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Start with Cursor or Lovable.dev today. Pick one problem to solve, ship something small, deploy to Vercel, and list it on Gumroad. The first sale changes everything.
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
