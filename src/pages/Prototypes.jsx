import { Link } from 'react-router-dom'
import { prototypes } from '../data/prototypes'
import { useTheme } from '../context/ThemeContext'
import { 
  PhoneFrame,
  DashboardScreen,
  DesktopFrame,
  EDiscoveryApp,
  InvestigationApp
} from '../components/PrototypeScreens'
import RestaurantDashboardApp from '../components/RestaurantDashboardApp'

// Scaled-down phone frame with the actual DashboardScreen
function MobilePreview() {
  return (
    <div className="flex items-center justify-center h-full py-4">
      <div className="pointer-events-none" style={{ transform: 'scale(0.42)', transformOrigin: 'center center' }}>
        <PhoneFrame>
          <DashboardScreen onEventClick={() => {}} />
        </PhoneFrame>
      </div>
    </div>
  )
}

// Scaled-down desktop frame with the actual EDiscoveryApp
function DesktopPreview() {
  return (
    <div className="flex items-center justify-center h-full py-4 px-4">
      <div className="pointer-events-none" style={{ transform: 'scale(0.38)', transformOrigin: 'center center' }}>
        <DesktopFrame>
          <EDiscoveryApp currentScreen={0} onScreenChange={() => {}} showHotspots={false} />
        </DesktopFrame>
      </div>
    </div>
  )
}

// Scaled-down restaurant dashboard preview
function RestaurantPreview() {
  return (
    <div className="flex items-center justify-center h-full py-4 px-4">
      <div className="pointer-events-none" style={{ transform: 'scale(0.38)', transformOrigin: 'center center' }}>
        <DesktopFrame>
          <RestaurantDashboardApp currentScreen={0} onScreenChange={() => {}} />
        </DesktopFrame>
      </div>
    </div>
  )
}

// Scaled-down investigation platform preview
function InvestigationPreview() {
  return (
    <div className="flex items-center justify-center h-full py-4 px-4">
      <div className="pointer-events-none" style={{ transform: 'scale(0.38)', transformOrigin: 'center center' }}>
        <DesktopFrame url="investigate.ai">
          <InvestigationApp currentScreen={1} onScreenChange={() => {}} />
        </DesktopFrame>
      </div>
    </div>
  )
}

function PrototypeCard({ prototype }) {
  const isMobile = !prototype.isDesktop

  const getPreview = () => {
    if (isMobile) return <MobilePreview />
    if (prototype.isRestaurantDashboard) return <RestaurantPreview />
    if (prototype.isInvestigation) return <InvestigationPreview />
    return <DesktopPreview />
  }

  return (
    <div className="group relative flex flex-col bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Preview */}
      <Link to={`/prototypes/${prototype.id}`} className="block">
        <div className={`relative h-64 overflow-hidden ${
          isMobile
            ? 'bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-950'
            : 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-950'
        }`}>
          {getPreview()}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <Link to={`/prototypes/${prototype.id}`} className="block group/title">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400 transition-colors">
            {prototype.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{prototype.subtitle}</p>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {prototype.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {prototype.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50 mt-auto">
          <Link
            to={`/prototypes/${prototype.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Explore Prototype
            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          {prototype.caseStudySlug && (
            <Link
              to={`/projects/${prototype.caseStudySlug}`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors group/case"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Case Study
              <svg className="w-3 h-3 group-hover/case:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

function Prototypes() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Prototypes
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Clickable prototypes from real projects - explore the UX flows and design decisions behind each solution.
          </p>
        </div>

        {/* Prototype Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {prototypes.map(proto => (
            <PrototypeCard key={proto.id} prototype={proto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Prototypes
