import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import React, { useContext } from "react";
import { AppContext } from "../App";

function House() {
  const { houseChoice } = useContext(AppContext);

  if (houseChoice === "rock") {
    return <Rock style={{ transform: "scale(1.5)" }} />;
  } else if (houseChoice === "paper") {
    return <Paper style={{ transform: "scale(1.5)" }} />;
  } else {
    return <Scissors style={{ transform: "scale(1.5)" }} />;
  }
}

export default House;
