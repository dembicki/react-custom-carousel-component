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
  imageURL: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
},
{
  name: "image5",
  imageURL: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
},
{
  name: "image6",
  imageURL: "https://images.unsplash.com/photo-1611095780122-d692cee29291?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
},
{
  name: "image7",
  imageURL: "https://iknurow.pl/wp-content/uploads/mt-sample-background.jpg",
},
];

const App = () => (
  <>
    <Carousel arrows dots infinite itemsPerSlide={1}>
      {images?.map(({ name, imageURL }) => (
        <img src={imageURL} alt={name} />
      ))}
    </Carousel>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));