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
