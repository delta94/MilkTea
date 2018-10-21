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
export const actGetAllMeterial = () =>{
    return (dispatch) => {
      return CallApi('Select_All_Meterial', 'GET').then(res =>{
        console.log(res)
        if(res.data.length <= 0){
          console.log('ko dữ liệu')
          dispatch(getAllMeterialErr(res.data));
        }
        else{
          console.log('có dữ liệu')
          dispatch(getAllMeterial(res.data));
        }
      });
    }
  }