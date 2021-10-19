import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bottom-footer-area">
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-6">
                        <p className="copywrite-text">
                            Copyright ©2021 | <Link to="https://onlytarikul.com" target="_blank">Ujjal Deb</Link>
                        </p>

                    </div>
                    <div className="col-lg-6">
                        <nav className="footer-menu">
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/appointment">Appointment</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;