import POCaseStudy from './POCaseStudy'
import { HomeDesign, ReviewsDesign, AnalyticsDesign, FundingDesign } from '../components/restaurant-case-study/visuals'

// Restaurant Portal Redesign, in the Product Owner case study format.
export default function RestaurantPortalPOCaseStudy() {
  const designs = {
    home: <HomeDesign />,
    reviews: <ReviewsDesign />,
    analytics: <AnalyticsDesign />,
    funding: <FundingDesign />,
  }

  return <POCaseStudy slug="restaurant-portal-redesign" designs={designs} />
}
