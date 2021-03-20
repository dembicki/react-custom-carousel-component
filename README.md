# react-custom-carousel-component

## Getting Started

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
