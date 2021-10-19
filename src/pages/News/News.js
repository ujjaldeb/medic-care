import React from 'react';
import Blog from '../Blog/Blog';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './News.css';

const News = () => {
    return (
        <div>
            <PageTitle></PageTitle>
            <Blog></Blog>
        </div>
    );
};

export default News;