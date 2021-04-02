import { LIGHT_THEME, DARK_THEME } from './types';


interface setLightTheme {
    type: typeof LIGHT_THEME;
  }

interface setDarkTheme {
    type: typeof DARK_THEME;
  }

export type ThemeStoreType = setLightTheme | setDarkTheme;
