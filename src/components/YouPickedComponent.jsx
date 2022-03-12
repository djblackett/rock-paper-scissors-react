import React, { useContext } from "react";
import styled from "styled-components";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Winner from "./Winner";
import { RulesContext } from "../App";
import Rules from "./Rules";

const YouPickedContainer = styled.div`
  display: flex;
  /* grid-template: 80px 1fr / 1fr 1fr; */
  flex-direction: row;
  width: 40%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 4em;
  color: white;
  font-weight: 700;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function YouPickedComponent() {
  const { playerChoice } = useContext(RulesContext);
  // const playerChoice = "rock";
  const player = () => {
    if (playerChoice === "rock") {
      return <Rock />;
    } else if (playerChoice === "paper") {
      return <Paper />;
    } else if (playerChoice === "scissors") {
      return <Scissors />;
    }
  };

  const houseChoice = () => {
    return <Paper />;
  };

  return (
    <YouPickedContainer>
      <PlayerWrapper>
        <Text>YOU PICKED</Text>
        {player()}
      </PlayerWrapper>

      <Winner winnerChosen={true} />

      <PlayerWrapper>
        <Text>THE HOUSE PICKED</Text>
        {houseChoice()}
      </PlayerWrapper>
    </YouPickedContainer>
  );
}

export default YouPickedComponent;
