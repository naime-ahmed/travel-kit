import React from 'react';
import './Blogs.css';
import img1 from '../../../images/blogImg1.jpg';
import img2 from '../../../images/covid-19.jpg';
import img3 from '../../../images/mineIn.jpg';

const Blogs = () => {
    return (
        <div className="blog-section">
            <div className="blog-header">
                <h1>Our Recent Blog</h1>
            </div>
            <div className="blog-post">
                <div className="single-blog">
                    <div className="blog-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="blog-text">
                        <p>48 Hours in Amelia Island: How to spend the perfect weekend in Amelia Island, Florida</p>
                        <small>See More</small>
                    </div>
                </div>
                <div className="single-blog">
                    <div className="blog-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="blog-text">
                        <p>how you can travel safely in covid-19 situation and where you can go without problem. I explore this two question </p>
                        <small>See More</small>
                    </div>
                </div>
                <div className="single-blog">
                    <div className="blog-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="blog-text">
                        <p>Why you should visit Maine in the fall A trip to Maine in the fall? Yes, please! One lobster cruise, a historical lighthouse</p>
                        <small>See More</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;