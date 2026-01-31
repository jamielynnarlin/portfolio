import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { getPrototypeById } from '../data/prototypes'

function PrototypeView() {
  const { id } = useParams()
  const prototypeData = getPrototypeById(id)
  const [activeStep, setActiveStep] = useState(0)

  if (!prototypeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Prototype Not Found</h1>
          <Link to="/prototypes" className="text-primary-600 dark:text-primary-400 hover:underline">
            ← Back to Prototypes
          </Link>
        </div>
      </div>
    )
  }

  const { prototype } = prototypeData
  const steps = prototype.steps

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/prototypes"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">All Prototypes</span>
              </Link>
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">{prototypeData.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">{prototypeData.subtitle}</p>
              </div>
            </div>
            <Link 
              to={`/projects/${prototypeData.caseStudySlug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
            >
              View Case Study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 lg:py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Prototype Title */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Interactive Demo</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              {prototype.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {prototype.description}
            </p>
          </div>

          {/* Interactive Prototype Area */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
            
            {/* Large Prototype Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl p-4 md:p-8 bg-gradient-to-br from-primary-50 to-sky-50 dark:from-primary-900/20 dark:to-sky-900/20 border border-gray-200/50 dark:border-gray-700/50">
                {/* The composite image showing all screens */}
                <div className="relative">
                  <img 
                    src={prototype.compositeImage} 
                    alt={prototype.title}
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                  
                  {/* Highlight overlay for active screen */}
                  <div className="absolute inset-0 flex rounded-2xl overflow-hidden">
                    {steps.map((step, i) => (
                      <div 
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`flex-1 cursor-pointer transition-all duration-500 ${
                          activeStep === i 
                            ? '' 
                            : 'bg-white/60 dark:bg-gray-900/60'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Active indicator labels */}
                  <div className="absolute -bottom-4 left-0 right-0 flex justify-around px-[10%]">
                    {steps.map((step, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeStep === i
                            ? 'bg-primary-500 text-white shadow-lg scale-105'
                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {i + 1}. {step.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-12 flex items-center justify-center gap-3">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeStep 
                          ? 'bg-primary-500 w-12' 
                          : i < activeStep 
                            ? 'bg-primary-300 w-6'
                            : 'bg-gray-300 dark:bg-gray-600 w-6 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Description Panel */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-40">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                {/* Step indicators */}
                <div className="flex items-center gap-2 mb-6">
                  {steps.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                        activeStep === i 
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 scale-110' 
                          : activeStep > i
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {activeStep > i ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </button>
                  ))}
                </div>

                {/* Dynamic content */}
                <div className="min-h-[200px]">
                  <div key={activeStep} className="animate-fadeIn">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {steps[activeStep].label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {steps[activeStep].description}
                    </p>
                    
                    {/* Navigation */}
                    <div className="flex items-center gap-3">
                      {activeStep > 0 && (
                        <button 
                          onClick={handlePrev}
                          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          Back
                        </button>
                      )}
                      {activeStep < steps.length - 1 ? (
                        <button 
                          onClick={handleNext}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                          Next
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ) : (
                        <button 
                          onClick={() => setActiveStep(0)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Restart
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-100 dark:border-gray-700" />

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                    Key Design Decisions
                  </h4>
                  <ul className="space-y-3">
                    {prototype.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <section className="mt-16 lg:mt-24">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  About This Flow
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {prototypeData.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to={`/projects/${prototypeData.caseStudySlug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    Read Full Case Study
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    to="/prototypes"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    View All Prototypes
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PrototypeView
