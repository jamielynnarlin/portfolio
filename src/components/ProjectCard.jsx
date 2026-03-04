import { Link, useNavigate } from 'react-router-dom'
import { WorkflowPipelineAnimation, DesignOpsTransformAnimation, DocumentReviewAnimation } from './ProjectCardAnimations'

function ProjectCard({ project }) {
  const navigate = useNavigate()
  const isAIPowered = project.title === "AI Powered Development Workflow"
  const isDesignOps = project.title === "DesignOps Transformation"
  const isEDiscovery = project.title === "Conversational Document Review"
  const hasCustomScreen = isAIPowered || isDesignOps || isEDiscovery

  const handleCardClick = () => {
    if (project.caseStudyUrl) {
      navigate(project.caseStudyUrl)
    }
  }

  const handleCardKeyDown = (event) => {
    if (!project.caseStudyUrl) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      navigate(project.caseStudyUrl)
    }
  }

  return (
    <div
      className={`card group ${project.caseStudyUrl ? 'cursor-pointer' : ''}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role={project.caseStudyUrl ? 'link' : undefined}
      tabIndex={project.caseStudyUrl ? 0 : undefined}
      aria-label={project.caseStudyUrl ? `${project.title} case study` : undefined}
    >
      <div className="aspect-video flex items-center justify-center overflow-hidden relative">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : hasCustomScreen ? (
          <div className="absolute inset-0">
            {isAIPowered ? (
              <WorkflowPipelineAnimation />
            ) : isDesignOps ? (
              <DesignOpsTransformAnimation />
            ) : (
              <DocumentReviewAnimation />
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
            <Link
              to={project.caseStudyUrl}
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              onClick={(event) => event.stopPropagation()}
            >
              View Case Study →
            </Link>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:underline"
              onClick={(event) => event.stopPropagation()}
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
