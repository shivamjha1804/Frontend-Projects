import React from "react";
import "./InputSection.css";

const InputSection = () => {
  return (
    <div className="inputsection">
      <div className="day">
        <label htmlFor="day">DAY</label>
        <input className="day-input" type="number" min="1" max="31" />
      </div>
      <div className="month">
        <label htmlFor="month">MONTH</label>
        <input className="month-input" type="number" min="1" max="12" />
      </div>
      <div className="year">
        <label htmlFor="year">YEAR</label>
        <input className="year-input" type="number" min="1900" max="2023" />
      </div>
    </div>
  );
};

export default InputSection;
