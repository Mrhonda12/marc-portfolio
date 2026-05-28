import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
  const [fill, setFill] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFill(true), 80)
    const t2 = setTimeout(() => setHidden(true), 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (hidden) return null

  return (
    <div className={`${styles.loader} ${fill ? styles.fading : ''}`}>
      <div className={styles.inner}>
        {/* Orbital ring animation */}
        <div className={styles.ring}>
          <div className={styles.ringInner} />
        </div>
        <p className={styles.name}>Marc Hernandez</p>
        <div className={styles.barTrack}>
          <div className={`${styles.barFill} ${fill ? styles.full : ''}`} />
        </div>
        <p className={styles.sub}>Initializing…</p>
      </div>
    </div>
  )
}
