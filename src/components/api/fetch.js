import axios from "axios";
import { useEffect } from "react";

function Fetch() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
}

export default Fetch;
