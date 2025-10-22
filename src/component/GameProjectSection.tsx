

import styles from './ProjectSection.module.css';

export default function GameProjectSection() {
    return (
        <section id="projects" className={styles.section}>
          <h2>Game Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>GameA</div>
            <div className={styles.projectItem}>GameB</div>
            <div className={styles.projectItem}>GameC</div>
            <div className={styles.projectItem}>GameD</div>
            <div className={styles.projectItem}>GameE</div>
            <div className={styles.projectItem}>GameF</div>
            <div className={styles.projectItem}>GameG</div>
            <div className={styles.projectItem}>GameH</div>
          </div>
        </section>
    );
}