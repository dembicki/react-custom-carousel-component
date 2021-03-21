import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Carousel({
  dots,
  arrows,
  children,
  autoplay,
  speed,
  infinite,
  itemsPerSlide,
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
    infinite: infinite || false,
    itemsPerSlide: itemsPerSlide || 1,
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
    if (settings.infinite) {
      xPos === 0
        ? setXPos(-100 * (items.length - settings.itemsPerSlide))
        : setXPos(xPos + 100);
    } else {
      xPos === 0 ? null : setXPos(xPos + 100);
    }
  };

  const goRight = () => {
    if (settings.infinite) {
      xPos === -100 * (items.length - settings.itemsPerSlide)
        ? setXPos(0)
        : setXPos(xPos - 100);
    } else {
      xPos === -100 * (items.length - 1) ? null : setXPos(xPos - 100);
    }
  };

  //TODO: fix for slide checked
  const GoToSlide = (index) => {
    setXPos((index * -100 * settings.itemsPerSlide) / settings.itemsPerSlide);
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
      <ContentWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items?.map((item, index) => (
          <Item
            key={index}
            amount={(1 / settings.itemsPerSlide) * 100}
            style={{ transform: `translateX(${xPos}%)` }}
            //TODO: move this to content wrapper would be a better idea for more than 1 image per slide
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
          items
            .filter(
              (_, index) => index < items.length - settings.itemsPerSlide + 1
            )
            ?.map((i, index) => (
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
  overflow-y: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
`;

const Item = styled.div`
  padding: 1rem;
  text-align: center;
  min-width: ${(props) => props.amount}%;
  height: auto;
  display: flex;
  max-height: 1000px;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  > img {
    max-width: 100%;
    max-height: 100%;
    /* max-height: auto; */
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }
`;

const Dots = styled.nav`
  padding: 2rem;
  display: flex;
  flex: 10vh;
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
