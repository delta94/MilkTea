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
        if(res.data.length <= 0){
          dispatch(loginErr(res.data));
        }
        else{
          dispatch(login(res.data));
          console.log(res.data)
        }
      });
    }
  }
  export const actSignUp = (name, phone,address,user, password) =>{
    return (dispatch) => {
      return CallApi('SignUp', 'POST', 
      {
        _Name: name,
        _Phone: phone,
        _Address: address,
        _User : user,
        _Pass: password
      }).then(res =>{
        
      });
    }
  }