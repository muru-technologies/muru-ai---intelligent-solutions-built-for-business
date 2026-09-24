import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Server,
  Terminal,
  Cpu,
  Lock,
  Zap,
  CheckCircle2,
  Database,
  Layers,
  Code,
} from 'lucide-react';
import { TECH_STACK_DATA, COCKPIT_NODES } from '../data/siteData';

export default function TechnologySection() {
  const [nodes, setNodes] = useState(COCKPIT_NODES);

  // Subtle live latency variation to give a high-tech pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prev) =>
        prev.map((n) => {
          const baseLat = parseInt(n.latency);
          const jitter = Math.floor(Math.random() * 5) - 2;
          const newLat = Math.max(12, baseLat + jitter);
          return { ...n, latency: `${newLat} ms` };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="technology" className="py-16 sm:py-24 relative bg-[#07090D] border-t border-white/[0.05]">
      {/* Background radial */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E59500]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise Architecture & Security</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Production-Grade Tech.{' '}
            <span className="text-[#E59500]">Zero Vendor Lock-In.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-400">
            We evaluate latency, data residency, privacy boundaries, and per-token unit economics to
            select the ideal stack for your enterprise needs.
          </p>
        </div>

        {/* Engineering Creed Callout Card */}
        <div className="mb-8 sm:mb-12 p-4.5 sm:p-8 rounded-2xl glass-card border border-[#E59500]/30 bg-gradient-to-r from-[#0E1217] to-[#0A0C10] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 text-left">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#E59500] flex items-center gap-2">
              <Zap className="w-4 h-4 flex-shrink-0" />
              <span>Our Engineering Creed</span>
            </div>
            <blockquote className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
              “We choose the technology based on the problem — not the other way around.”
            </blockquote>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              We never force proprietary vendor ecosystems. We design hybrid architectures spanning Google Cloud,
              AWS, private VPCs, and specialized local vector databases ensuring maximum speed, resilience,
              and strict data sovereignty.
            </p>
          </div>

          <div className="w-full sm:w-auto p-3.5 sm:p-4 rounded-xl bg-black/60 border border-white/[0.08] flex-shrink-0">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
              Architecture Standard
            </div>
            <div className="text-xs font-bold text-white">Private VPC & Zero Data Retention</div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" /> ISO / SOC2 Compliant Topologies
            </div>
          </div>
        </div>

        {/* 4 Tech Stack Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {TECH_STACK_DATA.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl glass-card border border-white/[0.07] p-4.5 sm:p-5 text-left flex flex-col justify-between hover:border-white/[0.15] transition-colors"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#E59500] font-bold mb-2">
                  0{idx + 1} // {cat.title}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/[0.05]">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E59500] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Infrastructure Node Health Matrix */}
        <div className="rounded-2xl glass-card border border-white/[0.08] p-4.5 sm:p-8 bg-black/50 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 mb-5 sm:mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <Server className="w-4 h-4 text-[#E59500] flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  Muru AI System Node Health & Latency Matrix
                </h3>
                <div className="text-xs text-zinc-400">
                  Continuous live telemetry monitored across distributed enterprise instances
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
              <span>All Systems Nominal (99.98% SLA)</span>
            </div>
          </div>

          {/* Grid of Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            {nodes.map((node) => (
              <div
                key={node.name}
                className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">
                    {node.name}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-0.5 truncate">
                    UPTIME: {node.uptime}
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {node.status}
                  </span>
                  <div className="text-[10px] font-mono text-zinc-400 mt-1">{node.latency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
