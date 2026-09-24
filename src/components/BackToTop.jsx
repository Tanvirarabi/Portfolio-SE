import { FaArrowUp } from 'react-icons/fa6'
import { useScrolled } from '../hooks/useScroll'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function BackToTop() {
  const visible = useScrolled(640)
  const reduced = useReducedMotion()

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <FaArrowUp />
    </button>
  )
}
