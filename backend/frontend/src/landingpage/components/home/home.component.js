import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import '@google/model-viewer';
import './home.styles.scss';
import homeImg from '../../assets/showcase.png';
import gun from '../../assets/gun.glb';
import gunUsdz from '../../assets/gun_usdz.usdz';
const Home = () => {

    return(
        <section id="home">
             <Container fluid className="home-container">
                    <Row>
                        <Col md={6}>               
                            <div className="image-container">
                                <img src={homeImg} alt="Logo" /> 
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="text-container">
                                <h1 className="text">Tool for 3D and Augmented Reality experience</h1>
                                <h3 className="text-small">Helping users to deliver meaningful 3D and Augmented Reality shopping experience.</h3> 
                                <a href="/login">
                                    <button className="get-started">Get Started</button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
    )
    
}

export default Home;