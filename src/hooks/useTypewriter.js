import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Types and deletes each word in turn. Pass a stable (module-level) array.
 * With reduced motion, returns the first word without animating.
 */
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1700 } = {}) {
  const reduced = useReducedMotion()
  const [state, setState] = useState({ index: 0, text: '', deleting: false })

  useEffect(() => {
    if (reduced || words.length === 0) return undefined
    const word = words[state.index]
    let delay = state.deleting ? deleteSpeed : typeSpeed
    if (!state.deleting && state.text === word) delay = pause
    if (state.deleting && state.text === '') delay = 350

    const timer = setTimeout(() => {
      setState((s) => {
        const current = words[s.index]
        if (!s.deleting && s.text === current) return { ...s, deleting: true }
        if (s.deleting && s.text === '') {
          return { index: (s.index + 1) % words.length, text: '', deleting: false }
        }
        const length = s.text.length + (s.deleting ? -1 : 1)
        return { ...s, text: current.slice(0, length) }
      })
    }, delay)
    return () => clearTimeout(timer)
  }, [state, reduced, words, typeSpeed, deleteSpeed, pause])

  return reduced ? words[0] : state.text
}
