import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  MessageSquareText,
  FileText,
  Headphones,
  Workflow,
  Layers,
  Network,
  LineChart,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Server,
  Clock,
  Play,
  MessageSquare,
  Lock,
  Search,
  Send,
} from 'lucide-react';
import { COMPANY_PRODUCTS, COMPANY_DETAILS } from '../data/siteData';

interface ProductPageProps {
  productId: string;
  onBackToHome: () => void;
  onNavigateToProduct: (id: string) => void;
  onOpenConsultation: (interestTopic?: string) => void;
}

export default function ProductPage({
  productId,
  onBackToHome,
  onNavigateToProduct,
  onOpenConsultation,
}: ProductPageProps) {
  const product =
    COMPANY_PRODUCTS.find((p) => p.id === productId) || COMPANY_PRODUCTS[0];

  const [activeTab, setActiveTab] = useState<
    'overview' | 'sandbox' | 'architecture' | 'rollout'
  >('overview');

  const [agentScenario, setAgentScenario] = useState<'sales' | 'procurement' | 'kyc'>('sales');
  const [agentStep, setAgentStep] = useState<number>(3);
  const [isAgentRunning, setIsAgentRunning] = useState<boolean>(false);
  const [chatPromptIdx, setChatPromptIdx] = useState<number>(0);
  const [ragQueryIdx, setRagQueryIdx] = useState<number>(0);
  const [selectedDraftIdx, setSelectedDraftIdx] = useState<number>(0);
  const [draftSent, setDraftSent] = useState<boolean>(false);
  const [workflowStep, setWorkflowStep] = useState<number>(4);
  const [isWorkflowRunning, setIsWorkflowRunning] = useState<boolean>(false);
  const [appArchetype, setAppArchetype] = useState<'underwriting' | 'logistics' | 'saas'>('underwriting');
  const [appPlatform, setAppPlatform] = useState<'web' | 'mobile' | 'both'>('both');
  const [webhookFlow, setWebhookFlow] = useState<'whatsapp_crm' | 'erp_mpesa' | 'mail_zendesk'>('whatsapp_crm');
  const [biQueryIdx, setBiQueryIdx] = useState<number>(0);

  const otherProducts = COMPANY_PRODUCTS.filter((p) => p.id !== product.id);

  const getProductIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className={className} />;
      case 'MessageSquareText':
        return <MessageSquareText className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      case 'Headphones':
        return <Headphones className={className} />;
      case 'Workflow':
        return <Workflow className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Network':
        return <Network className={className} />;
      case 'LineChart':
      default:
        return <LineChart className={className} />;
    }
  };

  const runAgentSandbox = () => {
    setIsAgentRunning(true);
    setAgentStep(1);
    setTimeout(() => setAgentStep(2), 500);
    setTimeout(() => {
      setAgentStep(3);
      setIsAgentRunning(false);
    }, 1100);
  };

  const runWorkflowSandbox = () => {
    setIsWorkflowRunning(true);
    setWorkflowStep(1);
    setTimeout(() => setWorkflowStep(2), 450);
    setTimeout(() => setWorkflowStep(3), 900);
    setTimeout(() => {
      setWorkflowStep(4);
      setIsWorkflowRunning(false);
    }, 1350);
  };

  const handleBookThisProduct = () => {
    onOpenConsultation(`Product Deployment: ${product.title} (${product.code})`);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen relative overflow-hidden bg-[#07090D]">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-[#E59500]/10 via-sky-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Products & Overview</span>
            </button>
            <span className="text-zinc-600">/</span>
            <span>Products</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#E59500] font-semibold">{product.shortTitle}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Production Ready · Rollout in {product.metrics.deploymentTime}</span>
          </div>
        </div>

        {/* Horizontal Product Switcher Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-white/[0.06]">
          {COMPANY_PRODUCTS.map((item) => {
            const isCurrent = item.id === product.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigateToProduct(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-[#E59500] text-black font-semibold'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{item.number}.</span>
                <span>{item.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-[#E59500] font-semibold">
                {product.number}. {product.code}
              </span>
              <span>·</span>
              <span>Muru AI Enterprise Product Suite</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {product.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#E59500]">
              {product.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {product.longDescription}
            </p>

            {/* Key Product Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">
                  {product.metrics.primaryLabel}
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5 tabular-nums">
                  {product.metrics.primaryValue}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">
                  {product.metrics.secondaryLabel}
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-emerald-400 mt-0.5 tabular-nums">
                  {product.metrics.secondaryValue}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">Deployment Window</div>
                <div className="text-lg sm:text-xl font-display font-bold text-[#E59500] mt-0.5 tabular-nums">
                  {product.metrics.deploymentTime}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">Data Isolation</div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                  Private VPC
                </div>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={handleBookThisProduct}
                className="py-3 px-6 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E59500]/25 active:scale-95 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-black fill-black/20" />
                <span>Book {product.shortTitle} Demo & Audit</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={() => setActiveTab('sandbox')}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-mono text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 text-[#E59500] fill-[#E59500]" />
                <span>Test Interactive Product Sandbox</span>
              </button>

              <a
                href={`https://wa.me/254716748685?text=Hello%20Muru%20Tech,%20I%20am%20on%20the%20${encodeURIComponent(
                  product.title
                )}%20Product%20Page%20and%20would%20like%20to%20discuss%20deploying%20this%20for%20our%20organization.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2 transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Product Lead</span>
              </a>
            </div>
          </div>

          {/* Right Col: Product Spec Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-[#0B0E14] border border-white/[0.1] p-6 shadow-2xl text-left space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#E59500]/15 text-[#E59500]">
                    {getProductIcon(product.iconName, 'w-5 h-5')}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Product Specification</div>
                    <div className="text-[11px] font-mono text-zinc-400">{product.code}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">Production SLA</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-zinc-500 font-mono text-[11px] block mb-1">
                    NATIVE SYSTEM CONNECTORS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.integrations.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-zinc-500 font-mono text-[11px] block mb-1">
                    UNDERLYING TECH STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#E59500]/10 border border-[#E59500]/25 font-mono text-[11px] text-[#E59500]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Pilot Prototype Window:</span>
                  <span className="font-mono text-white font-semibold">14-Day PoC Available</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Security & Compliance:</span>
                  <span className="font-mono text-emerald-400">Zero Data Retention</span>
                </div>
              </div>

              <button
                onClick={handleBookThisProduct}
                className="w-full py-3 px-4 rounded-xl font-display font-semibold text-xs text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Book {product.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Detail Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/[0.08] mb-8 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'overview', label: '01. Capabilities & ROI Use Cases' },
            { id: 'sandbox', label: `02. Interactive ${product.shortTitle} Sandbox` },
            { id: 'architecture', label: '03. System Architecture & Security' },
            { id: 'rollout', label: '04. Deployment Schedule & Booking' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-white/[0.08] text-[#E59500] border-b-2 border-[#E59500]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: CAPABILITIES, DELIVERABLES & USE CASES */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-12 text-left"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    What {product.title} Delivers
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Engineered for high-reliability production environments with measurable operational impact.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#E59500]">
                  6 Core Production Capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08] hover:border-[#E59500]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-semibold text-[#E59500]">
                          0{idx + 1}. Capability
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-sm font-medium text-white leading-relaxed">
                        {cap}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>Included in Standard Rollout</span>
                      <span className="text-emerald-400">SLA Backed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#090B0F] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-6">
                Concrete Engineering Deliverables Handed Over to Your Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {product.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-black/50 border border-white/[0.07] space-y-2"
                  >
                    <div className="text-xs font-mono text-[#E59500] font-semibold">
                      0{idx + 1}. Deliverable
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {deliv.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {deliv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-5">
                Verified Industry Deployments & Commercial Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {product.useCases.map((uc, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08] flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-zinc-400 mb-1">
                        {uc.industry}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-3">
                        {uc.scenario}
                      </h4>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300">
                      Measured Outcome: {uc.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: INTERACTIVE PRODUCT SANDBOX */}
        {activeTab === 'sandbox' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-left"
          >
            {product.id === 'ai-agents' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Autonomous Agent Reasoning & Tool-Call Simulator
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Select an enterprise agent scenario and inspect how it reasons, invokes internal APIs, and completes tasks autonomously.
                    </p>
                  </div>
                  <button
                    onClick={runAgentSandbox}
                    disabled={isAgentRunning}
                    className="px-4 py-2 rounded-lg bg-[#E59500] text-black font-semibold text-xs flex items-center gap-2 cursor-pointer hover:bg-[#CC7A00] transition-colors whitespace-nowrap self-start sm:self-auto"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>{isAgentRunning ? 'Executing Steps...' : 'Re-Run Agent Trace'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4 space-y-2">
                    {[
                      {
                        id: 'sales',
                        title: '01. Inbound Lead Qualifier Agent',
                        sub: 'WhatsApp + HubSpot + Google Calendar',
                      },
                      {
                        id: 'procurement',
                        title: '02. 3-Way PO & Invoice Audit Agent',
                        sub: 'Email PDF + SAP Business One + Slack',
                      },
                      {
                        id: 'kyc',
                        title: '03. FinTech KYC & Credit Underwriter',
                        sub: 'ID Document OCR + Core Banking API',
                      },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setAgentScenario(s.id as any);
                          runAgentSandbox();
                        }}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          agentScenario === s.id
                            ? 'bg-white/[0.08] border-[#E59500] text-white'
                            : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-bold text-white">{s.title}</div>
                        <div className="text-[11px] font-mono text-zinc-400 mt-0.5">{s.sub}</div>
                      </button>
                    ))}
                  </div>

                  <div className="lg:col-span-8 rounded-xl bg-black/80 border border-white/[0.08] p-5 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-zinc-400">
                      <span>AGENT EXECUTION LOG ({agentScenario.toUpperCase()})</span>
                      <span className="text-emerald-400">STATUS: VERIFIED</span>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-200">
                      <span className="text-zinc-500 block text-[10px] mb-0.5">INBOUND EVENT TRIGGER:</span>
                      {agentScenario === 'sales' &&
                        'Prospective enterprise buyer messages on WhatsApp requesting ERP + AI automation for 8 regional branches.'}
                      {agentScenario === 'procurement' &&
                        'Supplier sends Invoice #INV-9042 ($18,450) via email attachment for 36 warehouse SKU lines.'}
                      {agentScenario === 'kyc' &&
                        'SME applicant uploads Certificate of Incorporation, KRA PIN, and 6-month M-Pesa statement.'}
                    </div>

                    {agentStep >= 1 && (
                      <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-200">
                        <span className="text-sky-400 font-bold block text-[10px] mb-0.5">
                          STEP 1 · MEMORY & POLICY RETRIEVAL (190ms):
                        </span>
                        {agentScenario === 'sales' &&
                          'Retrieved Enterprise Tier Pricing Matrix & Lead Architect availability from vector store.'}
                        {agentScenario === 'procurement' &&
                          'Fetched Purchase Order #PO-8810 and Goods Received Note #GRN-412 from SAP ERP.'}
                        {agentScenario === 'kyc' &&
                          'Extracted company registration number and verified tax compliance certificate validity.'}
                      </div>
                    )}

                    {agentStep >= 2 && (
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-200">
                        <span className="text-amber-400 font-bold block text-[10px] mb-0.5">
                          STEP 2 · DETERMINISTIC TOOL INVOCATION (420ms):
                        </span>
                        {agentScenario === 'sales' &&
                          'Executed hubspot.upsertDeal({ score: 94, stage: "Qualified" }) & calendar.reserveSlot("Thursday 14:00 EAT").'}
                        {agentScenario === 'procurement' &&
                          'Executed erp.threeWayMatch(). Flagged SKU #14 unit price variance (+4.2%) and staged 35 matching lines.'}
                        {agentScenario === 'kyc' &&
                          'Computed cash-flow coverage ratio (2.8x) and generated risk scorecard (Tier A Approved).'}
                      </div>
                    )}

                    {agentStep >= 3 && (
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-200">
                        <span className="text-emerald-400 font-bold block text-[10px] mb-0.5">
                          STEP 3 · COMPLETED AUTONOMOUS OUTCOME (890ms total):
                        </span>
                        {agentScenario === 'sales' &&
                          'Sent calendar invite to client on WhatsApp, created HubSpot deal record, and briefed Lead Architect on Slack.'}
                        {agentScenario === 'procurement' &&
                          'Posted reconciled ledger entry to ERP and dispatched 1-click variance approval button to Finance Director.'}
                        {agentScenario === 'kyc' &&
                          'Approved credit limit of KES 2,500,000 and dispatched digital offer letter for e-signature.'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {product.id === 'ai-chatbots' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Interactive WhatsApp Business Cloud API Simulator
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Test how our verified WhatsApp bots handle English/Swahili customer queries, live API lookups, and instant M-Pesa checkout.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Order & Delivery Tracking',
                      'Swahili / Bilingual Inquiry',
                      'Instant M-Pesa STK Checkout',
                    ].map((label, idx) => (
                      <button
                        key={label}
                        onClick={() => setChatPromptIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-colors ${
                          chatPromptIdx === idx
                            ? 'bg-[#E59500] text-black font-semibold'
                            : 'bg-white/[0.05] text-zinc-300 hover:text-white'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 rounded-2xl bg-[#0B141A] border border-emerald-500/30 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                          M
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span>Muru Enterprise Concierge</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <div className="text-[10px] font-mono text-emerald-400">
                            Official WhatsApp Business Account · Online
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">Latency: 0.9s</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="ml-auto max-w-[80%] p-3 rounded-xl bg-emerald-700/40 border border-emerald-500/30 text-white">
                        {chatPromptIdx === 0 &&
                          'Hi, where is my hardware shipment #ORD-4921? It was scheduled for Westlands office today.'}
                        {chatPromptIdx === 1 &&
                          'Habari, naweza kupata bei ya solar inverter ya 10kVA pamoja na installation hapa Nakuru?'}
                        {chatPromptIdx === 2 &&
                          'I want to renew our annual 50-seat enterprise license package right now.'}
                      </div>

                      <div className="mr-auto max-w-[88%] p-3.5 rounded-xl bg-[#1F2C34] border border-white/[0.08] text-zinc-100 space-y-2 leading-relaxed">
                        {chatPromptIdx === 0 && (
                          <>
                            <p>
                              Hello! I just checked live dispatch telemetry for <strong>#ORD-4921</strong>:
                            </p>
                            <p className="font-mono text-[11px] text-emerald-300 bg-black/40 p-2 rounded">
                              Status: Out for Delivery (Van KDJ 482M) · Rider: Peter K. · ETA: 14 mins to Westlands Square.
                            </p>
                            <p>Would you like me to share the live GPS tracking pin or notify your reception desk?</p>
                          </>
                        )}
                        {chatPromptIdx === 1 && (
                          <>
                            <p>
                              Habari! Tunayo <strong>10kVA Hybrid Solar Inverter</strong> kwenye stoo yetu tayari kwa ufungaji Nakuru:
                            </p>
                            <p className="font-mono text-[11px] text-emerald-300 bg-black/40 p-2 rounded">
                              • 10kVA Inverter + Lithium Battery Pack: KES 385,000 (Inajumuisha ufungaji & 5-Yr Warranty)
                            </p>
                            <p>Je, ungependa mhandisi wetu wa Nakuru afike kesho saa 4:00 asubuhi kwa site survey ya bure?</p>
                          </>
                        )}
                        {chatPromptIdx === 2 && (
                          <>
                            <p>
                              Your <strong>50-Seat Enterprise Renewal</strong> (Invoice #INV-2026-881) is ready.
                            </p>
                            <p className="font-mono text-[11px] text-emerald-300 bg-black/40 p-2 rounded">
                              Amount Due: KES 145,000 · M-Pesa STK Push dispatched to +254 716 *** 685.
                            </p>
                            <p>As soon as you enter your M-Pesa PIN, your license keys and eTIMS tax receipt will be delivered right here.</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-3 text-xs">
                    <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08]">
                      <div className="font-mono text-[#E59500] font-semibold mb-1">
                        BEHIND THE SCENES EXECUTION
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Every message triggers authenticated API lookups against your ERP, CRM, and payment gateway before composing a natural response in under 1.5 seconds.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] space-y-2">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Channel Support:</span>
                        <span className="text-white font-mono">WhatsApp, Web, IG, FB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Languages:</span>
                        <span className="text-white font-mono">English, Swahili, French +</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Payment Gateways:</span>
                        <span className="text-emerald-400 font-mono">M-Pesa Daraja & Stripe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {product.id === 'docusense-rag' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      DocuSense Cited RAG & Clause Retrieval Sandbox
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Test how DocuSense queries internal PDFs and returns exact, hallucination-free answers with verifiable page citations.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'SLA Penalty Clause',
                      'Kenya Customs Tariff Code',
                      'HR Medical Leave Policy',
                    ].map((q, idx) => (
                      <button
                        key={q}
                        onClick={() => setRagQueryIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-colors ${
                          ragQueryIdx === idx
                            ? 'bg-[#E59500] text-black font-semibold'
                            : 'bg-white/[0.05] text-zinc-300 hover:text-white'
                        }`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 p-5 rounded-xl bg-black/70 border border-white/[0.08] space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <Search className="w-4 h-4 text-[#E59500]" />
                      <span>QUERY:</span>
                      <span className="text-white font-semibold">
                        {ragQueryIdx === 0 && '"What is our financial credit liability if P1 uptime drops below 99.9%?"'}
                        {ragQueryIdx === 1 && '"What is the import duty and VAT treatment for industrial solar lithium batteries?"'}
                        {ragQueryIdx === 2 && '"How many days of paid compassionate and medical leave are Tier-2 staff entitled to?"'}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-[#E59500]/30 text-xs text-zinc-200 leading-relaxed space-y-2">
                      <div className="text-[11px] font-mono text-emerald-400 font-semibold">
                        GROUNDED SYNTHESIS (0 HALLUCINATIONS · 280ms):
                      </div>
                      {ragQueryIdx === 0 && (
                        <p>
                          Per <strong>Master Services Agreement (2026_MSA_Signed.pdf, Page 14, Clause 8.3)</strong>, if monthly uptime falls between 99.0% and 99.90%, the Client is entitled to a <strong>15% service credit</strong> applied against the next quarterly invoice. Severity-1 incident response must commence within 15 minutes.
                        </p>
                      )}
                      {ragQueryIdx === 1 && (
                        <p>
                          According to <strong>EAC Common External Tariff Handbook (Schedule_4_Tariffs.pdf, Page 112, HS Code 8507.60.00)</strong>, industrial lithium-ion storage units imported for certified solar installations qualify for <strong>0% Import Duty</strong> subject to EPRA exemption certificate verification.
                        </p>
                      )}
                      {ragQueryIdx === 2 && (
                        <p>
                          Under the <strong>Group Employee Handbook (HR_Manual_v4.docx, Section 6.2, Page 29)</strong>, full-time Tier-2 staff accrue <strong>30 calendar days of full-pay sick leave</strong> and an additional 30 days at half-pay per annual cycle upon submission of a certified medical practitioner note.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08] space-y-3 text-xs font-mono">
                    <div className="text-[#E59500] font-semibold">
                      VERIFIED SOURCE CITATION METADATA
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/[0.06] space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Cosine Similarity:</span>
                        <span className="text-emerald-400 font-bold tabular-nums">0.964</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">BM25 Lexical Match:</span>
                        <span className="text-white tabular-nums">Exact Clause Hit</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">RBAC Clearance:</span>
                        <span className="text-sky-400">Authorized Role Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {product.id === 'live-agent-assist' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Live Agent Copilot & Smart Escalation Console
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Inspect how human support specialists receive an instant escalation summary and 1-click AI drafted replies.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-amber-400">
                    Escalation Trigger: VIP Account · High Urgency
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 p-5 rounded-xl bg-black/60 border border-white/[0.08] space-y-3 text-xs">
                    <div className="font-mono text-[#E59500] font-semibold">
                      INSTANT 3-BULLET HANDOFF SUMMARY
                    </div>
                    <ul className="space-y-2 text-zinc-300">
                      <li>• <strong>Client:</strong> Apex Logistics Ltd (Enterprise Tier · LTV $48,000)</li>
                      <li>• <strong>Issue:</strong> Duplicate settlement hold on Batch #B-901 ($4,200).</li>
                      <li>• <strong>Bot Action Taken:</strong> Verified both transaction IDs in ledger; confirmed duplicate lock #TX-882.</li>
                    </ul>
                  </div>

                  <div className="lg:col-span-7 p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08] space-y-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-emerald-400 font-semibold">
                        AI COPILOT RECOMMENDED REPLIES (1-CLICK INSERT)
                      </span>
                      {draftSent && (
                        <span className="text-emerald-400 font-mono">✓ Sent & Logged to CRM</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {[
                        'Release duplicate hold #TX-882 immediately and send instant settlement confirmation receipt.',
                        'Escalate Batch #B-901 to Senior Treasury Officer with priority 15-minute SLA callback.',
                      ].map((draft, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedDraftIdx(idx);
                            setDraftSent(false);
                          }}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            selectedDraftIdx === idx
                              ? 'bg-[#E59500]/15 border-[#E59500] text-white'
                              : 'bg-black/40 border-white/[0.06] text-zinc-400 hover:text-white'
                          }`}
                        >
                          <div className="font-mono text-[10px] text-[#E59500] mb-1">
                            RECOMMENDED DRAFT 0{idx + 1}
                          </div>
                          <p>{draft}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setDraftSent(true)}
                      className="px-4 py-2.5 rounded-xl bg-[#E59500] text-black font-semibold text-xs flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Approve & Dispatch Selected Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {product.id === 'ai-automation' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Deterministic Document OCR & ERP Automation Pipeline
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Simulate an end-to-end automated pipeline from raw PDF attachment to validated SAP/Odoo ledger commit.
                    </p>
                  </div>
                  <button
                    onClick={runWorkflowSandbox}
                    disabled={isWorkflowRunning}
                    className="px-4 py-2 rounded-lg bg-[#E59500] text-black font-semibold text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>{isWorkflowRunning ? 'Running Pipeline...' : 'Simulate Pipeline Run'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {[
                    {
                      step: 1,
                      title: '01. Email / Webhook Intake',
                      detail: 'Ingests 14-page PDF commercial invoice & packing list.',
                    },
                    {
                      step: 2,
                      title: '02. Vision OCR Extraction',
                      detail: 'Extracts 48 line items, HS tariff codes, and KRA eTIMS QR signature.',
                    },
                    {
                      step: 3,
                      title: '03. 3-Way Rule Validation',
                      detail: 'Cross-checks arithmetic sums and matches 100% against PO #4019.',
                    },
                    {
                      step: 4,
                      title: '04. ERP Ledger Commit',
                      detail: 'Posts journal entry to SAP/Odoo & notifies finance channel in 1.9s.',
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className={`p-4 rounded-xl border transition-all ${
                        workflowStep >= s.step
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2 font-mono text-xs">
                        <span className="text-[#E59500] font-bold">STAGE 0{s.step}</span>
                        {workflowStep >= s.step ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Clock className="w-4 h-4 text-zinc-600" />
                        )}
                      </div>
                      <div className="text-xs font-bold mb-1">{s.title}</div>
                      <div className="text-[11px] text-zinc-400 leading-relaxed">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.id === 'custom-ai-applications' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-display font-bold text-white">
                  Bespoke AI Application Architecture Configurator
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="font-mono text-zinc-400 block mb-2">
                        1. Select Application Archetype:
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { id: 'underwriting', label: 'FinTech / Insurance AI Underwriting Portal' },
                          { id: 'logistics', label: 'Supply Chain, Fleet & Field Operations Cockpit' },
                          { id: 'saas', label: 'Commercial Multi-Tenant AI SaaS Product' },
                        ].map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setAppArchetype(item.id as any)}
                            className={`p-3 rounded-xl border text-left font-medium cursor-pointer ${
                              appArchetype === item.id
                                ? 'bg-[#E59500]/20 border-[#E59500] text-white'
                                : 'bg-black/40 border-white/[0.08] text-zinc-400'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-zinc-400 block mb-2">
                        2. Target Client Delivery Platforms:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'web', label: 'Web Portal' },
                          { id: 'mobile', label: 'iOS & Android' },
                          { id: 'both', label: 'Web + Mobile Suite' },
                        ].map((p) => (
                          <button
                            key={p.id}
                            onClick={() => setAppPlatform(p.id as any)}
                            className={`p-2.5 rounded-lg border font-mono cursor-pointer ${
                              appPlatform === p.id
                                ? 'bg-[#E59500] text-black font-bold border-[#E59500]'
                                : 'bg-black/40 border-white/[0.08] text-zinc-400'
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-black/70 border border-[#E59500]/30 space-y-3 text-xs">
                    <div className="font-mono text-[#E59500] font-bold">
                      RECOMMENDED ENGINEERING BLUEPRINT
                    </div>
                    <div className="space-y-2 text-zinc-300">
                      <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                        <span className="text-zinc-500">Frontend Stack:</span>
                        <span className="font-mono text-white">
                          {appPlatform === 'web'
                            ? 'React 19 + Next.js + Tailwind'
                            : appPlatform === 'mobile'
                            ? 'Flutter / React Native (iOS & Android)'
                            : 'React 19 Web + Flutter Mobile Monorepo'}
                        </span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                        <span className="text-zinc-500">AI & Backend Core:</span>
                        <span className="font-mono text-white">FastAPI + Node.js + pgvector</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                        <span className="text-zinc-500">Estimated Delivery:</span>
                        <span className="font-mono text-emerald-400">4–6 Weeks (2-Week Sprints)</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-zinc-500">Code & IP Ownership:</span>
                        <span className="font-mono text-[#E59500]">100% Client Owned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {product.id === 'ai-integrations' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Live Bidirectional Webhook & API Bridge Inspector
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Select an integration bridge to inspect real-time payload transformation, AI enrichment, and target system synchronization.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'whatsapp_crm', label: 'WhatsApp ↔ AI ↔ HubSpot' },
                      { id: 'erp_mpesa', label: 'M-Pesa Daraja ↔ AI ↔ SAP/Odoo' },
                      { id: 'mail_zendesk', label: 'Mailbox ↔ AI ↔ Zendesk' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setWebhookFlow(b.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer ${
                          webhookFlow === b.id
                            ? 'bg-[#E59500] text-black font-semibold'
                            : 'bg-white/[0.05] text-zinc-300'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black border border-white/[0.08] font-mono text-xs text-emerald-400 overflow-x-auto">
                  <pre>
{webhookFlow === 'whatsapp_crm'
  ? `{
  "bridge": "WHATSAPP_CLOUD_TO_HUBSPOT_V2",
  "hmac_verified": true,
  "latency_ms": 84,
  "ai_enrichment": {
    "intent": "ENTERPRISE_PROCUREMENT_INQUIRY",
    "lead_score": 92,
    "extracted_company": "East Africa Distributors Ltd"
  },
  "downstream_sync": {
    "hubspot_deal_id": "HS-994812",
    "slack_channel_notified": "#enterprise-sales"
  }
}`
  : webhookFlow === 'erp_mpesa'
  ? `{
  "bridge": "MPESA_DARAJA_TO_ODOO_ERP",
  "hmac_verified": true,
  "latency_ms": 62,
  "payment_event": {
    "receipt": "SIA84920KL",
    "amount_kes": 145000,
    "matched_invoice": "INV/2026/0841"
  },
  "downstream_sync": {
    "odoo_ledger_state": "PAID_RECONCILED",
    "kra_etims_receipt_dispatched": true
  }
}`
  : `{
  "bridge": "SHARED_MAILBOX_TO_ZENDESK",
  "hmac_verified": true,
  "latency_ms": 96,
  "ai_enrichment": {
    "priority": "P1_URGENT",
    "category": "SLA_TECHNICAL_SUPPORT",
    "auto_draft_attached": true
  },
  "downstream_sync": {
    "zendesk_ticket_id": "ZD-44910",
    "assigned_tier": "L2_ENGINEERING"
  }
}`}
                  </pre>
                </div>
              </div>
            )}

            {product.id === 'ai-data-analytics' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Executive Natural-Language BI & Forecasting Studio
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Select an executive question in plain English to see how Muru Predictive BI queries live ledgers and surfaces actionable anomalies.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Branch Margin & Revenue Forecast',
                      'Overdue Receivables & Churn Risk',
                      'Top Stockout Risk SKUs',
                    ].map((label, idx) => (
                      <button
                        key={label}
                        onClick={() => setBiQueryIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer ${
                          biQueryIdx === idx
                            ? 'bg-[#E59500] text-black font-semibold'
                            : 'bg-white/[0.05] text-zinc-300'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 p-5 rounded-xl bg-black/70 border border-white/[0.08] space-y-3 text-xs">
                    <div className="font-mono text-[#E59500]">
                      EXECUTIVE BRIEFING OUTPUT:
                    </div>
                    {biQueryIdx === 0 && (
                      <p className="text-zinc-200 leading-relaxed">
                        Q3 Consolidated Revenue is tracking <strong>+18.4% above target ($1.42M)</strong>. Voi and Mombasa branches lead gross margin expansion (34.2%), while regional logistics overhead increased 6.1% due to third-party fleet spot rates. Projected Q4 close: <strong>$1.68M (±2.4%)</strong>.
                      </p>
                    )}
                    {biQueryIdx === 1 && (
                      <p className="text-zinc-200 leading-relaxed">
                        Identified <strong>$46,800 in invoices overdue &gt; 30 days</strong> across 7 wholesale accounts. Automated WhatsApp payment reminders have been staged for 1-click finance approval. 3 enterprise accounts show early usage drop-offs and have been flagged for Account Manager outreach.
                      </p>
                    )}
                    {biQueryIdx === 2 && (
                      <p className="text-zinc-200 leading-relaxed">
                        Predictive demand model flags <strong>4 high-velocity SKUs</strong> projected to deplete within 9 days at Industrial Area warehouse based on current distributor reorder velocity. Recommended purchase order batch (#PO-AUTO-91) prepared for review.
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08] space-y-2 text-xs font-mono">
                    <div className="text-emerald-400 font-semibold">GENERATED READ-REPLICA SQL</div>
                    <pre className="text-[11px] text-zinc-400 overflow-x-auto">
{`SELECT branch_id,
       SUM(net_revenue) AS q3_rev,
       AVG(gross_margin_pct) AS gm
FROM analytics.erp_ledger_daily
WHERE fiscal_quarter = '2026-Q3'
GROUP BY branch_id
ORDER BY q3_rev DESC;`}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* TAB 3: ARCHITECTURE & SECURITY */}
        {activeTab === 'architecture' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 text-left"
          >
            <div className="rounded-2xl bg-[#090B0F] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                4-Stage Execution Architecture for {product.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-black/50 border border-white/[0.07] space-y-2"
                  >
                    <div className="text-xs font-mono font-bold text-[#E59500]">
                      {step.step}
                    </div>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08]">
                <Lock className="w-5 h-5 text-[#E59500] mb-2" />
                <div className="text-sm font-bold text-white mb-1">
                  Zero Foundation Model Training
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Your proprietary business data, customer conversations, and documents are strictly isolated and never used to train external public AI models.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08]">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-sm font-bold text-white mb-1">
                  Role-Based Access & Audit Trails
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every API call, document lookup, and automated transaction is governed by strict RBAC permissions and logged with immutable timestamps.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08]">
                <Server className="w-5 h-5 text-sky-400 mb-2" />
                <div className="text-sm font-bold text-white mb-1">
                  Cloud VPC or On-Premise Deployment
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Deploy in our managed East Africa/EU cloud VPC, your own AWS/Azure/GCP tenant, or air-gapped on-premises Kubernetes clusters.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: DEPLOYMENT SCHEDULE & BOOKING */}
        {activeTab === 'rollout' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 text-left"
          >
            <div className="rounded-2xl bg-[#090B0F] border border-white/[0.08] p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Rapid Production Rollout Roadmap ({product.metrics.deploymentTime})
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    How we take {product.title} from initial scoping call to live production impact.
                  </p>
                </div>
                <button
                  onClick={handleBookThisProduct}
                  className="px-5 py-2.5 rounded-xl bg-[#E59500] text-black font-display font-semibold text-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto"
                >
                  <span>Book Discovery Call for {product.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    phase: 'Days 1–2',
                    title: 'Scoping & Architecture Audit',
                    desc: 'We map your target workflows, API credentials, and measurable ROI benchmarks.',
                  },
                  {
                    phase: 'Days 3–6',
                    title: 'Core Build & Sandbox Setup',
                    desc: 'We configure the AI engine, knowledge store, and staging webhooks on sample data.',
                  },
                  {
                    phase: 'Days 7–10',
                    title: 'Integration & Security QA',
                    desc: 'End-to-end stress testing with your CRM/ERP, guardrail verification, and staff UAT.',
                  },
                  {
                    phase: 'Go-Live & SLA',
                    title: 'Production Cutover & Telemetry',
                    desc: 'Zero-downtime launch backed by 24/7 monitoring and continuous accuracy tuning.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/50 border border-white/[0.07] space-y-1.5"
                  >
                    <div className="text-xs font-mono text-[#E59500] font-bold">
                      {item.phase}
                    </div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom Conversion Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0B0E14] via-[#121722] to-[#0B0E14] border border-[#E59500]/40 p-6 sm:p-10 text-left relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs font-mono text-[#E59500] font-semibold">
                READY TO DEPLOY {product.code}?
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Book Your {product.title} Architecture & Feasibility Session
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
                Now that you’ve reviewed the capabilities, architecture, and interactive sandbox for {product.shortTitle}, schedule a direct session with our engineering team to scope your deployment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={handleBookThisProduct}
                className="py-3.5 px-6 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#E59500]/20"
              >
                <Sparkles className="w-4 h-4 fill-black/20 text-black" />
                <span>Book {product.shortTitle} Now</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <a
                href={COMPANY_DETAILS.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl text-xs font-mono text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat with Product Architect</span>
              </a>
            </div>
          </div>
        </div>

        {/* Cross-Navigation: Explore Other Products */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                Explore Other Muru AI Enterprise Products
              </h4>
              <p className="text-xs text-zinc-400">
                Click any product below to inspect its dedicated architecture and interactive sandbox before booking.
              </p>
            </div>
            <button
              onClick={onBackToHome}
              className="text-xs font-mono text-[#E59500] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto"
            >
              <span>Return to Main Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {otherProducts.slice(0, 4).map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  onNavigateToProduct(other.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-[#090B0F] border border-white/[0.06] hover:border-[#E59500]/50 hover:bg-white/[0.04] transition-all text-left group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#E59500]">
                      {other.number}. {other.code}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#E59500] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E59500] transition-colors mb-1">
                    {other.title}
                  </div>
                  <div className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {other.tagline}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.05] text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>{other.metrics.primaryLabel}</span>
                  <span className="text-emerald-400">{other.metrics.primaryValue}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
