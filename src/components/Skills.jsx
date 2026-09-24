import { FaCompass, FaHandshake } from 'react-icons/fa6'
import { domains, skillGroups, softSkills } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="04 · Skills"
          title="My toolkit"
          subtitle="Languages, frameworks and tools I use to take ideas from dataset to deployment."
        />

        <div className="skills__grid">
          {skillGroups.map(({ title, icon: GroupIcon, items }, index) => (
            <Reveal key={title} delay={(index % 3) * 90} className="card skill-group">
              <div className="skill-group__head">
                <span className="skill-group__icon" aria-hidden="true">
                  <GroupIcon />
                </span>
                <h3>{title}</h3>
                <span className="skill-group__count">{items.length}</span>
              </div>
              <ul className="skill-list">
                {items.map(({ name, icon: Icon }) => (
                  <li className="skill" key={name}>
                    <Icon aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="skills__extra">
          <Reveal className="card pill-card">
            <h3>
              <FaCompass aria-hidden="true" /> Domains
            </h3>
            <ul className="pill-list">
              {domains.map((domain) => (
                <li className="pill" key={domain}>
                  {domain}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90} className="card pill-card">
            <h3>
              <FaHandshake aria-hidden="true" /> Soft skills
            </h3>
            <ul className="pill-list">
              {softSkills.map((skill) => (
                <li className="pill" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
