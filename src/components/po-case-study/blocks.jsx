// Content blocks used inside Product Owner case study sections.
// Each block takes plain data from a case study object (see poCaseStudyTemplate).
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Megaphone, FlaskConical, ArrowDown, ArrowRight, ChevronDown, FileText, TrendingUp, Scale, Clock, CircleDollarSign, Eye, Workflow, Users, ChartColumn, Sparkles, Search } from 'lucide-react'

const label = 'text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400'
const body = 'text-gray-700 dark:text-gray-300 leading-relaxed'
const panel = 'rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'

// Decision anchors, so discovery cards can link to the decision they led to
function decisionId(name) {
  return 'decision-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function scrollToDecision(name) {
  const el = document.getElementById(decisionId(name))
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.animate(
    [{ boxShadow: '0 0 0 3px rgba(20, 184, 166, 0.6)' }, { boxShadow: '0 0 0 0 rgba(20, 184, 166, 0)' }],
    { duration: 1600, delay: 400, easing: 'ease-out' }
  )
}

export function Paragraph({ children }) {
  return <p className={`${body} text-lg`}>{children}</p>
}

export function MetricStrip({ metrics, tone = 'light' }) {
  if (!metrics?.length) return null
  const onDark = tone === 'dark'
  return (
    <div className={`grid gap-4 mt-8 ${metrics.length === 3 ? 'sm:grid-cols-3' : metrics.length === 1 ? '' : 'sm:grid-cols-2'}`}>
      {metrics.map((metric, i) => (
        <div key={i} className={onDark ? 'rounded-xl border border-white/10 bg-white/5 p-5' : `${panel} p-5`}>
          <p className={`font-display text-4xl tracking-wide ${onDark ? 'text-primary-300' : 'text-primary-600 dark:text-primary-400'}`}>{metric.value}</p>
          <p className={`mt-1 text-sm font-medium ${onDark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{metric.label}</p>
          {metric.baseline && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{metric.baseline}</p>}
        </div>
      ))}
    </div>
  )
}

export function BulletList({ items }) {
  if (!items?.length) return null
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item, i) => (
        <li key={i} className={`flex gap-3 ${body}`}>
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// Navy summary card. A single highlight sits beside the text on wider screens.
export function SummaryCard({ summary, metrics }) {
  const single = metrics?.length === 1
  return (
    <div className={`rounded-2xl bg-navy-900 dark:bg-gray-800 p-6 md:p-8 ${single ? 'md:grid md:grid-cols-[1fr_11rem] md:items-center md:gap-8' : ''}`}>
      <p className="text-lg md:text-xl text-white leading-relaxed">{summary}</p>
      {single ? (
        <div className="mt-6 md:mt-0 rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="font-display text-5xl leading-none tracking-wide text-primary-300">{metrics[0].value}</p>
          <p className="mt-2 text-sm font-medium text-white">{metrics[0].label}</p>
        </div>
      ) : (
        <MetricStrip metrics={metrics} tone="dark" />
      )}
    </div>
  )
}

const problemIcons = { users: Users, document: FileText, trend: TrendingUp, legal: Scale }

// "Problem at a glance": a one-line lead, icon stat tiles, and constraint chips.
export function ProblemGlance({ statement, metrics, constraints }) {
  return (
    <div className="mt-10">
      {statement && <p className="text-xl md:text-2xl font-medium leading-snug text-gray-900 dark:text-white">{statement}</p>}
      {metrics?.length > 0 && (
        <div className={`mt-6 grid gap-4 ${metrics.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {metrics.map((metric, i) => {
            const Icon = problemIcons[metric.icon] || FileText
            return (
              <div key={i} className={`${panel} p-5`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/50 ring-1 ring-primary-100 dark:ring-primary-800">
                  <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </span>
                <p className="mt-4 font-display text-4xl leading-none tracking-wide text-navy-900 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
              </div>
            )
          })}
        </div>
      )}
      {constraints?.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className={`${label} mr-1`}>Constraints</span>
          {constraints.map(item => (
            <span key={item} className="rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}


// The ask as a large quote, its built-in assumption as a hypothesis, and a
// link down to the section where discovery tested it.
export function InitialRequestCard({ requestedBy, request, assumption, revealId }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary-200 dark:border-primary-800 bg-gradient-to-br from-primary-50 via-white to-white dark:from-primary-900/40 dark:via-gray-800 dark:to-gray-800">
      <span aria-hidden="true" className="pointer-events-none absolute top-4 right-6 font-serif text-[9rem] leading-[0.75] text-primary-200/70 dark:text-primary-800/60 select-none">
        ”
      </span>
      <div className="relative p-6 md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-900 border border-primary-200 dark:border-primary-800 px-3 py-1.5 shadow-sm">
          <Megaphone className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-700 dark:text-gray-300">{requestedBy} asked</span>
        </div>
        <blockquote className="mt-5 text-2xl md:text-3xl font-semibold leading-tight text-navy-900 dark:text-white">
          “{request}”
        </blockquote>

        {assumption && (
          <div className="mt-8 rounded-xl border-2 border-dashed border-amber-300 dark:border-amber-500/50 bg-amber-50/80 dark:bg-amber-500/10 p-5 flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20">
              <FlaskConical className="w-5 h-5 text-amber-700 dark:text-amber-300" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-800 dark:text-amber-300">Hypothesis to test</p>
              <p className="mt-1 text-gray-800 dark:text-gray-200 leading-relaxed">{assumption}</p>
            </div>
          </div>
        )}

        {revealId && (
          <button
            type="button"
            onClick={() => document.getElementById(revealId)?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-700 dark:text-primary-300 hover:underline"
          >
            See what discovery found
            <ArrowDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}

const discoveryIcons = { observe: Eye, workflow: Workflow, users: Users, data: ChartColumn, ai: Sparkles, search: Search }

// Bento grid of discovery activities. Each activity can show a headline
// `stat` + `statLabel` (falls back to `scope`) and an `icon` key from
// discoveryIcons. With an odd count, the first card spans the full width.
// Cards use the same navy as the summary card for contrast; keep findings to
// a similar length (about 70 characters) so the cards line up. `ledTo` lists
// the solutions (matching a decision's `solution`) the activity led to.
export function DiscoveryTable({ activities }) {
  const featureFirst = activities.length % 2 === 1
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {activities.map((activity, i) => {
        const Icon = discoveryIcons[activity.icon] || Search
        const featured = featureFirst && i === 0
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-navy-800 dark:border-white/10 bg-navy-900 dark:bg-gray-800 p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary-400/60 hover:shadow-[0_12px_40px_-12px_rgba(13,148,136,0.45)] ${featured ? 'sm:col-span-2' : ''}`}
          >
            <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary-400/20 blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
            <div className={`relative ${featured ? 'sm:grid sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8 sm:items-center' : ''}`}>
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-400/15 ring-1 ring-primary-400/30">
                    <Icon className="h-5 w-5 text-primary-300" />
                  </span>
                  {activity.stat && (
                    <p className="font-display text-5xl leading-none tracking-wide bg-gradient-to-br from-primary-200 to-primary-400 bg-clip-text text-transparent">
                      {activity.stat}
                    </p>
                  )}
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                  {activity.statLabel || activity.scope}
                </p>
              </div>
              <div className={featured ? 'mt-5 sm:mt-0' : 'mt-5'}>
                <h3 className="font-semibold text-white">{activity.method}</h3>
                <p className="mt-2 border-l-2 border-primary-400/60 pl-3 text-sm leading-relaxed text-gray-300">
                  {activity.finding}
                </p>
                {activity.ledTo?.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">Led to</span>
                    {activity.ledTo.map(name => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => scrollToDecision(name)}
                        className="inline-flex items-center gap-1 rounded-full bg-primary-400/10 px-2.5 py-1 text-xs font-medium text-primary-200 ring-1 ring-primary-400/25 transition-colors hover:bg-primary-400/20 hover:text-white"
                      >
                        {name}
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

const avatarGradients = [
  'from-primary-400 to-primary-700',
  'from-sky-400 to-indigo-600',
  'from-amber-400 to-rose-500',
  'from-violet-400 to-fuchsia-600',
]

const initialsSkip = ['and', 'of', 'the']

function initials(name) {
  return name
    .split(/\s+/)
    .filter(word => /^[A-Za-z]/.test(word) && !initialsSkip.includes(word.toLowerCase()))
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('')
}

export function StakeholderList({ stakeholders }) {
  if (!stakeholders?.length) return null
  return (
    <div className="mt-10">
      <p className={`${label} mb-4`}>Stakeholders engaged</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {stakeholders.map((stakeholder, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-gray-50/80 dark:bg-gray-800/60 p-5">
            <div className="flex items-center gap-3">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} text-sm font-semibold text-white shadow-sm ring-2 ring-white dark:ring-gray-900`}>
                {initials(stakeholder.group)}
              </span>
              <p className="font-semibold leading-snug text-gray-900 dark:text-white">{stakeholder.group}</p>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">Needed to</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{stakeholder.need}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function RootCause({ rootCause, evidence, reframe }) {
  return (
    <>
      <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white leading-snug">{rootCause}</p>
      <BulletList items={evidence} />
      {reframe && (
        <div className="mt-8 rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 p-5">
          <p className={label}>Reframed problem</p>
          <p className="mt-2 text-lg text-gray-900 dark:text-white">{reframe}</p>
        </div>
      )}
    </>
  )
}

// Decision cards, one per product screen: the screen name as the title, then
// each discovery → solution pair it answers, then the design (open by default,
// collapsible). `designs` maps a card's `design` key to the screen or demo.
export function DecisionChains({ decisions, designs = {} }) {
  return (
    <div className="space-y-4">
      {decisions.map((card, i) => (
        <DecisionCard key={i} card={card} design={designs[card.design]} />
      ))}
    </div>
  )
}

function DecisionCard({ card, design }) {
  const [open, setOpen] = useState(true)

  return (
    <article className={`${panel} scroll-mt-28 overflow-hidden rounded-2xl`}>
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
          {design && (
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? `Collapse ${card.title} design` : `Expand ${card.title} design`}
              title={open ? 'Collapse design' : 'Expand design'}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 transition-colors hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-300"
            >
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>

        <div className="mt-5 space-y-6">
          {card.decisions.map(item => (
            <div key={item.solution} id={decisionId(item.solution)} className="scroll-mt-28 rounded-xl">
              <div className="rounded-xl bg-amber-50/70 dark:bg-amber-500/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 dark:text-amber-300">
                  Discovery
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{item.discovery}</p>
              </div>
              <div className="mt-4 px-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-700 dark:text-primary-300">
                  Solution
                </p>
                <p className="mt-2 font-semibold text-gray-900 dark:text-white">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {design && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-200 dark:border-gray-700 px-5 md:px-6 pt-5 pb-6">
                {card.caption && <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{card.caption}</p>}
                {design}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </article>
  )
}

const stakeIcons = { legal: Scale, time: Clock, cost: CircleDollarSign, users: Users, trend: TrendingUp }

// The stakes as icon bullets, with an optional navy callout for the point
// that ties them together.
export function StakesList({ items, callout }) {
  return (
    <>
      {items?.length > 0 && (
        <ul className={`${panel} divide-y divide-gray-200 dark:divide-gray-700`}>
          {items.map((item, i) => {
            const Icon = stakeIcons[item.icon] || Scale
            return (
              <li key={i} className="flex gap-4 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/50 ring-1 ring-primary-100 dark:ring-primary-800">
                  <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.detail}</p>
                </div>
              </li>
            )
          })}
        </ul>
      )}
      {callout && (
        <div className="mt-4 rounded-2xl bg-navy-900 dark:bg-gray-800 px-6 py-5">
          <p className="text-lg text-white leading-relaxed">{callout}</p>
        </div>
      )}
    </>
  )
}

// Before → after scorecard. Each row pairs a baseline with its result, closing
// the loop on the business problem. Stacks on small screens.
export function Scorecard({ rows }) {
  if (!rows?.length) return null
  return (
    <div className={`${panel} overflow-hidden`}>
      <div className="hidden sm:grid grid-cols-[1.2fr_1fr_1fr] gap-6 bg-gray-50 dark:bg-gray-900/40 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
        <span className={label}>Measure</span>
        <span className={label}>Before</span>
        <span className={`${label} !text-primary-700 dark:!text-primary-300`}>After</span>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {rows.map((row, i) => (
          <li key={i} className="grid gap-1 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-6 px-6 py-3.5 sm:items-center transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{row.label}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="sm:hidden">Before: </span>{row.before}
            </p>
            <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              <span className="sm:hidden font-normal text-gray-500 dark:text-gray-400">After: </span>{row.after}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Paired quotes showing how what people said changed, before → after.
export function QuotePairs({ title, pairs }) {
  if (!pairs?.length) return null
  return (
    <div className="mt-10">
      <p className={`${label} mb-4`}>{title}</p>
      <ul className="space-y-3">
        {pairs.map((pair, i) => (
          <li key={i} className="grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3.5">
            <p className="text-sm italic text-gray-500 dark:text-gray-400">“{pair.before}”</p>
            <ArrowRight className="hidden sm:block h-4 w-4 text-primary-400" />
            <p className="text-sm font-medium italic text-gray-900 dark:text-white">“{pair.after}”</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Titled one-to-two sentence items. Used for engineering practices and takeaways.
export function TitledList({ items, columns = 2 }) {
  return (
    <div className={`grid gap-4 ${columns === 3 ? 'sm:grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item, i) => (
        <div key={i} className={`${panel} p-5`}>
          <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>
  )
}
