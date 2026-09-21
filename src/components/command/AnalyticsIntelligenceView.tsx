import React, { useMemo, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Cpu,
  Database,
  Gauge,
  Layers3,
  MessageSquare,
  Network,
  Radio,
  Sparkles,
  Zap,
} from 'lucide-react';

type TimeRange = '24h' | '7d' | '30d';

const taskData: Record<TimeRange, number[]> = {
  '24h': [
    42, 31, 24, 58, 142, 218, 264, 295,
    310, 286, 265, 240, 252, 274, 301,
    318, 305, 288, 270, 240, 180, 142, 128, 110,
  ],

  '7d': [
    210, 245, 198, 310, 355, 402, 438,
  ],

  '30d': [
    180, 220, 265, 240, 310, 350,
    390, 420, 405, 450, 470, 492,
  ],
};

const labels: Record<TimeRange, string[]> = {
  '24h': [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ],

  '7d': [
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN',
  ],

  '30d': [
    '01',
    '04',
    '07',
    '10',
    '13',
    '16',
    '19',
    '22',
    '25',
    '28',
    '30',
    '',
  ],
};

const agents = [
  {
    name: 'Support Agent',
    type: 'Customer Intelligence',
    status: 'ACTIVE',
    load: 78,
    tasks: '1,284',
    icon: MessageSquare,
  },
  {
    name: 'Sales Agent',
    type: 'Lead Qualification',
    status: 'ACTIVE',
    load: 64,
    tasks: '842',
    icon: Network,
  },
  {
    name: 'Operations Agent',
    type: 'Workflow Automation',
    status: 'ACTIVE',
    load: 52,
    tasks: '691',
    icon: Zap,
  },
];

export const AnalyticsIntelligenceView: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('24h');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const chartValues = taskData[timeRange];
  const chartLabels = labels[timeRange];

  const maxValue = Math.max(...chartValues);

  const chartPoints = useMemo(() => {
    const max = Math.max(...chartValues);

    return chartValues.map((value, index) => {
      const x =
        chartValues.length === 1
          ? 50
          : (index / (chartValues.length - 1)) * 100;

      const y = 90 - (value / max) * 72;

      return {
        x,
        y,
        value,
      };
    });
  }, [chartValues]);

  const linePath = chartPoints
    .map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const previous = chartPoints[index - 1];
      const midX = (previous.x + point.x) / 2;

      return `C ${midX} ${previous.y}, ${midX} ${point.y}, ${point.x} ${point.y}`;
    })
    .join(' ');

  const areaPath = `${linePath} L 100 100 L 0 100 Z`;

  /*
   * Only render labels that have enough room.
   * The labels are positioned according to the actual chart points
   * instead of using flex justify-between.
   */
  const visibleLabelIndexes = useMemo(() => {
    if (timeRange === '24h') {
      return chartLabels
        .map((label, index) => ({
          label,
          index,
        }))
        .filter(({ index }) => index % 3 === 0);
    }

    if (timeRange === '30d') {
      return chartLabels
        .map((label, index) => ({
          label,
          index,
        }))
        .filter(({ label, index }) => label && index % 2 === 0);
    }

    return chartLabels
      .map((label, index) => ({
        label,
        index,
      }))
      .filter(({ label }) => Boolean(label));
  }, [chartLabels, timeRange]);

  /*
   * Tooltip position is clamped so it cannot run outside
   * the chart or collide with the chart container.
   */
  const tooltip = useMemo(() => {
    if (hoveredPoint === null) {
      return null;
    }

    const point = chartPoints[hoveredPoint];

    if (!point) {
      return null;
    }

    const left = Math.min(
      Math.max(point.x, 7),
      93
    );

    const placeBelow = point.y < 25;

    const top = placeBelow
      ? Math.min(point.y + 8, 78)
      : Math.max(point.y - 5, 12);

    return {
      left,
      top,
      placeBelow,
      point,
    };
  }, [chartPoints, hoveredPoint]);

  return (
    <div className="relative min-h-full w-full overflow-x-hidden bg-[#060709] text-white">

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 left-[30%] h-[420px] w-[420px] rounded-full bg-[#E59500]/[0.035] blur-[120px]" />

        <div className="absolute right-[-150px] top-[30%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10 w-full min-w-0 space-y-6 p-4 sm:p-6 lg:p-8">

        {/* HEADER */}

        <header className="flex w-full min-w-0 flex-col gap-5 border-b border-white/[0.06] pb-6 2xl:flex-row 2xl:items-end 2xl:justify-between">

          <div className="min-w-0">

            <div className="mb-3 flex flex-wrap items-center gap-2">

              <div className="inline-flex max-w-full items-center gap-2 rounded-lg border border-[#E59500]/20 bg-[#E59500]/[0.06] px-3 py-1.5">

                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E59500] opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-[#E59500]" />
                </span>

                <span className="truncate font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#E59500]">
                  Cognitive Telemetry
                </span>

              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-700">
                / INTELLIGENCE
              </span>

            </div>

            <h1 className="font-display text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
              Intelligence
              <span className="ml-2 text-zinc-600">
                Overview
              </span>
            </h1>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-500 sm:text-sm">
              Monitor AI workloads, autonomous agents, automation
              performance, and system intelligence from one operational layer.
            </p>

          </div>

          {/* CONTROLS */}

          <div className="flex w-full min-w-0 flex-wrap items-center gap-2 2xl:w-auto 2xl:flex-nowrap">

            <div className="flex min-w-0 max-w-full items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5">

              <Radio className="h-3.5 w-3.5 shrink-0 text-emerald-400" />

              <span className="truncate whitespace-nowrap font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                Live telemetry
              </span>

            </div>

            <div className="flex shrink-0 rounded-xl border border-white/[0.08] bg-[#0B0D11] p-1">

              {(['24h', '7d', '30d'] as TimeRange[]).map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setTimeRange(range);
                    setHoveredPoint(null);
                  }}
                  className={`rounded-lg px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-wider transition-all sm:px-3.5 ${
                    timeRange === range
                      ? 'bg-white text-black shadow-lg'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}

            </div>

          </div>

        </header>

        {/* KPI CARDS */}

        <section className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

          <MetricCard
            label="Tasks Processed"
            value="18,429"
            change="+18.4%"
            positive
            icon={BrainCircuit}
            accent="orange"
          />

          <MetricCard
            label="Automation Rate"
            value="87.6%"
            change="+6.2%"
            positive
            icon={Zap}
            accent="green"
          />

          <MetricCard
            label="Avg Response"
            value="1.42s"
            change="-21.8%"
            positive
            icon={Clock3}
            accent="cyan"
          />

          <MetricCard
            label="System Reliability"
            value="99.97%"
            change="Stable"
            positive
            icon={Gauge}
            accent="purple"
          />

        </section>

        {/* MAIN ANALYTICS */}

        {/*
         * IMPORTANT:
         * The two-column layout now starts at 2XL rather than XL.
         * This prevents the AI Core panel from becoming too narrow.
         */}

        <section className="grid w-full min-w-0 grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_360px]">

          {/* THROUGHPUT */}

          <div className="min-w-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0C10]">

            <div className="border-b border-white/[0.06] p-5 sm:p-6">

              <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="min-w-0">

                  <div className="mb-2 flex items-center gap-2">

                    <Activity className="h-3.5 w-3.5 shrink-0 text-[#E59500]" />

                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#E59500]">
                      Neural workload
                    </span>

                  </div>

                  <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                    AI Task Throughput
                  </h2>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-600">
                    Autonomous inference activity across active AI systems
                  </p>

                </div>

                <div className="flex shrink-0 items-center gap-5">

                  <div>

                    <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">
                      Peak
                    </p>

                    <p className="mt-1 whitespace-nowrap font-mono text-sm font-bold text-white">
                      {maxValue}

                      <span className="ml-1 text-[8px] font-normal text-zinc-600">
                        tasks/hr
                      </span>
                    </p>

                  </div>

                  <div className="h-8 w-px bg-white/[0.07]" />

                  <div>

                    <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">
                      Status
                    </p>

                    <div className="mt-1 flex items-center gap-1.5">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <span className="font-mono text-[9px] font-semibold text-emerald-400">
                        OPTIMAL
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* CHART */}

            <div className="min-w-0 p-4 sm:p-6">

              <div className="relative h-[270px] w-full min-w-0 sm:h-[310px]">

                {/* Y AXIS */}

                <div className="absolute bottom-9 left-0 top-2 flex w-8 flex-col justify-between sm:w-9">

                  {[100, 75, 50, 25, 0].map((value) => (
                    <span
                      key={value}
                      className="font-mono text-[8px] text-zinc-700"
                    >
                      {Math.round((maxValue * value) / 100)}
                    </span>
                  ))}

                </div>

                {/* CHART BODY */}

                <div className="absolute bottom-9 left-9 right-0 top-2 min-w-0 sm:left-10">

                  {/* GRID */}

                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">

                    {[0, 1, 2, 3, 4].map((line) => (
                      <div
                        key={line}
                        className="border-t border-dashed border-white/[0.05]"
                      />
                    ))}

                  </div>

                  {/* SVG */}

                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full overflow-visible"
                  >

                    <defs>

                      <linearGradient
                        id="throughputFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#E59500"
                          stopOpacity="0.22"
                        />

                        <stop
                          offset="100%"
                          stopColor="#E59500"
                          stopOpacity="0"
                        />
                      </linearGradient>

                      <filter id="throughputGlow">

                        <feGaussianBlur
                          stdDeviation="1.5"
                          result="blur"
                        />

                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>

                      </filter>

                    </defs>

                    <path
                      d={areaPath}
                      fill="url(#throughputFill)"
                    />

                    <path
                      d={linePath}
                      fill="none"
                      stroke="#E59500"
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      filter="url(#throughputGlow)"
                    />

                    {chartPoints.map((point, index) => (
                      <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r={
                          hoveredPoint === index
                            ? 1.8
                            : 1
                        }
                        fill="#E59500"
                        vectorEffect="non-scaling-stroke"
                        className="cursor-pointer"
                        onMouseEnter={() =>
                          setHoveredPoint(index)
                        }
                        onMouseLeave={() =>
                          setHoveredPoint(null)
                        }
                      />
                    ))}

                  </svg>

                  {/* TOOLTIP */}

                  {tooltip && hoveredPoint !== null && (
                    <div
                      className={`pointer-events-none absolute z-40 w-max rounded-xl border border-[#E59500]/30 bg-[#111419]/95 px-3 py-2 shadow-2xl backdrop-blur-xl ${
                        tooltip.placeBelow
                          ? 'translate-x-[-50%]'
                          : 'translate-x-[-50%] translate-y-[-100%]'
                      }`}
                      style={{
                        left: `${tooltip.left}%`,
                        top: `${tooltip.top}%`,
                      }}
                    >

                      <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">
                        {chartLabels[hoveredPoint]}
                      </p>

                      <p className="mt-0.5 font-mono text-sm font-bold text-white">
                        {tooltip.point.value}

                        <span className="ml-1 text-[8px] font-normal text-zinc-500">
                          tasks
                        </span>
                      </p>

                    </div>
                  )}

                </div>

                {/* X AXIS */}

                <div className="absolute bottom-0 left-9 right-0 h-5 sm:left-10">

                  {visibleLabelIndexes.map(
                    ({ label, index }) => {
                      const point =
                        chartPoints[index];

                      return (
                        <span
                          key={index}
                          className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-[8px] text-zinc-700"
                          style={{
                            left: `${point.x}%`,
                          }}
                        >
                          {label}
                        </span>
                      );
                    }
                  )}

                </div>

              </div>

              {/* CHART FOOTER */}

              <div className="mt-4 flex min-w-0 flex-col gap-3 border-t border-white/[0.05] pt-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex min-w-0 items-center gap-2">

                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#E59500] shadow-[0_0_10px_rgba(229,149,0,.7)]" />

                  <span className="truncate font-mono text-[8px] uppercase tracking-widest text-zinc-500">
                    Autonomous inference
                  </span>

                </div>

                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-700">

                  {timeRange === '24h'
                    ? 'Hourly telemetry'
                    : timeRange === '7d'
                    ? 'Daily telemetry'
                    : 'Monthly telemetry'}

                </span>

              </div>

            </div>

          </div>

          {/* AI CORE */}

          <div className="min-w-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0C10]">

            <div className="border-b border-white/[0.06] p-5 sm:p-6">

              <div className="mb-2 flex items-center gap-2">

                <Cpu className="h-3.5 w-3.5 text-emerald-400" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  System intelligence
                </span>

              </div>

              <h2 className="text-lg font-bold tracking-tight text-white">
                AI Core Health
              </h2>

            </div>

            <div className="p-5 sm:p-6">

              {/* CORE VISUALIZATION */}

              <div className="relative mx-auto flex h-40 w-40 max-w-full items-center justify-center">

                <div className="absolute inset-4 rounded-full border border-emerald-400/10" />

                <div className="absolute inset-8 rounded-full border border-emerald-400/10" />

                <div className="absolute inset-11 animate-pulse rounded-full border border-[#E59500]/30" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#E59500]/30 bg-[#E59500]/[0.06] shadow-[0_0_60px_rgba(229,149,0,.12)]">

                  <BrainCircuit className="h-8 w-8 text-[#E59500]" />

                </div>

                <span className="absolute top-3 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.9)]" />

                <span className="absolute bottom-5 left-5 h-1 w-1 rounded-full bg-[#E59500]" />

                <span className="absolute right-5 top-8 h-1 w-1 rounded-full bg-cyan-400" />

              </div>

              {/* CORE STATUS */}

              <div className="mt-5 text-center">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Intelligence state
                </p>

                <p className="mt-1 text-xl font-black tracking-tight text-emerald-400">
                  OPERATIONAL
                </p>

                <p className="mx-auto mt-2 max-w-[250px] text-xs leading-5 text-zinc-600">
                  All inference services responding normally
                </p>

              </div>

              {/* HEALTH */}

              <div className="mt-6 space-y-3 border-t border-white/[0.05] pt-5">

                <HealthRow
                  label="Inference Engine"
                  value="99.98%"
                />

                <HealthRow
                  label="Knowledge Layer"
                  value="99.94%"
                />

                <HealthRow
                  label="Automation Layer"
                  value="99.97%"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ACTIVE AGENTS */}

        <section className="w-full min-w-0">

          <div className="mb-4 flex min-w-0 items-end justify-between gap-4">

            <div className="min-w-0">

              <div className="mb-1 flex items-center gap-2">

                <Sparkles className="h-3 w-3 shrink-0 text-[#E59500]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#E59500]">
                  Autonomous systems
                </span>

              </div>

              <h2 className="text-lg font-bold text-white">
                Active AI Agents
              </h2>

            </div>

            <button
              type="button"
              className="hidden shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-zinc-600 transition hover:text-white sm:flex"
            >
              View all agents
              <ArrowUpRight className="h-3 w-3" />
            </button>

          </div>

          <div className="grid w-full min-w-0 grid-cols-1 gap-3 lg:grid-cols-3">

            {agents.map((agent) => {
              const Icon = agent.icon;

              return (
                <div
                  key={agent.name}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0C10] p-5 transition-all duration-300 hover:border-[#E59500]/20 hover:bg-[#0D0F13]"
                >

                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#E59500]/[0.025] blur-2xl transition group-hover:bg-[#E59500]/[0.06]" />

                  <div className="relative flex min-w-0 items-start justify-between gap-3">

                    <div className="flex min-w-0 items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">

                        <Icon className="h-4 w-4 text-[#E59500]" />

                      </div>

                      <div className="min-w-0">

                        <h3 className="truncate text-sm font-bold text-white">
                          {agent.name}
                        </h3>

                        <p className="mt-0.5 truncate text-[10px] text-zinc-600">
                          {agent.type}
                        </p>

                      </div>

                    </div>

                    <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-2 py-1">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <span className="font-mono text-[8px] font-semibold tracking-wider text-emerald-400">
                        {agent.status}
                      </span>

                    </div>

                  </div>

                  <div className="relative mt-6">

                    <div className="mb-2 flex items-center justify-between">

                      <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-700">
                        Current load
                      </span>

                      <span className="font-mono text-[10px] font-bold text-zinc-300">
                        {agent.load}%
                      </span>

                    </div>

                    <div className="h-1 overflow-hidden rounded-full bg-white/[0.05]">

                      <div
                        className="h-full rounded-full bg-[#E59500] shadow-[0_0_12px_rgba(229,149,0,.35)]"
                        style={{
                          width: `${agent.load}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div className="relative mt-5 flex items-end justify-between border-t border-white/[0.05] pt-4">

                    <div>

                      <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-700">
                        Tasks today
                      </p>

                      <p className="mt-1 font-mono text-sm font-bold text-white">
                        {agent.tasks}
                      </p>

                    </div>

                    <Activity className="h-4 w-4 text-zinc-700 transition group-hover:text-[#E59500]" />

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* INSIGHTS */}

        <section className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

          <InsightCard
            icon={MessageSquare}
            label="Customer Intelligence"
            value="4,812"
            description="conversations analyzed"
            trend="+14.2%"
          />

          <InsightCard
            icon={Clock3}
            label="Time Recovered"
            value="348h"
            description="human work automated"
            trend="+28.6%"
          />

          <InsightCard
            icon={Database}
            label="Knowledge Queries"
            value="12,640"
            description="context retrievals"
            trend="+19.8%"
          />

          <InsightCard
            icon={Layers3}
            label="Automation Runs"
            value="8,421"
            description="workflows executed"
            trend="+31.4%"
          />

        </section>

        {/* FOOTER */}

        <div className="flex min-w-0 flex-col gap-3 border-t border-white/[0.05] pt-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex min-w-0 flex-wrap items-center gap-3">

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.7)]" />

              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">
                All systems operational
              </span>

            </div>

            <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-700">
              MURU AI CORE
            </span>

          </div>

          <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-zinc-700">

            <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-400" />

            <span>Telemetry synchronized</span>

          </div>

        </div>

      </div>

    </div>
  );
};

/* ============================================================= */
/* METRIC CARD */
/* ============================================================= */

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: React.ElementType;
  accent: 'orange' | 'green' | 'cyan' | 'purple';
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  positive,
  icon: Icon,
  accent,
}) => {
  const accentClasses = {
    orange:
      'text-[#E59500] bg-[#E59500]/[0.07] border-[#E59500]/10',

    green:
      'text-emerald-400 bg-emerald-400/[0.06] border-emerald-400/10',

    cyan:
      'text-cyan-400 bg-cyan-400/[0.06] border-cyan-400/10',

    purple:
      'text-violet-400 bg-violet-400/[0.06] border-violet-400/10',
  };

  return (
    <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0C10] p-4 transition-all duration-300 hover:border-white/[0.12] sm:p-5">

      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/[0.015] blur-2xl transition group-hover:bg-white/[0.035]" />

      <div className="relative flex min-w-0 items-start justify-between gap-3">

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${accentClasses[accent]}`}
        >
          <Icon className="h-4 w-4" />
        </div>

        <span
          className={`flex shrink-0 items-center gap-1 font-mono text-[8px] font-semibold ${
            positive
              ? 'text-emerald-400'
              : 'text-zinc-500'
          }`}
        >

          {positive && (
            <ArrowUpRight className="h-3 w-3" />
          )}

          {change}

        </span>

      </div>

      <div className="relative mt-5 min-w-0">

        <p className="truncate font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">
          {label}
        </p>

        <p className="mt-1 truncate text-xl font-black tracking-tight text-white sm:text-2xl">
          {value}
        </p>

      </div>

    </div>
  );
};

/* ============================================================= */
/* HEALTH ROW */
/* ============================================================= */

const HealthRow: React.FC<{
  label: string;
  value: string;
}> = ({
  label,
  value,
}) => {
  return (
    <div className="flex min-w-0 items-center justify-between gap-4">

      <div className="flex min-w-0 items-center gap-2">

        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />

        <span className="truncate text-xs text-zinc-500">
          {label}
        </span>

      </div>

      <span className="shrink-0 font-mono text-[9px] font-semibold text-zinc-300">
        {value}
      </span>

    </div>
  );
};

/* ============================================================= */
/* INSIGHT CARD */
/* ============================================================= */

const InsightCard: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
  description: string;
  trend: string;
}> = ({
  icon: Icon,
  label,
  value,
  description,
  trend,
}) => {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0C10] p-5 transition-all duration-300 hover:border-white/[0.12]">

      <div className="flex min-w-0 items-center justify-between gap-3">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025]">

          <Icon className="h-3.5 w-3.5 text-zinc-500" />

        </div>

        <span className="flex shrink-0 items-center gap-1 font-mono text-[9px] text-emerald-400">

          <ArrowUpRight className="h-3 w-3" />

          {trend}

        </span>

      </div>

      <div className="mt-5 min-w-0">

        <p className="truncate font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">
          {label}
        </p>

        <div className="mt-1 flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">

          <span className="shrink-0 font-mono text-xl font-bold text-white">
            {value}
          </span>

          <span className="min-w-0 text-[10px] leading-4 text-zinc-600">
            {description}
          </span>

        </div>

      </div>

    </div>
  );
};