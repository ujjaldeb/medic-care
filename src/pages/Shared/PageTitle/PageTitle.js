import React from 'react';
import { Link } from 'react-router-dom';
import './PageTitle.css';

const BlogBanner = () => {
    return (
        <div className="breadcumb-area bg-img gradient-background-overlay">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcumb-content">
                            <h3 className="breadcumb-title text-start">Latest news</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item" aria-current="page">News</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;