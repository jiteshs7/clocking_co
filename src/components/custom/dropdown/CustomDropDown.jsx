import React from "react";
import { DEFAULT_OPTIONS } from "../../../constants/Constants";
const CustomDropdown = ({ selectedOption, onSelection }) => {
  const handleSelectChange = (event) => {
    onSelection(event.target.value);
  };

  return (
    <div style={{ margin: "1rem" }}>
      <select value={selectedOption} onChange={handleSelectChange}>
        {DEFAULT_OPTIONS.map((item) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
