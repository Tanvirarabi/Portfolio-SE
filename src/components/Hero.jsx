import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6'
import { SiDjango, SiPytorch, SiReact } from 'react-icons/si'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import './Hero.css'

const base = import.meta.env.BASE_URL

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <a className="hero__status" href="https://dma.com.bd/" target="_blank" rel="noopener noreferrer">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.currentRole}
          </a>

          <h1 className="hero__title">
            <span className="hero__hello">Hi, I&apos;m</span>
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero__role">
            <span className="hero__prompt" aria-hidden="true">&gt;</span>
            <span aria-hidden="true">{role}</span>
            <span className="hero__caret" aria-hidden="true" />
            <span className="sr-only">{profile.roles.join(', ')}</span>
          </p>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my work <FaArrowRight />
            </a>
            <a href={`${base}${profile.resume}`} className="btn btn--outline" download>
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__socials">
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
            <span className="hero__location">
              <FaLocationDot aria-hidden="true" /> Dhaka, Bangladesh
            </span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait">
            <img
              src={`${base}${profile.photo}`}
              alt={`Portrait of ${profile.name}`}
              width="960"
              height="1200"
              fetchPriority="high"
            />
          </div>
          <span className="hero__float hero__float--1" aria-hidden="true">
            <SiDjango /> Django
          </span>
          <span className="hero__float hero__float--2" aria-hidden="true">
            <SiPytorch /> Deep Learning
          </span>
          <span className="hero__float hero__float--3" aria-hidden="true">
            <SiReact /> React
          </span>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  )
}
