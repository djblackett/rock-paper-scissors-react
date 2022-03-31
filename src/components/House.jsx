import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import React, { useContext } from "react";
import { AppContext } from "../App";
import Delayed from "./Delayed";

function House() {
  const { houseChoice } = useContext(AppContext);

  if (houseChoice === "rock") {
    return (
      <Delayed waitBeforeShow={1000}>
        <Rock style={{ transform: "scale(1.5)" }} />
      </Delayed>
    );
  } else if (houseChoice === "paper") {
    return (
      <Delayed waitBeforeShow={1000}>
        <Paper style={{ transform: "scale(1.5)" }} />
      </Delayed>
    );
  } else {
    return (
      <Delayed waitBeforeShow={1000}>
        <Scissors style={{ transform: "scale(1.5)" }} />
      </Delayed>
    );
  }
}

export default House;
