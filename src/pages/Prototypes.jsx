import { Link } from 'react-router-dom'
import { prototypes } from '../data/prototypes'

function Prototypes() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Interactive Experiences</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Prototypes
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore interactive prototypes from my projects. Click through user flows, 
              experience design decisions firsthand, and see how research translates into interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Prototypes Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {prototypes.map((proto) => (
              <Link 
                key={proto.id}
                to={`/prototypes/${proto.id}`}
                className="group block"
              >
                <article className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row">
                    {/* Thumbnail */}
                    <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary-50 to-sky-50 dark:from-primary-900/20 dark:to-sky-900/20">
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-full p-6 lg:p-10 flex items-center justify-center">
                        <img 
                          src={proto.thumbnail} 
                          alt={proto.title}
                          className="w-full h-auto max-h-80 object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Play indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-20 h-20 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-xl">
                          <svg className="w-8 h-8 text-primary-600 dark:text-primary-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proto.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {proto.title}
                      </h2>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">
                        {proto.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {proto.description}
                      </p>

                      {/* Case study link */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-500 dark:text-gray-400">From case study:</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {proto.caseStudyTitle}
                        </span>
                      </div>

                      {/* CTA */}
                      <div className="mt-8">
                        <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-4 transition-all">
                          Explore Prototype
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          {prototypes.length < 3 && (
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center p-8 bg-gray-100/50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 font-medium">More prototypes coming soon</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Check back for additional interactive experiences</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Prototypes
