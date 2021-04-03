import { SectionStoreType } from "./actions";
import { SECTIONS } from "./types";

const INITIAL_STATE = {
  currentActivePage: SECTIONS.HOME_PAGE,
};

const sectionReducer = (state = INITIAL_STATE, action: SectionStoreType) => {
  switch (action.type) {
    case SECTIONS.HOME_PAGE:
      return {
        ...state,
        currentActivePage: SECTIONS.HOME_PAGE,
      };
    case SECTIONS.GALLERY_PAGE:
      return {
        ...state,
        currentActivePage: SECTIONS.GALLERY_PAGE,
      };
    case SECTIONS.ABOUT_PAGE:
      return {
        ...state,
        currentActivePage: SECTIONS.ABOUT_PAGE,
      };
    default:
      return state;
  }
};

export default sectionReducer;
