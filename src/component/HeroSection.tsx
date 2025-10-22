

import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            次世代のソリューションを創造する
          </h1>
          <p className={styles.heroSubtitle}>
            技術的な複雑さを抽象化し、シンプルで堅牢なシステムを構築します。
          </p>
          <a href="#contact" className={styles.ctaButton}>お問い合わせ</a>
        </section>
    );
}