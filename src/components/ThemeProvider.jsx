import React, { useState } from "react";

import { RulesContext } from "../App";

export const ThemeProvider = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleFunction = () => {
    setIsVisible(!isVisible);
    console.log("clicked!");
  };

  const [isChoiceMade, setIsChoiceMade] = useState(false);
  const toggleIsChoiceMade = () => {
    setIsChoiceMade(!isChoiceMade);
    console.log("chosen");
  };

  const [playerChoice, setPlayerChoice] = useState(null);
  const chooseRock = () => {
    setPlayerChoice("rock");
  };
  const choosePaper = () => {
    setPlayerChoice("paper");
  };

  const chooseScissors = () => {
    setPlayerChoice("scissors");
  };

  const resetPlayerChoice = () => {
    setPlayerChoice(null);
  };

  const [score, setScore] = useState(0);
  const incrementScore = () => {
    setScore(score + 1);
  };
  const clearScore = () => {
    setScore(0);
  };

  const [houseChoice, setHouseChoice] = useState(null);

  const houseChoose = (choice) => {
    setHouseChoice(choice);
  };

  const resetHouseChoice = () => {
    setHouseChoice(null);
  };

  const [winner, setWinner] = useState(null);
  const resetWinner = () => {
    setWinner(null);
  };

  const [fadeIn, setFadeIn] = useState(false);
  const toggleFadeIn = () => {
    setFadeIn(!fadeIn);
  };

  return (
    <RulesContext.Provider
      value={{
        isVisible,
        toggleFunction,
        isChoiceMade,
        toggleIsChoiceMade,
        playerChoice,
        choosePaper,
        chooseRock,
        chooseScissors,
        score,
        incrementScore,
        clearScore,
        houseChoice,
        houseChoose,
        resetHouseChoice,
        resetPlayerChoice,
        fadeIn,
        toggleFadeIn,
        winner,
        setWinner,
        resetWinner,
      }}
    >
      {children}
    </RulesContext.Provider>
  );
};
