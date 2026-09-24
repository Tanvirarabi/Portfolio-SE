import { useState } from 'react'
import {
  FaArrowRight, FaBrain, FaBug, FaChartLine, FaCode, FaDatabase, FaGithub,
  FaIndustry, FaLanguage, FaLock, FaStar,
} from 'react-icons/fa6'
import { profile, projectCategories, projects } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Projects.css'

const categoryIcons = {
  Industry: FaIndustry,
  'Machine Learning': FaBrain,
  NLP: FaLanguage,
  'Data Science': FaChartLine,
  'Full-Stack': FaCode,
  Database: FaDatabase,
  'QA & Testing': FaBug,
}

const counts = Object.fromEntries(
  projectCategories.map((category) => [
    category,
    category === 'All' ? projects.length : projects.filter((p) => p.categories.includes(category)).length,
  ]),
)

function ProjectCard({ project }) {
  const Icon = categoryIcons[project.categories[0]] ?? FaCode
  const isProfileLink = project.github === profile.socials.github

  return (
    <article className={`card card--hover project${project.featured ? ' project--featured' : ''}`}>
      <div className="project__top">
        <span className="project__icon" aria-hidden="true">
          <Icon />
        </span>
        <div className="project__actions">
          {project.featured && (
            <span className="chip chip--accent">
              <FaStar aria-hidden="true" /> Featured
            </span>
          )}
          {project.github ? (
            <a
              className="icon-btn icon-btn--sm"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isProfileLink ? 'Open GitHub profile' : `View ${project.title} source on GitHub`}
              title={isProfileLink ? 'GitHub profile' : 'Source code'}
            >
              <FaGithub />
            </a>
          ) : (
            <span className="project__private" title="Company project, source is private">
              <FaLock aria-hidden="true" /> Private
            </span>
          )}
        </div>
      </div>
      <p className="project__badge">{project.badge}</p>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__desc">{project.description}</p>
      <ul className="chip-list project__tech" aria-label="Technologies">
        {project.tech.map((tech) => (
          <li className="chip" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="03 · Projects"
          title={
            <>
              Selected <span className="gradient-text">work</span>
            </>
          }
          subtitle="Industry systems, published research and university projects. Filter by what interests you."
        />

        <Reveal className="filters" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className="filter"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
              <span className="filter__count">{counts[category]}</span>
            </button>
          ))}
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          {filter === 'All' ? '' : ` in ${filter}`}.
        </p>

        <ul className="projects__grid" key={filter}>
          {visible.map((project, index) => (
            <li key={project.title} style={{ '--i': index }}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <Reveal className="projects__more">
          <a className="btn btn--outline" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> More on GitHub <FaArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
