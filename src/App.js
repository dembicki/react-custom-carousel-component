import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";
import "./App.css";

const App = () => (
  <>
    <h1>Test</h1>
    <Carousel />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));