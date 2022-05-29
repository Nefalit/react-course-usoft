import React, { useState } from "react";
import { FormWrapper } from "../FormRadioButton/FormWrapper";
import { FormInputWrapper } from "../FormInput/FormInputWrapper";

export const Form = () => {
  const [radioValue, setRadioValue] = useState(10);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);
  const date = new Date().toLocaleString();

  const handleRadioChecked = (ev) => {
    setRadioValue(Number(ev.target.value));
  };
  const handleInput = (ev) => {
    setInputValue(ev.target.value);
  };
  const onSubmit = () => {
    setResult([...result, { score: radioValue, text: inputValue }]);
    setInputValue("");
  };

  return (
    <div className="form">
      <FormWrapper value={radioValue} onChange={handleRadioChecked} />
      <FormInputWrapper
        value={inputValue}
        onChange={handleInput}
        onClick={onSubmit}
      />
      <div>
        {result.map((el, i) => (
          <p key={i} className="result">
            {date} || Grade: {el.score} - {el.text}
          </p>
        ))}
      </div>
    </div>
  );
};
