import React, { useContext } from "react";
import styled from "styled-components";
import CircleHand from "./CircleHand";

function Scissors(props) {
  return (
    <CircleHand
      icon="images/icon-scissors.svg"
      color={"linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"}
      location={props.location}
    />
  );
}

export default Scissors;
