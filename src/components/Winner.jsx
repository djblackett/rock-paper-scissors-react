import React, { useContext } from "react";
import styled from "styled-components";
import { RulesContext } from "../App";

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  margin: 0 2em;
  height: 150px;
`;

const WinnerTitle = styled.h1`
  text-align: center;
  color: white;
  margin: 0;
`;

const PlayAgain = styled.button`
  background-color: white;
  color: hsl(229, 25%, 31%);
  border-radius: 5px;
  padding: 0.3em 2em;
  letter-spacing: 0.1em;
  color: hsl(229, 25%, 31%);
  border: none;
`;

function Winner(props) {
  const { toggleIsChoiceMade } = useContext(RulesContext);
  return (
    <WinnerContainer style={{ display: props.winnerChosen ? "flex" : "none" }}>
      <WinnerTitle>YOU WIN</WinnerTitle>
      <PlayAgain onClick={toggleIsChoiceMade}>PLAY AGAIN</PlayAgain>
    </WinnerContainer>
  );
}

export default Winner;
