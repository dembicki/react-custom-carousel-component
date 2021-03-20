import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";
import "./App.css";

const App = () => (
  <>
    <Carousel />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));