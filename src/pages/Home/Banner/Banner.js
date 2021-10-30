import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="top-banner">
            <div className="banner-text">
                <h1>Travel & Explore The World With <span>TravelKit</span></h1>
                <p>TravelKit is an IATA Certified Travel Agent, one of the leading travel management companies in The World, offering you the opportunity to travel for free on various topics, all things considered, and for everyone and with the progress of the travel business. It is controlled by a team of experienced youth experts who are fully aware of cutting-edge movement types. It works to stay involved in the airline and Travel Agency in the Lose angles business for a long time.</p>
                <button className="btn">See more  <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="banner-img">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;