import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {

    const [singleService, setSingleService] = useState({});

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { user } = UseAuth();

    const history = useHistory();
    const { serviceId } = useParams();
    
    useEffect(() => {
        fetch(`https://tranquil-ravine-09703.herokuapp.com/placeOrder/${serviceId}`)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, []);

    // console.log(singleService);

    const onSubmit = (data) => {
        data.status = "pending";
        fetch('https://tranquil-ravine-09703.herokuapp.com/allOrder', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(' added successfully')
                    reset();
                    history.push('/myOrders')
                }
            })
        
        console.log(data);
    }

    return (
        <div className="place-order-section">
            <div>
                <div className="single-service">
                    <div className="service-img">
                        <img src={singleService.img} alt="" />  
                    </div>
                    <div className="service-text">
                        <h3>{singleService.name}</h3>
                        <p>{singleService.description}</p>
                        <h4>Price: {singleService.price}</h4>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="place-order-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input  {...register("email", { required: true })} defaultValue={user.email} />
                        <br /> <br />
                        
                        <input  {...register("serviceName", { required: true })} defaultValue={singleService.name} />
                        <br /> <br />

                        <input  {...register("quantity", { required: true })} placeholder="quantity" type="number" />
                        <br /> <br />
                        
                        <input  {...register("address", { required: true })} placeholder="your address" />
                        <br /> <br />

                        <input  {...register("date", { required: true })} defaultValue={new Date()} />
                        <br /> <br />
                        
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input className="submit-btn" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;