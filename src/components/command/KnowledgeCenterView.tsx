import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  FileText,
  Database,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { KNOWLEDGE_METRICS, SAMPLE_KNOWLEDGE_DOCS } from '../../data/commandCenterData';
import { KnowledgeItem } from '../../types';

export const KnowledgeCenterView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [simulatedAnswer, setSimulatedAnswer] = useState<{
    query: string;
    answer: string;
    sources: string[];
    confidence: string;
  } | null>(null);

  const samplePrompts = [
    'What is our standard cancellation policy for corporate bookings?',
    'Which suppliers had overdue invoices exceeding 30 days this quarter?',
    'What are the committed SLA response times for Tier-1 enterprise accounts?',
    'What are the customs duty requirements for logistics imports to Kenya?'
  ];

  const handleSearch = (queryToSearch?: string) => {
    const q = queryToSearch || searchQuery;
    if (!q.trim()) return;

    setIsSynthesizing(true);
    setSimulatedAnswer(null);

    setTimeout(() => {
      setIsSynthesizing(false);
      let ans = '';
      let srcs = ['Legal/Contracts/2026', 'Hospitality/Ops'];

      if (q.toLowerCase().includes('cancellation') || q.toLowerCase().includes('hotel')) {
        ans =
          'According to the Hotel Group Operations Manual (Section 4.2), corporate bookings may be cancelled up to 48 hours prior to check-in with a 100% refund or rollover credit. Within 48 hours, a single-night fee applies unless waived by the Regional General Manager.';
        srcs = ['Hotel Group Operations Manual & Cancellation Policy (p. 42)', 'Corporate Partner Master Agreement'];
      } else if (q.toLowerCase().includes('invoice') || q.toLowerCase().includes('supplier')) {
        ans =
          'ERP ledger review indicates 3 supplier accounts have outstanding receivables past 30 days: Safari Provisions Ltd ($14,200), Coast Fuel Logistics ($9,850), and Nairobi Tech Infrastructure ($6,400). None exceed 60 days.';
        srcs = ['PostgreSQL / Direct Ledger Sync (Table: supplier_aging)', 'SAP Purchase Order Reconciliations'];
      } else if (q.toLowerCase().includes('sla') || q.toLowerCase().includes('response')) {
        ans =
          'Tier-1 Enterprise Accounts receive a 15-minute guaranteed initial response for critical incidents (Severity 1), 99.9% uptime SLA, and direct WhatsApp routing to dedicated senior engineering duty officers.';
        srcs = ['Master Services Agreement & Standard SLA Terms (Clause 8.1)', 'Zendesk VIP Protocol Matrix'];
      } else {
        ans = `Synthesized search across 1,284 enterprise knowledge documents for "${q}". Muru AI Vector Engine identified 4 high-probability source clusters with verified semantic cross-references.`;
        srcs = ['Muru Neural Document Embeddings Store', 'Internal Knowledge Repository'];
      }

      setSimulatedAnswer({
        query: q,
        answer: ans,
        sources: srcs,
        confidence: '99.4%'
      });
    }, 900);
  };

  return (
    <div className="space-y-8 text-left">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#E59500] mb-2">
            Enterprise Knowledge Engine
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            MURU KNOWLEDGE
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Vectorized corporate intelligence repository with semantic RAG retrieval and strict access governance.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <Lock className="w-3.5 h-3.5" />
          <span>Zero Public Retraining Guarantee</span>
        </div>
      </div>

      {/* 4 Knowledge Metrics as requested:
          Documents: 1,284
          Knowledge Sources: 48
          Indexed Data: 4.8 GB
          Queries Today: 3,291 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            Documents
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {KNOWLEDGE_METRICS.documents}
          </div>
          <div className="text-[11px] text-zinc-400 mt-1">
            PDFs, manuals, contracts
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            Knowledge Sources
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {KNOWLEDGE_METRICS.knowledgeSources}
          </div>
          <div className="text-[11px] text-zinc-400 mt-1">
            Connected ERPs, CRMs & Drives
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            Indexed Data
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {KNOWLEDGE_METRICS.indexedData}
          </div>
          <div className="text-[11px] text-zinc-400 mt-1">
            Vectorized embeddings
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            Queries Today
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-[#E59500] font-mono">
            {KNOWLEDGE_METRICS.queriesToday}
          </div>
          <div className="text-[11px] text-zinc-400 mt-1">
            99.2% positive resolution
          </div>
        </div>
      </div>

      {/* Large Futuristic Search Box: "Ask Muru AI: Ask anything about your business..." */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#E59500]/40 bg-gradient-to-b from-[#0C0F16] to-[#080A0E] shadow-xl">
        <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#E59500] uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Ask Muru AI</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
          Corporate Knowledge Assistant
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          Query contracts, financial ledgers, operational procedures, and customer histories in natural language.
        </p>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="relative flex items-center mb-4"
        >
          <div className="absolute left-4 text-zinc-400">
            <Search className="w-5 h-5 text-[#E59500]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask anything about your business..."
            className="w-full pl-12 pr-28 py-4 rounded-2xl bg-black/60 border border-white/[0.12] focus:border-[#E59500] text-white text-sm sm:text-base focus:outline-none transition-all placeholder:text-zinc-500 font-sans shadow-inner"
          />
          <button
            type="submit"
            disabled={isSynthesizing}
            className="absolute right-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] transition-all disabled:opacity-50"
          >
            {isSynthesizing ? 'Thinking...' : 'Search'}
          </button>
        </form>

        {/* Suggested Quick Queries */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <span className="text-[11px] font-mono text-zinc-500">Try asking:</span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSearchQuery(p);
                handleSearch(p);
              }}
              className="text-[11px] px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-300 hover:text-white transition-colors truncate max-w-[280px]"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Simulated AI Answer Output */}
        {simulatedAnswer && (
          <div className="p-5 rounded-2xl bg-[#10141E] border border-[#E59500]/30 animate-fade-in space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold text-white uppercase">
                  Muru AI Synthesized Intelligence
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Confidence: {simulatedAnswer.confidence}
              </span>
            </div>

            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
              {simulatedAnswer.answer}
            </p>

            <div className="pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-400 space-y-1">
              <div className="text-zinc-500 uppercase text-[10px]">Verified Citations:</div>
              {simulatedAnswer.sources.map((src, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E59500] flex-shrink-0" />
                  <span>{src}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Indexed Document Repositories */}
      <div className="rounded-2xl glass-card border border-white/[0.08] p-6 bg-[#090C11]">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
            Connected Document Repositories
          </h3>
          <span className="text-xs font-mono text-zinc-400">5 Active Vector Stores</span>
        </div>

        <div className="space-y-2.5">
          {SAMPLE_KNOWLEDGE_DOCS.map((doc) => (
            <div
              key={doc.id}
              className="p-3.5 rounded-xl bg-black/30 border border-white/[0.04] hover:border-white/[0.1] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E59500]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">
                    {doc.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    {doc.source} • {doc.size} • {doc.vectors.toLocaleString()} vector chunks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                  {doc.type}
                </span>
                <span className="text-zinc-500 text-[11px]">{doc.lastSynced}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
