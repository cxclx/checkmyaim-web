import Fetch from "../api/fetch";
import styles from "./Profile.modules.scss";

function Profile() {
  return (
    <div className={styles}>
      <Fetch />
    </div>
  );
}

export default Profile;
