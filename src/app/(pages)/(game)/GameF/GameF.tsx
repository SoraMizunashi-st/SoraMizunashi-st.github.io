
import styles from './GameF.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameF() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameFのテストページです。
          </h1>
        </section>
        </main>
    );
}