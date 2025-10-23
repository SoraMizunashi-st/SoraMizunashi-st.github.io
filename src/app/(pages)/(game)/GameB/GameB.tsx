
import styles from './GameB.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameB() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameBののテストページです。
          </h1>
        </section>
        </main>
    );
}