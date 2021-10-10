import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import AuthService from '../../services/AuthService';

const Login = () => {

    const [user, setUser] = useState({ userName: "", password: "" });


    let history = useHistory();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const login = (e) => {
        e.preventDefault();

        AuthService.login(user)
            .then(response => {
                
                if (response.data.isAuthenticated) {

                    localStorage.setItem('currentUser', JSON.stringify(response.data));
                  
                    toast('Login successfully');
                    history.push('/');
                    window.location.reload();

                } else {
                    toast(response.data.message)
                }
            })
            .catch(e => {
                toast(e.response.data.message)

            });

    };

    return (
        <div>
            <form onSubmit={login} className="form-horizontal">
                <div className="form-group row">
                    <label htmlFor="userName" className="col-sm-2 col-form-label">UserName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="userName" name="userName" placeholder="Name" value={user.userName} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Code" value={user.password} onChange={handleInputChange} />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
