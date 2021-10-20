import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    // desctructuring
    const { auth, signInWithEmailAndPassword, signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirecPath = location.state?.from || "/";

    // handle google sing in
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        signInUsingGoogle()
            .then((result) => {
                console.log(result.user);
                history.push(redirecPath);
            })
            .finally(() => setIsLoading(false));
    };

    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");

    const handleLoginEmailChange = (e) => {
        setLoginEmail(e.target.value);
    };

    const handleLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value);
    };

    // collect email and password
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(LoginEmail, LoginPassword);
        signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
    };

    return (
        <div className="form-signin text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mx-auto">
                        <form onSubmit={handleLogin}>
                            <img className="mb-4" src="https://i.postimg.cc/qB3XpyFq/logo.webp" alt="" />
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating mb-3">
                                <input onBlur={handleLoginEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    autoComplete="off" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input onBlur={handleLoginPasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    autoComplete="off" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <br />
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <div className="divider"><h5>OR</h5></div>
                            <button onClick={handleGoogleSignIn} className="w-100 btn btn-secondary">Sign in with Google</button>
                            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;