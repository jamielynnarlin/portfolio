import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'
import { 
  SmallPhoneFrame,
  ProfileScreenStatic,
  TaskCategoriesScreenStatic,
  CompletedTasksScreen,
  QuestionnaireScreen
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
function BeforeAfterScreens({ items }) {
  const getNewScreenComponent = (screenType) => {
    switch (screenType) {
      case 'profile': return ProfileScreenStatic
      case 'tasks': return TaskCategoriesScreenStatic
      case 'completed': return CompletedTasksScreen
      case 'questionnaire': return QuestionnaireScreen
      default: return ProfileScreenStatic
    }
  }

  return (
    <div className="mt-8 space-y-20">
      {items.map((item, i) => {
        const NewScreenComponent = getNewScreenComponent(item.newScreen)
        const isReversed = i % 2 === 1
        
        return (
          <motion.div 
            key={item.id}
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <div className="flex items-center justify-center gap-3 text-sm">
                <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full font-medium">
                  {item.pain}
                </span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="px-3 py-1.5 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full font-medium">
                  {item.solution}
                </span>
              </div>
            </div>

            {/* Phones Side by Side */}
            <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-8 md:gap-16`}>
              {/* OLD Design - Image */}
              <div className="relative">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 dark:bg-red-500/20 rounded-full">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-sm font-semibold text-red-600 dark:text-red-400">Before</span>
                  </span>
                </div>
                <div className="relative rounded-[2.5rem] p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                  <div className="w-40 md:w-48 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-gray-300 dark:border-gray-600 bg-white">
                    <img 
                      src={item.oldImage} 
                      alt="Previous design"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Outdated badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Outdated
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ x: { duration: 1.5, repeat: Infinity } }}
                >
                  <svg className={`w-7 h-7 text-white ${isReversed ? 'rotate-180' : ''} md:rotate-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>

              {/* NEW Design - React Component */}
              <div className="relative">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 dark:bg-teal-500/20 rounded-full">
                    <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">After</span>
                  </span>
                </div>
                <div className="relative rounded-[2.5rem] p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
                  <SmallPhoneFrame>
                    <NewScreenComponent />
                  </SmallPhoneFrame>
                  {/* New badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Redesigned
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Caption */}
      <motion.div 
        className="text-center pt-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-800 text-white font-semibold rounded-full text-sm md:text-base shadow-lg">
          The Shift: Complexity to Clarity
        </span>
      </motion.div>
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

// Before/After Comparison Component
function BeforeAfterComparison({ beforeAfter }) {
  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Before */}
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {beforeAfter.before.title}
            </h4>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-6">
            <ul className="space-y-3">
              {beforeAfter.before.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 dark:text-red-300 text-xs font-bold">{i + 1}</span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* After */}
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {beforeAfter.after.title}
            </h4>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6">
            <ul className="space-y-3">
              {beforeAfter.after.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-200 dark:bg-teal-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-300 text-xs font-bold">{i + 1}</span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Static Screen Gallery Component - Shows screens with link to interactive prototype
function ScreenGallery({ prototype, prototypeLink }) {
  const screens = [
    { 
      component: ProfileScreenStatic, 
      title: 'Profile & Events',
      description: 'Users land on their profile where upcoming events are prominently displayed. The red "Task Alert" banner immediately signals that action is needed.'
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

      {/* Challenge & Solution Cards - Animated on Scroll */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Challenge Card */}
            <motion.div 
              className="rounded-[20px] p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-amber-500/20 rounded-xl">
                  <TargetIcon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-bold text-xl text-amber-900">The Challenge</h3>
              </div>
              {Array.isArray(study.challenge) ? (
                <ul className="space-y-3">
                  {study.challenge.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3 text-amber-800"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-amber-800 text-sm leading-relaxed">{study.challenge}</p>
              )}
            </motion.div>

            {/* Solution Card */}
            <motion.div 
              className="rounded-[20px] p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)',
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary-500/20 rounded-xl">
                  <LightbulbIcon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-bold text-xl text-primary-900">The Solution</h3>
              </div>
              {Array.isArray(study.solution) ? (
                <ul className="space-y-3">
                  {study.solution.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3 text-primary-800"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-primary-800 text-sm leading-relaxed">{study.solution}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">

          {/* Process Sections with alternating colored backgrounds */}
          {study.process.map((section, index) => {
            // Clean white/light backgrounds
            const sectionColors = [
              'bg-white dark:bg-gray-900',
              'bg-gray-50/50 dark:bg-gray-800/30',
              'bg-white dark:bg-gray-900',
              'bg-gray-50/50 dark:bg-gray-800/30',
              'bg-white dark:bg-gray-900',
            ]
            const bgColor = sectionColors[index % sectionColors.length]
            
            return (
              <section 
                key={index} 
                className={`py-16 px-6 -mx-6 ${bgColor} ${index === 0 ? 'rounded-t-3xl' : ''} ${index === study.process.length - 1 ? 'rounded-b-3xl' : ''}`}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                  
                {/* Standard content paragraphs */}
                {section.content && !section.imageGallery && !section.problemStory && !section.problemBento && (
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                )}

                {/* Problem Bento - Callout Card Only */}
                {section.problemBento && section.problemBento.callout && (
                  <div className="mt-8">
                    <motion.div 
                      className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 rounded-[24px] p-8 md:p-10 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-fuchsia-500/20 to-transparent rounded-full blur-2xl" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl" />
                      
                      <div className="relative">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                          {section.problemBento.callout.headline}
                        </h3>
                        <p className="text-purple-100 text-lg leading-relaxed max-w-3xl">
                          {section.problemBento.callout.subtext}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Research Banner - Full Width Stats */}
                {section.researchBanner && (
                  <motion.div 
                    className="mt-8 -mx-6 px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Full-width gradient banner */}
                    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[32px] overflow-hidden">
                      {/* Decorative background elements */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/5 via-transparent to-teal-500/5" />
                        {/* Grid pattern */}
                        <div className="absolute inset-0 opacity-5" style={{
                          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                          backgroundSize: '40px 40px'
                        }} />
                      </div>
                      
                      <div className="relative px-8 md:px-16 py-16 md:py-20">
                        {/* Header text */}
                        <div className="text-center mb-16">
                          <motion.span 
                            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                          >
                            Research Phase
                          </motion.span>
                          <motion.h3 
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            {section.researchBanner.headline}
                          </motion.h3>
                          <motion.p 
                            className="text-slate-300 text-lg max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {section.researchBanner.subtext}
                          </motion.p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                          {section.researchBanner.stats.map((stat, i) => {
                            const gradients = [
                              'from-violet-500 to-purple-600',
                              'from-teal-500 to-emerald-600',
                              'from-amber-500 to-orange-600'
                            ]
                            
                            return (
                              <motion.div 
                                key={i}
                                className="relative group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-[24px] group-hover:from-white/15 group-hover:to-white/10 transition-all duration-300" />
                                <div className="relative p-8 text-center">
                                  {/* Big number */}
                                  <motion.div 
                                    className={`text-7xl md:text-8xl font-black bg-gradient-to-br ${gradients[i]} bg-clip-text text-transparent mb-3`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    {stat.number}
                                  </motion.div>
                                  {/* Label */}
                                  <h4 className="text-lg font-bold text-white mb-2">
                                    {stat.label}
                                  </h4>
                                  {/* Description */}
                                  <p className="text-sm text-slate-400 leading-relaxed">
                                    {stat.description}
                                  </p>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Sam Persona Section */}
                {section.samPersona && (
                  <div className="mt-8 space-y-8">
                    {/* Intro text */}
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {section.samPersona.intro}
                    </motion.p>

                    {/* Sam Bio Card */}
                    <motion.div 
                      className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-[32px] p-8 md:p-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
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
                  <div className="mt-8 space-y-8">
                    {/* Intro text */}
                    {section.discoveryIntro && (
                      <motion.p 
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {section.discoveryIntro}
                      </motion.p>
                    )}

                    {/* Bento Grid */}
                    <div className="grid grid-cols-12 gap-3 md:gap-4">
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
                            bg: 'bg-violet-50 dark:bg-violet-900/20',
                            label: 'bg-violet-500',
                            text: 'text-violet-900 dark:text-violet-100',
                            muted: 'text-violet-700 dark:text-violet-300',
                            border: 'border-violet-200 dark:border-violet-800'
                          },
                          sky: {
                            bg: 'bg-sky-50 dark:bg-sky-900/20',
                            label: 'bg-sky-500',
                            text: 'text-sky-900 dark:text-sky-100',
                            muted: 'text-sky-700 dark:text-sky-300',
                            border: 'border-sky-200 dark:border-sky-800'
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
                            className={`${layouts[i]} ${c.bg} rounded-[20px] p-5 md:p-6 overflow-hidden group hover:shadow-lg transition-all duration-300`}
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
                                <div className="flex items-center gap-3 mb-3">
                                  <span className={`${c.label} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                                    {cat.label}
                                  </span>
                                </div>
                                
                                <h4 className={`text-xl md:text-2xl font-bold ${c.text} mb-3 leading-tight`}>
                                  {cat.question}
                                </h4>
                                
                                <p className={`${c.muted} text-sm leading-relaxed mb-4 flex-1`}>
                                  {cat.story}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
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
                  <BeforeAfterScreens items={section.beforeAfterScreens} />
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

                {section.highlights && !section.imageGallery && (
                  <KeyInsights highlights={section.highlights} sectionIndex={index} />
                )}

                {/* Documentation Viewer for Smart Documentation section */}
                {section.showDocumentationViewer && (
                  <div className="mt-12">
                    <DocumentationViewer />
                  </div>
                )}

                {/* Code Review Viewer for Agent-Assisted Code Review section */}
                {section.showCodeReviewViewer && (
                  <div className="mt-12">
                    <CodeReviewViewer />
                  </div>
                )}

                {/* Workflow Diagram for Integrated Workflow section */}
                {section.showWorkflowDiagram && (
                  <div className="mt-12">
                    <WorkflowDiagram />
                  </div>
                )}

                {section.quote && (
                  <blockquote className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-primary-500 shadow-sm">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
                      "{section.quote.text}"
                    </p>
                    <footer className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      — {section.quote.author}
                    </footer>
                  </blockquote>
                )}
              </section>
            )
          })}
        </div>
      </section>

      {/* Results - Bold colorful section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-primary-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Results & Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {study.results.map((result, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary-400">{result.metric}</div>
                <p className="text-gray-300 text-sm">{result.label}</p>
              </div>
            ))}
          </div>
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
