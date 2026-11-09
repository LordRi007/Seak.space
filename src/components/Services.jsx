import React from 'react';
import { 
  Sparkles, 
  Layers, 
  QrCode, 
  LayoutDashboard, 
  ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  QrCode: QrCode,
  LayoutDashboard: LayoutDashboard
};

export default function Services({ onNavigate }) {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Services &amp; What I Deliver
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Focused on fast, clean, and reliable systems for retail businesses and modern web platforms.
          </p>
        </div>

        {/* 3 Clean Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-white/5">
          <p className="text-slate-300 text-sm mb-3">
            Available for Software Engineering internships, POS setups, and full-stack web projects.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
