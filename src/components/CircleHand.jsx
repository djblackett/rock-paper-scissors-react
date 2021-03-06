import React, { useContext } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { AppContext } from "../App";

const OuterCircle = styled.button`
  height: 150px;
  width: 150px;
  max-width: 225px;
  max-height: 225px;
  border: none;
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1;
  transform: translateY(-5px);
  transition: all 0.1s;

  &:hover {
    transform: scale(1.2) translateY(-5px);
  }

  &:focus {
    transform: scale(1.2) translateY(-5px);
  }
`;

const InnerCircle = styled.div`
  height: 80%;
  width: 80%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: lightgrey;
  padding: 0;
`;

const Center = styled.div`
  height: 100%;
  width: 100%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 50%;
  transform: translate(0, 5px);
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundCircle = styled(animated.div)`
  height: 150px;
  width: 150px;
  max-width: 225px;
  max-height: 225px;
  background-color: rgba(7, 90, 213, 0.3);
  border-radius: 50%;
  top: 5px;
  transition: all 0.2s;
  padding: 0;

  @media (min-width: 1300px) {
    /* margin-left: 2em;
    margin-right: 2em; */
  }
`;

// Generic component. Rock, Paper, and Scissors components each wrap this component.
function CircleHand(props) {
  const { toggleIsChoiceMade, isChoiceMade } = useContext(AppContext);
  const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const handleClick = () => {
    if (!isChoiceMade) {
      toggleIsChoiceMade();
      props.action();
    }
  };

  return (
    <BackgroundCircle
      style={{
        ...springProps,
        ...props.scale,
        gridArea: props.location ? props.location : "auto",
      }}
    >
      <OuterCircle style={{ background: props.color }} onClick={handleClick}>
        <InnerCircle>
          <Center>{props.icon}</Center>
        </InnerCircle>
      </OuterCircle>
    </BackgroundCircle>
  );
}

export default CircleHand;
