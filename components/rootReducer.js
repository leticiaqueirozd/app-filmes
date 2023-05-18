import { combineReducers } from 'redux';
import filmesReducer from './FilmesReducer';

const rootReducer = combineReducers({
  filmes: filmesReducer,
});

export default rootReducer;
