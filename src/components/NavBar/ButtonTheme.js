import React, { useContext, useState } from "react";
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
  white-space: nowrap;
  width: 100px;
  &.boton_personalizado:hover {
    color: #eee;
    background-color: #ffffff;
    text-decoration: none;
  }
`;

export default () => {
  const themeContext = useContext(ThemeContext);
  const [state, setState] = useState(THEME.dark);

  const updateState = () => {
    if (state === THEME.dark) {
      setState(THEME.light);
      themeContext.changeTheme(THEME.light);
    } else if (state === THEME.light) {
      setState(THEME.dark);
      themeContext.changeTheme(THEME.dark);
    }
  };

  return (
    <ButtonTheme onClick={() => updateState()}>
      {state === THEME.dark ? "Modo Claro" : "Modo Oscuro"}
    </ButtonTheme>
  );
};
