import { useEffect, useRef } from 'react'

const COUNT = 150

function makeBit(W, H, randomY) {
  return {
    x:      Math.random() * W,
    y:      randomY ? Math.random() * H : -Math.random() * 40,
    value:  Math.round(Math.random()),
    speed:  0.55 + Math.random() * 0.85,
    size:   11 + Math.floor(Math.random() * 8),
    alpha:  0.35 + Math.random() * 0.55,
    purple: Math.random() < 0.12,
  }
}

export default function BinaryBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let bits     = []
    let loopId   = null
    let W, H

    function init() {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W
      canvas.height = H
      bits = Array.from({ length: COUNT }, () => makeBit(W, H, true))
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      ctx.textBaseline = 'top'

      for (const b of bits) {
        if (b.y >= 0 && b.y <= H) {
          const fadeOut = b.y > H * 0.8
            ? 1 - (b.y - H * 0.8) / (H * 0.2)
            : 1

          ctx.globalAlpha = b.alpha * fadeOut
          ctx.font        = `bold ${b.size}px "Courier New", monospace`
          ctx.fillStyle   = b.purple ? '#c180ff' : '#6bff8f'
          ctx.fillText(b.value.toString(), b.x, b.y)
        }

        b.y += b.speed

        if (b.y > H + 10) {
          Object.assign(b, makeBit(W, H, false))
        }
      }

      ctx.globalAlpha = 1
    }

    function startLoop() {
      if (loopId) clearInterval(loopId)
      loopId = setInterval(draw, 40)
    }

    const ro = new ResizeObserver(() => { init() })
    ro.observe(canvas)

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startLoop()
      } else {
        clearInterval(loopId)
      }
    }, { threshold: 0.1 })
    io.observe(canvas)

    init()
    startLoop()

    return () => {
      clearInterval(loopId)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}
