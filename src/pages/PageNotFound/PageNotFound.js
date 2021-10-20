import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <section>
            <div className="container">
                <div className="row notfound-box justify-content-center align-items-center">
                    <div className="col-lg-5 mx-auto">
                        <div>
                            <h1>Page Not Found...</h1>
                            <p>We're unable to find the page you're are looking for.</p>
                            <Link to="/"><button className="btn btn-primary">Back To Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;