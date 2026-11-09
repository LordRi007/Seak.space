import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  BookOpen
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('both'); // 'both' | 'work' | 'education'

  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Milestones &amp; History</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            How academic theory in Software Engineering merges with practical 7-Eleven store and POS operational duties.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1 rounded-xl glass-panel border-white/10 bg-slate-900/60">
            {[
              { id: 'both', label: 'Panoramic View' },
              { id: 'work', label: 'Work Experience' },
              { id: 'education', label: 'Education & Degrees' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Work Experience Column */}
          {(activeTab === 'both' || activeTab === 'work') && (
            <div className={`space-y-6 ${activeTab === 'work' ? 'lg:col-span-2 max-w-3xl mx-auto' : ''}`}>
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Work Experience</h3>
                  <span className="text-xs text-slate-400 font-mono">Retail POS &amp; Operational Roles</span>
                </div>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all relative group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" /> {exp.location}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h4>
                    <h5 className="text-sm font-semibold text-cyan-400/90 mb-3">
                      {exp.company}
                    </h5>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        Core Operational Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {exp.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Column */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div className={`space-y-6 ${activeTab === 'education' ? 'lg:col-span-2 max-w-3xl mx-auto' : ''}`}>
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Education &amp; Credentials</h3>
                  <span className="text-xs text-slate-400 font-mono">Academic Milestones</span>
                </div>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-indigo-500/30 transition-all space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {edu.period}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">
                        {edu.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-base text-white">
                        {edu.degree}
                      </h4>
                      <h5 className="text-xs font-semibold text-slate-400">
                        {edu.institution}
                      </h5>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.courses && (
                      <div className="pt-2 border-t border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                          Key Curriculum Modules:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.courses.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-slate-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
