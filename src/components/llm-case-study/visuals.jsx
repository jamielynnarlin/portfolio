// Supporting visuals for the Conversational Document Review case study:
// prototype screens, interactive feature demos, and research/results panels.
// Content comes from caseStudies['llm-integration-strategy'].
import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Shield, Users, Search, Clock, Gauge, RefreshCw, CheckCircle2, Target, Layers } from 'lucide-react'
import { caseStudies } from '../../data/caseStudies'
import {
  EDiscoveryDashboard,
  EDiscoveryReviewQueue,
  EDiscoveryReviewParams,
  SentimentBrush,
} from '../PrototypeScreens'

const study = caseStudies['llm-integration-strategy']
const [, painPointsSection, , , prototypeSection] = study.process

// ─── Pain point card with flip ─────────────────────────────────────────────────
// Front: the stakeholder's pain point. Back (navy): the requirement it drove.
// Both faces share one grid cell so the card is as tall as the longer face.
const faceStyle = { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }

function PainPointCard({ story, index }) {
  const [flipped, setFlipped] = useState(false)
  const iconMap = { clock: Clock, clipboard: FileText, route: Target, shield: Shield, search: Search, gavel: Shield }
  const Icon = iconMap[story.icon] || Users

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.button
        type="button"
        onClick={() => setFlipped(!flipped)}
        aria-pressed={flipped}
        aria-label={`${story.role}: ${flipped ? 'show pain point' : 'show the requirement it drove'}`}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="grid h-full w-full text-left cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      >
        {/* Front */}
        <div
          style={faceStyle}
          className="[grid-area:1/1] flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-shadow hover:shadow-lg"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-red-500 dark:text-red-400" />
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{story.role}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700/60 px-2 py-1 rounded-full whitespace-nowrap">
              {story.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">"{story.painPoint}"</p>
          <p className="mt-auto pt-4 text-xs font-medium text-primary-600 dark:text-primary-400">Click to see the requirement it drove →</p>
        </div>

        {/* Back */}
        <div
          style={{ ...faceStyle, transform: 'rotateY(180deg)' }}
          className="[grid-area:1/1] flex flex-col bg-navy-900 dark:bg-gray-900 border border-navy-800 dark:border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-400/15 ring-1 ring-primary-400/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Requirement</p>
                <p className="text-xs text-gray-400">For the {story.role.toLowerCase()}</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary-200 bg-white/10 px-2 py-1 rounded-full whitespace-nowrap">
              {story.category}
            </span>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">{story.designResponse}</p>
          <p className="mt-auto pt-4 text-xs font-medium text-gray-400">Click to flip back</p>
        </div>
      </motion.button>
    </motion.div>
  )
}

// ─── Browser-framed prototype screen ───────────────────────────────────────────
// Renders a screen at desktop size and scales the whole thing to the frame's
// width, so nothing is cropped or squashed.
const SCREEN_WIDTH = 1280
const SCREEN_HEIGHT = 680

function BrowserScreen({ children }) {
  const viewportRef = useRef(null)
  const [scale, setScale] = useState(0.5)

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / SCREEN_WIDTH))
    observer.observe(viewportRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-xl">
      <div className="flex items-center gap-3 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 rounded bg-slate-700/60 px-3 py-1 text-[11px] text-slate-400">nexus.ediscovery.ai</div>
      </div>
      <div
        ref={viewportRef}
        className="relative overflow-hidden bg-slate-950 pointer-events-none select-none"
        style={{ height: SCREEN_HEIGHT * scale }}
      >
        <div
          className="absolute left-0 top-0"
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// ─── Feature Spotlight: Cross-Filtering ────────────────────────────────────────
export function CrossFilteringSpotlight() {
  const [brushRange, setBrushRange] = useState(null)

  const allClusters = useMemo(() => [
    { id: 1, label: 'Financial Disclosures', docs: 1234, x: 25, y: 28, color: 'from-teal-400 to-cyan-400', size: 56, activeRange: [0, 20] },
    { id: 2, label: 'Executive Comms', docs: 892, x: 62, y: 22, color: 'from-violet-400 to-indigo-400', size: 44, activeRange: [5, 25] },
    { id: 3, label: 'Audit Reports', docs: 456, x: 74, y: 58, color: 'from-amber-400 to-orange-400', size: 34, activeRange: [10, 29] },
    { id: 4, label: 'Legal Holds', docs: 234, x: 18, y: 68, color: 'from-rose-400 to-pink-400', size: 28, activeRange: [0, 12] },
    { id: 5, label: 'Board Minutes', docs: 189, x: 48, y: 72, color: 'from-emerald-400 to-green-400', size: 24, activeRange: [8, 18] },
  ], [])

  const overlaps = useCallback((itemRange, brush) => {
    if (!brush) return true
    return itemRange[0] <= brush.end && itemRange[1] >= brush.start
  }, [])

  const visibleClusters = useMemo(
    () => allClusters.filter(c => overlaps(c.activeRange, brushRange)),
    [allClusters, brushRange, overlaps]
  )

  return (
    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
      <div className="px-4 py-2.5 border-b border-slate-800 flex items-center gap-2">
        <span className="text-[11px] font-medium text-white">Document Concept Map</span>
      </div>
      <div className="relative p-4" style={{ height: '240px' }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="25%" y1="28%" x2="62%" y2="22%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
          <line x1="62%" y1="22%" x2="74%" y2="58%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
          <line x1="25%" y1="28%" x2="18%" y2="68%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
          <line x1="48%" y1="72%" x2="18%" y2="68%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
          <line x1="62%" y1="22%" x2="48%" y2="72%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
        </svg>
        <AnimatePresence>
        {visibleClusters.map((cluster) => (
          <motion.div
            key={cluster.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-default"
            style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
          >
            <div
              className={`bg-gradient-to-br ${cluster.color} rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110`}
              style={{ width: `${cluster.size}px`, height: `${cluster.size}px` }}
            >
              <span className="text-[9px] font-bold text-slate-900">{cluster.docs}</span>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap">
              <span className="text-[9px] text-slate-400 group-hover:text-white transition-colors">{cluster.label}</span>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
        {brushRange && visibleClusters.length < allClusters.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-2 right-3 text-[9px] text-teal-400 bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20"
          >
            {visibleClusters.length} of {allClusters.length} clusters in range
          </motion.div>
        )}
      </div>
      <div className="px-4 pb-4">
        <SentimentBrush onBrushChange={setBrushRange} />
      </div>
    </div>
  )
}

// ─── Feature Spotlight: Semantic Expansion ─────────────────────────────────────
export function SemanticExpansionSpotlight() {
  const expansions = [
    { keyword: 'revenue', count: 12, terms: ['Earnings', 'GAAP', 'Q4 Reports', 'Revenue Recognition'] },
    { keyword: 'audit', count: 8, terms: ['Audit Committee', 'External Auditor', 'SOX Compliance'] },
    { keyword: 'privilege', count: 6, terms: ['Attorney-Client', 'Work Product', 'Legal Hold'] },
  ]

  return (
    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
      <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-medium text-white">Review Instructions</span>
        <span className="text-[9px] text-violet-400 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
          </svg>
          AI parsing active
        </span>
      </div>
      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {expansions.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full"
            >
              <svg className="w-2.5 h-2.5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              <span className="text-[9px] text-violet-300 font-medium">"{exp.keyword}"</span>
              <span className="text-[9px] text-violet-400">+ {exp.count} related</span>
              <span className="text-[8px] text-slate-500">({exp.terms.slice(0, 2).join(', ')}...)</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-3 px-3 py-2 rounded-lg border bg-blue-500/10 border-blue-500/20 text-blue-400 text-[10px] flex items-center gap-2"
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          "Find all" is broad - "exclude routine" may discard relevant documents
        </motion.div>
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 font-mono text-[11px] text-slate-300 leading-relaxed">
          <p>Find all documents that discuss <span className="text-teal-400 bg-teal-500/10 px-0.5 rounded">revenue</span> recognition timing, Q4 financial results, or communications with external <span className="text-teal-400 bg-teal-500/10 px-0.5 rounded">audit</span>ors.</p>
          <p className="mt-3">Exclude routine operational emails unless they mention "board", "<span className="text-teal-400 bg-teal-500/10 px-0.5 rounded">audit</span> committee", or any executive by name.</p>
          <p className="mt-3">Flag as <span className="text-teal-400 bg-teal-500/10 px-0.5 rounded">privilege</span>d any communication involving legal counsel or marked "Attorney-Client Privilege".</p>
        </div>
        <div className="mt-3 flex items-center justify-between text-[9px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>Words: 47</span>
            <span className="text-slate-700">|</span>
            <span className="text-violet-400">3 semantic expansions active</span>
          </div>
          <span className="px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded text-[8px]">Est. 4,200 docs</span>
        </div>
      </div>
    </div>
  )
}

// ─── Feature Spotlight: Subset Validation ──────────────────────────────────────
export function SubsetValidationSpotlight() {
  const metrics = [
    { label: 'Precision', value: '94.2%', width: 94.2, color: 'from-teal-500 to-cyan-400' },
    { label: 'Recall', value: '91.8%', width: 91.8, color: 'from-violet-500 to-indigo-400' },
    { label: 'F1 Score', value: '0.93', width: 93, color: 'from-amber-500 to-orange-400' },
  ]

  const sampleDocs = [
    { title: 'Q4 Revenue Board Brief', score: 98, tags: ['Revenue', 'Board'], hot: true },
    { title: 'Audit Committee Meeting Notes', score: 94, tags: ['Audit', 'Privilege'], privileged: true },
    { title: 'Executive Travel Reimbursement', score: 12, tags: ['Excluded'], excluded: true },
  ]

  return (
    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
      <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-medium text-white">Subset Test Results</span>
        <span className="text-[9px] text-slate-400">1,000-doc stratified sample</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-slate-900 rounded-lg p-3 border border-slate-800 text-center"
            >
              <p className="text-lg font-bold text-white mb-0.5">{m.value}</p>
              <p className="text-[9px] text-slate-500 mb-2">{m.label}</p>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.width}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="space-y-1.5">
          {sampleDocs.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className={`flex items-center justify-between px-3 py-2 rounded-lg border ${
                doc.excluded ? 'bg-slate-900/50 border-slate-800/50' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  doc.hot ? 'bg-rose-400' : doc.excluded ? 'bg-slate-600' : 'bg-emerald-400'
                }`} />
                <span className={`text-[10px] truncate ${doc.excluded ? 'text-slate-600' : 'text-slate-300'}`}>{doc.title}</span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                {doc.tags.map((tag, j) => (
                  <span key={j} className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${
                    doc.excluded ? 'bg-slate-800 text-slate-600' : 'bg-teal-500/20 text-teal-400'
                  }`}>{tag}</span>
                ))}
                <span className={`text-[10px] font-medium ml-1 ${
                  doc.score > 90 ? 'text-emerald-400' : doc.score > 50 ? 'text-amber-400' : 'text-slate-600'
                }`}>{doc.score}%</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3 text-[9px]">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />94 Relevant</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />8 Privileged</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full" />4 Hot</span>
          </div>
          <div className="h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '93%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Feature Spotlight: Defensibility Audit ────────────────────────────────────
export function DefensibilityAuditSpotlight() {
  const [expandedIdx, setExpandedIdx] = useState(0)

  const exceptions = [
    { type: 'Encrypted PDF', count: 47, icon: '🔒', action: 'Password requested from custodian - 41 resolved, 6 pending', severity: 'warning' },
    { type: 'Password-Protected ZIP', count: 23, icon: '📦', action: 'Submitted to forensics team - all resolved', severity: 'warning' },
    { type: 'Corrupted PST', count: 8, icon: '⚠️', action: 'Recovery attempted - 6 of 8 restored, 2 logged as unrecoverable', severity: 'error' },
  ]

  return (
    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
      <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-medium text-white">Ingestion Health & Audit Trail</span>
        <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-[8px]">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          Defensible
        </span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'Documents Ingested', value: '48,291', status: 'success' },
            { label: 'Processing Exceptions', value: '127', status: 'warning' },
            { label: 'Excluded from Review', value: '0', status: 'success' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900 rounded-lg p-2.5 border border-slate-800"
            >
              <p className={`text-base font-bold ${stat.status === 'warning' ? 'text-amber-400' : 'text-emerald-400'}`}>{stat.value}</p>
              <p className="text-[8px] text-slate-500 mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="space-y-2">
          {exceptions.map((exc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 'auto' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`rounded-lg border overflow-hidden transition-colors cursor-pointer ${
                exc.severity === 'error'
                  ? 'bg-rose-500/10 border-rose-500/20'
                  : 'bg-amber-500/10 border-amber-500/20'
              }`}
              onClick={() => setExpandedIdx(expandedIdx === i ? -1 : i)}
            >
              <div className="px-3 py-2.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-white">
                  <span>{exc.icon}</span> {exc.type}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] ${exc.severity === 'error' ? 'text-rose-400' : 'text-amber-400'}`}>{exc.count} files</span>
                  <svg className={`w-3 h-3 text-slate-500 transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {expandedIdx === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-3 pb-2.5 text-[9px] text-slate-400 border-t border-slate-800/50 pt-2"
                >
                  <p><span className="text-slate-500">Remediation:</span> {exc.action}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-3 px-3 py-2 bg-slate-900 rounded-lg border border-slate-800 text-[9px] text-slate-500 flex items-center gap-2">
          <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          All exceptions documented with chain-of-custody audit trail
        </div>
      </div>
    </div>
  )
}

// ─── Stakeholder pain points → requirements (flip cards) ───────────────────────
export function PainPointGrid() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-3">
        Stakeholder pain points and the requirements they drove
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {painPointsSection.userStoriesSection.stories.map((story, i) => (
          <PainPointCard key={i} story={story} index={i} />
        ))}
      </div>
    </div>
  )
}

// ─── Product designs shown inside the decision chains ──────────────────────────
export function CaseAssessmentDesign() {
  return (
    <div className="space-y-8">
      <BrowserScreen><EDiscoveryDashboard onNavigate={() => {}} onOpenAI={() => {}} /></BrowserScreen>
      <div>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">Drag across the timeline to filter the clusters.</p>
        <CrossFilteringSpotlight />
      </div>
    </div>
  )
}

// Legend for the zoomed-in editor; each sample mirrors the styling in the panel
const protocolLegend = [
  { sample: <span className="rounded bg-teal-500/15 px-1 font-mono text-xs text-teal-700 dark:text-teal-300">revenue</span>, text: 'Concepts the AI detected' },
  { sample: <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-[11px] text-violet-700 dark:text-violet-300">+12 related</span>, text: 'Terms the AI added' },
  { sample: <span className="rounded border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.5 text-[11px] text-blue-700 dark:text-blue-300">Note</span>, text: 'Rules that could miss docs' },
]

export function ProtocolBuilderDesign() {
  return (
    <div className="space-y-8">
      <BrowserScreen><EDiscoveryReviewQueue onNavigate={() => {}} onOpenAI={() => {}} /></BrowserScreen>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Zoomed in</p>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">The editor above, after an attorney writes a protocol.</p>
        <ul className="mt-3 mb-4 grid gap-2 sm:grid-cols-3">
          {protocolLegend.map(item => (
            <li key={item.text} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="shrink-0">{item.sample}</span>
              {item.text}
            </li>
          ))}
        </ul>
        <SemanticExpansionSpotlight />
      </div>
    </div>
  )
}

export function ReviewParametersDesign() {
  return <BrowserScreen><EDiscoveryReviewParams onNavigate={() => {}} onOpenAI={() => {}} /></BrowserScreen>
}

// ─── Prototype call to action and capability summary ───────────────────────────
export function PrototypeCTA() {
  const prototype = prototypeSection.interactivePrototype
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">See it all together</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{prototype.description}</p>
        </div>
        <Link to={prototype.prototypeLink} className="btn-primary whitespace-nowrap text-center">
          Try the prototype →
        </Link>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {prototype.bullets.map(bullet => (
          <div key={bullet} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 sm:whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            {bullet}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Technical constraints worked through with engineering ─────────────────────
const technicalSummaries = [
  { challenge: 'Token limits', icon: Layers, solution: 'Split long documents into chunks, then merged results' },
  { challenge: 'Hallucination', icon: Shield, solution: 'Every AI claim must cite a source passage' },
  { challenge: 'Overconfidence', icon: Gauge, solution: 'Confidence tiers mapped to measured accuracy' },
  { challenge: 'Prompt drift', icon: RefreshCw, solution: 'Each prompt change tested on 500+ labeled docs' },
]

export function TechnicalChallenges() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-3">
        Technical constraints we solved together
      </p>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        {technicalSummaries.map(({ challenge, icon: Icon, solution }) => (
          <li key={challenge} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-4 px-5 py-3.5 sm:items-center">
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
              <Icon className="h-4 w-4 shrink-0 text-primary-500" />
              {challenge}
            </span>
            <span className="pl-6 sm:pl-0 text-sm text-gray-700 dark:text-gray-300">{solution}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
