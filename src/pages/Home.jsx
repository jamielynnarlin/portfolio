import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import BlogCard from '../components/BlogCard'
import { mvpProjects } from '../data/projects'
import { blogPosts } from '../data/blogPosts'

function Home() {
  const featuredProjects = mvpProjects.slice(0, 3)
  const recentPosts = blogPosts.slice(0, 2)

  const skills = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="8" width="32" height="24" rx="2" />
          <circle cx="24" cy="20" r="6" />
          <path d="M18 20h-4M34 20h-4M24 14v-4M24 26v4" />
          <path d="M16 36h16M20 36v4M28 36v4" />
        </svg>
      ),
      title: "AI for SDLC",
      description: "Implementing AI-powered workflows and agentic systems to accelerate software delivery and enhance team productivity."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 12h32M8 24h32M8 36h32" />
          <circle cx="16" cy="12" r="3" />
          <circle cx="32" cy="24" r="3" />
          <circle cx="20" cy="36" r="3" />
        </svg>
      ),
      title: "DesignOps",
      description: "Building scalable design operations that bridge the gap between creative vision and efficient delivery at enterprise scale."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="16" height="12" rx="2" />
          <rect x="26" y="6" width="16" height="12" rx="2" />
          <rect x="6" y="30" width="16" height="12" rx="2" />
          <rect x="26" y="30" width="16" height="12" rx="2" />
          <path d="M14 18v12M34 18v12M22 12h4M22 36h4" />
        </svg>
      ),
      title: "UX Architecture",
      description: "Crafting user-centered experiences through research, strategy, and cross-functional collaboration that drives business outcomes."
    },
  ]

  return (
    <div>
      {/* Hero Section with Animated Starfield */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Particle Dispersion Animation */}
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="particleGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#99f6e4" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="particle1" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#2dd4bf" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="particle2" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#99f6e4" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#5eead4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="particle3" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#99f6e4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="haloGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#99f6e4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="1.5"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="2"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="strongGlow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="2.5"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Text boundary (approximate headline position) */}
            {(() => {
              const textBoundary = {
                x: 200,
                y: 300,
                width: 1000,
                height: 250
              };
              
              // Helper function to check if particle path intersects text
              const getOrbitPath = (centerX, centerY, startX, startY, targetX, targetY) => {
                const midX = (startX + targetX) / 2;
                const midY = (startY + targetY) / 2;
                
                // Check if path goes through text area
                const intersectsText = (
                  midX > textBoundary.x && midX < textBoundary.x + textBoundary.width &&
                  midY > textBoundary.y && midY < textBoundary.y + textBoundary.height
                );
                
                if (intersectsText) {
                  // Calculate orbit point that curves around text
                  const textCenterX = textBoundary.x + textBoundary.width / 2;
                  const textCenterY = textBoundary.y + textBoundary.height / 2;
                  const angle = Math.atan2(midY - textCenterY, midX - textCenterX);
                  const orbitRadius = 180;
                  const orbitX = textCenterX + Math.cos(angle) * orbitRadius;
                  const orbitY = textCenterY + Math.sin(angle) * orbitRadius;
                  
                  return { orbitX, orbitY, hasOrbit: true };
                }
                
                return { orbitX: midX, orbitY: midY, hasOrbit: false };
              };
              
              return (
                <>
                  {/* Multiple particle groups dispersing from different locations */}
                  {[
                    { centerX: 300, centerY: 200, count: 20, gradient: "url(#particle1)", delay: 0 },
                    { centerX: 1100, centerY: 250, count: 18, gradient: "url(#particle2)", delay: 1 },
                    { centerX: 500, centerY: 500, count: 22, gradient: "url(#particle3)", delay: 2 },
                    { centerX: 900, centerY: 600, count: 16, gradient: "url(#particle1)", delay: 3 },
                    { centerX: 200, centerY: 600, count: 15, gradient: "url(#particle2)", delay: 1.5 },
                    { centerX: 1200, centerY: 550, count: 17, gradient: "url(#particle3)", delay: 2.5 },
                  ].map((group, groupIndex) => (
                    <g key={`group-${groupIndex}`}>
                      {/* Particles dispersing from this group center */}
                      {Array.from({ length: group.count }).map((_, i) => {
                        const angle = (i / group.count) * Math.PI * 2;
                        const radius = 80;
                        const startX = group.centerX + Math.cos(angle) * radius;
                        const startY = group.centerY + Math.sin(angle) * radius;
                        const disperseX = group.centerX + Math.cos(angle) * (radius * 1.8);
                        const disperseY = group.centerY + Math.sin(angle) * (radius * 1.8);
                        const size = 1 + Math.random() * 1.5;
                        const particleDelay = group.delay + (Math.random() * 2);
                        
                        // Calculate orbit paths for each segment
                        const orbit1 = getOrbitPath(group.centerX, group.centerY, startX, startY, group.centerX, group.centerY);
                        const orbit2 = getOrbitPath(group.centerX, group.centerY, group.centerX, group.centerY, disperseX, disperseY);
                        const orbit3 = getOrbitPath(group.centerX, group.centerY, disperseX, disperseY, group.centerX, group.centerY);
                        const orbit4 = getOrbitPath(group.centerX, group.centerY, group.centerX, group.centerY, startX, startY);
                        
                        return (
                          <g key={`particle-${groupIndex}-${i}`}>
                            {/* Glow layer */}
                            <motion.circle
                              cx={startX}
                              cy={startY}
                              r={size * 2.5}
                              fill={group.gradient}
                              opacity="0.4"
                              animate={{
                                cx: [startX, orbit1.orbitX, group.centerX, orbit2.orbitX, disperseX, orbit3.orbitX, group.centerX, orbit4.orbitX, startX],
                                cy: [startY, orbit1.orbitY, group.centerY, orbit2.orbitY, disperseY, orbit3.orbitY, group.centerY, orbit4.orbitY, startY],
                                opacity: [0, 0.3, 0.4, 0.3, 0.2, 0.3, 0.4, 0.3, 0],
                              }}
                              transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: particleDelay
                              }}
                            />
                            {/* Core particle */}
                            <motion.circle
                              cx={startX}
                              cy={startY}
                              r={size}
                              fill={group.gradient}
                              animate={{
                                cx: [startX, orbit1.orbitX, group.centerX, orbit2.orbitX, disperseX, orbit3.orbitX, group.centerX, orbit4.orbitX, startX],
                                cy: [startY, orbit1.orbitY, group.centerY, orbit2.orbitY, disperseY, orbit3.orbitY, group.centerY, orbit4.orbitY, startY],
                                opacity: [0, 0.7, 0.9, 0.7, 0.6, 0.7, 0.9, 0.7, 0],
                              }}
                              transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: particleDelay
                              }}
                            />
                          </g>
                        );
                      })}
                    </g>
                  ))}
                </>
              );
            })()}

            {/* Ambient floating particles with halos */}
            {Array.from({ length: 40 }).map((_, i) => {
              const startX = Math.random() * 1440;
              const startY = Math.random() * 800;
              const endX = startX + (Math.random() - 0.5) * 300;
              const endY = startY + (Math.random() - 0.5) * 250;
              const size = 0.6 + Math.random() * 1.2;
              const delay = Math.random() * 6;
              const duration = 10 + Math.random() * 8;
              const gradients = ["url(#particle1)", "url(#particle2)", "url(#particle3)"];
              const gradient = gradients[Math.floor(Math.random() * gradients.length)];

              return (
                <g key={`ambient-${i}`}>
                  {/* Glow layer */}
                  <motion.circle
                    cx={startX}
                    cy={startY}
                    r={size * 2.5}
                    fill={gradient}
                    opacity="0.3"
                    animate={{
                      cx: [startX, endX, startX],
                      cy: [startY, endY, startY],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay
                    }}
                  />
                  {/* Core particle */}
                  <motion.circle
                    cx={startX}
                    cy={startY}
                    r={size}
                    fill={gradient}
                    animate={{
                      cx: [startX, endX, startX],
                      cy: [startY, endY, startY],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay
                    }}
                  />
                </g>
              );
            })}

            {/* Subtle background glow */}
            <motion.rect
              x="0"
              y="0"
              width="1440"
              height="800"
              fill="url(#particleGlow)"
              opacity="0"
              animate={{
                opacity: [0.03, 0.08, 0.03]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

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
                  {skill.icon}
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
          <div className="max-w-2xl mx-auto">
            <BlogCard post={recentPosts[0]} />
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
