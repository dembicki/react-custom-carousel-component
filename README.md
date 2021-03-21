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
    <Carousel dots arrows autoplay speed={1000} infinite>
      {images?.map(({name, imageURL}, index) => (
        <img key={index} src={imageURL} alt={name} />
      ))}
    </Carousel>
  </>
);

```

## Make testimonials slider

```JSX
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";
import "./App.css";

const testimonials = [{
  name: "Damian",
  review: "Great developer, highly recommended!",
  stars: 4.5,
},
{
  name: "Monica",
  review: "Work with this developer is a pleasure 💕",
  stars: 5,
},
{
  name: "David",
  review: "Professional work.",
  stars: 4.5,
},


];

const App = () => (
  <>
    <Carousel arrows dots infinite itemsPerSlide={1}>
      {testimonials?.map(({ name, review, stars }) => (
        <div>
          <h2>{name}</h2>
          <p>{review}</p>
          <b>Review: </b>
          <span>{stars}/5 ⭐</span>
        </div>
      ))}
    </Carousel>
  </>
);
```

## Features:

- Autoplay
- Responsive
- Supports any type of data
- Using pure react.js
- Supports touch swipes on mobile
- Infinite option
- Many items per page available

## Settings

### Autoplay

You can specify autoplay speed in ms.

```JSX
<Carousel
autoplay={true} /* default: false */
speed={1000} /* default: 3000 */
>
  <p>item1</p>
  <p>item2</p>
</Carousel>
```

### Show arrows

```JSX
<Carousel arrows={true} /* default: false */ >
  <p>item1</p>
  <p>item2</p>
</Carousel>
```

### Show dots navigation

```JSX
<Carousel dots={true} /* default: false */ >
  <p>item1</p>
  <p>item2</p>
</Carousel>
```

### Enable inifinite option

```JSX
<Carousel infinite={true} /* default: false */ >
  <p>item1</p>
  <p>item2</p>
</Carousel>
```
