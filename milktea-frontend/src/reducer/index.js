import { combineReducers } from 'redux';
import user from './user'
import meterial from './meterial'
import milktea from './milktea'
import bill from './bill'
import prepare from './prepare'

const appReducers = combineReducers({
    user,
    meterial,
    milktea,
    bill,
    prepare
});

export default appReducers;
