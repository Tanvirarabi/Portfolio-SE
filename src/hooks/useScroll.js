import { useSyncExternalStore } from 'react'

function subscribe(callback) {
  window.addEventListener('scroll', callback, { passive: true })
  window.addEventListener('resize', callback)
  return () => {
    window.removeEventListener('scroll', callback)
    window.removeEventListener('resize', callback)
  }
}

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolled(threshold = 24) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  )
}

/** Page scroll progress from 0 to 1. */
export function useScrollProgress() {
  return useSyncExternalStore(
    subscribe,
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max <= 0) return 0
      return Math.round(Math.min(1, window.scrollY / max) * 1000) / 1000
    },
    () => 0,
  )
}
