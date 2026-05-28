import { skillCategories } from '../../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">

        <div className={`reveal ${styles.header}`}>
          <p className="sec-tag">// 02 — Skills</p>
          <h2 className="sec-title">Arsenal</h2>
          <p className="sec-sub">Tools and technologies I work with regularly.</p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal ${styles.block}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.blockHead}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3 className={styles.title} style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              <ul className={styles.list}>
                {cat.skills.map((skill) => (
                  <li key={skill} className={styles.listItem}>
                    <span
                      className={styles.dot}
                      style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}80` }}
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cert callout */}
        <div className={`reveal d3 ${styles.certBanner}`}>
          <span className={styles.certIcon} aria-hidden="true">🏆</span>
          <div>
            <p className={styles.certTitle}>Google Cybersecurity Certificate</p>
            <p className={styles.certSub}>
              Completed — covering threat analysis, network security, Linux, and Python for security automation.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
