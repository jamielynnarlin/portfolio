import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useEffect } from 'react'

// Shared zigzag path animation - consistent style across all cards
function ZigzagPathAnimation({ color, colorDim, bg1, bg2, lineDim, nodes, filterId }) {
  const points = nodes.map(n => [n.x, n.y])
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
  const totalDur = nodes.length * 0.35

  // Calculate cumulative progress at each node for accurate mapping
  const segLengths = []
  let totalLength = 0
  for (let i = 1; i < points.length; i++) {
    const dx = points[i][0] - points[i - 1][0]
    const dy = points[i][1] - points[i - 1][1]
    const len = Math.sqrt(dx * dx + dy * dy)
    segLengths.push(len)
    totalLength += len
  }
  const nodeProgress = [0]
  let cumLen = 0
  for (const len of segLengths) {
    cumLen += len
    nodeProgress.push(cumLen / totalLength)
  }

  // Single progress value drives both the line and the dot
  const progress = useMotionValue(0)

  useEffect(() => {
    const controls = animate(progress, [0, 1, 1], {
      duration: totalDur + 3, // totalDur active + 3s pause at end
      times: [0, totalDur / (totalDur + 3), 1],
      ease: 'linear',
      repeat: Infinity,
    })
    return () => controls.stop()
  }, [progress, totalDur])

  // Derive dot position from progress
  const dotX = useTransform(progress, nodeProgress, points.map(p => p[0]))
  const dotY = useTransform(progress, nodeProgress, points.map(p => p[1]))

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${bg1}, ${bg2})` }}>
      <svg viewBox="0 0 460 140" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Background path */}
        <path d={pathD} fill="none" stroke={lineDim} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Animated path draw - driven by shared progress */}
        <motion.path
          d={pathD} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ pathLength: progress }}
        />

        {/* Traveling dot - driven by same shared progress */}
        <motion.circle
          r="5" fill={color} filter={`url(#${filterId})`}
          style={{ cx: dotX, cy: dotY }}
        />

        {/* Station nodes with icons (on top of everything) */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Outer ring */}
            <motion.circle
              cx={node.x} cy={node.y} r="16" fill={colorDim} stroke={color} strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15 + i * 0.2, type: 'spring', stiffness: 400, damping: 15 }}
            />
            {/* Node lights up when dot arrives */}
            <motion.circle
              cx={node.x} cy={node.y} r="16" fill={color} opacity={0}
              animate={{ opacity: [0, 0.25, 0.15] }}
              transition={{ delay: (i / (nodes.length - 1)) * totalDur + 0.1, duration: 0.5, repeat: Infinity, repeatDelay: totalDur + 2.5 }}
            />
            {/* Icon */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 300, damping: 12 }}
            >
              {node.icon}
            </motion.g>
          </g>
        ))}

        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}


// --- Icon helpers (pure SVG, no text) ---

// Clipboard icon
const ClipboardIcon = ({ x, y, color }) => (
  <g transform={`translate(${x - 5}, ${y - 6})`}>
    <rect x="2" y="0" width="6" height="1.5" rx="0.75" fill={color} />
    <rect x="0" y="1" width="10" height="11" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" />
    <line x1="2.5" y1="4.5" x2="7.5" y2="4.5" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <line x1="2.5" y1="7" x2="7.5" y2="7" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <line x1="2.5" y1="9.5" x2="5.5" y2="9.5" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </g>
)

// Code brackets icon
const CodeIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <polyline points="-6,-5 -10,0 -6,5" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="6,-5 10,0 6,5" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="-6" x2="-2" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </g>
)

// Checkmark icon
const CheckIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <polyline points="-6,0 -2,5 7,-5" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </g>
)

// Eye icon
const EyeIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <ellipse cx="0" cy="0" rx="9" ry="5.5" fill="none" stroke={color} strokeWidth="1.5" />
    <circle cx="0" cy="0" r="2.5" fill={color} />
  </g>
)

// Rocket icon
const RocketIcon = ({ x, y, color, bgColor }) => (
  <g transform={`translate(${x}, ${y})`}>
    <path d="M0,-7 C3.5,-7 7,-2 7,3.5 L3.5,5.5 L0,1.5 L-3.5,5.5 L-7,3.5 C-7,-2 -3.5,-7 0,-7Z" fill={color} opacity="0.9" />
    <circle cx="0" cy="-1.5" r="1.8" fill={bgColor || '#064e3b'} />
  </g>
)

// Pen tool icon (Design)
const PenToolIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <path d="M-2,-8 L2,-8 L6,5 L0,8 L-6,5 Z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="0" cy="0" r="2" fill={color} />
  </g>
)

// Gear icon (Engineering)
const GearIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle cx="0" cy="0" r="3.5" fill="none" stroke={color} strokeWidth="1.5" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
      <line key={angle}
        x1={Math.cos(angle * Math.PI / 180) * 5.5}
        y1={Math.sin(angle * Math.PI / 180) * 5.5}
        x2={Math.cos(angle * Math.PI / 180) * 7.5}
        y2={Math.sin(angle * Math.PI / 180) * 7.5}
        stroke={color} strokeWidth="2" strokeLinecap="round"
      />
    ))}
  </g>
)

// People/users icon (Team)
const PeopleIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle cx="-4" cy="-3" r="2.5" fill={color} />
    <path d="M-8,4 Q-4,-1 0,4" fill={color} opacity="0.7" />
    <circle cx="4" cy="-3" r="2.5" fill={color} />
    <path d="M0,4 Q4,-1 8,4" fill={color} opacity="0.7" />
  </g>
)

// Grid/layout icon (Systems)
const GridIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect x="-7" y="-7" width="6" height="6" rx="1.2" fill={color} />
    <rect x="1" y="-7" width="6" height="6" rx="1.2" fill={color} opacity="0.7" />
    <rect x="-7" y="1" width="6" height="6" rx="1.2" fill={color} opacity="0.7" />
    <rect x="1" y="1" width="6" height="6" rx="1.2" fill={color} opacity="0.5" />
  </g>
)

// Chart/metrics icon (Measurement)
const ChartIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect x="-7" y="1" width="3.5" height="6" rx="0.8" fill={color} opacity="0.5" />
    <rect x="-2" y="-3" width="3.5" height="10" rx="0.8" fill={color} opacity="0.7" />
    <rect x="3" y="-7" width="3.5" height="14" rx="0.8" fill={color} />
  </g>
)

// Document stack icon
const DocStackIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect x="-5" y="-6" width="10" height="13" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" />
    <line x1="-2.5" y1="-2" x2="2.5" y2="-2" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <line x1="-2.5" y1="1" x2="4" y2="1" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <line x1="-2.5" y1="4" x2="1.5" y2="4" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </g>
)

// Magnifying glass icon (Search)
const SearchIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle cx="-1.5" cy="-1.5" r="5.5" fill="none" stroke={color} strokeWidth="1.8" />
    <line x1="2.5" y1="2.5" x2="7" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </g>
)

// Brain/neural icon (AI)
const BrainIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle cx="0" cy="0" r="8" fill="none" stroke={color} strokeWidth="1.5" />
    <circle cx="-3" cy="-2.5" r="1.8" fill={color} />
    <circle cx="3" cy="-2.5" r="1.8" fill={color} />
    <circle cx="0" cy="3" r="1.8" fill={color} />
    <line x1="-3" y1="-2.5" x2="3" y2="-2.5" stroke={color} strokeWidth="0.8" />
    <line x1="-3" y1="-2.5" x2="0" y2="3" stroke={color} strokeWidth="0.8" />
    <line x1="3" y1="-2.5" x2="0" y2="3" stroke={color} strokeWidth="0.8" />
  </g>
)

// Tag/label icon
const TagIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <path d="M-7,-5 L2,-5 L7,0 L2,5 L-7,5 Z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="-3" cy="0" r="1.5" fill={color} />
  </g>
)

// Folder/check icon (Categorized)
const FolderCheckIcon = ({ x, y, color }) => (
  <g transform={`translate(${x}, ${y})`}>
    <path d="M-7,-5 L-2,-5 L0,-7 L7,-7 L7,5 L-7,5 Z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <polyline points="-3,0 -1,3 4,-2" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </g>
)


// =====================================================================
// AI Powered Development Workflow
// Zigzag path: Plan → Code → Test → Review → Ship
// =====================================================================
export function WorkflowPipelineAnimation() {
  const { isDark } = useTheme()
  const color = isDark ? '#34d399' : '#10b981'
  const colorDim = isDark ? '#064e3b' : '#d1fae5'
  const bg1 = isDark ? '#0f172a' : '#ecfdf5'
  const bg2 = isDark ? '#1e293b' : '#f0fdf4'
  const lineDim = isDark ? '#1e293b' : '#d1fae5'
  const iconColor = isDark ? '#d1fae5' : '#064e3b'

  const nodes = [
    { x: 55,  y: 55, icon: <ClipboardIcon x={55}  y={55} color={iconColor} /> },
    { x: 135, y: 95, icon: <CodeIcon      x={135} y={95} color={iconColor} /> },
    { x: 215, y: 55, icon: <CheckIcon     x={215} y={55} color={iconColor} /> },
    { x: 295, y: 95, icon: <EyeIcon       x={295} y={95} color={iconColor} /> },
    { x: 375, y: 55, icon: <RocketIcon    x={375} y={55} color={iconColor} bgColor={colorDim} /> },
  ]

  return (
    <ZigzagPathAnimation
      color={color} colorDim={colorDim}
      bg1={bg1} bg2={bg2} lineDim={lineDim}
      nodes={nodes} filterId="glow-workflow"
    />
  )
}


// =====================================================================
// DesignOps Transformation
// Morphing icon: cycles through each discipline icon in a single node,
// then all 5 burst outward into a celebratory ring with sparkles
// =====================================================================
export function DesignOpsTransformAnimation() {
  const { isDark } = useTheme()
  const color = isDark ? '#a78bfa' : '#8b5cf6'
  const colorDim = isDark ? '#1e1b4b' : '#ede9fe'
  const bg1 = isDark ? '#0f172a' : '#f5f3ff'
  const bg2 = isDark ? '#1e293b' : '#ede9fe'
  const iconColor = isDark ? '#ede9fe' : '#3b0764'

  const cx = 230
  const cy = 70

  // Each icon shows for ~0.7s, total cycle = 5 * 0.7 = 3.5s
  const iconDur = 0.7
  const cycleDur = 5 * iconDur
  const burstDelay = cycleDur + 0.3
  const totalLoop = burstDelay + 3.5

  // Burst ring positions (5 icons in a circle)
  const burstRadius = 55
  const burstPositions = [0, 1, 2, 3, 4].map(i => {
    const angle = (-90 + i * 72) * Math.PI / 180
    return { x: cx + Math.cos(angle) * burstRadius, y: cy + Math.sin(angle) * burstRadius }
  })

  const iconRenderers = [
    (x, y) => <PenToolIcon x={x} y={y} color={iconColor} />,
    (x, y) => <GearIcon x={x} y={y} color={iconColor} />,
    (x, y) => <PeopleIcon x={x} y={y} color={iconColor} />,
    (x, y) => <GridIcon x={x} y={y} color={iconColor} />,
    (x, y) => <ChartIcon x={x} y={y} color={iconColor} />,
  ]

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${bg1}, ${bg2})` }}>
      <svg viewBox="0 0 460 140" className="w-full h-full" preserveAspectRatio="xMidYMid meet">

        {/* Center morphing node - base circle */}
        <circle cx={cx} cy={cy} r="22" fill={colorDim} stroke={color} strokeWidth="2.5" />

        {/* Pulsing ring during cycling */}
        <motion.circle
          cx={cx} cy={cy} r="22" fill="none" stroke={color} strokeWidth="1.5"
          animate={{ opacity: [0, 0.4, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: iconDur, repeat: 4, delay: 0.1 }}
        />

        {/* Cycling icons - each fades in/out in sequence */}
        {iconRenderers.map((renderIcon, i) => (
          <motion.g key={`morph-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              scale: [0.5, 0.5, 1, 1, 0.5, 0.5],
            }}
            transition={{
              duration: cycleDur,
              times: [
                0,
                (i * iconDur) / cycleDur,
                (i * iconDur + 0.12) / cycleDur,
                ((i + 1) * iconDur - 0.12) / cycleDur,
                ((i + 1) * iconDur) / cycleDur,
                1,
              ],
              repeat: Infinity,
              repeatDelay: totalLoop - cycleDur,
            }}
          >
            {renderIcon(cx, cy)}
          </motion.g>
        ))}

        {/* Flash on center when burst happens */}
        <motion.circle
          cx={cx} cy={cy} r="28" fill={color}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.4, 1.6] }}
          transition={{ delay: burstDelay, duration: 0.5, repeat: Infinity, repeatDelay: totalLoop - 0.5 }}
        />

        {/* Burst: all 5 icons fly outward into a ring */}
        {burstPositions.map((bp, i) => (
          <motion.g key={`burst-${i}`}>
            {/* Node circle at burst position */}
            <motion.circle
              cx={bp.x} cy={bp.y} r="16"
              fill={colorDim} stroke={color} strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1, 1, 0] }}
              transition={{
                duration: totalLoop,
                times: [0, burstDelay / totalLoop, (burstDelay + 0.3) / totalLoop, (burstDelay + 2.8) / totalLoop, (burstDelay + 3.2) / totalLoop],
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            {/* Icon at burst position */}
            <motion.g
              initial={{ opacity: 0, x: cx - bp.x, y: cy - bp.y, scale: 0.3 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                x: [cx - bp.x, cx - bp.x, 0, 0, 0],
                y: [cy - bp.y, cy - bp.y, 0, 0, 0],
                scale: [0.3, 0.3, 1.15, 1, 0],
              }}
              transition={{
                duration: totalLoop,
                times: [0, burstDelay / totalLoop, (burstDelay + 0.35) / totalLoop, (burstDelay + 2.8) / totalLoop, (burstDelay + 3.2) / totalLoop],
                repeat: Infinity,
              }}
            >
              {iconRenderers[i](bp.x, bp.y)}
            </motion.g>
          </motion.g>
        ))}

        {/* Sparkle ring explosion */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30) * Math.PI / 180
          const r1 = 35
          const r2 = 75
          return (
            <motion.circle key={`spark-${i}`}
              r="2.5" fill={color}
              initial={{ cx: cx + Math.cos(angle) * r1, cy: cy + Math.sin(angle) * r1, opacity: 0 }}
              animate={{
                cx: [cx + Math.cos(angle) * r1, cx + Math.cos(angle) * r1, cx + Math.cos(angle) * r2],
                cy: [cy + Math.sin(angle) * r1, cy + Math.sin(angle) * r1, cy + Math.sin(angle) * r2],
                opacity: [0, 0, 0.8, 0],
                scale: [0, 0, 1.5, 0],
              }}
              transition={{
                duration: totalLoop,
                times: [0, burstDelay / totalLoop, (burstDelay + 0.15) / totalLoop, (burstDelay + 0.7) / totalLoop],
                repeat: Infinity,
              }}
            />
          )
        })}

        {/* Connecting arcs between burst nodes (appear after burst) */}
        {burstPositions.map((bp, i) => {
          const next = burstPositions[(i + 1) % 5]
          return (
            <motion.line key={`arc-${i}`}
              x1={bp.x} y1={bp.y} x2={next.x} y2={next.y}
              stroke={color} strokeWidth="1.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 0, 1, 1, 0],
                opacity: [0, 0, 0.4, 0.4, 0],
              }}
              transition={{
                duration: totalLoop,
                times: [0, (burstDelay + 0.4) / totalLoop, (burstDelay + 0.9) / totalLoop, (burstDelay + 2.8) / totalLoop, (burstDelay + 3.2) / totalLoop],
                repeat: Infinity,
              }}
            />
          )
        })}

        <defs>
          <filter id="glow-designops" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}


// =====================================================================
// Conversational Document Review
// AI Speed: Icons appear slowly one by one (manual), then brain icon
// activates and replays the sequence instantly with speed streaks,
// showing AI making the process dramatically faster
// =====================================================================
export function DocumentReviewAnimation() {
  const { isDark } = useTheme()
  const color = isDark ? '#38bdf8' : '#0284c7'
  const colorDim = isDark ? '#0c4a6e' : '#ffffff'
  const bg1 = isDark ? '#0f172a' : '#f0f9ff'
  const bg2 = isDark ? '#1e293b' : '#e0f2fe'
  const iconColor = isDark ? '#e0f2fe' : '#0c4a6e'
  const dimIcon = isDark ? '#475569' : '#94a3b8'

  // Task icons in a row
  const taskIcons = [
    { x: 60,  icon: (x, y, c) => <DocStackIcon x={x} y={y} color={c} /> },
    { x: 140, icon: (x, y, c) => <SearchIcon x={x} y={y} color={c} /> },
    { x: 220, icon: (x, y, c) => <TagIcon x={x} y={y} color={c} /> },
    { x: 300, icon: (x, y, c) => <FolderCheckIcon x={x} y={y} color={c} /> },
  ]
  const taskY = 70
  const brainX = 390
  const brainY = 70

  // Phase 1: slow manual (0-4s) - icons appear one by one
  // Phase 2: brain activates (4-4.5s) - flash + pulse
  // Phase 3: fast replay (4.5-5.5s) - all icons light up rapidly with streaks
  // Phase 4: celebration (5.5-7s) - everything glows
  // Reset at 8.5s
  const slowStart = 0.3
  const slowPerIcon = 0.8
  const brainActivate = slowStart + taskIcons.length * slowPerIcon + 0.3
  const fastStart = brainActivate + 0.6
  const fastPerIcon = 0.12
  const celebrateStart = fastStart + taskIcons.length * fastPerIcon + 0.2
  const totalLoop = celebrateStart + 2.5

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${bg1}, ${bg2})` }}>
      <svg viewBox="0 0 460 140" className="w-full h-full" preserveAspectRatio="xMidYMid meet">

        {/* Task icon node circles (always visible) */}
        {taskIcons.map((ti, i) => (
          <g key={`base-${i}`}>
            <circle cx={ti.x} cy={taskY} r="16" fill={colorDim} stroke={color} strokeWidth="2" opacity="0.5" />
          </g>
        ))}

        {/* Brain node circle (always visible, slightly larger) */}
        <circle cx={brainX} cy={brainY} r="20" fill={colorDim} stroke={color} strokeWidth="2" opacity="0.5" />

        {/* Phase 1: Slow manual fill - icons appear one by one with dim color */}
        {taskIcons.map((ti, i) => (
          <motion.g key={`slow-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              scale: [0.5, 0.5, 1, 1, 1, 1],
            }}
            transition={{
              duration: totalLoop,
              times: [
                0,
                (slowStart + i * slowPerIcon) / totalLoop,
                (slowStart + i * slowPerIcon + 0.3) / totalLoop,
                (brainActivate - 0.1) / totalLoop,
                brainActivate / totalLoop,
                1,
              ],
              repeat: Infinity,
            }}
          >
            {/* Fill circle */}
            <circle cx={ti.x} cy={taskY} r="16" fill={color} stroke={color} strokeWidth="2" opacity="0.15" />
            {ti.icon(ti.x, taskY, dimIcon)}
          </motion.g>
        ))}

        {/* Brain icon - appears with the slow phase, stays dim */}
        <motion.g
          animate={{
            opacity: [0, 0, 0.4, 0.4, 1, 1, 0],
          }}
          transition={{
            duration: totalLoop,
            times: [0, 0.02, 0.05, (brainActivate - 0.1) / totalLoop, brainActivate / totalLoop, (totalLoop - 0.5) / totalLoop, 1],
            repeat: Infinity,
          }}
        >
          <BrainIcon x={brainX} y={brainY} color={iconColor} />
        </motion.g>

        {/* Brain activation flash */}
        <motion.circle
          cx={brainX} cy={brainY} r="20" fill={color}
          animate={{
            opacity: [0, 0, 0.6, 0, 0],
            scale: [1, 1, 1.5, 1.8, 1],
          }}
          transition={{
            duration: totalLoop,
            times: [0, (brainActivate - 0.05) / totalLoop, brainActivate / totalLoop, (brainActivate + 0.4) / totalLoop, (brainActivate + 0.6) / totalLoop],
            repeat: Infinity,
          }}
        />

        {/* Brain pulsing ring after activation */}
        <motion.circle
          cx={brainX} cy={brainY} r="24" fill="none" stroke={color} strokeWidth="1.5"
          animate={{
            opacity: [0, 0, 0.4, 0, 0.4, 0, 0],
            scale: [1, 1, 1, 1.3, 1, 1.3, 1],
          }}
          transition={{
            duration: totalLoop,
            times: [0, brainActivate / totalLoop, (brainActivate + 0.1) / totalLoop, (brainActivate + 0.5) / totalLoop, (brainActivate + 0.6) / totalLoop, (brainActivate + 1) / totalLoop, (brainActivate + 1.2) / totalLoop],
            repeat: Infinity,
          }}
        />

        {/* Speed streaks: brain to each icon (during fast phase) */}
        {taskIcons.map((ti, i) => (
          <motion.line key={`streak-${i}`}
            x1={brainX - 10} y1={brainY}
            x2={ti.x + 16} y2={taskY}
            stroke={color} strokeWidth="2" strokeLinecap="round"
            animate={{
              opacity: [0, 0, 0.7, 0, 0],
              pathLength: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: totalLoop,
              times: [
                0,
                (fastStart + i * fastPerIcon) / totalLoop,
                (fastStart + i * fastPerIcon + 0.06) / totalLoop,
                (fastStart + i * fastPerIcon + 0.2) / totalLoop,
                (fastStart + i * fastPerIcon + 0.4) / totalLoop,
              ],
              repeat: Infinity,
            }}
          />
        ))}

        {/* Phase 3: Fast AI fill - icons light up rapidly in accent color */}
        {taskIcons.map((ti, i) => (
          <motion.g key={`fast-${i}`}>
            {/* Bright fill */}
            <motion.circle
              cx={ti.x} cy={taskY} r="16" fill={color}
              animate={{
                opacity: [0, 0, 0.3, 0.3, 0],
              }}
              transition={{
                duration: totalLoop,
                times: [
                  0,
                  (fastStart + i * fastPerIcon) / totalLoop,
                  (fastStart + i * fastPerIcon + 0.08) / totalLoop,
                  (totalLoop - 0.5) / totalLoop,
                  1,
                ],
                repeat: Infinity,
              }}
            />
            {/* Bright icon */}
            <motion.g
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale: [0.3, 0.3, 1.15, 1, 1],
              }}
              transition={{
                duration: totalLoop,
                times: [
                  0,
                  (fastStart + i * fastPerIcon) / totalLoop,
                  (fastStart + i * fastPerIcon + 0.1) / totalLoop,
                  (totalLoop - 0.5) / totalLoop,
                  1,
                ],
                repeat: Infinity,
              }}
            >
              {ti.icon(ti.x, taskY, iconColor)}
            </motion.g>
            {/* Pop ring */}
            <motion.circle
              cx={ti.x} cy={taskY} r="16" fill="none" stroke={color} strokeWidth="2"
              animate={{
                opacity: [0, 0, 0.6, 0, 0],
                scale: [1, 1, 1, 1.6, 1],
              }}
              transition={{
                duration: totalLoop,
                times: [
                  0,
                  (fastStart + i * fastPerIcon) / totalLoop,
                  (fastStart + i * fastPerIcon + 0.05) / totalLoop,
                  (fastStart + i * fastPerIcon + 0.35) / totalLoop,
                  (fastStart + i * fastPerIcon + 0.5) / totalLoop,
                ],
                repeat: Infinity,
              }}
            />
          </motion.g>
        ))}

        {/* Celebration sparkles */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 36) * Math.PI / 180
          const sparkX = 200 + Math.cos(angle) * 90
          const sparkY = 70 + Math.sin(angle) * 55
          return (
            <motion.circle key={`cel-${i}`}
              cx={sparkX} cy={sparkY} r="2" fill={color}
              animate={{
                opacity: [0, 0, 0.8, 0, 0],
                scale: [0, 0, 1.5, 0, 0],
              }}
              transition={{
                duration: totalLoop,
                times: [
                  0,
                  (celebrateStart + i * 0.04) / totalLoop,
                  (celebrateStart + 0.2 + i * 0.04) / totalLoop,
                  (celebrateStart + 0.6 + i * 0.04) / totalLoop,
                  1,
                ],
                repeat: Infinity,
              }}
            />
          )
        })}

        <defs>
          <filter id="glow-docreview" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}
