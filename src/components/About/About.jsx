import styles from './About.module.css'

const HIGHLIGHTS = [
  { title: 'What I Build',  value: 'Websites · Tools · C++ Projects' },
  { title: 'What I Value',  value: 'Clarity · Reliability · Security' },
  { title: 'Currently',     value: 'CS Student @ Moorpark College' },
  { title: 'Seeking',       value: 'Internship · Freelance · Entry-level' },
]

const QUICK_FACTS = [
  { label: '2+',    sub: 'Years Learning' },
  { label: '6+',    sub: 'Projects Built'  },
  { label: 'CA',    sub: 'Based In'        },
  { label: 'GCC',   sub: 'Cybersecurity Cert' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <div className={`reveal ${styles.header}`}>
          <p className="sec-tag">// 03 — About</p>
          <h2 className="sec-title">Transmission</h2>
          <p className="sec-sub">Who I am and where I'm headed.</p>
        </div>

        <div className={styles.grid}>

          {/* Avatar + quick facts */}
          <div className={`reveal d1 ${styles.left}`}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar} aria-label="Marc Hernandez initials">MH</div>
              <div className={styles.avatarGlow} aria-hidden="true" />
            </div>

            <div className={styles.quickFacts}>
              {QUICK_FACTS.map((f) => (
                <div key={f.label} className={styles.fact}>
                  <span className={styles.factVal}>{f.label}</span>
                  <span className={styles.factSub}>{f.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio text */}
          <div className={`reveal d2 ${styles.right}`}>
            <p className={styles.bio}>
              I'm a Computer Science student at{' '}
              <strong>Moorpark College</strong> with a self-taught mindset and a drive to
              build things that actually work. I've created websites for{' '}
              <em>small businesses, churches,</em> and demo applications — always
              with clean code, honest design, and{' '}
              <span className={styles.hl}>security baked in from the start</span>.
            </p>
            <p className={styles.bio}>
              My background spans <strong>React, C++, HTML/CSS/JS</strong>, and
              practical cybersecurity — I hold a{' '}
              <strong>Google Cybersecurity Certificate</strong> and think about
              threat models even when building front-end UIs. I'm actively looking
              for an{' '}
              <span className={styles.hl}>internship, freelance project</span>, or
              entry-level role where I can contribute and keep growing fast.
            </p>

            <div className={styles.highlights}>
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className={styles.highlightItem}>
                  <strong>{h.title}</strong>
                  <span>{h.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <a href="#contact"  className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
