import React from "react";
import styled from "styled-components";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

const Container = styled.div`
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
`;

function ChoiceContainer() {
  return (
    <Container>
      <Paper location={"1 / 1 / 2 / 2"} />
      <Scissors location={"1 / 3 / 2 / 4"} />
      <Rock location={"3 / 2 / 4 / 3 "} />
    </Container>
  );
}

export default ChoiceContainer;
