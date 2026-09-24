import { useEffect, useRef, useState } from 'react'

const supportsObserver = () =>
  typeof window !== 'undefined' && 'IntersectionObserver' in window

/** Returns [ref, inView]. With `once`, stays true after the first reveal. */
export function useInView({ rootMargin = '0px 0px -10% 0px', threshold = 0, once = true } = {}) {
  const ref = useRef(null)
  // Without IntersectionObserver, show everything immediately.
  const [inView, setInView] = useState(() => !supportsObserver())

  useEffect(() => {
    const el = ref.current
    if (!el || !supportsObserver()) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return [ref, inView]
}
