import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import BlogCard from '../components/BlogCard'
import ParticleField from '../components/ParticleField'
import { mvpProjects } from '../data/projects'
import { blogPosts } from '../data/blogPosts'

// Animated Icon Components
const AIIcon = ({ inView }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  }
  const assemble = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }
  const pulse = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.6, ease: "easeOut" } }
  }
  const legs = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } }
  }

  return (
    <motion.svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Monitor frame - draws in */}
      <motion.rect 
        x="8" y="8" width="32" height="24" rx="2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={draw}
      />
      {/* AI circle - pulses in */}
      <motion.circle 
        cx="24" cy="20" r="6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={pulse}
      />
      {/* Connection lines - draw outward */}
      <motion.path 
        d="M18 20h-4M34 20h-4M24 14v-4M24 26v4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.7 } } }}
      />
      {/* Stand - slides up */}
      <motion.path 
        d="M16 36h16M20 36v4M28 36v4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={legs}
      />
    </motion.svg>
  )
}

const DesignOpsIcon = ({ inView }) => {
  const lineVariants = (delay) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, delay, ease: "easeOut" } }
  })
  const nodeVariants = (delay) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay, type: "spring", stiffness: 200 } }
  })

  return (
    <motion.svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Horizontal lines - draw left to right with stagger */}
      <motion.path 
        d="M8 12h32"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={lineVariants(0)}
      />
      <motion.path 
        d="M8 24h32"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={lineVariants(0.15)}
      />
      <motion.path 
        d="M8 36h32"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={lineVariants(0.3)}
      />
      {/* Nodes - pop in after lines */}
      <motion.circle 
        cx="16" cy="12" r="3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={nodeVariants(0.5)}
      />
      <motion.circle 
        cx="32" cy="24" r="3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={nodeVariants(0.6)}
      />
      <motion.circle 
        cx="20" cy="36" r="3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={nodeVariants(0.7)}
      />
    </motion.svg>
  )
}

const UXArchitectureIcon = ({ inView }) => {
  const boxVariants = (delay, fromX, fromY) => ({
    hidden: { opacity: 0, x: fromX, y: fromY, scale: 0.8 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.5, delay, ease: "easeOut" } }
  })
  const connectionVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.6 } }
  }

  return (
    <motion.svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Four boxes - converge from corners */}
      <motion.rect 
        x="6" y="6" width="16" height="12" rx="2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={boxVariants(0, -8, -8)}
      />
      <motion.rect 
        x="26" y="6" width="16" height="12" rx="2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={boxVariants(0.1, 8, -8)}
      />
      <motion.rect 
        x="6" y="30" width="16" height="12" rx="2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={boxVariants(0.2, -8, 8)}
      />
      <motion.rect 
        x="26" y="30" width="16" height="12" rx="2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={boxVariants(0.3, 8, 8)}
      />
      {/* Connection lines - draw after boxes settle */}
      <motion.path 
        d="M14 18v12M34 18v12M22 12h4M22 36h4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={connectionVariants}
      />
    </motion.svg>
  )
}

// Wrapper component to handle inView detection per icon
const AnimatedSkillIcon = ({ type }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <div ref={ref}>
      {type === 'ai' && <AIIcon inView={inView} />}
      {type === 'designops' && <DesignOpsIcon inView={inView} />}
      {type === 'ux' && <UXArchitectureIcon inView={inView} />}
    </div>
  )
}

function Home() {
  const featuredProjects = mvpProjects.slice(0, 3)
  const recentPosts = blogPosts.slice(0, 2)

  const skills = [
    {
      iconType: 'ai',
      title: "AI for SDLC",
      description: "Implementing AI-powered workflows and agentic systems to accelerate software delivery and enhance team productivity."
    },
    {
      iconType: 'designops',
      title: "DesignOps",
      description: "Building scalable design operations that bridge the gap between creative vision and efficient delivery at enterprise scale."
    },
    {
      iconType: 'ux',
      title: "UX Architecture",
      description: "Crafting user-centered experiences through research, strategy, and cross-functional collaboration that drives business outcomes."
    },
  ]

  return (
    <div>
      {/* Hero Section with Animated Starfield */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <ParticleField />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="w-full">
            <p className="text-gray-600 dark:text-gray-400 mb-4 tracking-wide">
              Jamie Arlin is a Delivery Lead & UX Leader driving AI-enabled software delivery
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy-900 dark:text-white mb-8 uppercase tracking-wide leading-tight">
              I transform teams with AI to shape human experiences.
            </h1>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/resume" className="btn-secondary">
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="text-navy-800 dark:text-primary-400 mb-4 flex justify-center">
                  <AnimatedSkillIcon type={skill.iconType} />
                </div>
                <h3 className="font-display text-2xl text-navy-900 dark:text-white mb-3 uppercase tracking-wide">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 dark:text-white uppercase tracking-wide">
                Featured Work
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Selected projects showcasing AI integration, delivery leadership, and UX strategy
              </p>
            </div>
            <Link to="/projects" className="text-primary-600 dark:text-primary-400 hover:underline font-medium hidden md:block">
              View All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <Link to="/projects" className="text-primary-600 dark:text-primary-400 hover:underline font-medium mt-8 block md:hidden text-center">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* AI Focus Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 dark:text-white mb-6 uppercase tracking-wide text-center">
              AI-Powered Delivery
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed text-center">
                I'm passionate about leveraging AI agents and automation to transform how teams build software. From intelligent code review to automated testing pipelines, I help organizations adopt AI tools that amplify human creativity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg leading-relaxed text-center">
                My approach combines deep UX expertise with modern AI capabilities, ensuring that automation serves both the team and the end user.
              </p>
            </div>
            
            {/* Visual cards for the 4 focus areas */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "AI-assisted development workflows",
                  gradient: "from-violet-500 to-purple-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )
                },
                { 
                  title: "Agentic coding systems",
                  gradient: "from-cyan-500 to-blue-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                { 
                  title: "Intelligent CI/CD pipelines",
                  gradient: "from-emerald-500 to-teal-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                { 
                  title: "LLM integration strategies",
                  gradient: "from-pink-500 to-rose-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 dark:text-white uppercase tracking-wide">
              Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Thoughts on AI, leadership, and building great products
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-100 via-cyan-50 to-primary-100 dark:from-teal-900/30 dark:via-gray-900 dark:to-primary-900/30" />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 dark:text-white mb-4 uppercase tracking-wide">
            Let's Build Something Great
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Looking for a leader who can bridge AI, design, and delivery? Let's talk about how I can help your team ship better products faster.
          </p>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
