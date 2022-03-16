import React, { useEffect, useState } from "react";

import { AppContext } from "../App";

// Global state and setter/toggle functions
// Intentionally used Context API just to learn it. Undecided if Redux would have been a better choice.

export const ContextProvider = ({ children }) => {
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

  useEffect(() => {
    if (playerChoice && houseChoice) {
      if (playerChoice === houseChoice) {
        setWinner("draw");
      } else if (playerChoice === "rock" && houseChoice === "paper") {
        setWinner("house");
      } else if (playerChoice === "rock" && houseChoice === "scissors") {
        setWinner("player");
      } else if (playerChoice === "scissors" && houseChoice === "rock") {
        setWinner("house");
      } else if (playerChoice === "scissors" && houseChoice === "paper") {
        setWinner("player");
      } else if (playerChoice === "paper" && houseChoice === "rock") {
        setWinner("player");
      } else if (playerChoice === "paper" && houseChoice === "scissors") {
        setWinner("house");
      }
    }
  }, [playerChoice, houseChoice, winner, setWinner]);

  return (
    <AppContext.Provider
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
    </AppContext.Provider>
  );
};
