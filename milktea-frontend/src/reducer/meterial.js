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

const meterial = (state = initialState, action) => {
    let json;
    let index = -1;
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
            return state;
        case Types.SELECT_METERIAL_ERR:
            json = {
                code : 'err',
                data : action.message
            }
            state = json;
            return state;
        case Types.DELETE_METERIAL:
            index = findIndex(state.data, action.data.value._ID)
            state.data.splice(index,1)
            return state;
        case Types.UPDATE_METERIAL:
            index = findIndex(state.data, action.data.value._ID)
            state.data[index] = action.data.value
            return state;
        default: 
            return state;
    }
}

export default meterial;