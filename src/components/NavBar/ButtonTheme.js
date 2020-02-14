import React, { useEffect, useRef, useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { THEME } from "../themes";

const ButtonTheme = styled.button`
  text-decoration: none;
  padding: 3px;
  font-weight: 600;
  color: black;
  background-color: white;
  border-radius: 6px;
  border: 2px solid grey;
  &.boton_personalizado:hover {
    color: #eee;
    background-color: #ffffff;
    text-decoration: none;
  }
`;
export default () => {
  const isInitialMount = useRef(true);
  const themeContext = useContext(ThemeContext);
  const [state, setState] = useState(themeContext.default);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (state === THEME.dark) {
        //Light
        themeContext.changeTheme(THEME.dark);
      } else if (state === THEME.light) {
        //Dark
        themeContext.changeTheme(THEME.light);
      }
    }
  }, [state]);

  const updateState = () => {
    if (state === THEME.dark) {
      setState(THEME.light);
    } else if (state === THEME.light) {
      setState(THEME.dark);
    }
  };

  return (
    <ButtonTheme onClick={() => updateState()}>
      {state === THEME.dark ? "Modo Claro" : "Modo Oscuro"}
    </ButtonTheme>
  );
};
