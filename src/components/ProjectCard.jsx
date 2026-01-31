import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
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
