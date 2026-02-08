import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link } from 'react-router-dom'

export function CaseStudyHero({ study }) {
  const containerRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Track scroll progress
  const { scrollY } = useScroll()
  
  // Detect when user has scrolled past hero
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 300)
  })

  const heroImage = study.heroImage
  const tagStyles = [
    'bg-gradient-to-r from-indigo-500/15 to-violet-500/15 text-indigo-700 dark:text-indigo-200 border border-indigo-300/40 dark:border-indigo-400/40',
    'bg-gradient-to-r from-emerald-500/15 to-teal-500/15 text-emerald-700 dark:text-emerald-200 border border-emerald-300/40 dark:border-emerald-400/40',
    'bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-700 dark:text-amber-200 border border-amber-300/40 dark:border-amber-400/40',
    'bg-gradient-to-r from-rose-500/15 to-pink-500/15 text-rose-700 dark:text-rose-200 border border-rose-300/40 dark:border-rose-400/40',
    'bg-gradient-to-r from-sky-500/15 to-blue-500/15 text-sky-700 dark:text-sky-200 border border-sky-300/40 dark:border-sky-400/40'
  ]

  return (
    <>
      {/* Sticky Glassmorphism Nav Bar - appears on scroll */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            <Link 
              to="/projects" 
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {study.title}
            </h2>
            <div className="w-5" /> {/* Spacer for centering */}
          </div>
        </div>
      </motion.div>

      <section ref={containerRef} className="bg-gray-50 dark:bg-gray-950">
        {/* Hero Image - Clean, crisp */}
        <div className="relative h-[45vh] min-h-[300px] max-h-[450px] overflow-hidden">
          <img 
            src={heroImage?.src || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&q=80'}
            alt={heroImage?.alt || 'Project hero image'}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24">
            
            {/* Project Title - Full Width */}
            <motion.div 
              className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-[20px] p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-4">
                {study.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {study.subtitle}
              </p>
              
              {/* Metadata Row - Icon-focused */}
              <div className="flex flex-wrap gap-6 md:gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">Role</p>
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">
                      {study.roles?.[0] || 'Design Lead'}
                    </p>
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
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">
                      {study.team}
                    </p>
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
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">
                      {study.timeline}
                    </p>
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
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium mb-4">
                Skills & Methods
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 text-sm rounded-full font-medium ${tagStyles[idx % tagStyles.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudyHero
