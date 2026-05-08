import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { darkMode, toggleDarkMode } = useTheme()
  const buttonRef = useRef(null)

  return (
    <motion.button
      ref={buttonRef}
      onClick={toggleDarkMode}
      className={`relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors overflow-hidden ${className}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Soft glow ring on toggle */}
      <motion.span
        key={darkMode ? 'dark-glow' : 'light-glow'}
        className="absolute inset-0 rounded-xl"
        initial={{ boxShadow: darkMode 
          ? '0 0 0px 0px rgba(250, 204, 21, 0)' 
          : '0 0 0px 0px rgba(99, 102, 241, 0)' 
        }}
        animate={{ 
          boxShadow: [
            darkMode 
              ? '0 0 0px 0px rgba(250, 204, 21, 0)' 
              : '0 0 0px 0px rgba(99, 102, 241, 0)',
            darkMode 
              ? '0 0 12px 4px rgba(250, 204, 21, 0.4)' 
              : '0 0 12px 4px rgba(99, 102, 241, 0.4)',
            darkMode 
              ? '0 0 0px 0px rgba(250, 204, 21, 0)' 
              : '0 0 0px 0px rgba(99, 102, 241, 0)',
          ]
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <div className="relative w-5 h-5">
        <AnimatePresence mode="wait" initial={false}>
          {darkMode ? (
            <motion.svg
              key="sun"
              className="w-5 h-5 absolute inset-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: -45, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 45, scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              className="w-5 h-5 absolute inset-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: 45, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -45, scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  )
}
