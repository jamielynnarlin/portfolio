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

// Sidebar Navigation Component - 2026 eDiscovery
function EDiscoverySidebar({ activeView, onNavigate }) {
  const navItems = [
    { id: 'eca', label: 'Case Assessment', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'protocol', label: 'Protocol Builder', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { id: 'review', label: 'Document Review', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'privilege', label: 'Privilege Log', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
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

// Screen 1: Early Case Assessment (ECA) Dashboard with Concept Map
export function EDiscoveryDashboard({ onNavigate, onOpenAI }) {
  // Concept clusters for the visualization
  const conceptClusters = [
    { id: 1, label: 'Financial Disclosures', size: 45, x: 25, y: 30, color: 'from-teal-400 to-cyan-400', docs: 1234 },
    { id: 2, label: 'Executive Comms', size: 35, x: 55, y: 25, color: 'from-violet-400 to-indigo-400', docs: 892 },
    { id: 3, label: 'Audit Reports', size: 28, x: 70, y: 55, color: 'from-amber-400 to-orange-400', docs: 456 },
    { id: 4, label: 'Legal Holds', size: 22, x: 20, y: 65, color: 'from-rose-400 to-pink-400', docs: 234 },
    { id: 5, label: 'Board Minutes', size: 18, x: 45, y: 70, color: 'from-emerald-400 to-green-400', docs: 189 },
  ]

  const entities = [
    { name: 'John Mitchell', type: 'Person', mentions: 847, role: 'CFO' },
    { name: 'Sarah Chen', type: 'Person', mentions: 623, role: 'General Counsel' },
    { name: 'Acme Holdings', type: 'Org', mentions: 1243, role: 'Parent Company' },
    { name: 'Q4 Revenue Report', type: 'Document', mentions: 456, role: 'Key Evidence' },
  ]

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="eca" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">Early Case Assessment</h1>
            <p className="text-[10px] text-slate-400">Project Nexus - SEC Investigation • 48,291 documents</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded text-[10px]">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-slate-300">Analysis Complete</span>
            </div>
            <button 
              onClick={onOpenAI}
              className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[10px] font-medium text-white flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              Ask AI
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left: Concept Map */}
          <div className="flex-1 p-3 flex flex-col">
            <div className="bg-slate-900 rounded-lg border border-slate-800 flex-1 flex flex-col">
              <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-[11px] font-medium text-white">Document Concept Map</h3>
                  <span className="px-1.5 py-0.5 bg-teal-500/20 text-teal-400 text-[9px] rounded">AI-Generated</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-slate-500">
                  <button className="px-2 py-1 bg-slate-800 rounded hover:bg-slate-700">Zoom</button>
                  <button className="px-2 py-1 bg-slate-800 rounded hover:bg-slate-700">Filter</button>
                </div>
              </div>
              
              {/* Concept Map Visualization */}
              <div className="flex-1 relative p-4">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="25%" y1="30%" x2="55%" y2="25%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                  <line x1="55%" y1="25%" x2="70%" y2="55%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                  <line x1="25%" y1="30%" x2="20%" y2="65%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                  <line x1="45%" y1="70%" x2="20%" y2="65%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                  <line x1="55%" y1="25%" x2="45%" y2="70%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                </svg>
                
                {/* Concept clusters */}
                {conceptClusters.map((cluster) => (
                  <div
                    key={cluster.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
                  >
                    <div 
                      className={`bg-gradient-to-br ${cluster.color} rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110`}
                      style={{ width: `${cluster.size}px`, height: `${cluster.size}px` }}
                    >
                      <span className="text-[8px] font-bold text-slate-900">{cluster.docs}</span>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap">
                      <span className="text-[9px] text-slate-400 group-hover:text-white">{cluster.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Timeline */}
            <div className="mt-3 bg-slate-900 rounded-lg border border-slate-800 p-3">
              <h3 className="text-[10px] font-medium text-slate-400 mb-2">Sentiment Timeline</h3>
              <div className="h-12 flex items-end gap-0.5">
                {Array.from({ length: 30 }).map((_, i) => {
                  const height = 20 + Math.random() * 60
                  const sentiment = Math.random()
                  const color = sentiment > 0.7 ? 'bg-rose-400' : sentiment > 0.4 ? 'bg-amber-400' : 'bg-emerald-400'
                  return <div key={i} className={`flex-1 ${color} rounded-t opacity-70`} style={{ height: `${height}%` }} />
                })}
              </div>
              <div className="flex justify-between mt-1 text-[8px] text-slate-500">
                <span>Jan 2024</span>
                <span className="text-rose-400">Peak Activity: Mar 15</span>
                <span>Jun 2024</span>
              </div>
            </div>
          </div>

          {/* Right: Entity Panel */}
          <div className="w-64 border-l border-slate-800 bg-slate-900/50 flex flex-col">
            <div className="px-3 py-2 border-b border-slate-800">
              <h3 className="text-[11px] font-medium text-white">Key Entities Extracted</h3>
              <p className="text-[9px] text-slate-500">AI-identified from document corpus</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {entities.map((entity, i) => (
                <div key={i} className="bg-slate-800/50 rounded-lg p-2 hover:bg-slate-800 cursor-pointer transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-medium text-white">{entity.name}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded ${
                      entity.type === 'Person' ? 'bg-violet-500/20 text-violet-400' :
                      entity.type === 'Org' ? 'bg-teal-500/20 text-teal-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>{entity.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-slate-500">{entity.role}</span>
                    <span className="text-slate-400">{entity.mentions} mentions</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="p-3 border-t border-slate-800">
              <h4 className="text-[9px] font-medium text-slate-400 mb-2">Case Summary</h4>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[9px]">
                  <span className="text-slate-500">Est. Relevant Docs</span>
                  <span className="text-emerald-400 font-medium">~4,200</span>
                </div>
                <div className="flex justify-between text-[9px]">
                  <span className="text-slate-500">Privileged (Est.)</span>
                  <span className="text-amber-400 font-medium">~320</span>
                </div>
                <div className="flex justify-between text-[9px]">
                  <span className="text-slate-500">Hot Documents</span>
                  <span className="text-rose-400 font-medium">127</span>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('protocol')}
                className="w-full mt-3 px-3 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 text-[10px] font-medium rounded transition-colors"
              >
                Build Review Protocol →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Screen 2: Protocol Builder - Natural Language Review Instructions
export function EDiscoveryReviewQueue({ onNavigate, onOpenAI }) {
  const [protocolText, setProtocolText] = useState(`Find all documents that discuss revenue recognition timing, Q4 financial results, or communications with external auditors.\n\nExclude routine operational emails unless they mention "board", "audit committee", or any executive by name.\n\nFlag as privileged any communication involving legal counsel or marked "Attorney-Client Privilege".`)

  const suggestedCriteria = [
    { id: 1, text: 'Include SEC filing references', confidence: 94 },
    { id: 2, text: 'Flag merger discussion mentions', confidence: 89 },
    { id: 3, text: 'Exclude marketing newsletters', confidence: 96 },
    { id: 4, text: 'Prioritize CFO/CEO communications', confidence: 91 },
  ]

  const testResults = {
    matched: 4847,
    privileged: 234,
    excluded: 38291,
    flagged: 127,
    processing: false
  }

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="protocol" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">Protocol Builder</h1>
            <p className="text-[10px] text-slate-400">Define review criteria in natural language</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-[10px] rounded flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Auto-saved
            </span>
            <button 
              onClick={onOpenAI}
              className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[10px] font-medium text-white flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              AI Assist
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Protocol Editor */}
          <div className="flex-1 flex flex-col p-4">
            <div className="bg-slate-900 rounded-lg border border-slate-800 flex-1 flex flex-col">
              <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-[11px] font-medium text-white">Review Instructions</h3>
                  <p className="text-[9px] text-slate-500">Describe what documents to find, include, exclude, and flag</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 bg-slate-800 rounded text-[9px] text-slate-400 hover:text-white">
                    Load Template
                  </button>
                  <button className="px-2 py-1 bg-slate-800 rounded text-[9px] text-slate-400 hover:text-white">
                    History
                  </button>
                </div>
              </div>
              
              <div className="flex-1 p-4">
                <textarea
                  value={protocolText}
                  onChange={(e) => setProtocolText(e.target.value)}
                  className="w-full h-full bg-slate-950 rounded-lg p-4 text-[12px] text-slate-200 leading-relaxed border border-slate-800 focus:border-teal-500/50 focus:outline-none resize-none font-mono"
                  placeholder="Describe your review criteria in plain English..."
                />
              </div>

              {/* Action Bar */}
              <div className="px-4 py-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] text-slate-500">Words: {protocolText.split(/\s+/).length}</span>
                  <span className="text-[9px] text-slate-500">|</span>
                  <span className="text-[9px] text-violet-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                    </svg>
                    AI parsing active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-slate-800 rounded text-[10px] text-slate-300 hover:bg-slate-700">
                    Test on Subset
                  </button>
                  <button 
                    onClick={() => onNavigate('review')}
                    className="px-4 py-2 bg-teal-500 rounded text-[10px] font-medium text-slate-900"
                  >
                    Apply to Full Corpus →
                  </button>
                </div>
              </div>
            </div>

            {/* Test Results Preview */}
            <div className="mt-3 bg-slate-900 rounded-lg border border-slate-800 p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[10px] font-medium text-white">Test Results Preview</h4>
                <span className="text-[9px] text-slate-500">Based on 1,000 doc sample</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-slate-800/50 rounded p-2 text-center">
                  <p className="text-lg font-bold text-teal-400">{testResults.matched.toLocaleString()}</p>
                  <p className="text-[9px] text-slate-500">Est. Matches</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2 text-center">
                  <p className="text-lg font-bold text-amber-400">{testResults.privileged}</p>
                  <p className="text-[9px] text-slate-500">Likely Privileged</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2 text-center">
                  <p className="text-lg font-bold text-slate-400">{testResults.excluded.toLocaleString()}</p>
                  <p className="text-[9px] text-slate-500">Excluded</p>
                </div>
                <div className="bg-slate-800/50 rounded p-2 text-center">
                  <p className="text-lg font-bold text-rose-400">{testResults.flagged}</p>
                  <p className="text-[9px] text-slate-500">Hot Docs</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Suggestions Panel */}
          <div className="w-72 border-l border-slate-800 bg-slate-900/50 flex flex-col">
            <div className="px-4 py-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] font-medium text-white">AI-Suggested Criteria</h3>
                  <p className="text-[9px] text-slate-500">Based on case type & corpus analysis</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {suggestedCriteria.map((criteria) => (
                <div 
                  key={criteria.id} 
                  className="bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800 cursor-pointer transition-colors border border-transparent hover:border-teal-500/30"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-[10px] text-slate-300 leading-relaxed">{criteria.text}</p>
                    <button className="p-1 hover:bg-slate-700 rounded flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                        style={{ width: `${criteria.confidence}%` }}
                      />
                    </div>
                    <span className="text-[9px] text-teal-400 font-medium">{criteria.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="p-3 border-t border-slate-800">
              <div className="bg-violet-500/10 rounded-lg p-3 border border-violet-500/20">
                <p className="text-[9px] text-violet-400 font-medium mb-1">💡 Pro Tip</p>
                <p className="text-[9px] text-slate-400 leading-relaxed">
                  Use specific terms like "CFO", "audit committee", or date ranges to improve precision. The AI will interpret intent and expand relevant synonyms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Screen 3: Citation-Led Document Viewer
export function EDiscoveryDocumentReview({ document, onNavigate, onOpenAI, onBack, onComplete }) {
  const [activeTab, setActiveTab] = useState('text')
  
  const doc = document || { 
    id: 1, 
    title: "RE: Q4 Revenue Discussion", 
    type: "email", 
    from: "J. Martinez", 
    to: "CFO, Controller",
    date: "Dec 12, 2024 3:47 PM",
    confidence: 94, 
    tags: ["Revenue", "Q4", "Executive"], 
  }

  const citations = [
    { id: 1, text: '"revised recognition schedule"', page: 1, line: 3, relevance: 'High', category: 'Financial' },
    { id: 2, text: '"Q4 cutoff"', page: 1, line: 5, relevance: 'High', category: 'Timing' },
    { id: 3, text: '"audit committee"', page: 1, line: 6, relevance: 'Medium', category: 'Oversight' },
  ]

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="review" onNavigate={onNavigate} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Document Panel (Left) */}
        <div className="w-3/5 flex flex-col border-r border-slate-800">
          {/* Header with tabs */}
          <div className="bg-slate-900 px-3 py-2 border-b border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <button onClick={onBack} className="p-1 hover:bg-slate-800 rounded">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-[11px] font-medium text-white truncate">{doc.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] rounded flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>
            
            {/* Multimodal Tabs */}
            <div className="flex items-center gap-1">
              {[
                { id: 'text', label: 'Text', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                { id: 'native', label: 'Native', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { id: 'metadata', label: 'Metadata', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
                { id: 'family', label: 'Family', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 py-1.5 rounded flex items-center gap-1.5 text-[10px] transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-teal-500/20 text-teal-400' 
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
                  </svg>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Document Content */}
          <div className="flex-1 overflow-y-auto p-3">
            <div className="bg-white rounded-lg p-4 text-slate-900 min-h-full text-[11px]">
              <div className="border-b border-slate-200 pb-2 mb-3">
                <p><span className="font-medium">From:</span> {doc.from}</p>
                <p><span className="font-medium">To:</span> {doc.to || 'CFO'}</p>
                <p><span className="font-medium">Date:</span> {doc.date}</p>
                <p><span className="font-medium">Subject:</span> {doc.title}</p>
              </div>
              <div className="whitespace-pre-wrap leading-relaxed">
                Per our discussion, I've attached the <span className="bg-amber-200 px-0.5 rounded cursor-pointer hover:bg-amber-300" title="Citation 1">revised recognition schedule</span> for board review.
                
                The timing adjustments we discussed should address the auditor's concerns about <span className="bg-violet-200 px-0.5 rounded cursor-pointer hover:bg-violet-300" title="Citation 2">Q4 cutoff</span>. Please confirm before I send to the <span className="bg-teal-200 px-0.5 rounded cursor-pointer hover:bg-teal-300" title="Citation 3">audit committee</span>.

                Best regards,
                J. Martinez
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="bg-slate-900 px-3 py-2 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 bg-rose-500/20 text-rose-400 text-[9px] rounded hover:bg-rose-500/30">
                Flag Hot
              </button>
              <button className="px-2 py-1 bg-amber-500/20 text-amber-400 text-[9px] rounded hover:bg-amber-500/30">
                Needs Redaction
              </button>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-slate-500">
              <span>Doc 1 of 127</span>
              <button className="p-1 hover:bg-slate-800 rounded">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1 hover:bg-slate-800 rounded">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* AI Insights Panel (Right) */}
        <div className="flex-1 flex flex-col bg-slate-900/30">
          {/* Panel Header */}
          <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-[11px] font-medium text-white">AI Insights</h3>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[8px] rounded">
                No Hallucination Detected
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {/* Confidence Meter */}
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400">Relevance Confidence</span>
                <span className="text-[11px] font-bold text-emerald-400">{doc.confidence}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all"
                  style={{ width: `${doc.confidence}%` }}
                />
              </div>
              <p className="text-[9px] text-slate-500 mt-1.5">Model: Claude 3.5 Sonnet • Calibrated on 10K samples</p>
            </div>

            {/* AI Rationale */}
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <h4 className="text-[10px] text-violet-400 font-medium mb-2">AI Rationale</h4>
              <p className="text-[10px] text-slate-300 leading-relaxed">
                This document discusses <span className="text-amber-400">revenue recognition timing</span> decisions involving executive leadership. Direct relevance to investigation scope regarding Q4 financial reporting practices.
              </p>
            </div>

            {/* Live Citations */}
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <h4 className="text-[10px] text-violet-400 font-medium mb-2">Live Citations</h4>
              <div className="space-y-2">
                {citations.map((cite) => (
                  <div key={cite.id} className="flex items-start gap-2 p-2 bg-slate-900/50 rounded hover:bg-slate-900 cursor-pointer transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                      cite.relevance === 'High' ? 'bg-rose-400' : 'bg-amber-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-slate-200 font-mono truncate">{cite.text}</p>
                      <p className="text-[9px] text-slate-500">Page {cite.page}, Line {cite.line} • {cite.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Classification Suggestion */}
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <h4 className="text-[10px] text-violet-400 font-medium mb-2">Suggested Classification</h4>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Responsive</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] rounded">Yes (94%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Privileged</span>
                  <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-[9px] rounded">No (98%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Hot Document</span>
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[9px] rounded">Maybe (67%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-3 border-t border-slate-800 space-y-2">
            <button 
              onClick={onComplete}
              className="w-full py-2 bg-teal-500 rounded text-[11px] font-bold text-slate-900 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Accept & Next
            </button>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">
                Override
              </button>
              <button className="flex-1 py-1.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-400">
                Send to QC
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Screen 4: Automated Privilege Log Workflow
export function EDiscoveryProduction({ onNavigate, onOpenAI }) {
  const [selectedDocs, setSelectedDocs] = useState([1, 2, 3])
  
  const privilegedDocs = [
    { 
      id: 1, 
      bates: 'NEXUS000234', 
      title: 'Email: Legal Strategy Discussion', 
      date: 'Dec 10, 2024',
      privilege: 'Attorney-Client',
      aiDescription: 'Communication between in-house counsel and CFO regarding SEC inquiry response strategy and potential disclosure obligations.',
      approved: true,
      confidence: 96
    },
    { 
      id: 2, 
      bates: 'NEXUS000456', 
      title: 'Memo: Litigation Hold Analysis', 
      date: 'Dec 8, 2024',
      privilege: 'Work Product',
      aiDescription: 'Internal memorandum prepared by legal team analyzing document preservation requirements and potential litigation exposure.',
      approved: true,
      confidence: 94
    },
    { 
      id: 3, 
      bates: 'NEXUS000789', 
      title: 'Draft: Board Presentation Notes', 
      date: 'Dec 5, 2024',
      privilege: 'Attorney-Client',
      aiDescription: 'Draft presentation materials prepared with input from external counsel regarding regulatory compliance matters.',
      approved: false,
      confidence: 87
    },
    { 
      id: 4, 
      bates: 'NEXUS001012', 
      title: 'Email: Outside Counsel Engagement', 
      date: 'Dec 3, 2024',
      privilege: 'Attorney-Client',
      aiDescription: 'Engagement letter and scope discussion with external law firm for SEC investigation representation.',
      approved: true,
      confidence: 99
    },
  ]

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="privilege" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">Privilege Log Generator</h1>
            <p className="text-[10px] text-slate-400">234 documents flagged as privileged • AI descriptions ready for review</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-slate-800 rounded text-[10px] text-slate-300 flex items-center gap-1.5 hover:bg-slate-700">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Log
            </button>
            <button 
              onClick={onOpenAI}
              className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded text-[10px] font-medium text-white flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              Ask AI
            </button>
          </div>
        </div>

        {/* Progress Banner */}
        <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-slate-400">Review Progress</span>
            <span className="text-[10px] text-teal-400">198 / 234 approved (85%)</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>

        {/* Batch Actions */}
        <div className="px-4 py-2 bg-slate-800/30 border-b border-slate-800 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-600 bg-slate-800 text-teal-500" checked={selectedDocs.length === privilegedDocs.length} readOnly />
            <span className="text-[10px] text-slate-400">{selectedDocs.length} selected</span>
          </div>
          <div className="h-4 w-px bg-slate-700" />
          <button className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[9px] rounded hover:bg-emerald-500/30 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Approve Selected
          </button>
          <button className="px-2 py-1 bg-amber-500/20 text-amber-400 text-[9px] rounded hover:bg-amber-500/30">
            Edit Descriptions
          </button>
          <button className="px-2 py-1 bg-rose-500/20 text-rose-400 text-[9px] rounded hover:bg-rose-500/30">
            Reject Selected
          </button>
        </div>

        {/* Document List */}
        <div className="flex-1 overflow-y-auto">
          {privilegedDocs.map((doc) => (
            <div 
              key={doc.id}
              className={`px-4 py-3 border-b border-slate-800/50 hover:bg-slate-800/20 ${
                !doc.approved ? 'bg-amber-500/5 border-l-2 border-l-amber-500' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Checkbox */}
                <input 
                  type="checkbox" 
                  className="w-3.5 h-3.5 rounded border-slate-600 bg-slate-800 text-teal-500 mt-1" 
                  checked={selectedDocs.includes(doc.id)}
                  onChange={() => {
                    if (selectedDocs.includes(doc.id)) {
                      setSelectedDocs(selectedDocs.filter(id => id !== doc.id))
                    } else {
                      setSelectedDocs([...selectedDocs, doc.id])
                    }
                  }}
                />
                
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-mono text-slate-500">{doc.bates}</span>
                    <span className={`px-1.5 py-0.5 text-[8px] rounded ${
                      doc.privilege === 'Attorney-Client' ? 'bg-violet-500/20 text-violet-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>{doc.privilege}</span>
                    <span className="text-[9px] text-slate-500">{doc.date}</span>
                  </div>
                  
                  <h4 className="text-[11px] font-medium text-white mb-1.5">{doc.title}</h4>
                  
                  {/* AI-Generated Description */}
                  <div className="bg-slate-800/50 rounded p-2.5 border border-slate-700">
                    <div className="flex items-center gap-1.5 mb-1">
                      <svg className="w-3 h-3 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                      </svg>
                      <span className="text-[9px] text-violet-400 font-medium">AI-Drafted Description</span>
                      <span className="text-[8px] text-slate-500">({doc.confidence}% confidence)</span>
                    </div>
                    <p className="text-[10px] text-slate-300 leading-relaxed">{doc.aiDescription}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end gap-2">
                  {doc.approved ? (
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[9px] rounded flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Approved
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-[9px] rounded">
                      Needs Review
                    </span>
                  )}
                  <button className="text-[9px] text-slate-500 hover:text-slate-300">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-slate-400">198 Approved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-slate-400">36 Pending</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span className="text-slate-400">0 Rejected</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-teal-500 rounded text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Generate Final Log
          </button>
        </div>
      </div>
    </div>
  )
}

// Main eDiscovery App Container
export function EDiscoveryApp({ currentScreen = 0, onScreenChange, showHotspots = false }) {
  const screenIds = ['eca', 'protocol', 'review', 'privilege']
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState(null)

  // Map screen index to view name
  const currentView = screenIds[currentScreen] || 'eca'

  const handleNavigate = (view) => {
    const index = screenIds.indexOf(view)
    if (index !== -1 && onScreenChange) {
      onScreenChange(index)
    }
    setSelectedDocument(null)
  }

  const handleSelectDocument = (doc) => {
    setSelectedDocument(doc)
  }

  // Hotspot positions for each screen (positioned over the "next" action)
  const hotspots = {
    eca: { bottom: '10px', right: '20px', width: '180px', height: '36px', label: 'Build Review Protocol' },
    protocol: { left: '10px', top: '230px', width: '48px', height: '40px', label: 'Document Review' },
    review: { left: '10px', top: '290px', width: '48px', height: '40px', label: 'Privilege Log' },
  }

  const currentHotspot = showHotspots && currentScreen < 3 ? hotspots[currentView] : null

  return (
    <div className="h-full relative">
      {currentView === 'eca' && (
        <EDiscoveryDashboard 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)} 
        />
      )}
      {currentView === 'protocol' && (
        <EDiscoveryReviewQueue 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
        />
      )}
      {currentView === 'review' && (
        <EDiscoveryDocumentReview 
          document={selectedDocument}
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
          onBack={() => handleNavigate('protocol')}
          onComplete={() => handleNavigate('protocol')}
        />
      )}
      {currentView === 'privilege' && (
        <EDiscoveryProduction 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)} 
        />
      )}
      
      {/* Pulsing Hotspot */}
      {currentHotspot && (
        <button
          onClick={() => onScreenChange && onScreenChange(currentScreen + 1)}
          className="absolute z-50 rounded-lg cursor-pointer"
          style={{
            ...currentHotspot,
            background: 'transparent',
          }}
        >
          {/* Outer pulsing ring */}
          <div className="absolute -inset-2 rounded-xl border-2 border-teal-400/60 animate-ping" style={{ animationDuration: '1.5s' }} />
          {/* Middle ring */}
          <div className="absolute -inset-1 rounded-lg border border-teal-400/40 animate-pulse" />
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-lg bg-teal-400/20 animate-pulse" />
          {/* Border */}
          <div className="absolute inset-0 rounded-lg border-2 border-teal-400" />
        </button>
      )}
      
      <AIChatDrawer isOpen={aiDrawerOpen} onClose={() => setAiDrawerOpen(false)} />
    </div>
  )
}
