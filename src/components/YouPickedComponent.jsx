import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Winner from "./Winner";
import { RulesContext } from "../App";
import Delayed from "./Delayed";
import { useSpring, animated } from "react-spring";
import { BackgroundImage } from "react-image-and-background-image-fade";

const YouPickedContainer = styled(animated.div)`
  display: flex;
  /* grid-template: 80px 1fr / 1fr 1fr; */
  flex-direction: row;
  width: 40%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: all 0.3s ease-in;
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 8em;
  color: white;
  font-weight: 700;
  justify-self: flex-start;
  position: relative;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 2em;
  min-width: 30ch;
  position: relative;
`;

const WinnerGradient = styled(animated.div)`
  /* background-color: transparent; */
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 500px;
  width: 500px;
  border-radius: 50%;
  position: absolute;

  transition: all 0.5s ease-in;
`;

const HousePlaceholder = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: blue;
  position: absolute;
  margin-top: 11em;
  opacity: 0.5;
`;

function YouPickedComponent() {
  const { playerChoice, houseChoice, houseChoose, winner, resetWinner } =
    useContext(RulesContext);
  const [houseChosen, setHouseChosen] = useState(false);

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const pp = useSpring({
    to: {
      backgroundImage:
        "radial-gradient(rgba(31, 55, 86, 1), rgba(20, 21, 57, 1))",
    },
    from: {
      backgroundImage:
        "radial-gradient(rgba(31, 55, 86, 0), rgba(20, 21, 57, 0))",
    },
  });

  const player = () => {
    if (playerChoice === "rock") {
      return <Rock style={{ transform: "scale(1.5)" }} />;
    } else if (playerChoice === "paper") {
      return <Paper style={{ transform: "scale(1.5)" }} />;
    } else if (playerChoice === "scissors") {
      return <Scissors style={{ transform: "scale(1.5)" }} />;
    }
  };

  useEffect(() => {
    const houseChoice = () => {
      const arr = ["rock", "paper", "scissors"];
      const index = Math.floor(Math.random() * 3);
      houseChoose(arr[index]);
    };

    houseChoice();
  }, []);

  const renderHouseChoice = () => {
    // setTimeout(() => {
    if (houseChoice === "rock") {
      return (
        <Delayed waitBeforeShow={2000}>
          <Rock style={{ transform: "scale(1.5)" }} />
        </Delayed>
      );
    } else if (houseChoice === "paper") {
      return (
        <Delayed waitBeforeShow={2000}>
          <Paper style={{ transform: "scale(1.5)" }} />
        </Delayed>
      );
    } else {
      return (
        <Delayed waitBeforeShow={2000}>
          <Scissors style={{ transform: "scale(1.5)" }} />
        </Delayed>
      );
    }
    // }, 1000);
  };

  return (
    <YouPickedContainer style={props}>
      <PlayerWrapper>
        <Text>YOU PICKED</Text>

        <Delayed waitBeforeShow={4200}>
          <WinnerGradient
            style={{
              ...pp,
              // opacity: winner === "player" ? 1 : 0,
              display: winner === "player" ? "block" : "none",
              // transform: winner === "player" ? "scale(4)" : "scale(0)",
            }}
          />
        </Delayed>
        {player()}
      </PlayerWrapper>

      <Delayed waitBeforeShow={4000}>
        <Winner
          winner={winner}
          winnerChosen={winner !== null}
          resetWinner={resetWinner}
        />
      </Delayed>

      <PlayerWrapper>
        <Text>THE HOUSE PICKED</Text>
        <HousePlaceholder />
        <Delayed waitBeforeShow={4200}>
          <WinnerGradient
            style={{
              ...props,
              // opacity: winner === "house" ? 1 : 0,
              display: winner === "house" ? "block" : "none",
              // transform: winner === "house" ? "scale(4)" : "scale(0)",
            }}
          />
        </Delayed>
        {renderHouseChoice()}
        {/* {houseChosen && renderHouseChoice()} */}
      </PlayerWrapper>
    </YouPickedContainer>
  );
}

export default YouPickedComponent;
