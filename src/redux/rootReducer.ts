import { combineReducers } from 'redux';
import sectionReducer from './section/reducer';
import themeReducer from './theme/reducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    section: sectionReducer
});
export default rootReducer;