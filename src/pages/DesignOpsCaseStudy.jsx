import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useMotionValueEvent, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import { Clock, AlertTriangle, XCircle, Hourglass, Link2Off, Split, Brain, Layers, FileText, Sparkles, ArrowRight, Users, Calendar, Workflow, Quote, RefreshCw } from 'lucide-react'
import { EmptySearchScreen, NLPDocumentSearchScreen, SourceInspectorScreen, InvestigateDocumentScreen } from '../components/StaticScreens'
import { CodeReviewViewer } from '../components/CodeReviewViewer'
import { WorkflowDiagram } from '../components/WorkflowDiagram'

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii']

// ─── Fade-in section wrapper ───────────────────────────────────────────────────
function FadeSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Legal Brief Card (problem filing) ─────────────────────────────────────────
function BriefCard({ items, ruling, title }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
      className="bg-white dark:bg-slate-900/80 border border-stone-200 dark:border-slate-700/60 rounded-sm shadow-lg px-7 py-6 relative overflow-hidden"
    >
      {/* Stamp - star seal in upper right corner, drops in */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 1.6, rotate: 20 },
          visible: { opacity: 0.4, scale: 1, rotate: -12 },
        }}
        transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute -right-3 -top-3 w-20 h-20 pointer-events-none dark:!opacity-25"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-rose-900 dark:text-rose-700">
          <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 1.5" />
          <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.5" />
          <path d="M50 28 L56 45 L74 45 L59.5 55.5 L65 73 L50 62.5 L35 73 L40.5 55.5 L26 45 L44 45 Z" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
        className="border-b border-stone-200 dark:border-yellow-600/20 pb-3 mb-5"
      >
        <p className="text-lg font-bold text-stone-800 dark:text-slate-200 font-serif">{title}</p>
      </motion.div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
            className="flex justify-between items-baseline gap-4"
          >
            <span className="text-xs text-stone-600 dark:text-slate-400 font-serif">{item.label}</span>
            <span className="text-xs font-semibold text-rose-900 dark:text-rose-300 whitespace-nowrap">{item.impact}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
        className="border-t border-stone-200 dark:border-yellow-600/20 mt-5 pt-4 flex justify-between items-baseline font-bold text-stone-800 dark:text-slate-200"
      >
        <span className="text-xs font-serif text-yellow-700 dark:text-yellow-600/60 uppercase tracking-wider">Ruling</span>
        <span className="text-xs text-rose-900 dark:text-rose-300">{ruling}</span>
      </motion.div>
    </motion.div>
  )
}

// ─── Deposition Card (user testimony) ──────────────────────────────────────────
function DepositionCard({ deposition, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="bg-white dark:bg-slate-900/70 border border-stone-200 dark:border-slate-700/50 rounded-sm p-5 relative group hover:border-yellow-600/40 hover:shadow-md transition-all overflow-hidden"
    >
      {/* Burgundy left rule */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-900/70 to-rose-900/20 dark:from-rose-700/70 dark:to-rose-700/20" />
      {/* Quote icon decoration */}
      <Quote className="absolute -right-2 -top-2 w-12 h-12 text-yellow-700/8 dark:text-yellow-600/10" strokeWidth={1.5} />
      <div className="flex items-center gap-2 mb-3 pl-2">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-600/80" />
        <p className="text-[10px] font-mono text-yellow-700 dark:text-yellow-600/70 uppercase tracking-[0.15em] font-semibold">{deposition.source}</p>
      </div>
      <p className="text-sm text-stone-700 dark:text-slate-300 leading-relaxed italic font-serif pl-2">"{deposition.quote}"</p>
      <div className="text-[10px] text-stone-400 dark:text-slate-500 mt-2 pl-2 font-mono">{deposition.session}</div>
      <div className="mt-4 flex gap-1.5 flex-wrap pl-2">
        {deposition.tags.map((tag, i) => (
          <span key={i} className="text-[10px] px-2 py-0.5 rounded-sm bg-stone-100 dark:bg-slate-800/80 text-stone-600 dark:text-slate-400 border border-stone-200 dark:border-slate-700/60 font-medium">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Theme Stat Tile (animated donut + count-up) ─────────────────────────────
function ThemeStatTile({ theme, palette, index }) {
  const radius = 22
  const circ = 2 * Math.PI * radius
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}%`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, theme.pct, {
      duration: 1.2,
      delay: 0.2 + index * 0.12,
      ease: 'easeOut',
    })
    return controls.stop
  }, [inView, count, theme.pct, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      className={`flex items-center gap-4 p-4 rounded-sm border ${palette.bg} ${palette.border}`}
    >
      {/* Donut progress */}
      <div className="relative w-14 h-14 shrink-0">
        <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
          <circle cx="28" cy="28" r={radius} fill="none" strokeWidth="4" className="stroke-stone-200 dark:stroke-slate-700/50" />
          <motion.circle
            cx="28" cy="28" r={radius} fill="none" strokeWidth="4" strokeLinecap="round"
            className={palette.ring}
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * (1 - theme.pct / 100) }}
            transition={{ duration: 1.2, delay: 0.2 + index * 0.12, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </svg>
        <div className={`absolute inset-0 flex items-center justify-center text-sm font-bold font-serif ${palette.text}`}>
          <motion.span>{rounded}</motion.span>
        </div>
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold font-serif text-stone-800 dark:text-slate-200 truncate">{theme.theme}</div>
        <ThemeMentionCount target={theme.count} inView={inView} delay={0.2 + index * 0.12} />
      </div>
    </motion.div>
  )
}

// Animated mention count
function ThemeMentionCount({ target, inView, delay }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)} mentions`)
  useEffect(() => {
    if (!inView) return
    const controls = animate(count, target, { duration: 1.2, delay, ease: 'easeOut' })
    return controls.stop
  }, [inView, count, target, delay])
  return (
    <motion.div className="text-[11px] text-stone-500 dark:text-slate-500 mt-0.5">{rounded}</motion.div>
  )
}

// ─── MCP Interactive Comparison (paired transformation rows) ─────────────────
function MCPInteractiveComparison() {
  const pairs = [
    {
      pain: { text: 'Designers work in isolation', detail: 'No shared context between tools' },
      solution: { text: 'Real components in Figma', detail: 'Agency works with production-ready tokens' },
      how: 'MCP exposes the live component library to Figma, so designers pull real, current components - not screenshots.',
    },
    {
      pain: { text: 'Handoffs create delays', detail: '2-3 day turnaround per revision' },
      solution: { text: 'Prototypes in hours, not days', detail: 'Figma Make generates interactive flows' },
      how: 'Figma Make turns static frames into working prototypes that match production behavior - no engineering ticket needed.',
    },
    {
      pain: { text: 'Context lost between tools', detail: 'Specs diverge from implementation' },
      solution: { text: 'Design tokens auto sync', detail: 'Single source of truth across all tools' },
      how: 'Tokens flow bidirectionally through MCP. Change a value in Figma; it reaches the codebase. Change it in code; designers see it next refresh.',
    },
  ]

  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <div>
      {/* Column headers (desktop) */}
      <div className="hidden md:grid grid-cols-2 gap-4 mb-4 items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-slate-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-stone-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-stone-700 dark:text-slate-300 font-serif">Before MCP</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 font-serif">With MCP + Figma Make</span>
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        {pairs.map((pair, i) => {
          const isActive = hoveredIdx === i
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setHoveredIdx(i)}
              onBlur={() => setHoveredIdx(null)}
              tabIndex={0}
              role="button"
              aria-label={`Pain: ${pair.pain.text}. Solution: ${pair.solution.text}`}
              className="group grid md:grid-cols-2 gap-3 md:gap-4 items-start cursor-pointer focus:outline-none"
            >
              {/* PAIN */}
              <div className={`relative bg-white dark:bg-slate-900/60 border rounded-xl p-4 transition-all ${
                isActive
                  ? 'border-stone-300 dark:border-slate-600 shadow-md'
                  : 'border-stone-200 dark:border-slate-700/50'
              }`}>
                <div className="flex items-start gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs transition-colors ${
                    isActive
                      ? 'bg-stone-700 dark:bg-slate-600 text-white'
                      : 'bg-stone-100 dark:bg-slate-800 text-stone-500 dark:text-slate-400'
                  }`}>
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-stone-800 dark:text-slate-200 font-serif">{pair.pain.text}</p>
                    <p className="text-xs text-stone-500 dark:text-slate-500 mt-0.5">{pair.pain.detail}</p>
                  </div>
                </div>
              </div>

              {/* SOLUTION */}
              <div className={`relative bg-white dark:bg-slate-900/60 border rounded-xl p-4 transition-all ${
                isActive
                  ? 'border-emerald-300 dark:border-emerald-500/40 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-200 dark:ring-emerald-500/20'
                  : 'border-stone-200 dark:border-slate-700/50 opacity-60'
              }`}>
                <div className="flex items-start gap-3">
                  <motion.span
                    animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? 'bg-emerald-500 dark:bg-emerald-400 text-white'
                        : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold font-serif transition-colors ${
                      isActive ? 'text-emerald-700 dark:text-emerald-300' : 'text-stone-700 dark:text-slate-300'
                    }`}>{pair.solution.text}</p>
                    <p className="text-xs text-stone-500 dark:text-slate-500 mt-0.5">{pair.solution.detail}</p>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed border-l-2 border-emerald-500 dark:border-emerald-400 pl-3 italic">
                            {pair.how}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Hint */}
      <p className="text-xs text-stone-400 dark:text-slate-600 mt-4 italic">Hover any row to see how MCP solved it.</p>
    </div>
  )
}

// ─── MCP Stat Card (count-up + themed) ───────────────────────────────────────
function MCPStatCard({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${stat.suffix}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, stat.value, {
      duration: 1.2,
      delay: 0.2 + index * 0.12,
      ease: 'easeOut',
    })
    return controls.stop
  }, [inView, count, stat.value, index])

  const palette = {
    rose: { icon: 'text-rose-900 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/20', ring: 'group-hover:ring-rose-900/20 dark:group-hover:ring-rose-700/30' },
    gold: { icon: 'text-yellow-700 dark:text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-600/20', ring: 'group-hover:ring-yellow-700/20 dark:group-hover:ring-yellow-600/30' },
    emerald: { icon: 'text-emerald-700 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20', ring: 'group-hover:ring-emerald-700/20 dark:group-hover:ring-emerald-500/30' },
  }[stat.tone]

  const Icon = stat.icon
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group text-center bg-white dark:bg-slate-900/60 border border-stone-200 dark:border-slate-700/50 rounded-xl py-8 px-4 shadow-sm dark:shadow-none ring-1 ring-transparent ${palette.ring} transition-all`}
    >
      <div className="flex justify-center mb-3">
        <div className={`w-12 h-12 rounded-xl ${palette.bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${palette.icon}`} strokeWidth={2} />
        </div>
      </div>
      <motion.p className="text-4xl font-bold text-gray-900 dark:text-white font-serif">{rounded}</motion.p>
      <p className="text-sm text-stone-600 dark:text-slate-400 mt-1">{stat.label}</p>
    </motion.div>
  )
}

// ─── Setup Plan (swim lanes with sync points) ────────────────────────────────
function SetupPlan() {
  // Sync points - the four recurring feedback loop touchpoints
  const syncs = [
    { title: 'Kickoff Review', detail: 'Goals + guardrails locked in' },
    { title: 'Prototype Review', detail: 'Investigators walk the flows' },
    { title: 'Trust Checkpoint', detail: 'Legal validates AI output' },
    { title: 'Sprint Demo', detail: 'Build reviewed vs. criteria' },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-mono text-yellow-700 dark:text-yellow-600/70 uppercase tracking-[0.2em] mb-3">Research and Setup</p>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4 font-serif leading-tight">
          Aligning stakeholders and agency around feedback loops
        </h2>
        <p className="text-stone-600 dark:text-slate-400 leading-relaxed text-pretty">
          Product, Legal, and Design moved in parallel - pausing at four recurring sync points to share what the AI was learning.
        </p>
      </div>

      {/* Sync points */}
      <div>
        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rotate-45 bg-rose-900 dark:bg-rose-400" />
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-rose-900 dark:text-rose-300 font-bold">Feedback Sync Points</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {syncs.map((sync, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group [perspective:1000px] h-32"
            >
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-stone-50 dark:bg-slate-900/60 border border-stone-200 dark:border-slate-700/60 rounded-sm p-4 flex flex-col justify-center shadow-sm">
                  <div className="text-[10px] font-mono uppercase tracking-wider mb-2 text-yellow-700/70 dark:text-yellow-600/60">Sync {i + 1}</div>
                  <div className="text-base font-bold font-serif text-stone-800 dark:text-slate-200 leading-tight">{sync.title}</div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-rose-900 dark:bg-rose-800 border border-rose-900 dark:border-rose-700 rounded-sm p-4 flex flex-col justify-center shadow-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider mb-2 text-rose-200 whitespace-nowrap">{sync.title}</div>
                  <div className="text-sm text-rose-50 leading-snug font-serif whitespace-nowrap">{sync.detail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Evidence Card (research insight) ──────────────────────────────────────────
function EvidenceCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900/60 border border-stone-200 dark:border-slate-700/50 rounded-lg p-5 hover:border-yellow-600/20 transition-all shadow-sm dark:shadow-none"
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h4 className="font-semibold text-stone-800 dark:text-slate-200 mb-2 font-serif">{title}</h4>
      <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}

// ─── Screen Gallery with browser frame ─────────────────────────────────────────
function ScreenFrame({ children, title, description, bullets }) {
  return (
    <div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl dark:shadow-2xl border border-stone-200 dark:border-slate-700/60 overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-stone-100 dark:bg-slate-950 border-b border-stone-200 dark:border-slate-800 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-stone-300 dark:bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-stone-300 dark:bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-stone-300 dark:bg-slate-700" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white dark:bg-slate-900 rounded-md px-3 py-1 text-xs text-stone-500 dark:text-slate-500 border border-stone-200 dark:border-slate-800 max-w-md">
              investigate.ai
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
      {title && (
        <div className="mt-6 px-1">
          <h3 className="text-xl font-bold text-stone-800 dark:text-slate-200 font-serif">{title}</h3>
          {description && <p className="text-sm text-stone-600 dark:text-slate-400 mt-2">{description}</p>}
          {bullets && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <p className="text-sm text-stone-600 dark:text-slate-400">{b}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Wireframe Sketch Card ─────────────────────────────────────────────────────
function ExhibitCard({ wireframe, index }) {
  const sketchIcons = {
    search: (
      <svg className="w-full h-full" viewBox="0 0 120 80" fill="none">
        <rect x="10" y="10" width="100" height="20" rx="4" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="25" cy="20" r="6" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" />
        <rect x="10" y="40" width="30" height="8" rx="4" className="fill-violet-300/50 dark:fill-violet-500/30" />
        <rect x="45" y="40" width="25" height="8" rx="4" className="fill-amber-300/50 dark:fill-amber-500/30" />
        <rect x="75" y="40" width="35" height="8" rx="4" className="fill-emerald-300/50 dark:fill-emerald-500/30" />
        <rect x="10" y="55" width="100" height="20" rx="4" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1" />
      </svg>
    ),
    results: (
      <svg className="w-full h-full" viewBox="0 0 120 80" fill="none">
        <rect x="10" y="8" width="100" height="18" rx="4" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1" />
        <rect x="85" y="12" width="20" height="10" rx="2" className="fill-violet-300/50 dark:fill-violet-500/30" />
        <text x="90" y="20" className="fill-violet-600 dark:fill-violet-300 text-[8px] font-bold">98%</text>
        <rect x="10" y="30" width="100" height="18" rx="4" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1" />
        <rect x="85" y="34" width="20" height="10" rx="2" className="fill-amber-300/50 dark:fill-amber-500/30" />
        <text x="90" y="42" className="fill-amber-600 dark:fill-amber-300 text-[8px] font-bold">94%</text>
        <rect x="10" y="52" width="100" height="18" rx="4" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1" />
        <rect x="85" y="56" width="20" height="10" rx="2" className="fill-emerald-300/50 dark:fill-emerald-500/30" />
        <text x="90" y="64" className="fill-emerald-600 dark:fill-emerald-300 text-[8px] font-bold">89%</text>
      </svg>
    ),
    summary: (
      <svg className="w-full h-full" viewBox="0 0 120 80" fill="none">
        <rect x="10" y="8" width="100" height="30" rx="4" className="fill-slate-200/50 dark:fill-slate-700/50" />
        <rect x="15" y="13" width="60" height="4" rx="2" className="fill-slate-400 dark:fill-slate-500" />
        <rect x="15" y="21" width="80" height="3" rx="1" className="fill-slate-300 dark:fill-slate-600" />
        <rect x="15" y="27" width="50" height="3" rx="1" className="fill-slate-300 dark:fill-slate-600" />
        <circle cx="95" cy="23" r="8" className="fill-violet-300/50 dark:fill-violet-500/30 stroke-violet-400 dark:stroke-violet-500" strokeWidth="1" />
        <text x="93" y="26" className="fill-violet-600 dark:fill-violet-300 text-[8px] font-bold">1</text>
        <rect x="10" y="45" width="100" height="25" rx="4" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="4 2" />
        <rect x="15" y="50" width="40" height="3" rx="1" className="fill-amber-300/50 dark:fill-amber-500/30" />
        <rect x="15" y="57" width="70" height="3" rx="1" className="fill-slate-300 dark:fill-slate-600" />
        <rect x="15" y="63" width="55" height="3" rx="1" className="fill-slate-300 dark:fill-slate-600" />
      </svg>
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg"
    >
      {/* Sketch Preview */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4 h-32 flex items-center justify-center">
        {sketchIcons[wireframe.sketch]}
      </div>
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{wireframe.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{wireframe.description}</p>
      <div className="space-y-2">
        {wireframe.insights.map((insight, j) => (
          <div key={j} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>{insight}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}


// ─── Main Component ────────────────────────────────────────────────────────────
export default function DesignOpsCaseStudy() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const [activeScreen, setActiveScreen] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 300)
  })

  const screens = [
    {
      id: 'search',
      label: 'Natural Language Search',
      component: <EmptySearchScreen />,
      title: 'Starting Point: Natural Language Input',
      bullets: [
        'Investigators begin with a blank canvas and a simple prompt',
        'Plain English queries replace complex boolean syntax',
        'Example queries guide users toward effective search patterns',
        'Active case context shows document count and last update',
      ],
    },
    {
      id: 'results',
      label: 'AI-Scored Results',
      component: <NLPDocumentSearchScreen />,
      title: 'Results with AI-Generated Analysis',
      bullets: [
        'Auto-extracted search chips let users refine without retyping',
        'Document list shows relevance percentages for quick scanning',
        'AI analysis surfaces key findings with numbered citations',
        'Slide-out panel shows source excerpts without leaving the results view',
      ],
    },
    {
      id: 'investigate',
      label: 'Document Deep Dive',
      component: <InvestigateDocumentScreen />,
      title: 'Verify Any AI Conclusion',
      bullets: [
        'Full document view with highlighted passages from AI citations',
        'Togglable context panel slides in with entities and thread history',
        'Confirm or Flag actions feed back into AI accuracy over time',
        'Navigate between sources without returning to the results list',
      ],
    },
    {
      id: 'verify',
      label: 'Source Verification',
      component: <SourceInspectorScreen />,
      title: 'Source Inspector',
      bullets: [
        'Full document rendering with highlighted excerpts',
        'AI confidence scoring for each citation',
        'One-click navigation between related sources',
        'Contextual entity extraction and thread timeline',
      ],
    },
  ]

  return (
    <div className="bg-white dark:bg-[#0B0F1A]">
      {/* ─── Sticky Nav ─────────────────────────────────────────────────── */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-stone-200 dark:border-yellow-600/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            <Link to="/projects" className="text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-white font-serif">DesignOps Transformation</h2>
            <div className="w-5" />
          </div>
        </div>
      </motion.div>

      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-950">
        {/* Hero Image - Clean, crisp */}
        <div className="relative h-[45vh] min-h-[300px] max-h-[450px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80"
            alt="Wooden gavel on legal documents with law books in background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Back Button */}
          <div className="absolute top-6 left-6 md:left-12 z-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-black/40 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </Link>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Project Title - Full Width */}
            <motion.div
              className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-[20px] p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-4 font-serif">
                DesignOps Transformation
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Aligning agency, engineering, and product teams around an AI-powered document intelligence platform.
              </p>

              {/* Metadata Row */}
              <div className="flex flex-wrap gap-6 md:gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">Role</p>
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">Director of UX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">Team</p>
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">Agency, Engineering, Product, AI/ML</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">Timeline</p>
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">6 months</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills/Tags Cell */}
            <motion.div
              className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-[20px] p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium mb-4">Skills & Methods</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { tag: 'UX Direction', style: 'bg-gradient-to-r from-indigo-500/15 to-violet-500/15 text-indigo-700 dark:text-indigo-200 border border-indigo-300/40 dark:border-indigo-400/40' },
                  { tag: 'Delivery Leadership', style: 'bg-gradient-to-r from-emerald-500/15 to-teal-500/15 text-emerald-700 dark:text-emerald-200 border border-emerald-300/40 dark:border-emerald-400/40' },
                  { tag: 'DesignOps', style: 'bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-700 dark:text-amber-200 border border-amber-300/40 dark:border-amber-400/40' },
                  { tag: 'Agency Management', style: 'bg-gradient-to-r from-rose-500/15 to-pink-500/15 text-rose-700 dark:text-rose-200 border border-rose-300/40 dark:border-rose-400/40' },
                  { tag: 'AI Enablement', style: 'bg-gradient-to-r from-sky-500/15 to-blue-500/15 text-sky-700 dark:text-sky-200 border border-sky-300/40 dark:border-sky-400/40' },
                ].map(({ tag, style }) => (
                  <span key={tag} className={`px-4 py-2 text-sm rounded-full font-medium ${style}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Opening Statement (Problem) ─────────────────────────────────── */}
      <section className="bg-stone-100 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeSection>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4 font-serif leading-tight">
                  Investigators were drowning in documents.
                </h3>
                <p className="text-stone-600 dark:text-slate-400 leading-relaxed mb-6">
                  Legal teams needed to review thousands of documents for each case. Traditional search wasn't enough. They needed AI to surface insights, but they also needed to trust and verify every conclusion.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Manual document review', "Can't trace AI conclusions", 'Information overload', 'Slow verification loops', 'Critical details buried'].map((point, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
              {/* Problem statistics - Exhibits */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
                className="space-y-4"
              >
                {[
                  { label: '10,000+', desc: 'documents per case', icon: Layers },
                  { label: '4-6 hrs', desc: 'per manual search query', icon: Hourglass },
                  { label: '60%', desc: 'of findings missed connections', icon: AlertTriangle },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                    }}
                    whileHover={{ x: -2 }}
                    className="group relative bg-white dark:bg-slate-900/70 border border-stone-200 dark:border-slate-700/60 rounded-sm shadow-sm hover:shadow-md transition-shadow px-5 py-4 flex items-center gap-5 overflow-hidden"
                  >
                    {/* Burgundy left margin rule (legal brief style) */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-900/80 to-rose-900/30 dark:from-rose-700/80 dark:to-rose-700/20" />
                    {/* Exhibit label (roman numeral) */}
                    <div className="flex flex-col items-center justify-center min-w-[42px] border-r border-stone-200 dark:border-slate-700/60 pr-4">
                      <span className="text-[9px] font-serif italic text-yellow-700/70 dark:text-yellow-600/60 uppercase tracking-[0.15em]">Exhibit</span>
                      <span className="text-sm font-serif text-yellow-700 dark:text-yellow-600/80 font-bold">{ROMAN[i].toUpperCase()}</span>
                    </div>
                    {/* Stat */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <stat.icon className="w-5 h-5 text-rose-900 dark:text-rose-400 shrink-0" strokeWidth={2} />
                      <div className="min-w-0">
                        <div className="text-2xl font-bold text-rose-900 dark:text-rose-300 font-serif leading-none">{stat.label}</div>
                        <div className="text-xs text-stone-600 dark:text-slate-400 mt-1 font-serif">{stat.desc}</div>
                      </div>
                    </div>
                    {/* Hover highlight sweep */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 dark:via-yellow-500/5 to-transparent pointer-events-none"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FadeSection>

          <FadeSection delay={0.15}>
            <div className="grid md:grid-cols-2 gap-6">
              <BriefCard
                title="Investigator Pain Points"
                items={[
                  { label: 'Manual document review', impact: 'Hours per query', icon: Clock },
                  { label: "Can't trace AI conclusions", impact: 'Zero trust', icon: XCircle },
                  { label: 'Information overload', impact: 'Critical misses', icon: AlertTriangle },
                  { label: 'Slow verification loops', impact: 'Days delayed', icon: Hourglass },
                ]}
                ruling="System not fit for purpose"
              />
              <BriefCard
                title="Organizational Challenges"
                items={[
                  { label: 'External design agency', impact: 'Handoff friction', icon: Link2Off },
                  { label: 'Competing team priorities', impact: 'Misalignment', icon: Split },
                  { label: 'LLM complexity', impact: 'Trust deficit', icon: Brain },
                  { label: 'No shared design system', impact: 'Inconsistency', icon: Layers },
                ]}
                ruling="Needs orchestration"
              />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Discovery (Research & Setup) ────────────────────────────────── */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeSection>
            <SetupPlan />
          </FadeSection>

          {/* Evidence at Scale */}
          <FadeSection delay={0.15}>
            <p className="text-xs font-mono text-yellow-700 dark:text-yellow-600/70 uppercase tracking-[0.2em] mb-2 mt-20">Evidence at Scale</p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mb-3 font-serif">AI captured patterns from interviews and walkthroughs</h2>
            <p className="text-stone-600 dark:text-slate-400 mb-8 text-pretty">
              Instead of manual synthesis, AI extracted themes from hours of user sessions and stakeholder correspondence.
            </p>
          </FadeSection>

          {/* Flow diagram: Interviews → AI → Themes */}
          <FadeSection delay={0.2}>
            <div className="mb-10 bg-stone-50 dark:bg-slate-900/40 border border-stone-200 dark:border-slate-700/50 rounded-sm px-6 py-8">
              <div className="relative">
                {/* Animated connecting line (desktop only) - sits behind icons at icon vertical center */}
                <div className="hidden md:block absolute left-0 right-0 top-7 pointer-events-none z-0">
                  <svg className="w-full h-2 overflow-visible block" preserveAspectRatio="none" viewBox="0 0 100 2">
                    {/* Base dashed track */}
                    <line
                      x1="16.67" y1="1" x2="83.33" y2="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="text-yellow-700/30 dark:text-yellow-600/30"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Animated draw-in solid line */}
                    <motion.line
                      x1="16.67" y1="1" x2="83.33" y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-rose-900/70 dark:text-rose-400/80"
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
                    />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-stretch md:items-start justify-between gap-6 md:gap-2">
                  {[
                    { icon: FileText, label: 'Interviews & emails', sub: 'Raw user sessions', tone: 'gold' },
                    { icon: Brain, label: 'AI extraction', sub: 'Pain points + quotes', tone: 'rose' },
                    { icon: Sparkles, label: 'Clustered themes', sub: 'Trust, navigation, time', tone: 'gold' },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.18, ease: 'easeOut' }}
                      className="group flex md:flex-1 items-center gap-3 md:flex-col md:text-center md:gap-2 cursor-default"
                    >
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={`relative w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${
                          step.tone === 'rose'
                            ? 'bg-rose-50 dark:bg-rose-900/40 border-rose-900/40 dark:border-rose-700/50 text-rose-900 dark:text-rose-400'
                            : 'bg-yellow-50 dark:bg-yellow-600/20 border-yellow-700/40 dark:border-yellow-600/50 text-yellow-700 dark:text-yellow-500'
                        }`}
                      >
                        <step.icon className="w-6 h-6" strokeWidth={2} />
                        {/* Pulse ring on hover */}
                        <span
                          className={`absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 group-hover:animate-ping ${
                            step.tone === 'rose'
                              ? 'border-rose-900/40 dark:border-rose-700/50'
                              : 'border-yellow-700/40 dark:border-yellow-600/50'
                          }`}
                          style={{ animationDuration: '1.8s' }}
                        />
                      </motion.div>
                      <div className="md:mt-1">
                        <div className="text-sm font-semibold text-stone-800 dark:text-slate-200 font-serif">{step.label}</div>
                        <div className="text-xs text-stone-500 dark:text-slate-500">{step.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>

          {/* AI Pain Point Depositions */}
          <FadeSection delay={0.25}>
            <div className="bg-stone-50 dark:bg-slate-800/30 border border-stone-200 dark:border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-600/10 flex items-center justify-center border border-yellow-200 dark:border-yellow-600/20">
                  <span className="text-sm">📜</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 dark:text-slate-200 font-serif">AI Captured Pain Points</h4>
                  <p className="text-xs text-stone-500 dark:text-slate-500">Automated extraction from user interviews and prototype walkthroughs</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { source: 'Senior Investigator', session: 'Session 3 - 14:32', quote: 'I spend hours clicking through documents just to find one email thread. By the time I find it, I\'ve lost my train of thought.', tags: ['Document navigation', 'Context switching', 'Time pressure'] },
                  { source: 'Compliance Lead', session: 'Prototype Review', quote: 'When the AI shows me a summary, I need to know exactly where that came from. I can\'t present findings I can\'t verify.', tags: ['Source verification', 'Trust in AI', 'Audit trail'] },
                  { source: 'Legal Team Feedback', session: 'Stakeholder Thread', quote: 'The current search returns too many results. We need relevance scoring and the ability to see why a document matched.', tags: ['Search relevance', 'Result overload', 'Match explanation'] },
                ].map((dep, i) => (
                  <DepositionCard key={i} deposition={dep} index={i} />
                ))}
              </div>

              {/* Clustered themes - modern stat tiles */}
              <div className="border-t border-stone-200 dark:border-slate-700/50 pt-6 mt-2">
                <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
                  <h5 className="text-xs font-mono text-stone-500 dark:text-slate-500 uppercase tracking-wider">AI Clustered Themes</h5>
                  <span className="text-[11px] text-stone-400 dark:text-slate-600">43 total mentions across user sessions</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { theme: 'Trust & Verification', count: 18, pct: 42, color: 'rose' },
                    { theme: 'Navigation & Context', count: 14, pct: 33, color: 'gold' },
                    { theme: 'Time Efficiency', count: 11, pct: 25, color: 'emerald' },
                  ].map((t, i) => {
                    const palette = {
                      rose: { ring: 'stroke-rose-900 dark:stroke-rose-400', text: 'text-rose-900 dark:text-rose-300', bg: 'bg-rose-50/60 dark:bg-rose-900/10', border: 'border-rose-900/20 dark:border-rose-700/30' },
                      gold: { ring: 'stroke-yellow-600 dark:stroke-yellow-500', text: 'text-yellow-700 dark:text-yellow-500', bg: 'bg-yellow-50/60 dark:bg-yellow-600/10', border: 'border-yellow-700/20 dark:border-yellow-600/30' },
                      emerald: { ring: 'stroke-emerald-700 dark:stroke-emerald-400', text: 'text-emerald-700 dark:text-emerald-400', bg: 'bg-emerald-50/60 dark:bg-emerald-900/10', border: 'border-emerald-900/20 dark:border-emerald-700/30' },
                    }[t.color]
                    return (
                      <ThemeStatTile key={i} theme={t} palette={palette} index={i} />
                    )
                  })}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Exhibits (Early Concepts / Wireframes) ──────────────────────── */}
      <section className="bg-stone-100 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-violet-500/20 rounded-full text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">
                Design Evolution
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                From research insights to design direction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                User feedback drove our early explorations. Before committing to high-fidelity designs, we sketched concepts that addressed the core pain points: finding relevant documents, understanding AI reasoning, and verifying conclusions.
              </p>
            </div>

            {/* Wireframe Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <ExhibitCard index={0} wireframe={{
                sketch: 'search',
                title: 'Search Input Exploration',
                description: 'How might investigators express complex queries in natural language?',
                insights: ['Users wanted to type questions, not boolean operators', 'Auto-extracted chips helped refine without retyping'],
              }} />
              <ExhibitCard index={1} wireframe={{
                sketch: 'results',
                title: 'Results + Relevance',
                description: 'Surfacing documents with confidence scores investigators could trust.',
                insights: ['Percentage match gave quick scan ability', 'Document type icons aided recognition'],
              }} />
              <ExhibitCard index={2} wireframe={{
                sketch: 'summary',
                title: 'Summary + Citation Flow',
                description: 'Connecting AI conclusions back to source material.',
                insights: ['Inline citations were essential for trust', 'One click to verify any claim'],
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Agency Tooling (MCP + Figma Make) ───────────────────────────── */}
      <section className="bg-stone-50 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeSection>
            <p className="text-xs font-mono text-yellow-700 dark:text-yellow-600/70 uppercase tracking-[0.2em] mb-2">Bridging Design and Development</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3 font-serif">MCP servers and Figma Make</h2>
            <p className="text-stone-600 dark:text-slate-400 mb-12 text-pretty">
              Transformed our external agency partnership - eliminating the handoff friction that usually plagues outsourced design work.
            </p>
          </FadeSection>

          <FadeSection delay={0.1}>
            <MCPInteractiveComparison />
          </FadeSection>

          <FadeSection delay={0.2}>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: 70, suffix: '%', label: 'Less handoff friction', icon: RefreshCw, tone: 'rose' },
                { value: 3, suffix: 'x', label: 'Faster prototyping', icon: Sparkles, tone: 'gold' },
                { value: 1, suffix: '', label: 'Source of truth', icon: Layers, tone: 'emerald' },
              ].map((stat, i) => (
                <MCPStatCard key={i} stat={stat} index={i} />
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Evidence Presentation (Final Screens) ───────────────────────── */}
      <section className="bg-stone-100 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeSection>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3 font-serif">The platform in action</h2>
            <p className="text-stone-600 dark:text-slate-400 mb-12 text-pretty">
              Four interconnected screens that let investigators search naturally, trust AI conclusions, and verify any claim with one click.
            </p>
          </FadeSection>

          {/* Screen selector tabs */}
          <FadeSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeScreen === i
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-white dark:bg-slate-800/60 text-stone-600 dark:text-slate-400 border border-stone-200 dark:border-slate-700/50 hover:text-stone-900 dark:hover:text-slate-200 hover:border-stone-300 dark:hover:border-slate-600'
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>

            <ScreenFrame
              title={screens[activeScreen].title}
              bullets={screens[activeScreen].bullets}
            >
              {screens[activeScreen].component}
            </ScreenFrame>
          </FadeSection>
        </div>
      </section>

      {/* ─── Validating the Experience (QA) ───────────────────────────────── */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeSection>
            <p className="text-xs font-mono text-yellow-700 dark:text-yellow-600/70 uppercase tracking-[0.2em] mb-2">Validating the Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3 font-serif">Testing every interface against investigator workflows</h2>
            <p className="text-stone-600 dark:text-slate-400 mb-12 text-pretty">
              With high-fidelity designs in staging, we ran hands-on QA sessions to validate that the interfaces above worked exactly as intended - from search input to citation verification.
            </p>
          </FadeSection>

          <FadeSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '👁️', title: 'Interface walkthrough testing', description: 'Tested each screen flow: natural language input, relevance filtering, document selection, and citation verification. Caught edge cases where results didn\'t match the query context.' },
                { icon: '✅', title: 'AI response validation', description: 'Verified that AI summaries accurately reflected source documents. When citations didn\'t match highlighted excerpts, we logged issues and iterated with engineering.' },
                { icon: '🎨', title: 'Visual consistency review', description: 'Flagged spacing issues, color inconsistencies, and component states that didn\'t match the Figma specs. Design tokens from MCP kept most styling aligned.' },
                { icon: '👥', title: 'Stakeholder sign-off sessions', description: 'Ran live demos with legal leads to confirm the search-to-verify flow met their investigation workflow. Their feedback shaped final refinements.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900/60 border border-stone-200 dark:border-slate-700/50 rounded-lg p-6 hover:border-yellow-500 dark:hover:border-yellow-600/20 transition-all shadow-sm dark:shadow-none"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-stone-800 dark:text-slate-200 mb-2 font-serif">{item.title}</h4>
                  <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── LLM Integration Practice ────────────────────────────────────── */}
      <section className="bg-stone-100 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeSection>
            <p className="text-xs font-mono text-yellow-700 dark:text-yellow-600/70 uppercase tracking-[0.2em] mb-2">LLM Integration Practice</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3 font-serif">Three pillars of trustworthy AI</h2>
            <p className="text-stone-600 dark:text-slate-400 mb-12 text-pretty">
              Natural dialogue, traceable citations, and source verification made the AI experience something investigators could rely on.
            </p>
          </FadeSection>

          <FadeSection delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: '💬',
                  title: 'Dialogue Flow',
                  tagline: 'Natural conversation with AI',
                  description: 'Users ask questions in plain English, AI returns scored results with summaries',
                  color: 'indigo',
                  input: '"Show communications about revenue recognition"',
                  output: '847 documents \u2022 AI synthesis \u2022 Key findings',
                },
                {
                  icon: '📎',
                  title: 'Citation System',
                  tagline: 'Every AI claim is traceable',
                  description: 'Numbered markers connect conclusions to source documents instantly',
                  color: 'amber',
                  input: '"AI finding: CFO requested acceleration"',
                  output: '[1] links to email excerpt',
                },
                {
                  icon: '🔍',
                  title: 'Source Inspector',
                  tagline: 'Trust but verify',
                  description: 'One click reveals the exact text that informed each AI conclusion',
                  color: 'emerald',
                  input: '"Click citation [1]"',
                  output: 'Highlighted excerpt + context',
                },
              ].map((pillar, i) => {
                const colorMap = {
                  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', accent: 'bg-indigo-500/15' },
                  amber: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', accent: 'bg-yellow-500/15' },
                  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', accent: 'bg-emerald-500/15' },
                }
                const c = colorMap[pillar.color]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`${c.bg} border ${c.border} rounded-xl p-6`}
                  >
                    <div className="text-2xl mb-3">{pillar.icon}</div>
                    <h4 className="font-semibold text-stone-800 dark:text-slate-200 mb-1 font-serif">{pillar.title}</h4>
                    <p className={`text-xs ${c.text} mb-3`}>{pillar.tagline}</p>
                    <p className="text-sm text-stone-600 dark:text-slate-400 mb-4">{pillar.description}</p>
                    <div className="space-y-2">
                      <div className={`${c.accent} rounded-lg px-3 py-2`}>
                        <p className="text-[10px] text-stone-500 dark:text-slate-500 uppercase mb-0.5">Input</p>
                        <p className="text-xs text-stone-700 dark:text-slate-300">{pillar.input}</p>
                      </div>
                      <div className="bg-stone-100 dark:bg-slate-800/60 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-stone-500 dark:text-slate-500 uppercase mb-0.5">Output</p>
                        <p className="text-xs text-stone-700 dark:text-slate-300">{pillar.output}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </FadeSection>

          {/* Code Review Viewer */}
          <FadeSection delay={0.2}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 dark:text-slate-200 font-serif">LLM Response Handling in Practice</h4>
                  <p className="text-xs text-stone-500 dark:text-slate-500">This is a fictional code example created for demonstration purposes only - not actual production code. It illustrates the design patterns we used for AI summaries and citations to support trust and verification.</p>
                </div>
              </div>
            </div>
            <CodeReviewViewer variant="investigation" />
          </FadeSection>
        </div>
      </section>

      {/* ─── How We Got Here (AI SDLC Pipeline) ──────────────────────────── */}
      <section className="bg-stone-50 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeSection>
            <p className="text-xs font-mono text-yellow-700 dark:text-yellow-600/70 uppercase tracking-[0.2em] mb-2">How We Got Here</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-3 font-serif">A repeatable AI SDLC approach</h2>
          </FadeSection>

          {/* Pipeline steps */}
          <FadeSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { step: '1', title: 'Interview', output: 'Raw transcripts', icon: '🎙️' },
                { step: '2', title: 'AI Synthesis', output: 'User stories', icon: '✨' },
                { step: '3', title: 'Validation', output: 'Tech constraints', icon: '✅' },
                { step: '4', title: 'Translation', output: 'Business impact', icon: '📊' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900/60 border border-stone-200 dark:border-slate-700/50 rounded-lg p-5 text-center relative shadow-sm dark:shadow-none"
                >
                  <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center">{item.step}</div>
                  <div className="text-2xl mb-2 mt-2">{item.icon}</div>
                  <h4 className="font-semibold text-stone-800 dark:text-slate-200 text-sm font-serif">{item.title}</h4>
                  <p className="text-xs text-stone-500 dark:text-slate-500 mt-1">{item.output}</p>
                </motion.div>
              ))}
            </div>
          </FadeSection>

          {/* User Need → Business Impact examples */}
          <FadeSection delay={0.15}>
            <div className="space-y-4 mb-12">
              {[
                { need: '"As an investigator, I need to see why AI flagged this document"', impact: 'Citation system reduces investigation time by 40%' },
                { need: '"I need to verify AI conclusions before presenting to counsel"', impact: 'Source Inspector increases confidence in AI assisted findings' },
                { need: '"Searching returns too many irrelevant documents"', impact: 'Relevance scoring prioritizes high value evidence first' },
              ].map((ex, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900/40 border border-stone-200 dark:border-slate-700/40 rounded-lg px-5 py-3 shadow-sm dark:shadow-none">
                    <p className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">User Need</p>
                    <p className="text-sm text-stone-700 dark:text-slate-300 italic">{ex.need}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900/40 border border-emerald-200 dark:border-emerald-500/20 rounded-lg px-5 py-3 shadow-sm dark:shadow-none">
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Business Impact</p>
                    <p className="text-sm text-stone-700 dark:text-slate-300">{ex.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* AI-Integrated Delivery Lifecycle (WorkflowDiagram) */}
          <FadeSection delay={0.2}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 dark:text-slate-200 font-serif">AI-Integrated Delivery Lifecycle</h4>
                  <p className="text-xs text-stone-500 dark:text-slate-500">How I applied AI tooling at every phase of the SDLC - from stakeholder discovery through release - to deliver a complex platform ahead of schedule with a small team.</p>
                </div>
              </div>
            </div>
            <WorkflowDiagram variant="designops" />
          </FadeSection>
        </div>
      </section>

      {/* ─── Closing Arguments (Outcome) ─────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80"
          alt="Vintage leather-bound books on a shelf"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-[#0B0F1A]/92" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
          <FadeSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif">From Drowning to Discovery</h2>
            <p className="text-lg text-slate-300 mb-12">AI transformed how investigators work with documents</p>
          </FadeSection>

          {/* Before/After */}
          <FadeSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-rose-400">Before: Manual Search</h3>
                    <p className="text-xs text-slate-500">Hours per query</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Investigators clicking through thousands of documents, losing context, missing connections.
                </p>
              </div>
              <div className="bg-slate-900/70 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-indigo-400">After: AI Discovery</h3>
                    <p className="text-xs text-slate-500">Minutes per query</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Natural language search surfaces relevant documents instantly, with AI summaries and source verification.
                </p>
              </div>
            </div>
          </FadeSection>

          {/* How I Led AI-Augmented Delivery */}
          <FadeSection delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-6 font-serif">How I Led AI-Augmented Delivery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/70 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-indigo-400">AI Accelerated</span>
                </div>
                <ul className="space-y-2">
                  {['Interview synthesis', 'User story generation', 'Design-code sync', 'Communication drafts'].map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900/70 backdrop-blur-sm border border-yellow-600/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-semibold text-yellow-400">I Directed</span>
                </div>
                <ul className="space-y-2">
                  {['Research orchestration', 'Agency trust-building', 'LLM decision-making', 'Executive alignment'].map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── CTA / Navigation ────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#0B0F1A] py-16 border-t border-stone-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="text-stone-600 dark:text-slate-400 mb-6">Interested in how I approach AI-enabled delivery?</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 dark:border-slate-700 text-stone-700 dark:text-slate-300 rounded-lg font-medium hover:border-stone-500 dark:hover:border-slate-500 hover:text-stone-900 dark:hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Projects
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors">
              Work With Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
