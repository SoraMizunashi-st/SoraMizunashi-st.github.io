

import styles from './ToolsSection.module.css';

export default function ToolsSection() {
    return (
        <section id="tools" className={styles.section}>
          <h2>Tools</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>
              {/* 将来的に、カードサイズが確定した時は、文字じゃなくて、画像自体(カード全体)をリンク埋め込み対象にする事！！*/}
              <a href="/OBS_CSS">OBS Comment Custum Generator</a>
              <p>YoutubeコメントをOBSで使用するときのCSSを簡単に作れるツールです。</p>
              <p>※テスト中</p>
            </div>

            <div className={styles.projectItem}>
              <a href="/ToolsB">Gradient Designer v1.0.0</a>
              <p>cssのカラープロパティのグラデーション設定が視覚的に作れるツールです。</p>
              <p>※テスト中</p>
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