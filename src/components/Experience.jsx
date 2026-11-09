import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Background</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on retail cashier duties alongside Year 4 Bachelor of Software Engineering studies.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Work Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">Work Experience</h3>
            </div>

            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {exp.period}
                  </span>
                  <span className="text-slate-400">{exp.location}</span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-base text-white">{exp.role}</h4>
                  <h5 className="text-xs font-semibold text-cyan-400">{exp.company}</h5>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 pt-1 text-xs text-slate-400">
                  {exp.keyPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">Education</h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-indigo-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {edu.period}
                  </span>
                  <span className="text-emerald-400">{edu.badge}</span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-base text-white">{edu.degree}</h4>
                  <h5 className="text-xs font-semibold text-slate-400">{edu.institution}</h5>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {edu.description}
                </p>

                {edu.courses && (
                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
