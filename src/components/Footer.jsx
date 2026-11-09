import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, TelegramIcon, FacebookIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-12 pb-8 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20">
              S
            </div>
            <div>
              <span className="font-heading font-extrabold text-base tracking-wider text-white">
                <span className="text-cyan-400">&lt;</span>CHHUNSEAK<span className="text-cyan-400">/&gt;</span>
              </span>
              <p className="text-xs text-slate-400 font-mono">
                Full-Stack &amp; POS Systems Engineer • Phnom Penh
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
              aria-label="Telegram"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Sath Chhunseak. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React 19, Vite &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
