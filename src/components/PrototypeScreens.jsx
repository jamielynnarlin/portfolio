import { useState } from 'react'

// Shared styles
const colors = {
  primary: '#14B8A6', // Teal
  primaryDark: '#0D9488',
  secondary: '#3B82F6', // Blue
  background: '#F0FDF9',
  cardBg: '#FFFFFF',
  text: '#1F2937',
  textLight: '#6B7280',
  danger: '#EF4444',
  success: '#10B981',
}

// Phone Frame Component
export function PhoneFrame({ children }) {
  return (
    <div className="relative">
      {/* Phone outer frame - light silver */}
      <div className="relative bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-[3rem] p-[3px] shadow-2xl">
        {/* Phone inner bezel */}
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 rounded-[2.8rem] p-2">
          {/* Screen container */}
          <div 
            className="relative bg-white rounded-[2.4rem] overflow-hidden"
            style={{ width: '320px', height: '680px' }}
          >
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 z-50 h-11 flex items-center justify-between px-6 bg-transparent">
              <span className="text-sm font-semibold text-gray-800">9:41</span>
              <div className="absolute left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="1" y="14" width="3" height="6" rx="0.5"/>
                  <rect x="6" y="11" width="3" height="9" rx="0.5"/>
                  <rect x="11" y="7" width="3" height="13" rx="0.5"/>
                  <rect x="16" y="3" width="3" height="17" rx="0.5"/>
                </svg>
                <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-4c2.8 0 5.3 1.1 7.2 3l-1.4 1.4C16.1 16.9 14.2 16 12 16s-4.1.9-5.8 2.4L4.8 17c1.9-1.9 4.4-3 7.2-3zm0-4c4 0 7.6 1.6 10.2 4.2l-1.4 1.4C18.4 13.2 15.4 12 12 12s-6.4 1.2-8.8 3.6l-1.4-1.4C4.4 11.6 8 10 12 10z"/>
                </svg>
                <svg className="w-6 h-4 text-gray-800" viewBox="0 0 28 14" fill="currentColor">
                  <rect x="0" y="0" width="24" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="2" y="2" width="18" height="10" rx="1"/>
                  <rect x="25" y="4" width="2" height="6" rx="0.5"/>
                </svg>
              </div>
            </div>
            
            {/* Screen content */}
            <div className="h-full overflow-hidden">
              {children}
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Side buttons */}
      <div className="absolute left-0 top-28 w-[3px] h-8 bg-gray-300 rounded-l-sm" />
      <div className="absolute left-0 top-40 w-[3px] h-12 bg-gray-300 rounded-l-sm" />
      <div className="absolute left-0 top-56 w-[3px] h-12 bg-gray-300 rounded-l-sm" />
      <div className="absolute right-0 top-40 w-[3px] h-16 bg-gray-300 rounded-r-sm" />
    </div>
  )
}

// Profile Screen
export function ProfileScreen({ onEventClick }) {
  return (
    <div className="h-full flex flex-col" style={{ background: colors.background }}>
      {/* Header - Teal gradient */}
      <div 
        className="pt-14 pb-20 px-5 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)` }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-white/5 rounded-full" />
        
        {/* Menu & Edit */}
        <div className="flex justify-between items-center mb-4 relative z-10">
          <button className="p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-white font-medium">Edit</span>
        </div>
      </div>
      
      {/* Profile Card - overlapping header */}
      <div className="px-5 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-5">
          {/* Avatar */}
          <div className="flex justify-center -mt-14 mb-3">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" 
                alt="Maya Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name & Location */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Maya Chen</h2>
            <p className="text-gray-500 text-sm">Los Angeles, California</p>
          </div>
          
          {/* Bio */}
          <p className="text-center text-gray-600 text-sm mb-4">
            Event specialist. Music lover. Making every event memorable ✨
          </p>
          
          {/* Stats - Other staff members */}
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white -ml-2 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white -ml-2 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white -ml-2 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-500 ml-1">+12</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="px-5 mt-5">
        <div className="flex border-b border-gray-200">
          <button className="flex-1 pb-3 text-sm font-semibold text-teal-600 border-b-2 border-teal-600">
            UPCOMING EVENTS
          </button>
          <button className="flex-1 pb-3 text-sm font-medium text-gray-400">
            COMPLETED
          </button>
        </div>
      </div>
      
      {/* Events List */}
      <div className="flex-1 px-5 py-4 overflow-y-auto">
        {/* Event Card with Task Alert */}
        <button 
          onClick={onEventClick}
          className="w-full bg-white rounded-xl shadow-md overflow-hidden mb-3 text-left hover:shadow-lg transition-shadow"
        >
          <div className="h-28 bg-gradient-to-r from-blue-400 to-cyan-400 relative">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop" 
              alt="Event"
              className="w-full h-full object-cover mix-blend-overlay"
            />
            {/* Task Alert Badge */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              TASK ALERT
            </div>
          </div>
          <div className="p-3">
            <p className="text-xs text-teal-600 font-medium">Kick Off Event</p>
            <p className="font-semibold text-gray-900 text-sm">The Boat House Cruise</p>
            <p className="text-xs text-gray-500 mt-1">June 10 • 8-10pm CST</p>
          </div>
        </button>
        
        {/* Second Event */}
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden mb-3">
          <div className="h-28 bg-gradient-to-r from-orange-400 to-pink-400 relative">
            <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=200&fit=crop" 
              alt="Event"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="p-3">
            <p className="text-xs text-teal-600 font-medium">Kick Off Event</p>
            <p className="font-semibold text-gray-900 text-sm">Benny's Bar and Grill</p>
            <p className="text-xs text-gray-500 mt-1">Aug 9 • 8-10pm CST</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dashboard Screen - New home screen with quick stats
export function DashboardScreen({ onEventClick }) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header with greeting */}
      <div 
        className="pt-14 pb-8 px-5 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)` }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div>
            <p className="text-teal-100 text-xs">Good morning</p>
            <p className="text-white font-bold text-xl">Sam 👋</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="flex gap-3 relative z-10">
          <div className="flex-1 bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-xs text-teal-100">Upcoming</p>
          </div>
          <div className="flex-1 bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-xs text-teal-100">Available</p>
          </div>
          <div className="flex-1 bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-3xl font-bold text-white">$840</p>
            <p className="text-xs text-teal-100">This Month</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-4 overflow-y-auto -mt-4">
        {/* Next Event Card - Clickable */}
        <button 
          onClick={onEventClick}
          className="w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-4 border border-gray-100 text-left hover:shadow-xl transition-shadow"
        >
          <div className="bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-2 flex items-center justify-between">
            <span className="text-white text-xs font-bold">⚡ NEXT UP</span>
            <span className="text-white/80 text-xs">Tomorrow</span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-900 mb-1">Boat House Cruise</h3>
            <p className="text-gray-500 text-sm mb-3">Jun 10 • 6pm-11pm • Marina Del Rey</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-600 font-bold">5</span>
                </div>
                <span className="text-sm text-gray-500">tasks pending</span>
              </div>
              <span className="px-4 py-1.5 bg-teal-500 text-white text-sm font-semibold rounded-full">
                View Tasks
              </span>
            </div>
          </div>
        </button>

        {/* Section header */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-bold text-gray-900">Available Near You</h4>
          <span className="text-sm text-teal-500 font-medium">See all</span>
        </div>

        {/* Horizontal scroll events */}
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1">
          <div className="w-32 flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-3 text-white">
            <p className="text-xs opacity-80">Jun 15</p>
            <p className="font-bold mb-1 truncate">Tech Launch</p>
            <p className="text-sm font-semibold">$25/hr</p>
          </div>
          <div className="w-32 flex-shrink-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-3 text-white">
            <p className="text-xs opacity-80">Jun 18</p>
            <p className="font-bold mb-1 truncate">Music Fest</p>
            <p className="text-sm font-semibold">$30/hr</p>
          </div>
          <div className="w-32 flex-shrink-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-3 text-white">
            <p className="text-xs opacity-80">Jun 22</p>
            <p className="font-bold mb-1 truncate">Corporate</p>
            <p className="text-sm font-semibold">$28/hr</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-xs text-teal-500 font-medium mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Find</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Calendar</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Event Tasks Screen
export function EventTasksScreen({ onTaskClick, onBackClick }) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="pt-14 pb-4 px-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBackClick} className="p-1">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-900">YOUR EVENT TASKS</h1>
        </div>
        
        {/* Event Info */}
        <div className="flex items-center gap-3 mt-4 p-3 bg-gray-50 rounded-xl">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">EVENT NAME</p>
            <p className="text-xs text-gray-500">0/4 Tasks Complete</p>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </div>
      
      {/* Task Categories */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {/* Before - Clickable */}
        <button 
          onClick={onTaskClick}
          className="w-full bg-white rounded-xl p-4 shadow-sm text-left hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded mb-2">BEFORE</span>
              <p className="text-sm text-gray-500">0/2 Tasks Completed</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full border border-white overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
        
        {/* During */}
        <div className="w-full bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-2">DURING</span>
              <p className="text-sm text-gray-500">0/1 Tasks Completed</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Check Out */}
        <div className="w-full bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded mb-2">CHECK OUT</span>
              <p className="text-sm text-gray-500">0/1 Tasks Completed</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* After */}
        <div className="w-full bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded mb-2">AFTER</span>
              <p className="text-sm text-gray-500">0/1 Tasks Completed</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Expanded Tasks Screen
export function ExpandedTasksScreen({ onBackClick, onComplete, onTakePhoto, photoTaken }) {
  const [checkInCompleted, setCheckInCompleted] = useState(false)

  const tasks = [
    { id: 1, label: 'Check In', completed: checkInCompleted, hasPhoto: false },
    { id: 2, label: 'Take Photo', completed: photoTaken, hasPhoto: photoTaken },
  ]

  const handleTaskClick = (task) => {
    if (task.id === 1) {
      setCheckInCompleted(!checkInCompleted)
    } else if (task.id === 2 && !photoTaken) {
      onTakePhoto()
    }
  }

  const completedCount = (checkInCompleted ? 1 : 0) + (photoTaken ? 1 : 0)

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="pt-14 pb-4 px-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBackClick} className="p-1">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-900">YOUR EVENT TASKS</h1>
        </div>
        
        {/* Event Info */}
        <div className="flex items-center gap-3 mt-4 p-3 bg-gray-50 rounded-xl">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">EVENT NAME</p>
            <p className="text-xs text-gray-500">{completedCount}/4 Tasks Complete</p>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </div>
      
      {/* Task Categories */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {/* Before - Expanded */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded mb-2">BEFORE</span>
                <p className="text-sm text-gray-500">{completedCount}/2 Tasks Completed</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Task Items */}
          <div className="divide-y divide-gray-100">
            {tasks.map(task => (
              <button 
                key={task.id}
                onClick={() => handleTaskClick(task)}
                className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  task.completed 
                    ? 'bg-teal-500 border-teal-500' 
                    : 'border-gray-300'
                }`}>
                  {task.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`font-medium flex-1 text-left ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                  {task.label}
                </span>
                {/* Show thumbnail if photo was taken */}
                {task.hasPhoto && (
                  <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-teal-500">
                    <img 
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&h=100&fit=crop" 
                      alt="Captured" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {/* Show camera icon if photo not taken */}
                {task.id === 2 && !task.hasPhoto && (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* During */}
        <div className="w-full bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-2">DURING</span>
              <p className="text-sm text-gray-500">0/1 Tasks Completed</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        {/* Check Out */}
        <div className="w-full bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded mb-2">CHECK OUT</span>
              <p className="text-sm text-gray-500">0/1 Tasks Completed</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        {/* After */}
        <div className="w-full bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded mb-2">AFTER</span>
              <p className="text-sm text-gray-500">0/1 Tasks Completed</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// Camera Screen
export function CameraScreen({ onCapture, onCancel }) {
  const [isCapturing, setIsCapturing] = useState(false)
  const [showFlash, setShowFlash] = useState(false)
  const [captured, setCaptured] = useState(false)

  const handleCapture = () => {
    setIsCapturing(true)
    setShowFlash(true)
    
    // Flash effect
    setTimeout(() => setShowFlash(false), 150)
    
    // Show captured state
    setTimeout(() => {
      setCaptured(true)
      setIsCapturing(false)
    }, 300)
  }

  const handleUsePhoto = () => {
    onCapture()
  }

  const handleRetake = () => {
    setCaptured(false)
  }

  return (
    <div className="h-full flex flex-col bg-black relative">
      {/* Flash overlay */}
      {showFlash && (
        <div className="absolute inset-0 bg-white z-50 animate-pulse" />
      )}
      
      {/* Status bar area - dark */}
      <div className="h-11 bg-black" />
      
      {/* Camera viewfinder */}
      <div className="flex-1 relative overflow-hidden">
        {/* Event scene - what camera sees */}
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop"
          alt="Event scene"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
            captured ? 'scale-100' : 'scale-100'
          }`}
        />
        
        {/* Camera overlay UI */}
        {!captured && (
          <>
            {/* Grid lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/20" />
              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/20" />
              <div className="absolute top-1/3 left-0 right-0 h-px bg-white/20" />
              <div className="absolute bottom-1/3 left-0 right-0 h-px bg-white/20" />
            </div>
            
            {/* Focus indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-yellow-400 rounded-lg opacity-80" />
            
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
              <button onClick={onCancel} className="text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              </div>
            </div>
            
            {/* Task label */}
            <div className="absolute top-16 left-0 right-0 flex justify-center">
              <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium">📸 Take Event Photo</span>
              </div>
            </div>
          </>
        )}
        
        {/* Captured state overlay */}
        {captured && (
          <div className="absolute inset-0 flex flex-col">
            {/* Top bar */}
            <div className="p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
              <button onClick={handleRetake} className="text-white font-medium">
                Retake
              </button>
              <span className="text-white font-medium">Preview</span>
              <div className="w-16" />
            </div>
            
            {/* Spacer */}
            <div className="flex-1" />
            
            {/* Checkmark overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom controls */}
      <div className="bg-black px-6 py-8 pb-10">
        {!captured ? (
          <div className="flex items-center justify-center gap-12">
            {/* Gallery */}
            <div className="w-12 h-12 rounded-xl bg-gray-800 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop"
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Capture button */}
            <button 
              onClick={handleCapture}
              disabled={isCapturing}
              className={`w-20 h-20 rounded-full border-4 border-white flex items-center justify-center transition-all ${
                isCapturing ? 'scale-90' : 'hover:scale-105'
              }`}
            >
              <div className={`w-16 h-16 rounded-full bg-white transition-all ${
                isCapturing ? 'scale-75' : ''
              }`} />
            </button>
            
            {/* Switch camera */}
            <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        ) : (
          <button 
            onClick={handleUsePhoto}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-2xl text-lg hover:from-teal-400 hover:to-cyan-400 transition-all"
          >
            Use Photo
          </button>
        )}
      </div>
    </div>
  )
}

// Desktop Frame Component for web app prototypes
export function DesktopFrame({ children }) {
  return (
    <div className="relative">
      {/* Browser window frame */}
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Browser toolbar */}
        <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-3 border-b border-gray-700">
          {/* Window controls */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {/* URL bar */}
          <div className="flex-1 bg-gray-800 rounded-md px-3 py-1.5 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-400 text-xs">reviewai.app/project/sec-investigation</span>
          </div>
        </div>
        {/* Content area */}
        <div style={{ width: '900px', height: '560px' }} className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

// ============================================
// DOCUMENT REVIEW PROTOTYPE SCREENS
// ============================================

// Sample documents data for the prototype
const sampleDocuments = [
  { id: 1, title: "RE: Q4 Revenue Adjustments", type: "Email", from: "J. Martinez", to: "CFO", date: "Dec 12, 2024", tags: ["Revenue", "Q4 Timing", "CFO"], confidence: 94 },
  { id: 2, title: "Q4 Revenue Model v3.xlsx", type: "Spreadsheet", from: "CFO", date: "Dec 5, 2024", tags: ["Revenue", "Financial Model"], confidence: 97 },
  { id: 3, title: "Accounting Policy Memo", type: "Document", from: "Controller", date: "Dec 10, 2024", tags: ["Revenue", "Policy"], confidence: 91 },
  { id: 4, title: "FW: Auditor Questions", type: "Email", from: "External Audit", date: "Dec 8, 2024", tags: ["Audit", "Q4 Timing"], confidence: 72 },
  { id: 5, title: "Board Presentation Draft", type: "PowerPoint", from: "CFO", date: "Dec 14, 2024", tags: ["Executive", "Q4 Timing"], confidence: 88 },
]

// Screen 1: Document Queue - View all documents to review
export function DocReviewQueueScreen({ onDocumentClick, onAskAI }) {
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [docPanelOpen, setDocPanelOpen] = useState(false)
  
  const handleDocClick = (doc) => {
    setSelectedDoc(doc)
    setDocPanelOpen(true)
  }

  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Left Panel - Document Preview */}
      <div className={`${docPanelOpen ? 'w-1/2' : 'w-0'} transition-all duration-300 border-r border-slate-800 flex flex-col overflow-hidden`}>
        {docPanelOpen && selectedDoc && (
          <>
            {/* Document header */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setDocPanelOpen(false)}
                  className="p-1 hover:bg-slate-800 rounded"
                >
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-medium text-white">{selectedDoc.title}</span>
              </div>
              <button className="text-xs text-cyan-400 hover:text-cyan-300">Open in new tab</button>
            </div>
            {/* Document content */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="bg-white rounded-lg p-4 text-slate-900 min-h-full">
                <div className="border-b border-slate-200 pb-3 mb-3">
                  <p className="text-xs text-slate-500"><span className="font-medium">From:</span> {selectedDoc.from}</p>
                  {selectedDoc.to && <p className="text-xs text-slate-500"><span className="font-medium">To:</span> {selectedDoc.to}</p>}
                  <p className="text-xs text-slate-500"><span className="font-medium">Date:</span> {selectedDoc.date}</p>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Per our discussion, I've attached the revised <span className="bg-amber-200 px-0.5 rounded">recognition schedule</span> for board review.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mt-3">
                  The timing adjustments we discussed should address the auditor's concerns about <span className="bg-violet-200 px-0.5 rounded">Q4 cutoff</span>. Please confirm before I send to the audit committee.
                </p>
              </div>
            </div>
            {/* Document actions */}
            <div className="bg-slate-900 px-4 py-3 border-t border-slate-800">
              <button 
                onClick={() => onDocumentClick && onDocumentClick(selectedDoc)}
                className="w-full py-2 bg-cyan-500 rounded text-sm font-medium text-slate-900 hover:bg-cyan-400"
              >
                Open Full Review →
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right Panel - Document Queue */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div>
            <h2 className="text-sm font-semibold text-white">Review Queue</h2>
            <p className="text-xs text-slate-400">SEC Investigation - 2,341 documents pending</p>
          </div>
          <button 
            onClick={onAskAI}
            className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-xs font-medium text-white hover:from-violet-400 hover:to-indigo-400 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
            </svg>
            Ask AI to Filter
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800 flex items-center gap-2">
          <span className="text-xs text-slate-400">Filter by tag:</span>
          <div className="flex gap-1.5">
            <button className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded border border-amber-500/30">Revenue <span className="text-amber-500/70">312</span></button>
            <button className="px-2 py-1 bg-violet-500/20 text-violet-400 text-xs rounded border border-violet-500/30">Q4 Timing <span className="text-violet-500/70">201</span></button>
            <button className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">CFO <span className="text-slate-500">156</span></button>
            <button className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">Audit <span className="text-slate-500">89</span></button>
          </div>
        </div>

        {/* Document list */}
        <div className="flex-1 overflow-y-auto">
          {sampleDocuments.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => handleDocClick(doc)}
              className={`px-4 py-3 border-b border-slate-800/50 hover:bg-slate-800/50 cursor-pointer flex items-start gap-3 ${doc.confidence < 80 ? 'border-l-2 border-l-amber-500' : ''}`}
            >
              {/* Doc type icon */}
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center flex-shrink-0">
                {doc.type === "Email" && (
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                )}
                {doc.type === "Spreadsheet" && (
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h14zm-5 5v3h-4v-3h4zm-4 5h4v4H10v-4zm-5-5h3v3H5v-3zm0 5h3v4H5v-4zm14 4h-3v-4h3v4zm0-5h-3v-3h3v3z"/>
                  </svg>
                )}
                {doc.type === "Document" && (
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
                  </svg>
                )}
                {doc.type === "PowerPoint" && (
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9V9h2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                  </svg>
                )}
              </div>
              {/* Doc info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-white truncate">{doc.title}</h3>
                  <span className={`text-xs font-medium ${doc.confidence >= 90 ? 'text-emerald-400' : doc.confidence >= 80 ? 'text-cyan-400' : 'text-amber-400'}`}>
                    {doc.confidence}%
                  </span>
                </div>
                <p className="text-xs text-slate-500">{doc.type} • {doc.from} • {doc.date}</p>
                <div className="flex gap-1 mt-1.5">
                  {doc.tags.map((tag, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-slate-800 text-slate-400 text-[10px] rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer stats */}
        <div className="bg-slate-900 px-4 py-2 border-t border-slate-800 flex items-center justify-between">
          <div className="flex gap-4 text-xs">
            <span className="text-emerald-400">✓ 847 Verified</span>
            <span className="text-slate-400">⏳ 1,494 Pending</span>
          </div>
          <span className="text-xs text-slate-500">Click document to preview</span>
        </div>
      </div>
    </div>
  )
}

// Screen 2: AI Filter - Ask AI to narrow down documents
export function DocReviewAIFilterScreen({ onDocumentClick, onBack }) {
  const [selectedDoc, setSelectedDoc] = useState(null)

  const filteredDocs = sampleDocuments.filter(d => d.tags.includes("Revenue"))

  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Left Panel - Document Preview */}
      <div className={`${selectedDoc ? 'w-1/2' : 'w-0'} transition-all duration-300 border-r border-slate-800 flex flex-col overflow-hidden`}>
        {selectedDoc && (
          <>
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <button onClick={() => setSelectedDoc(null)} className="p-1 hover:bg-slate-800 rounded">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-medium text-white">{selectedDoc.title}</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="bg-white rounded-lg p-4 text-slate-900">
                <div className="border-b border-slate-200 pb-3 mb-3">
                  <p className="text-xs text-slate-500"><span className="font-medium">From:</span> {selectedDoc.from}</p>
                  <p className="text-xs text-slate-500"><span className="font-medium">Date:</span> {selectedDoc.date}</p>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Per our discussion, I've attached the revised <span className="bg-amber-200 px-0.5 rounded">recognition schedule</span> for board review.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mt-3">
                  The timing adjustments should address the auditor's concerns about <span className="bg-violet-200 px-0.5 rounded">Q4 cutoff</span>.
                </p>
              </div>
            </div>
            <div className="bg-slate-900 px-4 py-3 border-t border-slate-800">
              <button 
                onClick={() => onDocumentClick && onDocumentClick(selectedDoc)}
                className="w-full py-2 bg-cyan-500 rounded text-sm font-medium text-slate-900"
              >
                Review & Tag This Document →
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right Panel - AI Chat & Results */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="p-1 hover:bg-slate-800 rounded">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white">AI Assistant</span>
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-cyan-500/20 rounded-lg px-3 py-2 max-w-[70%]">
              <p className="text-sm text-cyan-100">Show me all documents tagged "Revenue Recognition"</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-sm text-slate-300 mb-2">
                  Found <span className="text-amber-400 font-medium">{filteredDocs.length} documents</span> tagged with "Revenue Recognition":
                </p>
                <div className="p-2 bg-slate-900/50 rounded border border-slate-700 mb-3">
                  <p className="text-xs text-slate-400 mb-1">Tag definition:</p>
                  <p className="text-xs text-slate-300 italic">"Documents discussing when/how revenue is recorded, timing of recognition, or changes to policies"</p>
                </div>
                {/* Results list */}
                <div className="space-y-1.5">
                  {filteredDocs.map((doc) => (
                    <div 
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc)}
                      className="flex items-center gap-2 p-2 bg-slate-900/50 rounded hover:bg-slate-800 cursor-pointer border border-slate-700/50"
                    >
                      <span className={`text-xs font-medium ${doc.confidence >= 90 ? 'text-emerald-400' : 'text-cyan-400'}`}>{doc.confidence}%</span>
                      <span className="text-sm text-white truncate flex-1">{doc.title}</span>
                      <span className="text-xs text-slate-500">{doc.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat input */}
        <div className="px-4 py-3 border-t border-slate-800">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask about tags, filter documents, or request analysis..." 
              className="flex-1 bg-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 border border-slate-700"
            />
            <button className="px-4 py-2 bg-cyan-500 rounded-lg text-sm font-medium text-slate-900">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Screen 3: Tag Document - Review and tag with evidence
export function DocReviewTagScreen({ document, onComplete, onBack }) {
  const [isVerified, setIsVerified] = useState(null)
  const doc = document || sampleDocuments[0]

  return (
    <div className="h-full flex bg-slate-950 text-white">
      {/* Left Panel - Document with highlighted evidence */}
      <div className="w-1/2 flex flex-col border-r border-slate-800">
        {/* Document header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="p-1 hover:bg-slate-800 rounded">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-medium text-white">{doc.title}</span>
          </div>
          <button className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Pop out
          </button>
        </div>

        {/* Document content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-white rounded-lg p-5 text-slate-900 min-h-full">
            {/* Email header */}
            <div className="border-b border-slate-200 pb-3 mb-4">
              <div className="text-sm text-slate-600 space-y-1">
                <p><span className="font-medium text-slate-700">From:</span> {doc.from}</p>
                <p><span className="font-medium text-slate-700">To:</span> <span className="bg-rose-100 px-1 rounded">CFO</span>, Controller</p>
                <p><span className="font-medium text-slate-700">Date:</span> {doc.date}</p>
                <p><span className="font-medium text-slate-700">Subject:</span> {doc.title}</p>
              </div>
            </div>

            {/* Email body with highlights */}
            <div className="text-sm text-slate-700 leading-relaxed space-y-3">
              <p>Per our discussion, I've attached the revised <span className="bg-amber-200 px-1 rounded cursor-pointer hover:bg-amber-300" title="Revenue Recognition">recognition schedule</span> for board review.</p>
              
              <p>The timing adjustments we discussed should address the auditor's concerns about <span className="bg-violet-200 px-1 rounded cursor-pointer hover:bg-violet-300" title="Q4 Timing">Q4 cutoff</span>. Please confirm before I send to the audit committee.</p>
              
              <p className="text-slate-400 pt-3 border-t border-slate-200 mt-4">---</p>
              <p className="text-slate-400 text-xs">Attachment: Q4_Revenue_Schedule_v3.xlsx</p>
            </div>
          </div>
        </div>

        {/* Evidence legend */}
        <div className="bg-slate-900 px-4 py-3 border-t border-slate-800">
          <p className="text-xs text-slate-400 font-medium mb-2">Highlighted Evidence</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-amber-200 rounded"></span>
              <span className="text-xs text-amber-400">Revenue Recognition</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-violet-200 rounded"></span>
              <span className="text-xs text-violet-400">Q4 Timing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-rose-200 rounded"></span>
              <span className="text-xs text-rose-400">CFO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Tagging Controls */}
      <div className="w-1/2 flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <h2 className="text-sm font-semibold text-white">Review & Tag</h2>
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${doc.confidence >= 90 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
            {doc.confidence}% AI Confidence
          </span>
        </div>

        {/* Tagging controls */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {/* AI Tags */}
          <div>
            <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">AI-Applied Tags</p>
            <div className="flex flex-wrap gap-2">
              {doc.tags.map((tag, i) => (
                <span key={i} className={`px-2.5 py-1 text-xs rounded-full border ${
                  tag === 'Revenue' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                  tag === 'Q4 Timing' ? 'bg-violet-500/20 text-violet-400 border-violet-500/30' :
                  tag === 'CFO' ? 'bg-rose-500/20 text-rose-400 border-rose-500/30' :
                  'bg-slate-800 text-slate-400 border-slate-700'
                }`}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Verify AI Classification */}
          <div>
            <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">Verify AI Classification</p>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setIsVerified(true)}
                className={`p-3 rounded-lg border text-center transition-all ${
                  isVerified === true 
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-emerald-500/50'
                }`}
              >
                <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-medium">Correct</span>
              </button>
              <button 
                onClick={() => setIsVerified(false)}
                className={`p-3 rounded-lg border text-center transition-all ${
                  isVerified === false 
                    ? 'bg-rose-500/20 border-rose-500 text-rose-400' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-rose-500/50'
                }`}
              >
                <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-xs font-medium">Incorrect</span>
              </button>
            </div>
          </div>

          {/* Priority */}
          <div>
            <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">Priority</p>
            <div className="flex gap-2">
              <button className="flex-1 p-2 bg-rose-500/20 border border-rose-500 rounded-lg text-center">
                <span className="text-xs font-medium text-rose-400">High</span>
              </button>
              <button className="flex-1 p-2 bg-slate-800 border border-slate-700 rounded-lg text-center">
                <span className="text-xs font-medium text-slate-400">Medium</span>
              </button>
              <button className="flex-1 p-2 bg-slate-800 border border-slate-700 rounded-lg text-center">
                <span className="text-xs font-medium text-slate-400">Low</span>
              </button>
            </div>
          </div>

          {/* Notes */}
          <div>
            <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">Notes for Expert</p>
            <textarea 
              className="w-full bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-500 border border-slate-700 resize-none"
              rows="2"
              placeholder="Add context for expert review..."
              defaultValue="Discusses Q4 timing adjustments - may relate to Doc #189"
            />
          </div>
        </div>

        {/* Action footer */}
        <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 space-y-2">
          <button 
            onClick={onComplete}
            className="w-full py-2.5 bg-cyan-500 rounded-lg text-sm font-bold text-slate-900 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Send to Expert Review
          </button>
          <button className="w-full py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-400">
            Skip - Review Later
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// EDISCOVERY FULL APPLICATION PROTOTYPE
// ============================================

// Sidebar Navigation Component
function EDiscoverySidebar({ activeView, onNavigate }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'review', label: 'Review', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'analyze', label: 'Analyze', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'production', label: 'Production', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' },
  ]

  return (
    <div className="w-14 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-3">
      {/* Logo */}
      <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
        </svg>
      </div>
      
      {/* Nav Items */}
      <div className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
              activeView === item.id 
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
      </div>

      {/* Settings */}
      <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-slate-800">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  )
}

// AI Chat Drawer Component
function AIChatDrawer({ isOpen, onClose }) {
  if (!isOpen) return null
  
  return (
    <div className="absolute right-0 top-0 bottom-0 w-80 bg-slate-900 border-l border-slate-700 flex flex-col z-50 shadow-2xl">
      <div className="px-4 py-3 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-white">AI Co-Pilot</span>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-300">How can I help with your review? Try:</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              <li>• "Find all emails mentioning Q4 revenue"</li>
              <li>• "Show privileged communications"</li>
              <li>• "Flag documents with high urgency"</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-3 border-t border-slate-700">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Ask AI to filter or analyze..." 
            className="flex-1 bg-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 border border-slate-700"
          />
          <button className="px-3 py-2 bg-teal-500 rounded-lg">
            <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Main eDiscovery Dashboard Screen
export function EDiscoveryDashboard({ onNavigate, onOpenAI }) {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="dashboard" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">AI Co-Pilot Dashboard</h1>
            <p className="text-[10px] text-slate-400">Project Nexus - SEC Investigation</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] rounded">SOC 2 Compliant</span>
            <button 
              onClick={onOpenAI}
              className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[10px] font-medium text-white flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              AI Co-Pilot
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="grid grid-cols-3 gap-3">
            {/* Review Gap Analysis */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[10px] font-medium text-slate-400">Review Gap Analysis</h3>
                <span className="text-[9px] text-slate-500">Last 30 days</span>
              </div>
              <div className="text-xl font-bold text-emerald-400 mb-1">$2.1M SAVED</div>
              <div className="h-16 flex items-end gap-1">
                {[40, 55, 45, 70, 85, 90, 75, 88, 92, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[9px] text-slate-500">
                <div>
                  <p className="text-slate-400">Precision</p>
                  <p className="text-emerald-400 font-semibold">96%</p>
                </div>
                <div>
                  <p className="text-slate-400">Recall</p>
                  <p className="text-emerald-400 font-semibold">89%</p>
                </div>
              </div>
            </div>

            {/* Sentiment Clusters */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <h3 className="text-[10px] font-medium text-slate-400 mb-2">Sentiment & Context Clusters</h3>
              <div className="h-24 relative">
                {/* Scatter plot visualization */}
                <div className="absolute w-2 h-2 bg-emerald-400 rounded-full" style={{ top: '20%', left: '30%' }} />
                <div className="absolute w-3 h-3 bg-emerald-400/70 rounded-full" style={{ top: '35%', left: '45%' }} />
                <div className="absolute w-2.5 h-2.5 bg-cyan-400 rounded-full" style={{ top: '50%', left: '60%' }} />
                <div className="absolute w-2 h-2 bg-amber-400 rounded-full" style={{ top: '25%', left: '70%' }} />
                <div className="absolute w-3.5 h-3.5 bg-rose-400 rounded-full" style={{ top: '60%', left: '25%' }} />
                <div className="absolute w-2 h-2 bg-violet-400 rounded-full" style={{ top: '70%', left: '50%' }} />
                <div className="absolute w-2.5 h-2.5 bg-cyan-400/60 rounded-full" style={{ top: '45%', left: '80%' }} />
              </div>
              <div className="flex gap-2 mt-2 text-[8px]">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-400 rounded-full" />Neutral</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-400 rounded-full" />Urgent</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-rose-400 rounded-full" />Hot</span>
              </div>
            </div>

            {/* Hot Doc Maker */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <h3 className="text-[10px] font-medium text-slate-400 mb-2">Hot Doc Quick Tag</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 bg-rose-500/20 text-rose-400 text-[9px] rounded border border-rose-500/30">Hot Document</button>
                  <button className="px-2 py-1 bg-amber-500/20 text-amber-400 text-[9px] rounded border border-amber-500/30">Key Evidence</button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 bg-violet-500/20 text-violet-400 text-[9px] rounded border border-violet-500/30">Privileged</button>
                  <button className="px-2 py-1 bg-slate-700 text-slate-400 text-[9px] rounded border border-slate-600">Responsive</button>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800">
                <p className="text-[9px] text-slate-500 mb-1">Quick Actions</p>
                <button className="text-[9px] text-teal-400 hover:text-teal-300">+ Create Custom Tag</button>
              </div>
            </div>

            {/* Review Progress */}
            <div className="col-span-2 bg-slate-900 rounded-lg p-3 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[10px] font-medium text-slate-400">Review Progress</h3>
                <span className="text-[10px] text-teal-400">1,847 / 2,341 reviewed (79%)</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" style={{ width: '79%' }} />
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-slate-800/50 rounded p-2">
                  <p className="text-lg font-bold text-white">48,291</p>
                  <p className="text-[9px] text-slate-500">Total Docs</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2">
                  <p className="text-lg font-bold text-emerald-400">43,421</p>
                  <p className="text-[9px] text-slate-500">AI Culled</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2">
                  <p className="text-lg font-bold text-amber-400">2,341</p>
                  <p className="text-[9px] text-slate-500">For Review</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2">
                  <p className="text-lg font-bold text-rose-400">127</p>
                  <p className="text-[9px] text-slate-500">Hot Docs</p>
                </div>
              </div>
            </div>

            {/* AI Confidence */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <h3 className="text-[10px] font-medium text-slate-400 mb-2">Calibrated Confidence</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-slate-400">High (90%+)</span>
                    <span className="text-emerald-400">1,456</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-slate-400">Medium (70-89%)</span>
                    <span className="text-amber-400">312</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '17%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-slate-400">Low (&lt;70%)</span>
                    <span className="text-rose-400">79</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-400 rounded-full" style={{ width: '5%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Review Queue Screen
export function EDiscoveryReviewQueue({ onNavigate, onOpenAI, onSelectDocument }) {
  const [selectedFilter, setSelectedFilter] = useState('all')
  
  const documents = [
    { id: 1, title: "RE: Q4 Revenue Discussion", type: "email", from: "J. Martinez", date: "Dec 12", confidence: 94, tags: ["Revenue", "Q4"], status: "pending", privilege: "Not Privileged", responsive: "Responsive" },
    { id: 2, title: "Board Meeting Recording", type: "video", from: "CFO Office", date: "Dec 10", confidence: 91, tags: ["Executive", "Meeting"], status: "pending", privilege: "Privileged", responsive: "Responsive" },
    { id: 3, title: "Slack: Finance Team Chat", type: "chat", from: "#finance-team", date: "Dec 11", confidence: 87, tags: ["Internal", "Revenue"], status: "pending", privilege: "Not Privileged", responsive: "Responsive" },
    { id: 4, title: "Quarterly Report Draft.pdf", type: "document", from: "Controller", date: "Dec 8", confidence: 72, tags: ["Financial", "Draft"], status: "flagged", privilege: "Work Product", responsive: "Needs Review" },
    { id: 5, title: "Zoom Call: Auditor Check-in", type: "video", from: "External Audit", date: "Dec 5", confidence: 96, tags: ["Audit", "External"], status: "reviewed", privilege: "Not Privileged", responsive: "Responsive" },
  ]

  const getTypeIcon = (type) => {
    switch(type) {
      case 'email': return 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
      case 'video': return 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
      case 'chat': return 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
      case 'document': return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      default: return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    }
  }

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="review" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">Review Queue</h1>
            <p className="text-[10px] text-slate-400">494 documents pending review</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={onOpenAI}
              className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[10px] font-medium text-white flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              AI Cull
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800 flex items-center gap-2">
          <span className="text-[10px] text-slate-500">Filter:</span>
          {['all', 'email', 'video', 'chat', 'document'].map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-2 py-1 text-[10px] rounded ${selectedFilter === f ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
          <div className="flex-1" />
          <span className="text-[10px] text-slate-500">Sort: Confidence ↓</span>
        </div>

        {/* Document List */}
        <div className="flex-1 overflow-y-auto">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => onSelectDocument && onSelectDocument(doc)}
              className={`px-4 py-2.5 border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer flex items-center gap-3 ${doc.confidence < 75 ? 'border-l-2 border-l-amber-500' : ''}`}
            >
              {/* Type Icon */}
              <div className={`w-8 h-8 rounded flex items-center justify-center ${
                doc.type === 'video' ? 'bg-purple-500/20' : 
                doc.type === 'chat' ? 'bg-blue-500/20' : 
                doc.type === 'email' ? 'bg-cyan-500/20' : 'bg-slate-700'
              }`}>
                <svg className={`w-4 h-4 ${
                  doc.type === 'video' ? 'text-purple-400' : 
                  doc.type === 'chat' ? 'text-blue-400' : 
                  doc.type === 'email' ? 'text-cyan-400' : 'text-slate-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={getTypeIcon(doc.type)} />
                </svg>
              </div>

              {/* Doc Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-[11px] font-medium text-white truncate">{doc.title}</h4>
                  <span className={`text-[9px] font-medium ${doc.confidence >= 90 ? 'text-emerald-400' : doc.confidence >= 75 ? 'text-cyan-400' : 'text-amber-400'}`}>
                    {doc.confidence}%
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[9px] text-slate-500">{doc.from} • {doc.date}</span>
                  <div className="flex gap-1">
                    {doc.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-1.5 py-0.5 bg-slate-800 text-slate-400 text-[8px] rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Classifications */}
              <div className="flex gap-2 text-[9px]">
                <span className={`px-2 py-0.5 rounded ${
                  doc.privilege === 'Privileged' ? 'bg-rose-500/20 text-rose-400' :
                  doc.privilege === 'Work Product' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-slate-700 text-slate-400'
                }`}>{doc.privilege}</span>
                <span className={`px-2 py-0.5 rounded ${
                  doc.responsive === 'Responsive' ? 'bg-emerald-500/20 text-emerald-400' :
                  'bg-amber-500/20 text-amber-400'
                }`}>{doc.responsive}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Document Review Screen with split panel
export function EDiscoveryDocumentReview({ document, onNavigate, onOpenAI, onBack, onComplete }) {
  const [isPopped, setIsPopped] = useState(false)
  const doc = document || { 
    id: 1, 
    title: "RE: Q4 Revenue Discussion", 
    type: "email", 
    from: "J. Martinez", 
    to: "CFO, Controller",
    date: "Dec 12, 2024 3:47 PM",
    confidence: 94, 
    tags: ["Revenue", "Q4", "Executive"], 
    privilege: "Not Privileged", 
    responsive: "Responsive",
    content: `Per our discussion, I've attached the revised recognition schedule for board review.

The timing adjustments we discussed should address the auditor's concerns about Q4 cutoff. Please confirm before I send to the audit committee.

Best regards,
J. Martinez`
  }

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="review" onNavigate={onNavigate} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Document Panel (Left) */}
        <div className={`${isPopped ? 'hidden' : 'w-1/2'} flex flex-col border-r border-slate-800`}>
          <div className="bg-slate-900 px-3 py-2 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <button onClick={onBack} className="p-1 hover:bg-slate-800 rounded">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-[11px] font-medium text-white truncate">{doc.title}</span>
            </div>
            <button 
              onClick={() => setIsPopped(true)}
              className="text-[10px] text-teal-400 hover:text-teal-300 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Pop out
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3">
            <div className="bg-white rounded-lg p-4 text-slate-900 min-h-full text-[11px]">
              <div className="border-b border-slate-200 pb-2 mb-3">
                <p><span className="font-medium">From:</span> {doc.from}</p>
                <p><span className="font-medium">To:</span> <span className="bg-rose-100 px-1 rounded">{doc.to || 'CFO'}</span></p>
                <p><span className="font-medium">Date:</span> {doc.date}</p>
                <p><span className="font-medium">Subject:</span> {doc.title}</p>
              </div>
              <div className="whitespace-pre-wrap leading-relaxed">
                Per our discussion, I've attached the revised <span className="bg-amber-200 px-0.5 rounded">recognition schedule</span> for board review.
                
                The timing adjustments we discussed should address the auditor's concerns about <span className="bg-violet-200 px-0.5 rounded">Q4 cutoff</span>. Please confirm before I send to the audit committee.
              </div>
            </div>
          </div>

          {/* Evidence Legend */}
          <div className="bg-slate-900 px-3 py-2 border-t border-slate-800">
            <p className="text-[9px] text-slate-500 mb-1">Highlighted Evidence</p>
            <div className="flex gap-3 text-[9px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-200 rounded" />Revenue</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-violet-200 rounded" />Q4 Timing</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-rose-200 rounded" />Executive</span>
            </div>
          </div>
        </div>

        {/* Controls Panel (Right) */}
        <div className="flex-1 flex flex-col">
          <div className="bg-slate-900 px-3 py-2 flex items-center justify-between border-b border-slate-800">
            <h2 className="text-[11px] font-semibold text-white">Review & Tag</h2>
            <div className="flex items-center gap-2">
              <span className={`text-[9px] font-medium px-2 py-0.5 rounded ${doc.confidence >= 90 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                {doc.confidence}% Confidence
              </span>
              <button onClick={onOpenAI} className="p-1 bg-violet-500/20 rounded hover:bg-violet-500/30">
                <svg className="w-3.5 h-3.5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {/* AI Tags */}
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wide mb-1.5">AI-Suggested Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {doc.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-teal-500/20 text-teal-400 text-[10px] rounded border border-teal-500/30">{tag}</span>
                ))}
                <button className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] rounded border border-slate-700">+ Add</button>
              </div>
            </div>

            {/* Privilege */}
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wide mb-1.5">Privilege Classification</p>
              <div className="grid grid-cols-3 gap-1.5">
                <button className="p-2 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400 hover:border-rose-500/50">Privileged</button>
                <button className="p-2 bg-amber-500/20 border border-amber-500 rounded text-[10px] text-amber-400">Work Product</button>
                <button className="p-2 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400 hover:border-emerald-500/50">Not Privileged</button>
              </div>
            </div>

            {/* Responsiveness */}
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wide mb-1.5">Responsiveness</p>
              <div className="grid grid-cols-3 gap-1.5">
                <button className="p-2 bg-emerald-500/20 border border-emerald-500 rounded text-[10px] text-emerald-400">Responsive</button>
                <button className="p-2 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">Not Responsive</button>
                <button className="p-2 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">Needs Review</button>
              </div>
            </div>

            {/* Priority */}
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wide mb-1.5">Priority</p>
              <div className="flex gap-1.5">
                <button className="flex-1 p-2 bg-rose-500/20 border border-rose-500 rounded text-[10px] text-rose-400">Hot Doc</button>
                <button className="flex-1 p-2 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">Key</button>
                <button className="flex-1 p-2 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">Normal</button>
              </div>
            </div>

            {/* AI Justification */}
            <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700">
              <p className="text-[9px] text-violet-400 font-medium mb-1">AI Insight & Justification</p>
              <p className="text-[10px] text-slate-300 leading-relaxed">
                This document discusses <span className="text-amber-400">revenue recognition timing</span> for Q4 with direct communication to executive leadership. Flagged for potential relevance to investigation scope.
              </p>
            </div>

            {/* Notes */}
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wide mb-1.5">Reviewer Notes</p>
              <textarea 
                className="w-full bg-slate-800 rounded px-2 py-1.5 text-[10px] text-slate-300 placeholder-slate-500 border border-slate-700 resize-none"
                rows="2"
                placeholder="Add notes for production..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="bg-slate-900 px-3 py-2.5 border-t border-slate-800 space-y-1.5">
            <button 
              onClick={onComplete}
              className="w-full py-2 bg-teal-500 rounded text-[11px] font-bold text-slate-900 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Complete Review
            </button>
            <div className="flex gap-1.5">
              <button className="flex-1 py-1.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">Skip</button>
              <button className="flex-1 py-1.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">Flag for QC</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Production Screen
export function EDiscoveryProduction({ onNavigate, onOpenAI }) {
  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="production" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">Production & Redaction</h1>
            <p className="text-[10px] text-slate-400">127 documents ready for production</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-emerald-500 rounded text-[10px] font-medium text-slate-900 flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Export Production
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Document Preview */}
          <div className="w-1/2 flex flex-col border-r border-slate-800">
            <div className="bg-slate-900/50 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-400">Document Preview</span>
              <span className="text-[10px] text-teal-400">1 of 127</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
              <div className="bg-white rounded-lg p-4 text-slate-900 min-h-full text-[11px]">
                <div className="border-b border-slate-200 pb-2 mb-3">
                  <p><span className="font-medium">From:</span> J. Martinez</p>
                  <p><span className="font-medium">To:</span> <span className="bg-black text-white px-1 rounded text-[9px]">REDACTED</span></p>
                  <p><span className="font-medium">Date:</span> Dec 12, 2024</p>
                </div>
                <div className="leading-relaxed">
                  Per our discussion, I've attached the revised recognition schedule for board review.
                  
                  Please contact me at <span className="bg-black text-white px-1 rounded text-[9px]">REDACTED</span> if you have questions.
                </div>
              </div>
            </div>
          </div>

          {/* Production Controls */}
          <div className="flex-1 flex flex-col">
            <div className="bg-slate-900/50 px-3 py-2 border-b border-slate-800">
              <span className="text-[10px] text-slate-400">Auto-Redaction Settings</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-800/50 rounded p-2 text-center">
                  <p className="text-lg font-bold text-white">127</p>
                  <p className="text-[9px] text-slate-500">Total Docs</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2 text-center">
                  <p className="text-lg font-bold text-amber-400">43</p>
                  <p className="text-[9px] text-slate-500">Redactions</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2 text-center">
                  <p className="text-lg font-bold text-emerald-400">100%</p>
                  <p className="text-[9px] text-slate-500">Compliant</p>
                </div>
              </div>

              {/* Entity Extraction */}
              <div>
                <p className="text-[9px] text-slate-500 uppercase tracking-wide mb-2">System Entity Extraction</p>
                <div className="space-y-1.5">
                  {[
                    { label: 'Social Security Numbers', count: 12, enabled: true },
                    { label: 'Phone Numbers', count: 28, enabled: true },
                    { label: 'Email Addresses', count: 45, enabled: false },
                    { label: 'Bank Accounts', count: 3, enabled: true },
                  ].map((entity, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded px-2 py-1.5">
                      <span className="text-[10px] text-slate-300">{entity.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-slate-500">{entity.count} found</span>
                        <div className={`w-8 h-4 rounded-full p-0.5 ${entity.enabled ? 'bg-teal-500' : 'bg-slate-700'}`}>
                          <div className={`w-3 h-3 rounded-full bg-white transition-transform ${entity.enabled ? 'translate-x-4' : ''}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Set */}
              <div>
                <p className="text-[9px] text-slate-500 uppercase tracking-wide mb-2">Production Set</p>
                <div className="bg-slate-800/50 rounded p-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white font-medium">NEXUS_PROD_001</span>
                    <span className="text-[9px] text-emerald-400">Ready</span>
                  </div>
                  <div className="text-[9px] text-slate-400">
                    <p>Format: PDF with load file</p>
                    <p>Bates Range: NEXUS000001 - NEXUS000127</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 px-3 py-2.5 border-t border-slate-800">
              <button className="w-full py-2 bg-teal-500 rounded text-[11px] font-bold text-slate-900">
                Generate Production
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main eDiscovery App Container
export function EDiscoveryApp() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState(null)

  const handleNavigate = (view) => {
    setCurrentView(view)
    setSelectedDocument(null)
  }

  const handleSelectDocument = (doc) => {
    setSelectedDocument(doc)
    setCurrentView('document')
  }

  return (
    <div className="h-full relative">
      {currentView === 'dashboard' && (
        <EDiscoveryDashboard 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)} 
        />
      )}
      {currentView === 'review' && (
        <EDiscoveryReviewQueue 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
          onSelectDocument={handleSelectDocument}
        />
      )}
      {currentView === 'document' && (
        <EDiscoveryDocumentReview 
          document={selectedDocument}
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
          onBack={() => setCurrentView('review')}
          onComplete={() => setCurrentView('review')}
        />
      )}
      {currentView === 'analyze' && (
        <EDiscoveryDashboard 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)} 
        />
      )}
      {currentView === 'production' && (
        <EDiscoveryProduction 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)} 
        />
      )}
      
      <AIChatDrawer isOpen={aiDrawerOpen} onClose={() => setAiDrawerOpen(false)} />
    </div>
  )
}
