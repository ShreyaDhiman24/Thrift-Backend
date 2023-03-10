/* 
3. import useState and make a local state here:
which is by default an empty array
 4. so when our books gets listed , initially empty array then listAllBooks function runs which fetches docs => books and we set these books in above created state of empty array docs == setBooks (books.docs)

 ((books) => setBooks(books.docs))
 5. now we get the whole data in array of books and now we have to render it in home page 
 6. showing one book name to check:
 return (
        <div className="container">
        {books.map((book) => (
        <li>{book.data().name}</li>
        ))}
        </div>
    );
7. but we have to render cards for showing these: React bootstrap search card:
a) create a component  card.jsx 
b) import react
c) create BookCard and export it 
d) import bootstrap and write card code 
e) import it inside home.jsx
f) and for each book we have to render <BookCard/> instead of <li> tag

8. Data inside card : through props
a) pass props in BookCard
b) change card.title --> props.name --> Book name
c) card text --> This book has a title {props.name} and this book is sold by  {props.displayName} and this book costs Rs.{props.price}
d) go back to home page and give props where we have rendered BookCard

9. Renderig Image:
a) go to firebase.jsx and import function from storage: getDownloadURL because we need to download url of image which we want to render
b)create a method getImageURL to which we give path which is in our database and which will return getDownloadURL (in which we give reference(to storage, and path))
    const getImageURL  = (path) => {
        return getDownloadURL(ref(storage, path));
    };

and put it in context value 
*/
import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";


const HomePage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));

    }, []);


    return (
        <div className="container mt-5">
            {books.map((book) => (
                <BookCard {...book.data()} />
            ))}
        </div>
    );
};
export default HomePage;