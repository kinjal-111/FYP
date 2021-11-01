import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import './header.styles.scss';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo_transparent.png';

const Header = () =>  {
    return(
        <div id="nav-section">
            <Navbar expand="lg" className="grey-bg">
                <Navbar.Brand href="#home">
                    <strong style={{color:"#007BFF"}}>3D Model</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>            
                        <Nav.Link href="#aboutus" className="navbar-link">About us</Nav.Link>
                        <Nav.Link href="#features" className="navbar-link">Features</Nav.Link>
                        <Nav.Link href="#howitworks" className="navbar-link">How it works</Nav.Link>
                        <Nav.Link href="/login" className="navbar-link nav-last">Get Started</Nav.Link>
                        <Nav.Link href="/samples" className="navbar-link nav-last">Samples</Nav.Link>
                        <a href="login"><button className="btn-login">LOGIN</button></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
    
}

export default Header;