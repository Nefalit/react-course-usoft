import React from "react";
import "./formInput.css";

export const FormInputButton = ({ props, onClick }) => {
  return (
    <button className="send_button" type="submit" onClick={onClick}>
      {props}
    </button>
  );
};
