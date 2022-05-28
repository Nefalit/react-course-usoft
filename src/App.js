import React from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FormWrapper } from "./components/FormRadioButton/FormWrapper";
import {FormInputWrapper} from "./components/FormInput/FormInputWrapper"

function App() {
  return (
    <div className="wrapper">
      <Header props="Feedback Project from United Software by Myshchyshyn Oleksandr" />
      <FormWrapper />
      <FormInputWrapper />
      {/* we can use destructurise props */}
      <Footer text="&copy; Made by Oleksandr Myshchyshyn" />
    </div>
  );
}

export default App;
