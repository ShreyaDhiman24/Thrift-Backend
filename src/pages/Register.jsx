import { async } from "@firebase/util";
import { verifyPasswordResetCode } from "firebase/auth";
import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//hook
import { useFirebase } from "../context/Firebase";

const RegisterPage = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [displayName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (firebase.isLoggedIn) {
            //navigate to home
            navigate("/");
        }
    }, [firebase, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("signup a user...")
        const result = await firebase.signupUserWithWmailAndPassword(email, password);
         console.log("successfull", result);
    };

    // console.log(firebase);  //for ispecting what we get from  the hook
   return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={displayName}
                        type="text"
                        placeholder="Enter your name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
            <h1 className="m-3">OR</h1>
            <Button onClick={firebase.signinWithGoogle} variant="danger">SignUp with Google</Button>
        </div>
    );
};

export default RegisterPage;

