import React from 'react'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom'
import AuthService from '../../services/AuthService';



const Navbar = () => {

    let history = useHistory();

    const user = AuthService.
    getCurrentUser();
    let isLoggedId = false;
    if (user) {
        isLoggedId = user.isAuthenticated;
    }

    const logout = () => {
        localStorage.removeItem("currentUser");
        history.push('/');
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">

                <NavLink className="navbar-brand" exact to="/">Start Up</NavLink>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">

                            <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" exact to="/about">About</NavLink>

                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" exact to="/contact">Contact</NavLink>
                        </li>

                        {isLoggedId ? (<li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="" onClick={()=>{return logout()}}>Logout</a></li>
                        ) : (<li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" exact to="/login">Login</NavLink></li>
                        )}

                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" exact to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded" exact to="/companies">Companies</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
