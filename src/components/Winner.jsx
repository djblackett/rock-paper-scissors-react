import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import { animated, useSpring } from "react-spring";

const WinnerContainer = styled(animated.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  justify-self: center;
  justify-content: center;
  margin: 0 1.5em;
  height: 150px;
  transition: all 0.5s ease-in;
  min-width: 20ch;
  max-width: 40%;
  z-index: 15;
  order: 3;
  grid-area: 2 / 1 / 3 / 3;
  transform: scale(2.5);

  @media (min-width: 1300px) {
    order: initial;
    transform: scale(1);
    margin-bottom: 5em;
  }
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
  padding: 0.5em 2em;
  letter-spacing: 0.1em;
  color: hsl(229, 25%, 31%);
  border: none;
  font-size: 12px;
  min-width: 20ch;
  font-weight: 700;
  :hover {
    color: orange;
  }
`;

function Winner(props) {
  const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const {
    toggleIsChoiceMade,
    incrementScore,
    resetPlayerChoice,
    resetHouseChoice,
    isChoiceMade,
  } = useContext(AppContext);

  const handleClick = () => {
    toggleIsChoiceMade();
    resetHouseChoice();
    resetPlayerChoice();
    props.resetWinner();
  };

  useEffect(() => {
    if (props.winner === "player") {
      incrementScore();
    }
  }, [isChoiceMade, props.winner]);

  const whoWon = () => {
    if (props.winner === "draw") {
      return "DRAW";
    } else if (props.winner === "player") {
      return "YOU WIN";
    } else if (props.winner === "house") {
      return "YOU LOSE";
    }
  };

  return (
    <WinnerContainer
      style={{
        ...springProps,
        display: props.winnerChosen ? "flex" : "none",
        // opacity: props.winnerChosen ? 1 : 0,
      }}
    >
      <WinnerTitle>{whoWon()}</WinnerTitle>
      <PlayAgain onClick={handleClick}>PLAY AGAIN</PlayAgain>
    </WinnerContainer>
  );
}

export default Winner;
