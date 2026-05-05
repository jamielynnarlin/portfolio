import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

// ─── Color palette: warm, editorial, restaurant-magazine ───────────────────────
const colors = {
  cream: '#FDF8F0',
  warmWhite: '#FEFCF9',
  espresso: '#2C1810',
  charcoal: '#3D2C24',
  copper: '#B87333',
  copperLight: '#D4956A',
  sage: '#7A9E7E',
  sageLight: '#A8C5AB',
  terracotta: '#C75B39',
  linen: '#F5EDE4',
  parchment: '#EDE4D8',
}

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

// ─── Receipt Card (problem statement metaphor) ─────────────────────────────────
function ReceiptCard({ items, total, title }) {
  return (
    <div className="bg-white border border-stone-200 rounded-sm shadow-md px-7 py-6 font-mono text-sm">
      <div className="text-center border-b border-dashed border-stone-300 pb-3 mb-5">
        <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em]">Order Summary</p>
        <p className="text-lg font-bold text-stone-800 mt-1">{title}</p>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-baseline gap-4 text-stone-600">
            <span className="text-xs">{item.label}</span>
            <span className="text-xs text-red-600 font-semibold whitespace-nowrap">{item.cost}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-dashed border-stone-300 mt-5 pt-4 flex justify-between items-baseline font-bold text-stone-800">
        <span className="text-xs">TOTAL COST</span>
        <span className="text-xs text-red-700">{total}</span>
      </div>
      <div className="text-center mt-5 text-xs text-stone-300">
        ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
      </div>
    </div>
  )
}

// ─── Kitchen Order Ticket (user story metaphor) ────────────────────────────────
function KitchenTicket({ ticket, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateZ: -1 }}
      whileInView={{ opacity: 1, rotateZ: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="bg-yellow-50 border-2 border-yellow-300/70 rounded p-5 shadow-sm relative group hover:shadow-md transition-shadow"
      style={{ transform: `rotate(${(index % 2 === 0 ? -0.3 : 0.3)}deg)` }}
    >
      {/* Pin */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-400 shadow-sm border border-red-500" />
      <div className="absolute top-2 right-4 text-xs font-mono text-yellow-500/80">#{String(index + 1).padStart(3, '0')}</div>
      <p className="text-[10px] font-mono text-yellow-700 uppercase tracking-[0.15em] mb-2 mt-1">{ticket.persona}</p>
      <p className="text-sm text-stone-800 font-medium leading-relaxed">{ticket.story}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {ticket.tags.map((tag, i) => (
          <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300/80 font-medium">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Mise en Place Card (research insight) ─────────────────────────────────────
function MiseEnPlaceCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-lg p-5 hover:shadow-md transition-shadow"
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h4 className="font-semibold text-stone-800 mb-2">{title}</h4>
      <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

// ─── Dashboard Mockup (light-mode, interactive) ────────────────────────────────
function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'analytics', label: 'Analytics' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden max-w-5xl mx-auto">
      {/* Browser chrome */}
      <div className="bg-stone-100 border-b border-stone-200 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white rounded-md px-3 py-1 text-xs text-stone-400 border border-stone-200 max-w-md">
            portal.rewardsnetwork.com/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard header */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-copper/20 flex items-center justify-center">
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
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">3</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-semibold">M</div>
        </div>
      </div>

      {/* Location switcher */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-2 flex items-center gap-2">
        <span className="text-xs text-stone-500">Location:</span>
        <select className="text-xs bg-white border border-stone-200 rounded px-2 py-1 text-stone-700">
          <option>All Locations</option>
          <option>Downtown</option>
          <option>Midtown</option>
          <option>Westside</option>
        </select>
      </div>

      {/* Notification banner */}
      <div className="mx-6 mt-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <span className="text-sm">💰</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-emerald-900">Your Downtown location is eligible for additional funding</p>
          <p className="text-xs text-emerald-700 mt-0.5">Up to $25,000 available based on dining volume</p>
        </div>
        <button className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-md font-medium hover:bg-emerald-700 transition-colors">
          Learn More
        </button>
      </div>

      {/* Tab navigation */}
      <div className="px-6 mt-4 border-b border-stone-200">
        <div className="flex gap-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2.5 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-stone-900'
                  : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="dashTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-6">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'reviews' && <ReviewsTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
      </div>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Diners', value: '2,847', change: '+12%', up: true },
          { label: 'Avg Rating', value: '4.6', change: '+0.3', up: true },
          { label: 'Revenue Impact', value: '$18.4K', change: '+8%', up: true },
          { label: 'New Reviews', value: '23', change: 'This week', up: null },
        ].map((stat, i) => (
          <div key={i} className="bg-stone-50 rounded-lg p-4 border border-stone-100">
            <p className="text-xs text-stone-500 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-stone-800">{stat.value}</p>
            {stat.up !== null ? (
              <p className={`text-xs mt-1 ${stat.up ? 'text-emerald-600' : 'text-red-600'}`}>
                {stat.up ? '↑' : '↓'} {stat.change}
              </p>
            ) : (
              <p className="text-xs mt-1 text-stone-400">{stat.change}</p>
            )}
          </div>
        ))}
      </div>

      {/* Two-column: chart + events */}
      <div className="grid grid-cols-3 gap-6">
        {/* Mini chart */}
        <div className="col-span-2 bg-stone-50 rounded-lg p-4 border border-stone-100">
          <p className="text-sm font-medium text-stone-700 mb-3">Diner Volume (30 days)</p>
          <div className="h-32 flex items-end gap-1">
            {[40, 55, 45, 65, 50, 70, 80, 60, 75, 90, 85, 95, 70, 80, 65, 75, 85, 90, 80, 95, 88, 92, 78, 85, 90, 95, 88, 92, 98, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-amber-500 to-amber-300 transition-all hover:from-amber-600 hover:to-amber-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Events & specials */}
        <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
          <p className="text-sm font-medium text-stone-700 mb-3">Active Events</p>
          <div className="space-y-3">
            {[
              { name: 'Wine Wednesday', status: 'Live', color: 'bg-emerald-100 text-emerald-700' },
              { name: 'Date Night Prix Fixe', status: 'Scheduled', color: 'bg-blue-100 text-blue-700' },
              { name: 'Sunday Brunch', status: 'Live', color: 'bg-emerald-100 text-emerald-700' },
            ].map((evt, i) => (
              <div key={i} className="flex items-center justify-between">
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
          <span className="text-xs px-2 py-1 text-stone-500 rounded-full hover:bg-stone-100 cursor-pointer">Needs Reply (5)</span>
        </div>
      </div>
      {reviews.map((review, i) => (
        <div key={i} className="bg-stone-50 rounded-lg p-4 border border-stone-100">
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
          <button className="text-xs text-amber-700 font-medium mt-2 hover:text-amber-800">Reply</button>
        </div>
      ))}
    </div>
  )
}

function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Revenue breakdown */}
        <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
          <p className="text-sm font-medium text-stone-700 mb-3">Revenue by Location</p>
          <div className="space-y-3">
            {[
              { location: 'Downtown', amount: '$8,200', pct: 45 },
              { location: 'Midtown', amount: '$5,900', pct: 32 },
              { location: 'Westside', amount: '$4,300', pct: 23 },
            ].map((loc, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs text-stone-600 mb-1">
                  <span>{loc.location}</span>
                  <span>{loc.amount}</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    style={{ width: `${loc.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak hours */}
        <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
          <p className="text-sm font-medium text-stone-700 mb-3">Peak Dining Hours</p>
          <div className="grid grid-cols-7 gap-1 mt-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="text-center">
                <div className="text-[10px] text-stone-400 mb-1">{day}</div>
                <div className="space-y-0.5">
                  {[11, 12, 13, 17, 18, 19, 20, 21].map((hour) => {
                    const intensity = Math.random()
                    return (
                      <div
                        key={hour}
                        className="w-full h-3 rounded-sm"
                        style={{
                          backgroundColor: `rgba(217, 119, 6, ${0.1 + intensity * 0.7})`
                        }}
                      />
                    )
                  })}
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
    </div>
  )
}

// ─── AI Competitive Intelligence Section ───────────────────────────────────────
function CompetitiveIntelCard({ title, description, metric, icon }) {
  return (
    <div className="bg-white rounded-lg border border-stone-200 p-5 hover:shadow-md transition-all group">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-stone-800 text-sm">{title}</h4>
          <p className="text-xs text-stone-500 mt-1 leading-relaxed">{description}</p>
          {metric && (
            <div className="mt-2 text-xs font-mono text-amber-700 bg-amber-50 px-2 py-1 rounded inline-block">
              {metric}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Module Variant Explorer (Tasting Menu concept) ────────────────────────────
function ModuleVariantExplorer() {
  const [selectedVariant, setSelectedVariant] = useState(0)

  const variants = [
    {
      label: 'The Quick Bite',
      subtitle: 'Compact Stats Module',
      description: 'For the multi-unit operator who checks in daily between locations. Dense information, zero fluff.',
      persona: '👨‍💼 Multi-unit Owner',
      winner: false,
      preview: (
        <div className="p-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Total Diners', value: '2.8K', trend: '↑ 12%', color: 'text-emerald-600' },
              { label: 'Avg Rating', value: '4.6', trend: '↑ 0.3', color: 'text-emerald-600' },
              { label: 'Revenue', value: '$18K', trend: '↑ 8%', color: 'text-emerald-600' },
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-3 text-center border border-stone-200">
                <p className="text-2xl font-bold text-stone-800">{stat.value}</p>
                <p className="text-[10px] text-stone-500 mt-0.5">{stat.label}</p>
                <p className={`text-[10px] font-medium mt-1 ${stat.color}`}>{stat.trend}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between bg-amber-50 rounded-lg px-3 py-2 border border-amber-200">
            <span className="text-xs text-amber-800">💰 Downtown eligible for $25K funding</span>
            <span className="text-[10px] text-amber-600 font-medium">View</span>
          </div>
        </div>
      )
    },
    {
      label: 'The Full Course',
      subtitle: 'Visual Charts Module',
      description: 'For the hands-on owner who loves seeing trends. Graphical storytelling that reveals patterns over time.',
      persona: '👩‍🍳 Hands-on Owner',
      winner: true,
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
                className="flex-1 rounded-t transition-all"
                style={{
                  height: `${h}%`,
                  background: i >= 9 ? `linear-gradient(to top, ${colors.copper}, ${colors.copperLight})` : `linear-gradient(to top, rgba(184,115,51,0.3), rgba(184,115,51,0.15))`
                }}
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
      )
    },
    {
      label: 'The Specials Board',
      subtitle: 'Action Cards Module',
      description: 'For the delegating manager who responds to prompts. Priority-ranked actions that drive engagement.',
      persona: '📋 Delegating Manager',
      winner: false,
      preview: (
        <div className="p-5 space-y-2.5">
          {[
            { action: 'Reply to 3 new reviews', urgency: 'high', icon: '⭐', time: '2 pending 24h+' },
            { action: 'Update weekend hours for holiday', urgency: 'medium', icon: '🕐', time: 'Due in 3 days' },
            { action: 'New funding available: $15K', urgency: 'low', icon: '💰', time: 'No deadline' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-stone-200 shadow-sm">
              <div className={`w-1.5 h-10 rounded-full ${
                item.urgency === 'high' ? 'bg-red-400' : item.urgency === 'medium' ? 'bg-amber-400' : 'bg-emerald-400'
              }`} />
              <div className="text-lg">{item.icon}</div>
              <div className="flex-1">
                <p className="text-xs font-medium text-stone-800">{item.action}</p>
                <p className="text-[10px] text-stone-400 mt-0.5">{item.time}</p>
              </div>
              <div className="text-stone-300">→</div>
            </div>
          ))}
        </div>
      )
    },
  ]

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200" style={{ backgroundColor: colors.espresso }}>
      {/* Header - menu board style */}
      <div className="px-8 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
            <span className="text-xs">📋</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-amber-300/80">The Tasting Menu</p>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">Module Variant Exploration</h3>
        <p className="text-sm text-stone-400 leading-relaxed">AI-generated layout permutations tested against each user persona. The winning variant advanced to final design.</p>
      </div>

      {/* Variant tabs - styled as menu courses */}
      <div className="px-8 flex gap-2 pb-4">
        {variants.map((v, i) => (
          <button
            key={i}
            onClick={() => setSelectedVariant(i)}
            className={`relative px-4 py-2.5 rounded-lg text-left transition-all ${
              selectedVariant === i
                ? 'bg-white/10 ring-1 ring-amber-500/40'
                : 'bg-white/5 hover:bg-white/8'
            }`}
          >
            {v.winner && (
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">✓</span>
              </div>
            )}
            <p className={`text-xs font-medium ${selectedVariant === i ? 'text-amber-300' : 'text-stone-400'}`}>{v.label}</p>
            <p className="text-[10px] text-stone-500 mt-0.5">{v.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="mx-8 mb-8 rounded-xl overflow-hidden bg-white">
        <motion.div
          key={selectedVariant}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Persona & description bar */}
          <div className="bg-stone-50 border-b border-stone-200 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm">{variants[selectedVariant].persona}</span>
              <span className="text-xs text-stone-500">{variants[selectedVariant].description}</span>
            </div>
            {variants[selectedVariant].winner && (
              <span className="text-[10px] px-2 py-1 bg-amber-100 text-amber-800 rounded-full font-medium border border-amber-200">
                Winner
              </span>
            )}
          </div>
          {/* Preview */}
          {variants[selectedVariant].preview}
        </motion.div>
      </div>
    </div>
  )
}

// ─── Main Page Component ───────────────────────────────────────────────────────
export default function RestaurantCaseStudy() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* ─── Hero with Image ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/case-studies/restaurant-hero.jpg"
            alt="Trendy restaurant interior with warm lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-4xl mx-auto text-center pt-32 pb-28 px-6">
          {/* Breadcrumb */}
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-10">
            <span>←</span>
            <span>All Projects</span>
          </Link>

          {/* Category tag */}
          <div className="flex justify-center mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm bg-white/5">
              Dashboard & Analytics
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Restaurant Portal
            <br />
            <span className="text-amber-300">Redesign</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-white/85">
            Transforming how restaurant owners interact with their business data through a modern, actionable dashboard - turning passive analytics into daily value that keeps operators coming back.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['UX Research', 'Dashboard Design', 'Notifications', 'Multi-Location UX', 'AI Competitive Intel'].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/80 backdrop-blur-sm bg-white/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── Spec Bar ────────────────────────────────────────────────────── */}
      <section className="px-6 -mt-8 relative z-20 mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-stone-200 shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Timeline', value: '4 months' },
              { label: 'Role', value: 'Lead UX Designer' },
              { label: 'Team', value: 'Product, Eng, Sales' },
              { label: 'Company', value: 'Rewards Network' },
            ].map((spec, i) => (
              <div key={i} className="text-center">
                <p className="text-[11px] text-stone-400 uppercase tracking-wide mb-1">{spec.label}</p>
                <p className="text-sm font-semibold text-stone-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Receipt: Problem Statement ──────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: colors.linen }}>
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.copper }}>The Check</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                What was costing the business
              </h2>
              <p className="text-stone-600 max-w-lg mx-auto leading-relaxed">
                The existing portal was bleeding value. Restaurant owners logged in once, found nothing actionable, and never came back.
              </p>
            </div>
          </FadeSection>

          <FadeSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-3xl mx-auto">
              <ReceiptCard
                title="UX Pain Points"
                items={[
                  { label: 'No clear value proposition', cost: '-40% retention' },
                  { label: 'Missing notifications', cost: '-daily visits' },
                  { label: 'Cumbersome multi-location', cost: '-productivity' },
                  { label: 'Static, outdated data', cost: '-trust' },
                ]}
                total="Low engagement"
              />
              <ReceiptCard
                title="Business Impact"
                items={[
                  { label: 'Sales team manual outreach', cost: '20 hrs/week' },
                  { label: 'Missed funding opportunities', cost: '$2M+ lost' },
                  { label: 'Review response time', cost: '5+ days avg' },
                  { label: 'Support ticket volume', cost: '3x baseline' },
                ]}
                total="Revenue leak"
              />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Mise en Place: Research ─────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.sage }}>Mise en Place</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                Prepping the ingredients
              </h2>
              <p className="text-stone-600 max-w-lg mx-auto leading-relaxed">
                Before designing anything, I gathered every ingredient we'd need - interviews, data, competitive analysis, and technical constraints.
              </p>
            </div>
          </FadeSection>

          <FadeSection delay={0.15}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              <MiseEnPlaceCard
                index={0}
                icon="👥"
                title="Stakeholder Interviews"
                description="Spoke with restaurant owners, sales account managers, and client success teams to map the full experience ecosystem."
              />
              <MiseEnPlaceCard
                index={1}
                icon="📊"
                title="Usage Analytics Audit"
                description="Analyzed login frequency, feature usage heatmaps, and drop-off points to identify where value was lost."
              />
              <MiseEnPlaceCard
                index={2}
                icon="🗺"
                title="Empathy Mapping"
                description="Collaborated with product to map user thoughts, feelings, and pain points across the portal journey."
              />
              <MiseEnPlaceCard
                index={3}
                icon="🎯"
                title="Persona Development"
                description="Created distinct personas - the multi-unit operator, the hands-on owner, the delegating manager - each with different needs."
              />
              <MiseEnPlaceCard
                index={4}
                icon="🔍"
                title="Competitive Landscape"
                description="Studied Toast, Square, and OpenTable portals to understand industry patterns and identify differentiation opportunities."
              />
              <MiseEnPlaceCard
                index={5}
                icon="⚡"
                title="Technical Constraints"
                description="Mapped API capabilities, data refresh rates, and module system limitations that would shape the redesign."
              />
            </div>
          </FadeSection>

          {/* User quote */}
          <FadeSection delay={0.3}>
            <div className="max-w-2xl mx-auto">
              <blockquote className="relative bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
                <span className="absolute -top-4 left-8 text-5xl leading-none" style={{ color: colors.copperLight }}>"</span>
                <p className="text-stone-700 text-lg italic leading-relaxed mt-2">
                  I have multiple locations and it is time consuming to go through each location individually. I don't know what I am looking at, there are no notifications.
                </p>
                <footer className="mt-4 text-sm text-stone-500">
                  - Restaurant Owner, User Interview
                </footer>
              </blockquote>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Kitchen Tickets: User Stories ───────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: colors.warmWhite }}>
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.terracotta }}>Kitchen Tickets</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                Orders up
              </h2>
              <p className="text-stone-600 max-w-lg mx-auto leading-relaxed">
                User stories fired into the design kitchen - each one a clear need with a measurable outcome.
              </p>
            </div>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { persona: 'Multi-unit owner', story: 'I need to switch between locations without losing context so I can manage all my restaurants efficiently.', tags: ['Navigation', 'Multi-location'] },
              { persona: 'Hands-on owner', story: 'I want to see and respond to diner reviews from my dashboard so I can maintain my reputation.', tags: ['Reviews', 'Engagement'] },
              { persona: 'Account manager', story: 'I need funding eligibility surfaced automatically so I can reduce manual outreach by 80%.', tags: ['MCA', 'Automation'] },
              { persona: 'Multi-unit owner', story: 'I want personalized notifications about each location so I know what needs attention today.', tags: ['Notifications', 'Priority'] },
              { persona: 'Hands-on owner', story: 'I need my events and specials visible and editable so guests see the latest offerings.', tags: ['Events', 'Content'] },
              { persona: 'Delegating manager', story: 'I want at-a-glance analytics tied to business goals so I understand the value of our partnership.', tags: ['Analytics', 'Value'] },
            ].map((ticket, i) => (
              <KitchenTicket key={i} ticket={ticket} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI SDLC: Competitive Intelligence ──────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: colors.linen }}>
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.copper }}>AI-Accelerated Design</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                Scaling intelligence, not just screens
              </h2>
              <p className="text-stone-600 max-w-lg mx-auto leading-relaxed">
                I used AI tooling to accelerate two key phases that would have taken weeks manually: competitive intelligence synthesis and module variant exploration.
              </p>
            </div>
          </FadeSection>

          <FadeSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <CompetitiveIntelCard
                icon="🔬"
                title="Competitive Intelligence at Scale"
                description="Fed 50+ restaurant tech portal screenshots into AI analysis to extract interaction patterns, notification strategies, and dashboard information architecture across Toast, Square, OpenTable, and Yelp for Business."
                metric="50+ portals analyzed in 2 days vs. 3 weeks manual"
              />
              <CompetitiveIntelCard
                icon="🧩"
                title="Module Variant Exploration"
                description="Generated dozens of layout permutations for each dashboard module, testing different information hierarchies against our user personas to find the optimal density per user type."
                metric="36 variants explored, 4 advanced to testing"
              />
              <CompetitiveIntelCard
                icon="📝"
                title="Notification Copy Variants"
                description="Used LLMs to draft notification language at scale - testing urgency levels, personalization depth, and action-oriented vs. informational framing with real user segments."
                metric="120 notification variants, 8 winning patterns"
              />
              <CompetitiveIntelCard
                icon="📐"
                title="Information Architecture Mapping"
                description="AI-assisted card sorting synthesis from 15 user sessions, clustering navigation preferences and surfacing hidden mental models for multi-location context switching."
                metric="15 sessions synthesized in 4 hours"
              />
            </div>
          </FadeSection>

          {/* Module Variant Explorer Interactive */}
          <FadeSection delay={0.2}>
            <ModuleVariantExplorer />
          </FadeSection>
        </div>
      </section>

      {/* ─── The Plating: Dashboard Design ──────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.sage }}>The Plating</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                Serving the final design
              </h2>
              <p className="text-stone-600 max-w-lg mx-auto leading-relaxed">
                A personalized, notification-driven dashboard that gives restaurant owners a reason to come back every day. Click the tabs to explore the key modules.
              </p>
            </div>
          </FadeSection>

          <FadeSection delay={0.2}>
            <DashboardMockup />
          </FadeSection>

          {/* Prototype link */}
          <FadeSection delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/prototypes/restaurant-dashboard"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: colors.espresso }}
              >
                <span>Explore the Full Interactive Prototype</span>
                <span className="text-lg">→</span>
              </Link>
              <p className="text-xs text-stone-500 mt-3">Multi-location switching, AI review replies, conversational analytics</p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Design Decisions ────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: colors.warmWhite }}>
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.copper }}>Tasting Notes</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                Key design decisions
              </h2>
            </div>
          </FadeSection>

          <div className="space-y-6">
            {[
              {
                title: 'Notification-First Architecture',
                description: 'Rather than burying insights in analytics tabs, we surfaced the most actionable items as rotating notification banners. Funding eligibility, review responses needed, and event updates appear first.',
                before: 'Users discovered 12% of available features',
                after: 'Users engaged with 67% of surfaced notifications',
              },
              {
                title: 'Inline Multi-Location Switching',
                description: 'Replaced the separate location filter screen with a persistent dropdown in the dashboard header. Context is maintained when switching - users see the same module with different location data.',
                before: '5 clicks to switch locations',
                after: '1 click with full context preservation',
              },
              {
                title: 'Value-Tied Analytics',
                description: 'Every metric is paired with a "so what" - connecting raw numbers to business outcomes. Diner count is tied to revenue impact; review scores link to booking trends.',
                before: 'Raw numbers without context',
                after: 'Metrics paired with actionable insights',
              },
              {
                title: 'Responsive Module System',
                description: 'Redesigned the module grid to be truly responsive while maintaining hierarchy. Critical notifications stack vertically on mobile; analytics gracefully collapse without losing meaning.',
                before: 'Desktop-only layout, broken mobile experience',
                after: 'Responsive modules with maintained hierarchy',
              },
            ].map((decision, i) => (
              <FadeSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-7 border border-stone-200 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="flex-1">
                      <h3 className="font-semibold text-stone-800 text-lg mb-2">{decision.title}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{decision.description}</p>
                    </div>
                    <div className="flex gap-3 md:w-72 flex-shrink-0">
                      <div className="flex-1 bg-red-50 rounded-lg p-3 border border-red-100">
                        <p className="text-[10px] uppercase tracking-wide text-red-400 font-medium mb-1">Before</p>
                        <p className="text-xs text-red-700 leading-snug">{decision.before}</p>
                      </div>
                      <div className="flex-1 bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                        <p className="text-[10px] uppercase tracking-wide text-emerald-400 font-medium mb-1">After</p>
                        <p className="text-xs text-emerald-700 leading-snug">{decision.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Results ─────────────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: colors.parchment }}>
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.sage }}>The Numbers</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                Business impact
              </h2>
            </div>
          </FadeSection>

          <FadeSection delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { metric: '53%', label: 'Increase in Reviews page interaction', icon: '⭐' },
                { metric: '49%', label: 'Increase in cash advance signups', icon: '💰' },
                { metric: '$8M+', label: 'Cash funded since launch', icon: '📈' },
                { metric: '4 mo', label: 'Concept to delivery', icon: '🚀' },
              ].map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm text-center"
                >
                  <div className="text-2xl mb-2">{result.icon}</div>
                  <p className="text-3xl font-bold mb-2" style={{ color: colors.copper }}>{result.metric}</p>
                  <p className="text-xs text-stone-600 leading-snug">{result.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Takeaways ───────────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: colors.terracotta }}>Lessons from the Kitchen</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: colors.espresso }}>
                What I took away
              </h2>
            </div>
          </FadeSection>

          <div className="space-y-6">
            {[
              {
                title: 'Cross-functional collaboration makes or breaks dashboards',
                description: 'Dashboard redesigns touch every team. Sales needed funding visibility, marketing needed event promotion, owners needed reviews. Tight collaboration from day one meant the final product served everyone.',
              },
              {
                title: 'Notifications create daily value and retention',
                description: 'The single biggest lever for engagement was showing users something new and actionable every login. Static dashboards die. Living ones - with rotating notifications and fresh data - become habits.',
              },
              {
                title: 'AI scales research without replacing rigor',
                description: 'Using AI for competitive analysis and variant generation let me cover 10x more ground in the exploration phase. But the decisions still came from user interviews, testing, and business alignment.',
              },
            ].map((takeaway, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <h3 className="font-semibold text-stone-800 text-lg mb-2">{takeaway.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{takeaway.description}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / Navigation ────────────────────────────────────────────── */}
      <section className="px-6 py-16" style={{ backgroundColor: colors.linen }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-stone-600 mb-6">Want to discuss dashboard design, AI-accelerated research, or multi-location UX?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg text-white font-medium text-sm transition-all hover:opacity-90 shadow-md"
              style={{ backgroundColor: colors.copper }}
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg font-medium text-sm transition-all border border-stone-300 text-stone-700 hover:bg-white"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
