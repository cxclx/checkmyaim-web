import styles from "./Signup.module.scss";
import Button from "./../button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const register = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });
      console.log(res.data); // "User registered"
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.Signup}>
      <form onSubmit={register}>
        <div className={styles.Inputfields}>
          <div className={styles.Inputfield}>
            <label>Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.Inputfield}>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.Inputfield}>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.Inputfield}>
            <label>Repeat Password</label>
            <input
              type="password"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.Login}>
          <Button variant="secondary" label="Sign Up" type="submit" />
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
