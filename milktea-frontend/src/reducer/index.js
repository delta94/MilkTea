import { combineReducers } from 'redux';
import user from './user'
import meterial from './meterial'
import milktea from './milktea'
import bill from './bill'

const appReducers = combineReducers({
    user,
    meterial,
    milktea,
    bill
});

export default appReducers;
