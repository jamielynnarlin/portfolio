import POCaseStudy from './POCaseStudy'
import { designOpsDesigns } from '../components/designops-case-study/visuals'

// DesignOps Transformation, in the Product Owner case study format.
export default function DesignOpsPOCaseStudy() {
  return <POCaseStudy slug="enterprise-designops-transformation" designs={designOpsDesigns} />
}
