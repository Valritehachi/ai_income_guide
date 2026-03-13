import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "AI Content Creation – Make Music, Videos & Art With AI | AI Income Guide",
  description:
    "Use AI tools like Suno, Runway, and ElevenLabs to create music, videos, and content — then monetize on YouTube, TikTok, Spotify, and more.",
};

const tools = [
  {
    name: "Suno",
    url: "https://suno.com",
    tagline: "AI music generation",
    description: "Type a description of the song you want — Suno creates a full track with vocals and instruments in seconds.",
    tags: ["Music", "Vocals + Instruments", "Free / $10/month"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: true,
  },
  {
    name: "Udio",
    url: "https://www.udio.com",
    tagline: "AI music with more control",
    description: "Like Suno, but gives you more say over the structure and style of the song.",
    tags: ["Music", "More Control", "Free / $10/month"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
  {
    name: "Runway Gen-3",
    url: "https://runwayml.com",
    tagline: "AI video generation",
    description: "Describe a scene in words and Runway turns it into a video clip — no filming needed.",
    tags: ["Video", "Text-to-Video", "From $15/month"],
    tagColor: "bg-rose-100 text-rose-700",
    highlight: false,
  },
  {
    name: "Pika",
    url: "https://pika.art",
    tagline: "Quick AI video clips",
    description: "Generate short video clips from a text prompt or an image. Great for social media content.",
    tags: ["Video Clips", "Beginner-Friendly", "Free / $8/month"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "HeyGen",
    url: "https://www.heygen.com",
    tagline: "AI presenter videos — no camera needed",
    description: "Paste your script, pick an AI avatar, and get a professional talking-head video without ever appearing on screen.",
    tags: ["Avatar Videos", "No Camera", "From $29/month"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    tagline: "AI voiceovers",
    description: "Turn any text into a realistic spoken voice for your videos — sounds like a real human narrator.",
    tags: ["Voiceover", "Voice Cloning", "Free / $5/month"],
    tagColor: "bg-sky-100 text-sky-700",
    highlight: false,
  },
  {
    name: "Midjourney",
    url: "https://www.midjourney.com",
    tagline: "AI image & artwork",
    description: "Describe an image and Midjourney creates stunning artwork — use it for thumbnails, album covers, and channel art.",
    tags: ["Images", "Commercial Use", "$10/month"],
    tagColor: "bg-amber-100 text-amber-700",
    highlight: false,
  },
  {
    name: "Leonardo AI",
    url: "https://leonardo.ai",
    tagline: "AI images + short animations",
    description: "Create images and short animated clips from text. Has a free tier — good for thumbnails and visual content.",
    tags: ["Images", "Animation", "Free / $12/month"],
    tagColor: "bg-lime-100 text-lime-700",
    highlight: false,
  },
  {
    name: "CapCut",
    url: "https://www.capcut.com",
    tagline: "Free video editor with AI tools built in",
    description: "Edit your videos, add auto-captions, remove backgrounds, and apply trending effects — all for free.",
    tags: ["Video Editing", "Auto Captions", "Free"],
    tagColor: "bg-gray-100 text-gray-700",
    highlight: false,
  },
];

const monetizePlatforms = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/creators",
    type: "Long-form video + Shorts",
    description: "Post your AI content and earn from ads once you reach 1,000 subscribers. Lofi, ambient, and faceless channels earn here every day.",
    tags: ["Ad Revenue", "Memberships", "Global"],
    tagColor: "bg-red-100 text-red-700",
    highlight: true,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/creators",
    type: "Short-form video",
    description: "Post short clips and earn from views, LIVE gifts, and brand deals. Content can go viral faster here than anywhere else.",
    tags: ["Creator Fund", "LIVE Gifts", "Brand Deals"],
    tagColor: "bg-gray-100 text-gray-700",
    highlight: false,
  },
  {
    name: "DistroKid",
    url: "https://distrokid.com",
    type: "Get your music on Spotify & Apple Music",
    description: "Upload your AI music once and DistroKid puts it on Spotify, Apple Music, and 150+ platforms. You keep 100% of the royalties.",
    tags: ["150+ Platforms", "100% Royalties", "$22.99/year"],
    tagColor: "bg-green-100 text-green-700",
    highlight: false,
  },
  {
    name: "Beatstars",
    url: "https://www.beatstars.com",
    type: "Sell beats to artists",
    description: "Upload your AI-made beats and sell them to singers and rappers who need music for their songs.",
    tags: ["Beat Sales", "Licensing", "Free / $10/month"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "Patreon",
    url: "https://www.patreon.com",
    type: "Fan subscriptions",
    description: "Charge your fans a small monthly fee for exclusive content — extra tracks, early releases, behind-the-scenes.",
    tags: ["Subscriptions", "Fan Support", "8% Fee"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Ko-fi",
    url: "https://ko-fi.com",
    type: "Tips & digital product sales",
    description: "Let fans tip you or buy your music files directly. Free to start — no monthly fee.",
    tags: ["0% Fee on Tips", "Digital Sales", "Easy Setup"],
    tagColor: "bg-sky-100 text-sky-700",
    highlight: false,
  },
  {
    name: "Instagram / Reels",
    url: "https://business.instagram.com",
    type: "Short-form video & brand deals",
    description: "Post Reels of your AI content to grow a following and attract brand sponsorship deals.",
    tags: ["Reels Bonus", "Brand Deals", "Global"],
    tagColor: "bg-pink-100 text-pink-700",
    highlight: false,
  },
];

const contentIdeas = [
  {
    icon: "🎵",
    title: "Lofi / Study Music Channels",
    description: "Make AI music with Suno, pair it with a simple looping video, and upload long videos to YouTube. People play these for hours while studying.",
    earning: "$500–$5,000+/month",
  },
  {
    icon: "🎬",
    title: "Faceless Explainer Channels",
    description: "Pick a topic (history, finance, science), write a script with ChatGPT, add an AI voiceover, and post — no camera or face ever shown.",
    earning: "$300–$10,000+/month",
  },
  {
    icon: "🎨",
    title: "AI Art Channels",
    description: "Show AI-generated images or art as slideshows on YouTube and TikTok. Simple to make and popular in art communities.",
    earning: "$100–$2,000+/month",
  },
  {
    icon: "🎹",
    title: "Sell Beats to Artists",
    description: "Make beats with Suno or Udio, upload them to Beatstars, and post short previews on TikTok. Singers and rappers buy beats every day.",
    earning: "$50–$2,000+/month",
  },
  {
    icon: "🧠",
    title: "Motivational Quote Videos",
    description: "Put inspiring quotes over AI visuals with background music and post as TikTok or Reels. High shareability, easy to batch-produce.",
    earning: "$100–$3,000+/month",
  },
  {
    icon: "🌍",
    title: "Nature & Ambient Videos",
    description: "Generate scenic videos (forests, rain, ocean) with Runway, add AI music, and upload to YouTube as background/relaxation content.",
    earning: "$200–$4,000+/month",
  },
];

const tips = [
  {
    icon: "🎭",
    title: "You never need to show your face",
    body: "All of this content can be made 100% anonymously — no camera, no microphone, no personal brand required.",
  },
  {
    icon: "📅",
    title: "Post often, not perfectly",
    body: "Post 3–5 times a week when starting out. Volume and consistency matter more than perfect quality in the beginning.",
  },
  {
    icon: "🎯",
    title: "Pick one specific niche",
    body: "Don't just make 'music' — make 'lofi beats for late-night studying'. Specific topics grow faster.",
  },
  {
    icon: "♻️",
    title: "One piece of content, five platforms",
    body: "Post the same track or video on YouTube, TikTok, Instagram, Spotify, and Beatstars. Ten extra minutes of work, five income sources.",
  },
  {
    icon: "⚖️",
    title: "Use a paid plan before selling",
    body: "Suno and Udio only allow commercial use on their paid plans — upgrade before uploading music you plan to sell or monetize.",
  },
  {
    icon: "💰",
    title: "Set up multiple income streams early",
    body: "Don't wait for 100k subscribers. Add Ko-fi, DistroKid, and Beatstars from day one — even a small audience can earn across all three.",
  },
];

const earningsTable = [
  { source: "YouTube ad revenue (100k views/month)", range: "$200 – $800/month", note: "Highly variable by niche — finance/tech pays 5–10× more than entertainment" },
  { source: "YouTube ad revenue (1M views/month)", range: "$2,000 – $8,000/month", note: "Consistent, scalable once channel is established" },
  { source: "TikTok Creator Rewards Program", range: "$0.40 – $1.00 per 1,000 views", note: "Requires 1M+ views/month to see meaningful income" },
  { source: "Spotify streams via DistroKid", range: "$3 – $5 per 1,000 streams", note: "Grows passively — uploads once, earns indefinitely" },
  { source: "Beat sales on Beatstars", range: "$20 – $500+ per license", note: "Lease licenses sell frequently; exclusive rights pay more" },
  { source: "Patreon / Ko-fi memberships", range: "$100 – $5,000+/month", note: "Predictable monthly income tied to engaged subscriber count" },
  { source: "Brand sponsorships (50k+ followers)", range: "$200 – $5,000+ per post", note: "Music, tech, and lifestyle brands pay well for niche audiences" },
];

export default function ContentCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/content-creation" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-purple-300 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🎵</span>
            <span className="bg-purple-600/40 border border-purple-400/40 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner
            </span>
            <span className="bg-fuchsia-500/30 border border-fuchsia-400/40 text-fuchsia-200 text-sm font-medium px-4 py-1.5 rounded-full">
              Passive Income Potential
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            AI Content Creation
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl leading-relaxed mb-6">
            Use AI tools to generate music, videos, and visuals — then post them on YouTube, TikTok, and Spotify to earn. No music training, no camera, no studio required.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-purple-400 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$200 – $10k+/month</div>
            </div>
            <div>
              <div className="text-purple-400 font-semibold text-xs uppercase tracking-wide mb-1">AI Tools Covered</div>
              <div className="text-white font-bold text-lg">9</div>
            </div>
            <div>
              <div className="text-purple-400 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">None</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-purple-50 border-b border-purple-100 py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-bold text-gray-900 mb-4">Before You Start</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl border border-purple-100 px-4 py-3 flex gap-3 items-start">
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

      {/* AI Tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">AI Creation Tools</h2>
          <p className="text-gray-500 text-lg">
            These 9 tools cover music, video, voice, and image generation — everything you need to produce content without traditional skills or equipment.
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
                  ? "border-purple-400 bg-gradient-to-r from-purple-50 to-fuchsia-50 ring-2 ring-purple-300 shadow-md hover:shadow-lg"
                  : "border-gray-200 bg-white hover:shadow-md hover:border-purple-300"
              }`}
            >
              {tool.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Top Pick
                  </span>
                </div>
              )}
              <div className="w-52 flex-shrink-0">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{tool.name}</h3>
                <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide mt-0.5">{tool.tagline}</p>
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
                <span className="text-purple-700 text-sm font-semibold group-hover:underline whitespace-nowrap">
                  Try it →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Content Ideas */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What to Create</h2>
          <p className="text-gray-500 text-lg mb-10">
            Six content formats that work well with AI tools and have proven monetization paths.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentIdeas.map((idea) => (
              <div key={idea.title} className="bg-white rounded-2xl border border-gray-200 px-5 py-5">
                <div className="text-3xl mb-3">{idea.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{idea.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{idea.description}</p>
                <p className="text-sm font-bold text-purple-700">{idea.earning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Post & Earn */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Where to Post & Earn</h2>
          <p className="text-gray-500 text-lg">
            Seven platforms that pay for your content — from ad revenue to beat sales to fan subscriptions.
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
                  ? "border-purple-400 bg-gradient-to-r from-purple-50 to-fuchsia-50 ring-2 ring-purple-300 shadow-md hover:shadow-lg"
                  : "border-gray-200 bg-white hover:shadow-md hover:border-purple-300"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Start Here
                  </span>
                </div>
              )}
              <div className="w-52 flex-shrink-0">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{p.name}</h3>
                <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide mt-0.5">{p.type}</p>
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
                <span className="text-purple-700 text-sm font-semibold group-hover:underline whitespace-nowrap">
                  Visit →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Earnings Table */}
      <section className="bg-white border-b border-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What Does It Actually Pay?</h2>
          <p className="text-gray-500 mb-8">
            AI content creation income is slow to start but compounds over time. The key is building assets — channels, catalogs, and audiences — that earn passively once established.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Revenue Source</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Earnings</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {earningsTable.map((row, i) => (
                  <tr key={row.source} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.source}</td>
                    <td className="px-5 py-3 font-bold text-purple-700">{row.range}</td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Most creators see their first meaningful income at 3–6 months. Diversify across YouTube, DistroKid, and Beatstars from day one — don't wait until one platform is established. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-violet-800 to-fuchsia-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create your first AI track?</h2>
          <p className="text-purple-100 text-lg mb-8">
            Start with Suno — generate 5 tracks today for free. Upload your best one to DistroKid and post a 30-second clip on TikTok. That is the entire first step.
          </p>
          <Link
            href="/"
            className="bg-white text-violet-800 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors text-lg inline-block"
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
