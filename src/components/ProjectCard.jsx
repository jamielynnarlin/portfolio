import { Link } from 'react-router-dom'
import { DashboardScreen } from './PrototypeScreens'
import { NLPDocumentSearchScreen } from './StaticScreens'

// Full phone mockup - iPhone style with complete device visible
function PhoneMockup({ children }) {
  return (
    <div className="relative">
      {/* Phone body */}
      <div className="bg-gray-900 rounded-[2.5rem] p-[4px] shadow-2xl">
        <div className="bg-black rounded-[2.3rem] p-[4px]">
          <div className="bg-white rounded-[2.1rem] overflow-hidden relative" style={{ width: '160px', height: '340px' }}>
            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20" />
            {/* Screen content - scaled down */}
            <div className="h-full transform scale-[0.571] origin-top-left" style={{ width: '280px', height: '595px' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Monitor frame for desktop screens
function MonitorMockup({ children }) {
  return (
    <div className="relative">
      {/* Monitor body */}
      <div className="bg-gray-800 rounded-xl p-[3px] shadow-2xl">
        {/* Screen bezel */}
        <div className="bg-black rounded-lg overflow-hidden">
          {/* Screen */}
          <div className="bg-slate-900 overflow-hidden" style={{ width: '280px', height: '175px' }}>
            <div className="transform scale-[0.35] origin-top-left" style={{ width: '800px', height: '500px' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
      {/* Monitor stand */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-6 bg-gray-700 rounded-b-sm" />
        <div className="w-20 h-2 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const isAIPowered = project.title === "AI Powered Development Workflow"
  const isDesignOps = project.title === "DesignOps Transformation"
  const hasCustomScreen = isAIPowered || isDesignOps

  return (
    <div className="card group">
      <div className="aspect-video flex items-center justify-center overflow-hidden relative">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : hasCustomScreen ? (
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            {isAIPowered ? (
              <PhoneMockup>
                <DashboardScreen />
              </PhoneMockup>
            ) : (
              <MonitorMockup>
                <NLPDocumentSearchScreen />
              </MonitorMockup>
            )}
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex space-x-3">
          {project.caseStudyUrl && (
            <Link to={project.caseStudyUrl} className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
              View Case Study →
            </Link>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:underline">
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
