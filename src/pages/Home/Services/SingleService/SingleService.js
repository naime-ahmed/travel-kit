import React from 'react';
import { useHistory } from 'react-router';
import './SingleService.css';

const SingleService = (props) => {
    const { img, name, description, price, _id } = props.service;

    const history = useHistory();
    const showDetails = () => {
        history.push(`/placeOrder/${_id}`);
    }

    return (
        <div className="single-service">
            <div className="service-img">
                <img src={img} alt="" />  
            </div>
            <div className="service-text">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Price: {price}</h4>
                
                <button onClick={showDetails}  className="service-button">book now</button>
              
            </div>
        </div>
        
    );
};

export default SingleService;