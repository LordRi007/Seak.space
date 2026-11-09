import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onNavigate }) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = personalInfo.subtitles[currentSubtitleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSubtitleIndex]);

  const handleCopyProfile = () => {
    const profileJson = JSON.stringify(
      {
        developer: {
          name: personalInfo.name,
          role: "Full Stack Web Developer",
          degree: "Bachelor of Software Engineering (Year 4)",
          university: "BELTEI International University",
          stack: ["React", "Laravel", "MySQL", "Tailwind CSS", "Vite"],
          specialty: "POS Systems & NBC Bakong KHQR Integration",
          email: personalInfo.email,
          status: "Available for Internship & Projects"
        }
      },
      null,
      2
    );
    navigator.clipboard.writeText(profileJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for IT Internship &amp; Projects</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Typewriter */}
              <div className="h-9 sm:h-11 flex items-center justify-center lg:justify-start">
                <p className="font-tech text-lg sm:text-2xl text-slate-300 font-medium flex items-center">
                  <span className="text-slate-400 mr-2">I am a</span>
                  <span className="text-cyan-400 font-semibold border-b border-cyan-400/40 pb-0.5">
                    {displayedText}
                  </span>
                  <span className="w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
                </p>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Clean CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white glass-panel border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                Get In Touch
              </button>
            </div>

            {/* Core Tech Stack Chips */}
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs font-mono text-slate-400 block mb-2.5">
                Core Technologies:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  'React.js',
                  'Laravel',
                  'NBC Bakong KHQR',
                  'MySQL',
                  'Tailwind CSS',
                  'Vite',
                  'REST APIs'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Code Mockup Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/15 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="relative rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden bg-slate-950/80">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>DeveloperProfile.json</span>
                    </span>
                  </div>

                  <button
                    onClick={handleCopyProfile}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 px-2 py-1 rounded hover:bg-white/5 transition-colors font-mono cursor-pointer"
                    title="Copy Profile JSON"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Editor Code Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-1 overflow-x-auto">
                  <div className="text-slate-400">// Sath Chhunseak Developer Signature</div>
                  <div>
                    <span className="text-cyan-400">const</span>{' '}
                    <span className="text-yellow-300">developer</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">"name":</span>{' '}
                    <span className="text-emerald-300">"Sath Chhunseak"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">"degree":</span>{' '}
                    <span className="text-emerald-300">"Year 4 BSE @ BELTEI"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">"primaryStack":</span> [
                    <span className="text-emerald-300">"React"</span>,{' '}
                    <span className="text-emerald-300">"Laravel"</span>,{' '}
                    <span className="text-emerald-300">"MySQL"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">"specialty":</span>{' '}
                    <span className="text-sky-300">"POS Systems &amp; KHQR Payments"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">"retailOps":</span>{' '}
                    <span className="text-emerald-300">"7-Eleven Mart Cashier &amp; Inventory"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">"status":</span>{' '}
                    <span className="text-emerald-400 font-bold">"Open for Opportunities"</span>
                  </div>
                  <div>{'};'}</div>
                </div>

                {/* Editor Footer Status */}
                <div className="px-5 py-2.5 bg-slate-900/50 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Ready to build
                  </span>
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Stats Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl glass-panel border border-white/5 text-center group hover:border-cyan-500/20 transition-colors"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-semibold text-xs text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
