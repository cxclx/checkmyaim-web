import styles from "./Redirect.module.scss";
import Logo from "../../assets/img/logo.png";
import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Redirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/profile");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const action = location.state ? location.state.action : "";
  return (
    <div className={styles.Redirect}>
      <Link to={"/profile"}>
        <img src={Logo} alt="Logo"></img>
      </Link>
      <h1 className={styles.Label}>{action}</h1>
    </div>
  );
}

export default Redirect;
