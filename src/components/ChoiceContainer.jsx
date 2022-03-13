import React, { useContext } from "react";
import styled from "styled-components";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import { RulesContext } from "../App";
import { animated, useSpring } from "react-spring";

const Container = styled(animated.div)`
  margin-top: 3em;
  max-width: 500px;
  max-height: 500px;
  display: grid;
  grid-template: 4fr 2.5fr 4fr / 2fr 1fr 2fr;
  background-image: url("images/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
  justify-items: center;
  transition: all 0.3s ease-in;
`;

function ChoiceContainer() {
  const { fadeIn } = useContext(RulesContext);
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <Container style={props}>
      <Paper location={"1 / 1 / 2 / 2"} />
      <Scissors location={"1 / 3 / 2 / 4"} />
      <Rock location={"3 / 2 / 4 / 3 "} />
    </Container>
  );
}

export default ChoiceContainer;
