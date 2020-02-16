const THEMEDARK = 'themedark'
const THEMELIGHT = 'themelight'

const THEME = {
  dark: THEMEDARK,
  light: THEMELIGHT
}

const MEDIAS = {
  desktop: '900px',
  tablet: '700px',
  mobile: '560px'
}

// defino los temas
const ESTILOS = {}

ESTILOS[THEMEDARK] = {
  primary: '#393D42',
  secondary: 'grey',
  tertiary: '#9C9C9C',
  quaternary: 'white'
}
ESTILOS[THEMELIGHT] = {
  primary: 'white',
  secondary: '#dfe3ee',
  tertiary: '#9C9C9C',
  quaternary: 'dark'
}
export { THEME, ESTILOS, MEDIAS }
