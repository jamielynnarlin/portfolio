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
        </div>
      </div>
    </div>
  )
}

export default Projects
