import { FaBriefcase, FaEnvelope, FaGraduationCap, FaLocationDot } from 'react-icons/fa6'
import { highlights, profile, stats } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './About.css'

const facts = [
  { icon: FaLocationDot, label: 'Based in', value: 'Dhaka, Bangladesh' },
  { icon: FaBriefcase, label: 'Currently', value: 'Software Engineer, DMA' },
  { icon: FaGraduationCap, label: 'Studying', value: 'B.Sc. in CSE, AIUB' },
  { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
]

function Stat({ value, suffix, label }) {
  const [ref, inView] = useInView()
  const current = useCountUp(value, inView)
  return (
    <div className="stat" ref={ref}>
      <p className="stat__value gradient-text">
        {current}
        {suffix}
      </p>
      <p className="stat__label">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 · About me"
          title={
            <>
              Engineer by trade, <span className="gradient-text">researcher</span> at heart
            </>
          }
          subtitle="I turn machine learning ideas into dependable software that people can actually use."
        />

        <div className="about__grid">
          <Reveal className="about__text">
            {profile.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <ul className="about__facts">
              {facts.map(({ icon: Icon, label, value, href }) => (
                <li className="fact" key={label}>
                  <span className="fact__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    <span className="fact__label">{label}</span>
                    {href ? (
                      <a className="fact__value fact__value--link" href={href}>
                        {value}
                      </a>
                    ) : (
                      <span className="fact__value">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="about__highlights">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 90} className="card card--hover highlight">
                <span className="highlight__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="stats">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
