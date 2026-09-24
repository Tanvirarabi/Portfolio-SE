import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently crossing the middle of the viewport.
 * Pass a stable (module-level) array of ids.
 */
export function useScrollSpy(ids, rootMargin = '-45% 0px -50% 0px') {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return active
}
