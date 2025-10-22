
import styles from './Header.module.css';

export default function Header() {
    return (
  
    <header className={styles.header}>
        <div className={styles.logo}>StellaLab.</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navItem}>About</a>
          <a href="#projects" className={styles.navItem}>Projects</a>
          <a href="#contact" className={styles.navItem}>Contact</a>
        </nav>
    </header>
    );
}