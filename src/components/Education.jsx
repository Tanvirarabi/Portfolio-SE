import { FaGraduationCap, FaSchool } from 'react-icons/fa6'
import { education } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="06 · Education"
          title="Academic journey"
          subtitle="A computer science degree focused on information systems and AI, built on strong science results."
          center
        />

        <ol className="edu">
          {education.map((item, index) => {
            const Icon = index === 0 ? FaGraduationCap : FaSchool
            return (
              <Reveal as="li" key={item.school} delay={index * 90} className="edu__item">
                <span className="edu__icon" aria-hidden="true">
                  <Icon />
                </span>
                <article className="card card--hover edu__card">
                  <div className="edu__top">
                    <div>
                      <h3 className="edu__degree">{item.degree}</h3>
                      <p className="edu__school">{item.school}</p>
                      <p className="edu__detail">{item.detail}</p>
                    </div>
                    <div className="edu__side">
                      <span className="chip chip--accent">{item.score}</span>
                      <span className="edu__period">{item.period}</span>
                    </div>
                  </div>
                  {item.courses && (
                    <ul className="chip-list edu__courses" aria-label="Key coursework">
                      {item.courses.map((course) => (
                        <li className="chip" key={course}>
                          {course}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
