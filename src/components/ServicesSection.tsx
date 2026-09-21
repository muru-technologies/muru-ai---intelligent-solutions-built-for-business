import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  MessageSquareText,
  Workflow,
  Layers,
  Network,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [filter, setFilter] = useState<'all' | 'core' | 'automation' | 'custom' | 'analytics'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#E59500]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-sky-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-amber-400" />;
      case 'LineChart':
      default:
        return <LineChart className="w-5 h-5 text-rose-400" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesFilter = filter === 'all' || service.category === filter;
    const matchesSearch =
      searchQuery === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="services" className="py-24 relative bg-[#07090D] border-t border-white/[0.05]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E59500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Enterprise Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              AI Services Engineered for{' '}
              <span className="text-[#E59500]">Commercial ROI.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              We reject generic one-size-fits-all gimmicks. Every Muru AI service is architected to solve concrete
              operational problems, integrate seamlessly with legacy stacks, and return measurable value.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capabilities..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#E59500] focus:outline-none text-xs text-white placeholder-zinc-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {[
            { id: 'all', label: 'All Services (6)' },
            { id: 'core', label: 'Autonomous Agents & Chatbots' },
            { id: 'automation', label: 'Workflow Automation & Integrations' },
            { id: 'custom', label: 'Custom AI Applications' },
            { id: 'analytics', label: 'Data & Decision Intelligence' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#E59500] text-black font-bold shadow-md shadow-[#E59500]/20'
                  : 'bg-white/[0.03] text-zinc-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl glass-card border border-white/[0.07] p-6 flex flex-col justify-between hover:border-[#E59500]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(229,149,0,0.12)] group text-left"
            >
              <div>
                {/* Top bar: number & icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-[#E59500] transition-colors">
                    SERVICE // {service.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Title and Tagline */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#E59500] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/[0.05]">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
                    Core Capabilities:
                  </div>
                  {service.capabilities.slice(0, 4).map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E59500] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Examples */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.examples.map((ex, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-4 rounded-xl font-display font-semibold text-xs text-white bg-white/[0.04] hover:bg-[#E59500] hover:text-black border border-white/[0.08] hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
