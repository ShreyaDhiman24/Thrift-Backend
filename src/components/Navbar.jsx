import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Navbar.css';
const MyNavbar = () => {
    return (
        <Navbar bg="muted" variant="black" className="glassmorphism sticky-top" expand="md">
            <Container fluid className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Navbar.Brand href="#home" className="mx-2 mb-0"> <img src="mainlogo.png" alt='logo' className="w-30 h-16"/></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        <Nav.Link href="/" className="mx-3">Home</Nav.Link>
                        {/* <Nav.Link href="/book/list" className="mx-3">Add Listing</Nav.Link> */}
                        <Nav.Link href="/book/orders" className="mx-3">Orders</Nav.Link>
                        <Nav.Link href="/login" className="mx-3">Login</Nav.Link>
                        <Nav.Link href="/register" className="mx-3">Register</Nav.Link>
                        <Nav.Link href="/logout" className="mx-3">Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default MyNavbar;
