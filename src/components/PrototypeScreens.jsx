import { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
export function DesktopFrame({ children, url = "reviewai.app/project/sec-investigation" }) {
  const frameRef = useRef(null)
  const scrollLockRef = useRef(null)

  // Lock scroll position on any interaction inside the prototype frame
  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const lockScroll = () => {
      scrollLockRef.current = window.scrollY
    }

    const restoreScroll = () => {
      if (scrollLockRef.current !== null) {
        window.scrollTo(window.scrollX, scrollLockRef.current)
        scrollLockRef.current = null
      }
    }

    frame.addEventListener('mousedown', lockScroll, true)
    frame.addEventListener('focusin', restoreScroll, true)

    // Also restore on any scroll that happens immediately after mousedown
    let rafId
    const onScroll = () => {
      if (scrollLockRef.current !== null) {
        window.scrollTo(window.scrollX, scrollLockRef.current)
        scrollLockRef.current = null
      }
    }
    frame.addEventListener('click', () => {
      window.addEventListener('scroll', onScroll, { once: true, passive: false })
      rafId = requestAnimationFrame(() => {
        window.removeEventListener('scroll', onScroll)
      })
    }, true)

    return () => {
      frame.removeEventListener('mousedown', lockScroll, true)
      frame.removeEventListener('focusin', restoreScroll, true)
      cancelAnimationFrame(rafId)
    }
  }, [])

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
            <span className="text-gray-400 text-xs">{url}</span>
          </div>
        </div>
        {/* Content area */}
        <div
          ref={frameRef}
          style={{ width: '900px', height: '560px' }}
          className="overflow-hidden relative"
        >
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
function EDiscoverySidebar({ activeView, onNavigate, highlightItem = null }) {
  const navItems = [
    { id: 'eca', label: 'Case Assessment', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'protocol', label: 'Protocol Builder', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { id: 'params', label: 'Review Parameters', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
    { id: 'subset', label: 'Subset Test', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { id: 'results', label: 'Review Results', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
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
        {navItems.map((item) => {
          const isHighlighted = highlightItem === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                activeView === item.id 
                  ? 'bg-teal-500/20 text-teal-400' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
              } ${isHighlighted ? 'text-teal-400' : ''}`}
              title={item.label}
            >
              {isHighlighted && (
                <>
                  <div className="absolute inset-0 rounded-lg bg-teal-400/10" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 z-20">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400" />
                  </span>
                </>
              )}
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
            </button>
          )
        })}
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
// Processing Health Card - displays ingestion metrics alongside Case Summary
function ProcessingHealthCard() {
  const [showExceptions, setShowExceptions] = useState(false)
  const exceptions = [
    { file: 'Acme_NDA_2023.pdf', reason: 'Encrypted PDF', size: '2.4 MB' },
    { file: 'backup_archive.zip', reason: 'Password-Protected ZIP', size: '148 MB' },
    { file: 'inbox_export.pst', reason: 'Corrupted PST — partial extraction', size: '1.2 GB' },
  ]
  return (
    <div className="px-3 pb-3">
      <div className="space-y-1.5">
        <div className="flex justify-between text-[9px]">
          <span className="text-slate-500">Documents Ingested</span>
          <span className="text-teal-400 font-medium">52,401</span>
        </div>
        <div className="flex justify-between text-[9px]">
          <span className="text-slate-500">De-duplication</span>
          <span className="text-emerald-400 font-medium">-18% reduction</span>
        </div>
        <div className="flex justify-between text-[9px]">
          <span className="text-slate-500">Exceptions</span>
          <button
            onClick={() => setShowExceptions(!showExceptions)}
            className={`font-medium flex items-center gap-0.5 hover:underline ${exceptions.length > 0 ? 'text-amber-400' : 'text-slate-400'}`}
          >
            {exceptions.length > 0 && (
              <svg className="w-2.5 h-2.5 -mt-px" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            )}
            {exceptions.length}
            <svg className={`w-2 h-2 transition-transform ${showExceptions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      {showExceptions && (
        <div className="mt-2 space-y-1.5">
          {exceptions.map((ex, i) => (
            <div key={i} className="bg-slate-800/60 rounded p-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-white font-medium truncate mr-2">{ex.file}</span>
                <span className="text-[7px] text-slate-500 whitespace-nowrap">{ex.size}</span>
              </div>
              <span className="text-[8px] text-amber-400/80">{ex.reason}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Data Distribution - compact file type + language breakdown for ECA staffing
function DataDistribution() {
  const fileTypes = [
    { label: 'Email', pct: 60, color: 'bg-teal-400' },
    { label: 'Word', pct: 20, color: 'bg-violet-400' },
    { label: 'Excel', pct: 10, color: 'bg-amber-400' },
    { label: 'Other', pct: 10, color: 'bg-slate-500' },
  ]
  const languages = [
    { label: 'English', pct: 92, color: 'bg-cyan-400' },
    { label: 'Spanish', pct: 5, color: 'bg-rose-400' },
    { label: 'Mandarin', pct: 3, color: 'bg-amber-400' },
  ]
  return (
    <div className="px-3 pb-3">
      {/* Document Type bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] text-slate-500">Document Type</span>
          <span className="text-[8px] text-slate-500">48,291 docs</span>
        </div>
        <div className="h-2 flex rounded-full overflow-hidden">
          {fileTypes.map((f, i) => (
            <div key={i} className={`${f.color} opacity-80`} style={{ width: `${f.pct}%` }} />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-2 mt-1">
          {fileTypes.map((f, i) => (
            <span key={i} className="flex items-center gap-0.5 text-[7px] text-slate-500">
              <span className={`w-1.5 h-1.5 rounded-full ${f.color}`} />
              {f.label} {f.pct}%
            </span>
          ))}
        </div>
      </div>
      {/* Language bar */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] text-slate-500">Language</span>
          {(languages.some(l => l.label !== 'English' && l.pct > 0)) && (
            <span className="text-[7px] text-amber-400 font-medium flex items-center gap-0.5">
              <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              Multi-lingual
            </span>
          )}
        </div>
        <div className="h-2 flex rounded-full overflow-hidden">
          {languages.map((l, i) => (
            <div key={i} className={`${l.color} opacity-80`} style={{ width: `${l.pct}%` }} />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-2 mt-1">
          {languages.map((l, i) => (
            <span key={i} className="flex items-center gap-0.5 text-[7px] text-slate-500">
              <span className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
              {l.label} {l.pct}%
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sentiment Timeline Brush Selector - click+drag to filter date range
export function SentimentBrush({ onBrushChange }) {
  // Generate deterministic bar data (seeded from index to avoid re-renders)
  const barData = useMemo(() => Array.from({ length: 30 }).map((_, i) => {
    const seed = Math.sin(i * 47.3 + 7) * 10000
    const height = 20 + (seed - Math.floor(seed)) * 60
    const sentSeed = Math.sin(i * 31.7 + 13) * 10000
    const sentiment = sentSeed - Math.floor(sentSeed)
    return { height, sentiment }
  }), [])

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  const containerRef = useRef(null)
  const [brushStart, setBrushStart] = useState(null)
  const [brushEnd, setBrushEnd] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const barIndexFromEvent = useCallback((e) => {
    if (!containerRef.current) return null
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX || e.touches?.[0]?.clientX || 0) - rect.left
    const pct = x / rect.width
    return Math.max(0, Math.min(29, Math.floor(pct * 30)))
  }, [])

  const handlePointerDown = useCallback((e) => {
    const idx = barIndexFromEvent(e)
    if (idx === null) return
    setBrushStart(idx)
    setBrushEnd(idx)
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [barIndexFromEvent])

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return
    const idx = barIndexFromEvent(e)
    if (idx !== null) setBrushEnd(idx)
  }, [isDragging, barIndexFromEvent])

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    if (brushStart !== null && brushEnd !== null) {
      const lo = Math.min(brushStart, brushEnd)
      const hi = Math.max(brushStart, brushEnd)
      onBrushChange({ start: lo, end: hi })
    }
  }, [isDragging, brushStart, brushEnd, onBrushChange])

  const clearBrush = useCallback(() => {
    setBrushStart(null)
    setBrushEnd(null)
    onBrushChange(null)
  }, [onBrushChange])

  const lo = brushStart !== null && brushEnd !== null ? Math.min(brushStart, brushEnd) : null
  const hi = brushStart !== null && brushEnd !== null ? Math.max(brushStart, brushEnd) : null
  const hasSelection = lo !== null && hi !== null

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 p-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[10px] font-medium text-slate-400">Sentiment Timeline</h3>
        {hasSelection && !isDragging && (
          <button
            onClick={clearBrush}
            className="text-[8px] text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-0.5"
          >
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear filter
          </button>
        )}
      </div>
      <div
        ref={containerRef}
        className="h-24 flex items-end gap-1 cursor-crosshair relative select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Brush overlay */}
        {hasSelection && (
          <div
            className="absolute top-0 bottom-0 bg-teal-400/10 border-x border-teal-400/40 pointer-events-none z-10 rounded"
            style={{
              left: `${(lo / 30) * 100}%`,
              width: `${((hi - lo + 1) / 30) * 100}%`,
            }}
          />
        )}
        {barData.map((bar, i) => {
          const inBrush = hasSelection && i >= lo && i <= hi
          const dimmed = hasSelection && !inBrush
          const color = bar.sentiment > 0.7 ? 'bg-rose-400' : bar.sentiment > 0.4 ? 'bg-amber-400' : 'bg-emerald-400'
          return (
            <div
              key={i}
              className={`flex-1 ${color} rounded-t transition-opacity duration-200 ${dimmed ? 'opacity-20' : 'opacity-80'}`}
              style={{ height: `${bar.height}%` }}
            />
          )
        })}
      </div>
      <div className="flex justify-between mt-1 text-[8px] text-slate-500">
        {months.map((m, i) => (
          <span key={i} className={hasSelection && i >= Math.floor(lo / 5) && i <= Math.floor(hi / 5) ? 'text-teal-400 font-medium' : ''}>
            {m} 2024
          </span>
        ))}
      </div>
      {hasSelection && !isDragging && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 flex items-center gap-1.5 text-[8px]"
        >
          <span className="text-teal-400 font-medium">
            {months[Math.floor(lo / 5)]} {((lo % 5) * 6 + 1)}-{months[Math.floor(hi / 5)]} {((hi % 5) * 6 + 6)}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">{hi - lo + 1} bars selected</span>
        </motion.div>
      )}
    </div>
  )
}

// Collapsible panel wrapper for modular dashboard sections
function CollapsiblePanel({ title, badge, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-3 py-2 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg className={`w-3 h-3 text-slate-500 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <h3 className="text-[11px] font-medium text-white">{title}</h3>
          {badge && <span className="px-1.5 py-0.5 bg-teal-500/20 text-teal-400 text-[8px] rounded">{badge}</span>}
        </div>
        <span className="text-[8px] text-slate-600">{open ? 'Collapse' : 'Expand'}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  )
}

export function EDiscoveryDashboard({ onNavigate, onOpenAI, highlightNext = false }) {
  const [brushRange, setBrushRange] = useState(null)

  // Concept clusters with activity ranges (bar indices 0-29 they're most active in)
  const allClusters = useMemo(() => [
    { id: 1, label: 'Financial Disclosures', size: 45, x: 25, y: 30, color: 'from-teal-400 to-cyan-400', docs: 1234, activeRange: [0, 20] },
    { id: 2, label: 'Executive Comms', size: 35, x: 55, y: 25, color: 'from-violet-400 to-indigo-400', docs: 892, activeRange: [5, 25] },
    { id: 3, label: 'Audit Reports', size: 28, x: 70, y: 55, color: 'from-amber-400 to-orange-400', docs: 456, activeRange: [10, 29] },
    { id: 4, label: 'Legal Holds', size: 22, x: 20, y: 65, color: 'from-rose-400 to-pink-400', docs: 234, activeRange: [0, 12] },
    { id: 5, label: 'Board Minutes', size: 18, x: 45, y: 70, color: 'from-emerald-400 to-green-400', docs: 189, activeRange: [8, 18] },
  ], [])

  const allEntities = useMemo(() => [
    { name: 'John Mitchell', type: 'Custodian', mentions: 847, role: 'CFO', activeRange: [0, 22] },
    { name: 'Sarah Chen', type: 'Custodian', mentions: 623, role: 'General Counsel', activeRange: [10, 29] },
    { name: 'Acme Holdings', type: 'Entity', mentions: 1243, role: 'Parent Company', activeRange: [0, 29] },
    { name: 'Q4 Revenue Report', type: 'Key Doc', mentions: 456, role: 'Key Evidence', activeRange: [15, 29] },
  ], [])

  const overlaps = useCallback((itemRange, brush) => {
    if (!brush) return true
    return itemRange[0] <= brush.end && itemRange[1] >= brush.start
  }, [])

  const conceptClusters = useMemo(
    () => allClusters.filter(c => overlaps(c.activeRange, brushRange)),
    [allClusters, brushRange, overlaps]
  )

  const entities = useMemo(
    () => allEntities.filter(e => overlaps(e.activeRange, brushRange)),
    [allEntities, brushRange, overlaps]
  )

  const handleBrushChange = useCallback((range) => {
    setBrushRange(range)
  }, [])

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="eca" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with primary CTA */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">Early Case Assessment</h1>
            <p className="text-[10px] text-slate-400">Project Nexus - SEC Investigation • 48,291 document corpus</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded text-[10px]">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-slate-300">Analysis Complete</span>
            </div>
            <button 
              onClick={onOpenAI}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded text-[10px] font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              Ask AI
            </button>
            <button 
              onClick={() => onNavigate('protocol')}
              className={`relative px-4 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-900 text-[10px] font-semibold rounded shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-400/30 flex items-center gap-1.5 ${highlightNext ? 'z-10' : ''}`}
            >
              {highlightNext && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-300" />
                </span>
              )}
              Build Review Protocol →
            </button>
          </div>
        </div>

        {/* Modular Dashboard Grid */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="grid grid-cols-12 gap-3 auto-rows-min">
            
            {/* Concept Map + Sentiment - spans 8 columns */}
            <div className="col-span-8 flex flex-col gap-3">
              <CollapsiblePanel title="Document Concept Map" badge="AI-Generated">
                <div className="relative p-4" style={{ minHeight: '220px' }}>
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="25%" y1="30%" x2="55%" y2="25%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                    <line x1="55%" y1="25%" x2="70%" y2="55%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                    <line x1="25%" y1="30%" x2="20%" y2="65%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                    <line x1="45%" y1="70%" x2="20%" y2="65%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                    <line x1="55%" y1="25%" x2="45%" y2="70%" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
                  </svg>
                  
                  {/* Concept clusters */}
                  <AnimatePresence>
                  {conceptClusters.map((cluster) => (
                    <motion.div
                      key={cluster.id}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.3 }}
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
                    </motion.div>
                  ))}
                  </AnimatePresence>
                </div>
              </CollapsiblePanel>

              {/* Sentiment Brush - always visible since it drives filtering */}
              <SentimentBrush onBrushChange={handleBrushChange} />
            </div>

            {/* Right column - spans 4 columns */}
            <div className="col-span-4 flex flex-col gap-3">
              {/* Case Summary - default open */}
              <CollapsiblePanel title="Case Summary">
                <div className="px-3 pb-3 space-y-1.5">
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
              </CollapsiblePanel>

              {/* Entities & Custodians - default open */}
              <CollapsiblePanel title="Entities &amp; Custodians">
                <div className="px-2 pb-2 space-y-2">
                  <AnimatePresence>
                  {entities.map((entity, i) => (
                    <motion.div
                      key={entity.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                      className="bg-slate-800/50 rounded-lg p-2 hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-medium text-white">{entity.name}</span>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded ${
                          entity.type === 'Custodian' ? 'bg-violet-500/20 text-violet-400' :
                          entity.type === 'Entity' ? 'bg-teal-500/20 text-teal-400' :
                          'bg-amber-500/20 text-amber-400'
                        }`}>{entity.type}</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-slate-500">{entity.role}</span>
                        <span className="text-slate-400">{entity.mentions} mentions</span>
                      </div>
                    </motion.div>
                  ))}
                  </AnimatePresence>
                  {brushRange && entities.length === 0 && (
                    <div className="text-center py-4 text-[9px] text-slate-500">No entities in selected range</div>
                  )}
                </div>
              </CollapsiblePanel>

              {/* Corpus Composition - default collapsed */}
              <CollapsiblePanel title="Corpus Composition" defaultOpen={false}>
                <DataDistribution />
              </CollapsiblePanel>

              {/* Ingestion Health - default collapsed */}
              <CollapsiblePanel title="Ingestion Health" defaultOpen={false}>
                <ProcessingHealthCard />
              </CollapsiblePanel>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// Screen 2: Protocol Builder - Natural Language Review Instructions
export function EDiscoveryReviewQueue({ onNavigate, onOpenAI, highlightNext = false }) {
  const [protocolText, setProtocolText] = useState('')
  const [templateLoaded, setTemplateLoaded] = useState(false)
  const [addedCriteria, setAddedCriteria] = useState([])
  const [exclusions, setExclusions] = useState([])
  const [showSubsetTooltip, setShowSubsetTooltip] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const templateProtocol = `Find all documents that discuss revenue recognition timing, Q4 financial results, or communications with external auditors.\n\nExclude routine operational emails unless they mention "board", "audit committee", or any executive by name.\n\nFlag as privileged any communication involving legal counsel or marked "Attorney-Client Privilege".`

  // ECA context data
  const ecaEntities = [
    { name: 'John Mitchell', type: 'Custodian', role: 'CFO' },
    { name: 'Sarah Chen', type: 'Custodian', role: 'General Counsel' },
    { name: 'Acme Holdings', type: 'Entity', role: 'Parent Company' },
    { name: 'Q4 Revenue Report', type: 'Key Doc', role: 'Key Evidence' },
  ]

  const ecaClusters = [
    { label: 'Financial Disclosures', docs: 1234, color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
    { label: 'Executive Comms', docs: 892, color: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
    { label: 'Audit Reports', docs: 456, color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    { label: 'Legal Holds', docs: 234, color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
    { label: 'Board Minutes', docs: 189, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  ]

  const semanticExpansions = useMemo(() => ({
    'revenue': { count: 12, terms: ['Earnings', 'GAAP', 'Q4 Reports', 'Revenue Recognition'] },
    'audit': { count: 8, terms: ['Audit Committee', 'External Auditor', 'SOX Compliance'] },
    'privilege': { count: 6, terms: ['Attorney-Client', 'Work Product', 'Legal Hold'] },
    'board': { count: 5, terms: ['Board Minutes', 'Committee Brief', 'Governance'] },
    'cfo': { count: 4, terms: ['Chief Financial Officer', 'J. Mitchell', 'Finance Exec'] },
    'sec': { count: 9, terms: ['Securities', 'Filing', 'Investigation', '10-K'] },
  }), [])

  const defaultExclusions = [
    'Marketing newsletters',
    'Calendar invites & scheduling',
    'Automated system alerts',
    'Out-of-office replies',
  ]

  const suggestedCriteria = [
    { id: 1, text: 'Include SEC filing references', confidence: 94, estDocs: 820 },
    { id: 2, text: 'Flag merger discussion mentions', confidence: 89, estDocs: 340 },
    { id: 3, text: 'Exclude marketing newsletters', confidence: 96, estDocs: -1200, isExclusion: true },
    { id: 4, text: 'Prioritize CFO/CEO communications', confidence: 91, estDocs: 650 },
  ]

  const templates = [
    { id: 'sec', name: 'SEC Investigation', description: 'Revenue recognition, executive comms, audit oversight', icon: '🏛️', available: true },
    { id: 'contract', name: 'Contract Disputes', description: 'Breach of contract, amendment discussions', icon: '📋', available: false },
    { id: 'employment', name: 'Employment Claims', description: 'HR comms, performance reviews, termination', icon: '👥', available: false },
  ]

  const loadTemplate = () => {
    setProtocolText(templateProtocol)
    setTemplateLoaded(true)
  }

  const resetProtocol = () => {
    setProtocolText('')
    setTemplateLoaded(false)
    setAddedCriteria([])
    setExclusions([])
  }

  const injectEntity = (entity) => {
    const append = `\nSpecifically look for communications involving: ${entity.name} (${entity.role}).`
    setProtocolText(prev => prev + append)
    if (!templateLoaded) setTemplateLoaded(true)
  }

  const injectCluster = (cluster) => {
    const append = `\nFind all documents related to ${cluster.label.toLowerCase()} (~${cluster.docs.toLocaleString()} documents in corpus).`
    setProtocolText(prev => prev + append)
    if (!templateLoaded) setTemplateLoaded(true)
  }

  const addCriterion = (criterion) => {
    if (addedCriteria.includes(criterion.id)) return
    setAddedCriteria(prev => [...prev, criterion.id])
    if (criterion.isExclusion) {
      setExclusions(prev => [...prev, criterion.text])
    }
    const prefix = criterion.isExclusion ? '\nExclude: ' : '\nInclude: '
    setProtocolText(prev => prev + prefix + criterion.text + '.')
    if (!templateLoaded) setTemplateLoaded(true)
  }

  const toggleExclusion = (excl) => {
    if (exclusions.includes(excl)) {
      setExclusions(prev => prev.filter(e => e !== excl))
    } else {
      setExclusions(prev => [...prev, excl])
      setProtocolText(prev => prev + `\nExclude: ${excl}.`)
      if (!templateLoaded) setTemplateLoaded(true)
    }
  }

  const activeExpansions = useMemo(() => {
    if (!protocolText) return []
    const lower = protocolText.toLowerCase()
    return Object.entries(semanticExpansions)
      .filter(([keyword]) => lower.includes(keyword))
      .map(([keyword, data]) => ({ keyword, ...data }))
  }, [protocolText, semanticExpansions])

  const estimatedDocs = useMemo(() => {
    let base = templateLoaded ? 4200 : 0
    addedCriteria.forEach(id => {
      const c = suggestedCriteria.find(s => s.id === id)
      if (c) base += c.estDocs
    })
    return Math.max(0, base)
  }, [templateLoaded, addedCriteria])

  const conflicts = useMemo(() => {
    const warnings = []
    const lower = protocolText.toLowerCase()
    if (lower.includes('all emails') && lower.includes('exclude') && lower.includes('internal')) {
      warnings.push({ text: '"Find all emails" may conflict with "Exclude internal comms"', severity: 'warning' })
    }
    if (lower.includes('find all') && lower.includes('exclude routine')) {
      warnings.push({ text: '"Find all" is broad - "exclude routine" may discard relevant documents', severity: 'info' })
    }
    if (addedCriteria.length > 6) {
      warnings.push({ text: 'Complex protocol - consider simplifying for defensibility', severity: 'info' })
    }
    return warnings
  }, [protocolText, addedCriteria])

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="protocol" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 z-20 relative">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className={`px-2.5 py-1.5 rounded text-[10px] font-medium flex items-center gap-1.5 transition-colors ${
                drawerOpen
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              <svg className={`w-3 h-3 transition-transform ${drawerOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              ECA Context
            </button>
            <div>
              <h1 className="text-sm font-semibold text-white">Protocol Builder</h1>
              <p className="text-[10px] text-slate-400">Define review criteria in natural language</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {templateLoaded && (
              <>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded text-[10px]">
                  <span className="text-slate-400">Est. docs:</span>
                  <span className="text-teal-400 font-medium">{estimatedDocs.toLocaleString()}</span>
                </div>
                <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-[10px] rounded flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Auto-saved
                </span>
              </>
            )}
            <button 
              onClick={onOpenAI}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded text-[10px] font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
              </svg>
              AI Assist
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">

          {/* ECA Context Drawer - slides in from left */}
          <motion.div
            initial={false}
            animate={{ width: drawerOpen ? 220 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden flex-shrink-0 border-r border-slate-800 bg-slate-900/50"
          >
            <div className="w-[220px] h-full overflow-y-auto">
              {/* Key Entities */}
              <div className="p-3 border-b border-slate-800">
                <h4 className="text-[9px] font-medium text-slate-500 mb-2 uppercase tracking-wider">Key Entities</h4>
                <div className="space-y-1.5">
                  {ecaEntities.map((ent, i) => (
                    <button
                      key={i}
                      onClick={() => injectEntity(ent)}
                      className="w-full text-left px-2 py-1.5 bg-slate-800/50 hover:bg-slate-800 rounded border border-transparent hover:border-violet-500/30 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-slate-300 group-hover:text-white truncate">{ent.name}</span>
                        <svg className="w-2.5 h-2.5 text-slate-600 group-hover:text-violet-400 flex-shrink-0 ml-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <span className="text-[8px] text-slate-600">{ent.type} - {ent.role}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Document Clusters */}
              <div className="p-3 border-b border-slate-800">
                <h4 className="text-[9px] font-medium text-slate-500 mb-2 uppercase tracking-wider">Document Clusters</h4>
                <div className="flex flex-wrap gap-1.5">
                  {ecaClusters.map((cluster, i) => (
                    <button
                      key={i}
                      onClick={() => injectCluster(cluster)}
                      className={`px-2 py-1 rounded-full border text-[8px] font-medium hover:opacity-100 opacity-80 transition-opacity ${cluster.color}`}
                    >
                      {cluster.label}
                      <span className="ml-1 opacity-60">{cluster.docs.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Exclusion Criteria */}
              <div className="p-3">
                <h4 className="text-[9px] font-medium text-slate-500 mb-2 uppercase tracking-wider">Exclusion Criteria</h4>
                <div className="space-y-1.5">
                  {defaultExclusions.map((excl, i) => (
                    <button
                      key={i}
                      onClick={() => toggleExclusion(excl)}
                      className={`w-full text-left px-2 py-1.5 rounded border text-[9px] flex items-center gap-2 transition-all ${
                        exclusions.includes(excl)
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                          : 'bg-slate-800/30 border-slate-700/30 text-slate-500 hover:text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded border flex items-center justify-center flex-shrink-0 ${
                        exclusions.includes(excl) ? 'border-rose-400 bg-rose-500/20' : 'border-slate-600'
                      }`}>
                        {exclusions.includes(excl) && (
                          <svg className="w-2 h-2 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {excl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center: Protocol Editor - hero section */}
          <div className="flex-1 flex flex-col min-w-0 p-3">
            <div className="bg-slate-900 rounded-lg border border-slate-800 flex-1 flex flex-col min-h-0">
              <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
                <div>
                  <h3 className="text-[11px] font-medium text-white">Review Instructions</h3>
                  <p className="text-[9px] text-slate-500">Describe what documents to find, include, exclude, and flag</p>
                </div>
                {templateLoaded && (
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 bg-slate-800 rounded text-[9px] text-slate-400 hover:text-white transition-colors">
                      History
                    </button>
                    <button 
                      onClick={loadTemplate}
                      className="px-2 py-1 bg-slate-800 rounded text-[9px] text-slate-400 hover:text-white transition-colors"
                    >
                      Reset to Template
                    </button>
                    <button 
                      onClick={resetProtocol}
                      className="px-2 py-1 bg-slate-800 rounded text-[9px] text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex-1 p-4 flex flex-col min-h-0">
                {/* Semantic Expansion Pills */}
                {activeExpansions.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-1.5 flex-shrink-0">
                    {activeExpansions.map((exp) => (
                      <motion.div
                        key={exp.keyword}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full"
                      >
                        <svg className="w-2.5 h-2.5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                        </svg>
                        <span className="text-[8px] text-violet-300 font-medium whitespace-nowrap">"{exp.keyword}"</span>
                        <span className="text-[8px] text-violet-400 whitespace-nowrap">+ {exp.count} related</span>
                        <span className="text-[7px] text-slate-500 whitespace-nowrap">({exp.terms.slice(0, 2).join(', ')}...)</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Conflict Warnings */}
                <AnimatePresence>
                {conflicts.map((conflict, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mb-2 px-3 py-2 rounded-lg border text-[9px] flex items-center gap-2 flex-shrink-0 ${
                      conflict.severity === 'warning'
                        ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                        : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                    }`}
                  >
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    {conflict.text}
                  </motion.div>
                ))}
                </AnimatePresence>

                <textarea
                  value={protocolText}
                  onChange={(e) => { setProtocolText(e.target.value); if (!templateLoaded) setTemplateLoaded(true) }}
                  onFocus={() => { if (!templateLoaded) loadTemplate() }}
                  className={`w-full flex-1 bg-slate-950 rounded-lg p-4 text-[12px] text-slate-200 leading-relaxed border focus:border-teal-500/50 focus:outline-none resize-none font-mono min-h-0 ${
                    templateLoaded ? 'border-slate-800' : 'border-dashed border-slate-700'
                  }`}
                  placeholder={"Write your review protocol in plain English...\n\nExample: \"Find all documents discussing revenue\nrecognition timing or communications with\nexternal auditors. Exclude routine emails\nunless they mention the audit committee.\""}
                />

                {/* Template Selection */}
                {!templateLoaded && (
                  <div className="mt-3 flex-shrink-0">
                    <p className="text-[10px] text-slate-400 mb-2.5 font-medium flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                      </svg>
                      Or start from a template:
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {templates.map((tmpl) => (
                        <button
                          key={tmpl.id}
                          onClick={tmpl.available ? loadTemplate : undefined}
                          className={`relative p-2.5 rounded-lg border text-left transition-all overflow-hidden ${
                            tmpl.available 
                              ? 'bg-slate-800/50 border-teal-500/30 hover:border-teal-500/60 hover:bg-slate-800 cursor-pointer group' 
                              : 'bg-slate-800/20 border-slate-700/30 cursor-not-allowed opacity-40'
                          }`}
                        >
                          {tmpl.available && (
                            <div className="absolute inset-0 rounded-lg bg-teal-400/5 group-hover:bg-teal-400/10 transition-colors" />
                          )}
                          <div className="relative">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-xs">{tmpl.icon}</span>
                              <span className="text-[9px] font-medium text-white truncate">{tmpl.name}</span>
                            </div>
                            <p className="text-[8px] text-slate-500 leading-relaxed line-clamp-2">{tmpl.description}</p>
                            {!tmpl.available && (
                              <span className="text-[7px] text-slate-600 mt-0.5 block italic">Coming soon</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="px-4 py-2.5 border-t border-slate-800 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  {templateLoaded ? (
                    <>
                      <span className="text-[9px] text-slate-500">Words: {protocolText.split(/\s+/).filter(Boolean).length}</span>
                      <span className="text-[9px] text-slate-500">|</span>
                      <span className="text-[9px] text-violet-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                        </svg>
                        AI parsing active
                      </span>
                      {exclusions.length > 0 && (
                        <>
                          <span className="text-[9px] text-slate-500">|</span>
                          <span className="text-[9px] text-rose-400">{exclusions.length} exclusion{exclusions.length > 1 ? 's' : ''}</span>
                        </>
                      )}
                    </>
                  ) : (
                    <span className="text-[9px] text-slate-500">Write or load a protocol to begin</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    className="px-4 py-2 bg-slate-800 rounded text-[10px] text-slate-500 cursor-not-allowed"
                    disabled
                    title="Run subset test first"
                  >
                    Apply to Full Corpus
                  </button>
                  <div className="relative"
                    onMouseEnter={() => setShowSubsetTooltip(true)}
                    onMouseLeave={() => setShowSubsetTooltip(false)}
                  >
                    {showSubsetTooltip && templateLoaded && (
                      <div className="absolute bottom-full right-0 mb-2 w-56 p-2.5 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-30">
                        <p className="text-[9px] text-slate-300 leading-relaxed">
                          Runs your protocol against a <span className="text-teal-400 font-medium">statistically significant 1,000-document sample</span> to calculate precision/recall before committing to the full 48,291-document corpus.
                        </p>
                        <div className="mt-1.5 flex items-center gap-1 text-[8px] text-slate-500">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Estimated: ~30 seconds
                        </div>
                      </div>
                    )}
                    <button 
                      onClick={() => templateLoaded && onNavigate('subset')}
                      className={`relative px-4 py-2 rounded text-[10px] font-medium transition-colors ${
                        templateLoaded 
                          ? 'bg-teal-500 hover:bg-teal-400 text-slate-900' 
                          : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                      disabled={!templateLoaded}
                    >
                      {highlightNext && templateLoaded && (
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 z-20">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-300" />
                        </span>
                      )}
                      <span className="relative z-10">Test on Subset First →</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI Suggestions - compact shelf */}
          <div className="w-56 border-l border-slate-800 bg-slate-900/50 flex flex-col min-h-0">
            <div className="px-3 py-2 border-b border-slate-800 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium text-white">AI-Suggested Criteria</h3>
                  <p className="text-[8px] text-slate-500">Based on corpus analysis</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
              {suggestedCriteria.map((criteria) => {
                const isAdded = addedCriteria.includes(criteria.id)
                return (
                  <div 
                    key={criteria.id} 
                    className={`rounded-lg p-2 transition-colors border ${
                      isAdded 
                        ? 'bg-teal-500/10 border-teal-500/30' 
                        : 'bg-slate-800/50 border-transparent hover:bg-slate-800 hover:border-teal-500/30 cursor-pointer'
                    }`}
                    onClick={() => !isAdded && addCriterion(criteria)}
                  >
                    <div className="flex items-start justify-between gap-1.5 mb-1">
                      <p className="text-[9px] text-slate-300 leading-relaxed">{criteria.text}</p>
                      {isAdded ? (
                        <svg className="w-3 h-3 text-teal-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 text-slate-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-1">
                        <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${isAdded ? 'bg-teal-400' : 'bg-gradient-to-r from-teal-500 to-cyan-400'}`}
                            style={{ width: `${criteria.confidence}%` }}
                          />
                        </div>
                        <span className="text-[8px] text-teal-400 font-medium">{criteria.confidence}%</span>
                      </div>
                      <span className={`text-[7px] ml-1.5 whitespace-nowrap ${criteria.estDocs < 0 ? 'text-rose-400' : 'text-slate-500'}`}>
                        {criteria.estDocs > 0 ? '+' : ''}{criteria.estDocs.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Protocol Stats */}
            {templateLoaded && (
              <div className="p-2 border-t border-slate-800 flex-shrink-0">
                <div className="bg-slate-800/50 rounded-lg p-2 space-y-1">
                  <div className="flex justify-between text-[8px]">
                    <span className="text-slate-500">Criteria</span>
                    <span className="text-white font-medium">{addedCriteria.length}/{suggestedCriteria.length}</span>
                  </div>
                  <div className="flex justify-between text-[8px]">
                    <span className="text-slate-500">Exclusions</span>
                    <span className="text-rose-400 font-medium">{exclusions.length}</span>
                  </div>
                  <div className="flex justify-between text-[8px]">
                    <span className="text-slate-500">Expansions</span>
                    <span className="text-violet-400 font-medium">{activeExpansions.length}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Pro Tip */}
            <div className="p-2 border-t border-slate-800 flex-shrink-0">
              <div className="bg-violet-500/10 rounded-lg p-2 border border-violet-500/20">
                <p className="text-[8px] text-violet-400 font-medium mb-0.5">💡 Pro Tip</p>
                <p className="text-[8px] text-slate-400 leading-relaxed">
                  Click entity tags from the ECA Context panel to add defensible search terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// Screen 3: Subset Test Results
export function EDiscoverySubsetResults({ onNavigate, onOpenAI, highlightNext = false }) {
  const performanceMetrics = [
    { label: 'Precision', value: '94.2%', description: 'Relevant docs correctly identified', color: 'text-teal-400', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Recall', value: '91.8%', description: 'All relevant docs captured', color: 'text-cyan-400', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { label: 'F1 Score', value: '0.93', description: 'Overall protocol accuracy', color: 'text-violet-400', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  ]

  const sampleResults = [
    { id: 1, title: 'RE: Q4 Revenue Discussion', type: 'Email', from: 'J. Martinez, CFO', relevance: 96, finding: 'Revenue recognition timing, executive communication', rationale: 'Discusses revised recognition schedule and Q4 cutoff with CFO', tags: ['Revenue', 'Q4'], hot: true },
    { id: 2, title: 'Board Meeting Minutes - Nov 2024', type: 'Minutes', from: 'Board Secretary', relevance: 92, finding: 'Board-level financial oversight, audit committee', rationale: 'References audit committee review of Q4 revenue projections', tags: ['Board', 'Audit'], hot: false },
    { id: 3, title: 'FW: Auditor Concerns on Recognition', type: 'Email', from: 'External Auditor', relevance: 94, finding: 'External auditor communications, timing concerns', rationale: 'Direct discussion of auditor concerns about revenue recognition', tags: ['Auditor', 'Revenue'], hot: true },
    { id: 4, title: 'Draft: Year-End Financial Summary', type: 'Report', from: 'Finance Team', relevance: 87, finding: 'Q4 financial results compilation', rationale: 'Comprehensive Q4 financial data, primarily operational metrics', tags: ['Financial', 'Q4'], hot: false },
    { id: 5, title: 'Audit Committee Brief - Q3/Q4', type: 'Memo', from: 'S. Chen, Gen. Counsel', relevance: 91, finding: 'Audit committee communications, quarterly review', rationale: 'Committee briefing on financial statement preparation concerns', tags: ['Audit', 'Committee'], hot: false },
    { id: 6, title: 'RE: Engagement Letter - Outside Counsel', type: 'Email', from: 'Legal Dept', relevance: 89, finding: 'Legal counsel communication', rationale: 'Attorney-client privileged communication regarding SEC inquiry', tags: ['Privileged', 'Legal'], privileged: true, hot: false },
  ]

  const getRelevanceColor = (score) => {
    if (score >= 93) return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30'
    if (score >= 88) return 'text-teal-400 bg-teal-500/15 border-teal-500/30'
    return 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30'
  }

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="subset" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-sm font-semibold text-white">Subset Test Results</h1>
              <p className="text-[10px] text-slate-400">1,000-document sample from 48,291 total</p>
            </div>
            <span className="px-2 py-0.5 bg-amber-500/15 text-amber-400 text-[9px] rounded border border-amber-500/20 font-medium">
              TEST MODE
            </span>
          </div>
          <div className="flex items-center gap-2">
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

        {/* Protocol Performance Assessment */}
        <div className="px-4 py-3 bg-slate-900/50 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-2.5">
            <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-[10px] font-semibold text-white">Protocol Performance</span>
            <span className="text-[9px] text-slate-500 ml-auto">Claude 3.5 Sonnet • 1.2s avg/doc</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {performanceMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-800/40 rounded-lg p-2.5 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-1">
                  <svg className={`w-3.5 h-3.5 ${metric.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={metric.icon} />
                  </svg>
                  <span className="text-[9px] text-slate-400">{metric.label}</span>
                </div>
                <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                <p className="text-[8px] text-slate-500 mt-0.5">{metric.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-400 rounded-full" style={{ width: '93%' }} />
            </div>
            <span className="text-[9px] text-teal-400 font-semibold">93% ready</span>
          </div>
        </div>

        {/* Sample Document Cards */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] text-slate-400 font-medium">Sample Documents • Showing 6 of 94 matched</p>
            <div className="flex items-center gap-3 text-[9px]">
              <span className="flex items-center gap-1 text-teal-400"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full inline-block" /> 94 Relevant</span>
              <span className="flex items-center gap-1 text-amber-400"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full inline-block" /> 8 Privileged</span>
              <span className="flex items-center gap-1 text-rose-400"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full inline-block" /> 4 Hot</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {sampleResults.map((doc) => (
              <div 
                key={doc.id}
                className={`rounded-lg border p-3 transition-colors hover:bg-slate-800/40 ${
                  doc.hot 
                    ? 'border-rose-500/30 bg-rose-500/[0.04]' 
                    : doc.privileged 
                      ? 'border-amber-500/30 bg-amber-500/[0.04]' 
                      : 'border-slate-700/50 bg-slate-900/50'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium text-white truncate">{doc.title}</p>
                    <p className="text-[8px] text-slate-500 mt-0.5">{doc.type} • {doc.from}</p>
                  </div>
                  <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold border ${getRelevanceColor(doc.relevance)}`}>
                    {doc.relevance}%
                  </span>
                </div>
                <p className="text-[9px] text-slate-300 leading-relaxed mb-1.5">{doc.finding}</p>
                <p className="text-[8px] text-slate-500 italic leading-relaxed mb-2">{doc.rationale}</p>
                <div className="flex items-center gap-1.5">
                  {doc.hot && (
                    <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-400 text-[8px] rounded font-medium">Hot</span>
                  )}
                  {doc.privileged && (
                    <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[8px] rounded font-medium">Privileged</span>
                  )}
                  {doc.tags.map((tag, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-slate-700/40 text-slate-400 text-[8px] rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('protocol')}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-[10px] text-slate-300 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Refine Protocol
            </button>
            <span className="text-[9px] text-slate-500">Est. full corpus: ~4.2 hrs for 48,291 docs</span>
          </div>
          <button 
            onClick={() => onNavigate('results')}
            className="relative px-5 py-2 bg-teal-500 hover:bg-teal-400 rounded text-[10px] font-bold text-slate-900 transition-colors flex items-center gap-2"
          >
            {highlightNext && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-300" />
              </span>
            )}
            <span className="relative z-10 flex items-center gap-2">
              Apply to Full Corpus
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Screen 4: Full Corpus Review Results Dashboard
export function EDiscoveryCorpusResults({ onNavigate, onOpenAI }) {
  const corpusStats = [
    { label: 'Relevant', value: '4,847', pct: '10.0%', color: 'text-teal-400', gradient: 'from-teal-500/20 to-cyan-500/20', borderColor: 'border-teal-500/30', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Not Relevant', value: '43,005', pct: '89.1%', color: 'text-slate-400', gradient: 'from-slate-800/50 to-slate-700/50', borderColor: 'border-slate-700/50', icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Privileged', value: '312', pct: '0.6%', color: 'text-amber-400', gradient: 'from-amber-500/20 to-orange-500/20', borderColor: 'border-amber-500/30', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { label: 'Hot Docs', value: '127', pct: '0.3%', color: 'text-rose-400', gradient: 'from-rose-500/20 to-pink-500/20', borderColor: 'border-rose-500/30', icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' },
  ]

  const relevanceDistribution = [
    { range: '95-100%', count: 847, pct: 17 },
    { range: '90-94%', count: 1243, pct: 26 },
    { range: '85-89%', count: 1456, pct: 30 },
    { range: '80-84%', count: 892, pct: 18 },
    { range: '75-79%', count: 409, pct: 9 },
  ]

  const corpusResults = [
    { id: 1, bates: 'NEXUS000234', title: 'RE: Q4 Revenue Discussion', type: 'Email', from: 'J. Martinez, CFO', relevance: 96, finding: 'Revenue recognition timing', rationale: 'Discusses revised recognition schedule and Q4 cutoff timing with executive leadership', classification: 'Responsive', hot: true },
    { id: 2, bates: 'NEXUS000456', title: 'Audit Committee Brief - Q3/Q4', type: 'Memo', from: 'S. Chen, Gen. Counsel', relevance: 93, finding: 'Audit committee oversight', rationale: 'Committee briefing on Q4 financial statement preparation and auditor concerns', classification: 'Responsive', hot: false },
    { id: 3, bates: 'NEXUS000789', title: 'FW: Auditor Concerns on Recognition', type: 'Email', from: 'External Auditor', relevance: 94, finding: 'External auditor communications', rationale: 'Direct auditor concerns about revenue recognition practices and timing decisions', classification: 'Responsive', hot: true },
    { id: 4, bates: 'NEXUS001012', title: 'Board Meeting Minutes - Nov 2024', type: 'Minutes', from: 'Board Secretary', relevance: 91, finding: 'Board financial oversight', rationale: 'Board-level discussion of Q4 projections and audit committee recommendations', classification: 'Responsive', hot: false },
    { id: 5, bates: 'NEXUS001234', title: 'CEO-CFO Exchange: Forward Guidance', type: 'Email', from: 'CEO to CFO', relevance: 95, finding: 'Executive financial comms', rationale: 'Forward guidance discussion between executives pre-earnings announcement', classification: 'Responsive', hot: true },
    { id: 6, bates: 'NEXUS001567', title: 'Draft: Year-End Financial Summary', type: 'Report', from: 'Finance Team', relevance: 87, finding: 'Q4 financial compilation', rationale: 'Comprehensive Q4 financial data with operational metrics and variance analysis', classification: 'Responsive', hot: false },
    { id: 7, bates: 'NEXUS001890', title: 'Legal Hold Notice - SEC Inquiry', type: 'Memo', from: 'S. Chen, Gen. Counsel', relevance: 88, finding: 'Legal counsel directive', rationale: 'Preservation notice from General Counsel regarding SEC document requests', classification: 'Privileged', privileged: true, hot: false },
    { id: 8, bates: 'NEXUS002123', title: 'Merger Discussion: Acme Subsidiary', type: 'Email', from: 'VP Corp Dev', relevance: 76, finding: 'Potential M&A activity', rationale: 'Early-stage acquisition discussion with potential financial reporting implications', classification: 'Needs Review', hot: false },
  ]

  const getRelevanceColor = (score) => {
    if (score >= 93) return 'text-emerald-400 bg-emerald-500/15'
    if (score >= 88) return 'text-teal-400 bg-teal-500/15'
    if (score >= 80) return 'text-cyan-400 bg-cyan-500/15'
    return 'text-slate-400 bg-slate-500/15'
  }

  const getRelevanceBarWidth = (score) => `${Math.max(20, ((score - 70) / 30) * 100)}%`

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="results" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h1 className="text-sm font-semibold text-white">Review Results</h1>
            <p className="text-[10px] text-slate-400">Protocol applied to full corpus - 48,291 documents processed</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] rounded flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Review Complete
            </span>
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

        {/* Stats Cards */}
        <div className="px-4 py-3 bg-slate-900/50 border-b border-slate-800">
          <div className="grid grid-cols-4 gap-3">
            {corpusStats.map((stat, i) => (
              <div key={i} className={`bg-gradient-to-br ${stat.gradient} rounded-lg p-3 border ${stat.borderColor}`}>
                <div className="flex items-center justify-between mb-1">
                  <svg className={`w-4 h-4 ${stat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                  <span className="text-[9px] text-slate-500">{stat.pct}</span>
                </div>
                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-[9px] text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevance Distribution + Processing Info */}
        <div className="px-4 py-2.5 border-b border-slate-800 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-slate-500 font-medium whitespace-nowrap">Relevance Distribution:</span>
            <div className="flex items-end gap-0.5 h-6">
              {relevanceDistribution.map((band, i) => (
                <div key={i} className="group relative flex flex-col items-center">
                  <div 
                    className="w-8 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                    style={{ height: `${band.pct}%` }}
                  />
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-800 px-1.5 py-0.5 rounded text-[8px] text-white whitespace-nowrap z-10 border border-slate-700">
                    {band.range}: {band.count.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <span className="text-[8px] text-slate-600">75%→100%</span>
          </div>
          <div className="h-3 w-px bg-slate-700" />
          <div className="flex items-center gap-3 text-[9px] text-slate-500">
            <span>Model: Claude 3.5 Sonnet</span>
            <span>•</span>
            <span>Processed in 3.8 hrs</span>
            <span>•</span>
            <span>Avg confidence: 89.2%</span>
          </div>
        </div>

        {/* Results Table */}
        <div className="flex-1 overflow-y-auto">
          {/* Table Header */}
          <div className="sticky top-0 bg-slate-900/95 backdrop-blur px-4 py-2 border-b border-slate-700 text-[9px] font-medium text-slate-500 uppercase tracking-wider z-10">
            <div className="grid grid-cols-12 gap-2 items-center">
              <span className="col-span-3">Document</span>
              <span className="col-span-1 text-center">Score</span>
              <span className="col-span-3">Key Finding</span>
              <span className="col-span-3">AI Rationale</span>
              <span className="col-span-2 text-right">Status</span>
            </div>
          </div>

          {/* Table Rows */}
          {corpusResults.map((doc) => (
            <div 
              key={doc.id} 
              className={`px-4 py-2.5 border-b border-slate-800/40 hover:bg-slate-800/30 transition-colors ${
                doc.hot ? 'bg-rose-500/[0.03]' : doc.privileged ? 'bg-amber-500/[0.03]' : ''
              }`}
            >
              <div className="grid grid-cols-12 gap-2 items-center">
                {/* Document */}
                <div className="col-span-3 min-w-0">
                  <p className="text-[10px] font-medium text-white truncate">{doc.title}</p>
                  <p className="text-[8px] text-slate-500">{doc.type} • {doc.from}</p>
                </div>
                
                {/* Relevance Score */}
                <div className="col-span-1 flex justify-center">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getRelevanceColor(doc.relevance)}`}>
                    {doc.relevance}%
                  </span>
                </div>
                
                {/* Key Finding */}
                <p className="col-span-3 text-[9px] text-slate-300 leading-relaxed">{doc.finding}</p>
                
                {/* AI Rationale */}
                <p className="col-span-3 text-[9px] text-slate-400 leading-relaxed italic">{doc.rationale}</p>
                
                {/* Status */}
                <div className="col-span-2 flex justify-end">
                  {doc.hot ? (
                    <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-400 text-[8px] rounded font-medium flex items-center gap-0.5">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                      </svg>
                      Hot
                    </span>
                  ) : doc.privileged ? (
                    <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[8px] rounded font-medium flex items-center gap-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Priv.
                    </span>
                  ) : doc.classification === 'Needs Review' ? (
                    <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-400 text-[8px] rounded">Review</span>
                  ) : (
                    <span className="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-400 text-[8px] rounded">
                      <svg className="w-2.5 h-2.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Show More Indicator */}
          <div className="px-4 py-3 text-center">
            <p className="text-[9px] text-slate-600">Showing 8 of 4,847 relevant documents • Scroll or filter to explore more</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-slate-400">4,847 Relevant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-slate-400">312 Privileged</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span className="text-slate-400">127 Hot</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-violet-400 rounded-full" />
              <span className="text-slate-400">43 Needs Review</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-[10px] text-slate-300 flex items-center gap-1.5 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Results
            </button>
            <button className="px-4 py-2 bg-teal-500 hover:bg-teal-400 rounded text-[10px] font-bold text-slate-900 flex items-center gap-1.5 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Begin Production
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Review Parameters Configuration Screen
export function EDiscoveryReviewParams({ onNavigate, onOpenAI, highlightNext = false }) {
  const [confidenceThreshold, setConfidenceThreshold] = useState(75)
  const [batchSize, setBatchSize] = useState(500)
  const [selectedPriority, setSelectedPriority] = useState('relevance')
  const [selectedDedup, setSelectedDedup] = useState('near')
  const [aiAutonomy, setAiAutonomy] = useState('suggest')
  const [expandedSection, setExpandedSection] = useState('thresholds')

  const priorityOptions = [
    { id: 'relevance', label: 'Relevance Score', desc: 'Highest confidence documents first', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'date', label: 'Date Proximity', desc: 'Most recent documents first', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'hot', label: 'Hot Documents', desc: 'Flagged documents prioritized', icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' },
    { id: 'custodian', label: 'Key Custodians', desc: 'Priority custodian docs first', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  ]

  const dedupOptions = [
    { id: 'exact', label: 'Exact Match', desc: 'Identical files only' },
    { id: 'near', label: 'Near-Duplicate', desc: '≥85% textual similarity' },
    { id: 'thread', label: 'Email Threading', desc: 'Group by conversation thread' },
  ]

  const autonomyLevels = [
    { id: 'flag', label: 'Flag Only', desc: 'AI flags items for human review', color: 'bg-slate-500/20 text-slate-400 border-slate-500/30' },
    { id: 'suggest', label: 'Suggest', desc: 'AI suggests tags, human confirms', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
    { id: 'auto', label: 'Auto-Tag', desc: 'AI tags above confidence threshold', color: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
  ]

  const reviewerAssignments = [
    { name: 'Sarah Chen', role: 'Lead Reviewer', expertise: 'Privilege', avatar: 'SC', docs: 0, color: 'from-violet-400 to-indigo-400' },
    { name: 'James Park', role: 'Senior Associate', expertise: 'Financial', avatar: 'JP', docs: 0, color: 'from-teal-400 to-cyan-400' },
    { name: 'Maria Lopez', role: 'Associate', expertise: 'General', avatar: 'ML', docs: 0, color: 'from-amber-400 to-orange-400' },
    { name: 'David Kim', role: 'Contract Reviewer', expertise: 'Responsiveness', avatar: 'DK', docs: 0, color: 'from-emerald-400 to-green-400' },
  ]

  const sections = [
    { id: 'thresholds', label: 'Confidence & Thresholds', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'priority', label: 'Prioritization Strategy', icon: 'M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12' },
    { id: 'dedup', label: 'Deduplication', icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { id: 'autonomy', label: 'AI Autonomy Level', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'reviewers', label: 'Reviewer Assignment', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  ]

  return (
    <div className="h-full flex bg-slate-950 text-white">
      <EDiscoverySidebar activeView="params" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-sm font-semibold text-white">Review Parameters</h1>
              <p className="text-[10px] text-slate-400">Configure how AI processes and routes documents</p>
            </div>
            <span className="px-2 py-0.5 bg-teal-500/15 text-teal-400 text-[9px] rounded border border-teal-500/20 font-medium">
              PRE-REVIEW
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAI}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded text-[10px] font-medium hover:from-violet-500 hover:to-indigo-500 transition-all"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z" />
              </svg>
              AI Recommend
            </button>
            <button
              onClick={() => onNavigate && onNavigate('subset')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-medium transition-all ${
                highlightNext
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30 animate-pulse'
                  : 'bg-teal-500/15 text-teal-400 border border-teal-500/20 hover:bg-teal-500/25'
              }`}
            >
              Run Subset Test
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Left panel - Section nav */}
          <div className="w-48 bg-slate-900/50 border-r border-slate-800 p-2 space-y-0.5 overflow-y-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setExpandedSection(section.id)}
                className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all text-[10px] ${
                  expandedSection === section.id
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
                </svg>
                {section.label}
              </button>
            ))}

            {/* Summary box */}
            <div className="mt-4 p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Config Summary</div>
              <div className="space-y-1.5 text-[9px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">Threshold</span>
                  <span className="text-teal-400 font-medium">{confidenceThreshold}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Batch Size</span>
                  <span className="text-teal-400 font-medium">{batchSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Priority</span>
                  <span className="text-teal-400 font-medium capitalize">{selectedPriority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dedup</span>
                  <span className="text-teal-400 font-medium capitalize">{selectedDedup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">AI Mode</span>
                  <span className="text-teal-400 font-medium capitalize">{aiAutonomy}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Confidence & Thresholds */}
            {expandedSection === 'thresholds' && (
              <div className="space-y-4">
                <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-teal-500/15 rounded flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">Minimum Confidence Score</h3>
                      <p className="text-[9px] text-slate-400">Documents below this score will be flagged for manual review</p>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal-400">{confidenceThreshold}%</span>
                      <div className="flex gap-1">
                        {[50, 65, 75, 85, 95].map(v => (
                          <button
                            key={v}
                            onClick={() => setConfidenceThreshold(v)}
                            className={`px-2 py-0.5 rounded text-[9px] font-medium transition-all ${
                              confidenceThreshold === v
                                ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                                : 'text-slate-500 hover:text-slate-300 border border-slate-700 hover:border-slate-600'
                            }`}
                          >
                            {v}%
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-300"
                        style={{ width: `${confidenceThreshold}%` }}
                      />
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={confidenceThreshold}
                        onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-[8px] text-slate-600">
                      <span>More Coverage</span>
                      <span>More Precision</span>
                    </div>
                  </div>

                  {/* Impact preview */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/50">
                      <div className="text-[9px] text-slate-500 mb-0.5">Auto-Classified</div>
                      <div className="text-sm font-bold text-emerald-400">{Math.round(48291 * (confidenceThreshold / 100) * 0.7).toLocaleString()}</div>
                      <div className="text-[8px] text-slate-600">docs above threshold</div>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/50">
                      <div className="text-[9px] text-slate-500 mb-0.5">Manual Queue</div>
                      <div className="text-sm font-bold text-amber-400">{Math.round(48291 * (1 - confidenceThreshold / 100) * 0.9).toLocaleString()}</div>
                      <div className="text-[8px] text-slate-600">needs human review</div>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/50">
                      <div className="text-[9px] text-slate-500 mb-0.5">Est. Time Saved</div>
                      <div className="text-sm font-bold text-violet-400">{Math.round(confidenceThreshold * 0.8)}%</div>
                      <div className="text-[8px] text-slate-600">vs. full manual review</div>
                    </div>
                  </div>
                </div>

                {/* Batch Size */}
                <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-violet-500/15 rounded flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">Batch Size</h3>
                      <p className="text-[9px] text-slate-400">Documents per reviewer batch assignment</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[250, 500, 1000, 2000].map(v => (
                      <button
                        key={v}
                        onClick={() => setBatchSize(v)}
                        className={`flex-1 py-2 rounded-lg text-[10px] font-semibold transition-all border ${
                          batchSize === v
                            ? 'bg-violet-500/15 text-violet-400 border-violet-500/30'
                            : 'bg-slate-800/50 text-slate-500 border-slate-700/50 hover:text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {v.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Prioritization Strategy */}
            {expandedSection === 'priority' && (
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-amber-500/15 rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Document Prioritization</h3>
                    <p className="text-[9px] text-slate-400">How documents are ordered in reviewer queues</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {priorityOptions.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedPriority(opt.id)}
                      className={`flex items-start gap-2.5 p-3 rounded-lg border text-left transition-all ${
                        selectedPriority === opt.id
                          ? 'bg-amber-500/10 border-amber-500/30'
                          : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedPriority === opt.id ? 'bg-amber-500/20' : 'bg-slate-700/50'
                      }`}>
                        <svg className={`w-3 h-3 ${selectedPriority === opt.id ? 'text-amber-400' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={opt.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className={`text-[10px] font-semibold ${selectedPriority === opt.id ? 'text-amber-300' : 'text-slate-300'}`}>{opt.label}</div>
                        <div className="text-[9px] text-slate-500">{opt.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Deduplication */}
            {expandedSection === 'dedup' && (
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-cyan-500/15 rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Deduplication Strategy</h3>
                    <p className="text-[9px] text-slate-400">How duplicate documents are identified and grouped</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {dedupOptions.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedDedup(opt.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                        selectedDedup === opt.id
                          ? 'bg-cyan-500/10 border-cyan-500/30'
                          : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                          selectedDedup === opt.id ? 'border-cyan-400' : 'border-slate-600'
                        }`}>
                          {selectedDedup === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                        </div>
                        <div className="text-left">
                          <div className={`text-[10px] font-semibold ${selectedDedup === opt.id ? 'text-cyan-300' : 'text-slate-300'}`}>{opt.label}</div>
                          <div className="text-[9px] text-slate-500">{opt.desc}</div>
                        </div>
                      </div>
                      {selectedDedup === opt.id && (
                        <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                {/* Dedup impact */}
                <div className="mt-3 p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-slate-500">Estimated duplicates removed</span>
                    <span className="text-cyan-400 font-bold">{selectedDedup === 'exact' ? '2,341' : selectedDedup === 'near' ? '6,892' : '8,147'}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] mt-1">
                    <span className="text-slate-500">Remaining unique documents</span>
                    <span className="text-white font-bold">{selectedDedup === 'exact' ? '45,950' : selectedDedup === 'near' ? '41,399' : '40,144'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* AI Autonomy Level */}
            {expandedSection === 'autonomy' && (
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-violet-500/15 rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">AI Autonomy Level</h3>
                    <p className="text-[9px] text-slate-400">How much decision-making power the AI has</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {autonomyLevels.map(level => (
                    <button
                      key={level.id}
                      onClick={() => setAiAutonomy(level.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-all ${
                        aiAutonomy === level.id
                          ? level.id === 'flag' ? 'bg-slate-500/10 border-slate-500/30' 
                            : level.id === 'suggest' ? 'bg-teal-500/10 border-teal-500/30'
                            : 'bg-violet-500/10 border-violet-500/30'
                          : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-semibold ${
                          aiAutonomy === level.id
                            ? level.id === 'flag' ? 'text-slate-300' : level.id === 'suggest' ? 'text-teal-300' : 'text-violet-300'
                            : 'text-slate-300'
                        }`}>{level.label}</span>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full border font-medium ${level.color}`}>
                          {level.id === 'flag' ? 'Conservative' : level.id === 'suggest' ? 'Balanced' : 'Aggressive'}
                        </span>
                      </div>
                      <p className="text-[9px] text-slate-500">{level.desc}</p>
                    </button>
                  ))}
                </div>
                {/* Visual autonomy scale */}
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-[8px] text-slate-600 w-12">Human</span>
                  <div className="flex-1 flex gap-0.5">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all ${
                          aiAutonomy === 'flag' ? (i < 3 ? 'bg-slate-400' : 'bg-slate-800')
                          : aiAutonomy === 'suggest' ? (i < 6 ? 'bg-teal-400' : 'bg-slate-800')
                          : (i < 9 ? 'bg-violet-400' : 'bg-slate-800')
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[8px] text-slate-600 w-6 text-right">AI</span>
                </div>
              </div>
            )}

            {/* Reviewer Assignment */}
            {expandedSection === 'reviewers' && (
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-emerald-500/15 rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Reviewer Assignment</h3>
                    <p className="text-[9px] text-slate-400">Expertise-based routing for document batches</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {reviewerAssignments.map((reviewer, ri) => (
                    <div key={ri} className="flex items-center gap-3 p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/50">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${reviewer.color} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}>
                        {reviewer.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold text-white">{reviewer.name}</span>
                          <span className="text-[8px] text-slate-500">{reviewer.role}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-400">{reviewer.expertise}</span>
                          <span className="text-[8px] text-slate-600">Auto-route matching docs</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-teal-400">~{Math.round((48291 / reviewerAssignments.length / batchSize) * batchSize).toLocaleString()}</div>
                        <div className="text-[8px] text-slate-600">est. docs</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-2 bg-teal-500/5 rounded-lg border border-teal-500/10">
                  <div className="flex items-center gap-1.5 text-[9px] text-teal-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Privileged documents auto-route to Sarah Chen (Lead Reviewer)
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main eDiscovery App Container
export function EDiscoveryApp({ currentScreen = 0, onScreenChange, showHotspots = false }) {
  const screenIds = ['eca', 'protocol', 'params', 'subset', 'results']
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false)

  const currentView = screenIds[currentScreen] || 'eca'

  const handleNavigate = (view) => {
    const index = screenIds.indexOf(view)
    if (index !== -1 && onScreenChange) {
      onScreenChange(index)
    }
  }

  // Highlight the primary CTA on screens 0-2 to guide users through the flow
  const highlightNext = showHotspots && currentScreen < 3

  return (
    <div className="h-full relative">
      {currentView === 'eca' && (
        <EDiscoveryDashboard 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
          highlightNext={highlightNext}
        />
      )}
      {currentView === 'protocol' && (
        <EDiscoveryReviewQueue 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
          highlightNext={highlightNext}
        />
      )}
      {currentView === 'params' && (
        <EDiscoveryReviewParams 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
          highlightNext={highlightNext}
        />
      )}
      {currentView === 'subset' && (
        <EDiscoverySubsetResults 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)}
          highlightNext={highlightNext}
        />
      )}
      {currentView === 'results' && (
        <EDiscoveryCorpusResults 
          onNavigate={handleNavigate} 
          onOpenAI={() => setAiDrawerOpen(true)} 
        />
      )}
      
      <AIChatDrawer isOpen={aiDrawerOpen} onClose={() => setAiDrawerOpen(false)} />
    </div>
  )
}
