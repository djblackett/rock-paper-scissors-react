import React from "react";
import styled from "styled-components";
import CircleHand from "./CircleHand";

const YouPickedGrid = styled.div`
  display: grid;
  grid-template: 80px 1fr / 1fr 1fr;
`;

const Text = styled.p`
  text-align: center;
`;

function YouPickedComponent() {
  return (
    <YouPickedGrid>
      <Text>YOU PICKED</Text>
      <Text>THE HOUSE PICKED</Text>
      <CircleHand />
      <CircleHand />
    </YouPickedGrid>
  );
}

export default YouPickedComponent;