
import styles from './GameI.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameI() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameIのテストページです。
          </h1>
        </section>
        </main>
    );
}