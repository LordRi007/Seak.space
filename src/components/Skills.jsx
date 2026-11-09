import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Server, 
  Database, 
  QrCode, 
  Cpu, 
  Terminal, 
  GitBranch, 
  ShieldCheck, 
  Layers,
  Layout,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend Development', icon: Code2, count: skillsData.frontend.length },
    { id: 'backend', label: 'Backend & APIs', icon: Server, count: skillsData.backend.length },
    { id: 'databases', label: 'Databases & Storage', icon: Database, count: skillsData.databases.length },
    { id: 'fintechTools', label: 'Fintech & DevOps Tools', icon: QrCode, count: skillsData.fintechTools.length }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Skillset &amp; Technology Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured full-stack proficiencies honed through Year 4 software engineering projects, retail POS deployments, and payment API integrations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? 'border-cyan-500 bg-cyan-500/15 shadow-md shadow-cyan-500/20'
                    : 'glass-panel border-white/5 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-cyan-400 border border-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-semibold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {cat.label}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {cat.count} competencies
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">{skill.name}</h4>
                    <span className="text-[11px] font-mono text-slate-400">{skill.tag}</span>
                  </div>
                </div>

                <span className="font-mono text-xs font-semibold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-2 rounded-full bg-slate-900 border border-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">Fintech &amp; Retail Integration Specialty</h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Experienced in NBC Bakong KHQR dynamic payloads, MD5 polling, thermal printing receipts, and store inventory deduction.
              </p>
            </div>
          </div>

          <a
            href="https://aurapos.store"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shrink-0 shadow-md shadow-cyan-500/25"
          >
            Review AuraPOS Implementation
          </a>
        </div>

      </div>
    </section>
  );
}
