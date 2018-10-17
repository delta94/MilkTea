import * as Types from '../constant/ActionType';
var initialState = []

var id = "";
var index = "";

var findIndex = (tasks, id) =>{
    var result = -1;
    tasks.forEach((task,index)=>{
        if(task._id === id){
            result = index;
        }
    });
    return result;
}

const award = (state = initialState, action) => {
    switch (action.type){
        case Types.LOGIN:
            state = action.token;
            return [...state];
        default: 
            return [...state];
    }
}

export default award;