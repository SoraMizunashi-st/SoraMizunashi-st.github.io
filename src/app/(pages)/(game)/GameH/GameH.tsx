
import styles from './GameH.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameH() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameHのテストページです。
          </h1>
        </section>
        </main>
    );
}