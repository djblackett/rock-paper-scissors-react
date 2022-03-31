import styled from "styled-components";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import { animated, useSpring } from "react-spring";

const Container = styled(animated.div)`
  margin-top: 1em;
  max-width: 500px;
  max-height: 500px;
  display: grid;
  grid-template: 4fr 2.5fr 4fr / 2fr 1fr 2fr;
  background-image: url(${process.env.PUBLIC_URL + "/images/bg-triangle.svg"});
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
  justify-items: center;
  transition: all 0.01s ease-in;
  transform: scale(0.65);

  @media (min-width: 400px) {
    transform: scale(0.75);
    margin-top: 3em;
  }

  @media (min-width: 1300px) {
    transform: scale(1.2);
    margin-top: 7rem;
  }
`;

function ChoiceContainer() {
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
