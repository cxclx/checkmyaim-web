import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png"

function Header() {
  return (
    <header className={styles}>
      <Link to={'/'}>
      <img src={Logo} alt="Logo"/>
      </Link>
      <nav>
        <ul>
          <li>Software</li>
          <li>Premium</li>
          <li>Contact</li>
          <Link to={'/login'}>
          <li className={styles.login}>Sign Up</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
