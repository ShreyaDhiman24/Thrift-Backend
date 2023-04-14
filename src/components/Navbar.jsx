import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../css/Navbar.css';

const MyNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownClick = (event) => {
        event.stopPropagation();
    };

    return (
        <Navbar bg="muted" variant="black" className="glassmorphism sticky-top" expand="md">
            <Container fluid className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Navbar.Brand href="#home" className="mx-2 mb-0"> <Link to="/" className="img-wrapper"><img src="/mainlogo.png" alt='logo' className="w-30 h-16" /></Link></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav style={{ fontSize: '20px', fontWeight: 'bold' }}>

                        <Link to="/" className="mx-3 text-muted">Home</Link>
                        {/* <Nav.Link href="/book/list" className="mx-3">Add Listing</Nav.Link> */}
                        <Link to="/book/orders" className="mx-3 text-muted">Orders</Link>
                        <Link className="mx-3 text-muted" onClick={handleDropdownToggle}>
                            Account
                            {showDropdown && (
                                <Nav className="dropdown-menu my-dropdown-menu menu-list" style={{ fontSize: '20px', fontWeight: 'bold' }} onClick={handleDropdownClick}>
                                    <div id="box" className="glassmorphism">
                                        <div className="row">
                                            <div className="col">
                                                <Link to="/login" className="dropdown-item">Login</Link>
                                            </div>
                                            <div className="col">
                                                <Link to="/register" className="dropdown-item">Register</Link>
                                            </div>
                                            <div className="col">
                                                <Link to="/logout" className="dropdown-item">Log Out</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            )}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
