import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    // destructuring
    const { createUserWithEmailAndPassword, auth } = useAuth();

    // declaring states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // handle registration
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            console.log(result.user);
        });
    };

    return (
        <main className="form-signin text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mx-auto">
                        <form onSubmit={handleRegistration}>
                            <img className="mb-4" src="https://i.postimg.cc/qB3XpyFq/logo.webp" alt="" />
                            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                            <div className="form-floating mb-3">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    autoComplete="off" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    autoComplete="off" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Register</button>

                            <p className="exiting_account">Already have an account? <Link to="/login">Sign In</Link></p>
                            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;