import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Dev from "../../assets/img/devingermany.png";

function Footer() {
  return (
    <footer className={styles}>
      <div className={styles.Dev}>
        <img src={Dev} alt="Dev" />
      </div>

      <ul>
        <Link to={"/imprint"}>
          <li>Imprint</li>
        </Link>
        <Link to={"/tos"}>
          <li>Terms of Service</li>
        </Link>
        <Link to={"/privacy-policy"}>
          <li>Privacy Policy</li>
        </Link>
        <Link to={"/refund-policy"}>
          <li>Refund Policy</li>
        </Link>
      </ul>

      <div className={styles.Copyright}>
        <span>©2023 CheckMyAim.</span>
      </div>
    </footer>
  );
}

export default Footer;
