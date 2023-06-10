import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles}>
      <h1>CheckMyAim</h1>
      <nav>
        <ul>
          <li>Software</li>
          <li>Premium</li>
          <li>Contact</li>
          <li className={styles.login}>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
