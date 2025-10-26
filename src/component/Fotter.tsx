import styles from './Fotter.module.css'; // 専用CSSモジュールをインポート

export default function Fotter() {
  return (

    <footer className={styles.footer}>
        <div>
          
        </div>
        <div className={styles.footerLinks}>
            <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.separator}> | </span>
            <a href="#contact" className={styles.footerLink}>Contact</a>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.otherText}>Author | 水無そら@StellaLab.</p>
          <p className={styles.otherText}>MAIL   | shuiwukong6@gmail.com</p>
        </div>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>© 2025~ SoraMizunashi@StellaLab. All rights reserved.</p>
        </div>
    </footer>
  );
}