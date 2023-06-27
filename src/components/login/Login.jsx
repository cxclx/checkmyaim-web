import styles from "./Login.module.scss";
import Button from "./../button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("https://2.59.134.208:5000/login", {
        usernameOrEmail,
        password,
      });
      const token = res.data.token;
      // Save token in localStorage
      localStorage.setItem("jwtToken", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      navigate("/redirect", { state: { action: "Logged In" } });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.Login}>
      <form onSubmit={login}>
        <div className={styles.Inputfields}>
          <div className={styles.Inputfield}>
            <label>Username or Email</label>
            <input
              type="text"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
          </div>
          <div className={styles.Inputfield}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.Signup}>
          <Button variant="secondary" label="Log in" type="submit" />
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
