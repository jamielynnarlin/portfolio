import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import BlogCard from '../components/BlogCard'
import { projects } from '../data/projects'
import { blogPosts } from '../data/blogPosts'

function Home() {
  const featuredProjects = projects.slice(0, 3)
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
      {/* Hero Section with Geometric Background */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Large triangle top right */}
            <polygon points="900,0 1440,0 1440,400 1100,200" fill="url(#grad1)" className="dark:opacity-20" />
            {/* Triangle middle */}
            <polygon points="600,200 900,400 400,500" fill="#ccfbf1" fillOpacity="0.3" className="dark:opacity-10" />
            {/* Line accent */}
            <line x1="200" y1="600" x2="800" y2="700" stroke="#0d9488" strokeWidth="2" strokeOpacity="0.3" />
            {/* Small triangle */}
            <polygon points="1200,300 1400,500 1100,450" fill="#99f6e4" fillOpacity="0.4" className="dark:opacity-15" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="w-full">
            <p className="text-gray-600 dark:text-gray-400 mb-4 tracking-wide">
              Jamie Arlin is a Delivery Lead & UX Leader driving AI-enabled software delivery - based in Chicago
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy-900 dark:text-white mb-8 uppercase tracking-wide leading-tight">
              Hello! I'm a hybrid leader who transforms teams with AI and shapes human experiences.
            </h1>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <a href="/resume.pdf" download className="btn-secondary">
                Download Resume
              </a>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wider text-sm">
                Current Focus
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 dark:text-white mt-2 mb-6 uppercase tracking-wide">
                AI-Powered Delivery
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                I'm passionate about leveraging AI agents and automation to transform how teams build software. From intelligent code review to automated testing pipelines, I help organizations adopt AI tools that amplify human creativity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                My approach combines deep UX expertise with modern AI capabilities, ensuring that automation serves both the team and the end user.
              </p>
              <ul className="space-y-3">
                {["AI-assisted development workflows", "Agentic coding systems", "Intelligent CI/CD pipelines", "LLM integration strategies"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <svg className="w-48 h-48 text-primary-600 dark:text-primary-400" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
                  {/* AI/Brain visualization */}
                  <circle cx="100" cy="100" r="60" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="40" />
                  <circle cx="100" cy="100" r="20" fill="currentColor" fillOpacity="0.2" />
                  {/* Connection nodes */}
                  <circle cx="100" cy="40" r="8" fill="currentColor" />
                  <circle cx="152" cy="70" r="8" fill="currentColor" />
                  <circle cx="152" cy="130" r="8" fill="currentColor" />
                  <circle cx="100" cy="160" r="8" fill="currentColor" />
                  <circle cx="48" cy="130" r="8" fill="currentColor" />
                  <circle cx="48" cy="70" r="8" fill="currentColor" />
                  {/* Lines to center */}
                  <line x1="100" y1="48" x2="100" y2="80" />
                  <line x1="144" y1="74" x2="120" y2="88" />
                  <line x1="144" y1="126" x2="120" y2="112" />
                  <line x1="100" y1="152" x2="100" y2="120" />
                  <line x1="56" y1="126" x2="80" y2="112" />
                  <line x1="56" y1="74" x2="80" y2="88" />
                </svg>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 dark:bg-primary-800/30 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 dark:bg-primary-700/30 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 dark:text-white uppercase tracking-wide">
                Insights
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Thoughts on AI, leadership, and building great products
              </p>
            </div>
            <Link to="/blog" className="text-primary-600 dark:text-primary-400 hover:underline font-medium hidden md:block">
              Read All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice">
            <polygon points="0,400 200,300 0,200" fill="#ccfbf1" fillOpacity="0.3" className="dark:opacity-10" />
            <polygon points="1440,0 1200,150 1440,300" fill="#99f6e4" fillOpacity="0.3" className="dark:opacity-10" />
          </svg>
        </div>
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
