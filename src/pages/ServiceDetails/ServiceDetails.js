import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    // destructuring
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);

    // fetching data using useEffect
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // finding the matched service
    const service = services.find(service => service.id === parseInt(serviceId));

    return (
        <section >
            <div className="container">
                <div className="row service-box justify-content-center align-items-center">
                    <div className="col-lg-4 mx-auto">
                        <div className="service-details">
                            <img src={service?.src} alt="" />
                            <h1>{service?.name}</h1>
                            <p className="text-white">{service?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ServiceDetails;