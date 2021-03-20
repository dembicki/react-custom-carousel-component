import React from "react";
import styled from "styled-components";

const items = [{}];

export default function Carousel() {
  return (
    <Wrapper>
      <Item>
        <Image src="https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg" />
      </Item>
      <Item>
      <Image src="https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg" />
      </Item>
      <Item>
      <Image src="https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg" />
      </Item>
      </Wrapper>
  );
}

const Wrapper = styled.div`
margin: 1rem 3rem;
border:1px solid green;
border-radius: 10px;
width: 1200px;
display: flex;
justify-content: center;
`;

const Item = styled.div`
  /* border:1px solid red; */
  flex: 0.3;
  text-align: center;
  padding: 1rem;
`;

const Image = styled.img`
width: 100%;
height: auto;
`;

const Heading = styled.h1`
  color: blue;
`;
