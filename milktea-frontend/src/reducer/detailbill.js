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
    let json;

    switch (action.type){
        case Types.SELECT_DETAIL_BILL:
            json = {
                code : 'ok',
                data : action.data
            }
            state = json;
            return state;
        case Types.SELECT_DETAIL_BILL_ERR:
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

export default bill;