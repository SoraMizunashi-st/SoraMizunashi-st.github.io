
import styles from './privacy.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function privacy() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            テストページです。
          </h1>
        </section>
        </main>
    );
}