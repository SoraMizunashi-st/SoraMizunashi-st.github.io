

import styles from './TopicProjectSection.module.css';

export default function ProjectSection() {
    return (
        <section id="topic" className={styles.section}>
          <h2>Topics!</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>Project A</div>
            <div className={styles.projectItem}>Project B</div>
            <div className={styles.projectItem}>
              <a href="/about_abseil">About Abseil Static Linking order</a>
            </div>
            <div className={styles.projectItem}>Project D</div>
            <div className={styles.projectItem}>Project E</div>
            <div className={styles.projectItem}>Project F</div>
            <div className={styles.projectItem}>Project G</div>
            <div className={styles.projectItem}>Project H</div>
          </div>
        </section>
    );
}