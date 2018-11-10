import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const getAllMilkTea = (data) =>{
    return {
      type: Types.SELECT_MILKTEA,
      data
    }
}
export const getAllMilkTeaErr = (message) =>{
    return {
      type: Types.SELECT_MILKTEA_ERR,
      message
    }
}
export const addMilkTea = (data) =>{
    return {
      type: Types.ADD_MILKTEA,
      data
    }
}
export const deleteMilkTea = (data) =>{
    return {
      type: Types.DELETE_MILKTEA,
      data
    }
}
export const updateMilkTea = (data) =>{
    return {
      type: Types.UPDATE_MILKTEA,
      data
    }
}
export const prepare = (data) =>{
  return {
    type: Types.SHOW_PREPARE,
    data
  }
}
export const actGetAllMilkTea = () =>{
    return (dispatch) => {
      return CallApi('Select_All_MilkTea', 'GET').then(res =>{
        if(res.data.length <= 0){
          dispatch(getAllMilkTeaErr(res.data));
        }
        else{
          dispatch(getAllMilkTea(res.data));
        }
      });
    }
}
export const actInsertMilkTea = (name,price,picture) =>{
  console.log(picture)
  return (dispatch) => {
    return CallApi('Insert_MilkTea', 'POST',{
      "_Name": name,
      "_Price": price,
      "recfile": picture
    },
    {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllMilkTeaErr(res.data));
      }
      else{
        dispatch(addMilkTea(res.data));
      }
    });
  }
}
export const actDeleteMilkTea = (id) =>{
  return (dispatch) => {
    return CallApi('Delete_MilkTea', 'POST',{
      "_ID": id
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllMilkTeaErr(res.data));
      }
      else{
        dispatch(deleteMilkTea(res.data));
      }
    });
  }
}
export const actUpdateMilkTea = (id,name,price,picture) =>{
  return (dispatch) => {
    return CallApi('Update_MilkTea', 'POST',{
      "_ID": id,
      "_Name": name,
      "_Price": price,
      "_Picture": picture
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllMilkTeaErr(res.data));
      }
      else{
        dispatch(updateMilkTea(res.data));
      }
    });
  }
}
export const getAllPrepareMilkTea = (id) =>{
  return (dispatch) => {
    return CallApi('Select_Material_Of_MilkTea', 'POST',{
      "_ID": id
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllMilkTeaErr(res.data));
      }
      else{
        dispatch(prepare(res.data));
      }
    });
  }
}