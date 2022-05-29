import React from "react";
import "./form.css";
import { FormTitle } from "./FormTitle";
import { FormRadioButton } from "./FormRadioButton";



export const FormWrapper = ({ value, onChange }) => {
  return (
    <div className="radio_form_wrapper">
      <FormTitle props="How would you rate our course?" />
      <FormRadioButton quantity={10} value={value} onChange={onChange} />
    </div>
  );
};
