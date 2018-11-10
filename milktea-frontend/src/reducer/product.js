import * as Types from '../constant/ActionType';
var initialState = []

var findIndex = (tasks, id) =>{
    var result = -1;
    tasks.forEach((task,index)=>{
        if(task.ID === id){
            result = index;
        }
    });
    return result;
}

const milktea = (state = initialState, action) => {
    let json;
    let index = -1;
    switch (action.type){
        case Types.SELECT_PRODUCT:
            json = {
                code : 'ok',
                data : action.data
            }
            state = json;
            return state;
        case Types.ADD_PRODUCT:
            state = [...state,action.data];
            return state;
        case Types.SELECT_PRODUCT_ERR:
            json = {
                code : 'err',
                data : action.message
            }
            state = json;
            return state;
        case Types.DELETE_PRODUCT:
        console.log(action.data)
            index = findIndex(state.data, action.data.value._ID)
            state.data.splice(index,1)
            return state;
        case Types.UPDATE_PRODUCT:
            index = findIndex(state.data, action.data.value.ID)
            state.data[index] = action.data.value
            return state;
        default: 
            return state;
    }
}

export default milktea;