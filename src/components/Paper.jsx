import React, { useContext } from "react";
import styled from "styled-components";
import CircleHand from "./CircleHand";

function Paper(props) {
  return (
    <CircleHand
      icon="images/icon-paper.svg"
      color={"linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))"}
      location={props.location}
    />
  );
}

export default Paper;
