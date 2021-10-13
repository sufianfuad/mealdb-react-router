import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red",
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Food Deal</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink
                            className="menu"
                            activeStyle={activeStyle}
                            to="/home">Home</NavLink>
                        <NavLink
                            className="menu"
                            activeStyle={activeStyle}
                            to="/meals">Meals</NavLink>
                        <NavLink
                            className="menu"
                            activeStyle={activeStyle}
                            to="/about">About</NavLink>
                        <NavLink
                            className="menu"
                            activeStyle={activeStyle}
                            to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;