import React from 'react';
import { 
  Sparkles, 
  Code2, 
  Server, 
  Database, 
  QrCode, 
  CheckCircle2 
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const iconMap = {
  0: Code2,
  1: Server,
  2: Database,
  3: QrCode
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core full-stack tools and technologies utilized in building production POS systems and academic software engineering projects.
          </p>
        </div>

        {/* 4 Clean Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsCategories.map((group, index) => {
            const Icon = iconMap[index] || Code2;
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {group.skills.length} core proficiencies
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 border border-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
