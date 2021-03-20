# react-custom-carousel-component

## Getting Started

```JSX
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";

const items = [
  {
    name: "First slide",
    imageURL: "",
  },
  {
    name: "Second slide",
    imageURL: "",
  },
  {
    name: "Third slide",
    imageURL: "",
  },
  {
    name: "Fourth slide",
    imageURL: "",
  },
];


const App = () => (
  <div>
    <Carousel
     items={items}
      dots
      arrows
    />
  </div>
);

```

## Parameters

### Show arrows (default: false)

```JSX
 <Carousel
    items={items}
    arrows
 />
```

### Show dots navigation (default: false)

```JSX
 <Carousel
    items={items}
    dots
 />
```
