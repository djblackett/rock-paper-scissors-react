import React, { useContext } from "react";
import styled from "styled-components";
import CircleHand from "./CircleHand";
import { RulesContext } from "../App";

function Paper(props) {
  const { choosePaper } = useContext(RulesContext);

  return (
    <CircleHand
      icon="images/icon-paper.svg"
      color={"linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))"}
      location={props.location}
      action={choosePaper}
    />
  );
}

export default Paper;
