
import axios from "axios";
import AuthService from "./services/AuthService";

//var res=JSON.parse(localStorage.getItem('currentUser'));
var res=AuthService.getCurrentUser();
let token="";
if(res){
 token=res.token;   
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_APIURL,
    headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + token,
    }
});

export default axiosInstance;