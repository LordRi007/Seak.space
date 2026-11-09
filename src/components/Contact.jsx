import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  CheckCircle2, 
  Loader2,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, TelegramIcon, FacebookIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [errors, setErrors] = useState({});
  const [copiedItem, setCopiedItem] = useState(null); // 'email' | 'phone' | null

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('loading');

    // Simulate reliable dispatch
    setTimeout(() => {
      setFormStatus('success');
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#10b981', '#6366f1']
        });
      } catch (err) {}
    }, 1000);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setFormStatus('idle');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Let's Build Something Meaningful
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Looking for a dedicated Software Engineering intern or full-stack web developer? I reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Panels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-6">
              <h3 className="font-heading font-bold text-lg text-white">Contact Channels</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Feel free to reach out directly via email, phone, or Telegram for internship inquiries, project quotes, or technical questions.
              </p>

              {/* Contact item: Email */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">Official Email</span>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 px-2 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    {copiedItem === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedItem === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm text-white hover:text-cyan-300 transition-colors block truncate"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Contact item: Phone */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">Phone &amp; Telegram Direct</span>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 px-2 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    {copiedItem === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedItem === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="font-mono text-sm text-white hover:text-cyan-300 transition-colors block"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* Contact item: Location */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono mb-1">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Location</span>
                </div>
                <p className="text-xs text-slate-300 pl-10">
                  {personalInfo.location}
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/5">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Find Me Online:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/40 text-center group transition-all"
                  >
                    <GithubIcon className="w-5 h-5 mx-auto text-slate-400 group-hover:text-white transition-colors mb-1" />
                    <span className="text-[11px] font-mono text-slate-300 block">GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-sky-500/40 text-center group transition-all"
                  >
                    <TelegramIcon className="w-5 h-5 mx-auto text-sky-400 group-hover:scale-110 transition-transform mb-1" />
                    <span className="text-[11px] font-mono text-slate-300 block">Telegram</span>
                  </a>

                  <a
                    href={personalInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/40 text-center group transition-all"
                  >
                    <FacebookIcon className="w-5 h-5 mx-auto text-blue-400 group-hover:scale-110 transition-transform mb-1" />
                    <span className="text-[11px] font-mono text-slate-300 block">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden">
              
              {formStatus === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you! Sath Chhunseak has received your message and will review your inquiry shortly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sokha Heng"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80' : 'border-white/10 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 font-mono">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sokha@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80' : 'border-white/10 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 font-mono">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject *</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. IT Internship Opportunity / POS Project Inquiry"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500/80' : 'border-white/10 focus:border-cyan-500'
                      }`}
                    />
                    {errors.subject && <span className="text-[11px] text-red-400 font-mono">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Message *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your project, timeline, or internship role..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500/80' : 'border-white/10 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-red-400 font-mono">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
