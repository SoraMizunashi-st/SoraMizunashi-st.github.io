
import styles from './GameE.module.css'; // 専用CSSモジュールをインポート
import GameContent from './content/GameCore';

import BackIndexComponent from '../../../../component/pageComponent/BackIndexComponent'


// メインページコンポーネント
export default function GameE() {
    return (

        <>
        <section className={styles.section}>
          <h1 className={styles.h2}>
            ゲームのテストページです。
          </h1>
        </section>
        
        <section className={styles.gameSection}>
          <GameContent />
        </section>

        <section className={styles.back}>
          <BackIndexComponent/>
        </section>
        </>
    );
}