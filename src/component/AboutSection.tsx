
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.section}>
          <h2>About Us</h2>
          <p>StellaLab.は2023年2月に結成した『面白い事を探そう』という目的の団体です。</p>
          <p>当サイトでは、ニュースや技術関連での『面白い事』や、いくつかの作成したツール・ゲームを配信しています。</p>
          <p>楽しんでもらえるとうれしいです！</p>
        </section>
    );
}