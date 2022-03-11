// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CircleHand from "./components/CircleHand";
import Rules from "./components/Rules";
import React, { useContext } from "react";
import styled from "styled-components";
import ChoiceContainer from "./components/ChoiceContainer";
import YouPickedComponent from "./components/YouPickedComponent";

export const RulesContext = React.createContext(true);

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3; ;
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
`;

function App() {
  const { isVisible, toggleFunction } = useContext(RulesContext);
  // console.log(isVisible);

  //conditionals for determining which gets rendered

  return (
    <div className="App">
      <Header className="App-header"></Header>
      <ChoiceContainer />
      <Overlay style={{ visibility: isVisible ? "visible" : "hidden" }} />
      <Rules />

      <p>
        {" "}
        Score Rules You Picked The House Picked You Win You Lose Play Again
      </p>
      <RulesButton onClick={toggleFunction}>RULES</RulesButton>
      <YouPickedComponent />
    </div>
  );
}

export default App;
