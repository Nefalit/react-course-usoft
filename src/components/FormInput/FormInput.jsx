import React from "react";
import "./formInput.css";

export const FormInput = ({ value, onChange }) => {

  return (
    <input
      type="text"
      name="feedback"
      value={value}
      onChange={onChange}
      placeholder="Write you feedback"
    />
  );
};
