import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <Reveal className={`section-heading${center ? ' section-heading--center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  )
}
