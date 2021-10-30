import React, { useState } from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import './SingleOrder.css';

const SingleOrder = (props) => {

    const [control, setControl] = useState(false);

    const { serviceName, email, quantity, status, _id } = props.order;
    
    const handleDeleteOrder = id => {
        const proceed = window.confirm('you want to delete?')
        if (proceed) {
            fetch(`https://tranquil-ravine-09703.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('delete successfully');
                    setControl(!control);
                }
                else {
                    setControl(false);
                }
            })
        }
        
    };

    return (
        <div className="single-order-style">
            <div>
                
                <h4>Destination: {serviceName}</h4>
                <small>Client Email: { email}</small>
            </div>
            <div>
                <p>Ticket Quantity: { quantity}</p>
            </div>
            <div>
                <p>{ status}</p>
            </div>
            <div>
                <button className="approve-btn-style">approve</button> <button onClick={ ()=> handleDeleteOrder(_id)}  className="delete-btn-style">Delete</button>
            </div>
        </div>
    );
};

export default SingleOrder;