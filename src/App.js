import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";
import "./App.css";

const images = [{
  name: "image1",
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&usqp=CAU",
},
{
  name: "image2",
  imageURL: "https://images.unsplash.com/photo-1612831661941-254341b885e9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
},
{
  name: "image3",
  imageURL: "https://iknurow.pl/wp-content/uploads/mt-sample-background.jpg",
}];

const App = () => (
  <>
    <Carousel dots arrows >
      {images?.map(({name, imageURL}) =>(
        <img src={imageURL} alt={name} />
      ))}
    </Carousel>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));