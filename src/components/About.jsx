import React from 'react';
import { 
  GraduationCap, 
  Store, 
  MapPin, 
  Mail, 
  Phone, 
  Languages, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Download,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onNavigate }) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Developer Journey</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering Clean &amp; Resilient Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging real-world retail store operations with modern full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Profile Picture & Badges Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Animated Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse-glow" />
              
              {/* Photo Card */}
              <div className="relative w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden glass-panel border border-white/20 p-2 shadow-2xl bg-slate-950">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                  <img
                    src="/assets/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating status tag inside photo */}
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

            {/* Quick Details Below Photo */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Phnom Penh, Cambodia
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-white/5">
                <Store className="w-3.5 h-3.5 text-amber-400" /> 7-Eleven Retail Ops
              </span>
            </div>
          </div>

          {/* Bio, Real-World Story, & Soft Skills Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a passionate Year 4 Software Engineering student based in Phnom Penh. My focus lies at the intersection of high-availability backend systems, clean React user interfaces, and retail transaction technology.
              </p>
              <p>
                Working frontline retail operations at <strong>7-Eleven Mart</strong> gave me firsthand exposure to how cashiers, store managers, and customers interact with POS hardware, barcode scanners, and inventory replenishment cycles. Rather than guessing user needs, I build software informed by real shift realities.
              </p>
            </div>

            {/* Experience vs Academic Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Rigor</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  4th year BSE curriculum at BELTEI International University specializing in database normalization, distributed architectures, and agile project delivery.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Store className="w-4 h-4" />
                  <span>Retail Intuition</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Direct hands-on experience handling cashier transaction speeds, daily end-of-shift audits, and stock shrink prevention.
                </p>
              </div>
            </div>

            {/* Languages and Soft Skills */}
            <div className="space-y-4 pt-3 border-t border-white/10">
              {/* Spoken Languages */}
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">Spoken Languages:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs bg-slate-900 border border-cyan-500/20 text-cyan-300 font-medium">
                    🇰🇭 Khmer (Native)
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs bg-slate-900 border border-white/10 text-slate-300 font-medium">
                    🇬🇧 English (Intermediate)
                  </span>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">Operational Focus &amp; Soft Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Teamwork & Collaboration',
                    'Cashier Workflow Design',
                    'Critical Problem Solving',
                    'Time Management',
                    'Customer Service',
                    'Self-Directed Research',
                    'Agile Sprint Planning'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs bg-white/5 border border-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Discuss Internship / Opportunities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white glass-panel border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <span>View Full Works</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
