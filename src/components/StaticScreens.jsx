// Static screenshot components for case study display
// These render as static images in the same style as the interactive prototype

import { useState } from 'react'

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

// Available Activations Screen - Shows events user can apply to (matches old Activations list)
export function AvailableActivationsScreen() {
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
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-sm font-bold text-gray-900">Find Events</span>
          <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </div>
        
        {/* Search bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-xl">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs text-gray-400">Search events near you...</span>
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-4 py-2 bg-white flex gap-2 overflow-x-auto">
        <span className="px-3 py-1 bg-teal-500 text-white text-[10px] font-semibold rounded-full whitespace-nowrap">All Events</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full whitespace-nowrap">This Week</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full whitespace-nowrap">$20+/hr</span>
      </div>

      {/* Events List */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {/* Event Card 1 - Available */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="h-16 bg-gradient-to-r from-blue-400 to-cyan-400 relative">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-0.5 rounded-full">
              <span className="text-[8px] font-bold">OPEN</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold text-gray-900 text-xs">Tech Launch Party</p>
              <span className="text-xs font-bold text-teal-600">$25/hr</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-2">Jun 15 • 6pm-11pm • Downtown LA</p>
            <button className="w-full py-1.5 bg-teal-500 text-white text-[10px] font-semibold rounded-lg">
              Mark Available
            </button>
          </div>
        </div>

        {/* Event Card 2 - Available */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="h-16 bg-gradient-to-r from-purple-400 to-pink-400 relative">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-0.5 rounded-full">
              <span className="text-[8px] font-bold">OPEN</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold text-gray-900 text-xs">Music Festival</p>
              <span className="text-xs font-bold text-teal-600">$30/hr</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-2">Jun 18-20 • All day • Rose Bowl</p>
            <button className="w-full py-1.5 bg-teal-500 text-white text-[10px] font-semibold rounded-lg">
              Mark Available
            </button>
          </div>
        </div>

        {/* Event Card 3 - Pending */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-200">
          <div className="h-16 bg-gradient-to-r from-amber-400 to-orange-400 relative">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-0.5 rounded-full">
              <span className="text-[8px] font-bold">PENDING</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold text-gray-900 text-xs">Corporate Gala</p>
              <span className="text-xs font-bold text-teal-600">$28/hr</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-2">Jun 22 • 7pm-12am • Beverly Hills</p>
            <div className="w-full py-1.5 bg-amber-100 text-amber-700 text-[10px] font-semibold rounded-lg text-center">
              Awaiting Approval
            </div>
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

// Photo Capture Screen - For documenting completed work
export function PhotoCaptureScreen() {
  return (
    <div className="h-full flex flex-col bg-black relative">
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

      {/* Camera viewfinder area */}
      <div className="flex-1 relative bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Simulated camera view - event booth setup */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4/5 h-3/5 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-teal-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-400 text-xs">Point at booth setup</p>
            </div>
          </div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
        </div>

        {/* Task info banner at top */}
        <div className="absolute top-12 left-3 right-3">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white text-xs font-semibold">Photo: Booth Setup</p>
                <p className="text-gray-400 text-[10px]">Before • Required</p>
              </div>
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold rounded">BEFORE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Camera controls */}
      <div className="bg-black px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Cancel */}
          <button className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Shutter button */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full" />
            </div>
          </div>
          
          {/* Flip camera */}
          <button className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Home indicator */}
      <div className="h-6 flex items-center justify-center bg-black">
        <div className="w-28 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}

// Event Discovery Screen - Shows available events to staff (alternative to profile for design decisions)
export function EventDiscoveryScreen() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Status bar */}
      <div className="h-10 flex items-center justify-between px-5 bg-teal-500">
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

      {/* Header with greeting */}
      <div className="bg-gradient-to-b from-teal-500 to-teal-600 px-4 pb-6 pt-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-teal-100 text-[10px]">Good morning</p>
            <p className="text-white font-bold text-base">Sam 👋</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-[10px] text-teal-100">Upcoming</p>
          </div>
          <div className="flex-1 bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-[10px] text-teal-100">Available</p>
          </div>
          <div className="flex-1 bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">$840</p>
            <p className="text-[10px] text-teal-100">This Month</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-3 overflow-y-auto -mt-2">
        {/* Next Event Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4 border border-gray-100">
          <div className="bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-2 flex items-center justify-between">
            <span className="text-white text-xs font-bold">⚡ NEXT UP</span>
            <span className="text-white/80 text-[10px]">Tomorrow</span>
          </div>
          <div className="p-3">
            <h3 className="font-bold text-gray-900 text-sm mb-1">Boat House Cruise</h3>
            <p className="text-gray-500 text-[10px] mb-2">Jun 10 • 6pm-11pm • Marina Del Rey</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-red-600 font-bold">5</span>
                </div>
                <span className="text-[10px] text-gray-500">tasks pending</span>
              </div>
              <button className="px-3 py-1 bg-teal-500 text-white text-[10px] font-semibold rounded-full">
                View Tasks
              </button>
            </div>
          </div>
        </div>

        {/* Section header */}
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-gray-900 text-xs">Available Near You</h4>
          <span className="text-[10px] text-teal-500 font-medium">See all</span>
        </div>

        {/* Horizontal scroll events */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          <div className="w-28 flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-2.5 text-white">
            <p className="text-[10px] opacity-80">Jun 15</p>
            <p className="text-xs font-bold mb-1 truncate">Tech Launch</p>
            <p className="text-[10px] font-semibold">$25/hr</p>
          </div>
          <div className="w-28 flex-shrink-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-2.5 text-white">
            <p className="text-[10px] opacity-80">Jun 18</p>
            <p className="text-xs font-bold mb-1 truncate">Music Fest</p>
            <p className="text-[10px] font-semibold">$30/hr</p>
          </div>
          <div className="w-28 flex-shrink-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-2.5 text-white">
            <p className="text-[10px] opacity-80">Jun 22</p>
            <p className="text-xs font-bold mb-1 truncate">Corporate</p>
            <p className="text-[10px] font-semibold">$28/hr</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-white border-t border-gray-100 px-6 py-2">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-[9px] text-teal-500 font-medium mt-0.5">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[9px] text-gray-400 mt-0.5">Find</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[9px] text-gray-400 mt-0.5">Calendar</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[9px] text-gray-400 mt-0.5">Profile</span>
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

// Shift Summary Screen - Shows Sam's completed work and progress
export function ShiftSummaryScreen() {
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
      <div className="bg-white px-4 pt-2 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <button className="p-1">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-sm font-bold text-gray-900">Shift Summary</h1>
        </div>
        
        {/* Event info */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl p-3 text-white">
          <p className="text-[10px] opacity-80 mb-0.5">Completed</p>
          <p className="font-bold text-sm">Boat House Cruise</p>
          <p className="text-[10px] opacity-80">Jun 10 • 6pm-11pm</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="bg-white px-4 py-3 flex gap-2 border-b border-gray-100">
        <div className="flex-1 bg-emerald-50 rounded-xl p-2.5 text-center">
          <p className="text-lg font-bold text-emerald-600">5/5</p>
          <p className="text-[9px] text-emerald-700">Tasks Done</p>
        </div>
        <div className="flex-1 bg-blue-50 rounded-xl p-2.5 text-center">
          <p className="text-lg font-bold text-blue-600">3</p>
          <p className="text-[9px] text-blue-700">Photos</p>
        </div>
        <div className="flex-1 bg-amber-50 rounded-xl p-2.5 text-center">
          <p className="text-lg font-bold text-amber-600">4.8</p>
          <p className="text-[9px] text-amber-700">Rating</p>
        </div>
      </div>

      {/* Completed tasks with proof */}
      <div className="flex-1 px-4 py-3 overflow-y-auto">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Work Completed</p>
        
        {/* Task with photo proof */}
        <div className="bg-white rounded-xl p-3 mb-2 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">Booth Setup</p>
              <p className="text-[10px] text-gray-500">Completed at 5:45pm</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Task with photo proof */}
        <div className="bg-white rounded-xl p-3 mb-2 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">Guest Check-in</p>
              <p className="text-[10px] text-gray-500">Completed at 6:30pm</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Task without photo */}
        <div className="bg-white rounded-xl p-3 mb-2 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">Distribute materials</p>
              <p className="text-[10px] text-gray-500">Completed at 7:15pm</p>
            </div>
          </div>
        </div>

        {/* Task with photo */}
        <div className="bg-white rounded-xl p-3 mb-2 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">Booth Breakdown</p>
              <p className="text-[10px] text-gray-500">Completed at 10:45pm</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manager visibility note */}
      <div className="px-4 pb-3">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-semibold text-emerald-800">Your manager can see this</p>
            <p className="text-[9px] text-emerald-600">Great work is now visible!</p>
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

// Browser frame for desktop app mockups
export function BrowserFrame({ children, size = "small" }) {
  const dimensions = size === "large" 
    ? { width: '100%', maxWidth: '900px', height: 'auto', minHeight: '500px' }
    : { width: '320px', height: '420px' }
  
  return (
    <div className="relative inline-block w-full">
      {/* Browser outer frame */}
      <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-xl p-[2px] shadow-2xl">
        {/* Browser chrome */}
        <div className="bg-slate-800 rounded-t-[10px] px-3 py-2 flex items-center gap-2">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          {/* URL bar */}
          <div className="flex-1 ml-2 bg-slate-700/50 rounded-md px-3 py-1 flex items-center gap-2">
            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[9px] text-slate-400 font-medium">investigateandreview.com</span>
          </div>
        </div>
        {/* Screen container */}
        <div 
          className="relative bg-slate-950 rounded-b-[10px] overflow-hidden"
          style={dimensions}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// Large Desktop Browser Frame for case study galleries
export function DesktopBrowserFrame({ children, url = "investigateandreview.com" }) {
  return (
    <div className="relative w-full">
      {/* Browser outer frame */}
      <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-2xl p-[2px] shadow-2xl">
        {/* Browser chrome */}
        <div className="bg-slate-800 rounded-t-[14px] px-4 py-3 flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {/* URL bar */}
          <div className="flex-1 ml-3 bg-slate-700/50 rounded-lg px-4 py-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm text-slate-400 font-medium">{url}</span>
          </div>
          {/* Browser actions */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </div>
        {/* Screen container */}
        <div className="relative bg-slate-950 rounded-b-[14px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

// Empty Search State Screen - Starting point for investigators
export function EmptySearchScreen() {
  return (
    <div className="flex h-[580px] bg-slate-950 text-white">
      {/* Left Sidebar - Navigation */}
      <div className="w-56 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* Logo */}
        <div className="px-4 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <span className="text-sm font-bold text-white">Investigate</span>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 py-4 px-3 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            AI Search
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            All Documents
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Saved Queries
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reports
          </button>
        </div>

        {/* Case Info */}
        <div className="p-3 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded">ACTIVE</span>
            </div>
            <p className="text-sm font-semibold text-white">SEC Investigation</p>
            <p className="text-xs text-slate-400 mt-1">42,847 documents</p>
          </div>
        </div>
      </div>

      {/* Main Content - Empty State */}
      <div className="flex-1 flex flex-col">
        {/* Search Header - Empty Input */}
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-slate-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500 italic">Ask a question in plain English...</p>
              </div>
            </div>
            <button className="px-4 py-3 bg-slate-700 text-slate-400 rounded-xl font-semibold text-sm flex items-center gap-2 cursor-not-allowed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Empty State Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          {/* Document Search Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-6 relative">
            {/* Stacked documents */}
            <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            {/* Small magnifying glass overlay */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center border border-amber-500/30">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2">AI Powered Document Search</h2>
          <p className="text-sm text-slate-400 text-center max-w-md mb-6">
            Ask questions in plain English. AI will find relevant documents, score their relevance, and summarize key findings.
          </p>

          {/* Example Queries */}
          <div className="w-full max-w-lg space-y-2">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">Try asking:</p>
            <button className="w-full text-left px-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl text-sm text-slate-300 transition-colors">
              "Show all communications about revenue recognition in Q4"
            </button>
            <button className="w-full text-left px-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl text-sm text-slate-300 transition-colors">
              "Find emails between executives regarding contract timing"
            </button>
            <button className="w-full text-left px-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl text-sm text-slate-300 transition-colors">
              "Which documents mention policy changes or audit concerns?"
            </button>
          </div>
        </div>

        {/* Footer with case stats */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/30">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>42,847 documents indexed</span>
            <span>Last updated: 2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// NLP Document Search Desktop Screen - Interactive search interface
export function NLPDocumentSearchScreen() {
  const [filter, setFilter] = useState('90')
  const [selectedDoc, setSelectedDoc] = useState(0)
  
  // All documents with relevancy scores
  const allDocuments = [
    { id: 0, title: 'Q4 Revenue Memo', type: 'Email', date: 'Dec 15, 2024', relevancy: 98, source: 'CFO → CEO', color: 'amber' },
    { id: 1, title: 'Policy Update Draft', type: 'Document', date: 'Nov 28', relevancy: 94, source: 'Finance', color: 'indigo' },
    { id: 2, title: 'Board Minutes Q4', type: 'Minutes', date: 'Dec 1', relevancy: 91, source: 'Board', color: 'emerald' },
    { id: 3, title: 'Audit Committee Notes', type: 'Minutes', date: 'Dec 8', relevancy: 90, source: 'Audit', color: 'rose' },
    { id: 4, title: 'CFO Budget Review', type: 'Presentation', date: 'Nov 15', relevancy: 87, source: 'Finance', color: 'violet' },
    { id: 5, title: 'Q3 Comparison Analysis', type: 'Spreadsheet', date: 'Oct 30', relevancy: 84, source: 'Accounting', color: 'cyan' },
    { id: 6, title: 'Controller Memo', type: 'Memo', date: 'Dec 10', relevancy: 82, source: 'Controller', color: 'orange' },
    { id: 7, title: 'External Audit Request', type: 'Email', date: 'Dec 5', relevancy: 79, source: 'External', color: 'pink' },
    { id: 8, title: 'Revenue Forecast Model', type: 'Spreadsheet', date: 'Nov 20', relevancy: 76, source: 'FP&A', color: 'lime' },
    { id: 9, title: 'Investor Call Notes', type: 'Document', date: 'Dec 12', relevancy: 72, source: 'IR Team', color: 'sky' },
    { id: 10, title: 'Legal Review Comments', type: 'Document', date: 'Dec 3', relevancy: 68, source: 'Legal', color: 'fuchsia' },
    { id: 11, title: 'Draft Press Release', type: 'Document', date: 'Dec 14', relevancy: 65, source: 'Comms', color: 'teal' },
  ]
  
  // Filter documents based on selected threshold
  const filteredDocs = allDocuments.filter(doc => {
    if (filter === '90') return doc.relevancy >= 90
    if (filter === '75') return doc.relevancy >= 75
    return true // 'all'
  })
  
  const filterCounts = {
    '90': allDocuments.filter(d => d.relevancy >= 90).length,
    '75': allDocuments.filter(d => d.relevancy >= 75).length,
    'all': allDocuments.length
  }
  
  const colorMap = {
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    rose: { bg: 'bg-rose-500/20', text: 'text-rose-400' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400' },
    pink: { bg: 'bg-pink-500/20', text: 'text-pink-400' },
    lime: { bg: 'bg-lime-500/20', text: 'text-lime-400' },
    sky: { bg: 'bg-sky-500/20', text: 'text-sky-400' },
    fuchsia: { bg: 'bg-fuchsia-500/20', text: 'text-fuchsia-400' },
    teal: { bg: 'bg-teal-500/20', text: 'text-teal-400' },
  }

  return (
    <div className="flex h-[580px] bg-slate-950 text-white">
      {/* Left Sidebar - Navigation */}
      <div className="w-56 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* Logo */}
        <div className="px-4 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <span className="text-sm font-bold text-white">Investigate</span>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 py-4 px-3 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            AI Search
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            All Documents
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Saved Queries
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reports
          </button>
        </div>

        {/* Case Info */}
        <div className="p-3 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded">ACTIVE</span>
            </div>
            <p className="text-sm font-semibold text-white">SEC Investigation</p>
            <p className="text-xs text-slate-400 mt-1">42,847 documents</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Search Header */}
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-slate-800 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-white leading-relaxed">"Show all communications about revenue recognition adjustments in Q4 involving executives"</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-lg">revenue recognition</span>
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-lg">Q4 2024</span>
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-lg">executives</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-3 bg-amber-500 text-slate-900 rounded-xl font-semibold text-sm flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Document List */}
          <div className="w-80 border-r border-slate-800 flex flex-col">
            {/* Results Header */}
            <div className="px-4 py-3 border-b border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-white">847 Results</span>
                <span className="text-xs text-slate-500">Sorted by relevance</span>
              </div>
              {/* Interactive Relevancy Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Show:</span>
                <button 
                  onClick={() => setFilter('90')}
                  className={`px-2 py-1 text-xs font-medium rounded-lg transition-all ${
                    filter === '90' 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  90%+
                </button>
                <button 
                  onClick={() => setFilter('75')}
                  className={`px-2 py-1 text-xs font-medium rounded-lg transition-all ${
                    filter === '75' 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  75%+
                </button>
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-2 py-1 text-xs font-medium rounded-lg transition-all ${
                    filter === 'all' 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  All
                </button>
              </div>
            </div>
            {/* Showing indicator */}
            <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800">
              <p className="text-xs text-slate-500">
                Showing <span className="text-amber-400 font-medium">{filteredDocs.length} documents</span>
                {filter === '90' && ' with 90%+ relevance'}
                {filter === '75' && ' with 75%+ relevance'}
                {filter === 'all' && ' (all relevance levels)'}
              </p>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {filteredDocs.map((doc, index) => (
                <div 
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc.id)}
                  className={`rounded-xl p-3 cursor-pointer transition-all ${
                    selectedDoc === doc.id 
                      ? 'bg-amber-500/10 border border-amber-500/30' 
                      : 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-12 ${colorMap[doc.color].bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-6 h-6 ${colorMap[doc.color].text}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white">{doc.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{doc.type} • {doc.date}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                          doc.relevancy >= 90 ? 'bg-emerald-500/20 text-emerald-300' :
                          doc.relevancy >= 75 ? 'bg-amber-500/20 text-amber-300' :
                          'bg-slate-600/20 text-slate-400'
                        }`}>{doc.relevancy}%</span>
                        <span className="text-xs text-slate-500">{doc.source}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Summary Panel */}
          <div className="flex-1 flex flex-col">
            <div className="px-6 py-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-violet-500/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-violet-300">AI Generated Summary</h3>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Analysis of <span className="text-amber-400 font-semibold">847 documents</span> reveals coordinated discussions about revenue recognition timing for the Acme contract. Key findings:
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Timing Adjustments</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">CFO requested acceleration of Q4 revenue recognition for Acme contract, citing "competitive pressure" in email dated Dec 15<sup className="text-violet-400">[1]</sup></p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Approval Chain</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Board approved modified recognition criteria on Dec 1, pending audit<sup className="text-violet-400">[2]</sup> with CEO signature required<sup className="text-violet-400">[3]</sup></p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Internal Concerns</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Controller expressed reservations about timing in internal memo: "may not align with GAAP guidance"<sup className="text-violet-400">[4]</sup></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Citation Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/50">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">4 citations • Click to verify source</span>
                <button className="px-3 py-1.5 bg-amber-500 text-slate-900 rounded-lg text-xs font-semibold">Export Summary</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Source Inspector Desktop Screen - Document verification interface
export function SourceInspectorScreen() {
  return (
    <div className="flex h-[580px] bg-slate-950 text-white">
      {/* Left Panel - Document List */}
      <div className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* Header */}
        <div className="px-4 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <button className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-white">Source Inspector</span>
          </div>
          <div className="bg-slate-800 rounded-lg p-3">
            <p className="text-xs text-slate-400">Verifying citation from:</p>
            <p className="text-sm text-white mt-1 font-medium">AI Summary Finding #1</p>
          </div>
        </div>

        {/* Source List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <p className="text-xs text-slate-500 uppercase tracking-wide px-2 mb-2">Referenced Documents</p>
          
          {/* Source 1 - Selected */}
          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-violet-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">1</span>
              </div>
              <span className="text-xs text-violet-300 font-medium">Primary Source</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Q4 Revenue Memo</h4>
            <p className="text-xs text-slate-400 mt-1">Email • Dec 15, 2024</p>
            <p className="text-xs text-slate-400">J. Roberts → M. Chen</p>
          </div>

          {/* Source 2 */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 hover:bg-slate-800 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-300 font-bold text-xs">2</span>
              </div>
              <span className="text-xs text-slate-400">Supporting</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Board Minutes</h4>
            <p className="text-xs text-slate-400 mt-1">Minutes • Dec 1, 2024</p>
          </div>

          {/* Source 3 */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 hover:bg-slate-800 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-300 font-bold text-xs">3</span>
              </div>
              <span className="text-xs text-slate-400">Supporting</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Controller Memo</h4>
            <p className="text-xs text-slate-400 mt-1">Memo • Dec 10, 2024</p>
          </div>
        </div>
      </div>

      {/* Main Document View */}
      <div className="flex-1 flex flex-col">
        {/* Document Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <div>
            <h2 className="text-lg font-bold text-white">Q4 Revenue Memo - CFO Review</h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-slate-400">Email Communication</span>
              <span className="text-sm text-slate-400">•</span>
              <span className="text-sm text-slate-400">December 15, 2024</span>
              <span className="text-sm text-slate-400">•</span>
              <span className="px-2 py-0.5 bg-violet-500/20 text-violet-300 text-xs font-medium rounded">98% Relevant</span>
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Email Header */}
          <div className="bg-slate-800/30 rounded-xl p-4 mb-4 border border-slate-700/50">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-500">From:</span>
                <span className="text-white ml-2">James Roberts (CFO)</span>
              </div>
              <div>
                <span className="text-slate-500">To:</span>
                <span className="text-white ml-2">Michael Chen (CEO)</span>
              </div>
              <div>
                <span className="text-slate-500">Date:</span>
                <span className="text-white ml-2">Dec 15, 2024 3:47 PM</span>
              </div>
              <div>
                <span className="text-slate-500">Subject:</span>
                <span className="text-white ml-2">RE: Q4 Revenue Recognition</span>
              </div>
            </div>
          </div>

          {/* Document Body with Highlights */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-slate-300 leading-relaxed">Michael,</p>
              <p className="text-slate-300 leading-relaxed mt-4">Following up on our discussion yesterday regarding the Acme Technologies contract.</p>
              <p className="text-slate-300 leading-relaxed mt-4">
                After reviewing the terms, <span className="bg-amber-500/30 text-amber-200 px-1 rounded">I believe we should accelerate the recognition of revenue for this contract into Q4</span>. The deliverables are substantially complete and we have verbal confirmation from their team that acceptance is imminent.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                <span className="bg-amber-500/30 text-amber-200 px-1 rounded">Given the competitive pressure and analyst expectations for the quarter, this timing adjustment would be beneficial.</span> I've already spoken with Sarah in Accounting and she's prepared to process the entries once we have your approval.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                The contract value is $2.4M. Under our current policy, we would normally recognize this in Q1 upon formal acceptance, but I believe we have sufficient basis to accelerate.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">Please advise if you'd like to discuss before the board meeting on the 18th.</p>
              <p className="text-slate-300 mt-4">Best,<br/>James</p>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="mt-4 bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-violet-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-violet-300">Why AI Cited This Document</h4>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              This email directly supports Finding #1: <span className="text-white font-medium">"CFO requested acceleration of Q4 revenue recognition"</span>. The highlighted passages show explicit discussion of timing adjustments and competitive pressures motivating the change.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-semibold flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Confirm Citation
              </button>
              <button className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-xs font-semibold flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Flag Issue
              </button>
            </div>
            <button className="px-4 py-1.5 bg-amber-500 text-slate-900 rounded-lg text-xs font-semibold">Add to Report</button>
          </div>
        </div>
      </div>

      {/* Right Panel - Context */}
      <div className="w-64 bg-slate-900 border-l border-slate-800 flex flex-col">
        <div className="px-4 py-4 border-b border-slate-800">
          <h3 className="text-sm font-semibold text-white">Document Context</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Confidence Score</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" style={{ width: '98%' }} />
              </div>
              <span className="text-sm font-bold text-violet-400">98%</span>
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Key Entities</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <span className="text-slate-300">James Roberts</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 bg-indigo-500/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <span className="text-slate-300">Michael Chen</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <span className="text-slate-300">Acme Technologies</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Related Topics</p>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Revenue</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Q4</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Contract</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Timing</span>
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Thread History</p>
            <div className="space-y-2">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                Dec 14 - Initial discussion
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                Dec 15 - This email
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                Dec 16 - CEO reply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Document Investigation Screen for eDiscovery/Legal product
export function InvestigateDocumentScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-950 text-white">
      {/* App Header */}
      <div className="bg-slate-900 border-b border-slate-700/50 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <span className="text-xs font-bold text-white">Investigate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">JA</span>
          </div>
        </div>
      </div>

      {/* Case Header */}
      <div className="bg-slate-900/50 px-3 py-2 border-b border-slate-800">
        <div className="flex items-center gap-1.5 text-[9px] text-slate-400 mb-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <span>Active Case</span>
        </div>
        <h2 className="text-sm font-semibold text-white">SEC Revenue Recognition</h2>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[9px] text-slate-400">42,847 documents</span>
          <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[8px] font-medium rounded">Priority</span>
        </div>
      </div>

      {/* AI Query Bar */}
      <div className="px-3 py-2 border-b border-slate-800">
        <div className="bg-slate-800 rounded-lg p-2 flex items-start gap-2">
          <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-slate-300 leading-relaxed">"Show all communications about revenue recognition adjustments in Q4"</p>
          </div>
        </div>
      </div>

      {/* Results Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* AI Summary */}
        <div className="px-3 py-2 border-b border-slate-800">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-3.5 h-3.5 bg-violet-500/30 rounded flex items-center justify-center">
              <svg className="w-2 h-2 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-violet-300">AI Analysis</span>
          </div>
          <p className="text-[10px] text-slate-300 leading-relaxed">
            Found <span className="text-amber-400 font-medium">847 documents</span> with revenue recognition discussions. Key themes include timing adjustments<sup className="text-violet-400 text-[8px]">[1]</sup> and approval chains<sup className="text-violet-400 text-[8px]">[2]</sup>.
          </p>
        </div>

        {/* Document Results */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
          {/* Document 1 */}
          <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/50">
            <div className="flex items-start gap-2">
              <div className="w-7 h-8 bg-amber-500/20 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-semibold text-white truncate">Q4 Revenue Memo - CFO Review</h4>
                <p className="text-[9px] text-slate-400 mt-0.5">Email • Dec 15, 2024 • J. Roberts → M. Chen</p>
                <p className="text-[9px] text-slate-300 mt-1 leading-relaxed line-clamp-2">"...we need to discuss the timing of recognition for the Acme contract before..."</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-300 text-[8px] font-medium rounded">98% relevant</span>
                  <span className="text-[8px] text-slate-500">3 citations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Document 2 */}
          <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/50">
            <div className="flex items-start gap-2">
              <div className="w-7 h-8 bg-indigo-500/20 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-semibold text-white truncate">Accounting Policy Update - Draft</h4>
                <p className="text-[9px] text-slate-400 mt-0.5">Document • Nov 28, 2024 • Finance Team</p>
                <p className="text-[9px] text-slate-300 mt-1 leading-relaxed line-clamp-2">"...modified recognition criteria for multi-year service agreements..."</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-300 text-[8px] font-medium rounded">94% relevant</span>
                  <span className="text-[8px] text-slate-500">5 citations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Document 3 */}
          <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/50">
            <div className="flex items-start gap-2">
              <div className="w-7 h-8 bg-emerald-500/20 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-semibold text-white truncate">Board Meeting Minutes - Q4</h4>
                <p className="text-[9px] text-slate-400 mt-0.5">Minutes • Dec 1, 2024 • Board of Directors</p>
                <p className="text-[9px] text-slate-300 mt-1 leading-relaxed line-clamp-2">"...approved the revised revenue policy pending audit review..."</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-300 text-[8px] font-medium rounded">89% relevant</span>
                  <span className="text-[8px] text-slate-500">2 citations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-slate-900 border-t border-slate-700/50 px-3 py-2 flex items-center justify-between">
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 rounded-lg text-[9px] font-medium text-slate-300">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 rounded-lg text-[9px] font-bold text-slate-900">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export Report
        </button>
      </div>
    </div>
  )
}
