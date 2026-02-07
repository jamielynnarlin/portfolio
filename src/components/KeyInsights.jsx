// Key Insights Component - Clean card-based layout
// Simple, minimal design inspired by modern SaaS sites

export function KeyInsights({ highlights, sectionIndex = 0 }) {
  return (
    <div className="mt-10 p-6 md:p-8 bg-gray-100 dark:bg-gray-800/50 rounded-2xl">
      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Left side - Title */}
        <div className="lg:w-48 flex-shrink-0 mb-6 lg:mb-0">
          <h4 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight leading-tight">
            Key<br />Takeaways
          </h4>
        </div>

        {/* Right side - Cards Grid */}
        <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="group flex items-center justify-between gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-snug">
                {item}
              </span>
              <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeyInsights
