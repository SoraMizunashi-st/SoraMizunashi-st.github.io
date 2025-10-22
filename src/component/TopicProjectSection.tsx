

import styles from './ProjectSection.module.css';

export default function ProjectSection() {
    return (
        <section id="projects" className={styles.section}>
          <h2>Topics!</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>Project A</div>
            <div className={styles.projectItem}>Project B</div>
            <div className={styles.projectItem}>
              <a href="/about_abseil">About Abseil Static Linking order</a>
            </div>
            <div className={styles.projectItem}>Project D</div>
          </div>
        </section>
    );
}