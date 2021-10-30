import React from 'react';
import './Guide.css';
import img from '../../../images/change.jpg';

const Guide = () => {
    return (
        <div className="guide-style">
            <div className="guide-text">
                <h1>EXPLORE A DIFFERENT <br />  WAY TO TRAVEL</h1>
                <p>Discover new cultures and have a wonderful rest with Backpack Story! Select the country you’d like to visit and provide our agents with estimated time – they’ll find and offer the most suitable tours and hotels. <br /> <br /> During our work we organized countless journeys for our clients. We started as a small tour bureau, and soon we expanded our offers list. Today we have valuable experience travelling and we can advise the most stunning resorts, cities and countries to visit!</p>
            </div>
            <div className="guide-img">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Guide;