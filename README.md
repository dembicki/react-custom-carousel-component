# react-custom-carousel-component

## Getting Started

You need to pass at least 2 items.

```JSX
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";


const App = () => (
  <>
    <Carousel dots arrows>
      <p>test</p>
      <p>test2</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&usqp=CAU" alt="image" />
    </Carousel>
  </>
);

```

## Make image slider

```JSX
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";

const images = [{
  name: "image1",
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&usqp=CAU",
},
{
  name: "image2",
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&usqp=CAU",
},
{
  name: "image3",
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&usqp=CAU",
}];

const App = () => (
  <>
    <Carousel dots arrows >
      {images?.map(({name, imageURL}) => (
        <img key={index} src={imageURL} alt={name} />
      ))}
    </Carousel>
  </>
);

```

## Parameters

### Show arrows (default: false)

```JSX
<Carousel arrows={true} /* default: false */ >
  <p>item1</p>
  <p>item2</p>
</Carousel>
```

### Show dots navigation (default: false)

```JSX
<Carousel dots={true} /* default: false */ >
  <p>item1</p>
  <p>item2</p>
</Carousel>
```
