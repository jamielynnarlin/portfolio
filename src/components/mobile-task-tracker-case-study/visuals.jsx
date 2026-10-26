// Supporting visuals for the Event Staffing App case study:
// original app screenshots and redesigned screens, each in a phone-sized frame.
// Screens come from StaticScreens.jsx; screenshots from public/images/case-studies.
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import {
  SmallPhoneFrame,
  ProfileScreenStatic,
  TaskCategoriesScreenStatic,
  PhotoCaptureScreen,
  QuestionnaireScreen,
  ShiftSummaryScreen,
} from '../StaticScreens'

const image = file => import.meta.env.BASE_URL + 'images/case-studies/' + file

// A screenshot of the original app, shown at phone size in the same frame
function Screenshot({ file, alt }) {
  return (
    <SmallPhoneFrame>
      <img src={image(file)} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
    </SmallPhoneFrame>
  )
}

// Two phones side by side on wider screens, stacked on phones, each with a
// short label underneath.
function ScreenPair({ screens }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 rounded-xl bg-gray-50 dark:bg-gray-900/40 px-4 py-6">
      {screens.map(({ label, node }) => (
        <figure key={label} className="flex flex-col items-center">
          {node}
          <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
            {label}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function ProfileDesign() {
  return (
    <ScreenPair
      screens={[
        { label: 'Original app', node: <Screenshot file="Bookedout-OldProfileScreen.png" alt="Original BookedOut home screen with four icon buttons and no upcoming events" /> },
        { label: 'Redesign', node: <SmallPhoneFrame><ProfileScreenStatic /></SmallPhoneFrame> },
      ]}
    />
  )
}

export function EventTasksDesign() {
  return (
    <ScreenPair
      screens={[
        { label: 'Original app', node: <Screenshot file="Bookedout-ActivationsList.png" alt="Original BookedOut activations list with no tasks" /> },
        { label: 'Redesign', node: <SmallPhoneFrame><TaskCategoriesScreenStatic /></SmallPhoneFrame> },
      ]}
    />
  )
}

export function TaskCompletionDesign() {
  return (
    <ScreenPair
      screens={[
        { label: 'Original app', node: <Screenshot file="Bookedout-Gallery.png" alt="Original BookedOut photo gallery" /> },
        { label: 'Redesign', node: <SmallPhoneFrame><PhotoCaptureScreen /></SmallPhoneFrame> },
      ]}
    />
  )
}

export function CheckOutDesign() {
  return (
    <ScreenPair
      screens={[
        { label: 'Check out', node: <SmallPhoneFrame><QuestionnaireScreen /></SmallPhoneFrame> },
        { label: 'Shift summary', node: <SmallPhoneFrame><ShiftSummaryScreen /></SmallPhoneFrame> },
      ]}
    />
  )
}

// The redesigned flow, from the original case study's prototype steps
const prototypeSteps = [
  'Next event and tasks visible on open',
  'Tasks grouped by shift phase',
  'One tap to complete, with built-in camera',
  'Time-windowed checkout',
]

export function PrototypeCTA() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">See it all together</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Walk through a shift in the interactive prototype.</p>
        </div>
        <Link to="/prototypes/mobile-task-tracker" className="btn-primary whitespace-nowrap text-center">
          Try the prototype →
        </Link>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {prototypeSteps.map(step => (
          <div key={step} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}
