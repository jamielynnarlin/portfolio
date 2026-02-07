// Static screenshot components for case study display
// These render as static images in the same style as the interactive prototype

// Questionnaire Screen - Static (Clean, minimal version)
export function QuestionnaireScreen() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Status bar */}
      <div className="h-10 flex items-center justify-between px-5 bg-white">
        <span className="text-xs font-semibold text-gray-800">9:41</span>
        <div className="w-20 h-5 bg-black rounded-full" />
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
            <rect x="1" y="14" width="3" height="6" rx="0.5"/>
            <rect x="6" y="11" width="3" height="9" rx="0.5"/>
            <rect x="11" y="7" width="3" height="13" rx="0.5"/>
            <rect x="16" y="3" width="3" height="17" rx="0.5"/>
          </svg>
          <svg className="w-5 h-3.5 text-gray-800" viewBox="0 0 28 14" fill="currentColor">
            <rect x="0" y="0" width="24" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="2" y="2" width="18" height="10" rx="1"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-semibold text-gray-900">Questionnaire</span>
          <span className="text-xs text-teal-600 font-medium">3/5</span>
        </div>
        {/* Progress bar */}
        <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500 rounded-full" style={{ width: '60%' }} />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 p-4">
        <div className="mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Question 3</p>
          <h3 className="text-base font-semibold text-gray-900">Guest count?</h3>
        </div>
        
        {/* Number input - clean */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <button className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-3xl font-bold text-gray-900">247</span>
            <button className="w-10 h-10 bg-teal-500 rounded-xl shadow-sm flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Previous answers - compact */}
        <div className="space-y-2">
          <p className="text-xs text-gray-400 mb-2">Completed</p>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-600 flex-1">On time?</span>
            <span className="text-sm font-medium text-gray-900">Yes</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-600 flex-1">Venue rating</span>
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className={`w-3.5 h-3.5 ${i <= 4 ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-4">
        <button className="w-full py-3.5 bg-teal-500 text-white font-semibold rounded-xl text-sm">
          Next
        </button>
      </div>

      {/* Home indicator */}
      <div className="h-6 flex items-center justify-center">
        <div className="w-28 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  )
}

// Completed Task List Screen - Static (Clean version with icons)
export function CompletedTasksScreen() {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Status bar */}
      <div className="h-10 flex items-center justify-between px-5 bg-white">
        <span className="text-xs font-semibold text-gray-800">9:41</span>
        <div className="w-20 h-5 bg-black rounded-full" />
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
            <rect x="1" y="14" width="3" height="6" rx="0.5"/>
            <rect x="6" y="11" width="3" height="9" rx="0.5"/>
            <rect x="11" y="7" width="3" height="13" rx="0.5"/>
            <rect x="16" y="3" width="3" height="17" rx="0.5"/>
          </svg>
          <svg className="w-5 h-3.5 text-gray-800" viewBox="0 0 28 14" fill="currentColor">
            <rect x="0" y="0" width="24" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="2" y="2" width="18" height="10" rx="1"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-semibold text-gray-900">Event Tasks</span>
          <div className="w-5" />
        </div>
        
        {/* Event completion badge */}
        <div className="flex items-center gap-3 p-2.5 bg-teal-50 rounded-xl">
          <div className="flex -space-x-1.5">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900 truncate">Boat House Cruise</p>
          </div>
          <div className="flex items-center gap-1 bg-teal-500 text-white px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-bold">5/5</span>
          </div>
        </div>
      </div>

      {/* Task List - Compact */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {/* Before */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 p-3 border-b border-gray-50">
            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded">BEFORE</span>
            <div className="flex-1" />
            <div className="flex items-center gap-1 text-teal-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] font-bold">2/2</span>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 line-through flex-1">Check In</span>
              <span className="text-[10px] text-gray-300">6:45p</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 line-through flex-1">Photo</span>
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=60&h=60&fit=crop" alt="" className="w-5 h-5 rounded object-cover" />
            </div>
          </div>
        </div>

        {/* During */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 p-3 border-b border-gray-50">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded">DURING</span>
            <div className="flex-1" />
            <div className="flex items-center gap-1 text-teal-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] font-bold">1/1</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 line-through flex-1">Monitor</span>
            <span className="text-[10px] text-gray-300">8:30p</span>
          </div>
        </div>

        {/* Check Out */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 p-3 border-b border-gray-50">
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded">CHECKOUT</span>
            <div className="flex-1" />
            <div className="flex items-center gap-1 text-teal-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] font-bold">1/1</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 line-through flex-1">Complete</span>
            <span className="text-[10px] text-gray-300">10:15p</span>
          </div>
        </div>

        {/* After */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 p-3 border-b border-gray-50">
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded">AFTER</span>
            <div className="flex-1" />
            <div className="flex items-center gap-1 text-teal-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] font-bold">1/1</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 line-through flex-1">Survey</span>
            <span className="text-[10px] text-gray-300">10:20p</span>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="h-6 flex items-center justify-center bg-gray-50">
        <div className="w-28 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  )
}

// Profile Screen - Static version (Clean, compact)
export function ProfileScreenStatic() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-10 flex items-center justify-between px-5">
        <span className="text-xs font-semibold text-white">9:41</span>
        <div className="w-20 h-5 bg-black rounded-full" />
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <rect x="1" y="14" width="3" height="6" rx="0.5"/>
            <rect x="6" y="11" width="3" height="9" rx="0.5"/>
            <rect x="11" y="7" width="3" height="13" rx="0.5"/>
            <rect x="16" y="3" width="3" height="17" rx="0.5"/>
          </svg>
          <svg className="w-5 h-3.5 text-white" viewBox="0 0 28 14" fill="currentColor">
            <rect x="0" y="0" width="24" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="2" y="2" width="18" height="10" rx="1"/>
          </svg>
        </div>
      </div>

      {/* Header - Teal gradient */}
      <div 
        className="pt-12 pb-16 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)' }}
      >
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="flex justify-between items-center relative z-10">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-white text-xs font-medium">Edit</span>
        </div>
      </div>
      
      {/* Profile Card */}
      <div className="px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex justify-center -mt-10 mb-2">
            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md border-3 border-white">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" 
                alt="Maya Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-2">
            <h2 className="text-base font-bold text-gray-900">Maya Chen</h2>
            <p className="text-gray-500 text-xs">Los Angeles, CA</p>
          </div>
          
          <div className="flex justify-center gap-1 mb-3">
            <div className="flex -space-x-1.5">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face" alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
            </div>
            <span className="text-[10px] text-gray-400">+12</span>
          </div>
          
          {/* Stats row */}
          <div className="flex justify-around border-t border-gray-100 pt-3">
            <div className="text-center">
              <p className="text-base font-bold text-gray-900">24</p>
              <p className="text-[10px] text-gray-400">Events</p>
            </div>
            <div className="text-center">
              <p className="text-base font-bold text-teal-500">4.9</p>
              <p className="text-[10px] text-gray-400">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-base font-bold text-gray-900">98%</p>
              <p className="text-[10px] text-gray-400">On-time</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="px-4 mt-3">
        <div className="flex border-b border-gray-100">
          <div className="flex-1 pb-2 text-[10px] font-semibold text-teal-600 border-b-2 border-teal-600 text-center">
            UPCOMING
          </div>
          <div className="flex-1 pb-2 text-[10px] font-medium text-gray-400 text-center">
            COMPLETED
          </div>
        </div>
      </div>
      
      {/* Events List */}
      <div className="flex-1 px-4 py-3 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="h-20 bg-gradient-to-r from-blue-400 to-cyan-400 relative">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop" 
              alt="Event"
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
              <span className="text-[8px] font-bold">TASK</span>
            </div>
          </div>
          <div className="p-2.5">
            <p className="text-[10px] text-teal-600 font-medium">Kick Off</p>
            <p className="font-semibold text-gray-900 text-xs">Boat House Cruise</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Jun 10 • 8pm</p>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="h-6 flex items-center justify-center">
        <div className="w-28 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  )
}

// Task Categories Screen - Static version (Clean, compact)
export function TaskCategoriesScreenStatic() {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Status bar */}
      <div className="h-10 flex items-center justify-between px-5 bg-white">
        <span className="text-xs font-semibold text-gray-800">9:41</span>
        <div className="w-20 h-5 bg-black rounded-full" />
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
            <rect x="1" y="14" width="3" height="6" rx="0.5"/>
            <rect x="6" y="11" width="3" height="9" rx="0.5"/>
            <rect x="11" y="7" width="3" height="13" rx="0.5"/>
            <rect x="16" y="3" width="3" height="17" rx="0.5"/>
          </svg>
          <svg className="w-5 h-3.5 text-gray-800" viewBox="0 0 28 14" fill="currentColor">
            <rect x="0" y="0" width="24" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="2" y="2" width="18" height="10" rx="1"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-semibold text-gray-900">Event Tasks</span>
          <div className="w-5" />
        </div>
        
        {/* Event Info */}
        <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-xl">
          <div className="flex -space-x-1.5">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900 truncate">Boat House Cruise</p>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span className="text-[10px] font-medium">0/5</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth={2} strokeDasharray="56.5" strokeDashoffset="56.5" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Task Categories - Compact cards */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {/* Before */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-900">Before</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-0 h-full bg-amber-400 rounded-full" />
              </div>
              <span className="text-[10px] text-gray-400">0/2</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* During */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-900">During</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-0 h-full bg-blue-400 rounded-full" />
              </div>
              <span className="text-[10px] text-gray-400">0/1</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* Checkout */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-900">Checkout</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-0 h-full bg-purple-400 rounded-full" />
              </div>
              <span className="text-[10px] text-gray-400">0/1</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* After */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-900">After</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-12 h-1 bg-gray-200 rounded-full">
                <div className="w-0 h-full bg-green-400 rounded-full" />
              </div>
              <span className="text-[10px] text-gray-400">0/1</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Home indicator */}
      <div className="h-6 flex items-center justify-center bg-gray-50">
        <div className="w-28 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  )
}

// Small phone frame for static screenshots
export function SmallPhoneFrame({ children }) {
  return (
    <div className="relative inline-block">
      {/* Phone outer frame - light silver */}
      <div className="relative bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-[2rem] p-[2px] shadow-xl">
        {/* Phone inner bezel */}
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 rounded-[1.9rem] p-1.5">
          {/* Screen container */}
          <div 
            className="relative bg-white rounded-[1.6rem] overflow-hidden"
            style={{ width: '240px', height: '510px' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
