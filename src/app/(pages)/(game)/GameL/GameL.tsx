
import styles from './GameL.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameL() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameLのテストページです。
          </h1>
        </section>
        </main>
    );
}