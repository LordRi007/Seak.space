import React from 'react';
import { 
  GraduationCap, 
  Store, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onNavigate }) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Crafting Clean, Practical Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Year 4 Software Engineering student with retail operational experience in retail cashiering and inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Profile Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-emerald-500/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition duration-300" />
              
              <div className="relative w-64 sm:w-72 rounded-2xl overflow-hidden glass-panel border border-white/20 p-2 bg-slate-950">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                  <img
                    src="/assets/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating tag inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs text-white flex items-center justify-between">
                    <div>
                      <span className="font-semibold block text-cyan-300">{personalInfo.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">Year 4 BSE • BELTEI</span>
                    </div>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Year 4 Software Engineering student based in Phnom Penh. I enjoy translating business operational logic into fast, reliable web platforms and Point of Sale systems.
              </p>
              <p>
                Working frontline retail operations at <strong>7-Eleven Mart</strong> gave me direct insight into cashier speed, daily inventory audits, and customer checkout friction. I channel this understanding to build software that is intuitive, reliable, and clean.
              </p>
            </div>

            {/* 2 Clean Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Training</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Year 4 BSE at BELTEI International University specializing in database systems, web development, and software architecture.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Store className="w-4 h-4" />
                  <span>Retail Store Operations</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Frontline cashiering and stock management at 7-Eleven Mart, translating operational workflows into POS features.
                </p>
              </div>
            </div>

            {/* Languages and Soft Skills */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Languages:</span>
                <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 border border-cyan-500/20 text-cyan-300 font-medium">
                  Khmer (Native)
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 border border-white/10 text-slate-300 font-medium">
                  English (Intermediate)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-400 mr-1">Skills:</span>
                {[
                  'Teamwork',
                  'Problem Solving',
                  'Time Management',
                  'Customer Service',
                  'POS Workflows',
                  'Agile Process'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md text-xs bg-white/5 border border-white/5 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Discuss Internship &amp; Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
