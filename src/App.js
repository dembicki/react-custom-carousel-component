import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";
import "./App.css";

const App = () => (
  <>
    <Carousel dots arrows>
      <p>test</p>
      <p>test2</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&usqp=CAU" alt="image" />
    </Carousel>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));