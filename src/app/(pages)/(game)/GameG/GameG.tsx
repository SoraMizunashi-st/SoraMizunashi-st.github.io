
import styles from './GameG.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameG() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameGのテストページです。
          </h1>
        </section>
        </main>
    );
}