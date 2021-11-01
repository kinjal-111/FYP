import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Admin_3 = () => {

    return (
        <div id="nav-section">
            <Navbar expand="lg" className="grey-bg">
                <Navbar.Brand href="#home">
                    <strong style={{color:"#007BFF"}}>Furnish the GreySpace-3D Models</strong>
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

        <div class="table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Category Name</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ABC</td>
                  <td>
                    <a href="/#" className="a-fab">
                        <button className="floating-btn"><FontAwesomeIcon id="uploadIcon" icon={faEye} style={{fontSize:"20px"}} /></button>
                    </a>  
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>EFG</td>
                  <td>
                    <a href="/#" className="a-fab">
                        <button className="floating-btn"><FontAwesomeIcon id="uploadIcon" icon={faPencil} style={{fontSize:"20px"}} /></button>
                    </a>  
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>XYZ</td>
                  <td>
                    <a href="/#" className="a-fab">
                        <button className="floating-btn"><FontAwesomeIcon id="uploadIcon" icon={faTrash} style={{fontSize:"20px"}} /></button>
                    </a>  
                  </td>
                </tr>
              </tbody>
            </Table>
        </div>

    )

}

export default Admin_3;



// 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Admin_3</title>
//     <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
    
//     <div class="table">
//         <table>
//             <tr>
//               <th>Sr. No</th>
//               <th>Category<br>Name</th>
//               <th>  </th>
//             </tr>
//             <tr>
//               <td>1.</td>
//               <td>ABC</td>
//               <td><i class="fa fa-eye"></i> <i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
//             </tr>
//             <tr>
//               <td>2.</td>
//               <td>XYZ</td>
//               <td><i class="fa fa-eye"></i> <i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
//             </tr>
//             <tr>
//               <td>3.</td>
//               <td>MNO</td>
//               <td><i class="fa fa-eye"></i> <i class="fa fa-pencil"></i> <i class="fa fa-trash"></i></td>
//             </tr>
//           </table>
//     </div>

// </body>
// </html>