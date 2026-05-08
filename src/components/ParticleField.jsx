import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const COUNT = 140
const REPEL_RADIUS = 160
const CONNECT_DIST = 100
const COLORS = [
  [94, 234, 212],   // teal-300
  [153, 246, 228],  // teal-200
  [45, 212, 191],   // teal-400
  [204, 251, 241],  // teal-100
]

function initParticles() {
  return Array.from({ length: COUNT }, () => ({
    fx: Math.random(),
    fy: Math.random(),
    size: 0.8 + Math.random() * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: 0.3 + Math.random() * 0.5,
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
    speedX: 0.0003 + Math.random() * 0.0008,
    speedY: 0.0003 + Math.random() * 0.0008,
    driftX: 20 + Math.random() * 60,
    driftY: 15 + Math.random() * 45,
    dx: 0,
    dy: 0,
    renderX: 0,
    renderY: 0,
  }))
}

export default function ParticleField() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999, active: false })
  const particles = useRef(initParticles())
  const frame = useRef(null)
  const { darkMode } = useTheme()
  const darkRef = useRef(darkMode)

  useEffect(() => { darkRef.current = darkMode }, [darkMode])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let dpr = window.devicePixelRatio || 1

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onPointer = (e) => {
      const r = canvas.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      mouse.current = {
        x, y,
        active: x >= 0 && y >= 0 && x <= r.width && y <= r.height,
      }
    }
    const onLeave = () => { mouse.current.active = false }

    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    const loop = (t) => {
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      const isDark = darkRef.current

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      const { x: mx, y: my, active } = mouse.current

      // Cursor glow halo
      if (active) {
        const gr = ctx.createRadialGradient(mx, my, 0, mx, my, REPEL_RADIUS)
        gr.addColorStop(0, `rgba(94,234,212,${isDark ? 0.12 : 0.07})`)
        gr.addColorStop(1, 'rgba(94,234,212,0)')
        ctx.fillStyle = gr
        ctx.beginPath()
        ctx.arc(mx, my, REPEL_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      const ps = particles.current
      const nearby = []

      for (const p of ps) {
        // Base + ambient drift
        const bx = p.fx * w
        const by = p.fy * h
        const ox = Math.sin(t * p.speedX + p.phaseX) * p.driftX
        const oy = Math.cos(t * p.speedY + p.phaseY) * p.driftY
        const tx = bx + ox
        const ty = by + oy

        // Mouse repulsion
        if (active) {
          const ddx = tx + p.dx - mx
          const ddy = ty + p.dy - my
          const dist = Math.sqrt(ddx * ddx + ddy * ddy)
          if (dist < REPEL_RADIUS && dist > 1) {
            const s = ((1 - dist / REPEL_RADIUS) ** 2) * 50 * 0.03
            p.dx += (ddx / dist) * s
            p.dy += (ddy / dist) * s
          }
        }

        // Spring damping
        p.dx *= 0.94
        p.dy *= 0.94

        const rx = tx + p.dx
        const ry = ty + p.dy
        p.renderX = rx
        p.renderY = ry

        // Brightness boost near cursor
        let boost = 0
        if (active) {
          const cd = Math.sqrt((rx - mx) ** 2 + (ry - my) ** 2)
          if (cd < REPEL_RADIUS * 2) {
            boost = (1 - cd / (REPEL_RADIUS * 2)) * 0.5
            nearby.push(p)
          }
        }

        const a = Math.min(1, (isDark ? p.alpha : p.alpha * 0.55) + boost)
        const [cr, cg, cb] = p.color

        // Glow halo per particle
        const gs = p.size * 4
        const g = ctx.createRadialGradient(rx, ry, 0, rx, ry, gs)
        g.addColorStop(0, `rgba(${cr},${cg},${cb},${(a * 0.35).toFixed(3)})`)
        g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(rx, ry, gs, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${a.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(rx, ry, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Connection lines near cursor (neural network effect)
      if (active && nearby.length > 1) {
        ctx.lineWidth = 0.5
        for (let i = 0; i < nearby.length; i++) {
          for (let j = i + 1; j < nearby.length; j++) {
            const a = nearby[i], b = nearby[j]
            const d = Math.sqrt((a.renderX - b.renderX) ** 2 + (a.renderY - b.renderY) ** 2)
            if (d < CONNECT_DIST) {
              const lineAlpha = (1 - d / CONNECT_DIST) * (isDark ? 0.2 : 0.12)
              ctx.strokeStyle = `rgba(94,234,212,${lineAlpha.toFixed(3)})`
              ctx.beginPath()
              ctx.moveTo(a.renderX, a.renderY)
              ctx.lineTo(b.renderX, b.renderY)
              ctx.stroke()
            }
          }
        }
      }

      frame.current = requestAnimationFrame(loop)
    }

    frame.current = requestAnimationFrame(loop)

    return () => {
      ro.disconnect()
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('mouseleave', onLeave)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
