
import styles from './GameJ.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function GameJ() {
    return (

        <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            GameJのテストページです。
          </h1>
        </section>
        </main>
    );
}