import React, { useEffect, useState } from 'react';
import './ManageOrders.css';
import SingleOrder from './SingleOrder/SingleOrder';

const ManageOrders = () => {

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-ravine-09703.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [allOrder])
    
    return (
        <div className="allOrderPage">
            <div className="Orders-title">
                <h1>Manage all Order</h1>
            </div>
            <div className="allOrder-style">
                {
                    allOrder.map(order => <SingleOrder
                        
                        key={order._id}
                        order={order}
                    
                    ></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;