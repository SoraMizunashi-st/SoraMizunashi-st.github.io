

import styles from './FaqSection.module.css';

export default function ProjectSection() {
    return (
        <section id="faq" className={styles.section}>
          <h2>FAQ</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>Project A</div>
            <div className={styles.projectItem}>Project B</div>
          </div>
        </section>
    );
}