import styles from './Fotter.module.css'; // 専用CSSモジュールをインポート

export default function Fotter() {
  return (

    <footer className={styles.footer}>
        <div className={styles.footerLinks}>
            <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.separator}> | </span>
            <a href="#contact" className={styles.footerLink}>Contact</a>
        </div>
        <p className={styles.copyright}>© 2025~ SoraMizunashi@StellaLab. All rights reserved.</p>
    </footer>
  );
}