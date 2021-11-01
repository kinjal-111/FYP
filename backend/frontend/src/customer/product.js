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
import s1 from './assets/images/wm.PNG';
import chair from './assets/images/chair.glb';
import chairUsdz from './assets/images/chair.usdz';

class product extends React.Component{

    render(){
        const {history} = this.props;
        return (
          <>
            <div id="nav-section">
                <Navbar expand="lg" className="grey-bg">
                    <Navbar.Brand className="brand" href="#home">
                        Furnish the <strong>GreySpace</strong> - 3D Model
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">    
                            <Nav.Link href="/furnishthegreyspace/electronics">Electronics</Nav.Link>
                            <Nav.Link className="active" href="/furnishthegreyspace/furniture">Furniture</Nav.Link>
                            <Nav.Link href="/furnishthegreyspace/showpiece">Showpiece</Nav.Link>
                            <Nav.Link href="/furnishthegreyspace/contactus">Contact Us</Nav.Link>
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
                <Container className="home-container">
                    <Row className="m-50">
                        <Col md={6}>
                            <div className="threeObj">
                            <model-viewer style={{height:"500px",width:"100%",backgroundColor:"#17171A!important"}} src={chair} ios-src={chairUsdz} ar alt='A 3D model of a robot' camera-orbit="-90deg" auto-rotate='' camera-controls='' background-color='#455A64'></model-viewer>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div>
                            <p className="prod-title">MV Furniture Wood Contemporary Study Chair</p>
                            <p className="prod-price">Price: <span>₹1499.00</span></p>
                            <p className="prod-stock">In Stock</p>
                            <p>Sold and fulfilled by baba engineering art.</p>
                            <p>About this item</p>
                            <ul>
                                <li>MV Furniture- Made In India Sheesham Wood Product | Direct Factory To Your Home</li>
                                <li>One Chair Multiple Uses : This chairs can be used as Dining Chair, Study Chair, pair with dressing table and much more..</li>
                                <li>Fits in your space, fits on your budget. Give Your Home A Luxurious Look With sheesham wood table</li>
                                <li>No Assembly Required : Chairs are Pre-Assembled</li>
                                <li>Package Includes : Set Of 2 Dining Chairs With Cushions</li>
                            </ul>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="home">
                <hr/>
                <Container>
                    <Row>
                        <Col md={12}>
                        <div className="heading formheading" style={{textAlign:"center"}}>
                            <h3>More Related Product</h3>
                        </div>
                        </Col>

                        <Col md="4">
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
                        </Col>
                        <Col md="4">
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
                        </Col>
                        <Col md="4">
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

export default withRouter(product);
