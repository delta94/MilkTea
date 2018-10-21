import { combineReducers } from 'redux';
import user from './user'
import meterial from './meterial'

const appReducers = combineReducers({
user,
meterial
});

export default appReducers;
