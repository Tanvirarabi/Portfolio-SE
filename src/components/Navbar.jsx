import { useEffect, useState } from 'react'
import { FaBars, FaDownload, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'
import { navLinks, profile } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrolled } from '../hooks/useScroll'
import './Navbar.css'

const SECTION_IDS = ['home', ...navLinks.map((link) => link.id)]
const resumeHref = `${import.meta.env.BASE_URL}${profile.resume}`

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)
  const active = useScrollSpy(SECTION_IDS)
  const close = () => setOpen(false)

  // While the mobile menu is open: lock page scroll, close on Escape or on resize to desktop.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <nav className="container nav__inner" aria-label="Primary">
        <a href="#home" className="nav__brand" onClick={close} aria-label={`${profile.name}, back to top`}>
          <span className="nav__logo" aria-hidden="true">TA</span>
          <span className="nav__name">
            Tanvir<span className="nav__dot">.</span>Arabi
          </span>
        </a>

        <ul id="nav-menu" className="nav__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav__link${active === link.id ? ' is-active' : ''}`}
                aria-current={active === link.id ? 'location' : undefined}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav__mobile-cta">
            <a className="btn btn--primary" href={resumeHref} download onClick={close}>
              <FaDownload /> Download CV
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a className="btn btn--outline btn--sm nav__resume" href={resumeHref} download>
            <FaDownload /> Resume
          </a>
          <button
            type="button"
            className="icon-btn nav__toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  )
}
