import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import HomeScreen from './HomeScreen';
import { THEME, ESTILOS, MEDIAS } from './themes';

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
  // aplicamos tema dark por defecto
  const [theme, setTheme] = useState({
    default: THEME.dark,
    ...MEDIAS,
    ...ESTILOS[THEME.dark],
  });

  const changeTheme = nameTheme => {
    setTheme(state => ({
      ...state,
      default: nameTheme,
      ...ESTILOS[nameTheme],
    }));
  };

  return (
    <ThemeProvider theme={{ ...theme, changeTheme }}>
      <GlobalStyle />
      <HomeScreen />
    </ThemeProvider>
  );
};
