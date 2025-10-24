

import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            ゲーム保管庫
          </h1>
          <p className={styles.heroSubtitle}>
            StellaLab.が制作したゲーム等が保管されています。
          </p>
          <a href="#contact" className={styles.ctaButton}>お問い合わせ</a>
        </section>
    );
}