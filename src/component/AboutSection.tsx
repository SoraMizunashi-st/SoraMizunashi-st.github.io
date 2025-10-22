
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.section}>
          <h2>About Us</h2>
          <p>技術への深い知見と、合理的かつ保守性の高いコード設計を追求します。</p>
        </section>
    );
}