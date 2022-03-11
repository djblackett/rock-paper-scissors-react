import React, { useContext } from "react";
import styled from "styled-components";
import CircleHand from "./CircleHand";

function Rock(props) {
  return (
    <CircleHand
      icon="images/icon-rock.svg"
      color={"linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))"}
      location={props.location}
    />
  );
}

export default Rock;
