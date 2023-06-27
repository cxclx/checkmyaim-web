import styles from "./Profile.module.scss";
import User from "../../assets/img/avatar.png";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function Profile() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Decode JWT token to get the username
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      setUsername(decoded.username);
    }
  }, []);
  return (
    <div className={styles.Profile}>
      <img src={User} alt="User" />
      <h1>{username}</h1>
    </div>
  );
}

export default Profile;
