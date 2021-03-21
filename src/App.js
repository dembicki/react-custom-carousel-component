import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";
import "./App.css";

const images = [{
  name: "image1",
  imageURL: "https://images.unsplash.com/photo-1614598943701-92331ea9f894?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
},
{
  name: "image2",
  imageURL: "https://images.unsplash.com/photo-1615076754255-351148b9d194?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
},
{
  name: "image3",
  imageURL: "https://iknurow.pl/wp-content/uploads/mt-sample-background.jpg",
},
{
  name: "image4",
  imageURL: "https://images.unsplash.com/photo-1614141852898-ab2d3d772519?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
}
];

const App = () => (
  <>
    <Carousel dots arrows infinite autoplay>
      {images?.map(({name, imageURL}) =>(
        <img src={imageURL} alt={name} />
      ))}
    </Carousel>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));