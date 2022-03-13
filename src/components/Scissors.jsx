import React, { useContext } from "react";
import styled from "styled-components";
import CircleHand from "./CircleHand";
import { RulesContext } from "../App";

function Scissors(props) {
  const { chooseScissors } = useContext(RulesContext);

  return (
    <CircleHand
      icon="images/icon-scissors.svg"
      color={"linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"}
      location={props.location}
      action={chooseScissors}
      scale={props.style}
    />
  );
}

export default Scissors;
