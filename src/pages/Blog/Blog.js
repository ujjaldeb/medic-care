import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <section className="medica-blog-area section_padding_100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">

                        <div className="single-blog-area text-start">

                            <div className="post-thumb">
                                <img className="img-fluid" src="https://i.postimg.cc/SQXTbLgn/blog.webp" alt="" />
                            </div>
                            <div className="post-content">
                                <h4>New plastic surgery department from january ‘18</h4>
                                <div className="post-meta mb-30 d-flex align-items-center">
                                    <p className="author mb-0">Author:<Link to="#"> Loredana Papp</Link> |</p>
                                    <p className="author mb-0">in<Link to="#"> Medicine Breacktrough</Link> |</p>
                                    <p className="author mb-0"><Link to="#">3 Comments</Link></p>
                                </div>
                                <p>Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus
                                    vehicula nibh. Praesent pulvinar porta elit, a commodo erat. Phasellus at nunc orci.
                                    Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent
                                    pulvinar porta elit, a commodo erat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="medica-blog-sidebar-area text-start">

                            <div className="medica-emergency-card">
                                <h5>For Emergencies</h5>
                                <h4>+0080 954 4557 884</h4>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis id
                                    explicabo.</p>
                            </div>

                            <div className="medica-catagories-card px-0">
                                <h5>Categories</h5>
                                <ul className="catagories-menu list-unstyled">
                                    <li><Link to="#">Radiology</Link></li>
                                    <li><Link to="#">Cardiology</Link></li>
                                    <li><Link to="#">Gastroenterology</Link></li>
                                    <li><Link to="#">Neurology</Link></li>
                                    <li><Link to="#">General surgery</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;