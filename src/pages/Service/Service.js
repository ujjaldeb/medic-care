import React from 'react';

const Service = (props) => {
    const { name, description, src } = props.service;
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-service-area">
                <img src={src} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <button className="single-servcie-btn">Read More</button>
            </div>
        </div>
    );
};

export default Service;