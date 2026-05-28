import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <div className={`reveal ${styles.header}`}>
          <p className="sec-tag">// 01 — Projects</p>
          <h2 className="sec-title">Mission Log</h2>
          <p className="sec-sub">What I've built and what I learned along the way.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={Math.min((i % 3) * 0.08, 0.24)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
