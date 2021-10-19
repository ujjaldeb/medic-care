import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, description, src } = props.service;
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-service-area">
                <img src={src} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <Link to={`/service/${id}`}>
                    <button className="single-servcie-btn">Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;