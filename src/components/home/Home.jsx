import styles from "./Home.module.scss";
import Button from "../button/Button";
import Jett from "../../assets/img/jett.png";

function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContainer}>
        <h1>Lorem ipsum in Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At
        </p>
        <div className={styles.button__container}>
          <Button variant="primary" label="Lorem Ipsum" />
          <Button variant="secondary" label="Ipsum Lorem" />
        </div>
      </div>
      <img src={Jett} alt="Jett"></img>
    </div>
  );
}

export default Home;
