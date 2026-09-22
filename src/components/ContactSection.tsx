import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Mail, MapPin, Building2, Phone } from 'lucide-react';
import { MURU_BRAND } from '../data/muruData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledInterest }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    interest: prefilledInterest || 'AI Agent',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      industry: '',
      interest: 'AI Agent',
      projectDetails: ''
    });
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Direct Commercial Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's build <span className="text-[#E59500]">something intelligent.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Tell us about your organization's workflows, challenges, or the specific AI application you would like to deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-6">
              <h3 className="text-xl font-bold text-white">
                Muru AI Engineering Desk
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Our solutions architects review every inquiry within 24 business hours to evaluate technical feasibility, estimate deployment timelines, and schedule a 30-minute scoping discussion.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.06] text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E59500]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 font-mono uppercase">Direct Email</div>
                    <a href={`mailto:${MURU_BRAND.email}`} className="font-medium hover:text-[#E59500] transition-colors">
                      {MURU_BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E59500]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 font-mono uppercase">Organization</div>
                    <span className="font-medium">{MURU_BRAND.name} • A Division of {MURU_BRAND.parentCompany}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E59500]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 font-mono uppercase">Locations</div>
                    <span className="font-medium">{MURU_BRAND.officeLocation}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={`https://wa.me/${MURU_BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(MURU_BRAND.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 hover:border-emerald-500/50 transition-all text-emerald-300"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] relative">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Project Request Received
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. A Muru AI solutions engineer will review your project brief for <strong className="text-white">{formData.company || 'your organization'}</strong> and contact you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Mwangi"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E59500] transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Logistics Ltd"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E59500] transition-colors"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E59500] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 716748685"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E59500] transition-colors"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Industry */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Industry *
                      </label>
                      <input
                        type="text"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        placeholder="e.g. Hospitality, Retail, Logistics"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E59500] transition-colors"
                      />
                    </div>

                    {/* What are you interested in? Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        What are you interested in? *
                      </label>
                      <select
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E59500] transition-colors"
                      >
                        <option value="AI Chatbot" className="bg-[#0C0E14] text-white">AI Chatbot</option>
                        <option value="AI Agent" className="bg-[#0C0E14] text-white">AI Agent</option>
                        <option value="AI Automation" className="bg-[#0C0E14] text-white">AI Automation</option>
                        <option value="Custom AI Application" className="bg-[#0C0E14] text-white">Custom AI Application</option>
                        <option value="AI Integration" className="bg-[#0C0E14] text-white">AI Integration</option>
                        <option value="AI Analytics" className="bg-[#0C0E14] text-white">AI Analytics</option>
                        <option value="AI Consulting" className="bg-[#0C0E14] text-white">AI Consulting</option>
                        <option value="Other" className="bg-[#0C0E14] text-white">Other</option>
                      </select>
                    </div>

                  </div>

                  {/* Tell us about your project */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="projectDetails"
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Describe your current business bottleneck, volume of requests, systems currently used (e.g. WhatsApp, HubSpot, SAP), and expected outcomes..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E59500] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-black bg-gradient-to-r from-[#F5A31A] via-[#E59500] to-[#CC7A00] hover:brightness-110 shadow-lg shadow-[#E59500]/25 transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Send Project Request →'}</span>
                  </button>

                  <div className="text-center">
                    <p className="text-[11px] text-zinc-500">
                      Protected by enterprise NDA standards. Your operational information is held strictly confidential.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
