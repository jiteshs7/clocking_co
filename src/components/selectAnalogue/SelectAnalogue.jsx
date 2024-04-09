import React, { useState } from "react";
import styles from "./SelectAnalogue.module.css";
import CustomDropdown from "../custom/dropdown/CustomDropDown";
import Analogue from "../analogue/Analogue";
import { DEFAULT_TIME_ZONE } from "../../constants/Constants";
const SelectAnalogue = ({ defaultOption = "UK" }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  return (
    <div className={styles.container}>
      <CustomDropdown
        selectedOption={selectedOption}
        onSelection={(option) => setSelectedOption(option)}
      />
      <Analogue timeZone={DEFAULT_TIME_ZONE[selectedOption]} />
    </div>
  );
};

export default SelectAnalogue;
