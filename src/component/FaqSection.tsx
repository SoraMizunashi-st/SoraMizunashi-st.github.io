

import styles from './FaqSection.module.css';

export default function ProjectSection() {
    return (
        <section id="faq" className={styles.section}>
          <h2>FAQ</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>FAQ1</div>
            <div className={styles.projectItem}>FAQ2</div>
            <div className={styles.projectItem}>FAQ3</div>
            <div className={styles.projectItem}>FAQ4</div>
          </div>
        </section>
    );
}