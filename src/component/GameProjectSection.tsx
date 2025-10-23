

import styles from './GameProjectSection.module.css';

export default function GameProjectSection() {
    return (
        <section id="game_section" className={styles.section}>
          <h2>Games!!</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>
              {/* 将来的に、カードサイズが確定した時は、文字じゃなくて、画像自体(カード全体)をリンク埋め込み対象にする事！！*/}
              <a href="/GameA">tmp GameA</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameB">tmp GameB</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameC">tmp GameC</a>
            </div>
            
            <div className={styles.projectItem}>
              <a href="/GameD">tmp GameD</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameE">tmp GameE</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameF">tmp GameF</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameG">tmp GameG</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameH">tmp GameH</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameI">tmp GameI</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameJ">tmp GameI</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameK">tmp GameI</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/GameL">tmp GameI</a>
            </div>
          </div>
        </section>
    );
}