
import styles from './Header.module.css';

export default function Header() {
    return (
  
    <header className={styles.header}>

      <div className={styles.logo}>StellaLab.</div>
      <nav className={styles.nav}>
        <a href="#about" className={styles.navItem}>About</a>
        <a href="#news" className={styles.navItem}>News</a>
        <a href="#game_section" className={styles.navItem}>Game</a>
        <a href="#topic" className={styles.navItem}>Topic</a>
        <a href="#faq" className={styles.navItem}>FAQ</a>
        <a href="#contact" className={styles.navItem}>Contact</a>
      </nav>

    </header>
    );
}