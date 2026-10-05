import { Link, useParams } from 'react-router-dom'
import { POCaseStudyLayout } from '../components/po-case-study'
import { poCaseStudies } from '../data/poCaseStudies'

function POCaseStudy({ slug: slugProp, showGuidance = false, extras, designs, heroVisual }) {
  const params = useParams()
  const study = poCaseStudies[slugProp ?? params.slug]

  if (!study) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">Case study not found.</p>
        <Link to="/projects" className="text-primary-600 dark:text-primary-400 hover:underline">Back to projects</Link>
      </div>
    )
  }

  return <POCaseStudyLayout study={study} showGuidance={showGuidance} extras={extras} designs={designs} heroVisual={heroVisual} />
}

export default POCaseStudy
