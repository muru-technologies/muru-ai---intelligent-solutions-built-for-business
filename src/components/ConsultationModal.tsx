import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Lock,
  Building,
  Mail,
  User,
  Phone,
  Calendar,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialInterest = 'AI Agents & Intelligent Automation',
}: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(initialInterest);
  const [timeline, setTimeline] = useState('Immediate (< 30 Days)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      setInterest(initialInterest);
    }
  }, [initialInterest]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Muru AI Team, I would like to schedule an Enterprise Solution Audit.\n\nName: ${fullName || 'N/A'}\nCompany: ${company || 'N/A'}\nInterest: ${interest}\nTimeline: ${timeline}\nNotes: ${notes || 'Looking to discuss AI automation.'}`
    );
    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl rounded-2xl glass-card border border-white/[0.12] bg-[#090B0F] p-6 sm:p-8 shadow-2xl shadow-black text-left z-10 my-8 overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Subtle glow in corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E59500]/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#E59500]/10 border border-[#E59500]/20 text-xs font-mono text-[#E59500] w-fit mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Confidential Solution Audit</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Schedule Your Enterprise AI Audit
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 mt-2 mb-6 leading-relaxed">
                  Connect directly with a Muru AI Lead Solutions Architect to evaluate technical
                  feasibility, security parameters, and concrete ROI metrics.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#E59500] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Corporate Email */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sarah@company.com"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#E59500] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                        Company / Organization *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Apex Logistics Ltd"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#E59500] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+254 700 000 000"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#E59500] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Primary Interest */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                      Primary Area of Interest
                    </label>
                    <input
                      type="text"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      placeholder="e.g. Autonomous Sales Agent, WhatsApp Customer Bot, Document OCR"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#E59500] transition-colors"
                    />
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                      Target Implementation Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'Immediate (< 30 Days)',
                        'Next 60-90 Days',
                        'Exploratory Feasibility',
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`py-2 px-2 rounded-xl text-[11px] font-mono font-medium border text-center transition-colors cursor-pointer truncate ${
                            timeline === t
                              ? 'bg-[#E59500]/20 text-[#E59500] border-[#E59500]'
                              : 'bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:bg-white/[0.05]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Operational Notes */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                      Briefly describe current operational bottlenecks:
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about the manual systems, software stacks, or response times you're looking to upgrade..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#E59500] transition-colors resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>Zero Spam • NDA Confidentiality Protected</span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-1.5 text-xs font-medium"
                        title="Send directly via WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="hidden sm:inline">Fast WhatsApp</span>
                      </a>

                      <button
                        type="submit"
                        className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Confirm Consultation</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  Consultation Request Dispatched
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{fullName || 'there'}</strong>. Your brief
                  has been routed to a Muru AI Lead Solutions Architect. We will review your requirements
                  and reach out via <strong className="text-white">{email}</strong> within 2 business
                  hours.
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-zinc-300 max-w-md mx-auto text-left space-y-1">
                  <div>Company: {company}</div>
                  <div>Focus: {interest}</div>
                  <div>Timeline: {timeline}</div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ping Architect Immediately on WhatsApp</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
