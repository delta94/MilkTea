import * as Types from '../constant/ActionType';
var initialState = []

const user = (state = initialState, action) => {
    let json;
    switch (action.type){
        case Types.LOGIN:
            json = {
                code : 'ok',
                data : action.token[0]
            }
            state = json;
            console.log(state)
            return state;
        case Types.LOGIN_ERR:
            json = {
                code : 'err',
                data : action.message
            }
            state = json;
            console.log(state)
            return state;
        default: 
            return state;
    }
}

export default user;