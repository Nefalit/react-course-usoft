import React from "react";
import "./form.css";
import { FormTitle } from "./FormTitle";
import { FormRadioButton } from "./FormRadioButton";

export const FormWrapper = () => {
  return (
    <div className="radio_form_wrapper">
      <FormTitle props="How would you rate our course?" />
      <FormRadioButton props={10} />
    </div>
  );
};
