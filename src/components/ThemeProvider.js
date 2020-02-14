import React, { useState } from "react";
import HomeScreen from "./HomeScreen";
import { THEME, ESTILOS } from "./themes";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 10px;
        font-family: Marvel;
        font-size: 16px;
        box-sizing: border-box;
    }

    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }
    
    body{
        background:${props => props.theme.primary};
        color: ${props => props.theme.quaternary}
    }
`;

export default () => {
  //aplicamos tema dark por defecto
  const [theme, setTheme] = useState({
    default: THEME.dark,
    ...ESTILOS[THEME.dark]
  });

  const changeTheme = nameTheme => {
    setTheme(() => ({ default: nameTheme, ...ESTILOS[nameTheme] }));
  };

  return (
    <ThemeProvider theme={{ ...theme, changeTheme }}>
      <GlobalStyle />
      <HomeScreen />
    </ThemeProvider>
  );
};
