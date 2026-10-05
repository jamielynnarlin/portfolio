import { motion } from 'framer-motion'

// Writing guidance shown above a section when the template is previewed with
// `showGuidance`. Never rendered on a published case study.
export function GuidanceNote({ section }) {
  return (
    <aside className="mb-8 rounded-xl border border-dashed border-amber-300 dark:border-amber-500/50 bg-amber-50/70 dark:bg-amber-500/10 p-5 text-sm">
      <p className="text-amber-900 dark:text-amber-200">
        <span className="font-semibold">Purpose: </span>{section.purpose}
      </p>
      <p className="mt-2 text-amber-900 dark:text-amber-200">
        <span className="font-semibold">Length: </span>{section.length}
      </p>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        <div>
          <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Include</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            {section.include.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-rose-800 dark:text-rose-300 mb-1">Avoid</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            {section.avoid.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </aside>
  )
}

// Section wrapper. `section` is an entry from poSections.
export function Section({ section, showGuidance = false, children }) {
  return (
    <motion.section
      id={section.id}
      className="scroll-mt-28 py-12 border-t border-gray-200 dark:border-gray-800 first:border-t-0 first:pt-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="font-display text-3xl md:text-4xl text-navy-900 dark:text-white uppercase tracking-wide mb-6">
        {section.title}
      </h2>
      {showGuidance && <GuidanceNote section={section} />}
      {children}
    </motion.section>
  )
}
