

import styles from './ToolsSection.module.css';

export default function ToolsSection() {
    return (
        <section id="tools" className={styles.section}>
          <h2>Tools</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>
              {/* 将来的に、カードサイズが確定した時は、文字じゃなくて、画像自体(カード全体)をリンク埋め込み対象にする事！！*/}
              <a href="/OBS_CSS">OBSでよく使われるStyleSheet(CSS)まとめ</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/ToolsB">tmp ToolB</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/ToolsC">tmp ToolC</a>
            </div>
            
            <div className={styles.projectItem}>
              <a href="/ToolsD">tmp ToolD</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/ToolsE">tmp ToolE</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/ToolsF">tmp ToolF</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/ToolsG">tmpToolG</a>
            </div>

            <div className={styles.projectItem}>
              <a href="/ToolsH">tmp ToolH</a>
            </div>
          </div>
        </section>
    );
}