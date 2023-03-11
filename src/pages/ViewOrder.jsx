import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
import CardGroup from 'react-bootstrap/CardGroup';

const OrdersPage = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (firebase.isLoggedIn)
            firebase.fetchMyBooks(firebase.user.uid).then((books) => setBooks(books.docs));
    }, [firebase]);

    console.log(books)
    if (!firebase.isLoggedIn) return <h1>Please wait OR LogIn if not...!</h1>
    return (
        <div>
            <CardGroup>
                {

                    books.map(book => <BookCard link={`/books/orders/${book.id}`} key={book.id} id={book.id} {...book.data()} />)

                }
            </CardGroup>
        </div>
    );
};
export default OrdersPage;