import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import CountryChecker from "./CountryChecker";

export const metadata: Metadata = {
  title: "Sell AI Stock Images – Earn Royalties on AI Art | AI Income Guide",
  description:
    "Upload AI-generated images to Adobe Stock, Shutterstock, and more. Earn royalties every time someone downloads your image — passive income that compounds.",
};

const platforms = [
  {
    name: "Adobe Stock",
    url: "https://contributor.stock.adobe.com",
    type: "Premium stock marketplace",
    description: "The highest-paying stock platform per download. Accepts AI-generated images with proper disclosure. Huge buyer base of designers and marketers using Adobe Creative Cloud. Royalties: 33% per download ($0.33–$3.30+).",
    tags: ["Global", "33% Royalty", "Disclosure Required"],
    tagColor: "bg-red-100 text-red-700",
    highlight: true,
  },
  {
    name: "Shutterstock",
    url: "https://submit.shutterstock.com",
    type: "World's largest stock library",
    description: "Massive buyer base and high download volume. Accepts AI images with disclosure. Royalties start at 15–40% depending on your tier. More downloads = higher tier = higher percentage. Great for volume uploading.",
    tags: ["Global", "15–40% Royalty", "High Volume"],
    tagColor: "bg-orange-100 text-orange-700",
    highlight: false,
  },
  {
    name: "Pond5",
    url: "https://www.pond5.com/sell",
    type: "Stock media marketplace",
    description: "You set your own price — Pond5 takes 40%. Less competition than Shutterstock, especially for niche or abstract AI art. Also accepts video, music, and 3D files. Good for AI video clips too.",
    tags: ["Global", "You Set Price", "60% Royalty"],
    tagColor: "bg-blue-100 text-blue-700",
    highlight: false,
  },
  {
    name: "Dreamstime",
    url: "https://www.dreamstime.com/sell-stock-photos",
    type: "Stock photography",
    description: "Accepts AI-generated images. Royalties range from 25–50% depending on your contributor level. Lower competition than Adobe and Shutterstock. Good supplementary platform for mass uploaders.",
    tags: ["Global", "25–50% Royalty", "AI Accepted"],
    tagColor: "bg-teal-100 text-teal-700",
    highlight: false,
  },
  {
    name: "Depositphotos",
    url: "https://depositphotos.com/become-contributor.html",
    type: "Stock photography",
    description: "34% royalty on on-demand purchases. Accepts AI images with AI-generated keyword. Large Eastern European and European buyer base. Upload once, earn indefinitely.",
    tags: ["Global", "34% Royalty", "AI Accepted"],
    tagColor: "bg-purple-100 text-purple-700",
    highlight: false,
  },
  {
    name: "Creative Market",
    url: "https://creativemarket.com/sell",
    type: "Design assets marketplace",
    description: "Sell AI art as bundles, pattern packs, texture collections, or design elements. You keep 70% of sales. Higher per-sale price than traditional stock. Buyers are designers who pay more for quality bundles.",
    tags: ["Global", "70% Revenue", "Bundle Sales"],
    tagColor: "bg-pink-100 text-pink-700",
    highlight: false,
  },
  {
    name: "Etsy",
    url: "https://www.etsy.com/sell",
    type: "Digital downloads & prints",
    description: "Sell AI art as digital downloads, printable wall art, or design files. Huge buyer audience for home decor and art prints. $0.20 listing fee per item. Keep ~75% after fees. AI art sells extremely well here.",
    tags: ["Global", "~75% Revenue", "Art Prints"],
    tagColor: "bg-yellow-100 text-yellow-700",
    highlight: false,
  },
  {
    name: "Alamy",
    url: "https://www.alamy.com/contributor/",
    type: "UK-based stock agency",
    description: "UK-headquartered with strong editorial and commercial buyers. 50% royalty — one of the highest rates available. Fewer downloads than Shutterstock but higher per-sale value. Accepts AI with disclosure.",
    tags: ["Global", "50% Royalty", "Editorial Buyers"],
    tagColor: "bg-indigo-100 text-indigo-700",
    highlight: false,
  },
];

const contentIdeas = [
  {
    icon: "💼",
    title: "Business & Corporate",
    description: "Teams in meetings, office environments, handshakes, professional headshots. Always in demand by marketing teams.",
    demand: "Very High",
  },
  {
    icon: "🤖",
    title: "AI & Technology",
    description: "Robots, neural networks, circuits, futuristic interfaces. Growing demand as tech content explodes.",
    demand: "Very High",
  },
  {
    icon: "🌿",
    title: "Nature & Environment",
    description: "Landscapes, plants, animals, sustainable living. Evergreen demand across all industries.",
    demand: "High",
  },
  {
    icon: "🎨",
    title: "Abstract & Backgrounds",
    description: "Gradient textures, geometric patterns, colorful abstracts. Used everywhere as website and presentation backgrounds.",
    demand: "High",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    description: "Medical, fitness, mental health, nutrition. Healthcare content is one of the highest-paying niches on stock platforms.",
    demand: "Very High",
  },
  {
    icon: "🌍",
    title: "Diversity & Inclusion",
    description: "Diverse people in everyday scenarios — work, family, community. Consistently high demand from brands and agencies.",
    demand: "High",
  },
];

const tips = [
  {
    icon: "🏷️",
    title: "Keyword everything correctly",
    body: "Stock platforms are search engines. Add 30–50 relevant keywords to every image. Include synonyms, moods, colors, and use cases.",
  },
  {
    icon: "📦",
    title: "Upload in batches of 20+",
    body: "The more images you have live, the more passive downloads you earn. Aim to upload 20 new images per week when starting.",
  },
  {
    icon: "✅",
    title: "Always disclose AI generation",
    body: "Adobe Stock and Shutterstock require you to label images as AI-generated. Failing to do so can get your account banned.",
  },
  {
    icon: "🎯",
    title: "Target commercial use cases",
    body: "Buyers spend most on images for ads, websites, and presentations — not fine art. Think 'what would a marketer need?'",
  },
  {
    icon: "📐",
    title: "Upload horizontal images",
    body: "Landscape orientation (16:9) outsells portrait. Most websites, presentations, and banners use horizontal images.",
  },
  {
    icon: "📈",
    title: "Give it 3 months",
    body: "Stock income is slow at first and grows with volume. 500+ images earning small amounts each adds up to meaningful passive income.",
  },
];

const earningsTable = [
  { milestone: "50 images uploaded", range: "$5 – $30/month", note: "Early stage — building catalog, learning what sells" },
  { milestone: "200 images uploaded", range: "$30 – $150/month", note: "Income starts becoming noticeable, especially on Adobe Stock" },
  { milestone: "500 images uploaded", range: "$100 – $500/month", note: "Compound growth — older images still earn while you add more" },
  { milestone: "1,000+ images (1 year in)", range: "$300 – $2,000+/month", note: "Consistent passive income — earnings grow without extra work" },
  { milestone: "Etsy digital downloads (art prints)", range: "$50 – $3,000+/month", note: "Higher per-sale price — seasonal spikes around holidays" },
  { milestone: "Creative Market bundles", range: "$100 – $2,000+/month", note: "Bundle packs of 50–100 images sell for $15–$50 each" },
];

export default function AIStockImagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/ai-stock-images" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-800 via-orange-700 to-yellow-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-amber-200 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to all categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🖼️</span>
            <span className="bg-amber-500/30 border border-amber-400/40 text-amber-100 text-sm font-medium px-4 py-1.5 rounded-full">
              Beginner
            </span>
            <span className="bg-orange-500/30 border border-orange-400/40 text-orange-100 text-sm font-medium px-4 py-1.5 rounded-full">
              Passive Income
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Sell AI Stock Images
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl leading-relaxed mb-6">
            Generate images with AI tools like Midjourney or Leonardo AI, upload them to stock sites, and earn a royalty every time someone downloads them — forever.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-amber-300 font-semibold text-xs uppercase tracking-wide mb-1">Typical Earnings</div>
              <div className="text-white font-bold text-lg">$50 – $2,000+/month</div>
            </div>
            <div>
              <div className="text-amber-300 font-semibold text-xs uppercase tracking-wide mb-1">Platforms Listed</div>
              <div className="text-white font-bold text-lg">8</div>
            </div>
            <div>
              <div className="text-amber-300 font-semibold text-xs uppercase tracking-wide mb-1">Experience Needed</div>
              <div className="text-white font-bold text-lg">None</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-amber-50 border-b border-amber-100 py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-bold text-gray-900 mb-4">Before You Start Uploading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl border border-amber-100 px-4 py-3 flex gap-3 items-start">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">8 Platforms to Upload To</h2>
          <p className="text-gray-500 text-lg">
            Upload to multiple platforms for maximum passive income — the same image can earn on all of them simultaneously.
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
                  ? "border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 ring-2 ring-amber-300 shadow-md hover:shadow-lg"
                  : "border-gray-200 bg-white hover:shadow-md hover:border-amber-300"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Top Pick
                  </span>
                </div>
              )}
              <div className="w-52 flex-shrink-0">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-700 transition-colors">{p.name}</h3>
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mt-0.5">{p.type}</p>
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
                <span className="text-amber-700 text-sm font-semibold group-hover:underline whitespace-nowrap">
                  Upload now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* What to create */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Types of Images Sell</h2>
          <p className="text-gray-500 text-lg mb-10">
            Focus on what buyers actually purchase — not what looks artistically impressive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentIdeas.map((idea) => (
              <div key={idea.title} className="bg-white rounded-2xl border border-gray-200 px-5 py-5">
                <div className="text-3xl mb-3">{idea.icon}</div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{idea.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${idea.demand === "Very High" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {idea.demand}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{idea.description}</p>
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
            Stock image income is slow to start and compounds over time. The key is consistency — upload regularly and let your catalog grow.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Milestone</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Monthly Earnings</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {earningsTable.map((row, i) => (
                  <tr key={row.milestone} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.milestone}</td>
                    <td className="px-5 py-3 font-bold text-amber-700">{row.range}</td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Upload to Adobe Stock first — it pays the highest royalty per download. Then add Shutterstock, Pond5, and Etsy. After 3 months you will have a clear picture of which platform performs best for your style. Earnings vary. These are estimates based on publicly reported rates
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-orange-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start earning from AI art?</h2>
          <p className="text-amber-100 text-lg mb-8">
            Generate 20 images with Midjourney or Leonardo AI today. Upload them to Adobe Stock contributor portal. Your first royalty could arrive this month.
          </p>
          <Link
            href="/"
            className="bg-white text-amber-800 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-colors text-lg inline-block"
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
