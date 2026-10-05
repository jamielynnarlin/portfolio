import POCaseStudy from './POCaseStudy'
import {
  PainPointGrid,
  PrototypeCTA,
  TechnicalChallenges,
  CaseAssessmentDesign,
  ProtocolBuilderDesign,
  ReviewParametersDesign,
  SubsetValidationSpotlight,
  DefensibilityAuditSpotlight,
} from '../components/llm-case-study/visuals'

// Conversational Document Review, in the Product Owner case study format.
// Each key product decision links to the screen or demo it shaped.
const extras = {
  discovery: <PainPointGrid />,
  decisions: <PrototypeCTA />,
  engineering: <TechnicalChallenges />,
}

const designs = {
  caseAssessment: <CaseAssessmentDesign />,
  protocolBuilder: <ProtocolBuilderDesign />,
  sampleValidation: <SubsetValidationSpotlight />,
  reviewParameters: <ReviewParametersDesign />,
  auditTrail: <DefensibilityAuditSpotlight />,
}

export default function DocumentReviewCaseStudy() {
  return <POCaseStudy slug="llm-integration-strategy" extras={extras} designs={designs} />
}
