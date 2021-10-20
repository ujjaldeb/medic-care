import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="#">Medic Care</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto text-uppercase">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/appointment">Appointment</Link>
                            </li>

                            {!user.email ? (
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <button onClick={logout} className="nav-link">
                                            LOGOUT
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <img
                                                src={user.photoURL}
                                                alt="profile"
                                                width="25px"
                                                height="25px"
                                            />
                                            <span> {user.displayName}</span>
                                        </span>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;