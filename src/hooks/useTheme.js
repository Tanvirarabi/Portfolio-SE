import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const LIGHT_QUERY = '(prefers-color-scheme: light)'

function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function getInitialTheme() {
  // index.html sets data-theme before first paint, so prefer that.
  const fromDom = document.documentElement.getAttribute('data-theme')
  if (fromDom === 'light' || fromDom === 'dark') return fromDom
  return readStoredTheme() ?? (window.matchMedia(LIGHT_QUERY).matches ? 'light' : 'dark')
}

/** Light/dark theme that follows the OS until the visitor picks one. */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const mq = window.matchMedia(LIGHT_QUERY)
    const onChange = (event) => {
      if (!readStoredTheme()) setTheme(event.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }, [theme])

  return { theme, toggleTheme }
}
