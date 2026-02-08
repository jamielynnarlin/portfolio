import { useState } from 'react'

// Interactive Code Review Viewer Component
// Shows a realistic GitHub PR-style code review with AI-generated comments

export function CodeReviewViewer({ variant = 'default' }) {
  const isInvestigation = variant === 'investigation'
  
  const defaultFiles = [
    { name: 'TaskListItem.jsx', changes: '+45 -12', status: 'reviewed' },
    { name: 'useOfflineSync.js', changes: '+78 -23', status: 'reviewed' },
    { name: 'PhotoUpload.jsx', changes: '+156 -34', status: 'changes' },
  ]
  
  const investigationFiles = [
    { name: 'AISummaryPanel.jsx', changes: '+89 -15', status: 'reviewed' },
    { name: 'CitationLink.jsx', changes: '+45 -8', status: 'reviewed' },
    { name: 'SourceInspector.jsx', changes: '+156 -34', status: 'changes' },
  ]
  
  const files = isInvestigation ? investigationFiles : defaultFiles
  const [activeFile, setActiveFile] = useState(files[0].name)
  const [showResolved, setShowResolved] = useState(false)

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* GitHub PR-style window */}
      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* PR Header */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
              </svg>
              <span className="font-semibold text-gray-900 dark:text-white">
                {isInvestigation ? 'feat: Add AI summary with inline citations' : 'feat: Add offline task completion'}
              </span>
            </div>
            <span className="px-2 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
              Open
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="" className="w-5 h-5 rounded-full" />
              dev-marcus
            </span>
            <span>wants to merge 3 commits into <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">main</code></span>
          </div>
        </div>

        {/* Review Stats Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium text-purple-700 dark:text-purple-400">AI Review</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">4 comments • 2 suggestions</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Review time: 12s</span>
            <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
            <span className="text-xs text-green-600 dark:text-green-400">Ready for human review</span>
          </div>
        </div>

        {/* File Tabs */}
        <div className="flex items-center gap-1 px-4 py-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          {files.map(file => (
            <button
              key={file.name}
              onClick={() => setActiveFile(file.name)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                activeFile === file.name
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/>
              </svg>
              {file.name}
              <span className="text-xs text-gray-400">{file.changes}</span>
              {file.status === 'changes' && (
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Code Diff View */}
        <div className="font-mono text-sm overflow-x-auto">
          {/* File path header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400 text-xs">src/components/{activeFile}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-600">+45</span>
              <span className="text-xs text-red-500">-12</span>
            </div>
          </div>

          {/* Code lines */}
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {/* Collapsed context */}
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/20 text-gray-400 text-xs flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Lines 1-24 unchanged
            </div>

            {/* Code with AI comment */}
            <div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">25</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+ const [citations, setCitations] = useState([])' 
                      : '+ const [isCompleting, setIsCompleting] = useState(false)'}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">26</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+ const [summary, setSummary] = useState(null)' 
                      : '+ const [syncError, setSyncError] = useState(null)'}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">27</div>
                <div className="flex-1 px-4 py-1">
                  <span className="text-gray-700 dark:text-gray-300">  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">28</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+ const handleQuerySubmit = async (query) => {' 
                      : '+ const handleComplete = async () => {'}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">29</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+   const response = await llmService.analyze(query, documents)' 
                      : '+   setIsCompleting(true)'}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">30</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+   setCitations(response.citations)' 
                      : '+   await onComplete(task.id)'}
                  </span>
                </div>
              </div>

              {/* AI Comment */}
              <div className="ml-12 mr-4 my-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 bg-purple-100/50 dark:bg-purple-900/30 border-b border-purple-200 dark:border-purple-800">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-purple-900 dark:text-purple-200 text-sm">AI Code Review</span>
                  <span className="px-1.5 py-0.5 text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded">
                    {isInvestigation ? 'UX' : 'Performance'}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm text-purple-900 dark:text-purple-200 mb-3">
                    <strong>Issue:</strong> {isInvestigation 
                      ? 'Citations array updates may cause summary panel to re-render before citations are fully loaded, leading to broken citation links.'
                      : 'This component will re-render on every parent state change, causing the task list to flicker.'}
                  </p>
                  <p className="text-sm text-purple-800 dark:text-purple-300 mb-3">
                    <strong>Suggestion:</strong> {isInvestigation 
                      ? <>Batch the state updates using <code className="px-1 py-0.5 bg-purple-200 dark:bg-purple-800 rounded text-xs">React.startTransition()</code> to ensure citations and summary update atomically.</>
                      : <>Consider memoizing with <code className="px-1 py-0.5 bg-purple-200 dark:bg-purple-800 rounded text-xs">React.memo()</code> and implementing <code className="px-1 py-0.5 bg-purple-200 dark:bg-purple-800 rounded text-xs">shouldComponentUpdate</code> logic for items.</>}
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Apply suggestion
                    </button>
                    <button className="px-3 py-1.5 text-xs text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* More code lines */}
            <div className="flex">
              <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">31</div>
              <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                <span className="text-green-800 dark:text-green-300">
                  {isInvestigation ? '+   setSummary(response.summary)' : '+   setIsCompleting(false)'}
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">32</div>
              <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                <span className="text-green-800 dark:text-green-300">+ {'}'}</span>
              </div>
            </div>

            {/* Collapsed context */}
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/20 text-gray-400 text-xs flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Lines 33-56 unchanged
            </div>

            {/* Critical AI Comment */}
            <div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">57</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+ const renderCitation = (citation, index) => {' 
                      : '+ const uploadPhoto = async (uri) => {'}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">58</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+   return <CitationLink key={index} citation={citation} />' 
                      : '+   const response = await api.upload(uri)'}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">59</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">
                    {isInvestigation 
                      ? '+ }' 
                      : '+   return response.url'}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 px-2 py-1 text-right text-gray-400 bg-gray-50 dark:bg-gray-800/30 text-xs select-none">60</div>
                <div className="flex-1 px-4 py-1 bg-green-50 dark:bg-green-900/10">
                  <span className="text-green-800 dark:text-green-300">+ {'}'}</span>
                </div>
              </div>

              {/* Critical AI Comment */}
              <div className="ml-12 mr-4 my-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 bg-red-100/50 dark:bg-red-900/30 border-b border-red-200 dark:border-red-800">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="font-medium text-red-900 dark:text-red-200 text-sm">AI Code Review</span>
                  <span className="px-1.5 py-0.5 text-xs bg-red-200 dark:bg-red-900/50 text-red-700 dark:text-red-400 rounded">Critical</span>
                </div>
                <div className="p-3">
                  <p className="text-sm text-red-900 dark:text-red-200 mb-3">
                    <strong>{isInvestigation ? 'Missing source verification:' : 'Missing offline handling:'}</strong> {isInvestigation 
                      ? "Citations render without verifying source document accessibility. Investigators may click a citation only to find the document has been removed from the matter."
                      : "This implementation doesn't handle the case where users are offline during photo upload. Event staff often work in venues with poor connectivity."}
                  </p>
                  <p className="text-sm text-red-800 dark:text-red-300 mb-3">
                    <strong>Recommendation:</strong> {isInvestigation 
                      ? <>Validate document access before rendering citations. Use <code className="px-1 py-0.5 bg-red-200 dark:bg-red-800 rounded text-xs">useDocumentAccessCheck</code> hook.</>
                      : <>Implement a queuing mechanism that stores uploads locally and retries when connection is restored. See <code className="px-1 py-0.5 bg-red-200 dark:bg-red-800 rounded text-xs">useOfflineSync</code> hook.</>}
                  </p>
                  <div className="p-2 bg-gray-900 rounded-lg text-xs font-mono text-gray-300 mb-3">
                    <div className="text-gray-500">// Suggested implementation</div>
                    {isInvestigation ? (
                      <>
                        <div><span className="text-purple-400">const</span> {'{'} verifyAccess {'}'} = <span className="text-blue-400">useDocumentAccessCheck</span>()</div>
                        <div><span className="text-purple-400">const</span> validCitations = citations.<span className="text-blue-400">filter</span>(c =&gt; verifyAccess(c.docId))</div>
                      </>
                    ) : (
                      <>
                        <div><span className="text-purple-400">const</span> {'{'} queueUpload {'}'} = <span className="text-blue-400">useOfflineSync</span>()</div>
                        <div><span className="text-purple-400">await</span> queueUpload(uri, {'{'} retry: <span className="text-amber-400">3</span> {'}'})</div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      Apply suggestion
                    </button>
                    <button className="px-3 py-1.5 text-xs text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                      {isInvestigation ? 'View DocumentAccess docs' : 'View useOfflineSync docs'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Summary Footer */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">AI Review Complete</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">1 critical, 1 performance issue found</p>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Request Human Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeReviewViewer
