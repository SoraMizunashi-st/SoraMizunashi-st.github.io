
import styles from './GameC.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameC() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameCののテストページです。
          </h1>
        </section>
        </main>
    );
}