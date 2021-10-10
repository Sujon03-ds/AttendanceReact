import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import AuthService from '../../services/AuthService';

const Register = () => {

    const [user, setUser] = useState({userName:"",email:"",password:"" });

    
    let history = useHistory();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    
    const register = (e) => {
        e.preventDefault();

        AuthService.register(user)
                .then(response => {
                    history.push('/login');
                    toast(response.data.message)  

                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e.response.data.message);
                    toast(e.response.data.message)
                });
        
    };

    return (
        <div>
            <form onSubmit={register} className="form-horizontal">
                <div className="form-group row">
                    <label htmlFor="userName" className="col-sm-2 col-form-label">UserName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="userName" name="userName" placeholder="Name" value={user.userName} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email" name="email" placeholder="email" value={user.email} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" placeholder="password" value={user.password} onChange={handleInputChange} />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
