function About() {
  const skills = [
    { category: "AI & Automation", items: ["Agentic AI Systems", "LLM Integration", "AI-Assisted SDLC", "Prompt Engineering"] },
    { category: "Delivery Leadership", items: ["Agile/Scrum", "Program Management", "Cross-functional Teams", "Stakeholder Management"] },
    { category: "DesignOps", items: ["Design Systems", "Process Optimization", "Team Scaling", "Tool Strategy"] },
    { category: "UX & Design", items: ["User Research", "Journey Mapping", "Visual Design", "Usability Testing"] },
  ]

  const experience = [
    {
      title: "Senior Delivery Lead & AI Strategist",
      company: "Enterprise Technology",
      period: "2023 - Present",
      description: "Leading AI transformation initiatives across engineering teams. Implementing agentic systems for SDLC optimization, achieving 40% reduction in development cycles."
    },
    {
      title: "DesignOps & Delivery Lead",
      company: "Digital Innovation Agency",
      period: "2020 - 2023",
      description: "Built and scaled DesignOps practice serving 50+ product teams. Established design system governance and streamlined design-to-development workflows."
    },
    {
      title: "UX Architect & Team Lead",
      company: "Product Company",
      period: "2017 - 2020",
      description: "Led UX strategy for flagship products serving millions of users. Mentored design team and established research-driven design culture."
    },
  ]

  const tools = [
    { name: "Claude", category: "AI" },
    { name: "GitHub Copilot", category: "AI" },
    { name: "Cursor", category: "AI" },
    { name: "Figma", category: "Design" },
    { name: "Jira", category: "Delivery" },
    { name: "Miro", category: "Collaboration" },
    { name: "VS Code", category: "Development" },
    { name: "Notion", category: "Documentation" },
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/20 rounded-2xl aspect-square flex items-center justify-center">
              <span className="font-display text-9xl text-primary-600 dark:text-primary-400">JA</span>
            </div>
            {/* Geometric accents */}
            <svg className="absolute -bottom-8 -left-8 w-32 h-32 text-primary-200 dark:text-primary-800/30 -z-10" viewBox="0 0 100 100">
              <polygon points="0,100 100,100 50,0" fill="currentColor" />
            </svg>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wider text-sm">
              About Me
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-navy-900 dark:text-white mt-2 mb-6 uppercase tracking-wide">
              Bridging AI, Design & Delivery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a Delivery Lead and AI Strategist with deep roots in UX Architecture. Based in Chicago, I help organizations leverage AI to transform how they build products.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey from Visual Designer to UX Architect to Delivery Lead gives me a unique perspective—I understand both the craft of creating great experiences and the systems needed to deliver them at scale.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently, I'm focused on implementing agentic AI systems that amplify team capabilities while maintaining the human-centered approach that makes products truly valuable.
            </p>
            <a href="/resume.pdf" download className="btn-primary inline-block">
              Download Resume
            </a>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="section-heading">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(skillGroup => (
              <div key={skillGroup.category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="font-display text-xl text-primary-600 dark:text-primary-400 mb-4 uppercase tracking-wide">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-20">
          <h2 className="section-heading">Tools I Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map(tool => (
              <span key={tool.name} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium">
                {tool.name}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="section-heading">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-navy-900 dark:text-white uppercase tracking-wide">{job.title}</h3>
                  <span className="text-primary-600 dark:text-primary-400 font-medium">{job.period}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-3">{job.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="section-heading">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 dark:text-white mb-2 uppercase tracking-wide">AI as Amplifier</h3>
              <p className="text-gray-600 dark:text-gray-300">AI should enhance human creativity and decision-making, not replace it. I focus on tools that make teams more effective.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 dark:text-white mb-2 uppercase tracking-wide">People First</h3>
              <p className="text-gray-600 dark:text-gray-300">Great products come from empowered teams. I invest in culture, psychological safety, and continuous learning.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 dark:text-white mb-2 uppercase tracking-wide">Ship & Learn</h3>
              <p className="text-gray-600 dark:text-gray-300">Value is delivered through iteration. I prioritize getting products to users and learning from real feedback.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
