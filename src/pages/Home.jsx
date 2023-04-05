import React, { useEffect, useState } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
import '/home/shreya/Documents/Projects/BookifyFirebase/myapp/src/css/Home.css';
// import backgroundImage from '../T.png';
import '../css/Card.css';
import '../pages/Login.jsx';
import AboutUs from "../pages/AboutUs.jsx";



const HomePage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);

    return (
        <div className="container mt-5">
            <div className="margin-10px">
                <AboutUs />
            </div>
            <br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className="card-group-container">

                {books.map((book) => (
                    <BookCard
                        link={`/book/view/${book.id}`}
                        key={book.id}
                        id={book.id}
                        {...book.data()}
                    />
                ))}

            </div>
            <div>
                contact info and review page
            </div>
        </div>
    );
};

export default HomePage;
