import styled from "styled-components";
import React, { useContext } from "react";
import { AppContext } from "../App";

const ScoreboardContainer = styled.div`
  width: 125px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  transform: scale(0.7);

  @media (min-width: 1300px) {
    transform: scale(1);
  }
`;

const ScoreLabel = styled.p`
  margin: 0;
  letter-spacing: 0.1em;
  color: hsl(229, 25%, 31%);
  font-weight: 700;
  margin-bottom: -0.5em;
`;

const ScoreNumber = styled.p`
  margin: 0;
  color: hsl(229, 64%, 46%);
  font-weight: 700;
  font-size: 3em;
`;

function Scoreboard() {
  const { score } = useContext(AppContext);
  return (
    <ScoreboardContainer>
      <ScoreLabel>SCORE</ScoreLabel>
      <ScoreNumber>{score}</ScoreNumber>
    </ScoreboardContainer>
  );
}

export default Scoreboard;
