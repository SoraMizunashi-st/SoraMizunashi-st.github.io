
import styles from './GameA.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameA() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameAののテストページです。
          </h1>
        </section>
        </main>
    );
}