import "./App.css";
import Header from "./components/Header";
import Rules from "./components/Rules";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ChoiceContainer from "./components/ChoiceContainer";
import YouPickedComponent from "./components/YouPickedComponent";
import Delayed from "./components/Delayed";

export const RulesContext = React.createContext(true);

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  transition: all 0.5s ease-out 0.5s;
`;

const RulesButton = styled.button`
  align-self: flex-end;
  margin-bottom: 3em;
  margin-right: 3em;
  padding: 0.3em 1.9em;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  letter-spacing: 0.1em;
  text-align: center;
  transition: all 0.5s ease-in;
  justify-self: flex-end;
`;

function App() {
  const {
    isVisible,
    toggleFunction,
    isChoiceMade,
    playerChoice,
    houseChoice,
    fadeIn,
    toggleFadeIn,
    winner,
    setWinner,
    resetWinner,
  } = useContext(RulesContext);

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
  }, [playerChoice, houseChoice, winner]);

  useEffect(() => {
    toggleFadeIn();
    return () => toggleFadeIn();
  }, []);

  useEffect(() => {
    // read to localStorage
  });

  return (
    <div className="App" style={{ opacity: fadeIn ? 1 : 0 }}>
      <Header
        className="App-header"
        style={{ opacity: fadeIn ? 1 : 0 }}
      ></Header>
      {!isChoiceMade && (
        <Delayed>
          <ChoiceContainer />
        </Delayed>
      )}
      <Overlay
        style={{
          visibility: isVisible ? "visible" : "hidden",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <Rules />

      {!isChoiceMade && (
        <Delayed>
          <RulesButton
            onClick={toggleFunction}
            style={{ opacity: fadeIn ? 1 : 0 }}
          >
            RULES
          </RulesButton>
        </Delayed>
      )}
      {isChoiceMade && (
        <>
          <YouPickedComponent winner={winner} resetWinner={resetWinner} />
        </>
      )}
    </div>
  );
}

export default App;
