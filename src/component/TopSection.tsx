
import styles from './TopSection.module.css';
import Carousel from './Carousel';

export default function ProjectSection() {
    return (
        <section id="projects" className={styles.section}>
            <h2>カルーセルのテスト</h2>

            <Carousel/>

        </section>
    );
}