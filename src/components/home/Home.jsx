import styles from "./Home.module.scss";
import Button from "../button/Button";
import Jett from "../../assets/img/jett.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContainer}>
        <h1>Valorant Aim Analyser: Perfect Your Gameplay</h1>
        <p>
          Improve your VALORANT Aim with our AI-powered software,
          meticulously analyzing your aiming and crosshair placement from
          uploaded gameplay videos. Discover insightful evaluations on our
          user-friendly web app, fine-tune your gameplay, and become a more
          consistent player.
        </p>
        <div className={styles.button__container}>
          <Link to={'/app'}>
          <Button variant="primary" label="Read more" />
          </Link>
          <Button variant="secondary" label="Download Free App" />
        </div>
      </div>
      <img src={Jett} alt="Jett"></img>
    </div>
  );
}

export default Home;
