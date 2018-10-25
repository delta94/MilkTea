import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const getAllMeterial = (data) =>{
    return {
      type: Types.SELECT_METERIAL,
      data
    }
}
export const getAllMeterialErr = (message) =>{
  return {
    type: Types.SELECT_METERIAL_ERR,
    message
  }
}
export const addMaterial = (data) =>{
  return {
    type: Types.ADD_METERIAL,
    data
  }
}
export const deleteMaterial = (data) =>{
  return {
    type: Types.DELETE_METERIAL,
    data
  }
}
export const updateMaterial = (data) =>{
  return {
    type: Types.UPDATE_METERIAL,
    data
  }
}
export const actGetAllMeterial = () =>{
    return (dispatch) => {
      return CallApi('Select_All_Meterial', 'GET').then(res =>{
        if(res.data.length <= 0){
          dispatch(getAllMeterialErr(res.data));
        }
        else{
          dispatch(getAllMeterial(res.data));
        }
      });
    }
  }
export const actInsertMeterial = (name,price,count) =>{
  return (dispatch) => {
    return CallApi('Insert_Meterial', 'POST',{
      "_Name": name,
      "_Price": price,
      "_Count": count
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllMeterialErr(res.data));
      }
      else{
        dispatch(addMaterial(res.data));
      }
    });
  }
}
export const actDeleteMeterial = (id) =>{
  return (dispatch) => {
    return CallApi('Delete_Meterial', 'POST',{
      "_ID": id
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllMeterialErr(res.data));
      }
      else{
        dispatch(deleteMaterial(res.data));
      }
    });
  }
}
export const actUpdateMeterial = (id,name,price,count) =>{
  return (dispatch) => {
    return CallApi('Update_Meterial', 'POST',{
      "_ID": id,
      "_Name": name,
      "_Price": price,
      "_Count": count
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllMeterialErr(res.data));
      }
      else{
        dispatch(updateMaterial(res.data));
      }
    });
  }
}