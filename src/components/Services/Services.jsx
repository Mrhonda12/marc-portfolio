import { services } from '../../data/services'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">

        <div className={`reveal ${styles.header}`}>
          <p className="sec-tag">// 04 — Services</p>
          <h2 className="sec-title">What I Offer</h2>
          <p className="sec-sub">Practical web solutions for real clients.</p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {svc.icon}
              </div>
              <h3 className={styles.title}>{svc.title}</h3>
              <p className={styles.desc}>{svc.description}</p>
              <ul className={styles.features}>
                {svc.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureDot} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`reveal d3 ${styles.cta}`}>
          <p className={styles.ctaText}>
            Have a project in mind? Let's talk about what you need.
          </p>
          <a href="#contact" className="btn btn-primary">Start a Project</a>
        </div>

      </div>
    </section>
  )
}
