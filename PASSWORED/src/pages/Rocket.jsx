import React from "react";
import rocketgif from "../assets/rocket2.gif";
import Estrella1 from "../assets/images/Estrella1";
import styles from "./rocket.module.css";

const Rocket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.star2}>
        <Estrella1 className={styles.star22} />
      </div>
      <div className={styles.rocketContainer}>
        <img src={rocketgif} alt="Rocket animation" className={styles.rocket} />
      </div>
      
    </div>
  );
};

export default Rocket;
