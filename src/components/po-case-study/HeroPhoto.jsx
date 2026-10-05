import { useEffect, useRef, useState } from 'react'

// Projective transform mapping a w×h element onto quad [tl, tr, br, bl], as a CSS matrix3d
function quadMatrix(w, h, [[x0, y0], [x1, y1], [x2, y2], [x3, y3]]) {
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3
  const det = dx1 * dy2 - dx2 * dy1
  const g = (dx3 * dy2 - dx2 * dy3) / det
  const k = (dx1 * dy3 - dx3 * dy1) / det
  const a = x1 - x0 + g * x1, b = x3 - x0 + k * x3
  const d = y1 - y0 + g * y1, e = y3 - y0 + k * y3
  return `matrix3d(${a / w}, ${d / w}, 0, ${g / w}, ${b / h}, ${e / h}, 0, ${k / h}, 0, 0, 1, 0, ${x0}, ${y0}, 0, 1)`
}

// Background photo that covers its container (like object-fit: cover). When the
// photo has a `screenQuad` (screen corners in image pixels, after any flip),
// `screen` is rendered at desktop size and warped onto that display.
export function HeroPhoto({ photo, screen, screenWidth = 1280, screenHeight = 800 }) {
  const sceneRef = useRef(null)
  const [sceneWidth, setSceneWidth] = useState(0)
  const ratio = photo.height / photo.width

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setSceneWidth(entry.contentRect.width))
    observer.observe(sceneRef.current)
    return () => observer.disconnect()
  }, [])

  const scale = sceneWidth / photo.width
  // Grow the quad slightly so none of the original screen shows at the edges
  const quad = photo.screenQuad?.map(([x, y], _, all) => {
    const cx = all.reduce((sum, p) => sum + p[0], 0) / 4
    const cy = all.reduce((sum, p) => sum + p[1], 0) / 4
    return [(cx + (x - cx) * 1.015) * scale, (cy + (y - cy) * 1.015) * scale]
  })

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ containerType: 'size' }}>
      <div
        ref={sceneRef}
        className="absolute"
        style={{
          '--w': `max(100cqw, calc(100cqh / ${ratio}))`,
          '--h': `calc(var(--w) * ${ratio})`,
          width: 'var(--w)',
          height: 'var(--h)',
          left: 'calc((100cqw - var(--w)) / 2)',
          top: `calc((100cqh - var(--h)) * ${photo.focusY ?? 0.5})`,
        }}
      >
        <img
          src={photo.src}
          alt={photo.alt || ''}
          className="absolute inset-0 h-full w-full"
          style={photo.flip ? { transform: 'scaleX(-1)' } : undefined}
        />
        {screen && quad && sceneWidth > 0 && (
          <div
            className="absolute left-0 top-0 overflow-hidden bg-slate-950 pointer-events-none select-none"
            style={{
              width: screenWidth,
              height: screenHeight,
              transformOrigin: '0 0',
              transform: quadMatrix(screenWidth, screenHeight, quad),
            }}
          >
            {screen}
          </div>
        )}
      </div>
    </div>
  )
}
