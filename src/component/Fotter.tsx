import styles from './Fotter.module.css'; // 専用CSSモジュールをインポート

// メインページコンポーネント
export default function Fotter() {
  return (

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
  );
}