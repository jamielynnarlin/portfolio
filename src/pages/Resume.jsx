import { useRef } from 'react'

function Resume() {
  const resumeRef = useRef(null)

  const handlePrint = () => {
    window.print()
  }

  const experiences = [
    {
      title: "Director of UX",
      company: "Consilio",
      date: "Oct 2023 - Aug 2025",
      description: "Directed UX and application development across enterprise eDiscovery platforms (Sightline, Relativity). Built and guided global teams of UX designers, engineers, and product managers to scale applications and optimize business outcomes.",
      bullets: [
        "Partnered with SVP, CPO, and CTO to define product roadmaps with AI and next-gen technology initiatives",
        "Orchestrated design and delivery of hybrid human + AI systems, boosting user engagement",
        "Established cross-functional Director/Verifier patterns that streamlined AI SDLC",
        "Demonstrated high AI Fluency by building Design-to-Code flow (Figma/VS Code/GitHub Copilot)",
        "Built standardized UX frameworks including component libraries and style guides"
      ]
    },
    {
      title: "Lead Product Designer",
      company: "Vivid Seats",
      date: "Sept 2022 - Feb 2023",
      description: "Led a team of four Product Designers and UX Architects, overseeing design projects across web/mobile platforms.",
      bullets: [
        "Empowered team to adopt Outcome Orientation, aligning delivery to measurable enhancements",
        "Defined use cases and technical requirements, translating business needs into user journeys",
        "Led design thinking workshops, driving behavioral adoption and strategic alignment",
        "Designed and executed user testing with targeted data collection scripts"
      ]
    },
    {
      title: "Senior Product Designer",
      company: "Rewards Network",
      date: "Oct 2021 - Feb 2022",
      description: "Led UX design and strategy for a restaurant owner portal serving 15,000+ users across brands like Denny's and Buffalo Wild Wings.",
      bullets: [
        "Delivered Client Value & Growth: increased cash advances by 49% ($8M+) and user interaction by 53%",
        "Maintained and grew Design Systems for B2B and B2C ensuring UI consistency",
        "Directed workshops in design thinking, storyboarding, and user research"
      ]
    },
    {
      title: "UX/Visual Designer Consultant",
      company: "Booked Out",
      date: "Jan 2016 - Feb 2017",
      description: "Drove core UX and product strategy for a major SaaS platform with high-profile clients including Coca Cola, Google, Walmart, Nike, and Samsung.",
      bullets: [
        "Led end-to-end UX design for feature and SaaS product development",
        "Collaborated with cross-functional and overseas Scrum teams (Buenos Aires)",
        "Facilitated UX workshops with stakeholders, clients, and developers"
      ]
    },
    {
      title: "Founder",
      company: "Jamie Lynn Designs",
      date: "Oct 2009 - Dec 2023",
      description: "Founded and directed a specialized agency providing full digital design services.",
      bullets: [
        "Increased revenue by 54% through sales collateral, marketing campaigns, and social media",
        "Implemented DesignOps principles that streamlined processes and increased operating margin",
        "Grew visual design team from 1 to 7, producing 12,000+ original designs",
        "Directed all aspects of project life cycles from requirements to delivery"
      ]
    },
    {
      title: "Founder",
      company: "Cake Bite Girl",
      date: "Oct 2011 - Feb 2018",
      description: null,
      bullets: [
        "Designed and developed e-commerce website on ASP.NET nopCommerce platform",
        "Produced for corporate events (Google, Harry Carey's, Chicago Fire) and weddings",
        "Managed operations, marketing, and team for nationwide client base"
      ]
    }
  ]

  const skills = [
    'UX/UI Design', 'Systems Thinking', 'Executive Storytelling', 'Change Leadership',
    'Design Management & Process', 'Project Management', 'User Flows/User Journeys',
    'Application Modernization', 'Human Experience Design', 'Conversational/Generative AI',
    'Data Visualization', 'User Testing', 'Prototyping', 'Scrum Methodology',
    'Design Systems', 'Information Architecture'
  ]

  const tools = [
    'Figma', 'Adobe Suite', 'Sketch w/Zeplin', 'Invision', 'Balsamiq', 'Full Story',
    'Miro', 'Jira/Confluence', 'Asana', 'Userlytics.com', 'VS Code/Github Copilot', 'v0 by Vercel'
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      {/* Print/Download Button */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="btn-primary flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download / Print Resume
        </button>
      </div>

      {/* Resume Content */}
      <div 
        ref={resumeRef}
        className="max-w-5xl mx-auto print:max-w-none"
      >
        {/* Header */}
        <div className="bg-navy-900 dark:bg-gray-800 rounded-t-2xl p-8 print:rounded-none print:p-6">
          <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide mb-4 print:text-3xl">
            Jamie Arlin
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl print:text-sm">
            15+ years of leadership experience specializing in scaling design organizations and creating user experiences for complex systems. Expert in orchestrating cross-functional pods, defining outcome-oriented roadmaps, and embedding new ways of working through DesignOps and AI and Agentic Tooling.
          </p>
          
          {/* Contact Row */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm print:gap-4 print:text-xs">
            <a href="mailto:jamielynnarlin@gmail.com" className="text-primary-400 hover:text-primary-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jamielynnarlin@gmail.com
            </a>
            <a href="https://linkedin.com/in/jamie28" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              linkedin.com/in/jamie28
            </a>
            <span className="text-gray-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              847-452-9956
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-b-2xl shadow-xl print:shadow-none print:rounded-none">
          <div className="grid lg:grid-cols-[1fr,300px] print:grid-cols-[1fr,240px]">
            {/* Work Experience */}
            <div className="p-8 print:p-6 border-r border-gray-200 dark:border-gray-700">
              <h2 className="font-display text-2xl text-navy-900 dark:text-white uppercase tracking-wide mb-6 print:text-xl">
                Work Experience
              </h2>

              <div className="space-y-8 print:space-y-5">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    {/* Title and Company */}
                    <div className="mb-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold text-navy-900 dark:text-white print:text-base">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded print:text-[10px]">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium print:text-sm">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Description */}
                    {exp.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 print:text-xs">
                        {exp.description}
                      </p>
                    )}
                    
                    {/* Bullets */}
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 print:text-xs list-disc list-outside ml-4 marker:text-primary-500">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="p-8 print:p-6 bg-gray-50 dark:bg-gray-900/50">
              {/* Skills */}
              <div className="mb-8 print:mb-5">
                <h2 className="font-display text-lg text-navy-900 dark:text-white uppercase tracking-wide mb-4 print:text-base print:mb-3">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs rounded text-gray-700 dark:text-gray-300 print:text-[10px] print:px-1.5 print:py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Toolbox */}
              <div className="mb-8 print:mb-5">
                <h2 className="font-display text-lg text-navy-900 dark:text-white uppercase tracking-wide mb-4 print:text-base print:mb-3">
                  Toolbox
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-xs rounded text-primary-700 dark:text-primary-300 print:text-[10px] print:px-1.5 print:py-0.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Volunteer */}
              <div className="mb-8 print:mb-5">
                <h2 className="font-display text-lg text-navy-900 dark:text-white uppercase tracking-wide mb-4 print:text-base print:mb-3">
                  Volunteer
                </h2>
                <p className="text-sm font-semibold text-navy-900 dark:text-white print:text-xs">
                  Professional Women's Club of Chicago
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed print:text-[10px]">
                  Served on the Communications Committee, leading networking luncheons, designing the 15th Anniversary logo, and managing social media promotions.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-display text-lg text-navy-900 dark:text-white uppercase tracking-wide mb-4 print:text-base print:mb-3">
                  Education
                </h2>
                <p className="text-sm font-semibold text-navy-900 dark:text-white print:text-xs">
                  Bachelor's of Arts
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 print:text-[10px]">
                  Bradley University, 1998 - 2002
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.25in;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Resume
