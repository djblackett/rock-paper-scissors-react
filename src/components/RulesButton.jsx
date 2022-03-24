import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../App";

const RulesButtonComponent = styled.button`
  align-self: center;
  margin-bottom: 3em;
  margin-top: 0rem;
  padding: 0.3em 1.9em;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  letter-spacing: 0.1em;
  text-align: center;
  transition: all 0.5s ease-in;
  justify-self: center;
  order: 4;
  position: absolute;
  /* top: 90%; */
  /* bottom: 5rem; */
  bottom: 0;
  z-index: 12;

  &:hover {
    /* background-color: magenta; */
    transform: scale(1.3);
  }

  &:focus {
    transform: scale(1.3);
  }

  @media (min-width: 1300px) {
    margin-top: 2em;
  }

  @media (min-width: 1300px) {
    align-self: flex-end;
    justify-self: end;
    margin-right: 3em;
    margin-bottom: 1em;
  }
`;

function RulesButton() {
  const context = useContext(AppContext);
  return (
    <RulesButtonComponent
      onClick={context.toggleFunction}
      style={{ opacity: context.fadeIn ? 1 : 0 }}
    >
      RULES
    </RulesButtonComponent>
  );
}

export default RulesButton;
