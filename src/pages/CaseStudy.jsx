import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'
import { 
  SmallPhoneFrame,
  BrowserFrame,
  DesktopBrowserFrame,
  ProfileScreenStatic,
  TaskCategoriesScreenStatic,
  CompletedTasksScreen,
  QuestionnaireScreen,
  AvailableActivationsScreen,
  PhotoCaptureScreen,
  EventDiscoveryScreen,
  ShiftSummaryScreen,
  InvestigateDocumentScreen,
  NLPDocumentSearchScreen,
  SourceInspectorScreen,
  EmptySearchScreen
} from '../components/StaticScreens'
import { DocumentationViewer } from '../components/DocumentationViewer'
import { CodeReviewViewer } from '../components/CodeReviewViewer'
import { WorkflowDiagram } from '../components/WorkflowDiagram'
import { KeyInsights } from '../components/KeyInsights'
import { CaseStudyHero } from '../components/CaseStudyHero'

// Icons for the collapsed spec bar
const ClockIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const UserIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const WrenchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const TeamIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const LightbulbIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const TargetIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
)

// Journey icons
const SunIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const MoonIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

const UsersIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

// Interactive Feature Pills Component for Screen Gallery
function FeaturePills({ bullets, index }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  // Color schemes for different screen indices
  const colorSchemes = [
    { gradient: 'from-violet-500 to-indigo-500', glow: 'shadow-violet-500/20', text: 'text-violet-300', border: 'border-violet-500/30', bg: 'bg-violet-500/5' },
    { gradient: 'from-amber-500 to-orange-500', glow: 'shadow-amber-500/20', text: 'text-amber-300', border: 'border-amber-500/30', bg: 'bg-amber-500/5' },
    { gradient: 'from-emerald-500 to-teal-500', glow: 'shadow-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-500/30', bg: 'bg-emerald-500/5' },
  ]
  const colors = colorSchemes[index % colorSchemes.length]
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-3">
        {bullets.map((bullet, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: j * 0.1 }}
            onMouseEnter={() => setHoveredIndex(j)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-default ${
              hoveredIndex === j 
                ? `${colors.bg} ${colors.border} shadow-lg ${colors.glow}` 
                : 'border-slate-700/50 hover:border-slate-600/50'
            }`}
          >
            {/* Number indicator */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              hoveredIndex === j
                ? `bg-gradient-to-br ${colors.gradient} text-white`
                : 'bg-slate-800 text-slate-400'
            }`}>
              {j + 1}
            </div>
            
            {/* Feature text */}
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              hoveredIndex === j ? colors.text : 'text-slate-400'
            }`}>
              {bullet}
            </p>
            
            {/* Animated arrow on hover */}
            <motion.div 
              className={`flex-shrink-0 ml-auto transition-all duration-300 ${
                hoveredIndex === j ? 'opacity-100' : 'opacity-0'
              }`}
              animate={{ x: hoveredIndex === j ? [0, 4, 0] : 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Sam's Journey Timeline Component
function SamJourneyTimeline({ journeySteps }) {
  const getIcon = (icon) => {
    switch (icon) {
      case 'sun': return SunIcon
      case 'moon': return MoonIcon
      case 'users': return UsersIcon
      case 'clock': 
      default: return ClockIcon
    }
  }

  const getMoodColor = (mood) => {
    switch (mood) {
      case 'anxious': return 'from-amber-400 to-orange-500'
      case 'overwhelmed': return 'from-orange-400 to-red-500'
      case 'stressed': return 'from-red-400 to-rose-500'
      case 'exhausted': return 'from-purple-400 to-indigo-500'
      default: return 'from-gray-400 to-gray-500'
    }
  }

  const getMoodBg = (mood) => {
    switch (mood) {
      case 'anxious': return 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
      case 'overwhelmed': return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
      case 'stressed': return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
      case 'exhausted': return 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
      default: return 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
    }
  }

  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {journeySteps.map((step, i) => {
          const IconComponent = getIcon(step.icon)
          return (
            <div 
              key={i} 
              className={`relative rounded-2xl border p-5 ${getMoodBg(step.mood)} transition-all hover:scale-[1.02]`}
            >
              {/* Time badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${getMoodColor(step.mood)} text-white text-sm font-bold mb-4`}>
                <IconComponent className="w-4 h-4" />
                {step.time}
              </div>
              
              {/* Label */}
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                {step.label}
              </h4>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line for desktop */}
              {i < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gray-300 dark:bg-gray-600" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Before/After Screen Comparison - Uses React components for new designs
function BeforeAfterScreens({ items, takeaways }) {
  const getNewScreenComponent = (screenType) => {
    switch (screenType) {
      case 'profile': return ProfileScreenStatic
      case 'tasks': return TaskCategoriesScreenStatic
      case 'completed': return CompletedTasksScreen
      case 'questionnaire': return QuestionnaireScreen
      case 'activations': return AvailableActivationsScreen
      case 'photo': return PhotoCaptureScreen
      case 'discovery': return EventDiscoveryScreen
      default: return ProfileScreenStatic
    }
  }

  const takeawayIcons = [
    // Calendar/Day icon
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    // Lightning bolt / Easy icon
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // AI/Brain icon
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
  ]

  const takeawayColors = [
    { bg: 'from-amber-500 to-orange-500', glow: 'amber' },
    { bg: 'from-teal-500 to-emerald-500', glow: 'teal' },
    { bg: 'from-violet-500 to-purple-500', glow: 'violet' },
  ]

  return (
    <div className="mt-12 space-y-8">
      {items.map((item, i) => {
        const NewScreenComponent = getNewScreenComponent(item.newScreen)
        
        return (
          <motion.div 
            key={item.id}
            className="relative rounded-[2rem] p-6 md:p-10 overflow-hidden border border-gray-300/50 dark:border-gray-600/50"
            style={{
              background: 'linear-gradient(145deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 50%, rgba(2,6,23,1) 100%)',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Large background number */}
            <motion.div 
              className="absolute -top-6 -left-2 text-[10rem] md:text-[14rem] font-black leading-none select-none pointer-events-none"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                WebkitTextFillColor: 'transparent',
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {String(i + 1).padStart(2, '0')}
            </motion.div>

            {/* Content - positioned above background number */}
            <div className="relative z-10">
              {/* Section Header */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {item.title}
                </h3>
              </motion.div>

              {/* Two-column comparison grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* BEFORE Card */}
                <motion.div 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Card header - Problem */}
                  <div className="bg-gradient-to-r from-amber-500 to-orange-400 px-5 py-4">
                    <p className="text-xs font-bold text-white/90 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-sm font-medium text-white leading-snug">{item.pain}</p>
                  </div>
                  
                  {/* Phone container */}
                  <div className="p-6 flex justify-center bg-gradient-to-b from-white to-gray-50">
                    <motion.div 
                      className="w-[200px] md:w-[220px] rounded-[1.8rem] overflow-hidden shadow-xl border-[3px] border-gray-200"
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <img 
                        src={item.oldImage} 
                        alt="Previous design"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* AFTER Card */}
                <motion.div 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Subtle celebration sparkles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="absolute w-1 h-1 rounded-full bg-teal-400"
                        style={{
                          left: `${15 + j * 15}%`,
                          top: '50%',
                        }}
                        initial={{ opacity: 0, y: 0, scale: 0 }}
                        whileInView={{ 
                          opacity: [0, 1, 1, 0],
                          y: [0, -60 - j * 10, -120 - j * 15, -180],
                          scale: [0, 1, 0.8, 0],
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 2,
                          delay: 0.8 + j * 0.15,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                    {/* Shimmer line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '200%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Card header - Solution */}
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-4 relative overflow-hidden">
                    {/* Subtle animated glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                    />
                    <p className="text-xs font-bold text-white/90 uppercase tracking-wider mb-1 relative z-10">Solution</p>
                    <p className="text-sm font-medium text-white leading-snug relative z-10">{item.solution}</p>
                  </div>
                  
                  {/* Phone container */}
                  <div className="p-6 flex justify-center bg-gradient-to-b from-white to-gray-50">
                    <motion.div
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <SmallPhoneFrame>
                        <NewScreenComponent />
                      </SmallPhoneFrame>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Bottom summary - only show if no takeaways */}
      {(!takeaways || takeaways.length === 0) && (
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            The Shift: Complexity to Clarity
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Every decision driven by Sam's real-world needs
          </p>
        </motion.div>
      )}
    </div>
  )
}

// Legacy Design Carousel Component (for backwards compatibility)
function DesignCarousel({ items }) {
  return (
    <div className="mt-8 space-y-16">
      {items.map((item, i) => (
        <motion.div 
          key={item.id}
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 md:gap-4 text-sm md:text-base">
              <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full font-medium">
                {item.pain}
              </span>
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full font-medium">
                {item.solution}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20">
            <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="absolute -inset-4 bg-gradient-to-br from-red-200/50 to-orange-200/50 dark:from-red-900/20 dark:to-orange-900/20 rounded-[2rem] blur-xl opacity-60" />
              <div className="relative">
                <div className="w-36 md:w-44 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700 bg-white">
                  <img src={item.before.src} alt={item.before.caption} className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
                    {item.before.caption}
                  </span>
                </div>
              </div>
            </motion.div>
            <div className="flex-shrink-0 hidden md:flex items-center justify-center">
              <motion.div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </div>
            <div className="md:hidden">
              <svg className="w-8 h-8 text-teal-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/50 to-emerald-200/50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-[2rem] blur-xl opacity-60" />
              <div className="relative">
                <div className="w-36 md:w-44 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-teal-300 dark:border-teal-700 bg-white">
                  <img src={item.after.src} alt={item.after.caption} className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium text-teal-600 dark:text-teal-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm border border-teal-200 dark:border-teal-800">
                    {item.after.caption}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Legacy Design Decisions Component (for backwards compatibility)
function DesignDecisions({ decisions }) {
  return (
    <div className="mt-8 space-y-4">
      {decisions.map((decision, i) => (
        <div 
          key={i}
          className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800"
        >
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-5 bg-red-50 dark:bg-red-900/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Problem</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{decision.problem}</p>
            </div>
            <div className="p-5 bg-blue-50 dark:bg-blue-900/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Decision</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{decision.decision}</p>
            </div>
            <div className="p-5 bg-teal-50 dark:bg-teal-900/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Result</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{decision.result}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Before/After Comparison Component - Animated bento boxes
function BeforeAfterComparison({ beforeAfter }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  // Icons for before items (struggles)
  const beforeIcons = [
    // Anxious/confused
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    </svg>,
    // Juggling/chaos
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>,
    // Invisible/unrecorded
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>,
    // Forgetting/incomplete
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Unknown/question
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  ]

  // Icons for after items (solutions)
  const afterIcons = [
    // Prepared/coffee morning
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    // One-tap/easy
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>,
    // Camera/photo
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    // Checklist/complete
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Star/reliable
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>,
  ]

  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Before Column */}
        <div className="space-y-3">
          {beforeAfter.before.items.map((item, i) => (
            <motion.div
              key={i}
              className={`bg-slate-700/50 backdrop-blur rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                hoveredIndex === i 
                  ? 'border-teal-500 bg-slate-600/70 scale-[1.02] shadow-lg shadow-teal-500/20' 
                  : 'border-slate-600/50 hover:border-slate-500/50'
              }`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  hoveredIndex === i
                    ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white'
                    : 'bg-gradient-to-br from-slate-600 to-slate-700 text-slate-300'
                }`}>
                  {beforeIcons[i]}
                </div>
                <p className="text-slate-300 text-sm leading-snug">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* After Column */}
        <div className="space-y-3">
          {beforeAfter.after.items.map((item, i) => (
            <motion.div
              key={i}
              className={`backdrop-blur rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                hoveredIndex === i 
                  ? 'bg-gradient-to-br from-teal-800/50 to-emerald-800/50 border-teal-400 scale-[1.02] shadow-lg shadow-teal-500/30' 
                  : 'bg-gradient-to-br from-teal-900/30 to-emerald-900/30 border-teal-700/50 hover:border-teal-500/50'
              }`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 ${
                  hoveredIndex === i
                    ? 'bg-gradient-to-br from-teal-400 to-emerald-400 scale-110'
                    : 'bg-gradient-to-br from-teal-500 to-emerald-500'
                }`}>
                  {afterIcons[i]}
                </div>
                <p className="text-teal-100 text-sm leading-snug">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Static Screen Gallery Component - Shows screens with link to interactive prototype
function ScreenGallery({ prototype, prototypeLink }) {
  const screens = [
    { 
      component: ShiftSummaryScreen, 
      title: 'Shift Summary',
      description: 'After checkout, Sam sees his completed work with photo proof. Managers can now see his track record—great work is finally visible.'
    },
    { 
      component: TaskCategoriesScreenStatic, 
      title: 'Task Categories',
      description: 'Tasks are organized by time-based milestones: Before, During, Check Out, and After. This helps event staff prioritize work based on the event timeline.'
    },
    { 
      component: CompletedTasksScreen, 
      title: 'Completed Tasks',
      description: 'The completed view shows all tasks marked as done with timestamps. Progress indicators and checkmarks provide visual confirmation of completion status.'
    },
    { 
      component: QuestionnaireScreen, 
      title: 'Event Questionnaire',
      description: 'After event completion, staff fill out a questionnaire to capture event data like guest count, venue condition, and other key metrics for managers.'
    }
  ]

  return (
    <div className="mt-12">
      {/* Section Header with Prototype Link */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {prototype.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            {prototype.description}
          </p>
        </div>
        {prototypeLink && (
          <Link 
            to={prototypeLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl group whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Try Interactive Prototype
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>

      {/* Screen Gallery Grid */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {screens.map((screen, i) => {
          const ScreenComponent = screen.component
          return (
            <div key={i} className="group">
              {/* Phone Frame with Screen */}
              <div className={`relative rounded-[2rem] p-6 md:p-8 mb-6 ${
                i % 4 === 0 ? 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20' :
                i % 4 === 1 ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' :
                i % 4 === 2 ? 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20' :
                'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20'
              }`}>
                <div className="flex justify-center">
                  <SmallPhoneFrame>
                    <ScreenComponent />
                  </SmallPhoneFrame>
                </div>
              </div>
              
              {/* Title and Description */}
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {screen.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {screen.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Feature bullets */}
      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
        <ul className="grid sm:grid-cols-2 gap-3">
          {prototype.bullets.map((bullet, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies[slug]
  const articleRef = useRef(null)

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = articleRef.current?.querySelectorAll('.group')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [slug])

  if (!study) {
    return (
      <div className="py-16 px-4 text-center">
        <h1 className="font-display text-3xl text-gray-900 dark:text-white mb-4 uppercase">Case Study Not Found</h1>
        <Link to="/projects" className="text-primary-600 dark:text-primary-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <article ref={articleRef} className="min-h-screen">
      {/* New Framer Motion Hero */}
      {study.heroImage ? (
        <CaseStudyHero study={study} />
      ) : (
        /* Fallback Hero Section for case studies without heroImage */
        <section className="pt-8 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {study.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {study.subtitle}
            </p>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">

          {/* Process Sections with magazine-style containment */}
          {study.process.map((section, index) => {
            // Section color themes for visual containment
            const sectionThemes = [
              { bg: 'bg-slate-900', text: 'text-white', accent: 'teal' },
              { bg: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20', text: 'text-gray-900 dark:text-white', accent: 'amber' },
              { bg: 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20', text: 'text-gray-900 dark:text-white', accent: 'violet' },
              { bg: 'bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20', text: 'text-gray-900 dark:text-white', accent: 'teal' },
              { bg: 'bg-slate-900', text: 'text-white', accent: 'amber' },
            ]
            const theme = sectionThemes[index % sectionThemes.length]
            const isDark = theme.bg.includes('slate-900')
            
            // Special handling for combined problem+research section (no title, has bento)
            const isProblemResearchSection = !section.title && (section.problemBento || section.researchBanner)
            const researchIcons = {
              users: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              calendar: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              workflow: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h6M4 12h10M4 18h14" />
                </svg>
              ),
              document: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h6m2 6H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              pattern: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h4m4 0h8M4 12h8m4 0h4M4 18h12" />
                </svg>
              ),
              spark: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h2m10 0h2M12 5v2m0 10v2M8.464 8.464l1.414 1.414m4.244 4.244l1.414 1.414m0-9.072l-1.414 1.414M8.464 15.536l-1.414 1.414" />
                </svg>
              )
            }
            
            // Special AI Section Hero
            if (section.isAISection && section.aiHero) {
              return (
                <section key={index} className="relative mb-8" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
                  {/* AI Section Hero - Full Width Dramatic */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
                    {/* Grid Pattern */}
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                      }}
                    />
                    {/* Gradient Orbs */}
                    <motion.div 
                      className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[120px]"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/30 rounded-full blur-[100px]"
                      animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-[80px]"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 12, repeat: Infinity }}
                    />

                    <div className="relative z-10 px-4 md:px-8 lg:px-16 py-20 md:py-32">
                      <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                          {/* Left - Content */}
                          <motion.div 
                            className="text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                          >
                            {/* Tagline */}
                            <motion.div
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                              >
                                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                                </svg>
                              </motion.div>
                              <span className="text-xs font-bold uppercase tracking-wider text-violet-300">
                                {section.aiHero.tagline}
                              </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h2 
                              className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                            >
                              {section.aiHero.headline.split('.').map((part, i) => (
                                <span key={i}>
                                  {i === 0 ? (
                                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-teal-400 bg-clip-text text-transparent">{part}.</span>
                                  ) : (
                                    <><br /><span className="text-white">{part}</span></>
                                  )}
                                </span>
                              ))}
                            </motion.h2>

                            {/* Subheadline */}
                            <motion.p 
                              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              {section.aiHero.subheadline}
                            </motion.p>

                            {/* Speed Badge */}
                            <motion.div 
                              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-2xl border border-white/20">
                                <span className="text-gray-400 text-sm">Traditional</span>
                                <span className="text-white font-bold text-lg">12 to 16 weeks</span>
                              </div>
                              <motion.svg 
                                className="w-8 h-8 text-teal-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </motion.svg>
                              <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl border border-teal-400/40">
                                <span className="text-teal-300 text-sm">With AI</span>
                                <span className="text-teal-300 font-bold text-lg">3 to 4 weeks</span>
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Right - Document Investigation Mockup */}
                          <motion.div 
                            className="relative flex justify-center lg:justify-end"
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                          >
                            {/* Glow behind browser */}
                            <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                              <motion.div 
                                className="w-80 h-80 bg-gradient-to-r from-amber-500 to-indigo-600 rounded-full blur-[80px] opacity-50"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  opacity: [0.4, 0.6, 0.4]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                              />
                            </div>

                            {/* Browser with floating elements */}
                            <div className="relative">
                              {/* Floating Document/Legal elements */}
                              <motion.div 
                                className="absolute -top-6 -left-12 w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/40"
                                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                {/* Scales of Justice */}
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 3C10.9 3 10 3.9 10 5H7C5.9 5 5 5.9 5 7V8L1 12H5C5 14.2 6.8 16 9 16H10V19H8V21H16V19H14V16H15C17.2 16 19 14.2 19 12H23L19 8V7C19 5.9 18.1 5 17 5H14C14 3.9 13.1 3 12 3ZM12 5C12.6 5 13 5.4 13 6S12.6 7 12 7 11 6.6 11 6 11.4 5 12 5ZM7 8H17V9L14.5 12H9.5L7 9V8Z"/>
                                </svg>
                              </motion.div>

                              <motion.div 
                                className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-2xl shadow-indigo-500/40"
                                animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                              >
                                {/* Search/Magnifying Glass */}
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                              </motion.div>

                              <motion.div 
                                className="absolute bottom-24 -left-14 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-2xl shadow-slate-500/40"
                                animate={{ y: [0, -8, 0], x: [-2, 2, -2] }}
                                transition={{ duration: 4, repeat: Infinity }}
                              >
                                {/* Document */}
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                                </svg>
                              </motion.div>

                              <motion.div 
                                className="absolute bottom-12 -right-10 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40"
                                animate={{ y: [-3, 3, -3], scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                              >
                                {/* Citation/Link */}
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                              </motion.div>

                              {/* The Browser with Document Investigation UI */}
                              <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                              >
                                <BrowserFrame>
                                  <InvestigateDocumentScreen />
                                </BrowserFrame>
                              </motion.div>

                              {/* Particle dots */}
                              {[...Array(8)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-2 h-2 bg-white/50 rounded-full"
                                  style={{
                                    top: `${10 + Math.random() * 80}%`,
                                    left: `${-15 + Math.random() * 130}%`,
                                  }}
                                  animate={{ 
                                    y: [0, -20, 0],
                                    opacity: [0.2, 0.7, 0.2]
                                  }}
                                  transition={{ 
                                    duration: 2 + Math.random() * 2, 
                                    repeat: Infinity,
                                    delay: Math.random() * 2
                                  }}
                                />
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comparison Section */}
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
                      {section.aiIntroComparison && (
                        <div className="space-y-10">
                          {/* Headline */}
                          <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                          >
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                              {section.aiIntroComparison.headline}
                            </h3>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                              {section.aiIntroComparison.subtext}
                            </p>
                          </motion.div>

                          {/* Comparison Grid */}
                          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {/* Traditional Process */}
                            <motion.div
                              className="relative bg-slate-800/50 rounded-3xl p-6 md:p-8 overflow-hidden border border-slate-700"
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                            >
                              {/* Header */}
                              <div className="flex items-center justify-between mb-6">
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    {section.aiIntroComparison.traditional.label}
                                  </span>
                                  <div className="flex items-center gap-2 mt-1">
                                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-2xl font-black text-slate-400">
                                      {section.aiIntroComparison.traditional.timeline}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Process Items */}
                              <div className="space-y-4">
                                {section.aiIntroComparison.traditional.items.map((item, i) => (
                                  <motion.div
                                    key={i}
                                    className="bg-slate-700/30 rounded-xl p-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * i }}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-8 h-8 rounded-lg bg-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-slate-400">{i + 1}</span>
                                      </div>
                                      <div>
                                        <h4 className="font-bold text-slate-300 mb-1">{item.phase}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.pain}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            {/* AI-Accelerated Process */}
                            <motion.div
                              className="relative bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-3xl p-6 md:p-8 overflow-hidden border-2 border-teal-500/40"
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                            >
                              {/* Sparkle decoration */}
                              <motion.div 
                                className="absolute top-4 right-4"
                                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                              >
                                <svg className="w-10 h-10 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                                </svg>
                              </motion.div>
                              
                              {/* Header */}
                              <div className="flex items-center justify-between mb-6">
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                                    {section.aiIntroComparison.accelerated.label}
                                  </span>
                                  <div className="flex items-center gap-2 mt-1">
                                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="text-2xl font-black text-teal-300">
                                      {section.aiIntroComparison.accelerated.timeline}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Process Items */}
                              <div className="space-y-4">
                                {section.aiIntroComparison.accelerated.items.map((item, i) => (
                                  <motion.div
                                    key={i}
                                    className="bg-teal-800/20 rounded-xl p-4 border border-teal-700/30"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * i }}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                      </div>
                                      <div>
                                        <h4 className="font-bold text-teal-200 mb-1">{item.phase}</h4>
                                        <p className="text-sm text-teal-300/80 leading-relaxed">{item.benefit}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>

                          {/* Bottom content */}
                          {section.content && (
                            <motion.div 
                              className="mt-10 text-center"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              {section.content.map((paragraph, i) => (
                                <p key={i} className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">{paragraph}</p>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )
            }
            
            return (
              <section key={index} className="mb-8">
                {/* Full-width section banner */}
                <motion.div 
                  className={`-mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24 ${isProblemResearchSection ? 'bg-transparent' : theme.bg} ${isDark && !isProblemResearchSection ? '' : isProblemResearchSection ? '' : 'border border-gray-200/50 dark:border-gray-700/50'} rounded-[2rem] md:rounded-[3rem] overflow-hidden`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {/* Section Header Banner */}
                  {section.title && (
                    <motion.div 
                      className={`relative px-6 md:px-12 lg:px-16 pt-10 pb-0`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.h2 
                        className={`text-3xl md:text-5xl lg:text-6xl font-black ${theme.text} leading-tight relative z-10`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        {section.title}
                      </motion.h2>
                    </motion.div>
                  )}
                  
                  {/* Section Content Container */}
                  <div className={`${isProblemResearchSection ? 'px-0 py-0' : 'px-6 md:px-12 lg:px-16 pt-4 pb-8 md:pb-10'}`}>
                  
                    {/* Standard content paragraphs */}
                    {section.content && !section.imageGallery && !section.problemStory && !section.problemBento && (
                      <motion.div 
                        className="prose prose-lg dark:prose-invert max-w-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {section.content.map((paragraph, i) => (
                          <p key={i} className={`${isDark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'} mb-4 leading-relaxed text-lg`}>{paragraph}</p>
                        ))}
                      </motion.div>
                    )}

                    {/* Combined Problem + Research Bento Layout */}
                    {(section.problemBento || section.researchBanner) && (
                      <motion.div 
                        className="-mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 2xl:-mx-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-none md:rounded-[32px] p-6 md:p-10 lg:p-12 xl:p-16 relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Decorative gradient orbs */}
                        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-rose-500/15 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/15 to-transparent rounded-full blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-2xl" />
                        
                        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                          {/* Left Side - Problem Content */}
                          {section.problemBento && section.problemBento.callout && (
                            <div className="space-y-5">
                              {/* Headline */}
                              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                {section.problemBento.callout.headline}
                              </h3>
                              
                              {/* Description */}
                              <p className="text-slate-300 text-base leading-relaxed">
                                {section.problemBento.callout.subtext}
                              </p>
                              
                              {/* Visual pain points */}
                              <div className="flex flex-wrap gap-2 pt-2">
                                {(section.problemBento.callout.painPoints || ['Missed tasks', 'No visibility', "Can't prove work"]).map((point, i) => {
                                  const colors = [
                                    'bg-rose-500/20 border-rose-500/30 text-rose-300',
                                    'bg-amber-500/20 border-amber-500/30 text-amber-300',
                                    'bg-orange-500/20 border-orange-500/30 text-orange-300'
                                  ]
                                  return (
                                    <motion.span
                                      key={i}
                                      className={`px-4 py-2 ${colors[i % colors.length]} border rounded-full text-sm font-medium shadow-lg`}
                                      initial={{ opacity: 0, y: 12, scale: 0.9 }}
                                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.4, delay: 0.08 * i }}
                                    >
                                      {point}
                                    </motion.span>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {/* Right Side - Animated Stacking Papers */}
                          {!section.researchBanner && section.problemBento && (
                            <div className="relative h-72 md:h-80 flex items-center justify-center">
                              {/* Paper stack animation */}
                              <div className="relative w-48 h-64">
                                {[...Array(8)].map((_, i) => {
                                  const rotations = [-4, 2, -1, 3, -2, 1, -3, 0]
                                  const offsets = [
                                    { x: -8, y: 0 },
                                    { x: 6, y: -4 },
                                    { x: -4, y: -8 },
                                    { x: 8, y: -12 },
                                    { x: -6, y: -16 },
                                    { x: 4, y: -20 },
                                    { x: -2, y: -24 },
                                    { x: 0, y: -28 }
                                  ]
                                  const colors = [
                                    'from-amber-100 to-amber-50',
                                    'from-stone-100 to-stone-50',
                                    'from-orange-100 to-orange-50',
                                    'from-yellow-100 to-yellow-50',
                                    'from-amber-50 to-white',
                                    'from-stone-50 to-white',
                                    'from-orange-50 to-white',
                                    'from-amber-100 to-amber-50'
                                  ]
                                  return (
                                    <motion.div
                                      key={i}
                                      className={`absolute inset-0 bg-gradient-to-br ${colors[i]} rounded-sm shadow-lg border border-stone-200/50`}
                                      style={{
                                        transformOrigin: 'center bottom'
                                      }}
                                      initial={{ 
                                        opacity: 0, 
                                        y: -100, 
                                        rotate: rotations[i] - 10,
                                        scale: 0.9
                                      }}
                                      whileInView={{ 
                                        opacity: 1, 
                                        y: offsets[i].y, 
                                        x: offsets[i].x,
                                        rotate: rotations[i],
                                        scale: 1
                                      }}
                                      viewport={{ once: true }}
                                      transition={{ 
                                        duration: 0.5, 
                                        delay: 0.1 * i,
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 14
                                      }}
                                    >
                                      {/* Paper lines */}
                                      <div className="absolute inset-4 space-y-2">
                                        {[...Array(6)].map((_, j) => (
                                          <div 
                                            key={j} 
                                            className="h-1.5 bg-stone-300/40 rounded-full"
                                            style={{ width: `${60 + Math.random() * 35}%` }}
                                          />
                                        ))}
                                      </div>
                                    </motion.div>
                                  )
                                })}
                                
                                {/* Magnifying glass searching animation */}
                                <motion.div
                                  className="absolute -right-4 -top-4 z-20"
                                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 1, duration: 0.5 }}
                                  animate={{ 
                                    x: [0, 10, -5, 8, 0],
                                    y: [0, 5, 12, 3, 0],
                                    rotate: [0, 5, -3, 2, 0]
                                  }}
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <svg className="w-16 h-16 text-slate-600 drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <circle cx="11" cy="11" r="8" strokeWidth={2} className="fill-white/80" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-4.35-4.35" />
                                    </svg>
                                    {/* Glint on glass */}
                                    <motion.div
                                      className="absolute top-3 left-4 w-3 h-3 bg-white rounded-full blur-sm"
                                      animate={{ opacity: [0.5, 1, 0.5] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                  </motion.div>
                                </motion.div>
                              </div>
                              
                              {/* Floating particles */}
                              {[...Array(6)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-amber-300/60 rounded-full"
                                  style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${20 + Math.random() * 60}%`
                                  }}
                                  animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.8, 0.3]
                                  }}
                                  transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2
                                  }}
                                />
                              ))}
                            </div>
                          )}

                          {/* Right Side - Research Stats */}
                          {section.researchBanner && (
                            <div className="space-y-5">
                              {/* Research Header */}
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                  </div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Research Phase</span>
                                </div>
                                <p className="text-slate-400 text-sm">
                                  {section.researchBanner.subtext}
                                </p>
                              </div>

                              {/* Stats with animated icons */}
                              <div className="grid grid-cols-3 gap-3">
                                {section.researchBanner.stats.map((stat, i) => {
                                  const icons = [
                                    // Interviews - conversation bubbles
                                    <motion.div 
                                      key="interviews"
                                      className="relative w-12 h-12"
                                      initial={{ scale: 0.8 }}
                                      whileInView={{ scale: 1 }}
                                      viewport={{ once: true }}
                                    >
                                      {/* Left speech bubble */}
                                      <motion.div 
                                        className="absolute left-0 top-0"
                                        animate={{ y: [0, -2, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                                      >
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-violet-500" fill="currentColor">
                                          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2v4l4-4h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                                        </svg>
                                      </motion.div>
                                      {/* Right speech bubble */}
                                      <motion.div 
                                        className="absolute right-0 top-4"
                                        animate={{ y: [0, -2, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                      >
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-400" fill="currentColor">
                                          <path d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-2v4l-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"/>
                                        </svg>
                                      </motion.div>
                                      {/* Animated dots inside bubbles */}
                                      <motion.div 
                                        className="absolute left-2 top-2 flex gap-0.5"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.2, repeat: Infinity }}
                                      >
                                        <div className="w-1 h-1 bg-white rounded-full" />
                                        <div className="w-1 h-1 bg-white rounded-full" />
                                        <div className="w-1 h-1 bg-white rounded-full" />
                                      </motion.div>
                                      <motion.div 
                                        className="absolute right-1.5 top-6 flex gap-0.5"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
                                      >
                                        <div className="w-0.5 h-0.5 bg-white rounded-full" />
                                        <div className="w-0.5 h-0.5 bg-white rounded-full" />
                                        <div className="w-0.5 h-0.5 bg-white rounded-full" />
                                      </motion.div>
                                    </motion.div>,
                                    // Events observed - blinking eye
                                    <motion.div 
                                      key="events"
                                      className="relative w-12 h-12 flex items-center justify-center"
                                    >
                                      <svg className="w-10 h-10 text-teal-400" fill="none" viewBox="0 0 24 24">
                                        {/* Pupil - always visible */}
                                        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                                        {/* Eye outline with blinking animation */}
                                        <motion.path 
                                          stroke="currentColor"
                                          strokeLinecap="round" 
                                          strokeLinejoin="round" 
                                          strokeWidth={1.5} 
                                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                          animate={{ 
                                            d: [
                                              "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                              "M2.458 12C3.732 11.5 7.523 11 12 11c4.478 0 8.268 0.5 9.542 1-1.274 0.5-5.064 1-9.542 1-4.477 0-8.268-0.5-9.542-1z",
                                              "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            ]
                                          }}
                                          transition={{ 
                                            duration: 2.5, 
                                            repeat: Infinity,
                                            times: [0, 0.1, 0.2],
                                            repeatDelay: 1.5
                                          }}
                                        />
                                        {/* Eyelid that comes down */}
                                        <motion.ellipse
                                          cx="12"
                                          cy="12"
                                          rx="8"
                                          fill="#1e293b"
                                          animate={{ 
                                            ry: [0, 6, 0]
                                          }}
                                          transition={{ 
                                            duration: 0.3, 
                                            repeat: Infinity,
                                            repeatDelay: 3.5
                                          }}
                                        />
                                      </svg>
                                    </motion.div>,
                                    // Surveys - clipboard with checkmarks
                                    <motion.div 
                                      key="surveys"
                                      className="relative w-12 h-12 flex items-center justify-center"
                                    >
                                      <div className="w-8 h-10 bg-amber-500/20 rounded-md border-2 border-amber-500/50 relative">
                                        {/* Checkmark lines */}
                                        <motion.div 
                                          className="absolute top-2 left-1.5 w-4 h-0.5 bg-amber-400 rounded"
                                          initial={{ scaleX: 0 }}
                                          animate={{ scaleX: 1 }}
                                          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                                        />
                                        <motion.div 
                                          className="absolute top-4 left-1.5 w-3 h-0.5 bg-amber-400 rounded"
                                          initial={{ scaleX: 0 }}
                                          animate={{ scaleX: 1 }}
                                          transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                        />
                                        <motion.div 
                                          className="absolute top-6 left-1.5 w-4 h-0.5 bg-amber-400 rounded"
                                          initial={{ scaleX: 0 }}
                                          animate={{ scaleX: 1 }}
                                          transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
                                        />
                                        {/* Check icon */}
                                        <motion.svg 
                                          className="absolute -right-1 -top-1 w-4 h-4 text-emerald-400"
                                          fill="none" 
                                          stroke="currentColor" 
                                          viewBox="0 0 24 24"
                                          animate={{ scale: [1, 1.2, 1] }}
                                          transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </motion.svg>
                                      </div>
                                    </motion.div>
                                  ]
                                  
                                  const colors = [
                                    'from-violet-400 to-purple-500',
                                    'from-teal-400 to-emerald-500',
                                    'from-amber-400 to-orange-500'
                                  ]
                                  
                                  return (
                                    <motion.div 
                                      key={i}
                                      className="bg-white/5 hover:bg-white/10 rounded-[16px] p-4 text-center transition-all duration-300"
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                    >
                                      {/* Animated Icon */}
                                      <div className="flex justify-center mb-2">
                                        {icons[i]}
                                      </div>
                                      {/* Big number */}
                                      <div className={`text-3xl md:text-4xl font-black bg-gradient-to-br ${colors[i]} bg-clip-text text-transparent`}>
                                        {stat.number}
                                      </div>
                                      {/* Label */}
                                      <h4 className="text-xs md:text-sm font-semibold text-white">
                                        {stat.label}
                                      </h4>
                                    </motion.div>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Sam Persona Section */}
                    {section.samPersona && (
                      <div className="space-y-6">
                        {/* Intro text */}
                        <motion.p 
                          className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'} leading-relaxed`}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                        >
                          {section.samPersona.intro}
                        </motion.p>

                        {/* Sam Bio Card - Slides in from right */}
                        <motion.div 
                          className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-[32px] p-8 md:p-12"
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                        {/* Sam Illustration */}
                        <div className="flex-shrink-0">
                          <div className="w-40 h-40 md:w-48 md:h-48 relative">
                            <svg className="w-full h-full" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="80" cy="80" r="78" fill="url(#samBgGradient)" />
                              <path d="M68 115 L68 130 L92 130 L92 115" fill="#E8B89D" />
                              <path d="M45 160 C45 135 60 125 80 125 C100 125 115 135 115 160" fill="#4F46E5" />
                              <path d="M68 125 L80 140 L92 125" fill="#3730A3" />
                              <ellipse cx="80" cy="75" rx="35" ry="40" fill="#F5D0C5" />
                              <ellipse cx="45" cy="78" rx="6" ry="10" fill="#E8B89D" />
                              <ellipse cx="115" cy="78" rx="6" ry="10" fill="#E8B89D" />
                              <path d="M45 65 C45 35 60 25 80 25 C100 25 115 35 115 65 C115 50 100 42 80 42 C60 42 45 50 45 65" fill="#3D2314" />
                              <path d="M48 70 C48 55 62 48 80 48 C98 48 112 55 112 70 L112 60 C112 45 98 38 80 38 C62 38 48 45 48 60 Z" fill="#4A2C1A" />
                              <path d="M58 62 Q65 58 72 62" stroke="#3D2314" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                              <path d="M88 62 Q95 58 102 62" stroke="#3D2314" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                              <ellipse cx="65" cy="72" rx="7" ry="5" fill="white" />
                              <ellipse cx="95" cy="72" rx="7" ry="5" fill="white" />
                              <circle cx="65" cy="72" r="3.5" fill="#4A3728" />
                              <circle cx="95" cy="72" r="3.5" fill="#4A3728" />
                              <circle cx="66" cy="71" r="1.5" fill="white" />
                              <circle cx="96" cy="71" r="1.5" fill="white" />
                              <path d="M80 75 L78 88 Q80 91 82 88 L80 75" fill="#E0A78C" />
                              <path d="M70 100 Q80 97 90 100" stroke="#C4877A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                              <g fill="#C9A68C" opacity="0.4">
                                <circle cx="65" cy="105" r="0.8" />
                                <circle cx="70" cy="108" r="0.8" />
                                <circle cx="75" cy="106" r="0.8" />
                                <circle cx="85" cy="106" r="0.8" />
                                <circle cx="90" cy="108" r="0.8" />
                                <circle cx="95" cy="105" r="0.8" />
                              </g>
                              <defs>
                                <linearGradient id="samBgGradient" x1="0" y1="0" x2="160" y2="160">
                                  <stop offset="0%" stopColor="#818CF8" />
                                  <stop offset="100%" stopColor="#A78BFA" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full" />
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-teal-400 rounded-full" />
                          </div>
                        </div>
                        
                        {/* Bio Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <div className="space-y-4 mb-8">
                            {section.samPersona.bio.map((line, i) => (
                              <motion.p 
                                key={i}
                                className={`text-gray-700 dark:text-gray-200 leading-relaxed ${i === 0 ? 'text-xl md:text-2xl font-semibold' : 'text-lg'}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                              >
                                {line}
                              </motion.p>
                            ))}
                          </div>
                          
                          {/* Quote */}
                          {section.samPersona.quote && (
                            <motion.div 
                              className="relative"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                            >
                              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-indigo-500 rounded-full" />
                              <blockquote className="pl-6">
                                <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 mb-2">
                                  "{section.samPersona.quote.text}"
                                </p>
                                <cite className="text-sm text-gray-500 dark:text-gray-400 not-italic font-medium">
                                  — {section.samPersona.quote.source}
                                </cite>
                              </blockquote>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Journey Section */}
                    {section.samPersona.journey && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                          {section.samPersona.journey.headline}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                          {section.samPersona.journey.subtext}
                        </p>
                        <SamJourneyTimeline journeySteps={section.samPersona.journey.steps} />
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Discovery Categories - What We Discovered section */}
                {section.discoveryCategories && (
                  <div className="space-y-4">
                    {/* Intro text */}
                    {section.discoveryIntro && (
                      <motion.p 
                        className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'} leading-relaxed mb-2`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {section.discoveryIntro}
                      </motion.p>
                    )}

                    {/* Bento Grid */}
                    <div className="grid grid-cols-12 gap-4">
                      {section.discoveryCategories.map((cat, i) => {
                        const colors = {
                          amber: {
                            bg: 'bg-amber-50 dark:bg-amber-900/20',
                            label: 'bg-amber-500',
                            text: 'text-amber-900 dark:text-amber-100',
                            muted: 'text-amber-700 dark:text-amber-300',
                            border: 'border-amber-200 dark:border-amber-800'
                          },
                          rose: {
                            bg: 'bg-rose-50 dark:bg-rose-900/20',
                            label: 'bg-rose-500',
                            text: 'text-rose-900 dark:text-rose-100',
                            muted: 'text-rose-700 dark:text-rose-300',
                            border: 'border-rose-200 dark:border-rose-800'
                          },
                          violet: {
                            bg: 'bg-violet-100 dark:bg-violet-900/30',
                            label: 'bg-violet-500',
                            text: 'text-violet-900 dark:text-violet-100',
                            muted: 'text-violet-700 dark:text-violet-300',
                            border: 'border-violet-300 dark:border-violet-700'
                          },
                          sky: {
                            bg: 'bg-sky-100 dark:bg-sky-900/30',
                            label: 'bg-sky-500',
                            text: 'text-sky-900 dark:text-sky-100',
                            muted: 'text-sky-700 dark:text-sky-300',
                            border: 'border-sky-300 dark:border-sky-700'
                          }
                        }
                        const c = colors[cat.color] || colors.amber
                        const layouts = [
                          'col-span-12 md:col-span-7',
                          'col-span-12 md:col-span-5',
                          'col-span-12 md:col-span-5',
                          'col-span-12 md:col-span-7',
                        ]
                        
                        return (
                          <motion.div
                            key={cat.id}
                            className={`${layouts[i % 4]} ${c.bg} rounded-[20px] p-5 md:p-6 overflow-hidden group hover:shadow-xl transition-all duration-300 border ${c.border} shadow-sm`}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
                              <motion.div 
                                className="flex-shrink-0 flex justify-center md:justify-start"
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <div className="w-28 md:w-32 rounded-2xl overflow-hidden shadow-xl bg-white">
                                  <img 
                                    src={cat.screen.src} 
                                    alt={cat.screen.alt}
                                    className="w-full h-auto"
                                  />
                                </div>
                              </motion.div>
                              
                              <div className="flex-1 flex flex-col">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className={`${c.label} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                                    {cat.label}
                                  </span>
                                </div>
                                
                                <h4 className={`text-xl md:text-2xl font-bold ${c.text} mb-2 leading-tight`}>
                                  {cat.question}
                                </h4>
                                
                                <p className={`${c.muted} text-sm leading-relaxed mb-3 flex-1`}>
                                  {cat.story}
                                </p>
                                
                                <div className="flex flex-wrap gap-1.5">
                                  {cat.painPoints.map((point, j) => (
                                    <motion.span 
                                      key={j}
                                      className={`text-xs px-2.5 py-1 rounded-full ${c.bg} ${c.text} border ${c.border} font-medium`}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.3, delay: 0.3 + j * 0.1 }}
                                    >
                                      {point}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Problem Story - Legacy Bento Box Layout */}
                {section.problemStory && (
                  <div className="mt-8">
                    {/* Intro text */}
                    {section.content && (
                      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                        {section.content.map((paragraph, i) => (
                          <p key={i} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                        ))}
                      </div>
                    )}
                    
                    {/* Sam's intro */}
                    <motion.p 
                      className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {section.problemStory.intro}
                    </motion.p>

                    {/* Bento Grid of Problem Screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {section.problemStory.screens.map((screen, i) => (
                        <motion.div 
                          key={i}
                          className="bg-white dark:bg-gray-800 rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          {/* Screen image - smaller, contained */}
                          <div className="bg-gray-100 dark:bg-gray-700 p-4 md:p-6 flex justify-center">
                            <div className="w-32 md:w-40 rounded-xl overflow-hidden shadow-lg">
                              <img 
                                src={screen.src} 
                                alt={screen.alt}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                          
                          {/* Story content */}
                          <div className="p-5 md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                              "{screen.title}"
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                              {screen.story}
                            </p>
                            <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                              <p className="text-xs text-red-600 dark:text-red-400 font-medium tracking-wide">
                                {screen.pain}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image Gallery - Jobright-style Side-by-Side with Scroll Animation */}
                {section.imageGallery && (
                  <div className="space-y-32 mt-16 -mx-6 px-6">
                    {section.imageGallery.map((item, i) => (
                      <div 
                        key={i} 
                        className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 group`}
                      >
                        {/* Text Content - Large bold text like Jobright */}
                        <div className="flex-1 max-w-lg animate-on-scroll">
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
                            {item.title}
                          </h3>
                          <div className="space-y-4">
                            {item.bullets.map((bullet, j) => (
                              <p 
                                key={j} 
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                              >
                                {bullet}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Image Card - With soft colored background */}
                        <div className="flex-1 w-full max-w-xl animate-on-scroll">
                          <div className={`relative rounded-[2rem] p-6 md:p-10 ${
                            i % 4 === 0 ? 'bg-emerald-50 dark:bg-emerald-900/20' :
                            i % 4 === 1 ? 'bg-sky-50 dark:bg-sky-900/20' :
                            i % 4 === 2 ? 'bg-amber-50 dark:bg-amber-900/20' :
                            'bg-violet-50 dark:bg-violet-900/20'
                          }`}>
                            {/* Image container */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                              <img 
                                src={item.src} 
                                alt={item.alt} 
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Screen Gallery - Desktop App Mockups */}
                {section.screenGallery && (
                  <div className="space-y-24 mt-16">
                    {section.screenGallery.map((item, i) => {
                      // Map component names to actual components
                      const ScreenComponent = {
                        'EmptySearchScreen': EmptySearchScreen,
                        'NLPDocumentSearchScreen': NLPDocumentSearchScreen,
                        'SourceInspectorScreen': SourceInspectorScreen
                      }[item.component]

                      return (
                        <motion.div 
                          key={i}
                          className="space-y-8"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* Title */}
                          <div className="text-center max-w-3xl mx-auto">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                              {item.title}
                            </h3>
                          </div>

                          {/* Desktop Browser Mockup */}
                          <div className={`relative rounded-[2rem] p-4 md:p-8 ${
                            i % 2 === 0 
                              ? 'bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30' 
                              : 'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30'
                          }`}>
                            <DesktopBrowserFrame>
                              {ScreenComponent && <ScreenComponent />}
                            </DesktopBrowserFrame>
                          </div>

                          {/* Interactive Feature Pills */}
                          <FeaturePills bullets={item.bullets} index={i} />
                        </motion.div>
                      )
                    })}
                  </div>
                )}

                {/* Screen Gallery with Prototype Link */}
                {section.interactivePrototype && (
                  <ScreenGallery 
                    prototype={section.interactivePrototype} 
                    prototypeLink={section.interactivePrototype.prototypeLink || '/prototypes/mobile-task-tracker'}
                  />
                )}

                {/* Sam's Journey Timeline */}
                {section.samJourney && section.journeySteps && (
                  <SamJourneyTimeline journeySteps={section.journeySteps} />
                )}

                {/* Before/After Screen Comparison */}
                {section.beforeAfterScreens && (
                  <BeforeAfterScreens items={section.beforeAfterScreens} takeaways={study.takeaways} />
                )}

                {/* Legacy Design Sliders */}
                {section.designSliders && (
                  <ClipPathSliderBento data={section.designSliders} />
                )}

                {/* Legacy Design Carousel - Visual Before/After */}
                {section.designCarousel && (
                  <DesignCarousel items={section.designCarousel} />
                )}

                {/* Legacy Design Decisions Grid */}
                {section.designDecisions && (
                  <DesignDecisions decisions={section.designDecisions} />
                )}

                {/* Before/After Comparison */}
                {section.beforeAfter && (
                  <BeforeAfterComparison beforeAfter={section.beforeAfter} />
                )}

                {/* Legacy images support */}
                {section.images && !section.imageGallery && (
                  <div className={`mt-8 grid gap-6 ${section.images.length > 1 ? 'md:grid-cols-2' : ''}`}>
                    {section.images.map((image, i) => (
                      <figure key={i} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-auto"
                        />
                        {image.caption && (
                          <figcaption className="p-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}

                {/* AI Research Stats - Visual Format */}
                {section.researchStats && (
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Input Data Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {section.researchStats.inputData.map((item, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="text-4xl md:text-5xl font-black text-white mb-1">{item.value}</div>
                          <div className="text-gray-400 text-sm">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Time Comparison */}
                    <div className="bg-gradient-to-r from-slate-800 via-slate-800/50 to-slate-800 rounded-2xl p-6 mb-8">
                      <div className="flex items-center justify-center gap-4 md:gap-8">
                        <div className="text-center flex-1">
                          <div className="text-2xl md:text-3xl font-bold text-gray-400 line-through decoration-red-400/50 decoration-2">{section.researchStats.comparison.before.time}</div>
                          <div className="text-xs text-gray-500 mt-1">{section.researchStats.comparison.before.label}</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">{section.researchStats.comparison.after.time}</div>
                          <div className="text-xs text-teal-400 mt-1">{section.researchStats.comparison.after.label}</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Insight Callout */}
                    <motion.div 
                      className="bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/30 rounded-2xl p-6 flex items-center gap-6"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-teal-300 to-emerald-400 bg-clip-text text-transparent">
                        {section.researchStats.keyInsight.stat}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-lg">{section.researchStats.keyInsight.description}</div>
                        <div className="text-teal-400 text-sm mt-1">{section.researchStats.keyInsight.detail}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {section.highlights && !section.imageGallery && !section.outcomesMetrics && !section.researchStats && (
                  <KeyInsights highlights={section.highlights} sectionIndex={index} />
                )}

                {/* Outcomes Metrics - Results & Impact Style */}
                {section.outcomesMetrics && (
                  <motion.div 
                    className="mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      {section.outcomesMetrics.map((result, i) => (
                        <motion.div 
                          key={i} 
                          className="text-center group p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl"
                          initial={{ opacity: 0, y: 40, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <motion.div 
                            className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br from-teal-300 to-emerald-400 bg-clip-text text-transparent mb-2 whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {result.metric}
                          </motion.div>
                          <p className="text-gray-200 text-sm md:text-base group-hover:text-white transition-colors">{result.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Documentation Viewer with Intro */}
                {section.showDocumentationViewer && (
                  <div className="mt-12">
                    {section.documentationIntro && (
                      <motion.div 
                        className="mb-8 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">{section.documentationIntro.title}</h4>
                            <p className="text-gray-200 leading-relaxed">{section.documentationIntro.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <DocumentationViewer variant={slug === 'enterprise-designops-transformation' ? 'investigation' : 'default'} />
                  </div>
                )}

                {/* LLM Integration Section - Visually Stunning Pillars */}
                {section.llmIntegrationSection && section.pillars && (
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {/* Main Flow Visualization */}
                    <div className="relative">
                      {/* Connection Line - Desktop */}
                      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-amber-500 to-emerald-500 opacity-40 -translate-y-1/2 z-0" />
                      
                      <div className="grid lg:grid-cols-3 gap-6 relative z-10">
                        {section.pillars.map((pillar, i) => {
                          const colorSchemes = {
                            indigo: {
                              gradient: 'from-indigo-500 to-violet-600',
                              bg: 'bg-slate-800',
                              border: 'border-indigo-400/50',
                              text: 'text-indigo-300',
                              textBright: 'text-indigo-200',
                              glow: 'shadow-indigo-500/30'
                            },
                            amber: {
                              gradient: 'from-amber-500 to-orange-600',
                              bg: 'bg-slate-800',
                              border: 'border-amber-400/50',
                              text: 'text-amber-300',
                              textBright: 'text-amber-200',
                              glow: 'shadow-amber-500/30'
                            },
                            emerald: {
                              gradient: 'from-emerald-500 to-teal-600',
                              bg: 'bg-slate-800',
                              border: 'border-emerald-400/50',
                              text: 'text-emerald-300',
                              textBright: 'text-emerald-200',
                              glow: 'shadow-emerald-500/30'
                            }
                          }
                          const colors = colorSchemes[pillar.color] || colorSchemes.indigo
                          
                          const icons = {
                            message: (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            ),
                            link: (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                            ),
                            shield: (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            )
                          }

                          return (
                            <motion.div
                              key={i}
                              className={`relative ${colors.bg} rounded-2xl border ${colors.border} p-6 shadow-xl ${colors.glow}`}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.15, duration: 0.5 }}
                            >
                              {/* Step Number */}
                              <div className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                                <span className="font-bold text-sm text-white">{i + 1}</span>
                              </div>

                              {/* Arrow to next - Desktop */}
                              {i < section.pillars.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                                  <motion.div 
                                    className={`w-6 h-6 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center shadow-lg`}
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </motion.div>
                                </div>
                              )}

                              {/* Icon */}
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                                {icons[pillar.icon]}
                              </div>

                              {/* Content */}
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                                  <p className={`text-sm font-semibold ${colors.textBright}`}>{pillar.tagline}</p>
                                </div>
                                
                                <p className="text-sm text-gray-200 leading-relaxed">{pillar.description}</p>

                                {/* Example Box */}
                                <div className="bg-slate-900 rounded-xl p-3 space-y-2 border border-slate-700">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Input</span>
                                  </div>
                                  <p className="text-xs text-white font-mono">"{pillar.example.input}"</p>
                                  
                                  <div className="flex items-center gap-2 pt-1">
                                    <svg className={`w-3 h-3 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Output</span>
                                  </div>
                                  <p className={`text-xs font-semibold ${colors.textBright}`}>{pillar.example.output}</p>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Agency Collaboration Section - Before/After Transformation */}
                {section.agencySection && (
                  <motion.div 
                    className="mt-8 -mx-6 md:-mx-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-3xl overflow-hidden">
                      {/* Background Image with Gradient Overlay */}
                      <div className="absolute inset-0">
                        <img 
                          src={section.backgroundImage} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-slate-900/90 to-purple-900/95" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      </div>

                      <div className="relative z-10 p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                          <motion.span 
                            className="inline-block px-4 py-1.5 bg-indigo-500/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                          >
                            {section.tagline}
                          </motion.span>
                          <motion.h3 
                            className="text-3xl md:text-4xl font-black text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            {section.headline}
                          </motion.h3>
                        </div>

                        {/* Before/After Comparison */}
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                          {/* Before */}
                          <motion.div 
                            className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                              <span className="text-lg font-bold text-red-300">{section.transformation.before.label}</span>
                            </div>
                            <ul className="space-y-3">
                              {section.transformation.before.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-200">
                                  <span className="text-red-400 mt-1">✗</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>

                          {/* After */}
                          <motion.div 
                            className="bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-lg font-bold text-emerald-300">{section.transformation.after.label}</span>
                            </div>
                            <ul className="space-y-3">
                              {section.transformation.after.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-200">
                                  <span className="text-emerald-400 mt-1">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4">
                          {section.stats?.map((stat, i) => (
                            <motion.div 
                              key={i}
                              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 text-center"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                                {stat.icon === 'sync' && (
                                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                  </svg>
                                )}
                                {stat.icon === 'clock' && (
                                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                                {stat.icon === 'target' && (
                                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                  </svg>
                                )}
                              </div>
                              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Fallback for single stat (legacy) */}
                        {section.stat && !section.stats && (
                          <div className="flex flex-col md:flex-row items-center gap-8">
                            <motion.div 
                              className="text-center md:text-left"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                                {section.stat.value}
                              </div>
                              <div className="text-gray-300 font-medium">{section.stat.label}</div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Research Section - Insight Cards */}
                {section.researchSection && (
                  <motion.div 
                    className="mt-8 -mx-6 md:-mx-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-3xl overflow-hidden">
                      {/* Background Image with Gradient Overlay */}
                      <div className="absolute inset-0">
                        <img 
                          src={section.backgroundImage} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-slate-900/90 to-orange-900/95" />
                      </div>

                      <div className="relative z-10 p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                          <motion.span 
                            className="inline-block px-4 py-1.5 bg-amber-500/30 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                          >
                            {section.tagline}
                          </motion.span>
                          <motion.h3 
                            className="text-3xl md:text-4xl font-black text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            {section.headline}
                          </motion.h3>
                        </div>

                        {/* Insight Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                          {section.insights.map((insight, i) => (
                            <motion.div 
                              key={i}
                              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                            >
                              {insight.icon && (
                                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-500/20 border border-amber-300/40 flex items-center justify-center text-amber-200">
                                  {researchIcons[insight.icon]}
                                </div>
                              )}
                              {insight.stat && (
                                <div className="text-5xl font-black text-amber-400 mb-2">{insight.stat}</div>
                              )}
                              <h4 className="text-lg font-bold text-white mb-2">{insight.finding}</h4>
                              <p className="text-sm text-gray-300">{insight.detail}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* AI Captured Pain Points */}
                        {section.aiPainPoints && (
                          <div className="mt-8 space-y-8">
                            {/* Header */}
                            <div className="text-center">
                              <h4 className="text-xl font-bold text-white mb-2">{section.aiPainPoints.title}</h4>
                              <p className="text-sm text-gray-400">{section.aiPainPoints.description}</p>
                            </div>

                            {/* Source Cards */}
                            <div className="space-y-4">
                              {section.aiPainPoints.sources.map((source, i) => {
                                const typeColors = {
                                  Interview: 'from-violet-500 to-purple-600',
                                  Walkthrough: 'from-teal-500 to-cyan-600',
                                  Email: 'from-blue-500 to-indigo-600'
                                }
                                const typeIcons = {
                                  Interview: (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                  ),
                                  Walkthrough: (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                    </svg>
                                  ),
                                  Email: (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                  )
                                }
                                return (
                                  <motion.div
                                    key={i}
                                    className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                  >
                                    <div className="flex items-start gap-4">
                                      {/* Type Badge */}
                                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${typeColors[source.type]} flex items-center justify-center text-white flex-shrink-0`}>
                                        {typeIcons[source.type]}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        {/* Source Info */}
                                        <div className="flex items-center gap-2 mb-2">
                                          <span className="text-sm font-semibold text-white">{source.label}</span>
                                          <span className="text-xs text-gray-500">•</span>
                                          <span className="text-xs text-gray-400">{source.timestamp}</span>
                                        </div>
                                        {/* Quote */}
                                        <p className="text-sm text-gray-300 italic mb-3">"{source.quote}"</p>
                                        {/* Extracted Pain Points */}
                                        <div className="flex flex-wrap gap-2">
                                          {source.painPoints.map((point, j) => (
                                            <motion.span
                                              key={j}
                                              className="px-3 py-1 text-xs font-medium bg-rose-500/20 text-rose-300 border border-rose-400/30 rounded-full"
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              whileInView={{ opacity: 1, scale: 1 }}
                                              viewport={{ once: true }}
                                              transition={{ delay: 0.3 + j * 0.05 }}
                                            >
                                              {point}
                                            </motion.span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )
                              })}
                            </div>

                            {/* Clustered Themes */}
                            <motion.div
                              className="bg-slate-800/50 rounded-2xl p-6 border border-white/10"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                            >
                              <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">AI Clustered Themes</h5>
                              <div className="flex flex-wrap gap-3">
                                {section.aiPainPoints.clusteredThemes.map((theme, i) => {
                                  const themeColors = {
                                    rose: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
                                    amber: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
                                    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                                  }
                                  return (
                                    <motion.div
                                      key={i}
                                      className={`px-4 py-2 rounded-xl border ${themeColors[theme.color]} flex items-center gap-2`}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: 0.5 + i * 0.1 }}
                                    >
                                      <span className="font-medium">{theme.theme}</span>
                                      <span className="text-xs opacity-70">({theme.count} mentions)</span>
                                    </motion.div>
                                  )
                                })}
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Alignment Section - Pipeline Flow */}
                {section.alignmentSection && (
                  <motion.div 
                    className="mt-8 -mx-6 md:-mx-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-3xl overflow-hidden">
                      {/* Background Image with Gradient Overlay */}
                      <div className="absolute inset-0">
                        <img 
                          src={section.backgroundImage} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/95 via-slate-900/90 to-fuchsia-900/95" />
                      </div>

                      <div className="relative z-10 p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                          <motion.span 
                            className="inline-block px-4 py-1.5 bg-violet-500/30 rounded-full text-violet-300 text-xs font-bold uppercase tracking-wider mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                          >
                            {section.tagline}
                          </motion.span>
                          <motion.h3 
                            className="text-3xl md:text-4xl font-black text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            {section.headline}
                          </motion.h3>
                        </div>

                        {/* Pipeline Steps */}
                        <div className="relative mb-10">
                          {/* Connection Line */}
                          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-50 -translate-y-1/2" />
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {section.pipeline.map((step, i) => {
                              const icons = {
                                mic: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
                                spark: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                                check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                                chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              }
                              
                              return (
                                <motion.div 
                                  key={i}
                                  className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center"
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                  {/* Step Number Badge */}
                                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    {i + 1}
                                  </div>
                                  
                                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      {icons[step.icon]}
                                    </svg>
                                  </div>
                                  <h4 className="font-bold text-white mb-1">{step.step}</h4>
                                  <p className="text-xs text-violet-200">{step.output}</p>
                                </motion.div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Example Transformations */}
                        {section.examples && (
                          <div className="space-y-4">
                            {section.examples.map((example, i) => (
                              <motion.div 
                                key={i}
                                className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-5 border border-violet-400/30"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                              >
                                <div className="grid md:grid-cols-2 gap-4 items-center">
                                  <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2 block">User Need</span>
                                    <p className="text-white font-medium text-sm">"{example.input}"</p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-violet-400 flex-shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div>
                                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">Business Impact</span>
                                      <p className="text-emerald-300 font-medium text-sm">{example.output}</p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                        {/* Legacy single example support */}
                        {section.example && !section.examples && (
                          <motion.div 
                            className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-violet-400/30"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          >
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                              <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2 block">User Need</span>
                                <p className="text-white font-medium">"{section.example.input}"</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <svg className="w-8 h-8 text-violet-400 flex-shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">Business Impact</span>
                                  <p className="text-emerald-300 font-medium">{section.example.output}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Wireframes Section - Early Concepts */}
                {section.wireframesSection && (
                  <motion.div 
                    className="mt-8 -mx-6 md:-mx-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 p-8 md:p-12">
                      {/* Header */}
                      <div className="text-center mb-10">
                        <motion.span 
                          className="inline-block px-4 py-1.5 bg-violet-500/20 rounded-full text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          {section.tagline}
                        </motion.span>
                        <motion.h3 
                          className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          {section.headline}
                        </motion.h3>
                        <motion.p
                          className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {section.intro}
                        </motion.p>
                      </div>

                      {/* Wireframe Cards */}
                      <div className="grid md:grid-cols-3 gap-6">
                        {section.wireframes.map((wireframe, i) => {
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
                            )
                          }
                          return (
                            <motion.div
                              key={i}
                              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
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
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Intro Text + Bullet Points Visual Layout */}
                {section.bulletPoints && (
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {section.introText && (
                      <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 leading-relaxed">{section.introText}</p>
                    )}
                    
                    <div className={`grid gap-4 ${section.bulletPoints.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                      {section.bulletPoints.map((item, i) => {
                        const iconColors = [
                          'from-blue-500 to-indigo-600',
                          'from-emerald-500 to-teal-600',
                          'from-violet-500 to-purple-600',
                          'from-amber-500 to-orange-600',
                          'from-rose-500 to-pink-600'
                        ]
                        const borderColors = [
                          'border-blue-400/50',
                          'border-emerald-400/50',
                          'border-violet-400/50',
                          'border-amber-400/50',
                          'border-rose-400/50'
                        ]
                        const icons = {
                          user: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          ),
                          users: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          ),
                          eye: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          ),
                          layout: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                          ),
                          check: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          code: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          ),
                          clock: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          bolt: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                          shield: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          ),
                          search: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          ),
                          lightbulb: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          ),
                          chart: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          )
                        }
                        
                        return (
                          <motion.div
                            key={i}
                            className={`bg-slate-800 rounded-2xl p-6 border ${borderColors[i % borderColors.length]} shadow-xl`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconColors[i % iconColors.length]} flex items-center justify-center text-white mb-4 shadow-lg`}>
                              {icons[item.icon] || icons.check}
                            </div>
                            <h4 className="font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Code Review Intro + Viewer */}
                {section.showCodeReviewViewer && (
                  <div className="mt-12">
                    {section.codeReviewIntro && (
                      <motion.div 
                        className="mb-8 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">{section.codeReviewIntro.title}</h4>
                            <p className="text-gray-200 leading-relaxed">{section.codeReviewIntro.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <CodeReviewViewer variant={slug === 'enterprise-designops-transformation' ? 'investigation' : 'default'} />
                  </div>
                )}

                {/* Workflow Steps Visual + Diagram */}
                {section.workflowSteps && (
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {section.introText && (
                      <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 leading-relaxed">{section.introText}</p>
                    )}
                    
                    {/* Workflow Steps as Numbered List */}
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {section.workflowSteps.map((step, i) => {
                        const stepColors = [
                          'text-blue-500',
                          'text-amber-500',
                          'text-teal-500',
                          'text-violet-500',
                          'text-rose-500'
                        ]
                        
                        return (
                          <motion.div
                            key={i}
                            className="flex items-start gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                          >
                            {/* Step Number */}
                            <div className={`text-3xl font-black ${stepColors[i % stepColors.length]}`}>
                              {i + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-white mb-1">{step.phase}</h4>
                              <p className="text-sm text-gray-200 leading-relaxed">{step.description}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Workflow Diagram with Intro */}
                {section.showWorkflowDiagram && (
                  <div className="mt-12">
                    {section.workflowIntro && (
                      <motion.div 
                        className="mb-8 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">{section.workflowIntro.title}</h4>
                            <p className="text-gray-200 leading-relaxed">{section.workflowIntro.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <WorkflowDiagram />
                  </div>
                )}

                {/* Outcome Showcase - Combined finale section */}
                {section.outcomeShowcase && (
                  <motion.div 
                    className="mt-8 -mx-6 md:-mx-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-3xl overflow-hidden">
                      {/* Background Image */}
                      {section.backgroundImage && (
                        <>
                          <img 
                            src={section.backgroundImage.src}
                            alt={section.backgroundImage.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
                        </>
                      )}
                      {!section.backgroundImage && (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
                      )}
                      
                      {/* Animated background particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [0, -30, 0],
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 p-8 md:p-12 lg:p-16">
                        {/* Header */}
                        <motion.div 
                          className="text-center mb-12"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <motion.h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            {section.headline}
                          </motion.h2>
                          <motion.p 
                            className="text-xl text-indigo-200"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          >
                            {section.subheadline}
                          </motion.p>
                        </motion.div>

                        {/* Animated Transformation Visual */}
                        <div className="relative grid md:grid-cols-2 gap-8 mb-16">
                          {/* BEFORE - Slow, manual */}
                          <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="bg-slate-500/10 backdrop-blur-sm rounded-2xl p-6 border border-slate-500/30 h-full">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-slate-500 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-slate-300">{section.transformation.before.title}</h3>
                                  <p className="text-sm text-slate-400">{section.transformation.before.time}</p>
                                </div>
                              </div>
                              <p className="text-gray-300 mb-6">{section.transformation.before.description}</p>
                              
                              {/* Smooth paper stack animation */}
                              <div className="relative h-44 flex items-center justify-center">
                                <div className="relative w-28 h-36">
                                  {[...Array(6)].map((_, i) => {
                                    const rotations = [-3, 2, -1.5, 2.5, -2, 0]
                                    const offsets = [
                                      { x: -4, y: 0 },
                                      { x: 3, y: -3 },
                                      { x: -2, y: -6 },
                                      { x: 4, y: -9 },
                                      { x: -3, y: -12 },
                                      { x: 0, y: -15 }
                                    ]
                                    const colors = [
                                      'from-amber-100 to-amber-50',
                                      'from-stone-100 to-stone-50',
                                      'from-orange-100 to-orange-50',
                                      'from-amber-100 to-amber-50',
                                      'from-stone-50 to-white',
                                      'from-amber-50 to-white'
                                    ]
                                    return (
                                      <motion.div
                                        key={i}
                                        className={`absolute inset-0 bg-gradient-to-br ${colors[i]} rounded-sm shadow-md border border-stone-200/50`}
                                        style={{ transformOrigin: 'center bottom' }}
                                        initial={{ 
                                          opacity: 0, 
                                          y: -60, 
                                          rotate: rotations[i] - 8,
                                          scale: 0.9
                                        }}
                                        whileInView={{ 
                                          opacity: 1, 
                                          y: offsets[i].y, 
                                          x: offsets[i].x,
                                          rotate: rotations[i],
                                          scale: 1
                                        }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                          duration: 0.5, 
                                          delay: 0.5 + 0.08 * i,
                                          type: "spring",
                                          stiffness: 120,
                                          damping: 14
                                        }}
                                      >
                                        <div className="absolute inset-2 space-y-1.5 pt-1">
                                          {[...Array(5)].map((_, j) => (
                                            <div 
                                              key={j} 
                                              className="h-1 bg-stone-300/50 rounded-full"
                                              style={{ width: `${55 + (j * 7) % 40}%` }}
                                            />
                                          ))}
                                        </div>
                                      </motion.div>
                                    )
                                  })}
                                  
                                  {/* Floating frustration icons */}
                                  {/* Frustrated face */}
                                  <motion.div
                                    className="absolute -right-3 -top-3 z-20"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                                  >
                                    <motion.div
                                      className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shadow-lg border border-amber-200"
                                      animate={{ y: [0, -3, 0] }}
                                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                      <span className="text-base">😤</span>
                                    </motion.div>
                                  </motion.div>
                                  
                                  {/* Search icon - looking for info */}
                                  <motion.div
                                    className="absolute -left-5 top-4 z-20"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.25, type: "spring", stiffness: 200 }}
                                  >
                                    <motion.div
                                      className="w-7 h-7 rounded-full bg-slate-500 flex items-center justify-center shadow-lg"
                                      animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
                                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                    >
                                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                      </svg>
                                    </motion.div>
                                  </motion.div>
                                  
                                  {/* Hourglass - wasting time */}
                                  <motion.div
                                    className="absolute right-0 bottom-2 z-20"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                                  >
                                    <motion.div
                                      className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shadow-lg"
                                      animate={{ y: [0, -2, 0], rotate: [0, 5, 0] }}
                                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                    >
                                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 2v6l4 4-4 4v6h12v-6l-4-4 4-4V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z" />
                                      </svg>
                                    </motion.div>
                                  </motion.div>
                                  
                                  {/* Angry face - frustration with manual process */}
                                  <motion.div
                                    className="absolute -left-3 bottom-6 z-20"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.55, type: "spring", stiffness: 200 }}
                                  >
                                    <motion.div
                                      className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center shadow-lg border border-rose-200"
                                      animate={{ y: [0, -3, 0], rotate: [0, -3, 0, 3, 0] }}
                                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                                    >
                                      <span className="text-sm">🤯</span>
                                    </motion.div>
                                  </motion.div>
                                </div>
                                
                                {/* Subtle floating particles */}
                                {[...Array(4)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-amber-300/40 rounded-full"
                                    style={{
                                      left: `${25 + i * 15}%`,
                                      top: `${30 + (i % 2) * 40}%`
                                    }}
                                    animate={{
                                      y: [0, -15, 0],
                                      opacity: [0.2, 0.6, 0.2]
                                    }}
                                    transition={{
                                      duration: 2.5 + i * 0.5,
                                      repeat: Infinity,
                                      delay: i * 0.3
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </motion.div>

                          {/* AFTER - Fast, intelligent */}
                          <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          >
                            <div className="bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 h-full">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-emerald-300">{section.transformation.after.title}</h3>
                                  <p className="text-sm text-emerald-400">{section.transformation.after.time}</p>
                                </div>
                              </div>
                              <p className="text-gray-300 mb-6">{section.transformation.after.description}</p>
                              
                              {/* Animated organized search flow */}
                              <div className="relative h-40 overflow-hidden">
                                {/* Search input */}
                                <motion.div
                                  className="absolute top-2 left-4 right-4 h-10 bg-slate-800 rounded-lg border border-emerald-500/50 flex items-center px-3 gap-2"
                                  initial={{ opacity: 0, y: -20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 }}
                                >
                                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                  <motion.div
                                    className="text-xs text-emerald-300"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1 }}
                                  >
                                    "Revenue recognition Q4..."
                                  </motion.div>
                                  <motion.div
                                    className="w-0.5 h-4 bg-emerald-400"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                  />
                                </motion.div>

                                {/* Results flying in organized */}
                                {[...Array(3)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute left-4 right-4 h-8 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center px-3 gap-2"
                                    style={{ top: `${56 + i * 36}px` }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.2 + i * 0.15, type: "spring" }}
                                  >
                                    <div className={`w-5 h-5 rounded ${i === 0 ? 'bg-emerald-500' : 'bg-slate-600'} flex items-center justify-center`}>
                                      <span className="text-[9px] text-white font-bold">{98 - i * 4}%</span>
                                    </div>
                                    <div className="flex-1 h-1.5 bg-slate-600 rounded">
                                      <div className={`h-full rounded ${i === 0 ? 'bg-emerald-500' : 'bg-slate-500'}`} style={{ width: `${80 - i * 15}%` }} />
                                    </div>
                                    {i === 0 && (
                                      <motion.div
                                        className="w-4 h-4 rounded bg-violet-500 flex items-center justify-center"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                      >
                                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                                        </svg>
                                      </motion.div>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Human + AI Compact Row */}
                        <motion.div 
                          className="bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-violet-500/10 backdrop-blur-sm rounded-2xl p-5 border border-indigo-500/30"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 }}
                        >
                          <motion.h3 
                            className="text-xl md:text-2xl font-bold text-center text-white mb-5"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                          >
                            {section.humanAI.headline}
                          </motion.h3>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {/* AI Column */}
                            <motion.div 
                              className="bg-slate-800/50 rounded-xl p-4"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1 }}
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                                  </svg>
                                </div>
                                <span className="text-sm font-bold text-violet-300">AI Accelerated</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {section.humanAI.ai.map((item, i) => (
                                  <span 
                                    key={i}
                                    className="text-xs px-2.5 py-1.5 rounded-full bg-violet-500/20 text-violet-200 border border-violet-500/30 text-center"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </motion.div>

                            {/* Human Column */}
                            <motion.div 
                              className="bg-slate-800/50 rounded-xl p-4"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1.1 }}
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                                <span className="text-sm font-bold text-emerald-300">I Directed</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {section.humanAI.human.map((item, i) => (
                                  <span 
                                    key={i}
                                    className="text-xs px-2.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 text-center"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Celebration particles on scroll */}
                        <motion.div 
                          className="absolute inset-0 pointer-events-none overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.5 }}
                        >
                          {[...Array(15)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-2 h-2 rounded-full ${
                                ['bg-indigo-400', 'bg-violet-400', 'bg-emerald-400', 'bg-amber-400'][i % 4]
                              }`}
                              style={{
                                left: `${Math.random() * 100}%`,
                                bottom: 0,
                              }}
                              initial={{ y: 0, opacity: 0 }}
                              whileInView={{ 
                                y: -400 - Math.random() * 200, 
                                opacity: [0, 1, 1, 0] 
                              }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: 1.6 + Math.random() * 0.5, 
                                duration: 2 + Math.random(),
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* What Stays Human - Visual Section */}
                {section.humanSection && (
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Headline */}
                    <div className="text-center mb-10">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {section.humanSection.headline}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {section.humanSection.subheadline}
                      </p>
                    </div>

                    {/* AI vs Human Comparison */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {section.humanSection.columns.map((col, i) => (
                        <motion.div
                          key={i}
                          className={`rounded-2xl p-6 ${
                            col.icon === 'robot' 
                              ? 'bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700' 
                              : 'bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/30 dark:to-orange-900/20 border border-rose-200 dark:border-rose-800/50'
                          }`}
                          initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              col.icon === 'robot'
                                ? 'bg-gradient-to-br from-slate-600 to-slate-700 text-white'
                                : 'bg-gradient-to-br from-rose-500 to-orange-500 text-white'
                            }`}>
                              {col.icon === 'robot' ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                              )}
                            </div>
                            <h4 className={`text-xl font-bold ${
                              col.icon === 'robot' 
                                ? 'text-slate-700 dark:text-slate-300' 
                                : 'text-rose-700 dark:text-rose-300'
                            }`}>
                              {col.title}
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {col.items.map((item, j) => (
                              <motion.li 
                                key={j}
                                className={`flex items-center gap-3 ${
                                  col.icon === 'robot' 
                                    ? 'text-slate-600 dark:text-slate-400' 
                                    : 'text-rose-700 dark:text-rose-300'
                                }`}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + j * 0.05 }}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  col.icon === 'robot' ? 'bg-slate-400' : 'bg-rose-400'
                                }`} />
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    {/* Event Image */}
                    {section.humanSection.eventImage && (
                      <motion.figure
                        className="relative rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <img 
                          src={section.humanSection.eventImage.src}
                          alt={section.humanSection.eventImage.alt}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      </motion.figure>
                    )}
                  </motion.div>
                )}

                {section.quote && (
                  <blockquote className="mt-8 p-6 bg-slate-800 rounded-2xl border-l-4 border-violet-500 shadow-xl">
                    <p className="text-lg italic text-white mb-3">
                      "{section.quote.text}"
                    </p>
                    <footer className="text-sm font-medium text-violet-300">
                      - {section.quote.author}
                    </footer>
                  </blockquote>
                )}
                  </div>
                </motion.div>
              </section>
            )
          })}
        </div>
      </section>



      {/* Navigation */}
      <section className="py-10 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Projects
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Work With Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </article>
  )
}

export default CaseStudy
