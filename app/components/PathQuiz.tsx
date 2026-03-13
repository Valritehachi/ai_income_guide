"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: "experience",
    question: "What's your current experience level?",
    options: [
      { label: "Complete beginner — no specific skills yet", value: "beginner" },
      { label: "I have writing, communication, or creative skills", value: "creative" },
      { label: "I have technical or coding skills", value: "technical" },
    ],
  },
  {
    id: "income_type",
    question: "What type of income do you want?",
    options: [
      { label: "Earn money now — I want to get paid for work I do", value: "active" },
      { label: "Build something that earns passively over time", value: "passive" },
    ],
  },
];

type Rec = { icon: string; title: string; description: string; href: string };

function getRecommendations(experience: string, incomeType: string): Rec[] {
  if (experience === "beginner" && incomeType === "active") {
    return [
      { icon: "🏷️", title: "AI Annotation Jobs", description: "Label data for AI companies. No experience needed — you can apply and start this week.", href: "/ai-annotation" },
      { icon: "🎙️", title: "Audio Transcription", description: "Convert recordings to text at your own pace. Beginner-friendly with no commitments.", href: "/audio-transcription" },
      { icon: "📋", title: "Survey Sites", description: "The easiest way to earn your first dollar online — short surveys, fast payouts.", href: "/survey-sites" },
    ];
  }
  if (experience === "beginner" && incomeType === "passive") {
    return [
      { icon: "🎵", title: "AI Content Creation", description: "Use free AI tools to make music and videos, then post on YouTube and TikTok to earn passively.", href: "/content-creation" },
      { icon: "🖼️", title: "AI Stock Images", description: "Generate images with AI and upload to stock sites. Every download earns you a royalty — forever.", href: "/ai-stock-images" },
    ];
  }
  if (experience === "creative" && incomeType === "active") {
    return [
      { icon: "✍️", title: "Online Writing Jobs", description: "Get paid to write articles, blogs, and copy for businesses. Good writers earn $0.10–$0.50/word.", href: "/online-writing" },
      { icon: "🗂️", title: "Virtual Assistant Jobs", description: "Use your communication and organisation skills to support businesses remotely for $15–$35/hr.", href: "/virtual-assistant" },
    ];
  }
  if (experience === "creative" && incomeType === "passive") {
    return [
      { icon: "🎵", title: "AI Content Creation", description: "Create music, videos, and art with AI tools. Build multiple passive income streams across platforms.", href: "/content-creation" },
      { icon: "🖼️", title: "AI Stock Images", description: "Turn your creative eye into passive income. Upload AI art to stock sites and earn per download.", href: "/ai-stock-images" },
    ];
  }
  if (experience === "technical" && incomeType === "active") {
    return [
      { icon: "💻", title: "Online Coding Jobs", description: "Sell your programming skills on Toptal, Upwork, or AI evaluation platforms — $15–$200/hr.", href: "/coding-jobs" },
      { icon: "🏷️", title: "AI Annotation (Technical)", description: "Evaluate AI-generated code on platforms like Outlier AI. $20–$50/hr, no clients to pitch.", href: "/ai-annotation" },
    ];
  }
  // technical + passive
  return [
    { icon: "🤖", title: "Agentic Coding", description: "Build software products with AI tools and sell them. The highest-earning path on this site.", href: "/agentic-coding" },
    { icon: "💻", title: "Online Coding Jobs", description: "Freelance while you build. AI tools let you deliver faster and earn more per hour.", href: "/coding-jobs" },
  ];
}

export default function PathQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[step];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const recs = done ? getRecommendations(answers.experience, answers.income_type) : [];

  return (
    <section className="bg-emerald-50 border-y border-emerald-100 py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Not sure where to start?</h2>
          <p className="text-gray-500 text-sm">Answer 2 quick questions and we&apos;ll point you in the right direction.</p>
        </div>

        {!done ? (
          <div className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm">
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
              Question {step + 1} of {questions.length}
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-4 mb-5">{current.question}</h3>
            <div className="flex flex-col gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="text-left px-5 py-4 rounded-xl border border-gray-200 text-sm text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-800 transition-all font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-center text-sm text-gray-500 mb-4">Based on your answers, start with one of these:</p>
            <div className="flex flex-col gap-3">
              {recs.map((rec) => (
                <Link
                  key={rec.href}
                  href={rec.href}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 px-5 py-4 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <span className="text-3xl flex-shrink-0">{rec.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors text-sm">{rec.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{rec.description}</p>
                  </div>
                  <span className="text-emerald-700 font-semibold text-sm self-center group-hover:underline whitespace-nowrap">
                    View →
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-5">
              <button onClick={reset} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                ← Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
