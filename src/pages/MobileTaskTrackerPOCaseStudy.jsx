import POCaseStudy from './POCaseStudy'
import {
  PrototypeCTA,
  ProfileDesign,
  EventTasksDesign,
  TaskCompletionDesign,
  CheckOutDesign,
} from '../components/mobile-task-tracker-case-study/visuals'

// Mobile Task Tracker Redesign — BookedOut, in the Product Owner case study format.
// Each key product decision shows the original screen next to the redesign.
const extras = {
  decisions: <PrototypeCTA />,
}

const designs = {
  profile: <ProfileDesign />,
  eventTasks: <EventTasksDesign />,
  taskCompletion: <TaskCompletionDesign />,
  checkOut: <CheckOutDesign />,
}

export default function MobileTaskTrackerPOCaseStudy() {
  return <POCaseStudy slug="mobile-task-tracker" extras={extras} designs={designs} />
}
