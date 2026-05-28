import { useState } from 'react'
import styles from './Contact.module.css'

const TOPICS = [
  'Website Build',
  'Church / Non-Profit Site',
  'Portfolio Site',
  'Website Modernization',
  'Security Review',
  'Internship Opportunity',
  'Other',
]

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', topic: TOPICS[0], message: '' })
  const [preview, setPreview] = useState('')
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)

  const update = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const generate = (e) => {
    e.preventDefault()
    const { name, email, topic, message } = fields
    if (!name.trim() || !message.trim()) {
      setStatus('Please fill in your name and message.')
      return
    }
    const text = `Hi Marc,

My name is ${name}${email ? ` (${email})` : ''}.

Topic: ${topic}

${message}

Looking forward to hearing from you.
— ${name}`
    setPreview(text)
    setStatus('Message ready — copy it and send via email or DM.')
  }

  const copy = async () => {
    if (!preview) { setStatus('Generate a message first.'); return }
    try {
      await navigator.clipboard.writeText(preview)
      setCopied(true)
      setStatus('Copied to clipboard ✓')
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setStatus('Copy failed — select the text manually.')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">

        <div className={`reveal ${styles.header}`}>
          <p className="sec-tag">// 05 — Contact</p>
          <h2 className="sec-title">Open Channel</h2>
          <p className="sec-sub">Fill the form to generate a ready-to-send message.</p>
        </div>

        <div className={styles.grid}>

          {/* Form */}
          <div className={`reveal ${styles.panel}`}>
            <h3 className={styles.panelTitle}>Send Intel</h3>
            <form onSubmit={generate} noValidate>

              <div className={styles.field}>
                <label htmlFor="name">Name *</label>
                <input
                  id="name" name="name" autoComplete="name" required
                  placeholder="Jane Doe"
                  value={fields.name} onChange={update}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email (optional)</label>
                <input
                  id="email" name="email" type="email" autoComplete="email"
                  placeholder="jane@example.com"
                  value={fields.email} onChange={update}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="topic">Topic</label>
                <select id="topic" name="topic" value={fields.topic} onChange={update}>
                  {TOPICS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message" required
                  placeholder="Tell me what you need..."
                  value={fields.message} onChange={update}
                />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Generate Message
              </button>

              {status && (
                <p className={`${styles.status} ${copied ? styles.statusGood : ''}`} role="status">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Preview + direct links */}
          <div className={`reveal d1 ${styles.panel}`}>
            <h3 className={styles.panelTitle}>Message Preview</h3>
            <p className={styles.previewHint}>
              Fill the form → copy → paste into email or DM. No data is collected.
            </p>

            <div
              className={`${styles.previewBox} ${preview ? styles.previewHasContent : ''}`}
              aria-live="polite"
            >
              {preview || 'Awaiting transmission data…'}
            </div>

            <button
              type="button"
              className={`btn ${copied ? `btn-ghost ${styles.copiedBtn}` : 'btn-secondary'} ${styles.copyBtn}`}
              onClick={copy}
            >
              {copied ? 'Copied ✓' : 'Copy Message'}
            </button>

            <div className={styles.directLinks}>
              <p className={styles.directTitle}>Or reach out directly:</p>
              <div className={styles.linkRow}>
                <a
                  href="mailto:marca.hernandez1@yahoo.com"
                  className="btn btn-ghost btn-sm"
                >
                  ✉ Email
                </a>
                <a
                  href="https://github.com/Mrhonda12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  GitHub ↗
                </a>
                <span
                  className={`btn btn-ghost btn-sm ${styles.unavail}`}
                  title="LinkedIn coming soon"
                >
                  LinkedIn Soon
                </span>
              </div>
            </div>

            <p className={styles.secNote}>
              🔒 No passwords or sensitive data collected. Messages stay on your device.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
