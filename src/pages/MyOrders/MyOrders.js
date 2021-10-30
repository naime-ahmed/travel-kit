import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import MyOrder from './MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {

    const [myOrders, setMyOrder] = useState([]);

    const { user } = UseAuth();

    useEffect(() => {
        fetch('https://tranquil-ravine-09703.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setMyOrder(data.filter(order=> order.email === user.email)));
    }, [myOrders]);

    return (
        <div className="my-all-order">
            <div className="Orders-title">
                <h1>Here is Your All orders </h1>
                
            </div>
            <div>
                {
                    myOrders.map(order => <MyOrder
                        key={order._id}
                        order={order}
                    
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;