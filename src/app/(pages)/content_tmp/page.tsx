
import common_styles from './common.module.css'; 
import styles from './mytmp.module.css'; // 専用CSSモジュールをインポート


// メインページコンポーネント
export default function my_tmp() {
    return (

        <main className={common_styles.main}>
        <section className={common_styles.hero}>
          <h1 className={common_styles.heroTitle}>
            テストページです。
          </h1>
        </section>
        </main>
    );
}