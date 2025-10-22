import styles from './page.module.css'; // 専用CSSモジュールをインポート

// メインページコンポーネント
export default function Home() {
  return (
    // ページ全体を囲むコンテナ
    <div className={styles.container}>
      
      {/* 1. ヘッダーエリア (変更なし) */}
      <header className={styles.header}>
        <div className={styles.logo}>StellaLab.</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navItem}>About</a>
          <a href="#projects" className={styles.navItem}>Projects</a>
          <a href="#contact" className={styles.navItem}>Contact</a>
        </nav>
      </header>

      {/* 2. メインコンテンツエリア（ヒーローセクション） (変更なし) */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            次世代のソリューションを創造する
          </h1>
          <p className={styles.heroSubtitle}>
            技術的な複雑さを抽象化し、シンプルで堅牢なシステムを構築します。
          </p>
          <a href="#contact" className={styles.ctaButton}>お問い合わせ</a>
        </section>
        
        {/* 3. その他のセクション（骨格のみ） (変更なし) */}
        <section id="about" className={styles.section}>
          <h2>About Us</h2>
          <p>技術への深い知見と、合理的かつ保守性の高いコード設計を追求します。</p>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Recent Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>Project A</div>
            <div className={styles.projectItem}>Project B</div>
          </div>
        </section>
      </main>

      {/* 4. フッターエリア (プライバシーポリシーリンクを追加) */}
      <footer className={styles.footer}>
        {/* AdSense対応で必須のプライバシーポリシーリンク */}
        <div className={styles.footerLinks}>
            {/* /privacy パスへのリンクを設置（Next.jsのルーティングに対応） */}
            <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.separator}> | </span>
            <a href="#contact" className={styles.footerLink}>Contact</a>
        </div>
        <p className={styles.copyright}>© 2025~ SoraMizunashi@StellaLab. All rights reserved.</p>
      </footer>
    </div>
  );
}