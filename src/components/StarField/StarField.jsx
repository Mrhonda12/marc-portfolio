import styles from './StarField.module.css'

/* Pure-CSS animated starfield — no JS, no images */
export default function StarField() {
  return (
    <div className={styles.starfield} aria-hidden="true">
      <div className={`${styles.layer} ${styles.layer1}`} />
      <div className={`${styles.layer} ${styles.layer2}`} />
      <div className={`${styles.layer} ${styles.layer3}`} />
      <div className={styles.nebula} />
      <div className={styles.grid} />
    </div>
  )
}
