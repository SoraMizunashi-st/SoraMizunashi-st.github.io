
import styles from './GameA.module.css';
import game_styles from './content/GameCore.module.css';
import GameContent from './content/GameCore';

import BackIndexComponent from '../../../../component/pageComponent/BackIndexComponent'

// メインページコンポーネント
export default function GameA()
{
    return (

        <>
        <section className={styles.section}>
          <h1 className={styles.h2}>
            ゲームのテストページです。
          </h1>
        </section>

        <section className={game_styles.gameFrame}>
          <GameContent />
        </section>

        <section className={styles.back}>
          <BackIndexComponent/>
        </section>
        </>

    );
}