import React from "react";
import SelectAnalogue from "../../components/selectAnalogue/SelectAnalogue";
import Analogue from "../../components/analogue/Analogue";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Clocks & Co.</h2>
      <div className={styles["clock-container"]}>
        <SelectAnalogue defaultOption="USA" />
        <Analogue mainClock={true} />
        <SelectAnalogue defaultOption="India" />
      </div>
    </div>
  );
};

export default Home;
