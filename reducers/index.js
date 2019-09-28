import {combineReducers, createStore} from 'redux';
//reducer de artistas
import artists from './artists';
//esto hace que se combinen todos los reducers en uno solo
const rootReducer = combineReducers ({
  artists,
});
//la funcion createstore transforma un reducer en el store
export default createStore (rootReducer);
