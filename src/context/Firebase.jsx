/*


*/
import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
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
            console.log("user", user);
            if (user) setUser(user);
            else setUser(null);
        });
    }, [])

    const signupUserWithWmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    console.log(user)

    const handleCreateNewListing = async (name, isbn, price, coverPic) => {
        const imageRef = ref(storage, "uploads/images/${Date.now()}-${coverPic.name}")
        const uploadResult = await uploadBytes(imageRef, coverPic);
        return await addDoc(collection(firestore, "books"), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        });
    };

    const isLoggedIn = user ? true : false;

    return (<FirebaseContext.Provider value={{
        signupUserWithWmailAndPassword, signinUserWithEmailAndPassword,
        signinWithGoogle,
        handleCreateNewListing,
        isLoggedIn
    }}>
        {probs.children}
    </FirebaseContext.Provider>
    );
};
