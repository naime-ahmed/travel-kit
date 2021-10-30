import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        fetch('https://tranquil-ravine-09703.herokuapp.com/addService', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(' added successfully')
                    reset();
                }
            })
    };


    return (
        <div className="add-service-form">
            <div className="title">
                <h1>Add A New Service</h1>
            </div>
            <div className="form-field-style">
                <div className="form-style">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input  {...register("name", { required: true })} placeholder="place name" className="input-style" />
                        <br /> <br />
                        
                        <input  {...register("price", { required: true })} placeholder="price" />
                        <br /> <br />
                        
                        <input  {...register("img", { required: true })} placeholder="photo url" />
                        <br /> <br />

                        <textarea  {...register("description", { required: true })} placeholder="service description" />
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

export default AddService;