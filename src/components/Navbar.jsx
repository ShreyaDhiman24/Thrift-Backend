import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <img src="thrift.png" alt='logo' className='w-9 h-9 object-contain' />
                    <Navbar.Brand href="#home" className="mx-2">Thrift</Navbar.Brand>
                </div>
                <Nav>
                    <Nav.Link href="/" className="mx-3">Home</Nav.Link>
                    <Nav.Link href="/book/list" className="mx-3">Add Listing</Nav.Link>
                    <Nav.Link href="/book/orders" className="mx-3">Orders</Nav.Link>
                    <Nav.Link href="/login" className="mx-3">Login</Nav.Link>
                    <Nav.Link href="/register" className="mx-3">Register</Nav.Link>
                    {/* <Nav.Link href="/logout">Log Out</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;