// Supporting visuals for the Restaurant Portal Redesign case study: the
// portal screens from the original case study, the interactive prototype's
// funding screen, module variants, user stories, and an owner quote.
// Content comes from the original RestaurantCaseStudy page and
// caseStudies['restaurant-portal-redesign'].
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { caseStudies } from '../../data/caseStudies'
import RestaurantDashboardApp from '../RestaurantDashboardApp'

const study = caseStudies['restaurant-portal-redesign']
const ownerQuote = study.process[1].quote

const sectionLabel = 'text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400'

// ─── Browser frame ─────────────────────────────────────────────────────────────
// Renders a screen at desktop width and scales it to the frame's width, so
// nothing is cropped or squashed. With `height` the screen is a fixed size;
// without it, the frame follows the screen's natural height.
function BrowserScreen({ children, width = 1100, height }) {
  const viewportRef = useRef(null)
  const contentRef = useRef(null)
  const [scale, setScale] = useState(0.5)
  const [naturalHeight, setNaturalHeight] = useState(height ?? 600)

  useEffect(() => {
    const viewportObserver = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width))
    viewportObserver.observe(viewportRef.current)
    let contentObserver
    if (!height) {
      contentObserver = new ResizeObserver(([entry]) => setNaturalHeight(entry.target.offsetHeight))
      contentObserver.observe(contentRef.current)
    }
    return () => {
      viewportObserver.disconnect()
      contentObserver?.disconnect()
    }
  }, [width, height])

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-xl">
      <div className="flex items-center gap-3 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 truncate rounded bg-slate-700/60 px-3 py-1 text-[11px] text-slate-400">portal.rewardsnetwork.com/dashboard</div>
      </div>
      <div
        ref={viewportRef}
        className="relative overflow-hidden bg-white pointer-events-none select-none"
        style={{ height: (height ?? naturalHeight) * scale }}
      >
        <div
          ref={contentRef}
          className="absolute left-0 top-0"
          style={{ width, height, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// ─── Portal screen (from the original case study's dashboard mockup) ───────────
const portalTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'analytics', label: 'Analytics' },
]

function PortalScreen({ tab }) {
  return (
    <div className="bg-white">
      {/* Dashboard header */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
            <span className="text-sm">🍽</span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">Mario's Trattoria</p>
            <p className="text-stone-400 text-xs">3 locations - Downtown, Midtown, Westside</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center">
              <span className="text-xs text-stone-300">🔔</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">3</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-semibold">M</div>
        </div>
      </div>

      {/* Location switcher */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-2 flex items-center gap-2">
        <span className="text-xs text-stone-500">Location:</span>
        <span className="text-xs bg-white border border-stone-200 rounded px-2 py-1 text-stone-700">All Locations ▾</span>
      </div>

      {/* Notification banner */}
      {tab === 'overview' && (
        <div className="mx-6 mt-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <span className="text-sm">💰</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-emerald-900">Your Downtown location is eligible for additional funding</p>
            <p className="text-xs text-emerald-700 mt-0.5">Up to $25,000 available based on dining volume</p>
          </div>
          <span className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-md font-medium">Learn More</span>
        </div>
      )}

      {/* Tab navigation */}
      <div className="px-6 mt-4 border-b border-stone-200">
        <div className="flex gap-6">
          {portalTabs.map(item => (
            <span
              key={item.id}
              className={`relative pb-2.5 text-sm font-medium ${item.id === tab ? 'text-stone-900' : 'text-stone-400'}`}
            >
              {item.label}
              {item.id === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        {tab === 'overview' && <OverviewTab />}
        {tab === 'reviews' && <ReviewsTab />}
        {tab === 'analytics' && <AnalyticsTab />}
      </div>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Diners', value: '2,847', change: '↑ +12%' },
          { label: 'Avg Rating', value: '4.6', change: '↑ +0.3' },
          { label: 'Revenue Impact', value: '$18.4K', change: '↑ +8%' },
          { label: 'New Reviews', value: '23', change: 'This week', muted: true },
        ].map(stat => (
          <div key={stat.label} className="bg-stone-50 rounded-lg p-4 border border-stone-100">
            <p className="text-xs text-stone-500 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-stone-800">{stat.value}</p>
            <p className={`text-xs mt-1 ${stat.muted ? 'text-stone-400' : 'text-emerald-600'}`}>{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-stone-50 rounded-lg p-4 border border-stone-100">
          <p className="text-sm font-medium text-stone-700 mb-3">Diner Volume (30 days)</p>
          <div className="h-32 flex items-end gap-1">
            {[40, 55, 45, 65, 50, 70, 80, 60, 75, 90, 85, 95, 70, 80, 65, 75, 85, 90, 80, 95, 88, 92, 78, 85, 90, 95, 88, 92, 98, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-amber-500 to-amber-300" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
          <p className="text-sm font-medium text-stone-700 mb-3">Active Events</p>
          <div className="space-y-3">
            {[
              { name: 'Wine Wednesday', status: 'Live', color: 'bg-emerald-100 text-emerald-700' },
              { name: 'Date Night Prix Fixe', status: 'Scheduled', color: 'bg-blue-100 text-blue-700' },
              { name: 'Sunday Brunch', status: 'Live', color: 'bg-emerald-100 text-emerald-700' },
            ].map(evt => (
              <div key={evt.name} className="flex items-center justify-between">
                <span className="text-xs text-stone-600">{evt.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${evt.color}`}>{evt.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewsTab() {
  const reviews = [
    { name: 'Sarah M.', rating: 5, text: 'Incredible pasta - the carbonara was authentic and perfectly executed. Will be back!', date: '2 days ago', location: 'Downtown' },
    { name: 'James R.', rating: 4, text: 'Great ambiance and service. The wait was a bit long but worth it for the food quality.', date: '3 days ago', location: 'Midtown' },
    { name: 'Michelle K.', rating: 5, text: 'Best Italian in the city. The tiramisu alone is worth the trip.', date: '5 days ago', location: 'Westside' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-stone-700">Recent Reviews</p>
        <div className="flex gap-2">
          <span className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded-full border border-amber-200">All (23)</span>
          <span className="text-xs px-2 py-1 text-stone-500 rounded-full">Needs Reply (5)</span>
        </div>
      </div>
      {reviews.map(review => (
        <div key={review.name} className="bg-stone-50 rounded-lg p-4 border border-stone-100">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-stone-800">{review.name}</span>
                <span className="text-xs text-stone-400">{review.location}</span>
              </div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className={`text-xs ${s < review.rating ? 'text-amber-400' : 'text-stone-300'}`}>★</span>
                ))}
              </div>
            </div>
            <span className="text-xs text-stone-400">{review.date}</span>
          </div>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">{review.text}</p>
          <p className="text-xs text-amber-700 font-medium mt-2">Reply</p>
        </div>
      ))}
    </div>
  )
}

// Fixed heatmap values (the original used Math.random, which changed every render)
const peakHours = [
  [0.2, 0.5, 0.4, 0.3, 0.5, 0.6, 0.4, 0.2],
  [0.2, 0.4, 0.3, 0.3, 0.5, 0.6, 0.5, 0.2],
  [0.3, 0.5, 0.4, 0.4, 0.6, 0.7, 0.5, 0.3],
  [0.3, 0.6, 0.4, 0.4, 0.6, 0.7, 0.6, 0.3],
  [0.4, 0.7, 0.5, 0.6, 0.8, 1.0, 0.9, 0.6],
  [0.5, 0.8, 0.6, 0.6, 0.9, 1.0, 0.9, 0.7],
  [0.7, 0.9, 0.7, 0.4, 0.6, 0.7, 0.5, 0.3],
]

function AnalyticsTab() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
        <p className="text-sm font-medium text-stone-700 mb-3">Revenue by Location</p>
        <div className="space-y-3">
          {[
            { location: 'Downtown', amount: '$8,200', pct: 45 },
            { location: 'Midtown', amount: '$5,900', pct: 32 },
            { location: 'Westside', amount: '$4,300', pct: 23 },
          ].map(loc => (
            <div key={loc.location}>
              <div className="flex justify-between text-xs text-stone-600 mb-1">
                <span>{loc.location}</span>
                <span>{loc.amount}</span>
              </div>
              <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" style={{ width: `${loc.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
        <p className="text-sm font-medium text-stone-700 mb-3">Peak Dining Hours</p>
        <div className="grid grid-cols-7 gap-1 mt-2">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className="text-center">
              <div className="text-[10px] text-stone-400 mb-1">{day}</div>
              <div className="space-y-0.5">
                {peakHours[i].map((intensity, h) => (
                  <div key={h} className="w-full h-3 rounded-sm" style={{ backgroundColor: `rgba(217, 119, 6, ${0.1 + intensity * 0.7})` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-stone-400 mt-2">
          <span>11am</span>
          <span>9pm</span>
        </div>
      </div>
    </div>
  )
}

// ─── Module variants tested with each persona ──────────────────────────────────
const variants = [
  {
    label: 'Compact stats',
    persona: 'Multi-unit owner',
    description: 'Checks in daily between locations. Dense information, no extras.',
    preview: (
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Total Diners', value: '2.8K', trend: '↑ 12%' },
            { label: 'Avg Rating', value: '4.6', trend: '↑ 0.3' },
            { label: 'Revenue', value: '$18K', trend: '↑ 8%' },
          ].map(stat => (
            <div key={stat.label} className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-3 text-center border border-stone-200">
              <p className="text-2xl font-bold text-stone-800">{stat.value}</p>
              <p className="text-[10px] text-stone-500 mt-0.5">{stat.label}</p>
              <p className="text-[10px] font-medium mt-1 text-emerald-600">{stat.trend}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between bg-amber-50 rounded-lg px-3 py-2 border border-amber-200">
          <span className="text-xs text-amber-800">💰 Downtown eligible for $25K funding</span>
          <span className="text-[10px] text-amber-600 font-medium">View</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Visual charts',
    persona: 'Hands-on owner',
    description: 'Likes seeing trends. Charts that reveal patterns over time.',
    advanced: true,
    preview: (
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-stone-700">Diner Volume</span>
          <span className="text-[10px] text-stone-400">Last 12 weeks</span>
        </div>
        <div className="flex items-end gap-1 h-24 mb-3">
          {[30, 45, 40, 55, 50, 65, 70, 60, 75, 80, 70, 85].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t ${i >= 9 ? 'bg-gradient-to-t from-amber-600 to-amber-400' : 'bg-amber-600/20'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-emerald-50 rounded px-2 py-1.5 border border-emerald-100">
            <p className="text-[10px] text-emerald-700 font-medium">↑ 23% vs last quarter</p>
          </div>
          <div className="flex-1 bg-stone-50 rounded px-2 py-1.5 border border-stone-200">
            <p className="text-[10px] text-stone-600">Peak: Friday 7-9pm</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Action cards',
    persona: 'Delegating manager',
    description: 'Responds to prompts. Priority-ranked actions to work through.',
    preview: (
      <div className="p-5 space-y-2.5">
        {[
          { action: 'Reply to 3 new reviews', bar: 'bg-amber-500', icon: '⭐', time: '2 pending 24h+' },
          { action: 'Update weekend hours for holiday', bar: 'bg-amber-300', icon: '🕐', time: 'Due in 3 days' },
          { action: 'New funding available: $15K', bar: 'bg-emerald-400', icon: '💰', time: 'No deadline' },
        ].map(item => (
          <div key={item.action} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-stone-200 shadow-sm">
            <div className={`w-1.5 h-10 rounded-full ${item.bar}`} />
            <div className="text-lg">{item.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-stone-800">{item.action}</p>
              <p className="text-[10px] text-stone-400 mt-0.5">{item.time}</p>
            </div>
            <div className="text-stone-300">→</div>
          </div>
        ))}
      </div>
    ),
  },
]

function ModuleVariants() {
  const [selected, setSelected] = useState(1)
  const variant = variants[selected]

  return (
    <div className="rounded-2xl bg-navy-900 dark:bg-gray-800 p-4 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">Module variants by persona</p>
      <p className="mt-1 text-sm text-gray-300">Each persona saw a different module layout. The charts variant advanced to final design.</p>
      <div className="mt-4 grid grid-cols-3 gap-2" role="tablist" aria-label="Module variants">
        {variants.map((v, i) => (
          <button
            key={v.label}
            type="button"
            role="tab"
            aria-selected={selected === i}
            onClick={() => setSelected(i)}
            className={`rounded-lg px-2 py-2 sm:px-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
              selected === i ? 'bg-white/10 ring-1 ring-primary-400/50' : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            <span className={`block text-xs font-medium ${selected === i ? 'text-primary-200' : 'text-gray-300'}`}>{v.label}</span>
            <span className="mt-0.5 block text-[11px] text-gray-400">{v.persona}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-xl bg-white">
        <motion.div key={selected} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          <div className="flex flex-col gap-2 border-b border-stone-200 bg-stone-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-stone-600">
              <span className="font-semibold text-stone-800">{variant.persona}.</span> {variant.description}
            </p>
            {variant.advanced && (
              <span className="self-start whitespace-nowrap rounded-full bg-primary-50 px-2 py-1 text-[10px] font-medium text-primary-700 ring-1 ring-primary-200 sm:self-auto">
                Advanced to final design
              </span>
            )}
          </div>
          {variant.preview}
        </motion.div>
      </div>
    </div>
  )
}

// ─── Designs shown inside the decision cards ───────────────────────────────────
export function HomeDesign() {
  return <BrowserScreen><PortalScreen tab="overview" /></BrowserScreen>
}

export function ReviewsDesign() {
  return <BrowserScreen><PortalScreen tab="reviews" /></BrowserScreen>
}

export function AnalyticsDesign() {
  return (
    <div className="space-y-8">
      <BrowserScreen><PortalScreen tab="analytics" /></BrowserScreen>
      <ModuleVariants />
    </div>
  )
}

// The interactive prototype, opened on its Funding screen
export function FundingDesign() {
  return (
    <BrowserScreen width={1280} height={680}>
      <RestaurantDashboardApp currentScreen={4} />
    </BrowserScreen>
  )
}

// ─── Owner quote from interviews ───────────────────────────────────────────────
export function OwnerQuote() {
  return (
    <figure className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-primary-50/60 dark:bg-primary-900/20 p-6">
      <p className={sectionLabel}>What owners told us</p>
      <blockquote className="mt-3 text-lg italic leading-relaxed text-gray-900 dark:text-white">“{ownerQuote.text}”</blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-400">{ownerQuote.author}</figcaption>
    </figure>
  )
}

// ─── User stories written for the backlog ──────────────────────────────────────
const userStories = [
  { persona: 'Multi-unit owner', story: 'Switch between locations without losing context, so I can manage every restaurant efficiently.' },
  { persona: 'Multi-unit owner', story: 'Get notifications about each location, so I know what needs attention today.' },
  { persona: 'Hands-on owner', story: 'See and respond to diner reviews from my dashboard, so I can protect my reputation.' },
  { persona: 'Account manager', story: 'See funding eligibility automatically, so I can cut manual outreach by 80%.' },
  { persona: 'Delegating manager', story: 'See analytics tied to business goals, so I understand the value of our partnership.' },
]

export function UserStories() {
  return (
    <div>
      <p className={`${sectionLabel} mb-3`}>Sample user stories</p>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        {userStories.map(item => (
          <li key={item.story} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4 px-5 py-3.5 transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.persona}</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">{item.story}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Prototype call to action ──────────────────────────────────────────────────
const prototypeHighlights = [
  'Multi-location switching',
  'Priority notifications',
  'Review management',
  'Funding eligibility',
]

export function PrototypeCTA() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className={sectionLabel}>See it all together</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Explore the portal as a multi-location owner.</p>
        </div>
        <Link to="/prototypes/restaurant-dashboard" className="btn-primary whitespace-nowrap text-center">
          Try the prototype →
        </Link>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {prototypeHighlights.map(item => (
          <div key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
