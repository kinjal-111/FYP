import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Navbar,Nav,Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from './assets/logo_transparent.png';
import homeImg from './assets/homeImg2.png';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faTwitter,faLinkedinIn,faFacebookF,faInstagram } from "@fortawesome/free-brands-svg-icons";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './trial.scss';
import axios from 'axios';
import '@google/model-viewer';
import model1 from '../user/images/trial/fbxFile.glb';
import model2 from '../user/images/trial/marvin.glb';
import model3 from '../user/images/trial/low_stool.glb';
import model4 from '../user/images/trial/mesh.glb';

class Home extends React.Component{
    render(){
        return(
            <>
                <div id="nav-section">
                    <Navbar expand="lg" className="grey-bg">
                        <Navbar.Brand href="#home">
                            <strong style={{color:"#007BFF"}}>3D Model</strong>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/#home" className="navbar-link">Home</Nav.Link>            
                                <Nav.Link href="/#benefit" className="navbar-link">About us</Nav.Link>
                                <Nav.Link href="/#features" className="navbar-link">Features</Nav.Link>
                                <Nav.Link href="/#howitworks" className="navbar-link">How it works</Nav.Link>
                                <Nav.Link href="/login" className="navbar-link nav-last">Get Started</Nav.Link>
                                <Nav.Link href="/samples" className="navbar-link active nav-last">Samples</Nav.Link>
                                <a href="login"><button className="btn-login">LOGIN</button></a>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <section id="contactus">
                        <div className="title-container">
                            <h2>Samples!</h2>
                            <hr className="hr-style"/>
                        </div> 
                    <div>
                        <Container fluid className="contactus-container">
                            <Row>
                                <Col md={6}>
                                    <div className="model">               
                                        <model-viewer style={{height:"300px",width:"100%",backgroundColor:"#FFF"}} src={model3} ios-src="" ar alt='A 3D model of a robot' auto-rotate='' camera-controls='' background-color='#455A64'></model-viewer>
                                    </div>  
                                </Col>
                                <Col md={6}>
                                    <div className="model">               
                                        <model-viewer style={{height:"300px",width:"100%",backgroundColor:"#FFF"}} src={model2} ios-src="" ar alt='A 3D model of a robot' auto-rotate='' camera-controls='' background-color='#455A64'></model-viewer>
                                    </div>  
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>


                <section id="footer">
                <Container className="footer-container">
                    <Row>
                        <Col md={3}>
                            <div className="logo-section">
                                <p className="logo"><strong>3D Model</strong></p>
                                <p className="copyrights"><FontAwesomeIcon id="uploadIcon" icon={faCopyright} style={{fontSize:"14px"}} /> 2021 3d Model | All rights reserved</p>
                                <p className="policies">Privacy Policy | Ad and Cookie Policy</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="cols">
                                <h5 className="text">Explore</h5>
                                {/* <hr className="explore-hr"/> */}
                                <div className="list-content">
                                    <p><a href="">Communities</a></p>
                                    <p><a href="">Resources</a></p>
                                    <p><a href="">Pricing</a></p>
                                    <p><a href="">Blog</a></p>
                                    <p><a href="">Contact</a></p> 
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="cols">
                                <h5 className="text">Connect</h5> 
                                {/* <hr className="connect-hr"/> */}
                                <div className="connect-content">
                                    <p><a href="">(+91) 9800098000</a></p>
                                    <p><a href="">info@3dmodel.com</a></p>
                                    <div className="icons">
                                        <a href="" className="fa-icon"><FontAwesomeIcon className="brand-icon" icon={faTwitter} /></a>
                                        <a href="" className="fa-icon"><FontAwesomeIcon className="brand-icon" icon={faLinkedinIn} /></a>
                                        <a href="" className="fa-icon"><FontAwesomeIcon className="brand-icon fb-icon" icon={faFacebookF} /></a>
                                        <a href="" className="fa-icon"><FontAwesomeIcon className="brand-icon" icon={faInstagram} /></a>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="cols">
                                <h5 className="text">Subscribe</h5> 
                                {/* <hr className="subscribe-hr"/> */}
                                <div className="subscribe-content">
                                    <p>Subscribe to learn more about how you can leverage 3D across your organization to create better workflows and improve customer digital experiences.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
                
        ) 
    }
}

export default Home;