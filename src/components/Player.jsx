import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import React, { useContext } from "react";
import { AppContext } from "../App";

function Player() {

  const {playerChoice} = useContext(AppContext);

  if (playerChoice === "rock") {
    return <Rock style={{ transform: "scale(1.5)" }} />;
  } else if (playerChoice === "paper") {
    return <Paper style={{ transform: "scale(1.5)" }} />;
  } else if (playerChoice === "scissors") {
    return <Scissors style={{ transform: "scale(1.5)" }} />;
  }
}

export default Player;
