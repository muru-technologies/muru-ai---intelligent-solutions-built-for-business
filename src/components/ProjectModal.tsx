import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Calendar, Clock } from 'lucide-react';
import { MURU_BRAND } from '../data/muruData';
import { MuruLogo } from './MuruLogo';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  initialInterest
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(
    initialInterest || 'AI Agent'
  );
  const [timeline, setTimeline] = useState<string>('Within 30 days');
  const [fullName, setFullName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [projectBrief, setProjectBrief] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 800);
  };

  const handleClose = () => {
    setIsComplete(false);
    setStep(1);
    onClose();
  };

  const servicesList = [
    'AI Agent (Digital Employee)',
    'AI Chatbot & WhatsApp Concierge',
    'AI Workflow Automation',
    'Custom AI Platform / SaaS',
    'System AI Integration (CRM/DB)',
    'AI Data & Analytics Studio'
  ];

  const timelines = [
    'Immediate (within 2 weeks)',
    'Within 30 days',
    'Next Quarter',
    'Exploring / Feasibility'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-2xl glass-card border border-[#E59500]/40 p-6 sm:p-8 bg-[#0C0E14] shadow-2xl shadow-black">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isComplete ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              We've received your project scoping brief for <strong className="text-[#E59500]">{selectedService}</strong>. A Muru AI Lead Architect will reach out to <strong className="text-white">{email}</strong> to confirm our calendar slot.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full font-semibold text-xs text-black bg-[#E59500] hover:bg-[#F5A31A] transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <MuruLogo
                  variant="white"
                  size="sm"
                  showAiBadge={true}
                  showTagline={false}
                />
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E59500]/10 border border-[#E59500]/20 text-[10px] font-mono text-[#E59500] font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Project Scoping</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Start Your AI Project
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Tell us about your requirements. We'll assemble an architectural blueprint and ROI projection.
              </p>
            </div>

            {/* Step 1: Service & Timeline */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    1. Select Primary AI Solution Needed:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {servicesList.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`p-3 rounded-xl text-left text-xs font-medium border transition-all ${
                          selectedService === srv
                            ? 'bg-[#E59500]/15 border-[#E59500] text-white'
                            : 'bg-black/40 border-white/[0.08] text-zinc-400 hover:border-white/[0.2]'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    2. Desired Deployment Timeline:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelines.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTimeline(time)}
                        className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-all ${
                          timeline === time
                            ? 'bg-[#E59500]/15 border-[#E59500] text-white'
                            : 'bg-black/40 border-white/[0.08] text-zinc-400 hover:border-white/[0.2]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] transition-all"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Details & Submit */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. David Otieno"
                      className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-white text-xs focus:outline-none focus:border-[#E59500]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Safari Holdings"
                      className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-white text-xs focus:outline-none focus:border-[#E59500]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="david@company.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-white text-xs focus:outline-none focus:border-[#E59500]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+254 711 000 000"
                      className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-white text-xs focus:outline-none focus:border-[#E59500]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Project Goals / Problem to Solve
                  </label>
                  <textarea
                    rows={3}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Briefly describe what you'd like the AI system to automate, assist, or analyze..."
                    className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-white text-xs focus:outline-none focus:border-[#E59500]"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Confirm Consultation Request'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
