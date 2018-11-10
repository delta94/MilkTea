import { combineReducers } from 'redux';
import user from './user'
import meterial from './meterial'
import milktea from './milktea'
import bill from './bill'
import prepare from './prepare'
import detailbill from './detailbill'
import product from './product'

const appReducers = combineReducers({
    user,
    meterial,
    milktea,
    bill,
    prepare,
    detailbill,
    product
});

export default appReducers;
