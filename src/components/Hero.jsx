import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Terminal as TerminalIcon, 
  Code2, 
  Check, 
  Copy, 
  Play, 
  QrCode, 
  ExternalLink,
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onNavigate }) {
  // Typewriter effect state
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Active tab in hero code mockup
  const [activeTab, setActiveTab] = useState('json'); // 'json' | 'terminal'
  const [copied, setCopied] = useState(false);

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'Sath Chhunseak Interactive Shell [v2.4.0]' },
    { type: 'system', text: 'Type "help" to see available commands or click shortcuts below.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  // Typewriter loop
  useEffect(() => {
    const fullText = personalInfo.subtitles[currentSubtitleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSubtitleIndex, typingSpeed]);

  const handleCopyProfile = () => {
    const profileJson = JSON.stringify(
      {
        name: personalInfo.name,
        role: "Full Stack Web Developer",
        education: "BELTEI International University (Year 4 BSE)",
        specialty: "POS Systems & NBC Bakong KHQR Integration",
        stack: ["React", "Laravel", "MySQL", "Tailwind CSS", "Vite", "Spring Boot"],
        experience: "7-Eleven Mart (Retail POS Operations)",
        location: "Phnom Penh, Cambodia",
        email: personalInfo.email,
        phone: personalInfo.phone,
        status: "Open for IT Internship & Full-Stack Projects"
      },
      null,
      2
    );
    navigator.clipboard.writeText(profileJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: 'user', text: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands: whoami, skills, projects, khqr, contact, clear, repo'
        });
        break;
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'Sath Chhunseak — Year 4 Software Engineering student at BELTEI University, POS & KHQR full-stack developer.'
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: 'Core: React.js, Laravel, MySQL, NBC Bakong KHQR, Tailwind CSS, Vite, Spring Boot, REST APIs.'
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: '1. AuraPOS System (aurapos.store) | 2. SmartPOS Cafe (poscafe.online) | 3. Enterprise Analytics Dashboard'
        });
        break;
      case 'khqr':
        newHistory.push({
          type: 'output',
          text: '⚡ KHQR Module initialized! Dynamic NBC Bakong QR with MD5 polling verification.'
        });
        onNavigate('simulator');
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Telegram: @ChhunSeak123`
        });
        break;
      case 'repo':
        newHistory.push({
          type: 'output',
          text: 'GitHub: https://github.com/LordRi007/Seak.space'
        });
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmdStr}". Type "help" for a list of commands.`
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    handleCommand(terminalInput);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-sm shadow-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Open for IT Internship &amp; Projects</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Typewriter Subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="font-tech text-lg sm:text-2xl text-slate-300 font-medium flex items-center">
                  <span className="text-slate-400 mr-2">I build</span>
                  <span className="text-cyan-400 font-semibold border-b border-cyan-400/40 pb-0.5">
                    {displayedText}
                  </span>
                  <span className="w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
                </p>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('simulator')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm glass-panel text-cyan-300 border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all cursor-pointer group"
              >
                <QrCode className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Test KHQR Demo</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Floating Tech Stack Badges */}
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs font-mono text-slate-400 block mb-3">
                Core Production Technologies:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { name: 'React', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300' },
                  { name: 'Laravel', color: 'border-red-500/30 bg-red-500/10 text-red-300' },
                  { name: 'Bakong KHQR', color: 'border-amber-500/30 bg-amber-500/10 text-amber-300 font-semibold' },
                  { name: 'MySQL', color: 'border-blue-500/30 bg-blue-500/10 text-blue-300' },
                  { name: 'Tailwind CSS', color: 'border-sky-500/30 bg-sky-500/10 text-sky-300' },
                  { name: 'Spring Boot', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
                  { name: 'REST APIs', color: 'border-purple-500/30 bg-purple-500/10 text-purple-300' }
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2.5 py-1 rounded-lg text-xs border font-mono tracking-tight transition-transform hover:-translate-y-0.5 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive Card / Terminal / Profile Mockup */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden bg-slate-950/80">
                {/* Mockup Top Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400" />
                    
                    {/* Switcher Tabs */}
                    <div className="flex items-center ml-2 bg-slate-950/60 p-0.5 rounded-lg border border-white/5">
                      <button
                        onClick={() => setActiveTab('json')}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                          activeTab === 'json'
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Code2 className="w-3 h-3" />
                        <span>Profile.json</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('terminal')}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                          activeTab === 'terminal'
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <TerminalIcon className="w-3 h-3" />
                        <span>terminal.sh</span>
                      </button>
                    </div>
                  </div>

                  {activeTab === 'json' ? (
                    <button
                      onClick={handleCopyProfile}
                      className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 py-1 px-2 rounded hover:bg-white/5 transition-colors font-mono"
                      title="Copy JSON Profile"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCommand('clear')}
                      className="text-[11px] text-slate-400 hover:text-slate-200 py-1 px-2 rounded hover:bg-white/5 font-mono"
                    >
                      clear
                    </button>
                  )}
                </div>

                {/* Tab 1: Formatted JSON */}
                {activeTab === 'json' && (
                  <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 max-h-[380px]">
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
                      <span className="text-slate-400">"focus":</span>{' '}
                      <span className="text-emerald-300">"POS Architectures &amp; Full Stack"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"khqrExpertise":</span>{' '}
                      <span className="text-sky-300">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"flagshipSystems":</span> [
                      <div className="pl-4">
                        <span className="text-emerald-300">"AuraPOS (KHQR Integrated)"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-emerald-300">"SmartPOS Cafe Suite"</span>
                      </div>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"realWorldOps":</span>{' '}
                      <span className="text-emerald-300">"7-Eleven Mart Cashier &amp; Inventory"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"hireable":</span>{' '}
                      <span className="text-emerald-400 font-bold">true</span>
                    </div>
                    <div>{'};'}</div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Ready for immediate deployment
                      </span>
                      <button
                        onClick={() => onNavigate('simulator')}
                        className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                      >
                        Test KHQR Simulator &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 2: Interactive Terminal Shell */}
                {activeTab === 'terminal' && (
                  <div className="p-4 font-mono text-xs max-h-[380px] flex flex-col justify-between h-[360px]">
                    <div className="space-y-1.5 overflow-y-auto pr-1">
                      {terminalHistory.map((line, idx) => (
                        <div
                          key={idx}
                          className={`${
                            line.type === 'user'
                              ? 'text-cyan-300 font-semibold'
                              : line.type === 'error'
                              ? 'text-red-400'
                              : line.type === 'output'
                              ? 'text-slate-200'
                              : 'text-slate-400'
                          }`}
                        >
                          {line.text}
                        </div>
                      ))}
                    </div>

                    {/* Quick Command Chips */}
                    <div className="pt-2 border-t border-white/5">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {['help', 'whoami', 'skills', 'projects', 'khqr', 'contact'].map((c) => (
                          <button
                            key={c}
                            onClick={() => handleCommand(c)}
                            className="px-2 py-0.5 text-[10px] bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 rounded border border-white/5 transition-colors"
                          >
                            {c}
                          </button>
                        ))}
                      </div>

                      {/* Shell Input */}
                      <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">$</span>
                        <input
                          type="text"
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          placeholder="Type command (e.g. 'help')..."
                          className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs"
                          autoFocus
                        />
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Quick Stats Counter Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl glass-panel glass-panel-hover border border-white/5 text-center group"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
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
