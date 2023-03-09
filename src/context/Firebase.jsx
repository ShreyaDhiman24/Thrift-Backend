/*
context - firebase.jsx
a) import getFirestore from firebase/firestore to get instance
b) make instance firestore to getFirestore and pass our firebaseApp as an instance
c) Make a function handleCreateNewListing which has (name, isbn, price,cover) and which put all these in our firestore and add it inside our context 
d) Remember: Photos always goes in Bucket in our firestore and its path/reference will be in our firestore 
    1.  In List.jsx:  
        const handleSubmit = () => {
            e.preventDefalut();
        }; --> to prevent reloading of our page 

    2. import firebase hook (useFirebase) in list.jsx 
    3. create firebase:  const firebase = useFirebase();
    4. call method: firebase.handleCreateNewListing with parameters name, isbn ,price, cover
    5. make it async and function await

Uploading cover photo: in storage in build of firebase
1. Enable storage in firebase- rules: read and write if true
2. import getStorage method from firebase/storage as we need an instance of it and create an instance of storage 
3. firstly to Create reference import "ref" and "uploadBytes" to upload data from firebase/storage
4. goto our function handleCreateNewListing
 a) create reference(where we want to store img) imageRef in which we give our storage and path :  
  const imageRef = ref(storage, "uploads/images/${Date.now()}-${cover.name}")
 b) cover.name - name of photo 
   we add some random digits at the starting to make it unique-->${Date.now()}-${cover.name}
   So that every time a new path is generated 
c) await uploadBytes which takes parameter imageRef and cover(file which we have to upload) and store it in uploadResult which contain 
path where our image is uploaded 

5. Now image is uploaded and we need to keep it in firestore:
a) for that we need to import collection, addDoc from firebase/firestore
 await addDoc(collection(firestore, "books"), {
            name,
             isbn,
              price,
               imageURL: uploadResult.ref.fullPath
        })
b) Also keep user details who has uploaded it: which we get current user
How to know? console.log(user)

*/
import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCjPt0uV_7e2-F0UufeuFpP6Zod6rYHE2M",
    authDomain: "bookify-7be2e.firebaseapp.com",
    projectId: "bookify-7be2e",
    storageBucket: "bookify-7be2e.appspot.com",
    messagingSenderId: "77073578413",
    appId: "1:77073578413:web:3aa60b336f9d01c4270924"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (probs) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user) setUser(user);
            else setUser(null);
        });
    }, [])

    const signupUserWithWmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    const handleCreateNewListing = async (name, isbn, price, coverPic) => {
        const imageRef = ref(storage, "uploads/images/${Date.now()}-${cover.name}")
        const uploadResult = await uploadBytes(imageRef, coverPic);
        await addDoc(collection(firestore, "books"), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath
        })
    };



    const isLoggedIn = user ? true : false;

    return <FirebaseContext.Provider value={{
        signupUserWithWmailAndPassword, signinUserWithEmailAndPassword,
        signinWithGoogle,
        handleCreateNewListing,
        isLoggedIn
    }}>
        {probs.children}
    </FirebaseContext.Provider>
}
