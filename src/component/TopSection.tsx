
import styles from './TopSection.module.css';
import Carousel from './Carousel';

export default function ProjectSection() {
    return (
        <section id="projects" className={styles.section}>
            <Carousel/>
        </section>
    );
}