import {combineReducers} from 'redux';
import NotesReducer from './notesReducer';
import themeReducer from './themeReducer';
export default combineReducers({
  notes: NotesReducer,
  theme: themeReducer,
});
