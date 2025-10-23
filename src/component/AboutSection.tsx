
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.section}>
          <h2>About Us</h2>
          <p>StellaLab.のゲームラボへようこそ。</p>
          <p>当サイトでは、いくつか作成したツールやゲームを配信しています。</p>
          <p>楽しんでもらえるとうれしいです！</p>
        </section>
    );
}