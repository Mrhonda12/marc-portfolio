import styles from './Projects.module.css'

/**
 * Reusable project card component.
 * Displays a gradient image thumbnail, title, description, tech tags, and links.
 */
export default function ProjectCard({ project, delay = 0 }) {
  const { title, category, description, tech, gradient, github, live, featured } = project

  return (
    <article
      className={`reveal ${styles.card} ${featured ? styles.featured : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {featured && <span className={styles.featuredBadge}>Featured</span>}

      {/* Gradient image placeholder */}
      <div className={styles.thumb} style={{ background: gradient }} aria-hidden="true">
        <div className={styles.thumbOverlay} />
        <span className={styles.thumbCategory}>{category}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        {/* Tech tags */}
        <div className={styles.tags}>
          {tech.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className={styles.links}>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              GitHub ↗
            </a>
          ) : (
            <span className={`btn btn-ghost btn-sm ${styles.unavail}`} aria-label="Repo not yet public">
              Repo Soon
            </span>
          )}

          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Live Demo ↗
            </a>
          ) : (
            <span className={`btn btn-secondary btn-sm ${styles.unavail}`} aria-label="Demo not yet live">
              Demo Soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
