import { async } from "@firebase/util";
import { verifyPasswordResetCode } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//hook
import { useFirebase } from "../context/Firebase";

const LoginPage = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(firebase); //to check isLoggedin varuable value
    useEffect(() => {
        if (firebase.isLoggedIn) {
            //navigate to home
            navigate("/");
        }
    }, [firebase, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("login a user...")
        const result = await firebase.signinUserWithEmailAndPassword(email, password);
        console.log("successfull", result);
        alert("LogIn Successful!")
    };

    return (
        <div className="container mt-5 text-light">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <h1 className="m-3">OR</h1>
            <Button onClick={firebase.signinWithGoogle} variant="danger">SignIn with Google</Button>
        </div>
    );
};

export default LoginPage;

