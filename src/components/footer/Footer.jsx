import styles from "./Footer.module.scss";
import Certificate from "../../assets/img/bnetza__2.png";

function Footer() {
  return (
    <footer className={styles}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className={styles.Certificate}>
        <img src={Certificate} alt="Certificate" />
      </div>

      <div className={styles.Copyright}>
        <span>©2023 CheckMyAim.</span>
      </div>
    </footer>
  );
}

export default Footer;
