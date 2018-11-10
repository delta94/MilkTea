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

const prepare = (state = initialState, action) => {
    switch (action.type){
        case Types.SHOW_PREPARE:
            state = action.data;
            return state;
        default: 
            return state;
    }
}

export default prepare;