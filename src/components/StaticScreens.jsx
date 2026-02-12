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
  ]
  
  // Filter documents based on selected threshold
  const filteredDocs = allDocuments.filter(doc => {
    if (filter === '90') return doc.relevancy >= 90
    if (filter === '75') return doc.relevancy >= 75
    return true // 'all'
  })
  
  const colorMap = {
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    rose: { bg: 'bg-rose-500/20', text: 'text-rose-400' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  }

  return (
    <div className="flex flex-col h-[580px] bg-slate-950 text-white">
      {/* Compact Search Header */}
      <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-white">"Show all communications about revenue recognition adjustments in Q4 involving executives"</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-lg">revenue recognition</span>
            <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-lg">Q4</span>
            <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-lg">executives</span>
          </div>
        </div>
      </div>

      {/* Main Content - Side by side */}
      <div className="flex-1 flex min-h-0">
        {/* Left: Document List (fixed width, scrolls) */}
        <div className="w-72 border-r border-slate-800 flex flex-col">
          {/* Results Header with Filter */}
          <div className="px-3 py-2 border-b border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white">847 Results</span>
              <span className="text-xs text-slate-500">By relevance</span>
            </div>
            <div className="flex items-center gap-1">
              {['90', '75', 'all'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                    filter === f 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {f === 'all' ? 'All' : `${f}%+`}
                </button>
              ))}
            </div>
          </div>
          
          {/* Scrollable Document List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {filteredDocs.map((doc) => (
              <div 
                key={doc.id}
                onClick={() => setSelectedDoc(doc.id)}
                className={`rounded-lg p-2.5 cursor-pointer transition-all ${
                  selectedDoc === doc.id 
                    ? 'bg-amber-500/10 border border-amber-500/30' 
                    : 'bg-slate-800/50 border border-transparent hover:bg-slate-800'
                }`}
              >
                <div className="flex items-start gap-2">
                  <div className={`w-8 h-10 ${colorMap[doc.color].bg} rounded flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-4 h-4 ${colorMap[doc.color].text}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-white truncate">{doc.title}</h4>
                    <p className="text-[10px] text-slate-400">{doc.type} • {doc.date}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-1.5 py-0.5 text-[10px] font-medium rounded ${
                        doc.relevancy >= 90 ? 'bg-emerald-500/20 text-emerald-300' :
                        doc.relevancy >= 75 ? 'bg-amber-500/20 text-amber-300' :
                        'bg-slate-600/20 text-slate-400'
                      }`}>{doc.relevancy}%</span>
                      <span className="text-[10px] text-slate-500">{doc.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: AI Summary Panel (fills remaining, no scroll) */}
        <div className="flex-1 flex flex-col bg-slate-900/30">
          {/* Panel Header */}
          <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-500/30 rounded flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-violet-300">AI Generated Summary</h3>
            <span className="ml-auto text-[10px] text-slate-500 italic">Sample output for demo purposes</span>
          </div>
          
          {/* Summary Content - Fixed height sections */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                Analysis of <span className="text-amber-400 font-semibold">847 documents</span> reveals coordinated discussions about revenue recognition timing. Key findings:
              </p>
            </div>

            {/* Key Findings - Compact cards */}
            <div className="flex-1 grid grid-cols-1 gap-2">
              <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
                <h4 className="text-xs font-semibold text-white mb-1">Timing Adjustments</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">CFO requested acceleration of Q4 revenue recognition for Acme contract, citing "competitive pressure"<sup className="text-violet-400 ml-0.5">[1]</sup></p>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
                <h4 className="text-xs font-semibold text-white mb-1">Approval Chain</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Board approved modified recognition criteria on Dec 1<sup className="text-violet-400 ml-0.5">[2]</sup> with CEO signature required<sup className="text-violet-400 ml-0.5">[3]</sup></p>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
                <h4 className="text-xs font-semibold text-white mb-1">Internal Concerns</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Controller expressed reservations: "may not align with GAAP guidance"<sup className="text-violet-400 ml-0.5">[4]</sup></p>
              </div>
            </div>

            {/* Citation Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <span className="text-[10px] text-slate-500">4 citations • Click to verify source</span>
              <button className="px-2.5 py-1 bg-amber-500 text-slate-900 rounded text-[10px] font-semibold">Export</button>
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

// Document Review Queue Screen - Shows reviewer's assigned documents
export function DocumentReviewQueueScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-700/50 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <span className="text-xs font-bold text-white">Review Queue</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-slate-400">847 flagged for review</span>
        </div>
      </div>

      {/* Filter by Tag */}
      <div className="px-3 py-2 border-b border-slate-800">
        <p className="text-[8px] text-slate-500 mb-1.5">FILTER BY AI TAG</p>
        <div className="flex gap-1.5 flex-wrap">
          <button className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-[8px] font-medium rounded-full border border-cyan-500/50">All Tags</button>
          <button className="px-2 py-1 bg-amber-500/20 text-amber-400 text-[8px] font-medium rounded-full border border-amber-500/30">Revenue (312)</button>
          <button className="px-2 py-1 bg-violet-500/20 text-violet-400 text-[8px] font-medium rounded-full border border-violet-500/30">Q4 Timing (201)</button>
          <button className="px-2 py-1 bg-rose-500/20 text-rose-400 text-[8px] font-medium rounded-full border border-rose-500/30">Executive (156)</button>
        </div>
      </div>

      {/* Document List with Tags */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
        {/* Document 1 - Shows tags prominently */}
        <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/50 hover:border-cyan-500/30 cursor-pointer">
          <div className="flex items-start gap-2">
            <div className="w-7 h-8 bg-blue-500/20 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-semibold text-white truncate">RE: Q4 Revenue Adjustments</h4>
                <span className="text-[8px] text-emerald-400 font-medium">94%</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">J. Martinez → CFO • Dec 12, 2024</p>
              {/* AI Tags showing WHY this was flagged */}
              <div className="flex gap-1 mt-1.5 flex-wrap">
                <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[7px] rounded">Revenue Recognition</span>
                <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-400 text-[7px] rounded">Q4 Timing</span>
                <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-400 text-[7px] rounded">CFO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Document 2 */}
        <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/50 hover:border-cyan-500/30 cursor-pointer">
          <div className="flex items-start gap-2">
            <div className="w-7 h-8 bg-amber-500/20 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-semibold text-white truncate">Accounting Policy Memo</h4>
                <span className="text-[8px] text-emerald-400 font-medium">91%</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">Controller • Dec 10, 2024</p>
              <div className="flex gap-1 mt-1.5 flex-wrap">
                <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[7px] rounded">Revenue Recognition</span>
                <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 text-[7px] rounded">Policy Change</span>
              </div>
            </div>
          </div>
        </div>

        {/* Document 3 - Lower confidence, needs attention */}
        <div className="bg-slate-800/50 rounded-lg p-2.5 border border-amber-500/30 hover:border-amber-500/50 cursor-pointer">
          <div className="flex items-start gap-2">
            <div className="w-7 h-8 bg-blue-500/20 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-semibold text-white truncate">FW: Board Meeting Prep</h4>
                <span className="text-[8px] text-amber-400 font-medium">72%</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">EA → CEO • Dec 8, 2024</p>
              <div className="flex gap-1 mt-1.5 flex-wrap">
                <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-400 text-[7px] rounded">Executive</span>
                <span className="px-1.5 py-0.5 bg-slate-700 text-slate-400 text-[7px] rounded">Uncertain match</span>
              </div>
            </div>
          </div>
        </div>

        {/* Document 4 */}
        <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/50 hover:border-cyan-500/30 cursor-pointer">
          <div className="flex items-start gap-2">
            <div className="w-7 h-8 bg-emerald-500/20 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 10h-4v4H9v-4H5v-2h4V7h2v4h4v2z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-semibold text-white truncate">Q4 Revenue Model v3.xlsx</h4>
                <span className="text-[8px] text-emerald-400 font-medium">97%</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">Finance Team • Dec 5, 2024</p>
              <div className="flex gap-1 mt-1.5 flex-wrap">
                <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[7px] rounded">Revenue Recognition</span>
                <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-400 text-[7px] rounded">Q4 Timing</span>
                <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[7px] rounded">Financial Model</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-slate-900 border-t border-slate-700/50 px-3 py-2">
        <div className="flex items-center justify-between text-[9px]">
          <span className="text-slate-400">Verified: <span className="text-emerald-400">312</span></span>
          <span className="text-slate-400">Pending: <span className="text-cyan-400">535</span></span>
          <span className="text-slate-400">Rejected: <span className="text-rose-400">47</span></span>
        </div>
      </div>
    </div>
  )
}

// Document Review Conversation Screen - Filter by tag and find related docs
export function DocumentReviewConversationScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-700/50 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-violet-400 to-violet-600 rounded flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <span className="text-xs font-bold text-white">AI Assistant</span>
        </div>
        <span className="text-[9px] text-slate-400">Review Project: SEC Investigation</span>
      </div>

      {/* AI Conversation */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {/* User asks to filter by tag */}
        <div className="flex gap-2 justify-end">
          <div className="bg-cyan-500/20 rounded-lg p-2.5 max-w-[85%]">
            <p className="text-[9px] text-cyan-100">Show me all documents tagged "Revenue Recognition"</p>
          </div>
          <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-[7px] font-bold text-white">JA</span>
          </div>
        </div>

        {/* AI Response with filtered results */}
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="flex-1 bg-slate-800/50 rounded-lg p-2.5">
            <p className="text-[9px] text-slate-300 leading-relaxed mb-2">
              Found <span className="text-amber-400 font-medium">312 documents</span> tagged with "Revenue Recognition". Here's what triggered this tag:
            </p>
            <div className="p-2 bg-slate-900/50 rounded border border-slate-700 mb-2">
              <p className="text-[8px] text-slate-400 mb-1.5">Tag definition:</p>
              <p className="text-[9px] text-slate-300 italic">"Documents discussing when/how revenue is recorded, timing of recognition, or changes to recognition policies"</p>
            </div>
            <p className="text-[8px] text-slate-400 mb-2">Top matches by confidence:</p>
            {/* Document list */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 p-1.5 bg-slate-900/50 rounded hover:bg-slate-800 cursor-pointer border border-slate-700/50">
                <span className="text-[8px] text-emerald-400 font-medium">97%</span>
                <span className="text-[9px] text-white truncate flex-1">Q4 Revenue Model v3.xlsx</span>
                <span className="text-[7px] text-slate-500">Dec 5</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-slate-900/50 rounded hover:bg-slate-800 cursor-pointer border border-slate-700/50">
                <span className="text-[8px] text-emerald-400 font-medium">94%</span>
                <span className="text-[9px] text-white truncate flex-1">RE: Q4 Revenue Adjustments</span>
                <span className="text-[7px] text-slate-500">Dec 12</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-slate-900/50 rounded hover:bg-slate-800 cursor-pointer border border-slate-700/50">
                <span className="text-[8px] text-emerald-400 font-medium">91%</span>
                <span className="text-[9px] text-white truncate flex-1">Accounting Policy Memo</span>
                <span className="text-[7px] text-slate-500">Dec 10</span>
              </div>
            </div>
            <button className="mt-2 text-[8px] text-cyan-400 hover:text-cyan-300">View all 312 documents →</button>
          </div>
        </div>

        {/* User asks about why specific doc was tagged */}
        <div className="flex gap-2 justify-end">
          <div className="bg-cyan-500/20 rounded-lg p-2.5 max-w-[85%]">
            <p className="text-[9px] text-cyan-100">Why was "RE: Q4 Revenue Adjustments" flagged?</p>
          </div>
          <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-[7px] font-bold text-white">JA</span>
          </div>
        </div>

        {/* AI explains the evidence */}
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="flex-1 bg-slate-800/50 rounded-lg p-2.5">
            <p className="text-[9px] text-slate-300 leading-relaxed mb-2">
              This document was flagged for <span className="text-amber-400 font-medium">3 tags</span>. Here's the evidence for each:
            </p>
            
            {/* Evidence breakdown */}
            <div className="space-y-2">
              <div className="p-2 bg-amber-500/10 rounded border border-amber-500/20">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="px-1.5 py-0.5 bg-amber-500/30 text-amber-400 text-[7px] rounded font-medium">Revenue Recognition</span>
                </div>
                <p className="text-[8px] text-slate-300 italic">"...revised <span className="bg-amber-500/30 px-0.5">recognition schedule</span> for board review..."</p>
              </div>
              
              <div className="p-2 bg-violet-500/10 rounded border border-violet-500/20">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="px-1.5 py-0.5 bg-violet-500/30 text-violet-400 text-[7px] rounded font-medium">Q4 Timing</span>
                </div>
                <p className="text-[8px] text-slate-300 italic">"...address auditor's concerns about <span className="bg-violet-500/30 px-0.5">Q4 cutoff</span>..."</p>
              </div>

              <div className="p-2 bg-rose-500/10 rounded border border-rose-500/20">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="px-1.5 py-0.5 bg-rose-500/30 text-rose-400 text-[7px] rounded font-medium">CFO</span>
                </div>
                <p className="text-[8px] text-slate-300 italic">Sent to: <span className="bg-rose-500/30 px-0.5">CFO</span>, CC: Controller</p>
              </div>
            </div>

            <button className="mt-2.5 w-full py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded text-[9px] text-cyan-400 font-medium hover:bg-cyan-500/30">
              Open document to verify →
            </button>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="px-3 py-2 border-t border-slate-800">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Ask about tags, filter documents, or request analysis..." 
            className="flex-1 bg-slate-800 rounded-lg px-3 py-2 text-[10px] text-white placeholder-slate-500 border border-slate-700 focus:border-cyan-500 focus:outline-none"
          />
          <button className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Document Tagging Decision Screen - View document with highlighted evidence
export function DocumentTaggingDecisionScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-700/50 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-white">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h3 className="text-[10px] font-semibold text-white">RE: Q4 Revenue Adjustments</h3>
            <p className="text-[8px] text-slate-400">Email • J. Martinez → CFO, Controller</p>
          </div>
        </div>
        <span className="text-[8px] text-emerald-400 font-medium">94% confidence</span>
      </div>

      {/* Tags applied to this document */}
      <div className="px-3 py-2 border-b border-slate-800 bg-slate-900/50">
        <p className="text-[8px] text-slate-400 mb-1.5">AI Tags (3 found)</p>
        <div className="flex gap-1.5 flex-wrap">
          <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[8px] rounded-full border border-amber-500/30">Revenue Recognition</span>
          <span className="px-2 py-0.5 bg-violet-500/20 text-violet-400 text-[8px] rounded-full border border-violet-500/30">Q4 Timing</span>
          <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[8px] rounded-full border border-rose-500/30">CFO</span>
        </div>
      </div>

      {/* Document content with highlighted evidence */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <div className="bg-white rounded-lg p-3 text-slate-900">
          {/* Email header */}
          <div className="border-b border-slate-200 pb-2 mb-2">
            <div className="text-[8px] text-slate-500 space-y-0.5">
              <p><span className="font-medium">From:</span> J. Martinez</p>
              <p><span className="font-medium">To:</span> <span className="bg-rose-100 px-1 rounded">CFO</span>, Controller</p>
              <p><span className="font-medium">Date:</span> Dec 12, 2024 3:47 PM</p>
              <p><span className="font-medium">Subject:</span> RE: Q4 Revenue Adjustments</p>
            </div>
          </div>

          {/* Email body with highlights */}
          <div className="text-[9px] text-slate-700 leading-relaxed space-y-2">
            <p>Per our discussion, I've attached the revised <span className="bg-amber-200 px-0.5 rounded cursor-pointer hover:bg-amber-300" title="Revenue Recognition">recognition schedule</span> for board review.</p>
            
            <p>The timing adjustments we discussed should address the auditor's concerns about <span className="bg-violet-200 px-0.5 rounded cursor-pointer hover:bg-violet-300" title="Q4 Timing">Q4 cutoff</span>. Please confirm before I send to the audit committee.</p>
            
            <p className="text-slate-500 pt-2">---</p>
            <p className="text-slate-500">Attachment: Q4_Revenue_Schedule_v3.xlsx</p>
          </div>
        </div>

        {/* Evidence legend */}
        <div className="mt-3 p-2.5 bg-slate-800/50 rounded-lg border border-slate-700">
          <p className="text-[8px] text-slate-400 font-medium mb-2">Highlighted Evidence</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-200 rounded"></span>
              <span className="text-[8px] text-amber-400">Revenue Recognition</span>
              <span className="text-[7px] text-slate-500">- 1 match</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-violet-200 rounded"></span>
              <span className="text-[8px] text-violet-400">Q4 Timing</span>
              <span className="text-[7px] text-slate-500">- 1 match</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-rose-200 rounded"></span>
              <span className="text-[8px] text-rose-400">CFO</span>
              <span className="text-[7px] text-slate-500">- 1 match</span>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Footer */}
      <div className="bg-slate-900 border-t border-slate-700/50 px-3 py-2.5">
        <p className="text-[8px] text-slate-400 mb-2">Verify AI classification:</p>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-[9px] text-emerald-400 font-medium hover:bg-emerald-500/30">
            <span className="flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Correct - Send to Expert
            </span>
          </button>
          <button className="flex-1 py-2 bg-rose-500/20 border border-rose-500/30 rounded-lg text-[9px] text-rose-400 font-medium hover:bg-rose-500/30">
            <span className="flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Incorrect - Remove
            </span>
          </button>
        </div>
        <button className="w-full mt-2 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-[8px] text-slate-400 hover:text-white">
          Flag for second review
        </button>
      </div>
    </div>
  )
}

// ============================================
// EDISCOVERY APPLICATION SCREENS
// ============================================

// Shared sidebar component for eDiscovery screens
function EDiscoverySidebar({ activeItem = 'dashboard' }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'review', label: 'Review', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'analyze', label: 'Analyze', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'production', label: 'Production', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' },
  ]

  return (
    <div className="w-14 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-3">
      {/* Logo */}
      <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
        </svg>
      </div>
      {/* Nav items */}
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-colors ${
            activeItem === item.id 
              ? 'bg-teal-500/20 text-teal-400' 
              : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
          }`}
          title={item.label}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
          </svg>
        </button>
      ))}
      {/* Settings at bottom */}
      <div className="mt-auto">
        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-slate-800" title="Settings">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Dashboard Screen - Main metrics and overview
export function EDiscoveryDashboardScreen() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeItem="dashboard" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-12 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-semibold">AI Co-Pilot Dashboard</h1>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] rounded-full">SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 bg-slate-800 rounded text-xs text-slate-300 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              AI Assistant
            </button>
            <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold">JA</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Row 1: Key Metrics */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {/* Review Gap Analysis */}
            <div className="col-span-2 bg-slate-900 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-medium text-slate-400">Review Gap Analysis</h3>
                <span className="text-[10px] text-slate-500">Last 30 days</span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-emerald-400">$9M</span>
                <span className="text-xs text-emerald-400">SAVED</span>
              </div>
              {/* Mini chart placeholder */}
              <div className="h-16 flex items-end gap-1">
                {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 82, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-400/80 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-3 pt-3 border-t border-slate-800">
                <div>
                  <p className="text-[10px] text-slate-500">Precision</p>
                  <p className="text-lg font-bold text-white">96%</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Recall</p>
                  <p className="text-lg font-bold text-white">89%</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">F1 Score</p>
                  <p className="text-lg font-bold text-white">92%</p>
                </div>
              </div>
            </div>

            {/* Sentiment & Context Clusters */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-medium text-slate-400">Sentiment Clusters</h3>
                <button className="text-[10px] text-teal-400">Explore</button>
              </div>
              {/* Scatter plot placeholder */}
              <div className="h-24 relative">
                <div className="absolute w-2 h-2 bg-emerald-400 rounded-full" style={{ top: '20%', left: '30%' }} />
                <div className="absolute w-3 h-3 bg-emerald-400 rounded-full" style={{ top: '35%', left: '45%' }} />
                <div className="absolute w-2 h-2 bg-amber-400 rounded-full" style={{ top: '50%', left: '60%' }} />
                <div className="absolute w-4 h-4 bg-rose-400 rounded-full" style={{ top: '25%', left: '70%' }} />
                <div className="absolute w-2 h-2 bg-emerald-400 rounded-full" style={{ top: '60%', left: '25%' }} />
                <div className="absolute w-3 h-3 bg-amber-400 rounded-full" style={{ top: '70%', left: '50%' }} />
                <div className="absolute w-2 h-2 bg-rose-400 rounded-full" style={{ top: '40%', left: '80%' }} />
              </div>
              <div className="flex gap-3 mt-2">
                <span className="flex items-center gap-1 text-[9px] text-slate-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" /> Neutral
                </span>
                <span className="flex items-center gap-1 text-[9px] text-slate-400">
                  <span className="w-2 h-2 bg-amber-400 rounded-full" /> Urgent
                </span>
                <span className="flex items-center gap-1 text-[9px] text-slate-400">
                  <span className="w-2 h-2 bg-rose-400 rounded-full" /> High-Tension
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
              <h3 className="text-xs font-medium text-slate-400 mb-3">Project Stats</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-slate-400">Documents Ingested</span>
                    <span className="text-white font-medium">142,847</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-slate-400">AI Culled</span>
                    <span className="text-white font-medium">128,562</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-slate-400">For Review</span>
                    <span className="text-white font-medium">14,285</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-slate-400">Reviewed</span>
                    <span className="text-white font-medium">8,421</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full">
                    <div className="h-full bg-violet-500 rounded-full" style={{ width: '59%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Model Accuracy & Hot Docs */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* Model Accuracy */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-white">Model Accuracy</h3>
                  <p className="text-[10px] text-slate-500">Calibrated Confidence</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mb-3">Training on 1,247 verified samples. Golden Dataset regression: passing.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Responsiveness</span>
                  <span className="text-[10px] text-emerald-400 font-medium">94.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Privilege</span>
                  <span className="text-[10px] text-emerald-400 font-medium">91.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Hot Document</span>
                  <span className="text-[10px] text-amber-400 font-medium">87.3%</span>
                </div>
              </div>
            </div>

            {/* Conversation Tester */}
            <div className="col-span-2 bg-slate-900 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-medium text-slate-400">AI Natural Language Culling</h3>
                <button className="text-[10px] text-teal-400">Expand</button>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 mb-3">
                <p className="text-[10px] text-slate-500 mb-1">Example query:</p>
                <p className="text-xs text-slate-300 italic">"Find all discussions regarding the Q3 budget leak excluding official HR announcements"</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300">Found <span className="text-amber-400 font-medium">847 documents</span> matching your query. Key clusters: Executive Emails (312), Slack Channels (298), Meeting Transcripts (237).</p>
                  </div>
                </div>
              </div>
              <button className="mt-3 w-full py-2 bg-teal-500/20 border border-teal-500/30 rounded-lg text-xs text-teal-400 font-medium">
                Open Query Interface
              </button>
            </div>
          </div>

          {/* Row 3: Review Progress & Hot Docs */}
          <div className="grid grid-cols-2 gap-3">
            {/* Review Progress by Reviewer */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
              <h3 className="text-xs font-medium text-slate-400 mb-3">Reviewer Progress</h3>
              <div className="space-y-2">
                {[
                  { name: 'Sarah M.', reviewed: 1247, total: 1500, rate: '52 docs/hr' },
                  { name: 'John D.', reviewed: 892, total: 1200, rate: '48 docs/hr' },
                  { name: 'Emily R.', reviewed: 634, total: 1000, rate: '45 docs/hr' },
                ].map((reviewer, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-[9px] font-medium text-slate-300">
                      {reviewer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-slate-300">{reviewer.name}</span>
                        <span className="text-slate-500">{reviewer.rate}</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full">
                        <div className="h-full bg-teal-500 rounded-full" style={{ width: `${(reviewer.reviewed / reviewer.total) * 100}%` }} />
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">{reviewer.reviewed}/{reviewer.total}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hot Documents */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-medium text-slate-400">Hot Documents</h3>
                <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] rounded-full">23 new</span>
              </div>
              <div className="space-y-2">
                {[
                  { title: 'RE: Q4 Budget Discussion', confidence: 97, type: 'Email' },
                  { title: 'Exec Strategy Call - Dec 5', confidence: 94, type: 'Zoom' },
                  { title: 'CFO <> Controller Thread', confidence: 91, type: 'Slack' },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-slate-800/50 rounded-lg hover:bg-slate-800 cursor-pointer">
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${doc.type === 'Email' ? 'bg-blue-500/20 text-blue-400' : doc.type === 'Zoom' ? 'bg-orange-500/20 text-orange-400' : 'bg-purple-500/20 text-purple-400'}`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d={doc.type === 'Email' ? 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' : doc.type === 'Zoom' ? 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' : 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-white truncate">{doc.title}</p>
                      <p className="text-[9px] text-slate-500">{doc.type}</p>
                    </div>
                    <span className="text-[10px] text-rose-400 font-medium">{doc.confidence}%</span>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full py-1.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">
                View All Hot Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Review Queue Screen - Document list for review
export function EDiscoveryReviewQueueScreen() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeItem="review" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-12 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-semibold">Review Queue</h1>
            <span className="text-xs text-slate-400">5,864 documents pending</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-xs text-white flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
              </svg>
              AI Culling
            </button>
            <button className="px-3 py-1.5 bg-slate-800 rounded text-xs text-slate-300">Filters</button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800 flex items-center gap-4">
          <button className="text-xs text-teal-400 font-medium border-b-2 border-teal-400 pb-1">All (5,864)</button>
          <button className="text-xs text-slate-400 pb-1">Responsive (3,421)</button>
          <button className="text-xs text-slate-400 pb-1">Privileged (847)</button>
          <button className="text-xs text-slate-400 pb-1">Hot Docs (156)</button>
          <button className="text-xs text-slate-400 pb-1">Needs Review (1,440)</button>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[10px] text-slate-500">Sort by:</span>
            <select className="bg-slate-800 text-xs text-slate-300 rounded px-2 py-1 border border-slate-700">
              <option>AI Confidence</option>
              <option>Date</option>
              <option>Custodian</option>
            </select>
          </div>
        </div>

        {/* Document list */}
        <div className="flex-1 overflow-y-auto">
          {[
            { id: 1, title: 'RE: Q4 Revenue Adjustments', type: 'Email', custodian: 'J. Martinez', date: 'Dec 12, 2024', confidence: 97, tags: ['Responsive', 'Hot Doc'], status: 'pending' },
            { id: 2, title: 'Strategy Call - Q4 Planning', type: 'Zoom', custodian: 'CFO Office', date: 'Dec 10, 2024', confidence: 94, tags: ['Responsive', 'Privilege'], status: 'pending' },
            { id: 3, title: 'CFO <> Controller Direct Message', type: 'Slack', custodian: 'Controller', date: 'Dec 9, 2024', confidence: 91, tags: ['Responsive'], status: 'pending' },
            { id: 4, title: 'Board Presentation Draft v3.pptx', type: 'Document', custodian: 'J. Martinez', date: 'Dec 8, 2024', confidence: 89, tags: ['Responsive'], status: 'pending' },
            { id: 5, title: 'FW: Auditor Questions', type: 'Email', custodian: 'External Audit', date: 'Dec 7, 2024', confidence: 72, tags: ['Needs Review'], status: 'flagged' },
            { id: 6, title: 'Accounting Policy Memo', type: 'Document', custodian: 'Controller', date: 'Dec 6, 2024', confidence: 88, tags: ['Responsive'], status: 'pending' },
          ].map((doc) => (
            <div 
              key={doc.id}
              className={`px-4 py-3 border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer flex items-center gap-4 ${doc.status === 'flagged' ? 'border-l-2 border-l-amber-500' : ''}`}
            >
              <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-teal-500" />
              
              {/* Doc type icon */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                doc.type === 'Email' ? 'bg-blue-500/20 text-blue-400' :
                doc.type === 'Zoom' ? 'bg-orange-500/20 text-orange-400' :
                doc.type === 'Slack' ? 'bg-purple-500/20 text-purple-400' :
                'bg-slate-700 text-slate-400'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={
                    doc.type === 'Email' ? 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' :
                    doc.type === 'Zoom' ? 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' :
                    doc.type === 'Slack' ? 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' :
                    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  } />
                </svg>
              </div>

              {/* Doc info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-white truncate">{doc.title}</h4>
                  {doc.tags.includes('Hot Doc') && <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-400 text-[9px] rounded">HOT</span>}
                  {doc.tags.includes('Privilege') && <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[9px] rounded">PRIV</span>}
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[10px] text-slate-500">{doc.type}</span>
                  <span className="text-[10px] text-slate-500">•</span>
                  <span className="text-[10px] text-slate-500">{doc.custodian}</span>
                  <span className="text-[10px] text-slate-500">•</span>
                  <span className="text-[10px] text-slate-500">{doc.date}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-1">
                {doc.tags.filter(t => !['Hot Doc', 'Privilege'].includes(t)).map((tag, i) => (
                  <span key={i} className={`px-2 py-0.5 text-[9px] rounded ${
                    tag === 'Responsive' ? 'bg-emerald-500/20 text-emerald-400' :
                    tag === 'Needs Review' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-slate-700 text-slate-400'
                  }`}>{tag}</span>
                ))}
              </div>

              {/* Confidence */}
              <div className="text-right w-16">
                <span className={`text-sm font-medium ${doc.confidence >= 90 ? 'text-emerald-400' : doc.confidence >= 80 ? 'text-cyan-400' : 'text-amber-400'}`}>
                  {doc.confidence}%
                </span>
                <p className="text-[9px] text-slate-500">confidence</p>
              </div>

              {/* Action */}
              <button className="px-3 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded text-xs text-teal-400">
                Review
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="h-12 bg-slate-900 border-t border-slate-800 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-800" />
            <span className="text-xs text-slate-400">Select all visible</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-slate-800 rounded text-xs text-slate-300">Bulk Tag</button>
            <button className="px-3 py-1.5 bg-slate-800 rounded text-xs text-slate-300">Add to Production</button>
            <span className="text-xs text-slate-500 ml-4">Page 1 of 98</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Document Review Screen - Split view with document and controls
export function EDiscoveryDocumentReviewScreen() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeItem="review" />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Document Viewer */}
        <div className="w-1/2 flex flex-col border-r border-slate-800">
          {/* Document header */}
          <div className="h-11 bg-slate-900 border-b border-slate-800 px-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-slate-800 rounded">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-xs font-medium">RE: Q4 Revenue Adjustments</span>
              <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 text-[9px] rounded">Email</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-slate-800 rounded text-slate-400" title="Pop out">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <button className="p-1.5 hover:bg-slate-800 rounded text-slate-400" title="Download">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Document content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-white rounded-lg p-5 text-slate-900 shadow-sm">
              {/* Email header */}
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="text-sm space-y-1">
                  <p><span className="font-medium text-slate-600">From:</span> J. Martinez &lt;jmartinez@company.com&gt;</p>
                  <p><span className="font-medium text-slate-600">To:</span> <span className="bg-rose-100 px-1 rounded">CFO</span>, Controller</p>
                  <p><span className="font-medium text-slate-600">Date:</span> December 12, 2024 3:47 PM</p>
                  <p><span className="font-medium text-slate-600">Subject:</span> RE: Q4 Revenue Adjustments</p>
                </div>
              </div>

              {/* Email body with highlights */}
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>Hi team,</p>
                <p>Per our discussion, I've attached the revised <span className="bg-amber-200 px-0.5 rounded cursor-pointer" title="Revenue Recognition">recognition schedule</span> for board review.</p>
                <p>The <span className="bg-violet-200 px-0.5 rounded cursor-pointer" title="Q4 Timing">timing adjustments</span> we discussed should address the auditor's concerns about <span className="bg-violet-200 px-0.5 rounded cursor-pointer" title="Q4 Timing">Q4 cutoff</span>. Please confirm before I send to the audit committee.</p>
                <p>I've also included the <span className="bg-amber-200 px-0.5 rounded cursor-pointer" title="Revenue Recognition">revenue allocation methodology</span> changes we discussed in the last call.</p>
                <p className="text-slate-500 mt-6">---</p>
                <p className="text-slate-500 text-xs">Attachment: Q4_Revenue_Schedule_v3.xlsx (124 KB)</p>
              </div>
            </div>
          </div>

          {/* Evidence legend */}
          <div className="bg-slate-900/50 px-4 py-2 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-slate-500">AI Highlights:</span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <span className="w-3 h-3 bg-amber-200 rounded" /> Revenue Recognition
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <span className="w-3 h-3 bg-violet-200 rounded" /> Q4 Timing
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <span className="w-3 h-3 bg-rose-200 rounded" /> Key People
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel - Review Controls */}
        <div className="w-1/2 flex flex-col">
          {/* Controls header */}
          <div className="h-11 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between">
            <span className="text-xs font-medium">Review & Tag</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-400">Doc 1,247 of 5,864</span>
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-slate-800 rounded text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-slate-800 rounded text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* AI Insight */}
          <div className="p-4 border-b border-slate-800">
            <div className="bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-lg p-3 border border-violet-500/20">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-violet-300 font-medium mb-1">AI Analysis (97% confidence)</p>
                  <p className="text-xs text-slate-300">This document discusses <span className="text-amber-400">revenue recognition timing</span> for Q4 reporting. References to "auditor concerns" and "cutoff" are typical of responsive documents. Sent to CFO indicates executive involvement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tagging controls */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Responsiveness */}
            <div>
              <label className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-2 block">Responsiveness</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="p-2 bg-emerald-500/20 border-2 border-emerald-500 rounded-lg text-center">
                  <svg className="w-5 h-5 mx-auto text-emerald-400 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[10px] text-emerald-400 font-medium">Responsive</span>
                </button>
                <button className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-center hover:border-slate-600">
                  <svg className="w-5 h-5 mx-auto text-slate-400 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[10px] text-slate-400 font-medium">Not Responsive</span>
                </button>
                <button className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-center hover:border-slate-600">
                  <svg className="w-5 h-5 mx-auto text-slate-400 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[10px] text-slate-400 font-medium">Needs Review</span>
                </button>
              </div>
            </div>

            {/* Privilege */}
            <div>
              <label className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-2 block">Privilege Designation</label>
              <div className="space-y-2">
                <button className="w-full p-2 bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-3 hover:border-slate-600">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-600" />
                  <span className="text-xs text-slate-300">Not Privileged</span>
                </button>
                <button className="w-full p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-amber-400">Attorney-Client Privilege</span>
                  <span className="text-[9px] text-slate-500 ml-auto">AI: 15% likely</span>
                </button>
                <button className="w-full p-2 bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-3 hover:border-slate-600">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-600" />
                  <span className="text-xs text-slate-300">Work Product</span>
                </button>
              </div>
            </div>

            {/* Issue Tags */}
            <div>
              <label className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-2 block">Issue Tags</label>
              <div className="flex flex-wrap gap-1.5">
                <button className="px-2 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-[10px] text-amber-400">Revenue Recognition</button>
                <button className="px-2 py-1 bg-violet-500/20 border border-violet-500/50 rounded-full text-[10px] text-violet-400">Q4 Timing</button>
                <button className="px-2 py-1 bg-rose-500/20 border border-rose-500/50 rounded-full text-[10px] text-rose-400">Hot Document</button>
                <button className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] text-slate-400">Audit</button>
                <button className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] text-slate-400">+ Add Tag</button>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-2 block">Notes</label>
              <textarea 
                className="w-full bg-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 placeholder-slate-500 border border-slate-700 resize-none"
                rows="2"
                placeholder="Add notes for this document..."
                defaultValue="Key document re: Q4 adjustments. Link to Doc #1189 (Controller response)."
              />
            </div>

            {/* Suggested Privilege Basis */}
            <div className="bg-slate-800/50 rounded-lg p-3">
              <label className="text-[10px] text-slate-400 font-medium mb-2 block">AI-Suggested Privilege Basis</label>
              <p className="text-xs text-slate-300 italic">"Communication between corporate officers regarding revenue reporting. Does not contain legal advice or attorney involvement. Recommend: Not Privileged."</p>
            </div>
          </div>

          {/* Action footer */}
          <div className="bg-slate-900 border-t border-slate-800 p-3 space-y-2">
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-teal-500 rounded-lg text-xs font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save & Next
              </button>
              <button className="px-4 py-2 bg-slate-800 rounded-lg text-xs text-slate-300 border border-slate-700">
                Skip
              </button>
            </div>
            <button className="w-full py-1.5 bg-slate-800/50 rounded text-[10px] text-slate-500">
              Add to Production
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// EDISCOVERY STATIC SCREENS FOR CASE STUDY
// ============================================

// Small Desktop Frame for eDiscovery case study gallery
export function SmallDesktopFrame({ children }) {
  return (
    <div className="relative w-full">
      {/* Browser outer frame */}
      <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-xl p-[2px] shadow-xl">
        {/* Browser chrome */}
        <div className="bg-slate-800 rounded-t-[10px] px-2 py-1.5 flex items-center gap-1.5">
          {/* Traffic lights */}
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          {/* URL bar */}
          <div className="flex-1 ml-1.5 bg-slate-700/50 rounded px-2 py-0.5 flex items-center gap-1">
            <svg className="w-2 h-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[8px] text-slate-400 font-medium">nexus.ediscovery.ai</span>
          </div>
        </div>
        {/* Screen container */}
        <div 
          className="relative bg-slate-950 rounded-b-[10px] overflow-hidden"
          style={{ height: '280px' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// eDiscovery Dashboard Screen (Static) - ECA with Concept Map
export function EDiscoveryDashboardStatic() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Mini Sidebar */}
      <div className="w-8 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-2">
        <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-cyan-500 rounded flex items-center justify-center mb-2">
          <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
          </svg>
        </div>
        <div className="flex-1 flex flex-col gap-0.5">
          <div className="w-5 h-5 rounded bg-teal-500/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-2 py-1.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-[9px] font-semibold text-white">Early Case Assessment</h1>
            <p className="text-[7px] text-slate-400">Project Nexus • 48,291 documents</p>
          </div>
          <button className="px-1.5 py-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[7px] font-medium text-white">
            Ask AI
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Concept Map */}
          <div className="flex-1 flex flex-col p-2">
            <div className="bg-slate-900 rounded-lg border border-slate-800 flex-1 flex flex-col">
              <div className="px-2 py-1 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-medium text-white">Concept Map</span>
                  <span className="px-1 py-0.5 bg-teal-500/20 text-teal-400 text-[6px] rounded">AI</span>
                </div>
              </div>
              
              {/* Concept Map Visualization */}
              <div className="flex-1 relative p-2">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="25%" y1="30%" x2="55%" y2="25%" stroke="#334155" strokeWidth="1" strokeDasharray="2" />
                  <line x1="55%" y1="25%" x2="70%" y2="55%" stroke="#334155" strokeWidth="1" strokeDasharray="2" />
                  <line x1="25%" y1="30%" x2="20%" y2="65%" stroke="#334155" strokeWidth="1" strokeDasharray="2" />
                </svg>
                
                {/* Concept clusters */}
                <div className="absolute w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center" style={{ left: '20%', top: '25%' }}>
                  <span className="text-[6px] font-bold text-slate-900">1.2K</span>
                </div>
                <div className="absolute w-5 h-5 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-full flex items-center justify-center" style={{ left: '50%', top: '20%' }}>
                  <span className="text-[5px] font-bold text-slate-900">892</span>
                </div>
                <div className="absolute w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center" style={{ left: '65%', top: '50%' }}>
                  <span className="text-[5px] font-bold text-slate-900">456</span>
                </div>
                <div className="absolute w-3 h-3 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full" style={{ left: '15%', top: '60%' }} />
                <div className="absolute w-3 h-3 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full" style={{ left: '40%', top: '65%' }} />
              </div>
            </div>
            
            {/* Sentiment Timeline */}
            <div className="mt-1.5 bg-slate-900 rounded-lg border border-slate-800 p-1.5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[7px] text-slate-400">Sentiment Timeline</span>
                <span className="text-[6px] text-rose-400">Peak: Mar 15</span>
              </div>
              <div className="h-6 flex items-end gap-px">
                {[20, 35, 25, 45, 60, 75, 55, 70, 85, 65, 45, 30].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t ${i >= 4 && i <= 8 ? 'bg-rose-400' : i >= 2 && i <= 9 ? 'bg-amber-400' : 'bg-emerald-400'}`} style={{ height: `${h}%`, opacity: 0.7 }} />
                ))}
              </div>
            </div>
          </div>

          {/* Entity Panel */}
          <div className="w-24 border-l border-slate-800 bg-slate-900/50 flex flex-col">
            <div className="px-1.5 py-1 border-b border-slate-800">
              <span className="text-[7px] font-medium text-white">Key Entities</span>
            </div>
            <div className="flex-1 p-1 space-y-1 overflow-hidden">
              {[
                { name: 'J. Mitchell', type: 'Person', count: 847 },
                { name: 'S. Chen', type: 'Person', count: 623 },
                { name: 'Acme Holdings', type: 'Org', count: 1243 },
              ].map((e, i) => (
                <div key={i} className="bg-slate-800/50 rounded p-1">
                  <div className="text-[7px] text-white truncate">{e.name}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[5px] text-slate-500">{e.type}</span>
                    <span className="text-[5px] text-slate-400">{e.count}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-1.5 border-t border-slate-800">
              <button className="w-full py-1 bg-teal-500 rounded text-[7px] font-medium text-slate-900">
                Build Protocol →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// eDiscovery Protocol Builder Screen (Static)
export function EDiscoveryNLCullingStatic() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Mini Sidebar */}
      <div className="w-8 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-2">
        <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-cyan-500 rounded flex items-center justify-center mb-2">
          <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-2 py-1.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-[9px] font-semibold text-white">Protocol Builder</h1>
            <p className="text-[7px] text-slate-400">Define criteria in natural language</p>
          </div>
          <button className="px-1.5 py-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[7px] font-medium text-white flex items-center gap-0.5">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
            </svg>
            AI Assist
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Protocol Editor */}
          <div className="flex-1 flex flex-col p-2">
            <div className="bg-slate-900 rounded-lg border border-slate-800 flex-1 flex flex-col">
              <div className="px-2 py-1.5 border-b border-slate-800 flex items-center justify-between">
                <span className="text-[8px] font-medium text-white">Review Instructions</span>
                <div className="flex items-center gap-1">
                  <span className="text-[6px] text-violet-400 flex items-center gap-0.5">
                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                    </svg>
                    parsing
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-2">
                <div className="w-full h-full bg-slate-950 rounded p-2 text-[7px] text-slate-200 leading-relaxed border border-slate-800 font-mono">
                  Find all documents that discuss <span className="text-amber-400">revenue recognition timing</span>, <span className="text-amber-400">Q4 financial results</span>, or communications with <span className="text-amber-400">external auditors</span>.
                  <br /><br />
                  Exclude routine operational emails unless they mention "<span className="text-teal-400">board</span>", "<span className="text-teal-400">audit committee</span>", or any executive by name.
                  <br /><br />
                  Flag as <span className="text-violet-400">privileged</span> any communication involving legal counsel.
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-2 py-1.5 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[6px] text-slate-500">42 words</span>
                <div className="flex items-center gap-1">
                  <button className="px-2 py-1 bg-slate-800 rounded text-[7px] text-slate-300">Test Subset</button>
                  <button className="px-2 py-1 bg-teal-500 rounded text-[7px] font-medium text-slate-900">Apply →</button>
                </div>
              </div>
            </div>

            {/* Test Results */}
            <div className="mt-1.5 bg-slate-900 rounded-lg border border-slate-800 p-1.5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[7px] text-slate-400">Test Results</span>
                <span className="text-[6px] text-slate-500">1K sample</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                <div className="bg-slate-800/50 rounded p-1 text-center">
                  <p className="text-[10px] font-bold text-teal-400">4.8K</p>
                  <p className="text-[5px] text-slate-500">Matches</p>
                </div>
                <div className="bg-slate-800/50 rounded p-1 text-center">
                  <p className="text-[10px] font-bold text-amber-400">234</p>
                  <p className="text-[5px] text-slate-500">Privileged</p>
                </div>
                <div className="bg-slate-800/50 rounded p-1 text-center">
                  <p className="text-[10px] font-bold text-slate-400">38K</p>
                  <p className="text-[5px] text-slate-500">Excluded</p>
                </div>
                <div className="bg-slate-800/50 rounded p-1 text-center">
                  <p className="text-[10px] font-bold text-rose-400">127</p>
                  <p className="text-[5px] text-slate-500">Hot</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Suggestions Panel */}
          <div className="w-28 border-l border-slate-800 bg-slate-900/50 flex flex-col">
            <div className="px-1.5 py-1 border-b border-slate-800">
              <div className="flex items-center gap-1">
                <svg className="w-2.5 h-2.5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                </svg>
                <span className="text-[7px] font-medium text-white">Suggestions</span>
              </div>
            </div>
            
            <div className="flex-1 p-1 space-y-1 overflow-hidden">
              {[
                { text: 'Include SEC filing refs', conf: 94 },
                { text: 'Flag merger mentions', conf: 89 },
                { text: 'Exclude newsletters', conf: 96 },
              ].map((s, i) => (
                <div key={i} className="bg-slate-800/50 rounded p-1 hover:bg-slate-800 cursor-pointer">
                  <p className="text-[6px] text-slate-300 mb-0.5">{s.text}</p>
                  <div className="flex items-center gap-1">
                    <div className="flex-1 h-0.5 bg-slate-700 rounded-full">
                      <div className="h-full bg-teal-400 rounded-full" style={{ width: `${s.conf}%` }} />
                    </div>
                    <span className="text-[5px] text-teal-400">{s.conf}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// eDiscovery Multimodal Review Screen (Static) - Video/Audio
export function EDiscoveryMultimodalStatic() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Mini Sidebar */}
      <div className="w-8 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-2">
        <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-cyan-500 rounded flex items-center justify-center mb-2">
          <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Video Panel */}
        <div className="w-1/2 flex flex-col border-r border-slate-800">
          <div className="bg-slate-900 px-2 py-1 border-b border-slate-800">
            <h3 className="text-[8px] font-medium text-white">Zoom: Q3 Review Meeting</h3>
            <span className="text-[6px] text-slate-400">Duration: 47:23</span>
          </div>
          
          {/* Video Placeholder */}
          <div className="flex-1 bg-slate-800 flex items-center justify-center relative">
            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            {/* Playback bar */}
            <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-gradient-to-t from-slate-900">
              <div className="h-1 bg-slate-700 rounded-full">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: '35%' }} />
              </div>
              <div className="flex justify-between text-[6px] text-slate-400 mt-0.5">
                <span>16:42</span>
                <span>47:23</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transcript Panel with Sentiment Heat Map */}
        <div className="flex-1 flex flex-col">
          <div className="bg-slate-900 px-2 py-1 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-[8px] font-medium text-white">Transcript</h3>
            <span className="text-[6px] text-violet-400">AI Annotated</span>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {/* Transcript lines with sentiment colors */}
            <div className="p-1.5 space-y-1">
              <div className="px-1.5 py-1 rounded bg-slate-800/50 border-l-2 border-slate-600">
                <p className="text-[6px] text-slate-500">16:42 - CFO</p>
                <p className="text-[7px] text-slate-300">"Let's look at the Q3 numbers for a moment..."</p>
              </div>
              <div className="px-1.5 py-1 rounded bg-amber-500/10 border-l-2 border-amber-500">
                <p className="text-[6px] text-amber-400">16:45 - Controller</p>
                <p className="text-[7px] text-slate-300">"There's something I need to flag about the timing..."</p>
              </div>
              <div className="px-1.5 py-1 rounded bg-rose-500/10 border-l-2 border-rose-500">
                <p className="text-[6px] text-rose-400">16:47 - CFO (Elevated)</p>
                <p className="text-[7px] text-slate-300">"Wait, what do you mean the books were adjusted?"</p>
              </div>
              <div className="px-1.5 py-1 rounded bg-rose-500/20 border-l-2 border-rose-600">
                <p className="text-[6px] text-rose-400">16:48 - Controller (High Tension)</p>
                <p className="text-[7px] text-slate-300">"I'm just saying we need to discuss this offline..."</p>
              </div>
            </div>
          </div>

          {/* Sentiment Legend */}
          <div className="px-2 py-1 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2 text-[6px]">
            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-slate-600 rounded" />Neutral</span>
            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-amber-500 rounded" />Urgent</span>
            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-rose-500 rounded" />Hot</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// eDiscovery Defensibility Dashboard Screen (Static)
// eDiscovery Citation-Led Document Viewer (Static)
export function EDiscoveryDefensibilityStatic() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Mini Sidebar */}
      <div className="w-8 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-2">
        <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-cyan-500 rounded flex items-center justify-center mb-2">
          <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Document Panel */}
        <div className="w-3/5 flex flex-col border-r border-slate-800">
          {/* Header with tabs */}
          <div className="bg-slate-900 px-2 py-1 border-b border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] font-medium text-white truncate">RE: Q4 Revenue Discussion</span>
              <span className="px-1 py-0.5 bg-emerald-500/20 text-emerald-400 text-[6px] rounded">Verified</span>
            </div>
            <div className="flex items-center gap-0.5">
              {['Text', 'Native', 'Meta', 'Family'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-1.5 py-0.5 rounded text-[6px] ${
                    i === 0 ? 'bg-teal-500/20 text-teal-400' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Document Content */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="bg-white rounded-lg p-2 text-slate-900 text-[7px]">
              <div className="border-b border-slate-200 pb-1 mb-1.5 text-[6px]">
                <p><span className="font-medium">From:</span> J. Martinez</p>
                <p><span className="font-medium">To:</span> CFO, Controller</p>
                <p><span className="font-medium">Date:</span> Dec 12, 2024</p>
              </div>
              <div className="leading-relaxed">
                Per our discussion, I've attached the <span className="bg-amber-200 px-0.5 rounded cursor-pointer">revised recognition schedule</span> for board review.
                <br /><br />
                The timing adjustments should address the auditor's concerns about <span className="bg-violet-200 px-0.5 rounded cursor-pointer">Q4 cutoff</span>. Please confirm before I send to the <span className="bg-teal-200 px-0.5 rounded cursor-pointer">audit committee</span>.
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="flex-1 flex flex-col bg-slate-900/30">
          <div className="px-2 py-1 border-b border-slate-800 flex items-center gap-1">
            <svg className="w-3 h-3 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
            </svg>
            <span className="text-[7px] font-medium text-white">AI Insights</span>
            <span className="ml-auto px-1 py-0.5 bg-emerald-500/20 text-emerald-400 text-[5px] rounded">No Hallucination</span>
          </div>

          <div className="flex-1 overflow-y-auto p-1.5 space-y-1.5">
            {/* Confidence Meter */}
            <div className="bg-slate-800/50 rounded p-1.5 border border-slate-700">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[6px] text-slate-400">Relevance</span>
                <span className="text-[8px] font-bold text-emerald-400">94%</span>
              </div>
              <div className="h-1 bg-slate-700 rounded-full">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: '94%' }} />
              </div>
            </div>

            {/* AI Rationale */}
            <div className="bg-slate-800/50 rounded p-1.5 border border-slate-700">
              <span className="text-[6px] text-violet-400 font-medium">AI Rationale</span>
              <p className="text-[6px] text-slate-300 mt-0.5 leading-relaxed">
                Discusses <span className="text-amber-400">revenue recognition timing</span> with executive leadership. Direct relevance to investigation scope.
              </p>
            </div>

            {/* Live Citations */}
            <div className="bg-slate-800/50 rounded p-1.5 border border-slate-700">
              <span className="text-[6px] text-violet-400 font-medium">Citations</span>
              <div className="mt-1 space-y-1">
                {['"recognition schedule"', '"Q4 cutoff"', '"audit committee"'].map((cite, i) => (
                  <div key={i} className="flex items-center gap-1 p-1 bg-slate-900/50 rounded text-[6px]">
                    <span className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-rose-400' : 'bg-amber-400'}`} />
                    <span className="text-slate-300 font-mono truncate">{cite}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Classification */}
            <div className="bg-slate-800/50 rounded p-1.5 border border-slate-700">
              <span className="text-[6px] text-violet-400 font-medium">Suggested</span>
              <div className="mt-1 space-y-0.5 text-[6px]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Responsive</span>
                  <span className="text-emerald-400">Yes (94%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Privileged</span>
                  <span className="text-slate-400">No (98%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-1.5 border-t border-slate-800">
            <button className="w-full py-1 bg-teal-500 rounded text-[7px] font-bold text-slate-900">Accept & Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// eDiscovery Privilege Log Generator (Static)
export function EDiscoveryProductionStatic() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Mini Sidebar */}
      <div className="w-8 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-2">
        <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-cyan-500 rounded flex items-center justify-center mb-2">
          <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-2 py-1.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-[9px] font-semibold text-white">Privilege Log Generator</h1>
            <p className="text-[7px] text-slate-400">234 documents • AI descriptions ready</p>
          </div>
          <button className="px-1.5 py-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[7px] font-medium text-white">
            Regenerate
          </button>
        </div>

        {/* Progress */}
        <div className="px-2 py-1.5 bg-slate-900/50 border-b border-slate-800">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[7px] text-slate-400">Review Progress</span>
            <span className="text-[7px] text-teal-400">198/234 (85%)</span>
          </div>
          <div className="h-1 bg-slate-800 rounded-full">
            <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>

        {/* Batch Actions */}
        <div className="px-2 py-1 bg-slate-800/30 border-b border-slate-800 flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <input type="checkbox" className="w-2.5 h-2.5 rounded border-slate-600 bg-slate-800" />
            <span className="text-[6px] text-slate-400">3 selected</span>
          </div>
          <button className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[6px] rounded">✓ Approve</button>
          <button className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[6px] rounded">Edit</button>
        </div>

        {/* Document List */}
        <div className="flex-1 overflow-y-auto">
          {[
            { bates: 'NEXUS000234', title: 'Email: Legal Strategy', type: 'Attorney-Client', conf: 96, approved: true },
            { bates: 'NEXUS000456', title: 'Memo: Lit Hold Analysis', type: 'Work Product', conf: 94, approved: true },
            { bates: 'NEXUS000789', title: 'Draft: Board Notes', type: 'Attorney-Client', conf: 87, approved: false },
          ].map((doc, i) => (
            <div key={i} className={`px-2 py-1.5 border-b border-slate-800/50 ${!doc.approved ? 'bg-amber-500/5 border-l-2 border-l-amber-500' : ''}`}>
              <div className="flex items-start gap-1.5">
                <input type="checkbox" className="w-2.5 h-2.5 rounded border-slate-600 bg-slate-800 mt-0.5" defaultChecked={doc.approved} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-[6px] font-mono text-slate-500">{doc.bates}</span>
                    <span className={`px-1 py-0.5 text-[5px] rounded ${
                      doc.type === 'Attorney-Client' ? 'bg-violet-500/20 text-violet-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>{doc.type}</span>
                  </div>
                  <h4 className="text-[8px] font-medium text-white mb-1">{doc.title}</h4>
                  <div className="bg-slate-800/50 rounded p-1 border border-slate-700">
                    <div className="flex items-center gap-0.5 mb-0.5">
                      <svg className="w-2 h-2 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                      </svg>
                      <span className="text-[5px] text-violet-400">AI-Drafted ({doc.conf}%)</span>
                    </div>
                    <p className="text-[6px] text-slate-300 leading-relaxed">
                      Communication between counsel and executives regarding compliance matters.
                    </p>
                  </div>
                </div>
                <span className={`px-1 py-0.5 text-[5px] rounded ${
                  doc.approved ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {doc.approved ? '✓ Approved' : 'Review'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-900 px-2 py-1.5 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[6px]">
            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />198</span>
            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />36</span>
          </div>
          <button className="px-2 py-1 bg-teal-500 rounded text-[7px] font-bold text-slate-900">
            Generate Log
          </button>
        </div>
      </div>
    </div>
  )
}

// eDiscovery HITL Training Screen (Static)
export function EDiscoveryHITLStatic() {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Mini Sidebar */}
      <div className="w-8 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-2">
        <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-cyan-500 rounded flex items-center justify-center mb-2">
          <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-2 py-1.5 flex items-center justify-between border-b border-slate-800">
          <h1 className="text-[9px] font-semibold text-white">Human-in-the-Loop Training</h1>
          <span className="text-[7px] text-violet-400">47/500 samples</span>
        </div>

        {/* Training Interface */}
        <div className="flex-1 flex overflow-hidden">
          {/* Document */}
          <div className="w-1/2 flex flex-col border-r border-slate-800">
            <div className="bg-slate-900/50 px-2 py-1 border-b border-slate-800">
              <span className="text-[7px] text-slate-400">Sample #47</span>
            </div>
            <div className="flex-1 overflow-y-auto p-1.5">
              <div className="bg-white rounded p-2 text-slate-900 text-[7px]">
                <div className="border-b border-slate-200 pb-1 mb-1.5 text-[6px]">
                  <p><span className="font-medium">From:</span> Outside Counsel</p>
                  <p><span className="font-medium">To:</span> General Counsel</p>
                  <p><span className="font-medium">Re:</span> Legal Strategy Discussion</p>
                </div>
                <p className="leading-relaxed">
                  As we discussed in our <span className="bg-violet-200/60 px-0.5 rounded">privileged</span> call yesterday, I recommend we proceed with the settlement approach...
                </p>
              </div>
            </div>
          </div>

          {/* Training Controls */}
          <div className="flex-1 flex flex-col">
            <div className="bg-slate-900/50 px-2 py-1 border-b border-slate-800">
              <span className="text-[7px] text-slate-400">AI Classification</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-1.5 space-y-2">
              {/* AI Prediction */}
              <div className="bg-violet-500/10 rounded p-1.5 border border-violet-500/30">
                <div className="flex items-center gap-1 mb-0.5">
                  <svg className="w-2.5 h-2.5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                  </svg>
                  <span className="text-[7px] font-medium text-violet-400">AI says: Privileged</span>
                  <span className="ml-auto text-[7px] text-violet-300">94%</span>
                </div>
                <p className="text-[6px] text-slate-300">Detected: attorney communication, legal advice, settlement discussion</p>
              </div>

              {/* Reviewer Decision */}
              <div>
                <p className="text-[7px] text-slate-400 mb-1">Your Classification</p>
                <div className="grid grid-cols-2 gap-1">
                  <button className="p-1.5 bg-rose-500/20 border border-rose-500 rounded text-[8px] text-rose-400">Privileged</button>
                  <button className="p-1.5 bg-slate-800 border border-slate-700 rounded text-[8px] text-slate-400">Not Privileged</button>
                </div>
              </div>

              {/* Basis */}
              <div>
                <p className="text-[7px] text-slate-400 mb-1">Privilege Basis</p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-400 text-[7px] rounded border border-violet-500/30">Attorney-Client</span>
                  <span className="px-1.5 py-0.5 bg-slate-800 text-slate-400 text-[7px] rounded border border-slate-700">Work Product</span>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-slate-800/50 rounded p-1.5">
                <p className="text-[6px] text-slate-400 mb-0.5">Training Impact</p>
                <p className="text-[7px] text-emerald-400">Your decision will improve accuracy by ~0.3%</p>
              </div>
            </div>

            <div className="bg-slate-900 px-2 py-1.5 border-t border-slate-800">
              <button className="w-full py-1.5 bg-teal-500 rounded text-[8px] font-bold text-slate-900">
                Confirm & Next Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
