import { FaArrowUpRightFromSquare, FaBookOpen, FaCertificate, FaGithub, FaMicrophoneLines, FaRegCalendar } from 'react-icons/fa6'
import { publications, training } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Research.css'

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="05 · Research & training"
          title={
            <>
              Publication & <span className="gradient-text">training</span>
            </>
          }
          subtitle="Peer-reviewed machine learning research and hands-on quality assurance training."
        />

        <div className="research__grid">
          {publications.map((paper) => (
            <Reveal key={paper.title} as="article" className="card paper">
              <span className="paper__watermark" aria-hidden="true">
                <FaBookOpen />
              </span>
              <div className="paper__tags">
                <span className="chip chip--accent">
                  <FaBookOpen aria-hidden="true" /> Conference paper
                </span>
                <span className="chip chip--warm">
                  <FaMicrophoneLines aria-hidden="true" /> {paper.role}
                </span>
                <span className="chip">
                  <FaRegCalendar aria-hidden="true" /> {paper.date}
                </span>
              </div>
              <h3 className="paper__title">{paper.title}</h3>
              <p className="paper__venue">{paper.venue}</p>
              <p className="paper__host">{paper.host}</p>
              <div className="paper__actions">
                <a className="btn btn--primary btn--sm" href={paper.link} target="_blank" rel="noopener noreferrer">
                  Conference site <FaArrowUpRightFromSquare />
                </a>
                <a className="btn btn--outline btn--sm" href={paper.code} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code & notebook
                </a>
              </div>
            </Reveal>
          ))}

          {training.map((course) => (
            <Reveal key={course.title} as="article" delay={90} className="card training">
              <div className="training__head">
                <span className="training__icon" aria-hidden="true">
                  <FaCertificate />
                </span>
                <div>
                  <p className="training__provider">{course.provider}</p>
                  <h3 className="training__title">{course.title}</h3>
                </div>
              </div>
              <ul className="bullets">
                {course.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="training__links">
                {course.links.map((link) => (
                  <li key={link.url}>
                    <a className="link-chip" href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
