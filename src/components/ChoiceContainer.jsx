import styled from "styled-components";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import { animated, useSpring } from "react-spring";

const Container = styled(animated.div)`
  margin-top: 3em;
  /* padding-top: -5em; */
  max-width: 500px;
  max-height: 700px;
  /* width: 80%; */
  display: grid;
  /* grid-template: 4fr 2.5fr 4fr / 2fr 1fr 2fr; */
  grid-template: 30% 40% 30% / 2fr 1fr 2fr;
  background-image: url(${process.env.PUBLIC_URL + "/images/bg-triangle.svg"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  align-items: center;
  justify-items: center;
  /* transition: all 0.3s ease-in; */
  transform: scale(0.6);

  @media (min-width: 1300px) {
    transform: scale(1);
  }
`;

function ChoiceContainer() {
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <Container>
      {/* <Container style={props}> */}
      <Paper location={"1 / 1 / 2 / 2"} />
      <Scissors location={"1 / 3 / 2 / 4"} />
      <Rock location={"3 / 2 / 4 / 3 "} />
    </Container>
  );
}

export default ChoiceContainer;
