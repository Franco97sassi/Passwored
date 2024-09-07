import React from "react";
import rocketgif from "../assets/rocket2.gif";
import Estrella1 from "../assets/images/Estrella1";
import styles from "./rocket.module.css";
import { useMediaQuery } from "@mui/material";

const Rocket = () => {
  const matches = useMediaQuery('(max-width:600px)')

  return (
    <>  
     {!matches ?(

<div className={styles.container}>
<div className={styles.star2}>
  <Estrella1 className={styles.star22} />
</div>
<div className={styles.rocketContainer}>
  <img src={rocketgif} alt="Rocket animation" className={styles.rocket} />
</div></div>
     ):
     
     (
      <div className={styles.container}>
<div className={styles.star2}>
  <Estrella1 className={styles.star22} />
</div>
<div className={styles.rocketContainer}>
  <img src={rocketgif} alt="Rocket animation" className={styles.rocket} />
</div>
</div>
     )
     }
      </>
    
  );
};

export default Rocket;
