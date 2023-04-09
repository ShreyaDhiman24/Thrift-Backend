import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import Delete from "./Delete";
import '../css/Button.css';

const Order = ({ order, handleAcceptClick }) => {
    const data = order.data();
    return (
        <div className="col-md-3 col-sm-6 mb-4">
            <div style={{ border: "1px solid", padding: "10px", color: "black" }} className="mx-2">
                <h5> <strong>Ordered By: {data.displayName}</strong></h5>
                <h6>Quantity: {data.qty}</h6>
                <p>Email: {data.userEmail}</p>

                <button className="button-71 mr-2" role="button" onClick={handleAcceptClick}>Accept</button>
                <Delete orderId={order.id} id="delete-button" />
            </div>
        </div>
    );
};

const ViewOrderDetails = () => {

    const params = useParams();
    const firebase = useFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        firebase.getOrders(params.bookId)
            .then((orders => setOrders(orders.docs)));

        console.log(params);
    }, []); // imports our orders

    const handleAcceptClick = () => {
        alert('Order Accepted and Completed!')
    
        useFirebase.SubCollection();
    }

    return (
        <div className="bg-muted">
            <div className="container mt-2 text-light">
                <hr className="black-hr" />
                <h1>Orders</h1>
                <hr className="black-hr" />
                <div className="row">
                    {orders.map((order, index) => {
                         return <Order key={order.id} order={order} handleAcceptClick={handleAcceptClick} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default ViewOrderDetails;
