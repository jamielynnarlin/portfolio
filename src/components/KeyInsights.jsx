// Key Insights Component - Visually impactful card-based layout
import { motion } from 'framer-motion'

export function KeyInsights({ highlights, sectionIndex = 0 }) {
  const icons = [
    // No recording icon
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>,
    // Hidden/buried icon
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>,
    // Can't prove work icon
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
  ]

  const colors = [
    { bg: 'from-rose-500 to-orange-500', light: 'bg-rose-50 dark:bg-slate-800', border: 'border-rose-200 dark:border-rose-400/50' },
    { bg: 'from-amber-500 to-yellow-500', light: 'bg-amber-50 dark:bg-slate-800', border: 'border-amber-200 dark:border-amber-400/50' },
    { bg: 'from-violet-500 to-purple-500', light: 'bg-violet-50 dark:bg-slate-800', border: 'border-violet-200 dark:border-violet-400/50' },
  ]

  return (
    <motion.div 
      className="mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Section header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-300 mb-2 block">
          Research Findings
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
          Key Takeaways
        </h3>
      </motion.div>

      {/* Cards Grid - 3 columns */}
      <div className="grid md:grid-cols-3 gap-5">
        {highlights.slice(0, 3).map((item, i) => (
          <motion.div
            key={i}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br ${colors[i]?.bg || 'from-gray-400 to-gray-500'} rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
            
            <div className={`relative ${colors[i]?.light || 'bg-gray-50'} rounded-2xl p-6 border ${colors[i]?.border || 'border-gray-200'} h-full hover:shadow-lg transition-all duration-300`}>
              {/* Icon */}
              <motion.div 
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[i]?.bg || 'from-gray-400 to-gray-500'} flex items-center justify-center text-white mb-4 shadow-md`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icons[i]}
              </motion.div>

              {/* Text */}
              <p className="text-base font-semibold text-gray-800 dark:text-white leading-snug">
                {item}
              </p>

              {/* Decorative number */}
              <div className="absolute top-3 right-4 text-5xl font-black text-gray-200 dark:text-gray-600/50 select-none pointer-events-none">
                {i + 1}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default KeyInsights
