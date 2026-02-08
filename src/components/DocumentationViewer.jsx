import { useState } from 'react'

// Interactive Documentation Viewer Component
// Shows a realistic auto-generated documentation panel for case study display

export function DocumentationViewer({ variant = 'default' }) {
  const isInvestigation = variant === 'investigation'
  const [activeTab, setActiveTab] = useState('props')
  const [expandedSections, setExpandedSections] = useState(['props', 'state'])
  
  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const tabs = [
    { id: 'props', label: 'Props' },
    { id: 'state', label: 'State' },
    { id: 'a11y', label: 'Accessibility' },
    { id: 'patterns', label: 'Patterns' }
  ]
  
  // Investigation variant content
  const investigationComponents = [
    { name: 'AISummaryPanel', active: true },
    { name: 'CitationLink', active: false },
    { name: 'SourceInspector', active: false },
    { name: 'QueryInput', active: false },
    { name: 'KeyFindings', active: false },
  ]
  
  const investigationHooks = [
    { name: 'useLLMQuery', active: false },
    { name: 'useCitations', active: false },
  ]
  
  // Default variant content  
  const defaultComponents = [
    { name: 'TaskListItem', active: true },
    { name: 'TaskCategory', active: false },
    { name: 'ProgressIndicator', active: false },
    { name: 'CheckoutFlow', active: false },
    { name: 'PhotoUpload', active: false },
  ]
  
  const defaultHooks = [
    { name: 'useTaskState', active: false },
    { name: 'useOfflineSync', active: false },
  ]
  
  const components = isInvestigation ? investigationComponents : defaultComponents
  const hooks = isInvestigation ? investigationHooks : defaultHooks
  const activeComponent = components.find(c => c.active)?.name || components[0].name
  const docFileName = isInvestigation ? 'AISummaryPanel.docs.md' : 'TaskListItem.docs.md'
  const componentDescription = isInvestigation 
    ? 'Renders AI-generated summaries with inline citations. Handles LLM response streaming, citation extraction, and source verification links.'
    : 'Renders an individual task within a milestone category. Handles completion state, photo attachments, and offline-first data persistence.'

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* IDE-style window frame */}
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-3 text-sm text-gray-400 font-mono">{docFileName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs bg-teal-500/20 text-teal-400 rounded-full font-medium">
              Auto-Generated
            </span>
            <span className="text-xs text-gray-500">Last synced: 2 min ago</span>
          </div>
        </div>

        {/* Documentation Content */}
        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-48 bg-gray-850 border-r border-gray-700 p-3 hidden md:block" style={{ backgroundColor: '#1a1f2e' }}>
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">Components</div>
            <nav className="space-y-1">
              {components.map(comp => (
                <div 
                  key={comp.name}
                  className={comp.active 
                    ? "px-2 py-1.5 text-sm text-white bg-teal-500/20 rounded-lg border-l-2 border-teal-500"
                    : "px-2 py-1.5 text-sm text-gray-400 hover:text-gray-300 cursor-pointer"
                  }
                >
                  {comp.name}
                </div>
              ))}
            </nav>
            
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-6 mb-3 px-2">Hooks</div>
            <nav className="space-y-1">
              {hooks.map(hook => (
                <div 
                  key={hook.name}
                  className="px-2 py-1.5 text-sm text-gray-400 hover:text-gray-300 cursor-pointer"
                >
                  {hook.name}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4 md:p-6 overflow-auto max-h-[500px]">
            {/* Component Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-white">{activeComponent}</h2>
                <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                  v2.3.0
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                {componentDescription}
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-1 mb-6 bg-gray-800 rounded-lg p-1 w-fit">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm rounded-md transition-all ${
                    activeTab === tab.id 
                      ? 'bg-teal-500 text-white font-medium' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Props Tab Content */}
            {activeTab === 'props' && (
              <div className="space-y-4">
                {/* Props Table */}
                <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left px-4 py-3 text-gray-400 font-medium">Prop</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-medium">Type</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-medium hidden sm:table-cell">Required</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      <tr>
                        <td className="px-4 py-3 font-mono text-teal-400">task</td>
                        <td className="px-4 py-3 font-mono text-purple-400">TaskObject</td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className="px-2 py-0.5 text-xs bg-red-500/20 text-red-400 rounded">Yes</span>
                        </td>
                        <td className="px-4 py-3 text-gray-300">The task data object</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-teal-400">onComplete</td>
                        <td className="px-4 py-3 font-mono text-purple-400">function</td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className="px-2 py-0.5 text-xs bg-red-500/20 text-red-400 rounded">Yes</span>
                        </td>
                        <td className="px-4 py-3 text-gray-300">Callback when task is marked complete</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-teal-400">milestone</td>
                        <td className="px-4 py-3 font-mono text-purple-400">'before' | 'during' | 'checkout' | 'after'</td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className="px-2 py-0.5 text-xs bg-red-500/20 text-red-400 rounded">Yes</span>
                        </td>
                        <td className="px-4 py-3 text-gray-300">Task category milestone</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-teal-400">showPhoto</td>
                        <td className="px-4 py-3 font-mono text-purple-400">boolean</td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className="px-2 py-0.5 text-xs bg-gray-600 text-gray-300 rounded">No</span>
                        </td>
                        <td className="px-4 py-3 text-gray-300">Display photo attachment UI</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-teal-400">offlineMode</td>
                        <td className="px-4 py-3 font-mono text-purple-400">boolean</td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className="px-2 py-0.5 text-xs bg-gray-600 text-gray-300 rounded">No</span>
                        </td>
                        <td className="px-4 py-3 text-gray-300">Enable offline-first behavior</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Usage Example */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Usage Example</h4>
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <div className="text-gray-500">{'// Basic usage'}</div>
                    <div>
                      <span className="text-purple-400">{'<'}</span>
                      <span className="text-blue-400">TaskListItem</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">task</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-amber-400">{'{taskData}'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">onComplete</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-amber-400">{'{handleComplete}'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">milestone</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-green-400">"before"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">showPhoto</span>
                    </div>
                    <div>
                      <span className="text-purple-400">{'/>'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* State Tab Content */}
            {activeTab === 'state' && (
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                    </svg>
                    Internal State
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
                      <div className="font-mono text-teal-400 text-sm">isCompleted</div>
                      <div className="flex-1">
                        <span className="font-mono text-purple-400 text-xs">boolean</span>
                        <p className="text-gray-400 text-sm mt-1">Tracks local completion state before sync</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
                      <div className="font-mono text-teal-400 text-sm">isSyncing</div>
                      <div className="flex-1">
                        <span className="font-mono text-purple-400 text-xs">boolean</span>
                        <p className="text-gray-400 text-sm mt-1">True while syncing with server</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
                      <div className="font-mono text-teal-400 text-sm">photoUri</div>
                      <div className="flex-1">
                        <span className="font-mono text-purple-400 text-xs">string | null</span>
                        <p className="text-gray-400 text-sm mt-1">Local URI for captured photo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    State Machine Transitions
                  </h4>
                  <div className="font-mono text-xs bg-gray-900/50 rounded-lg p-4 overflow-x-auto">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg">idle</span>
                      <span className="text-gray-500">→</span>
                      <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg">completing</span>
                      <span className="text-gray-500">→</span>
                      <span className="px-3 py-1.5 bg-amber-500/20 text-amber-400 rounded-lg">syncing</span>
                      <span className="text-gray-500">→</span>
                      <span className="px-3 py-1.5 bg-teal-500/20 text-teal-400 rounded-lg">completed</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-700 text-gray-500">
                      Error state: syncing → <span className="text-red-400">queued</span> (offline retry)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accessibility Tab Content */}
            {activeTab === 'a11y' && (
              <div className="space-y-4">
                <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-sm font-medium text-teal-400">WCAG 2.1 AA Compliant</h4>
                      <p className="text-gray-400 text-sm mt-1">This component meets accessibility standards</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-sm font-medium text-white mb-4">Accessibility Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm font-medium">Focus Management</p>
                        <p className="text-gray-500 text-xs mt-0.5">Visible focus ring, logical tab order</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm font-medium">Screen Reader Support</p>
                        <p className="text-gray-500 text-xs mt-0.5">ARIA labels for all interactive elements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm font-medium">Color Contrast</p>
                        <p className="text-gray-500 text-xs mt-0.5">4.5:1 ratio for text, 3:1 for UI elements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm font-medium">Touch Targets</p>
                        <p className="text-gray-500 text-xs mt-0.5">Minimum 44x44px for mobile interaction</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-sm font-medium text-white mb-3">ARIA Attributes</h4>
                  <div className="font-mono text-xs bg-gray-900/50 rounded-lg p-3 space-y-1">
                    <div><span className="text-teal-400">role</span>=<span className="text-green-400">"listitem"</span></div>
                    <div><span className="text-teal-400">aria-checked</span>=<span className="text-green-400">{"{isCompleted}"}</span></div>
                    <div><span className="text-teal-400">aria-label</span>=<span className="text-green-400">{"`Task: ${task.title}`"}</span></div>
                    <div><span className="text-teal-400">aria-describedby</span>=<span className="text-green-400">{"`task-${task.id}-status`"}</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Patterns Tab Content */}
            {activeTab === 'patterns' && (
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    Interaction Patterns
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                        <span className="text-gray-300 text-sm font-medium">Optimistic Updates</span>
                      </div>
                      <p className="text-gray-500 text-xs">UI updates immediately on user action, syncs in background</p>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span className="text-gray-300 text-sm font-medium">Offline Queue</span>
                      </div>
                      <p className="text-gray-500 text-xs">Failed syncs queued for retry when connection restored</p>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-gray-300 text-sm font-medium">Confirmation Feedback</span>
                      </div>
                      <p className="text-gray-500 text-xs">Haptic + visual feedback on task completion</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-sm font-medium text-white mb-3">Related Components</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-xs font-mono">TaskCategory</span>
                    <span className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-xs font-mono">ProgressBar</span>
                    <span className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-xs font-mono">PhotoCapture</span>
                    <span className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-xs font-mono">SyncIndicator</span>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="text-sm font-medium text-amber-400">Terminology Note</h4>
                      <p className="text-gray-400 text-sm mt-1">
                        Use "checkout" (one word) consistently. Found inconsistency: "check-out" in 2 places.
                        <button className="ml-2 text-amber-400 underline text-xs">View locations</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-t border-gray-700 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-400">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              Synced with codebase
            </span>
            <span className="text-gray-500">5 components documented</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <span>UTF-8</span>
            <span>Markdown</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationViewer
