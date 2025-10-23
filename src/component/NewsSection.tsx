

import styles from './NewsSection.module.css';

export default function ProjectSection() {
    return (
        <section id="news" className={styles.section}>
          <h2>News</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>Project A</div>
            <div className={styles.projectItem}>Project B</div>
          </div>
        </section>
    );
}