import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const login = (token) =>{
    return {
      type: Types.LOGIN,
      token
    }
}
export const loginErr = (message) =>{
  return {
    type: Types.LOGIN_ERR,
    message
  }
}
export const actLoginRequest = (user, password) =>{
    return (dispatch) => {
      return CallApi('login', 'POST', {_UserName : user, _Password: password}).then(res =>{
        console.log(res)
        // if(!(res.message)){
        //   console.log('Không đăng nhập được')
        //   dispatch(loginErr(res.data));
        // }
        // else{
        //   dispatch(login(res.data));
        // }
      });
    }
  }