import React, { useState } from "react";
import styled from "styled-components";

//TODO: Merge prev and next into one component

export default function Carousel({ items }) {
  const [xPos, setXPos] = useState(0);
  //TODO: merge left and right to single function
  const goLeft = () => {
    xPos === 0 ? setXPos(-100 * (items.length - 1)) : setXPos(xPos + 100);
  };

  const goRight = () => {
    console.log(xPos);
    xPos === -100 * (items.length - 1) ? setXPos(0) : setXPos(xPos - 100);
  };

  return (
    <Wrapper>
      {items?.map(({ imageURL, name }) => (
        <Item style={{ transform: `translateX(${xPos}%)` }}>{name}</Item>
      ))}
      <Prev onClick={goLeft}>&larr;</Prev>
      <Next onClick={goRight}>&rarr;</Next>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Item = styled.div`
  border: 1px solid red;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  transition: 0.5s ease-in-out;
`;

const Prev = styled.button`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  z-index: 2;
`;

const Next = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  z-index: 2;
`;
