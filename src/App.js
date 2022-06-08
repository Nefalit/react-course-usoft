import React from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";


function App() {
  return (
    <div className="wrapper">
      <Header props="Feedback Project from United Software by Volodymyr Kuzyk" />
      <Form />
      {/* we can use destructurise props */}
      <Footer text="&copy; Made by Volodymyr Kuzyk" />
    </div>
  );
}

export default App;
