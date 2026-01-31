import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, projectCategories } from '../data/projects'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl text-navy-900 dark:text-white mb-4 uppercase tracking-wide">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of work showcasing AI integration, delivery leadership, DesignOps, and UX expertise.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 py-12">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  )
}

export default Projects
