import http from "../http-common";

class AuthService {

    login=async (data)=> {
        return await http.post("account/login",data);
    }

    register=async (data)=> {
        return await http.post("account/register",data);
    }
    getCurrentUser= ()=>{       
       return JSON.parse(localStorage.getItem('currentUser'));
    }
}

export default new AuthService();