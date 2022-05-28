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
              type="radio"
              value={i + 1}
              checked={value === i+1}
              onChange={handleChecked}
            />
            {i + 1}
          </li>
        );
      })}
    </ul>
  );
};
