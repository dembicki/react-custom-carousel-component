import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function Carousel({
  dots,
  arrows,
  children,
  autoplay,
  speed,
  infinite,
}) {
  const [xPos, setXPos] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const items = children;
  const settings = {
    dots: dots || false,
    arrows: arrows || false,
    autoplay: autoplay || false,
    speed: speed || 3000,
    inifinite: infinite || false,
  };

  useEffect(() => {
    setCurrSlide(Math.abs(xPos / 100));
    if (settings.autoplay) {
      setTimeout(() => {
        goRight();
      }, settings.speed);
    }
  }, [xPos]);

  const goLeft = () => {
    if (settings.inifinite) {
      xPos === 0 ? setXPos(-100 * (items.length - 1)) : setXPos(xPos + 100);
    } else {
      xPos === 0 ? null : setXPos(xPos + 100);
    }
  };

  const goRight = () => {
    if (settings.infinite) {
      xPos === -100 * (items.length - 1) ? setXPos(0) : setXPos(xPos - 100);
    } else {
      xPos === -100 * (items.length - 1) ? null : setXPos(xPos - 100);
    }
  };

  const GoToSlide = (index) => {
    setXPos(index * -100);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      goRight();
    }

    if (touchStart - touchEnd < -150) {
      goLeft();
    }
  };

  return (
    <Wrapper>
      <ContentWrapper ref={contentRef}>
        {items?.map((item, index) => (
          <Item
            key={index}
            style={{ transform: `translateX(${xPos}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {item}
          </Item>
        ))}
        {settings.arrows && (
          <>
            <Prev onClick={goLeft}>&larr;</Prev>
            <Next onClick={goRight}>&rarr;</Next>
          </>
        )}
      </ContentWrapper>
      <Dots>
        {settings.dots &&
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
  transition: 0.3s ease-in-out;
  > * {
    max-width: 100%;
    max-height: 90vh;
  }
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
