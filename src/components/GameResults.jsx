import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Winner from "./Winner";
import { AppContext } from "../App";
import Delayed from "./Delayed";
import { useSpring, animated } from "react-spring";
import Player from "./Player";
import House from "./House";

const GameResultsContainer = styled(animated.div)`
  display: grid;
  grid-template: 3fr 1fr / 1fr 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: all 0.3s ease-in;
  transform: scale(0.6);
  align-self: flex-start;
  justify-self: center;
  z-index: 10;

  @media (min-width: 1300px) {
    transform: scale(1);
    width: 40%;
    display: flex;
    flex-direction: row;
  }
`;

const Text = styled.p`
  text-align: center;
  margin-top: 4em;
  color: white;
  font-weight: 700;
  position: relative;
  z-index: 15;
  grid-row: 2 / 3;
  @media (min-width: 1300px) {
    margin-bottom: 8em;
    grid-row: 1 / 2;
  }
`;

const PlayerWrapper = styled.div`
  display: grid;
  grid-template: 200px 300px / 200px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin: 0 2em;
  position: relative;
  z-index: 10;

  @media (min-width: 1300px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const WinnerGradient = styled(animated.div)`
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 500px;
  width: 500px;
  border-radius: 50%;
  position: absolute;
  transition: all 0.5s ease-in;
  z-index: -50 !important;
  grid-area: 1 / 1 / 2 / 2;

  @media (min-width: 1300px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`;

const HousePlaceholder = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: hsl(229, 64%, 46%);
  opacity: 0.5;

  @media (min-width: 1300px) {
  }
`;

const HousePlaceholderTransparentWrapper = styled.div`
  height: 150px;
  width: 150px;
  background-color: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 1 / 2 / 2;

  @media (min-width: 1300px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`;

// This container holds everything that happens once a player makes a choice: the 2 players results and the winnner
// Basically, the player's choice is read from the CircleHand component, saved to the Context in
// ContextProvider, then read in this component to render the proper hand. The House's hand is then determined randomly.
// A custom Delayed component is used to delay the House's choice and the winner's rendering to make the gameplay more smooth

function GameResults() {
  const { houseChoose, winner, resetWinner } = useContext(AppContext);

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  useEffect(() => {
    const houseChoice = () => {
      const arr = ["rock", "paper", "scissors"];
      const index = Math.floor(Math.random() * 3);
      houseChoose(arr[index]);
    };

    houseChoice();
  }, []);

  return (
    <GameResultsContainer style={props}>
      <PlayerWrapper>
        <Text>YOU PICKED</Text>

        <Delayed waitBeforeShow={4200}>
          <WinnerGradient
            style={{
              opacity: winner === "player" ? 1 : 0,
              display: winner === "player" ? "initial" : "none",
            }}
          />
        </Delayed>
        <Player />
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
        <HousePlaceholderTransparentWrapper>
          <HousePlaceholder />
        </HousePlaceholderTransparentWrapper>

        {/* This is the problem area - WinnerGradient renders properly when the player wins, but not when the house wins.
        It seems to ignore its z-index of -50 */}
        <Delayed waitBeforeShow={4200}>
          <WinnerGradient
            style={{
              opacity: winner === "house" ? 1 : 0,
              display: winner === "house" ? "initial" : "none",
              zIndex: -50,
            }}
          />
        </Delayed>
        <House />
      </PlayerWrapper>
    </GameResultsContainer>
  );
}

export default GameResults;
