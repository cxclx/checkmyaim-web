import styles from "./Login.module.scss";
import Button from "./../button/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.Login}>
      <form>
        <div className={styles.Inputfields}>
          <div className={styles.Inputfield}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={styles.Inputfield}>
            <label>Password</label>
            <input type="password" />
          </div>
        </div>

        <div className={styles.Signup}>
          <Button variant="secondary" label="Log in" />
          <span>Do not have an account?</span>
          <Link to="/signup">
            <span className={styles.Hyperlink}>Create Account</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
