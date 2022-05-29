import React from "react";
import "./form.css";



export const FormRadioButton = ({ quantity, value, onChange }) => {
  return (
    <ul className="form_radio_button">
      {[...Array(quantity).keys()].map((el, i) => {
        return (
          <li key={i} className="radio_el">
            <input
              className=".radio_el_input"
              type="radio"
              value={i + 1}
              checked={value === i + 1}
              onChange={onChange}
            />
            <span className="radio_rate">{i + 1}</span>
          </li>
        );
      })}
    </ul>
  );
};
