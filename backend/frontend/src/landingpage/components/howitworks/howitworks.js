import React from 'react';
import './howitworks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import homeImg from '../../assets/howitworks.png';
import ReactPlayer from "react-player";
const Howitworks = () => {
    return (
        <section id="howitworks">
            <div className="howitworks-container">
                <div className="title-container">
                    <h2>How it works?</h2>
                    <hr className="hr-style"/>
                </div>
            </div>  
            
            <div>
                <Container fluid className="howitworks-content-container">
                    <Row>
                        <Col md={5}>
                            <div className="para">
                                <p className="text-small">Your goods can be viewed in AR and 3D on desktop and mobile browsers. It's as easy as going to the website on your computer and enjoying the benefits of Augmented Reality.<br /><br /><br />Users can open the product page in their mobile browser and experience the product in their own space by clicking on the AR button.</p> 
                                <br />
                                {/* <p className="text-small">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>  */}
                                
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="image-container">
                                <img src={homeImg} alt="Logo" /> 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>        
        </section>
    )
}

export default Howitworks;