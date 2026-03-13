import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Income Guide – Turn AI Into Your Income Stream",
  description:
    "Discover the best ways to earn money with AI in 2026. From data annotation to agentic coding, explore every opportunity in the new AI economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-gray-900`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1KWKJM8DZ0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1KWKJM8DZ0');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
