
import styles from './BackIndexComponent.module.css';

import Link from 'next/link';

export default function BackIndexComponent() {
    return (

        <>
        <section className={styles.Section}>
          <div>
            <Link href="../">戻る</Link>
          </div>
        </section>
        </>
    );
}