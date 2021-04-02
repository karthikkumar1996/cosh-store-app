import { ThemeStoreType } from "./actions";
import { LIGHT_THEME, DARK_THEME } from "./types";

const INITIAL_STATE = {
  currentTheme: LIGHT_THEME,
};

const themeReducer = (state = INITIAL_STATE, action: ThemeStoreType) => {
  switch (action.type) {
    case LIGHT_THEME:
      return {
        ...state,
        currentTheme: LIGHT_THEME,
      };
    case DARK_THEME:
      return {
        ...state,
        currentTheme: DARK_THEME,
      };
    default:
      return state;
  }
};

export default themeReducer;
