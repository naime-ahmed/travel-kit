import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-ravine-09703.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    },[services])
    return (
        <div className="services-section">
            <div className="services-header">
                <h1>Our Package</h1>
            </div>

            { services ? <div className="all-service">

                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    
                    ></SingleService>)
                }
              
            </div> : <div><h2>Loading.....</h2></div>}
        </div>
    );
};

export default Services;