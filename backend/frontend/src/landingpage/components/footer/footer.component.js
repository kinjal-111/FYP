import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './footer.styles.scss'
import logo from "../../assets/logo_transparent.png";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faTwitter,faLinkedinIn,faFacebookF,faInstagram } from "@fortawesome/free-brands-svg-icons";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Footer extends React.Component{
    render(){
        return(
            <section id="footer">
                <Container className="footer-container">
                    <Row>
                        <Col md={3}>
                            <div className="logo-section">
                                <p className="logo"><strong>3D Model</strong></p>
                                <p className="copyrights"><FontAwesomeIcon id="uploadIcon" icon={faCopyright} style={{fontSize:"14px"}} /> 2021 3D Model | All rights reserved</p>
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
        )
    }
}

export default Footer;