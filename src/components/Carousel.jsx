import React from "react";
import styled from "styled-components";

//TODO: Merge prev and next into one component

export default function Carousel({ items }) {
  return (
    <Wrapper>
      <Prev>&larr;</Prev>
      {items?.map(({ imageURL, name }, index) => (
        <Item>
          <Image src={imageURL} alt={name} />
        </Item>
      ))}
      <Next>&rarr;</Next>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
`;

const Prev = styled.button`
  position: relative;
  left: 0;
  top: 0;
  border: 1px solid red;
  width: 100px;
  height: 100px;
  z-index: 2;
`;

const Next = styled.button``;

const Item = styled.div`
  border: 1px solid red;
  text-align: center;
  min-width: 100%;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  color: blue;
`;
