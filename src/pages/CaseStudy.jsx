import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

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

// Interactive Prototype Component
function InteractivePrototype({ prototype }) {
  const [activeStep, setActiveStep] = useState(0)
  const steps = prototype.steps

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className="mt-24 -mx-6 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Interactive Demo</span>
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {prototype.title}
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {prototype.description}
        </p>
      </div>

      {/* Interactive Demo Container */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Description */}
        <div className="flex-1 max-w-md order-2 lg:order-1">
          <div className="space-y-6">
            {/* Step indicators */}
            <div className="flex items-center gap-3 mb-8">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                    activeStep === i 
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 scale-110' 
                      : activeStep > i
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {activeStep > i ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic content based on active step */}
            <div className="min-h-[180px]">
              <div key={activeStep} className="animate-fadeIn">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {steps[activeStep].label}
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {steps[activeStep].description}
                </p>
                
                {/* Navigation buttons */}
                <div className="flex items-center gap-3">
                  {activeStep > 0 && (
                    <button 
                      onClick={handlePrev}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  )}
                  {activeStep < steps.length - 1 ? (
                    <button 
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button 
                      onClick={() => setActiveStep(0)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Restart
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Feature bullets */}
            <ul className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              {prototype.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Composite image with highlight overlay */}
        <div className="flex-1 w-full max-w-5xl order-1 lg:order-2">
          <div className="relative rounded-[2rem] p-4 md:p-6 bg-gradient-to-br from-primary-50 to-sky-50 dark:from-primary-900/20 dark:to-sky-900/20">
            {/* The composite image showing all 3 screens */}
            <div className="relative">
              <img 
                src={prototype.compositeImage} 
                alt="Profile and Task Flow"
                className="w-full h-auto rounded-xl"
              />
              
              {/* Highlight overlay for active screen */}
              <div className="absolute inset-0 flex">
                {steps.map((step, i) => (
                  <div 
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex-1 cursor-pointer transition-all duration-300 ${
                      activeStep === i 
                        ? '' 
                        : 'bg-white/50 dark:bg-gray-900/50'
                    }`}
                    style={{
                      borderRadius: activeStep === i ? '0.75rem' : '0',
                      boxShadow: activeStep === i ? '0 0 0 4px rgb(20 184 166)' : 'none',
                      margin: activeStep === i ? '8px' : '0'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeStep 
                      ? 'bg-primary-500 w-8' 
                      : i < activeStep 
                        ? 'bg-primary-300 w-4'
                        : 'bg-gray-300 dark:bg-gray-600 w-4'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies[slug]
  const [specsExpanded, setSpecsExpanded] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState(null)
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

  const specItems = [
    { id: 'timeline', icon: ClockIcon, label: 'Timeline', value: study.timeline, color: 'text-primary-500' },
    { id: 'roles', icon: UserIcon, label: 'My Roles', value: study.roles, color: 'text-blue-500' },
    { id: 'tools', icon: WrenchIcon, label: 'Tools & Methods', value: study.tags, color: 'text-purple-500' },
    { id: 'team', icon: TeamIcon, label: 'Team', value: study.team, color: 'text-green-500' },
  ]

  return (
    <article ref={articleRef} className="min-h-screen">
      {/* Hero Section - Clean, minimal like Amie */}
      <section className="pt-8 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
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

      {/* Floating Project Specs Bar - Glassmorphism */}
      <div className="sticky top-20 z-40 px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="glass-panel rounded-2xl overflow-hidden transition-all duration-500 ease-out"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Collapsed State */}
            <div className="flex items-center px-4 py-3">
              <button
                onClick={() => setSpecsExpanded(!specsExpanded)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
              >
                <span>Project Specs</span>
                <ChevronDownIcon 
                  className={`w-4 h-4 transition-transform duration-300 ${specsExpanded ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>

            {/* Expanded State - Full Specs */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-out ${
                specsExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-5 pt-2 border-t border-white/20 dark:border-gray-700/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Timeline */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-primary-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Timeline</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{study.timeline}</p>
                  </div>

                  {/* Roles */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">My Roles</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {study.roles.map((role, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <WrenchIcon className="w-4 h-4 text-purple-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TeamIcon className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Team</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{study.team}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Cards - Highlighted Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Challenge Card */}
            <div 
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/20 rounded-xl">
                  <TargetIcon className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-lg text-amber-900">The Challenge</h3>
              </div>
              {Array.isArray(study.challenge) ? (
                <ul className="space-y-2">
                  {study.challenge.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-amber-800">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-amber-800 text-sm leading-relaxed">{study.challenge}</p>
              )}
            </div>

            {/* Solution Card */}
            <div 
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-500/20 rounded-xl">
                  <LightbulbIcon className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="font-bold text-lg text-primary-900">The Solution</h3>
              </div>
              {Array.isArray(study.solution) ? (
                <ul className="space-y-2">
                  {study.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary-800">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-primary-800 text-sm leading-relaxed">{study.solution}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">

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
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                  
                {/* Standard content paragraphs */}
                {section.content && !section.imageGallery && (
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                    ))}
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

                {/* Interactive Prototype Section */}
                {section.interactivePrototype && (
                  <InteractivePrototype prototype={section.interactivePrototype} />
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
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {section.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.quote && (
                  <blockquote className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-primary-500 shadow-sm">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
                      "{section.quote.text}"
                    </p>
                    <footer className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      - {section.quote.author}
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
        <div className="max-w-4xl mx-auto text-center">
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

      {/* Key Takeaways */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Key Takeaways
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {study.takeaways.map((takeaway, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">{i + 1}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {takeaway.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{takeaway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
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
