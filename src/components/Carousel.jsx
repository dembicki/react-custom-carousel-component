import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Carousel({ dots, arrows, children }) {
  const [xPos, setXPos] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);
  const items = children;

  useEffect(() => {
    setCurrSlide(Math.abs(xPos / 100));
  }, [xPos]);

  const goLeft = () => {
    xPos === 0 ? setXPos(-100 * (items.length - 1)) : setXPos(xPos + 100);
  };

  const goRight = () => {
    xPos === -100 * (items.length - 1) ? setXPos(0) : setXPos(xPos - 100);
  };

  const GoToSlide = (index) => {
    setXPos(index * -100);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        {items?.map((item, index) => (
          <Item key={index} style={{ transform: `translateX(${xPos}%)` }}>
            {item}
          </Item>
        ))}
        {arrows && (
          <>
            <Prev onClick={goLeft}>&larr;</Prev>
            <Next onClick={goRight}>&rarr;</Next>
          </>
        )}
      </ContentWrapper>
      <Dots>
        {dots &&
          items?.length > 1 &&
          items?.map((i, index) => (
            <Dot key={index}>
              <input
                id={`slide-${index + 1}`}
                checked={currSlide === index ? true : false}
                onChange={() => GoToSlide(index)}
                type="radio"
              />
              <label htmlFor={`slide-${index + 1}`}></label>
            </Dot>
          ))}
      </Dots>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const Item = styled.div`
  text-align: center;
  width: 100%;
  height: 90vh;
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

const Dots = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  justify-content: space-around;
`;

const Dot = styled.div`
  > input[type="radio"] {
    display: none;
  }

  > input:checked + label {
    background: linear-gradient(#00cfff, #1584bc);
    box-shadow: inset 0 0 1px 1px #087dc0;
  }

  > label {
    display: inline-block;
    background: #ddd;
    overflow: hidden;
    text-indent: -999px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    box-shadow: inset 0 1px 1px 0 #999;
    &:hover {
      background: #bbb;
      cursor: pointer;
      box-shadow: inset 0 1px 1px 0 #777;
    }
  }
`;
