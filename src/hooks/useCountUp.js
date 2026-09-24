import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/** Animates from 0 to `target` once `active` becomes true. */
export function useCountUp(target, active, duration = 1400) {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active || reduced) return undefined
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reduced, target, duration])

  return reduced ? target : value
}
