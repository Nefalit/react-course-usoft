import React, { useState } from "react";
import "./form.css";



export const FormRadioButton = ({ props }) => {
  const [value, setValue] = useState(10)
  const handleChecked = (ev)=>{
    setValue(Number(ev.target.value));
}

  return (
    <ul className="form_radio_button">
      {[...Array(props).keys()].map((el, i) => {
        return (
          <li key={i} className="radio_el">
            <input
              className=".radio_el_input"
              type="radio"
              value={i + 1}
              checked={value === i + 1}
              onChange={handleChecked}
            />
            <span className="radio_rate">{i + 1}</span>
          </li>
        );
      })}
    </ul>
  );
};
