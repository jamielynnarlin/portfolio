import ProjectCard from '../components/ProjectCard'
import { mvpProjects } from '../data/projects'

function Projects() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl text-navy-900 dark:text-white mb-4 uppercase tracking-wide">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of work showcasing AI integration, delivery leadership, DesignOps, and UX expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mvpProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {/* Coming Soon Card */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="font-display text-lg text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              More Coming Soon
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Additional case studies in progress
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
