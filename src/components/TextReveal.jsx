import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function TextReveal({ text, as: Tag = 'h1', className = '', delay = 0, staggerDelay = 0.04 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={`${className} overflow-hidden`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

function LineReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export { TextReveal, LineReveal }
export default TextReveal
