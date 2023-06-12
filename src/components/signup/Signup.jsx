import styles from "./Signup.module.scss";
import Button from "./../button/Button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className={styles.Signup}>
      <form>
        <div className={styles.Inputfields}>
          <div className={styles.Inputfield}>
            <label>Username</label>
            <input type="email" required />
          </div>
          <div className={styles.Inputfield}>
            <label>Email</label>
            <input type="name" required />
          </div>
          <div className={styles.Inputfield}>
            <label>Password</label>
            <input type="password" required />
          </div>
          <div className={styles.Inputfield}>
            <label>Repeat Password</label>
            <input type="password" required />
          </div>
        </div>

        <div className={styles.Login}>
          <Button variant="secondary" label="Sign Up" />
          <span>Already have an account?</span>
          <Link to="/login">
            <span className={styles.Hyperlink}>Log In</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
