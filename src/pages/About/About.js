import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="medica-about-content">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="medica-about-text text-start">
                            <h2>Welcome to <span>Medica</span> Health Center</h2>
                            <p>Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula
                                nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique
                                nibh. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin.
                                Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis
                                nulla. Morbi eget ornare dui. Donec nec fringilla mi. Pellentesque molestie consequat
                                felis vitae elementum. Proin ut tempor urna.</p>
                            <ul className="list-unstyled">
                                <li>Cardiovascular Diseases</li>
                                <li>Neonatology</li>
                                <li>Ophthalmology</li>
                                <li>Toracic Surgery</li>
                                <li>Gastroenterology</li>
                                <li>Plastic Surgery</li>
                                <li>Neurology</li>
                                <li>Ortopedy</li>
                            </ul>
                            <Link to="#" className="btn medica-btn btn-2">Read More</Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="medica-about-thumbnail">
                            <img className="img-fluid" src="https://i.postimg.cc/ncxjk0mB/doctor.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;