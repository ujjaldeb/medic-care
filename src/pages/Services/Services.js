import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // console.log(services);

    return (
        <section className="medica-services-area section_padding_100 bg-img gradient-background-overlay">
            < div className=" container" >
                <div className="row">
                    <div className="col-12">
                        <div className="section_heading white-heading">
                            <img src="https://i.ibb.co/DRh5Bss/download.webp" alt="" />
                            <h2>Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div >
        </section >
    );
};

export default Services;