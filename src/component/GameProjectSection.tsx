

import styles from './GameProjectSection.module.css';

export default function GameProjectSection() {
    return (
        <section id="game_section" className={styles.section}>
          <h2>Games!!</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>GameA</div>
            <div className={styles.projectItem}>GameB</div>
            <div className={styles.projectItem}>GameC</div>
            <div className={styles.projectItem}>GameD</div>
            <div className={styles.projectItem}>GameE</div>
            <div className={styles.projectItem}>GameF</div>
            <div className={styles.projectItem}>GameG</div>
            <div className={styles.projectItem}>GameH</div>
            <div className={styles.projectItem}>GameI</div>
            <div className={styles.projectItem}>GameJ</div>
            <div className={styles.projectItem}>GameK</div>
            <div className={styles.projectItem}>GameL</div>
          </div>
        </section>
    );
}