import React from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FormWrapper } from "./components/FormRadioButton/FormWrapper";

function App() {
  return (
    <div className="wrapper">
      <Header props="Feedback Project from United Software by Myshchyshyn Oleksandr" />
      <FormWrapper/>
      <Footer text="&copy; Made by Oleksandr Myshchyshyn" />
    </div>
  );
}

export default App;
