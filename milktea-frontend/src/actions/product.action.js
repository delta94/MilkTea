import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const getAllProduct = (data) =>{
    return {
      type: Types.SELECT_PRODUCT,
      data
    }
}
export const getAllProductErr = (message) =>{
  return {
    type: Types.SELECT_PRODUCT_ERR,
    message
  }
}
export const addProduct = (data) =>{
  return {
    type: Types.ADD_PRODUCT,
    data
  }
}
export const deleteProduct = (data) =>{
  return {
    type: Types.DELETE_PRODUCT,
    data
  }
}
export const updateProduct = (data) =>{
  return {
    type: Types.UPDATE_PRODUCT,
    data
  }
}

export const actGetAllProduct = () =>{
    return (dispatch) => {
      return CallApi('Select_All_Product', 'GET').then(res =>{
        if(res.data.length <= 0){
          dispatch(getAllProductErr(res.data));
        }
        else{
          dispatch(getAllProduct(res.data));
        }
      });
    }
  }
export const actInsertProduct = (name, address, phone) =>{
  return (dispatch) => {
    return CallApi('Insert_Product', 'POST',{
      "_Name": name,
      "_Address": address,
      "_Phone": phone
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllProductErr(res.data));
      }
      else{
        dispatch(addProduct(res.data));
      }
    });
  }
}
export const actDeleteProduct = (id) =>{
  return (dispatch) => {
    return CallApi('Delete_Product', 'POST',{
      "_ID": id
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllProductErr(res.data));
      }
      else{
        dispatch(deleteProduct(res.data));
      }
    });
  }
}
export const actUpdateProduct = (id,name,price,count) =>{
  return (dispatch) => {
    return CallApi('Update_Product', 'POST',{
      "_ID": id,
      "_Name": name,
      "_Price": price,
      "_Count": count
    }).then(res =>{
      if(res.data.length <= 0){
        dispatch(getAllProductErr(res.data));
      }
      else{
        dispatch(updateProduct(res.data));
      }
    });
  }
}
