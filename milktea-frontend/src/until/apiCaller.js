import axios from 'axios';
import * as Config from './../constant/Config';

export default function apiCaller(endPoint, method = "POST", body){
  return axios({
    method : method,
    url :  'http://localhost:8000/api'  + "/" + endPoint,
    data: body,
  }).catch(err =>{
    console.log(err);
  });
}
