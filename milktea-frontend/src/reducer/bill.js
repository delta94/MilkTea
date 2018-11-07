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

const bill = (state = initialState, action) => {
    switch (action.type){
        case Types.ADD_BILL:
            state = [...state,action.data];
            return state;
        default: 
            return state;
    }
}

export default bill;