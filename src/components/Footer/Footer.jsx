import styles from './Footer.module.css'

const NAV = ['Projects', 'Skills', 'About', 'Services', 'Contact']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.name}>Marc Hernandez</span>
          </div>

          <nav className={styles.links} aria-label="Footer">
            {NAV.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>

          <p className={styles.copy}>
            © {new Date().getFullYear()} Marc Hernandez · Built with React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
