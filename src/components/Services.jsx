import React from 'react';
import { 
  Sparkles, 
  Layers, 
  QrCode, 
  LayoutDashboard, 
  Database, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  QrCode: QrCode,
  LayoutDashboard: LayoutDashboard,
  Database: Database
};

export default function Services({ onNavigate }) {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>What I Deliver</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Core Technical Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Delivering end-to-end software solutions tailored for reliability, security, and exceptional user satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group space-y-5"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/15 to-indigo-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action card */}
        <div className="mt-12 text-center p-8 rounded-2xl glass-panel border border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950">
          <h4 className="font-heading font-bold text-xl text-white mb-2">
            Have a custom POS, web application, or database challenge?
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            I am available for contract work, full-stack systems engineering, and Software Engineering internships in Phnom Penh.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
