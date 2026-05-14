import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const API_URL = import.meta.env.VITE_API_URL || ''

// Context-aware welcome messages and suggestions based on which page the user opens the chat from
const PAGE_CONTEXT = [
  { route: '/projects/mobile-task-tracker', prefix: false, welcome: "I see you're checking out the AI Powered Development Workflow project. Want me to walk you through the details?", suggestions: ['How was AI used in the development workflow?', 'What was the impact of the AI workflow?', 'Show me other projects'] },
  { route: '/projects/enterprise-designops-transformation', prefix: false, welcome: "I see you're looking at the DesignOps Transformation. Want me to tell you more about how Jamie scaled design operations?", suggestions: ['How did Jamie scale the design teams?', 'What tools were used for DesignOps?', 'Show me other projects'] },
  { route: '/projects/llm-integration-strategy', prefix: false, welcome: "I see you're viewing the Conversational Document Review project. Want to know how Jamie designed the AI assistant?", suggestions: ['How does the document review AI work?', 'What was the impact of the LLM integration?', 'Show me other projects'] },
  { route: '/projects/restaurant-portal-redesign', prefix: false, welcome: "I see you're looking at the Restaurant Portal Redesign. Want to know more about how Jamie led this UX transformation?", suggestions: ['What research methods were used for the Restaurant Portal?', 'What were the results of the redesign?', 'Show me other projects'] },
  { route: '/projects/rewards-network-marketing-website', prefix: false, welcome: "I see you're checking out the Rewards Network Redesign. Want to know how Jamie improved conversion rates?", suggestions: ['How were signups increased for Rewards Network?', 'How did Jamie redesign the Rewards Network site?', 'Show me other projects'] },
  { route: '/projects/', prefix: true, welcome: "I see you're exploring a project. I can answer any questions about Jamie's work, process, or impact.", suggestions: ['What did Jamie do on this project?', 'What are Jamie\'s top skills?', 'Show me other projects'] },
  { route: '/projects', prefix: false, welcome: "Browsing Jamie's projects? I can help you find the most relevant ones or answer questions about any of them.", suggestions: ['Which projects use AI?', 'Tell me about the DesignOps project', 'Show me the Restaurant Portal project'] },
  { route: '/skills', prefix: false, welcome: "Looking at Jamie's skills? I can go deeper into how she applies any of these in real projects.", suggestions: ['How does Jamie use AI in delivery?', 'Tell me about her UX expertise', 'Show me her projects'] },
  { route: '/resume', prefix: false, welcome: "Reviewing Jamie's resume? I can provide more context about her experience or answer specific questions.", suggestions: ['What\'s her background?', 'Tell me about her leadership experience', 'Show me her projects'] },
  { route: '/contact', prefix: false, welcome: "Want to get in touch? I can tell you more about Jamie's work so you know exactly what to ask about.", suggestions: ['What are Jamie\'s top skills?', 'Tell me about her projects', 'Where has Jamie worked?'] },
  { route: '/prototypes', prefix: false, welcome: "Exploring the interactive prototypes? I can walk you through Jamie's design process and thinking.", suggestions: ['Tell me about her design process', 'What tools does she use?', 'Show me her projects'] },
]

const DEFAULT_WELCOME = "Hi! I'm Jamie's portfolio assistant. Ask me about her skills, projects, or experience."
const DEFAULT_OPEN_SUGGESTIONS = ['What are Jamie\'s top skills?', 'Show me her projects', 'Tell me about Jamie']

function getPageContext(pathname) {
  const match = PAGE_CONTEXT.find((p) => {
    return p.prefix ? pathname.startsWith(p.route) : pathname === p.route
  })
  return match || null
}

// Human-readable page labels for navigation dividers
function getPageLabel(pathname) {
  const labels = {
    '/': 'Welcome',
    '/projects': 'Projects',
    '/projects/mobile-task-tracker': 'AI Powered Development Workflow',
    '/projects/enterprise-designops-transformation': 'DesignOps Transformation',
    '/projects/llm-integration-strategy': 'Conversational Document Review',
    '/projects/restaurant-portal-redesign': 'Restaurant Portal Redesign',
    '/projects/rewards-network-marketing-website': 'Rewards Network Redesign',
    '/skills': 'Skills',
    '/resume': 'Resume',
    '/contact': 'Contact',
    '/prototypes': 'Prototypes',
  }
  return labels[pathname] || pathname.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

// Map keywords in agent responses to portfolio routes
const PORTFOLIO_LINKS = [
  { pattern: /AI Powered Development Workflow/gi, path: '/projects/mobile-task-tracker', label: 'AI Powered Development Workflow' },
  { pattern: /DesignOps Transformation/gi, path: '/projects/enterprise-designops-transformation', label: 'DesignOps Transformation' },
  { pattern: /Conversational Document Review/gi, path: '/projects/llm-integration-strategy', label: 'Conversational Document Review' },
  { pattern: /Restaurant Portal Redesign/gi, path: '/projects/restaurant-portal-redesign', label: 'Restaurant Portal Redesign' },
  { pattern: /Rewards Network (?:Marketing )?(?:Website )?Redesign/gi, path: '/projects/rewards-network-marketing-website', label: 'Rewards Network Redesign' },
  { pattern: /Skills(?: page)?(?= -| \u2013|\.|,|$)/gi, path: '/skills', label: 'Skills' },
  { pattern: /(?:view |see |browse |visit )?(?:all )?[Pp]rojects(?: page)?(?= -| \u2013|\.|,|$)/gi, path: '/projects', label: 'Projects' },
  { pattern: /[Cc]ontact(?: page| info(?:rmation)?)?(?= -| \u2013|\.|,|$)/gi, path: '/contact', label: 'Contact' },
]

// Suggest follow-up questions based on the last bot response
const SUGGESTION_RULES = [
  { test: /welcome|hello|hi|greet|portfolio assistant/i, suggestions: ['What are Jamie\'s top skills?', 'Show me her projects', 'Tell me about Jamie'] },
  { test: /AI|automation|LLM|machine learning|agentic/i, suggestions: ['Show me her AI projects', 'What AI tools does she use?', 'How does she apply AI to delivery?'] },
  { test: /delivery|agile|scrum|program|cross-functional/i, suggestions: ['How many teams has she led?', 'Show me delivery projects', 'What about her UX background?'] },
  { test: /designops|design system|design process/i, suggestions: ['How did she scale design teams?', 'Show me the DesignOps Transformation', 'What tools does she use?'] },
  { test: /UX|user experience|research|usability|design/i, suggestions: ['Show me UX case studies', 'What research methods does she use?', 'Tell me about her AI skills'] },
  { test: /project|case study|portfolio/i, suggestions: ['Which projects use AI?', 'Tell me about the DesignOps project', 'Tell me about her background'] },
  { test: /background|career|experience|history|resume/i, suggestions: ['What are her top skills?', 'Show me her projects', 'How can I contact Jamie?'] },
  { test: /contact|email|linkedin|phone|connect/i, suggestions: ['Where has Jamie worked?', 'What are Jamie\'s top skills?', 'Show me her projects'] },
]

const DEFAULT_SUGGESTIONS = ['What are Jamie\'s skills?', 'Browse her projects', 'Tell me about her background']

// Suggestion chips that navigate directly instead of sending to the bot
const SUGGESTION_ROUTES = {
  'Show me her projects': '/projects',
  'Show me other projects': '/projects',
  'Show me her AI projects': '/projects',
  'Show me delivery projects': '/projects',
  'Show me UX case studies': '/projects',
  'Show me the DesignOps Transformation': '/projects/enterprise-designops-transformation',
  'Show me the Restaurant Portal project': '/projects/restaurant-portal-redesign',
  'Tell me about her projects': '/projects',
  'Browse her projects': '/projects',
  'How can I contact Jamie?': '/contact',
}

function getSuggestions(text) {
  for (const rule of SUGGESTION_RULES) {
    if (rule.test.test(text)) return rule.suggestions
  }
  return DEFAULT_SUGGESTIONS
}

// Parse markdown-style text into React elements
function FormattedMessage({ text, onNavigate, darkMode }) {
  // Split into lines and process each
  const lines = text.split('\n')

  const processInline = (str, keyPrefix) => {
    const parts = []
    let remaining = str

    // Process bold markers (**text** or __text__)
    const boldRegex = /\*\*(.+?)\*\*|__(.+?)__/g
    let lastIndex = 0
    let match

    const withBold = []
    boldRegex.lastIndex = 0
    while ((match = boldRegex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        withBold.push({ type: 'text', value: str.slice(lastIndex, match.index) })
      }
      withBold.push({ type: 'bold', value: match[1] || match[2] })
      lastIndex = boldRegex.lastIndex
    }
    if (lastIndex < str.length) {
      withBold.push({ type: 'text', value: str.slice(lastIndex) })
    }

    return withBold.map((part, i) => {
      if (part.type === 'bold') {
        return <strong key={`${keyPrefix}-b-${i}`} className="font-semibold">{part.value}</strong>
      }
      return <span key={`${keyPrefix}-t-${i}`}>{part.value}</span>
    })
  }

  const elements = []
  let inList = false

  lines.forEach((line, i) => {
    const trimmed = line.trim()

    // Skip empty lines but add spacing
    if (!trimmed) {
      if (inList) {
        inList = false
      }
      return
    }

    // List items (* item or - item)
    if (/^\*\s+|^-\s+/.test(trimmed)) {
      const content = trimmed.replace(/^\*\s+|^-\s+/, '')
      if (!inList) {
        inList = true
      }
      elements.push(
        <div key={`li-${i}`} className="flex gap-1.5 ml-1 mt-1">
          <span className="text-primary-500 shrink-0">-</span>
          <span>{processInline(content, `li-${i}`)}</span>
        </div>
      )
      return
    }

    inList = false
    // Regular paragraph
    elements.push(
      <p key={`p-${i}`} className={i > 0 ? 'mt-2' : ''}>
        {processInline(trimmed, `p-${i}`)}
      </p>
    )
  })

  return <>{elements}</>
}

// Render portfolio links extracted from the response
function PortfolioLinks({ text, onNavigate, darkMode }) {
  const links = []
  const seen = new Set()

  for (const { pattern, path, label } of PORTFOLIO_LINKS) {
    pattern.lastIndex = 0
    if (pattern.test(text) && !seen.has(path)) {
      seen.add(path)
      links.push({ path, label })
    }
  }

  if (links.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-1.5 mt-2 pt-2 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
      {links.map((link) => (
        <button
          key={link.path}
          onClick={() => onNavigate(link.path)}
          className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-primary-900/30 dark:text-primary-300 dark:hover:bg-primary-900/50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
          {link.label}
        </button>
      ))}
    </div>
  )
}

function ChatWidget() {
  const { darkMode } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId, setSessionId] = useState(null)
  const [openSuggestions, setOpenSuggestions] = useState(null)
  const prevPathRef = useRef(location.pathname)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Detect navigation while chat is open and inject a context divider
  useEffect(() => {
    if (!isOpen || location.pathname === prevPathRef.current) {
      prevPathRef.current = location.pathname
      return
    }
    prevPathRef.current = location.pathname

    const label = getPageLabel(location.pathname)
    const ctx = getPageContext(location.pathname)
    const botMsg = ctx?.welcome || `I see you're now viewing ${label}. Want to know more?`
    setMessages((prev) => [
      ...prev,
      { role: 'bot', text: botMsg },
    ])
    setOpenSuggestions(ctx?.suggestions || DEFAULT_OPEN_SUGGESTIONS)
  }, [location.pathname, isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const initSession = async () => {
    try {
      const res = await fetch(`${API_URL}/api/chat/init`, { method: 'POST' })
      const data = await res.json()
      setSessionId(data.sessionId)
      return data.sessionId
    } catch {
      return null
    }
  }

  const getWelcome = async (sid) => {
    // Use contextual welcome if available, otherwise fetch from backend
    const ctx = getPageContext(location.pathname)
    if (ctx) {
      setMessages([{ role: 'bot', text: ctx.welcome }])
      setOpenSuggestions(ctx.suggestions)
      return
    }

    try {
      const res = await fetch(`${API_URL}/api/chat/welcome`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sid }),
      })
      const data = await res.json()
      setMessages([{ role: 'bot', text: data.reply }])
    } catch {
      setMessages([{ role: 'bot', text: DEFAULT_WELCOME }])
    }
    setOpenSuggestions(DEFAULT_OPEN_SUGGESTIONS)
  }

  const handleOpen = async () => {
    setIsOpen(true)
    if (!sessionId) {
      const sid = await initSession()
      if (sid) {
        await getWelcome(sid)
      } else {
        const ctx = getPageContext(location.pathname)
        setMessages([{ role: 'bot', text: ctx?.welcome || DEFAULT_WELCOME }])
        setOpenSuggestions(ctx?.suggestions || DEFAULT_OPEN_SUGGESTIONS)
      }
    }
  }

  const handleNewChat = async () => {
    setMessages([])
    setInput('')
    setOpenSuggestions(null)
    const sid = await initSession()
    if (sid) {
      await getWelcome(sid)
    }
  }

  const sendMessage = async (e, suggestionText) => {
    if (e) e.preventDefault()
    const text = (suggestionText || input).trim()
    if (!text || loading) return

    // Clear one-time open suggestions after first user message
    setOpenSuggestions(null)

    setMessages((prev) => [...prev, { role: 'user', text }])
    if (!suggestionText) setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'bot', text: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Sorry, something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  // Floating toggle button
  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 z-50">
        {/* Glow ring */}
        <span className="absolute inset-0 rounded-full bg-primary-500/30 animate-ping" style={{ animationDuration: '2.5s' }} />
        <motion.button
          onClick={handleOpen}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/25 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Ask me anything"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" /><path d="M22 5h-4" />
          </svg>
        </motion.button>
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className={`fixed bottom-5 right-5 z-50 w-[380px] max-w-[calc(100vw-2.5rem)] h-[520px] max-h-[calc(100vh-2.5rem)] flex flex-col rounded-2xl shadow-2xl border overflow-hidden backdrop-blur-sm ${
          darkMode
            ? 'bg-gray-800/95 border-gray-700'
            : 'bg-white/95 border-gray-200'
        }`}
      >
        {/* Header - minimal, glassmorphic */}
        <div className={`flex items-center justify-between px-4 py-2.5 shrink-0 border-b ${
          darkMode ? 'border-gray-700 bg-gray-800/80' : 'border-gray-100 bg-gray-50/80'
        }`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className={`text-xs font-medium tracking-wide uppercase ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>AI Portfolio Guide</span>
          </div>
          <div className="flex items-center gap-0.5">
            <button
              onClick={handleNewChat}
              className={`p-1.5 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-500'
              }`}
              title="New chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5v14" />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1.5 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-500'
              }`}
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i === messages.length - 1 ? 0.05 : 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
            <div
              className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-primary-600 text-white rounded-2xl rounded-br-md'
                  : darkMode
                    ? 'bg-gray-700 text-gray-100 rounded-2xl rounded-bl-md'
                    : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md'
              }`}
            >
              <FormattedMessage text={msg.text} onNavigate={navigate} darkMode={darkMode} />
              {msg.role === 'bot' && (
                <PortfolioLinks text={msg.text} onNavigate={navigate} darkMode={darkMode} />
              )}
            </div>
          </motion.div>
          ))}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div
              className={`px-4 py-2.5 rounded-2xl rounded-bl-md text-sm ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}
            >
              <span className="inline-flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-400'}`}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </span>
            </div>
          </motion.div>
        )}
        {!loading && messages.length > 0 && messages[messages.length - 1].role === 'bot' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-1.5 pt-1"
          >
            {(openSuggestions || getSuggestions(messages[messages.length - 1].text)).map((s) => {
              const navRoute = SUGGESTION_ROUTES[s]
              return (
              <button
                key={s}
                onClick={() => navRoute ? navigate(navRoute) : sendMessage(null, s)}
                className={`px-2.5 py-1 text-xs rounded-full border transition-all duration-200 hover:scale-[1.03] inline-flex items-center gap-1 ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-primary-500 hover:text-primary-300'
                    : 'border-gray-300 text-gray-600 hover:bg-primary-50 hover:border-primary-400 hover:text-primary-700'
                }`}
              >
                {navRoute && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  </svg>
                )}
                {s}
              </button>
              )
            })}
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className={`shrink-0 flex items-center gap-2 p-3 border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-100'
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about skills, projects, experience..."
          className={`flex-1 px-3 py-2 rounded-xl text-sm outline-none border transition-colors ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500'
              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-primary-500'
          }`}
          disabled={loading}
        />
        <motion.button
          type="submit"
          disabled={loading || !input.trim()}
          className="p-2 rounded-xl bg-primary-600 text-white disabled:opacity-30 hover:bg-primary-700 transition-colors"
          whileTap={{ scale: 0.92 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
          </svg>
        </motion.button>
      </form>
    </motion.div>
    </AnimatePresence>
  )
}

export default ChatWidget
