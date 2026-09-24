import { FaArrowUpRightFromSquare, FaBuilding, FaLocationDot, FaRegCalendar } from 'react-icons/fa6'
import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="02 · Experience"
          title="Where I build"
          subtitle="Industry work across AI, IoT and enterprise systems."
        />

        {experience.map((job) => (
          <Reveal key={job.company} as="article" className="card job">
            <header className="job__header">
              <span className="job__logo" aria-hidden="true">
                <FaBuilding />
              </span>
              <div className="job__title">
                <h3>{job.role}</h3>
                <a className="job__company" href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                  {job.company} <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </div>
              <div className="job__meta">
                <span className="chip chip--accent">
                  <FaRegCalendar aria-hidden="true" /> {job.period}
                </span>
                <span className="job__location">
                  <FaLocationDot aria-hidden="true" /> {job.location}
                </span>
              </div>
            </header>

            <ol className="job__projects">
              {job.projects.map((project, index) => (
                <li className="job__project" key={project.name}>
                  <span className="job__marker" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="job__project-head">
                      <h4>{project.name}</h4>
                      <span className="chip chip--warm">{project.tag}</span>
                    </div>
                    <ul className="bullets job__points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <ul className="chip-list" aria-label="Technologies">
                      {project.tech.map((tech) => (
                        <li className="chip" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
