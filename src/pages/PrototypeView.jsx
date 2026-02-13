import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { prototypes } from '../data/prototypes'
import { 
  PhoneFrame, 
  DesktopFrame,
  DashboardScreen, 
  EventTasksScreen, 
  ExpandedTasksScreen,
  CameraScreen,
  DocReviewQueueScreen,
  DocReviewAIFilterScreen,
  DocReviewTagScreen,
  EDiscoveryApp
} from '../components/PrototypeScreens'

export default function PrototypeView() {
  const { id } = useParams()
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('forward')
  const [photoTaken, setPhotoTaken] = useState(false)
  
  const prototype = prototypes.find(p => p.id === id)
  
  // Reset to first screen when prototype changes
  useEffect(() => {
    setCurrentScreen(0)
    setPhotoTaken(false)
  }, [id])

  if (!prototype) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Prototype not found</h1>
          <Link 
            to="/prototypes"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            ← Back to Prototypes
          </Link>
        </div>
      </div>
    )
  }

  const goToScreen = (index, dir = 'forward') => {
    if (isAnimating || index === currentScreen) return
    setDirection(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentScreen(index)
      setTimeout(() => setIsAnimating(false), 300)
    }, 50)
  }

  const nextScreen = () => {
    if (currentScreen < 3) {
      goToScreen(currentScreen + 1, 'forward')
    }
  }

  const prevScreen = () => {
    if (currentScreen > 0) {
      goToScreen(currentScreen - 1, 'backward')
    }
  }

  const openCamera = () => {
    goToScreen(3, 'forward')
  }

  const handlePhotoCapture = () => {
    setPhotoTaken(true)
    goToScreen(2, 'backward')
  }

  const handleCameraCancel = () => {
    goToScreen(2, 'backward')
  }

  const screenLabels = (id === 'document-review' || id === 'ediscovery-ai')
    ? prototype.prototype.screens
    : [
        { label: 'Dashboard', description: 'View upcoming events, stats, and tap the next event to see tasks' },
        { label: 'Event Tasks', description: 'See task categories for your event' },
        { label: 'Complete Tasks', description: 'Check off your tasks before the event' },
        { label: 'Camera', description: 'Take a photo to complete the task' }
      ]

  // Check prototype type
  const isInteractivePrototype = id === 'mobile-task-tracker'
  const isDocReviewPrototype = id === 'document-review'
  const isEDiscoveryPrototype = id === 'ediscovery-ai'
  const isDesktopPrototype = prototype?.isDesktop === true

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/prototypes"
            className="inline-flex items-center text-gray-400 hover:text-teal-400 transition-colors mb-6 group"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Prototypes
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            {prototype.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            {prototype.description}
          </p>
          {prototype.caseStudySlug && (
            <Link
              to={`/projects/${prototype.caseStudySlug}`}
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Full Case Study
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Display Frame - Phone or Desktop */}
          <div className="relative">
            {isEDiscoveryPrototype ? (
              <DesktopFrame>
                <EDiscoveryApp 
                  currentScreen={currentScreen} 
                  onScreenChange={(index) => goToScreen(index, index > currentScreen ? 'forward' : 'backward')}
                  showHotspots={true}
                />
              </DesktopFrame>
            ) : isDocReviewPrototype ? (
              <DesktopFrame>
                <div 
                  className={`h-full transition-all duration-300 ease-out ${
                    isAnimating 
                      ? direction === 'forward' 
                        ? 'opacity-0 translate-x-4' 
                        : 'opacity-0 -translate-x-4'
                      : 'opacity-100 translate-x-0'
                  }`}
                >
                  {currentScreen === 0 && (
                    <DocReviewQueueScreen 
                      onAskAI={nextScreen}
                      onDocumentClick={() => goToScreen(2, 'forward')}
                    />
                  )}
                  {currentScreen === 1 && (
                    <DocReviewAIFilterScreen 
                      onBack={prevScreen}
                      onDocumentClick={() => goToScreen(2, 'forward')}
                    />
                  )}
                  {currentScreen === 2 && (
                    <DocReviewTagScreen 
                      onBack={prevScreen}
                      onComplete={() => goToScreen(0, 'backward')}
                    />
                  )}
                </div>
              </DesktopFrame>
            ) : isInteractivePrototype ? (
              <PhoneFrame>
                <div 
                  className={`h-full transition-all duration-300 ease-out ${
                    isAnimating 
                      ? direction === 'forward' 
                        ? 'opacity-0 translate-x-4' 
                        : 'opacity-0 -translate-x-4'
                      : 'opacity-100 translate-x-0'
                  }`}
                >
                  {currentScreen === 0 && (
                    <DashboardScreen onEventClick={nextScreen} />
                  )}
                  {currentScreen === 1 && (
                    <EventTasksScreen 
                      onTaskClick={nextScreen} 
                      onBackClick={prevScreen}
                    />
                  )}
                  {currentScreen === 2 && (
                    <ExpandedTasksScreen 
                      onBackClick={prevScreen}
                      onTakePhoto={openCamera}
                      photoTaken={photoTaken}
                    />
                  )}
                  {currentScreen === 3 && (
                    <CameraScreen 
                      onCapture={handlePhotoCapture}
                      onCancel={handleCameraCancel}
                    />
                  )}
                </div>
              </PhoneFrame>
            ) : (
              // Fallback for non-interactive prototypes
              <PhoneFrame>
                <div className="h-full bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Prototype preview</p>
                </div>
              </PhoneFrame>
            )}
            
            {/* Tap Hint - only show on first screen */}
            {(isInteractivePrototype || isDocReviewPrototype) && currentScreen === 0 && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full mt-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm animate-pulse">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  {isDocReviewPrototype ? 'Click documents or use the navigation panel' : 'Tap the event card to navigate'}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Panel */}
          <div className="lg:w-96">
            {/* Screen Progress */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-5">Screen Flow</h3>
              
              {/* Screen list */}
              <div className="space-y-2 mb-5">
                {screenLabels.map((screen, index) => (
                  <button
                    key={index}
                    onClick={() => goToScreen(index, index > currentScreen ? 'forward' : 'backward')}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${
                      currentScreen === index
                        ? 'bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-teal-500/20 text-teal-400 shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{screen.label}</p>
                      <p className="text-xs text-gray-400">{screen.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={isInteractivePrototype && currentScreen === 3 ? handleCameraCancel : prevScreen}
                  disabled={currentScreen === 0}
                  className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-1.5 ${
                    currentScreen === 0
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <button
                  onClick={nextScreen}
                  disabled={isEDiscoveryPrototype ? currentScreen >= 3 : (isDocReviewPrototype ? currentScreen >= 2 : currentScreen >= 3)}
                  className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-1.5 ${
                    (isEDiscoveryPrototype ? currentScreen >= 3 : (isDocReviewPrototype ? currentScreen >= 2 : currentScreen >= 3))
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-400 hover:to-cyan-400'
                  }`}
                >
                  Next
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-4 p-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl border border-teal-500/20">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Interactive Features
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                {isEDiscoveryPrototype ? (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Explore concept map clusters
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Write natural language protocols
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      View AI rationale with citations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Approve AI-drafted privilege logs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Navigate using sidebar icons
                    </li>
                  </>
                ) : isDocReviewPrototype ? (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Click documents to preview in left panel
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Ask AI to filter by specific tags
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      See highlighted evidence in documents
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Verify AI classifications interactively
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Tag and send documents for expert review
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Tap event cards to navigate
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Check off tasks interactively
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Tap "Take Photo" to open camera
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Capture photos with flash animation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      Photo thumbnail appears after capture
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
