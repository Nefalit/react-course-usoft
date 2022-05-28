import React from "react";
import "./formInput.css";

export const FormInputButton = ({ props }) => {
  return (
    <button className="send_button" type="submit">
      {props}
    </button>
  );
};
