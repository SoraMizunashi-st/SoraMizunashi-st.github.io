

import styles from './NewsSection.module.css';

import Link from 'next/link';

export default function ProjectSection() {
    return (
        <section id="news" className={styles.section}>
          <h2>News</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>
              <Link href = "/news1101" >2025/11/01 17:00 ニュースのテスト</Link>
            </div>

            <div className={styles.projectItem}>
              <Link href = "/news1102" >2025/11/02 17:00 ニュースのテスト</Link>
            </div>
          </div>
        </section>
    );
}