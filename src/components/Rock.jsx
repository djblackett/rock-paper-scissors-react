import React, { useContext } from "react";
import styled from "styled-components";
import CircleHand from "./CircleHand";
import { RulesContext } from "../App";

function Rock(props) {
  // const [state, setState] = useState()

  const { chooseRock } = useContext(RulesContext);

  return (
    <CircleHand
      icon="images/icon-rock.svg"
      color={"linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))"}
      location={props.location}
      action={chooseRock}
    />
  );
}

export default Rock;
