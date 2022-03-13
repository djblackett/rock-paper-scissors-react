import React, { useContext } from "react";
import styled from "styled-components";
import Scoreboard from "./ScoreBoard";
import { RulesContext } from "../App";

const HeaderContainer = styled.div`
  margin-top: 3em;
  margin-bottom: 1em;
  height: 90px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 3px solid hsl(217, 16%, 45%);
  padding: 1em;
  border-radius: 10px;
  transition: all 0.5s ease-in;
`;

const Title = styled.h1`
  width: 100px;
  height: 80px;
  color: white;
  line-height: 0.8em;
  text-align: left;
`;

function Header() {
  const { fadeIn } = useContext(RulesContext);
  return (
    <HeaderContainer style={{ opacity: fadeIn ? 1 : 0 }}>
      <Title>
        <img src="images/logo.svg" alt="logo" height="80px" />
      </Title>
      <Scoreboard />
    </HeaderContainer>
  );
}

export default Header;
