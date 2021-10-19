import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const singleService = services.find(service => service.id === parseInt(serviceId));
    const { name, description, src } = singleService;

    return (
        <div>
            <h2>service details {serviceId}</h2>
            <img style={{ backgroundColor: 'gray' }} src={src} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ServiceDetails;