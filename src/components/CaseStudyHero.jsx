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
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* Project Title - Largest Cell (spans 2 columns) */}
            <motion.div 
              className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[20px] p-8 md:p-10"
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
              
              {/* Metadata Row */}
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium mb-1">
                    Role
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {study.roles?.[0] || 'Design Lead'}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium mb-1">
                    Team
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {study.team}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium mb-1">
                    Timeline
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {study.timeline}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* About Client Cell */}
            {heroImage?.clientDescription && (
              <motion.div 
                className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[20px] p-6 md:p-8 text-white flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 font-medium mb-3">
                    About {heroImage?.clientName || 'the Client'}
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {heroImage.clientDescription}
                  </p>
                </div>
              </motion.div>
            )}

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
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
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
