import React, { useEffect } from "react";
import { Gradient } from "./Gradient";
import styles from "./Mesh.css";

function Mesh() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return <canvas style={styles} id="gradient-canvas" data-transition-in />;
}

export default Mesh;
