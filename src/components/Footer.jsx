import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { navLinks, profile } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="nav__brand" aria-label="Back to top">
              <span className="nav__logo" aria-hidden="true">TA</span>
              <span>
                Tanvir<span className="nav__dot">.</span>Arabi
              </span>
            </a>
            <p>{profile.title}. Building intelligent, reliable software from Dhaka, Bangladesh.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            <a className="icon-btn" href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FaGithub />
            </a>
            <a className="icon-btn" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FaLinkedinIn />
            </a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  )
}
