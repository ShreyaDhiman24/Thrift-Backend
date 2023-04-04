import React, { useState, useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import { useFirebase } from "../context/Firebase";

const BookCard = (props) => {
    const firebase = useFirebase();
    const navigate = useNavigate();


    const [url, setURL] = useState(null);
    useEffect(() => {
        firebase.getImageURL(props.imageURL).then(url => setURL(url));
    }, []);

    return (
        <Card style={{ width: '18rem', margin: '25px', textAlign: 'center' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Title: {props.name} <br />
                    Seller: {props.displayName} <br />
                    Price: Rs.{props.price}
                </Card.Text>
                <Button onClick={e => navigate(props.link)}
                    variant="primary">View</Button>
            </Card.Body>
        </Card>
    );
};
export default BookCard;
