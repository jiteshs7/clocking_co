import React, { useState, useEffect } from "react";
import styles from "./Analogue.module.css";
import { DEFAULT_TIME_ZONE } from "../../constants/Constants";
import {
  alertUser,
  getHourDegrees,
  getMinuteDegrees,
  getSecondDegrees,
} from "./utils/UtilityFunctions";

function Analogue({ timeZone = DEFAULT_TIME_ZONE.UK, mainClock }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Default Locale is UK
    // Time shown in 24-hour format
    const interval = setInterval(() => {
      const now = new Date();
      const reqTime = now.toLocaleString(
        `en-${timeZone.locale}`,
        timeZone.options
      );
      setTime(new Date(reqTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  useEffect(() => {
    const minute = time.getMinutes();
    const sec = time.getSeconds();
    // When sec and time are 59
    // It means It's just past an hour so we'll alert user
    if (minute === 59 && sec === 59) {
      alertUser(time, timeZone);
    }
  }, [time]);

  const containerClass = mainClock
    ? `${styles.clock} ${styles["main-clock"]}`
    : styles.clock;

  return (
    <div className={containerClass}>
      <div
        className={styles["hour-hand"]}
        style={{ transform: `rotate(${getHourDegrees(time)}deg)` }}
      />
      <div
        className={styles["minute-hand"]}
        style={{ transform: `rotate(${getMinuteDegrees(time)}deg)` }}
      />
      <div
        className={styles["second-hand"]}
        style={{
          transform: `rotate(${getSecondDegrees(time)}deg)`,
          backgroundColor: timeZone.color,
        }}
      />

      <div
        className={styles["center-circle"]}
        style={{
          backgroundColor: timeZone.color,
        }}
      />
      <h3 className={styles["center-text"]}>{timeZone.locale}</h3>
    </div>
  );
}

export default Analogue;
