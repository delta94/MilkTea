import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const login = (token) =>{
    return {
      type: Types.LOGIN,
      token
    }
}
export const actLoginRequest = (user, password) =>{
    return (dispatch) => {
      return CallApi('Log_In', 'POST', {_UserName : user, _Password: password}).then(res =>{
         dispatch(login(res.data));
      });
    }
  }