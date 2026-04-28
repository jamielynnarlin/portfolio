import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Skills() {
  const skillCategories = [
    {
      category: "AI & Automation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "Agentic AI Systems", description: "Building autonomous, multi-step AI workflows that break down problems, execute code, and iterate based on feedback." },
        { name: "LLM Integration", description: "Integrating large language models into products with RAG, confidence calibration, and hallucination prevention." },
        { name: "AI-Assisted SDLC", description: "Applying AI tools across the full software development lifecycle - from research synthesis to test generation." },
        { name: "Prompt Engineering", description: "Crafting effective prompts with version control, regression testing against golden datasets, and formal review processes." },
      ],
      relatedProjects: ["AI Powered Development Workflow", "Conversational Document Review"],
      highlight: "40% reduction in development cycles through AI systems",
    },
    {
      category: "Delivery Leadership",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: [
        { name: "Agile/Scrum", description: "Leading sprint ceremonies, managing backlogs, and driving outcome-oriented delivery across teams." },
        { name: "Program Management", description: "Directing cross-functional pods of UX designers, engineers, and product managers at scale." },
        { name: "Cross-functional Teams", description: "Aligning agency, engineering, and product teams around shared goals and delivery milestones." },
        { name: "Stakeholder Management", description: "Partnering with SVP, CPO, and CTO-level executives to define product roadmaps." },
      ],
      relatedProjects: ["DesignOps Transformation"],
      highlight: "15+ years of leadership experience scaling design organizations",
    },
    {
      category: "DesignOps",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      skills: [
        { name: "Design Systems", description: "Building and maintaining component libraries, style guides, and design tokens for consistency at scale." },
        { name: "Process Optimization", description: "Implementing DesignOps principles that streamline workflows and increase operating margin." },
        { name: "Team Scaling", description: "Growing and mentoring design teams - grew a visual design team from 1 to 7 at her own agency." },
        { name: "Tool Strategy", description: "Evaluating and implementing design tools including MCP servers and Figma Make for bridging design and development." },
      ],
      relatedProjects: ["DesignOps Transformation"],
      highlight: "70% less handoff friction with MCP + Figma Make workflows",
    },
    {
      category: "UX & Design",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      skills: [
        { name: "User Research", description: "Contextual inquiry, stakeholder interviews, empathy mapping, and heatmap analysis with Hotjar." },
        { name: "Journey Mapping", description: "Creating user personas and mapping complete user journeys to reveal real pain points." },
        { name: "Visual Design", description: "15+ years of visual design experience producing 12,000+ original designs." },
        { name: "Usability Testing", description: "Guerrilla-style testing, moderated sessions, and data-driven validation with real users." },
      ],
      relatedProjects: ["Restaurant Portal Redesign", "Rewards Network Redesign"],
      highlight: "53% increase in user interaction through research-driven design",
    },
  ]

  const tools = [
    { name: "Claude", category: "AI" },
    { name: "GitHub Copilot", category: "AI" },
    { name: "Cursor", category: "AI" },
    { name: "v0 by Vercel", category: "AI" },
    { name: "Figma", category: "Design" },
    { name: "Adobe Suite", category: "Design" },
    { name: "Sketch", category: "Design" },
    { name: "InVision", category: "Design" },
    { name: "Jira/Confluence", category: "Delivery" },
    { name: "Asana", category: "Delivery" },
    { name: "Miro", category: "Collaboration" },
    { name: "Notion", category: "Documentation" },
    { name: "VS Code", category: "Development" },
    { name: "Full Story", category: "Analytics" },
    { name: "Hotjar", category: "Analytics" },
    { name: "Userlytics", category: "Analytics" },
  ]

  const toolCategories = [...new Set(tools.map(t => t.category))]

  const getProjectSlug = (title) => {
    const project = projects.find(p => p.title === title)
    return project?.caseStudyUrl || '/projects'
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wider text-sm">
            Skills & Expertise
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-navy-900 dark:text-white mt-2 mb-6 uppercase tracking-wide">
            What I Bring to the Table
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A unique combination of AI fluency, delivery leadership, DesignOps strategy, and deep UX craft - built over 15+ years of scaling design organizations and shipping complex systems.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12 mb-20">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 px-8 py-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm">
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-navy-900 dark:text-white uppercase tracking-wide">
                      {cat.category}
                    </h2>
                    <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mt-1">
                      {cat.highlight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-navy-900 dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Related Projects */}
                {cat.relatedProjects.length > 0 && (
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      See it in action:
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cat.relatedProjects.map((title) => (
                        <Link
                          key={title}
                          to={getProjectSlug(title)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                        >
                          {title}
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Toolbox */}
        <section className="mb-20">
          <h2 className="section-heading">Toolbox</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            {toolCategories.map((category) => (
              <div key={category} className="mb-6 last:mb-0">
                <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.filter(t => t.category === category).map((tool) => (
                    <span
                      key={tool.name}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium text-sm"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see these skills in action?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
