import React from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";


function App() {
  return (
    <div className="wrapper">
      <Header props="Feedback Project from United Software by Myshchyshyn Oleksandr" />
      <Form />
      {/* we can use destructurise props */}
      <Footer text="&copy; Made by Oleksandr Myshchyshyn" />
    </div>
  );
}

export default App;
