import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const ROLES = [
  'Web Developer',
  'Security Enthusiast',
  'CS Student',
  'Freelance Builder',
]

/* Inline SVG: cinematic orbital interface (Star Wars-inspired without being literal) */
function OrbitalDisplay() {
  return (
    <svg
      className={styles.orbital}
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer rings */}
      <circle cx="180" cy="180" r="168" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
      <circle cx="180" cy="180" r="140" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
      <circle cx="180" cy="180" r="110" stroke="rgba(6,182,212,0.22)" strokeWidth="1.5" />
      <circle cx="180" cy="180" r="78"  stroke="rgba(6,182,212,0.3)"  strokeWidth="1.5" />
      <circle cx="180" cy="180" r="46"  stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />

      {/* Cross-hair lines */}
      <line x1="180" y1="12"  x2="180" y2="348" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
      <line x1="12"  y1="180" x2="348" y2="180" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />

      {/* Tick marks on outer ring */}
      <line x1="180" y1="12"  x2="180" y2="26"  stroke="rgba(6,182,212,0.5)"  strokeWidth="1.5" />
      <line x1="180" y1="334" x2="180" y2="348" stroke="rgba(6,182,212,0.5)"  strokeWidth="1.5" />
      <line x1="12"  y1="180" x2="26"  y2="180" stroke="rgba(6,182,212,0.5)"  strokeWidth="1.5" />
      <line x1="334" y1="180" x2="348" y2="180" stroke="rgba(6,182,212,0.5)"  strokeWidth="1.5" />

      {/* Diagonal ticks */}
      <line x1="62"  y1="62"  x2="72"  y2="72"  stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
      <line x1="298" y1="62"  x2="288" y2="72"  stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
      <line x1="62"  y1="298" x2="72"  y2="288" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
      <line x1="298" y1="298" x2="288" y2="288" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />

      {/* Orbital dots — spaced on ring at 110r */}
      <circle cx="290" cy="180" r="4"   fill="rgba(6,182,212,0.8)" />
      <circle cx="70"  cy="180" r="4"   fill="rgba(6,182,212,0.8)" />
      <circle cx="180" cy="70"  r="3"   fill="rgba(59,130,246,0.7)" />
      <circle cx="180" cy="290" r="3"   fill="rgba(59,130,246,0.7)" />

      {/* Small detail marks on middle ring (78r) */}
      <circle cx="258" cy="180" r="2.5" fill="rgba(59,130,246,0.55)" />
      <circle cx="102" cy="180" r="2.5" fill="rgba(59,130,246,0.55)" />

      {/* Center core */}
      <circle cx="180" cy="180" r="18"  fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.45)" strokeWidth="1.5" />
      <circle cx="180" cy="180" r="7"   fill="rgba(6,182,212,0.9)"  />
      <circle cx="180" cy="180" r="12"  fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Arc segment decorations */}
      <path d="M 180 40 A 140 140 0 0 1 295 110" stroke="rgba(59,130,246,0.35)" strokeWidth="1" strokeDasharray="3 6" fill="none" />
      <path d="M 180 320 A 140 140 0 0 1 65 250"  stroke="rgba(59,130,246,0.35)" strokeWidth="1" strokeDasharray="3 6" fill="none" />
    </svg>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        }, 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2600)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        }, 48)
      } else {
        setDeleting(false)
        setRoleIdx((r) => (r + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  return (
    <section className={`section ${styles.hero}`} id="hero">
      <div className={`container ${styles.grid}`}>

        {/* ── Left: Text content ── */}
        <div className={styles.content}>

          {/* Available badge */}
          <div className={`reveal ${styles.badge}`}>
            <span className={styles.badgePulse} aria-hidden="true" />
            Available for Freelance · Ventura County, CA
          </div>

          {/* Typewriter role */}
          <div className={`reveal d1 ${styles.roleLine}`} aria-label={`Role: ${displayed}`}>
            <span className={styles.rolePrefix}>$ identify --user&nbsp;</span>
            <span className={styles.roleText}>{displayed}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </div>

          <h1 className={`reveal d1 ${styles.headline}`}>
            Building Modern Websites &amp;{' '}
            <span className={styles.accentBlue}>Secure</span>{' '}
            Digital <span className={styles.accentCyan}>Experiences</span>
          </h1>

          <p className={`reveal d2 ${styles.sub}`}>
            I'm Marc Hernandez — a CS student and freelance developer creating clean,
            fast websites for businesses, churches, and individuals.
            Security-minded from the start.
          </p>

          <div className={`reveal d2 ${styles.ctaRow}`}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact"  className="btn btn-secondary">Contact Me</a>
            <a
              href="https://github.com/Mrhonda12"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
          </div>

          {/* Tech chips */}
          <div className={`reveal d3 ${styles.chips}`}>
            {['React', 'C++', 'HTML · CSS · JS', 'Cybersecurity', 'Vercel'].map((t) => (
              <span key={t} className={styles.chip}>{t}</span>
            ))}
          </div>
        </div>

        {/* ── Right: Orbital display ── */}
        <div className={`reveal d2 ${styles.visual}`} aria-hidden="true">
          <div className={styles.visualGlow} />
          <OrbitalDisplay />

          {/* Status list overlay */}
          <ul className={styles.statusList}>
            <li><span className={`${styles.dot} ${styles.dotBlue}`} />Web Systems<span className={styles.state}>ACTIVE</span></li>
            <li><span className={`${styles.dot} ${styles.dotBlue}`} />C++ Projects<span className={styles.state}>ONLINE</span></li>
            <li><span className={`${styles.dot} ${styles.dotCyan}`} />Security Layer<span className={`${styles.state} ${styles.stateCyan}`}>ENABLED</span></li>
          </ul>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}
