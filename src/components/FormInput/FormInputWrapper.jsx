import React from "react";
import "./formInput.css";
import { FormInput } from "./FormInput";
import { FormInputButton } from "./FormInputButton";

export const FormInputWrapper = () => {
  return (
    <div className="input_form_wrapper">
      <FormInput props />
      <FormInputButton props="Send feedback" />
    </div>
  );
};
