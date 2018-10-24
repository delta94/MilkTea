import * as Types from '../constant/ActionType';
var initialState = []

const meterial = (state = initialState, action) => {
    let json;
    switch (action.type){
        case Types.SELECT_METERIAL:
            json = {
                code : 'ok',
                data : action.data
            }
            state = json;
            return state;
        case Types.ADD_METERIAL:
            state = [...state,action.data];
            console.log(state)
            return state;
        case Types.SELECT_METERIAL_ERR:
            json = {
                code : 'err',
                data : action.message
            }
            state = json;
            return state;
        default: 
            return state;
    }
}

export default meterial;