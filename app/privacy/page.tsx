import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Income Guide",
  description: "Privacy policy for AI Income Guide — how we handle data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath="/privacy" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-emerald-700 text-sm hover:text-emerald-900 transition-colors mb-8 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              AI Income Guide (<strong>aiincomeguide.com</strong>) is an informational website that helps people discover legitimate ways to earn money in the AI economy. We are not an employer, recruitment agency, or job board. We do not process applications or handle employment on behalf of any listed platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect minimal data. Specifically:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No account registration:</strong> AI Income Guide does not require you to create an account, submit personal information, or log in. We do not collect your name, email address, or any other identifying information unless you contact us directly.
              </li>
              <li>
                <strong>Contact enquiries:</strong> If you reach out to us by email, we will only use the information you provide to respond to your message.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Third-Party Links</h2>
            <p>
              This site contains links to third-party platforms (such as Upwork, Fiverr, Adobe Stock, and others). When you click these links, you leave AI Income Guide and are subject to the privacy policies of those platforms. We have no control over, and take no responsibility for, the content or privacy practices of any third-party website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Earnings Disclaimer</h2>
            <p>
              All income figures and earnings ranges on this site are estimates and earnings vary significantly based on individual skill, location, time invested, and market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Contact</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at the email address listed on our site.
            </p>
          </section>

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
