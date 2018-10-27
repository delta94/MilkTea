import { combineReducers } from 'redux';
import user from './user'
import meterial from './meterial'
import milktea from './milktea'

const appReducers = combineReducers({
    user,
    meterial,
    milktea
});

export default appReducers;
