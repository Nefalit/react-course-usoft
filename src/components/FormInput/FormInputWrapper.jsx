import React from "react";
import "./formInput.css";
import { FormInput } from "./FormInput";
import { FormInputButton } from "./FormInputButton";

export const FormInputWrapper = ({ value, onChange, onClick }) => {
  return (
    <div className="input_form_wrapper">
      <FormInput value={value} onChange={onChange} />
      <FormInputButton props="Send feedback" onClick={onClick} />
    </div>
  );
};
