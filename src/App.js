import "./App.css";
import Header from "./components/Header";
import Rules from "./components/Rules";
import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import ChoiceContainer from "./components/ChoiceContainer";
import GameResults from "./components/GameResults";
import Attribution from './components/Attribution';

export const AppContext = React.createContext(true);

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
  align-self: center;
  margin-bottom: 3em;
  cursor: pointer;
  padding: 0.3em 1.9em;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  letter-spacing: 0.1em;
  text-align: center;
  /* transition: all 0.5s ease-in; */
  justify-self: center;

  @media (min-width: 1300px) {
    align-self: flex-end;
    justify-self: end;
    margin-right: 3em;
    margin-bottom: 1em;
  }
`;

// Uses isChoiceMade to switch between the 2 scenes of the game. When false, the ChoiceContainer is rendered so the player can make a choice.
// When a hand is selected, it switches to true, causing the GameResults to be rendered instead.

function App() {
  const {
    isVisible,
    toggleFunction,
    isChoiceMade,
    fadeIn,
    toggleFadeIn,
    winner,
    resetWinner,
  } = useContext(AppContext);

  useEffect(() => {
    toggleFadeIn();
    return () => toggleFadeIn();
  }, []);

  useEffect(() => {
    // read/save to localStorage
  });

  return (
    <div className="App" style={{ opacity: fadeIn ? 1 : 0 }}>


      {/* Game logo and scorebox  */}
      <Header
        className="App-header"
        // style={{ opacity: fadeIn ? 1 : 0 }}
      ></Header>

      {/* Player makes a choice here */}
      {!isChoiceMade && (
        <>
          <ChoiceContainer />
          <RulesButton
            onClick={toggleFunction}
            // style={{ opacity: fadeIn ? 1 : 0 }}
          >
            RULES
          </RulesButton>
        </>
      )}

      {/* This is a modal box and overlay for the rules of the game.  */}
      <Overlay
        style={{
          visibility: isVisible ? "visible" : "hidden",
          // opacity: isVisible ? 1 : 0,
        }}
      />
      <Rules />

      {/* The results are displayed here. The Winner componenet is rendered from within GameResults */}
      {isChoiceMade && (
        <>
          <GameResults winner={winner} resetWinner={resetWinner} />
        </>
      )}
      <Attribution />
      {/* Standard attribution for Front End Mentor projects */}
      
      </div>
  );
}

export default App;
