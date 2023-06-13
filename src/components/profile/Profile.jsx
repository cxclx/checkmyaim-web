import styles from "./Profile.modules.scss";
import Fetch from "../api/fetch";

function Profile() {
  return (
    <div className={styles}>
      <Fetch />
    </div>
  );
}

export default Profile;
