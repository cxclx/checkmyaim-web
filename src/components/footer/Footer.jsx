import styles from "./Footer.module.scss";
import Dev from "../../assets/img/devingermany.png";

function Footer() {
  return (
    <footer className={styles}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className={styles.Dev}>
        <img src={Dev} alt="Dev" />
      </div>

      <div className={styles.Copyright}>
        <span>©2023 CheckMyAim.</span>
      </div>
    </footer>
  );
}

export default Footer;
