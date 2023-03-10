/* Testing:
1.import useEffect in detail.jsx - as we need to do work whenever component is mounted 
2. In this we need to get our book  for that we need to import useFirebase hook  make object of it
3. in useEffect  firebase.getBookById(params.bookId).then(value => console.log(value)); --> firebase give me the book whose id is params.bookId and then we will return a promise that whenever resolves it will retuen value [check by console.log(value)]

*/
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const BookDetailPage = () => {
    const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState(null);

    console.log(params);

    useEffect(() => {
        firebase.getBookById(params.bookId).then((value) => setData(value.data())); 
    }, []);

    return <div>Book details Here</div>
};

export default BookDetailPage;