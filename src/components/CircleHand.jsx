import React, { useContext } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { RulesContext } from "../App";

const OuterCircle = styled.div`
  height: 150px;
  width: 150px;
  max-width: 225px;
  max-height: 225px;
  border-radius: 50%;
  /* background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%)); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 3px 4px ; */
  position: relative;
  z-index: 5;
  transform: translateY(-5px);
`;

const InnerCircle = styled.div`
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background-color: lightgrey;
  z-index: 10;
`;
const Center = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 50%;
  transform: translate(0, 5px);
  z-index: 15;
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
  z-index: 1;
  transition: all 0.3s ease-in;
  /* margin: 2em;
  margin-left: 2em;
  margin-right: 2em; */
`;

function CircleHand(props) {
  const { toggleIsChoiceMade, isChoiceMade } = useContext(RulesContext);
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
          <Center>
            <img alt="icon" src={props.icon} />
          </Center>
        </InnerCircle>
      </OuterCircle>
    </BackgroundCircle>
  );
}

export default CircleHand;
