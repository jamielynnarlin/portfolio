import { useRef } from 'react'

function Resume() {
  const resumeRef = useRef(null)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      {/* Print/Download Button - Hidden when printing */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-end print:hidden">
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
        className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none print:max-w-none"
      >
        <div className="grid grid-cols-[280px,1fr] print:grid-cols-[240px,1fr]">
          {/* Left Sidebar */}
          <div className="bg-slate-800 text-white p-6 print:p-4">
            {/* Name & Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4 print:text-2xl">Jamie Arlin</h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                15+ years of leadership experience specializing in scaling design organizations and creating user experiences for complex systems. Expert in orchestrating cross-functional pods, defining outcome-oriented roadmaps, and embedding new ways of working through DesignOps and AI and Agentic Tooling.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Contact</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-slate-400 text-xs">Email</p>
                  <a href="mailto:jamielynnarlin@gmail.com" className="text-white hover:text-teal-300">jamielynnarlin@gmail.com</a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Portfolio</p>
                  <a 
                    href="https://jamie-arlin-portfolio-npilnrnspa-uc.a.run.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-teal-200"
                  >
                    jamie-arlin-portfolio
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/jamie28" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-300"
                  >
                    linkedin.com/in/jamie28
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Phone</p>
                  <p className="text-white">847-452-9956</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'UX/UI Design',
                  'Systems Thinking',
                  'Executive Storytelling',
                  'Change Leadership',
                  'Design Management & Process',
                  'Project Management',
                  'User Flows/User Journeys',
                  'Application Modernization',
                  'Human Experience Design',
                  'Conversational/Generative AI',
                  'Data Visualization',
                  'User Testing',
                  'Prototyping',
                  'Scrum Methodology',
                  'Design Systems',
                  'Information Architecture'
                ].map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-700 text-xs rounded text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Toolbox */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Toolbox</h2>
              <div className="text-sm text-slate-300 space-y-1">
                {[
                  'Figma',
                  'Adobe Suite',
                  'Sketch w/Zeplin',
                  'Invision',
                  'Balsamiq',
                  'Full Story',
                  'Miro',
                  'Jira/Confluence',
                  'Asana',
                  'Userlytics.com',
                  'VS Code/Github Copilot',
                  'v0 by Vercel'
                ].map((tool, i) => (
                  <p key={i}>{tool}</p>
                ))}
              </div>
            </div>

            {/* Volunteer */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Volunteer</h2>
              <p className="text-sm font-medium text-white">Professional Women's Club of Chicago (PWCC)</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Served on the Communications Committee, leading networking luncheons, designing the 15th Anniversary logo, and managing social media promotions.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Education</h2>
              <p className="text-sm font-medium text-white">Bachelor's of Arts</p>
              <p className="text-xs text-slate-400">Bradley University, 1998 - 2002</p>
            </div>
          </div>

          {/* Right Content - Work Experience */}
          <div className="p-6 print:p-4">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider border-b-2 border-slate-800 pb-2 mb-6">
              Work Experience
            </h2>

            <div className="space-y-6">
              {/* Consilio */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">Director of UX</h3>
                    <p className="text-sm text-teal-600 font-medium">Consilio</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">Oct 2023 - Aug 2025</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  Directed UX and application development across enterprise eDiscovery platforms (Sightline, Relativity). Built and guided global teams of UX designers, engineers, and product managers to scale applications and optimize business outcomes.
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-outside ml-4">
                  <li>Partnered with SVP, CPO, and CTO to define product roadmaps with AI and next-gen technology initiatives</li>
                  <li>Orchestrated design and delivery of hybrid human + AI systems, boosting user engagement</li>
                  <li>Established cross-functional Director/Verifier patterns that streamlined AI SDLC</li>
                  <li>Demonstrated high AI Fluency by building Design-to-Code flow (Figma/VS Code/GitHub Copilot)</li>
                  <li>Built standardized UX frameworks including component libraries and style guides</li>
                </ul>
              </div>

              {/* Vivid Seats */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">Lead Product Designer</h3>
                    <p className="text-sm text-teal-600 font-medium">Vivid Seats</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">Sept 2022 - Feb 2023</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  Led a team of four Product Designers and UX Architects, overseeing design projects across web/mobile platforms.
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-outside ml-4">
                  <li>Empowered team to adopt Outcome Orientation, aligning delivery to measurable enhancements</li>
                  <li>Defined use cases and technical requirements, translating business needs into user journeys</li>
                  <li>Led design thinking workshops, driving behavioral adoption and strategic alignment</li>
                  <li>Designed and executed user testing with targeted data collection scripts</li>
                </ul>
              </div>

              {/* Rewards Network */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">Senior Product Designer</h3>
                    <p className="text-sm text-teal-600 font-medium">Rewards Network</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">Oct 2021 - Feb 2022</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  Led UX design and strategy for a restaurant owner portal serving 15,000+ users across brands like Denny's and Buffalo Wild Wings.
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-outside ml-4">
                  <li>Delivered Client Value & Growth: increased cash advances by 49% ($8M+) and user interaction by 53%</li>
                  <li>Maintained and grew Design Systems for B2B and B2C ensuring UI consistency</li>
                  <li>Directed workshops in design thinking, storyboarding, and user research</li>
                </ul>
              </div>

              {/* Booked Out */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">UX/Visual Designer Consultant</h3>
                    <p className="text-sm text-teal-600 font-medium">Booked Out</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">Jan 2016 - Feb 2017</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  Drove core UX and product strategy for a major SaaS platform with high-profile clients including Coca Cola, Google, Walmart, Nike, and Samsung.
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-outside ml-4">
                  <li>Led end-to-end UX design for feature and SaaS product development</li>
                  <li>Collaborated with cross-functional and overseas Scrum teams (Buenos Aires)</li>
                  <li>Facilitated UX workshops with stakeholders, clients, and developers</li>
                </ul>
              </div>

              {/* Jamie Lynn Designs */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">Founder</h3>
                    <p className="text-sm text-teal-600 font-medium">Jamie Lynn Designs</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">Oct 2009 - Dec 2023</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  Founded and directed a specialized agency providing full digital design services.
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-outside ml-4">
                  <li>Increased revenue by 54% through sales collateral, marketing campaigns, and social media</li>
                  <li>Implemented DesignOps principles that streamlined processes and increased operating margin</li>
                  <li>Grew visual design team from 1 to 7, producing 12,000+ original designs</li>
                  <li>Directed all aspects of project life cycles from requirements to delivery</li>
                </ul>
              </div>

              {/* Cake Bite Girl */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">Founder</h3>
                    <p className="text-sm text-teal-600 font-medium">Cake Bite Girl</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">Oct 2011 - Feb 2018</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-outside ml-4">
                  <li>Designed and developed e-commerce website on ASP.NET nopCommerce platform</li>
                  <li>Produced for corporate events (Google, Harry Carey's, Chicago Fire) and weddings</li>
                  <li>Managed operations, marketing, and team for nationwide client base</li>
                </ul>
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
            margin: 0;
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
