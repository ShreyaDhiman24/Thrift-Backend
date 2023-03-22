import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import Delete from "./Delete";

const ViewOrderDetails = () => {
    // const handleAcceptClick = () => {
    //     // Call the SubCollection function here
    //     firebase.SubCollection();
    // }
  
    const params = useParams();
    const firebase = useFirebase();

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        firebase.getOrders(params.bookId)
            .then((orders => setOrders(orders.docs)));

            console.log(params);
    }, []); // imports our orders



    return (
        <div
            className="container mt-2">
            <h1>Orders</h1>
            {
                orders.map((order) => {
                    const data = order.data();
                    return (
                        <div key={order.id}
                            className="mt-5" style={{ border: "1px solid", padding: "10px" }}>
                            <h5>Ordered By: {data.displayName}</h5>
                            <h6>Quantity: {data.qty}</h6>
                            <p>Email: {data.userEmail}</p>
                            <Button onClick={Delete}>Accept</Button>   <Button variant="danger">Reject</Button>
                        </div>

                    );
                })
            }
        </div>
    );
};
export default ViewOrderDetails;