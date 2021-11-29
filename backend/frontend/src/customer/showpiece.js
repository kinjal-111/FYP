import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import { faCopyright,faCartArrowDown,faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'; 
import './assets/css/style.css';
import '../admin/assets/css/header.scss';
import './assets/css/footer.scss';
import s1 from './assets/images/s4.jpg';

class showpiece extends React.Component{
    render(){
        const {history} = this.props;
        return (
          <>
             <div id="nav-section">
                <Navbar expand="lg" className="grey-bg">
                    <Navbar.Brand className="brand" href="#home">
                        ARShelf
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">    
                            <Nav.Link href="/arshelf/electronics">Electronics</Nav.Link>
                            <Nav.Link href="/arshelf/furniture">Furniture</Nav.Link>
                            <Nav.Link className="active" href="/arshelf/showpiece">Showpiece</Nav.Link>
                            <Nav.Link href="/arshelf/contactus">Contact Us</Nav.Link>
                            <div className="navicon">
                                <a href="#" className="navbar-icon"><FontAwesomeIcon id="wishlist-icon" icon={faHeart}/></a>
                                <a href="#" className="navbar-icon"><FontAwesomeIcon id="cart-icon" icon={faCartArrowDown}/></a>
                            </div>
                            <Button type="button" className="btn-logout">Log In</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <section id="home">
                <Container>
                    <Row>
                        <Col md={12}>
                        <div className="heading formheading" style={{textAlign:"center"}}>
                            <h3>Showpiece</h3>
                        </div>
                        </Col>

                        <Col md="4">
                            <a href="/arshelf/product">
                                <Card className="card-card">
                                    <div className="contain-card-img">
                                        <Card.Img variant="center" src={s1}  />
                                    </div>
                                    <hr />
                                    <Card.Body>
                                        <Card.Text className="container">
                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                            <p className="para">From ₹ 2,100</p>
                                            <p className="smallpara">Zauri, Homefull</p>
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="/arshelf/product">
                                <Card className="card-card">
                                    <div className="contain-card-img">
                                        <Card.Img variant="center" src={s1}  />
                                    </div>
                                    <hr />
                                    <Card.Body>
                                        <Card.Text className="container">
                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                            <p className="para">From ₹ 2,100</p>
                                            <p className="smallpara">Zauri, Homefull</p>
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="/arshelf/product">
                                <Card className="card-card">
                                    <div className="contain-card-img">
                                        <Card.Img variant="center" src={s1}  />
                                    </div>
                                    <hr />
                                    <Card.Body>
                                        <Card.Text className="container">
                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                            <p className="para">From ₹ 2,100</p>
                                            <p className="smallpara">Zauri, Homefull</p>
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="/arshelf/product">
                                <Card className="card-card">
                                    <div className="contain-card-img">
                                        <Card.Img variant="center" src={s1}  />
                                    </div>
                                    <hr />
                                    <Card.Body>
                                        <Card.Text className="container">
                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                            <p className="para">From ₹ 2,100</p>
                                            <p className="smallpara">Zauri, Homefull</p>
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="/arshelf/product">
                                <Card className="card-card">
                                    <div className="contain-card-img">
                                        <Card.Img variant="center" src={s1}  />
                                    </div>
                                    <hr />
                                    <Card.Body>
                                        <Card.Text className="container">
                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                            <p className="para">From ₹ 2,100</p>
                                            <p className="smallpara">Zauri, Homefull</p>
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="/arshelf/product">
                                <Card className="card-card">
                                    <div className="contain-card-img">
                                        <Card.Img variant="center" src={s1}  />
                                    </div>
                                    <hr />
                                    <Card.Body>
                                        <Card.Text className="container">
                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                            <p className="para">From ₹ 2,100</p>
                                            <p className="smallpara">Zauri, Homefull</p>
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="footer">
                <div className="footer-container">
                    <div className="logo-section">
                        <p className="copyrights"><FontAwesomeIcon id="uploadIcon" icon={faCopyright} style={{fontSize:"14px"}} /> 2021 | All rights reserved</p>
                    </div>
                </div>
            </section>
            
          </>
        )
    }
}

export default withRouter(showpiece);
