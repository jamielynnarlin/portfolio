import { useState, useEffect } from 'react'

// Interactive Workflow Diagram Component
// Shows the end-to-end AI-assisted SDLC workflow

export function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const steps = [
    {
      id: 'research',
      title: 'Research Synthesis',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      description: 'AI agents process stakeholder interviews',
      output: '"Users missing tasks", "No visibility into progress"',
      details: ['Interview transcripts analyzed', 'Pain points extracted', 'Patterns identified']
    },
    {
      id: 'stories',
      title: 'Story Generation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50 dark:bg-violet-900/20',
      borderColor: 'border-violet-200 dark:border-violet-800',
      description: 'Transform insights into user stories',
      output: '"As event staff, I need visual cues for task progress..."',
      details: ['User stories generated', 'Acceptance criteria defined', 'Edge cases identified']
    },
    {
      id: 'tests',
      title: 'Test-First Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      description: 'Copilot generates test cases BEFORE implementation',
      output: '85% test coverage achieved',
      details: ['Unit tests generated', 'Integration tests created', 'Edge cases covered']
    },
    {
      id: 'code',
      title: 'Assisted Implementation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      borderColor: 'border-amber-200 dark:border-amber-800',
      description: 'Copilot helps write feature code',
      output: 'Pattern-consistent implementation',
      details: ['Architecture patterns followed', 'Best practices enforced', 'Boilerplate eliminated']
    },
    {
      id: 'review',
      title: 'Automated Review',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20',
      borderColor: 'border-rose-200 dark:border-rose-800',
      description: 'AI performs first-pass code review',
      output: '60% reduction in review cycle time',
      details: ['Performance issues flagged', 'Security checks run', 'Style enforced']
    },
    {
      id: 'docs',
      title: 'Living Documentation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      description: 'Agents update docs as code changes',
      output: 'Documentation always current',
      details: ['API docs synced', 'Component docs updated', 'Changelog maintained']
    }
  ]

  // Auto-advance animation
  useEffect(() => {
    if (!isAnimating) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [isAnimating, steps.length])

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Container */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold">AI-Powered SDLC Pipeline</h3>
                <p className="text-gray-400 text-sm">End-to-end workflow automation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isAnimating 
                    ? 'bg-teal-500/20 text-teal-400' 
                    : 'bg-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                {isAnimating ? '⏸ Pause' : '▶ Play'}
              </button>
              <div className="text-right">
                <p className="text-teal-400 font-bold">4 months</p>
                <p className="text-gray-500 text-xs">vs. 6 mo estimate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Timeline */}
        <div className="p-6">
          {/* Step indicators */}
          <div className="flex items-center justify-between mb-8 relative">
            {/* Connection line */}
            <div className="absolute top-6 left-8 right-8 h-0.5 bg-gray-200 dark:bg-gray-700" />
            <div 
              className="absolute top-6 left-8 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * (100 - 10)}%` }}
            />

            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(index)
                  setIsAnimating(false)
                }}
                className={`relative z-10 flex flex-col items-center gap-2 group`}
              >
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    index <= activeStep 
                      ? `bg-gradient-to-br ${step.color} text-white shadow-lg` 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                  } ${index === activeStep ? 'scale-110 ring-4 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 ring-teal-500/30' : ''}`}
                >
                  {step.icon}
                </div>
                <span className={`text-xs font-medium text-center max-w-[80px] transition-colors ${
                  index <= activeStep ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Detail Card */}
          <div 
            className={`${steps[activeStep].bgColor} ${steps[activeStep].borderColor} border rounded-2xl p-6 transition-all duration-300`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Left side - Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-white`}>
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Step {activeStep + 1}</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{steps[activeStep].title}</h4>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {steps[activeStep].description}
                </p>

                <div className="space-y-2">
                  {steps[activeStep].details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Output */}
              <div className="md:w-72">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Output</span>
                  </div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {steps[activeStep].output}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-teal-500">2x</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Team Capacity</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-teal-500">70%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Faster Planning</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-teal-500">85%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Test Coverage</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-teal-500">60%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Review Time ↓</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="text-teal-500 font-medium">Result:</span> Small team operating at 2x capacity with higher quality
            </p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkflowDiagram
