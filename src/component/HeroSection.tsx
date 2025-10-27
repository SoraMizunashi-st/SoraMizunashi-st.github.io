

import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
          <img  src = "/Hero/HeroBackground.jpg"
                loading="lazy"
                alt = "heroBackGround"
                className={styles['hero-preload-img']}
          />

          <h1 className={styles.heroTitle}>
            StellaLabの保管庫
          </h1>
          <p className={styles.heroSubtitle}>
            現在工事中です。ご容赦くださいませ。
          </p>
          <a href="#contact" className={styles.ctaButton}>お問い合わせ</a>
        </section>
    );
}