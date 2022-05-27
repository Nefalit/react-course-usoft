import React from "react";
import "./form.css";

export const FormRadioButton = ({ props }) => {
  console.log([...Array(props).keys()]);
  return (
    <ul className="form_radio_button">
      {[...Array(props).keys()].map((el, i) => {
        return (
          <li>
            <input type="radio" />{i+1}
          </li>
        );
      })}
    </ul>
  );
};
