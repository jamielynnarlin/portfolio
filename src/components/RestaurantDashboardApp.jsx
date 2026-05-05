import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Color tokens ──────────────────────────────────────────────────────────────
const theme = {
  sidebar: '#1C1917',
  sidebarHover: '#292524',
  sidebarActive: '#B87333',
  surface: '#FAFAF9',
  card: '#FFFFFF',
  border: '#E7E5E4',
  text: '#1C1917',
  textMuted: '#78716C',
  accent: '#B87333',
  accentLight: '#F5EDE4',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
}

// ─── Simulated data ────────────────────────────────────────────────────────────
const locations = ['All Locations', 'Downtown', 'Midtown', 'Westside']

const stats = {
  'All Locations': { diners: '8,432', revenue: '$52.1K', rating: '4.6', reviews: 67, funding: '$75K' },
  'Downtown': { diners: '3,847', revenue: '$23.4K', rating: '4.7', reviews: 28, funding: '$25K' },
  'Midtown': { diners: '2,591', revenue: '$16.2K', rating: '4.5', reviews: 22, funding: '$30K' },
  'Westside': { diners: '1,994', revenue: '$12.5K', rating: '4.6', reviews: 17, funding: '$20K' },
}

const notifications = [
  { id: 1, type: 'funding', icon: '💰', title: 'Downtown eligible for $25K additional funding', desc: 'Based on 90-day dining volume', time: '2h ago', priority: 'high' },
  { id: 2, type: 'review', icon: '⭐', title: '5 reviews need your response', desc: '3 are 24+ hours old', time: '4h ago', priority: 'medium' },
  { id: 3, type: 'event', icon: '📅', title: 'Wine Wednesday starts tomorrow', desc: 'Midtown location, 6-9pm', time: '1d ago', priority: 'low' },
  { id: 4, type: 'insight', icon: '📊', title: 'Friday revenue up 18% vs last month', desc: 'All locations combined', time: '1d ago', priority: 'low' },
]

const reviews = [
  { id: 1, name: 'Sarah M.', rating: 5, text: 'Incredible pasta - the carbonara was authentic and perfectly executed. Will definitely be back!', date: '2 hours ago', location: 'Downtown', replied: false, sentiment: 'positive' },
  { id: 2, name: 'James R.', rating: 4, text: 'Great ambiance and service. The wait was a bit long but the food quality made up for it.', date: '5 hours ago', location: 'Midtown', replied: false, sentiment: 'mixed' },
  { id: 3, name: 'Michelle K.', rating: 5, text: 'Best Italian in the city. The tiramisu alone is worth the trip across town.', date: '1 day ago', location: 'Westside', replied: true, sentiment: 'positive' },
  { id: 4, name: 'David L.', rating: 3, text: 'Food was good but portions felt small for the price. Service was friendly though.', date: '1 day ago', location: 'Downtown', replied: false, sentiment: 'mixed' },
  { id: 5, name: 'Anna P.', rating: 5, text: 'The new seasonal menu is outstanding. Every dish was thoughtfully prepared.', date: '2 days ago', location: 'Midtown', replied: true, sentiment: 'positive' },
  { id: 6, name: 'Robert T.', rating: 2, text: 'Long wait even with a reservation. The host seemed overwhelmed.', date: '3 days ago', location: 'Downtown', replied: false, sentiment: 'negative' },
]

const events = [
  { id: 1, name: 'Wine Wednesday', location: 'All', status: 'active', nextDate: 'Tomorrow', diners: 45 },
  { id: 2, name: 'Date Night Prix Fixe', location: 'Downtown', status: 'active', nextDate: 'Friday', diners: 32 },
  { id: 3, name: 'Sunday Brunch', location: 'Westside', status: 'active', nextDate: 'Sunday', diners: 68 },
  { id: 4, name: 'Chef\'s Table Experience', location: 'Midtown', status: 'draft', nextDate: 'TBD', diners: 0 },
]

const transactions = [
  { date: 'Apr 28', diners: 312, revenue: '$4,280' },
  { date: 'Apr 27', diners: 287, revenue: '$3,950' },
  { date: 'Apr 26', diners: 345, revenue: '$4,820' },
  { date: 'Apr 25', diners: 298, revenue: '$4,100' },
  { date: 'Apr 24', diners: 276, revenue: '$3,780' },
  { date: 'Apr 23', diners: 389, revenue: '$5,340' },
  { date: 'Apr 22', diners: 401, revenue: '$5,680' },
]

// ─── AI Chat messages ──────────────────────────────────────────────────────────
const aiResponses = {
  'how did downtown do last week': 'Downtown had a strong week with 1,923 diners (+15% vs prior week). Revenue hit $11.8K driven by the Date Night Prix Fixe event on Friday which brought in 32 couples. Your average ticket was $48.20, up from $45.10.',
  'which location needs attention': 'Midtown needs the most attention right now. It has 3 unanswered reviews (one negative from 2 days ago about wait times), and its Wednesday diner count has dropped 12% over the past month. Consider promoting Wine Wednesday there.',
  'show me review trends': 'Across all locations, your 30-day average rating is 4.6 stars (up from 4.4 last quarter). Downtown leads at 4.7. The main negative theme is wait times during peak hours - mentioned in 8 of your 12 sub-4-star reviews this month.',
  'what should i focus on today': 'Here are your top 3 priorities today:\n1. Reply to 3 reviews that are 24+ hours old (2 at Downtown, 1 at Midtown)\n2. Review the MCA funding offer for Downtown - $25K available\n3. Confirm Wine Wednesday details for tomorrow at Midtown',
  'compare locations': 'Location comparison (last 30 days):\n- Downtown: 3,847 diners, $23.4K revenue, 4.7 rating\n- Midtown: 2,591 diners, $16.2K revenue, 4.5 rating\n- Westside: 1,994 diners, $12.5K revenue, 4.6 rating\n\nDowntown is your strongest performer. Midtown has the most growth opportunity.',
}

const aiSuggestions = [
  'How did Downtown do last week?',
  'Which location needs attention?',
  'What should I focus on today?',
  'Compare locations',
]

// ─── Chart component ───────────────────────────────────────────────────────────
function MiniBarChart({ data, height = 80 }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end gap-[3px]" style={{ height }}>
      {data.map((val, i) => (
        <div
          key={i}
          className="flex-1 rounded-t transition-all hover:opacity-80"
          style={{
            height: `${(val / max) * 100}%`,
            background: i >= data.length - 3
              ? `linear-gradient(to top, ${theme.accent}, ${theme.accentLight})`
              : `linear-gradient(to top, rgba(184,115,51,0.25), rgba(184,115,51,0.1))`
          }}
        />
      ))}
    </div>
  )
}

// ─── Star rating ───────────────────────────────────────────────────────────────
function Stars({ rating, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'text-xs' : 'text-sm'
  return (
    <div className={`flex gap-0.5 ${sizeClass}`}>
      {[1, 2, 3, 4, 5].map(s => (
        <span key={s} className={s <= rating ? 'text-amber-400' : 'text-stone-300'}>★</span>
      ))}
    </div>
  )
}

// ─── Sidebar Navigation ────────────────────────────────────────────────────────
function Sidebar({ activeTab, onTabChange, collapsed, onToggleCollapse, chatOpen, onToggleChat }) {
  const tabs = [
    { id: 'overview', icon: '📊', label: 'Overview' },
    { id: 'reviews', icon: '⭐', label: 'Reviews' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'events', icon: '📅', label: 'Events' },
    { id: 'funding', icon: '💰', label: 'Funding' },
  ]

  return (
    <div className={`${collapsed ? 'w-16' : 'w-56'} flex-shrink-0 flex flex-col h-full transition-all duration-200`} style={{ backgroundColor: theme.sidebar }}>
      {/* Logo + collapse toggle */}
      <div className={`${collapsed ? 'p-3' : 'p-5'} border-b border-white/10`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
            <span className="text-lg">🍽</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">Mario's Trattoria</p>
              <p className="text-stone-500 text-[10px]">Restaurant Portal</p>
            </div>
          )}
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={onToggleCollapse}
        className="mx-auto mt-2 mb-1 w-7 h-7 rounded-md flex items-center justify-center text-stone-500 hover:text-white hover:bg-white/10 transition-colors"
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <span className="text-xs">{collapsed ? '→' : '←'}</span>
      </button>

      {/* Nav */}
      <nav className={`flex-1 ${collapsed ? 'p-2' : 'p-3'} space-y-1`}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center ${collapsed ? 'justify-center' : ''} gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-white/10 text-white font-medium'
                : 'text-stone-400 hover:text-white hover:bg-white/5'
            }`}
            title={collapsed ? tab.label : undefined}
          >
            <span className="text-base">{tab.icon}</span>
            {!collapsed && <span>{tab.label}</span>}
            {!collapsed && tab.id === 'reviews' && (
              <span className="ml-auto w-5 h-5 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center font-bold">4</span>
            )}
            {collapsed && tab.id === 'reviews' && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-[8px] text-white flex items-center justify-center font-bold">4</span>
            )}
          </button>
        ))}
      </nav>

      {/* AI Assistant button */}
      <div className={`${collapsed ? 'p-2' : 'p-3'} border-t border-white/10`}>
        <button
          onClick={onToggleChat}
          className={`w-full flex items-center ${collapsed ? 'justify-center' : ''} gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
            chatOpen
              ? 'bg-amber-600/20 text-amber-300 font-medium ring-1 ring-amber-500/30'
              : 'text-stone-400 hover:text-amber-300 hover:bg-amber-600/10'
          }`}
          title={collapsed ? 'Ask AI' : undefined}
        >
          <span className="text-base">✨</span>
          {!collapsed && <span>Ask AI</span>}
          {!collapsed && <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-medium">NEW</span>}
        </button>
      </div>

      {/* User */}
      <div className={`${collapsed ? 'p-3 justify-center' : 'p-4'} border-t border-white/10 flex items-center gap-3`}>
        <div className="w-8 h-8 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-semibold flex-shrink-0">M</div>
        {!collapsed && (
          <div>
            <p className="text-white text-xs font-medium">Mario Rossi</p>
            <p className="text-stone-500 text-[10px]">Owner</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Header ────────────────────────────────────────────────────────────────────
function DashHeader({ location, onLocationChange }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: theme.border }}>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold" style={{ color: theme.text }}>Dashboard</h1>
        <select
          value={location}
          onChange={e => onLocationChange(e.target.value)}
          className="text-sm bg-stone-50 border border-stone-200 rounded-lg px-3 py-1.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
        >
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <button className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors">
            <span className="text-sm">🔔</span>
          </button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">3</div>
        </div>
        <div className="text-xs text-stone-400">Last updated: 2 min ago</div>
      </div>
    </div>
  )
}

// ─── Overview Tab ──────────────────────────────────────────────────────────────
function OverviewTab({ location }) {
  const data = stats[location]
  const [dismissedNotifs, setDismissedNotifs] = useState([])

  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full">
      {/* Notification Banner */}
      <AnimatePresence>
        {notifications.filter(n => !dismissedNotifs.includes(n.id)).slice(0, 2).map(notif => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`flex items-center gap-3 rounded-xl p-4 border ${
              notif.priority === 'high'
                ? 'bg-emerald-50 border-emerald-200'
                : notif.priority === 'medium'
                ? 'bg-amber-50 border-amber-200'
                : 'bg-stone-50 border-stone-200'
            }`}
          >
            <div className="text-xl flex-shrink-0">{notif.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-800">{notif.title}</p>
              <p className="text-xs text-stone-500 mt-0.5">{notif.desc}</p>
            </div>
            <span className="text-[10px] text-stone-400 flex-shrink-0">{notif.time}</span>
            <button
              onClick={() => setDismissedNotifs(prev => [...prev, notif.id])}
              className="text-stone-400 hover:text-stone-600 flex-shrink-0 text-lg leading-none"
            >
              ×
            </button>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Diners', value: data.diners, change: '+12%', up: true, icon: '👥' },
          { label: 'Revenue', value: data.revenue, change: '+8%', up: true, icon: '💵' },
          { label: 'Avg Rating', value: data.rating, change: '+0.2', up: true, icon: '⭐' },
          { label: 'New Reviews', value: data.reviews, change: 'This month', up: null, icon: '💬' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-stone-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg">{stat.icon}</span>
              {stat.up !== null && (
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                  stat.up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                }`}>
                  {stat.up ? '↑' : '↓'} {stat.change}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-stone-800">{stat.value}</p>
            <p className="text-[11px] text-stone-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Diner Volume */}
        <div className="col-span-2 bg-white rounded-xl p-5 border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-stone-800">Diner Volume</p>
              <p className="text-xs text-stone-400">Last 30 days</p>
            </div>
            <div className="flex gap-1">
              {['7D', '30D', '90D'].map(period => (
                <button key={period} className={`text-[10px] px-2 py-1 rounded ${
                  period === '30D' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}>{period}</button>
              ))}
            </div>
          </div>
          <MiniBarChart
            data={[40, 55, 45, 65, 50, 70, 80, 60, 75, 90, 85, 95, 70, 80, 65, 75, 85, 90, 80, 95, 88, 92, 78, 85, 90, 95, 88, 92, 98, 100]}
            height={100}
          />
          <div className="flex justify-between text-[10px] text-stone-400 mt-2">
            <span>Apr 1</span>
            <span>Apr 30</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-5 border border-stone-200">
          <p className="text-sm font-medium text-stone-800 mb-3">Quick Actions</p>
          <div className="space-y-2">
            {[
              { label: 'Reply to reviews', count: '4 pending', color: 'bg-amber-500' },
              { label: 'Update specials', count: 'Last: 3 days ago', color: 'bg-blue-500' },
              { label: 'View funding offer', count: '$25K available', color: 'bg-emerald-500' },
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors text-left group">
                <div className={`w-2 h-2 rounded-full ${action.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-stone-700 group-hover:text-stone-900">{action.label}</p>
                  <p className="text-[10px] text-stone-400">{action.count}</p>
                </div>
                <span className="text-stone-300 group-hover:text-stone-500 text-sm">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-5 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-3">Recent Activity</p>
        <div className="divide-y divide-stone-100">
          {transactions.slice(0, 5).map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-xs">📋</div>
                <div>
                  <p className="text-xs font-medium text-stone-700">{tx.date}</p>
                  <p className="text-[10px] text-stone-400">{tx.diners} diners</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-stone-800">{tx.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Reviews Tab ───────────────────────────────────────────────────────────────
function ReviewsTab({ location }) {
  const [filter, setFilter] = useState('all')
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [repliedIds, setRepliedIds] = useState([3, 5])
  const [aiDraft, setAiDraft] = useState(null)

  const filteredReviews = reviews.filter(r => {
    if (location !== 'All Locations' && r.location !== location) return false
    if (filter === 'needs-reply') return !repliedIds.includes(r.id)
    if (filter === 'negative') return r.rating <= 3
    return true
  })

  const generateAiReply = (review) => {
    const replies = {
      positive: `Thank you so much for the wonderful review, ${review.name.split(' ')[0]}! We're thrilled you enjoyed your experience. Our team works hard to deliver authentic Italian cuisine and it means the world to hear that. We look forward to welcoming you back soon!`,
      mixed: `Thank you for your honest feedback, ${review.name.split(' ')[0]}. We're glad you enjoyed the food quality, and we appreciate you letting us know about the wait time. We're actively working on improving our reservation flow to reduce delays. Hope to see you again soon!`,
      negative: `We sincerely apologize for the experience, ${review.name.split(' ')[0]}. This isn't the standard we hold ourselves to. I've personally spoken with our hosting team about improving the reservation process. We'd love the chance to make it up to you - please reach out to me directly at mario@trattoria.com.`,
    }
    return replies[review.sentiment] || replies.positive
  }

  const handleReply = (reviewId) => {
    setRepliedIds(prev => [...prev, reviewId])
    setReplyingTo(null)
    setReplyText('')
    setAiDraft(null)
  }

  return (
    <div className="p-6 space-y-4 overflow-y-auto h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-stone-800">Diner Reviews</h2>
          <p className="text-xs text-stone-500">Manage and respond to your reviews across all platforms</p>
        </div>
        <div className="flex items-center gap-2 bg-stone-50 rounded-lg p-1 border border-stone-200">
          {[
            { id: 'all', label: 'All' },
            { id: 'needs-reply', label: 'Needs Reply' },
            { id: 'negative', label: 'Negative' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                filter === f.id ? 'bg-white text-stone-800 shadow-sm font-medium' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* AI Summary Card */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200/50">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <span className="text-sm">✨</span>
          </div>
          <div>
            <p className="text-sm font-medium text-amber-900">AI Review Summary</p>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Your 30-day sentiment is 82% positive. Main praise themes: food quality, ambiance. Area to improve: wait times during Friday/Saturday peak (mentioned in 4 reviews).
            </p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-3">
        {filteredReviews.map(review => (
          <div key={review.id} className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-sm font-semibold text-stone-600">
                  {review.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-stone-800">{review.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-500">{review.location}</span>
                  </div>
                  <Stars rating={review.rating} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-stone-400">{review.date}</span>
                {repliedIds.includes(review.id) && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">Replied</span>
                )}
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">{review.text}</p>

            {!repliedIds.includes(review.id) && (
              <div className="flex gap-2">
                <button
                  onClick={() => { setReplyingTo(review.id); setAiDraft(null); setReplyText(''); }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors font-medium"
                >
                  Reply
                </button>
                <button
                  onClick={() => { setReplyingTo(review.id); setAiDraft(generateAiReply(review)); setReplyText(generateAiReply(review)); }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors font-medium border border-amber-200"
                >
                  ✨ AI Draft Reply
                </button>
              </div>
            )}

            {/* Reply box */}
            <AnimatePresence>
              {replyingTo === review.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 overflow-hidden"
                >
                  <div className="border border-stone-200 rounded-lg p-3 bg-stone-50">
                    {aiDraft && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">✨ AI Generated</span>
                        <span className="text-[10px] text-stone-400">Edit as needed</span>
                      </div>
                    )}
                    <textarea
                      value={replyText}
                      onChange={e => setReplyText(e.target.value)}
                      placeholder="Write your reply..."
                      className="w-full text-xs text-stone-700 bg-white border border-stone-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      rows={3}
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        onClick={() => { setReplyingTo(null); setAiDraft(null); }}
                        className="text-xs px-3 py-1.5 rounded-lg text-stone-500 hover:text-stone-700"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleReply(review.id)}
                        className="text-xs px-4 py-1.5 rounded-lg bg-stone-800 text-white hover:bg-stone-700 font-medium"
                      >
                        Send Reply
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Analytics Tab ─────────────────────────────────────────────────────────────
function AnalyticsTab({ location }) {
  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-stone-800">Analytics</h2>
          <p className="text-xs text-stone-500">Performance metrics and trends</p>
        </div>
        <div className="flex gap-1 bg-stone-100 rounded-lg p-1">
          {['Week', 'Month', 'Quarter'].map(period => (
            <button key={period} className={`text-[11px] px-3 py-1.5 rounded-md ${
              period === 'Month' ? 'bg-white text-stone-800 shadow-sm font-medium' : 'text-stone-500'
            }`}>{period}</button>
          ))}
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 border border-stone-200">
          <p className="text-sm font-medium text-stone-800 mb-4">Revenue by Location</p>
          <div className="space-y-4">
            {[
              { loc: 'Downtown', amount: '$23.4K', pct: 45, color: 'from-amber-500 to-amber-400' },
              { loc: 'Midtown', amount: '$16.2K', pct: 31, color: 'from-amber-400 to-amber-300' },
              { loc: 'Westside', amount: '$12.5K', pct: 24, color: 'from-amber-300 to-amber-200' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-stone-700 font-medium">{item.loc}</span>
                  <span className="text-stone-500">{item.amount} ({item.pct}%)</span>
                </div>
                <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-stone-200">
          <p className="text-sm font-medium text-stone-800 mb-4">Rating Distribution</p>
          <div className="space-y-2.5">
            {[
              { stars: 5, count: 42, pct: 63 },
              { stars: 4, count: 15, pct: 22 },
              { stars: 3, count: 6, pct: 9 },
              { stars: 2, count: 3, pct: 4 },
              { stars: 1, count: 1, pct: 2 },
            ].map(item => (
              <div key={item.stars} className="flex items-center gap-2">
                <span className="text-[11px] text-stone-500 w-3">{item.stars}</span>
                <span className="text-amber-400 text-xs">★</span>
                <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-[10px] text-stone-400 w-8 text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Peak Hours Heatmap */}
      <div className="bg-white rounded-xl p-5 border border-stone-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-stone-800">Peak Dining Hours</p>
            <p className="text-[11px] text-stone-400">Heatmap of diner volume by day and time</p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-1.5">
          <div />
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-[10px] text-stone-400 text-center font-medium">{day}</div>
          ))}
          {['11am', '12pm', '1pm', '5pm', '6pm', '7pm', '8pm', '9pm'].map(time => (
            <>
              <div key={`label-${time}`} className="text-[10px] text-stone-400 text-right pr-2 flex items-center justify-end">{time}</div>
              {[0,1,2,3,4,5,6].map(day => {
                const isFriSat = day >= 4 && day <= 5
                const isEvening = ['7pm', '8pm', '9pm'].includes(time)
                const isLunch = ['12pm', '1pm'].includes(time)
                const base = 0.1
                const peak = (isFriSat && isEvening) ? 0.85 : (isEvening ? 0.55 : (isLunch ? 0.4 : 0.15))
                const jitter = Math.random() * 0.15
                const opacity = Math.min(base + peak + jitter, 1)
                return (
                  <div
                    key={`${time}-${day}`}
                    className="h-6 rounded"
                    style={{ backgroundColor: `rgba(217, 119, 6, ${opacity})` }}
                    title={`${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][day]} ${time}: ${Math.round(opacity * 100)}% capacity`}
                  />
                )
              })}
            </>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-xl p-5 text-white">
        <div className="flex items-start gap-3">
          <span className="text-xl">✨</span>
          <div>
            <p className="text-sm font-medium text-white">AI Insight</p>
            <p className="text-xs text-stone-300 mt-1 leading-relaxed">
              Your Friday evening revenue has grown 23% over the past 6 weeks, primarily driven by the Date Night Prix Fixe at Downtown. Consider expanding this to Midtown - similar demographics, 32% lower Friday utilization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Events Tab ────────────────────────────────────────────────────────────────
function EventsTab() {
  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-stone-800">Events & Specials</h2>
          <p className="text-xs text-stone-500">Manage your dining promotions across locations</p>
        </div>
        <button className="text-xs px-4 py-2 rounded-lg bg-stone-800 text-white hover:bg-stone-700 font-medium">
          + New Event
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {events.map(evt => (
          <div key={evt.id} className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-stone-800">{evt.name}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{evt.location}</p>
              </div>
              <span className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                evt.status === 'active'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-stone-50 text-stone-500 border border-stone-200'
              }`}>
                {evt.status === 'active' ? 'Active' : 'Draft'}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-stone-500">
              <span>📅 Next: {evt.nextDate}</span>
              {evt.diners > 0 && <span>👥 {evt.diners} avg diners</span>}
            </div>
            <div className="flex gap-2 mt-3">
              <button className="text-[11px] px-3 py-1.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 font-medium">Edit</button>
              <button className="text-[11px] px-3 py-1.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 font-medium">Analytics</button>
            </div>
          </div>
        ))}
      </div>

      {/* AI suggestion */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200/50">
        <div className="flex items-start gap-3">
          <span className="text-lg">✨</span>
          <div>
            <p className="text-sm font-medium text-amber-900">AI Suggestion</p>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Based on your diner data, Tuesdays have the lowest traffic across all locations (avg 38% capacity). Consider launching a "Taco Tuesday" or themed special to boost midweek volume. Similar restaurants saw 25% lifts with Tuesday promotions.
            </p>
            <button className="text-xs text-amber-800 font-medium mt-2 hover:underline">Create Event from Suggestion →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Funding Tab ───────────────────────────────────────────────────────────────
function FundingTab() {
  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full">
      <div>
        <h2 className="text-lg font-semibold text-stone-800">Merchant Cash Advance</h2>
        <p className="text-xs text-stone-500">Funding options based on your dining volume</p>
      </div>

      {/* Eligible funding */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">💰</div>
          <div className="flex-1">
            <p className="text-lg font-bold text-emerald-900">$75,000 Available</p>
            <p className="text-sm text-emerald-700 mt-1">Combined funding eligible across all locations</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { loc: 'Downtown', amount: '$25,000' },
                { loc: 'Midtown', amount: '$30,000' },
                { loc: 'Westside', amount: '$20,000' },
              ].map(item => (
                <div key={item.loc} className="bg-white/60 rounded-lg p-3 border border-emerald-100">
                  <p className="text-xs text-emerald-700">{item.loc}</p>
                  <p className="text-sm font-bold text-emerald-900">{item.amount}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm px-5 py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 font-medium transition-colors">
              Apply for Funding
            </button>
          </div>
        </div>
      </div>

      {/* Previous advances */}
      <div className="bg-white rounded-xl p-5 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-4">Previous Advances</p>
        <div className="space-y-3">
          {[
            { date: 'Jan 2026', amount: '$15,000', status: 'Repaid', location: 'Downtown' },
            { date: 'Oct 2025', amount: '$20,000', status: 'Repaid', location: 'Midtown' },
            { date: 'Jul 2025', amount: '$10,000', status: 'Repaid', location: 'Westside' },
          ].map((adv, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 border-b border-stone-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-xs">✓</div>
                <div>
                  <p className="text-xs font-medium text-stone-700">{adv.amount} - {adv.location}</p>
                  <p className="text-[10px] text-stone-400">{adv.date}</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">{adv.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── AI Chat Side Panel ────────────────────────────────────────────────────────
function AIChatPanel({ onClose }) {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi Mario! I\'m your restaurant analytics assistant. Ask me anything about your locations, reviews, revenue, or operations.' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef(null)

  useEffect(() => {
    // Scroll only the messages container, not the outer page
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = (text) => {
    const query = text || input
    if (!query.trim()) return

    setMessages(prev => [...prev, { role: 'user', text: query }])
    setInput('')
    setIsTyping(true)

    const lowerQuery = query.toLowerCase()
    let response = 'I can help with that! Based on your current data, let me pull together some insights. Try asking about specific locations, review trends, revenue comparisons, or what to focus on today.'

    for (const [key, val] of Object.entries(aiResponses)) {
      if (lowerQuery.includes(key) || key.split(' ').filter(w => w.length > 3).some(w => lowerQuery.includes(w))) {
        response = val
        break
      }
    }

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { role: 'ai', text: response }])
    }, 1200)
  }

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-2 right-2 bottom-2 w-[280px] bg-white rounded-xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden z-10"
    >
      {/* Header */}
      <div className="p-3 border-b border-stone-200 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
            <span className="text-white text-xs">✨</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-stone-800">AI Assistant</p>
            <p className="text-[9px] text-stone-400">Ask anything</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-6 h-6 rounded flex items-center justify-center text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors"
        >
          <span className="text-sm">×</span>
        </button>
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="p-3 border-b border-stone-100 flex-shrink-0">
          <p className="text-[9px] text-stone-400 uppercase tracking-wide mb-1.5 font-medium">Try asking</p>
          <div className="flex flex-wrap gap-1.5">
            {aiSuggestions.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => handleSend(suggestion)}
                className="text-[10px] px-2 py-1.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] rounded-lg px-3 py-2 text-[11px] leading-relaxed ${
              msg.role === 'user'
                ? 'bg-stone-800 text-white rounded-br-sm'
                : 'bg-stone-100 text-stone-700 rounded-bl-sm'
            }`}>
              {msg.text.split('\n').map((line, j) => (
                <p key={j} className={j > 0 ? 'mt-1' : ''}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-stone-100 rounded-lg px-3 py-2 rounded-bl-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-stone-200 flex gap-1.5 flex-shrink-0">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask about your restaurants..."
          className="flex-1 text-[11px] px-3 py-2 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-300"
        />
        <button
          onClick={() => handleSend()}
          className="px-3 py-2 rounded-lg bg-stone-800 text-white hover:bg-stone-700 transition-colors"
        >
          <span className="text-xs">↑</span>
        </button>
      </div>
    </motion.div>
  )
}

// ─── Main App Shell ────────────────────────────────────────────────────────────
export default function RestaurantDashboardApp({ currentScreen, onScreenChange }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [location, setLocation] = useState('All Locations')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  // Sync with external screen navigation if provided
  useEffect(() => {
    const tabs = ['overview', 'reviews', 'analytics', 'events', 'funding', 'ai']
    if (currentScreen !== undefined && tabs[currentScreen]) {
      if (tabs[currentScreen] === 'ai') {
        setChatOpen(true)
      } else {
        setActiveTab(tabs[currentScreen])
      }
    }
  }, [currentScreen])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (onScreenChange) {
      const tabs = ['overview', 'reviews', 'analytics', 'events', 'funding', 'ai']
      onScreenChange(tabs.indexOf(tab))
    }
  }

  const handleToggleChat = () => {
    setChatOpen(prev => !prev)
  }

  return (
    <div className="flex h-full w-full bg-stone-50 rounded-lg overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
        chatOpen={chatOpen}
        onToggleChat={handleToggleChat}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <DashHeader location={location} onLocationChange={setLocation} />
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeTab === 'overview' && <OverviewTab location={location} />}
              {activeTab === 'reviews' && <ReviewsTab location={location} />}
              {activeTab === 'analytics' && <AnalyticsTab location={location} />}
              {activeTab === 'events' && <EventsTab />}
              {activeTab === 'funding' && <FundingTab />}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {chatOpen && <AIChatPanel onClose={() => setChatOpen(false)} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
