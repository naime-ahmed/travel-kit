import React from 'react';

const MyOrder = (props) => {

    const { serviceName, quantity, status, _id } = props.order;

    const deleteMyOrder = id => {
        const proceed = window.confirm('are you want to delete ?')
        if (proceed) {
            fetch(`https://tranquil-ravine-09703.herokuapp.com/deleteMyOrder/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            
            })
            .then(res => res.json())
            .then(result=> {
            if (result.deletedCount) {
                alert("delete successfully")
            }
            })
            
        }
        
    }

    return (
       <div className="single-order-style">
            <div>
                
                <h4> Your Destination: {serviceName }</h4>
            
            </div>
            <div>
                <p>Ticket Quantity: { quantity}</p>
            </div>
            <div>
                <p>{ status}</p>
            </div>
            <div>
                <button onClick={()=>deleteMyOrder(_id)}  className="delete-btn-style">Delete</button>
            </div>
        </div>
    );
};

export default MyOrder;