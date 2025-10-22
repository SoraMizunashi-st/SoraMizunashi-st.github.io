

import styles from './ProjectSection.module.css';

export default function ProjectSection() {
    return (
        <section id="projects" className={styles.section}>
          <h2>Recent Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>Project A</div>
            <div className={styles.projectItem}>Project B</div>
          </div>
        </section>
    );
}