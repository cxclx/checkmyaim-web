import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { useState, useRef } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastClick = useRef(0);

  const handleMenuToggle = () => {
    const now = new Date().getTime();
    if (now - lastClick.current < 200) {
      return;
    }
    setIsMenuOpen(!isMenuOpen);
    lastClick.current = now;
  };
  return (
    <header className={styles}>
      <Link to={"/"}>
        <div className={styles.title}>
          <img src={Logo} alt="Logo" />
          <h1>CMA</h1>
        </div>
      </Link>
      <nav>
        <ul className={styles.Menu}>
          <Link to={"/app"}>
            <li>App</li>
          </Link>
          <Link to={"/premium"}>
            <li className={styles.premium}>Premium</li>
          </Link>
          <Link to={"/login"}>
            <li className={styles.login}>Log In</li>
          </Link>
        </ul>
        <ul>
          <div onClick={handleMenuToggle} className={styles.BurgerMenu}>
            <div className={styles.Burger}></div>
            <div className={styles.Burger}></div>
            <div className={styles.Burger}></div>
          </div>
          {isMenuOpen && (
            <div className={styles.Open}>
              <li>Software</li>
              <li>Premium</li>
              <li>Contact</li>
              <Link to={"/login"}>
                <li className={styles.login}>Log In</li>
              </Link>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
