import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import './styles.css';
import { Link } from 'react-router-dom'; 

const Admin_1 = () => {

    return (
        <div id="nav-section">
            <Navbar expand="lg" className="grey-bg">
                <Navbar.Brand href="#home">
                    <strong style={{color:"#007BFF"}}>Furnish the GreySpace-3D Model</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>            
                        <a href="login"><button className="btn-login">Signout</button></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

        <div className="left-panel">
            <ul className="panel-links">
                <li><a href="#">Category</a></li>
                <ul className="category">
                    <li><a href="#">Add</a></li>
                    <li><a href="#">Manage</a></li>
                </ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Shipment</a></li>
            </ul>
        </div>
    )

}

export default Admin_1;

// 
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Admin_1</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <nav class="navbar">
//         <h3>Furnish the GreySpace-3D Models</h3>
//         <ul class="navbar-links">
//             <li><a href="#">Signout</a></li>
//         </ul>
//     </nav>

//     <div class="left-panel">
//         <ul class="panel-links">
//             <li><a href="#">Category</a></li>
//             <ul class="category">
//                 <li><a href="#">Add</a></li>
//                 <li><a href="#">Manage</a></li>
//             </ul>
//             <li><a href="#">Product</a></li>
//             <li><a href="#">Order</a></li>
//             <li><a href="#">Shipment</a></li>
//         </ul>
//     </div>
    
// </body>
// </html>