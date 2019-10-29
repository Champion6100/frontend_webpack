import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from './login';
import { Signup } from './signup';
import { Home } from './home';
export class LoginSignup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-sm bg-light">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item">
                                <Link to="/login">Login</Link>
                            </li >
                            <li className="nav-item">
                                <Link to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                    <Route path="/login" component={login} />
                    <Route path="/signup" component={signup} />
                    <Route path="/home" component={home} />
                </div>
            </Router>
        );
    }
}

function login() {
    return (
        <Login />
    );
}

function signup() {
    return (
        <Signup />
    );
}
function home() {
    return (
        <Home />
    );
}