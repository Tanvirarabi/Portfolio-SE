import { useEffect, useRef, useState } from 'react'
import {
  FaCheck, FaCircleCheck, FaCircleExclamation, FaEnvelope, FaGithub, FaLinkedinIn,
  FaLocationDot, FaPaperPlane, FaPhone, FaRegCopy,
} from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Contact.css'

// Optional: set VITE_WEB3FORMS_KEY in .env to deliver messages directly.
// Without it, the form opens the visitor's email app with the message filled in.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const MESSAGE_MAX = 1000
const EMPTY = { name: '', email: '', subject: '', message: '', botcheck: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3) errors.subject = 'Please add a short subject.'
  if (values.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.'
  return errors
}

async function sendMessage(values) {
  if (WEB3FORMS_KEY) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        from_name: 'Portfolio contact form',
        subject: `Portfolio: ${values.subject.trim()}`,
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
        botcheck: values.botcheck,
      }),
    })
    const result = await response.json().catch(() => ({}))
    if (!response.ok || !result.success) throw new Error(result.message || 'Message could not be sent.')
    return 'sent'
  }

  const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
  return 'mailto'
}

const methods = [
  { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: FaPhone, label: 'Phone', value: profile.phoneDisplay, href: `tel:${profile.phone}` },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: 'in/tanvirarabi', href: profile.socials.linkedin, external: true },
  { icon: FaGithub, label: 'GitHub', value: 'Tanvirarabi', href: profile.socials.github, external: true },
  { icon: FaLocationDot, label: 'Location', value: profile.location },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${text}`
    }
  }

  return (
    <button
      type="button"
      className="icon-btn icon-btn--sm"
      onClick={copy}
      aria-label={copied ? 'Email copied' : 'Copy email address'}
      title={copied ? 'Copied!' : 'Copy email'}
    >
      {copied ? <FaCheck /> : <FaRegCopy />}
    </button>
  )
}

function Field({ id, label, error, children, meta }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {(error || meta) && (
        <div className="field__meta">
          {error && (
            <span className="field__error" id={`${id}-error`}>
              {error}
            </span>
          )}
          {meta}
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const errors = validate(values)
  const showError = (name) => (submitted || touched[name]) && errors[name]

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const onBlur = (event) => {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setSubmitted(true)
    if (Object.keys(errors).length > 0) {
      const firstInvalid = ['name', 'email', 'subject', 'message'].find((key) => errors[key])
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }
    if (values.botcheck) return // Spam bot filled the hidden field.

    setStatus({ state: 'sending', message: '' })
    try {
      const result = await sendMessage(values)
      setStatus(
        result === 'sent'
          ? { state: 'success', message: 'Thanks! Your message has been sent. I will reply as soon as I can.' }
          : { state: 'success', message: 'Your email app should open with the message ready to send.' },
      )
      setValues(EMPTY)
      setTouched({})
      setSubmitted(false)
    } catch (error) {
      setStatus({
        state: 'error',
        message: `${error.message} Please email me directly at ${profile.email}.`,
      })
    }
  }

  const inputProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': showError(name) ? true : undefined,
    'aria-describedby': showError(name) ? `contact-${name}-error` : undefined,
  })

  const sending = status.state === 'sending'

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="07 · Contact"
          title={
            <>
              Let&apos;s build something <span className="gradient-text">together</span>
            </>
          }
          subtitle="Open to software engineering, AI/ML and SQA roles, research collaborations and freelance projects."
        />

        <div className="contact__grid">
          <Reveal className="contact__methods">
            {methods.map(({ icon: Icon, label, value, href, external, copy }) => {
              const content = (
                <>
                  <span className="method__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="method__body">
                    <span className="method__label">{label}</span>
                    <span className="method__value">{value}</span>
                  </span>
                </>
              )
              return (
                <div className="method" key={label}>
                  {href ? (
                    <a
                      className="method__link"
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="method__link">{content}</div>
                  )}
                  {copy && <CopyButton text={value} />}
                </div>
              )
            })}
          </Reveal>

          <Reveal delay={90} as="form" className="card form" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <Field id="contact-name" label="Your name" error={showError('name')}>
                <input type="text" autoComplete="name" placeholder="Jane Doe" {...inputProps('name')} />
              </Field>
              <Field id="contact-email" label="Email address" error={showError('email')}>
                <input type="email" autoComplete="email" placeholder="jane@company.com" {...inputProps('email')} />
              </Field>
            </div>
            <Field id="contact-subject" label="Subject" error={showError('subject')}>
              <input type="text" placeholder="Job opportunity, project, collaboration…" {...inputProps('subject')} />
            </Field>
            <Field
              id="contact-message"
              label="Message"
              error={showError('message')}
              meta={
                <span className="field__count">
                  {values.message.length}/{MESSAGE_MAX}
                </span>
              }
            >
              <textarea rows="6" maxLength={MESSAGE_MAX} placeholder="Tell me a little about what you have in mind." {...inputProps('message')} />
            </Field>

            <input
              className="honeypot"
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={values.botcheck}
              onChange={onChange}
            />

            <div className="form__footer">
              <p className="form__hint">
                {WEB3FORMS_KEY ? 'Messages go straight to my inbox.' : 'Opens your email app with the message ready to send.'}
              </p>
              <button type="submit" className="btn btn--primary" disabled={sending}>
                {sending ? (
                  <>
                    <span className="spinner" aria-hidden="true" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <FaPaperPlane />
                  </>
                )}
              </button>
            </div>

            <div aria-live="polite">
              {(status.state === 'success' || status.state === 'error') && (
                <p className={`form__status form__status--${status.state}`}>
                  {status.state === 'success' ? <FaCircleCheck aria-hidden="true" /> : <FaCircleExclamation aria-hidden="true" />}
                  {status.message}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
