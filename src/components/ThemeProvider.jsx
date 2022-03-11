import React from "react";

import { RulesContext } from "../App";

export const ThemeProvider = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleFunction = () => {
    setIsVisible(!isVisible);
    console.log("clicked!");
  };
  return (
    <RulesContext.Provider value={{ isVisible, toggleFunction }}>
      {children}
    </RulesContext.Provider>
  );
};
