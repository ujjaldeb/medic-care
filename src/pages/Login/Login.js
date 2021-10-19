import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="form-signin text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mx-auto">
                        <form>
                            <img className="mb-4" src="https://i.postimg.cc/qB3XpyFq/logo.webp" alt="" />
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    autoComplete="off" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    autoComplete="off" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <div className="divider"><h5>New to User?</h5></div>
                            <button className="w-100 btn btn-secondary" type="submit">Sign in with Google</button>
                            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;