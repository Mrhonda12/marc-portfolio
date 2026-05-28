import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* Brand */}
        <a href="#top" className={styles.logo} onClick={close}>
          <span className={styles.logoMark} aria-hidden="true">MH</span>
          <div>
            <div className={styles.logoName}>Marc Hernandez</div>
            <div className={styles.logoSub}>Developer · Security Enthusiast</div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className={styles.desktopLinks} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>

        {/* Hire Me CTA + hamburger */}
        <div className={styles.actions}>
          <a href="#contact" className={`btn btn-primary btn-sm ${styles.hireBtn}`}>
            Hire Me
          </a>
          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={styles.mobileMenu}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`btn btn-primary ${styles.mobileCta}`} onClick={close}>
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
