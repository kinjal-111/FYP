import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Container,Row,Col} from "react-bootstrap";
import './benefit.styles.scss';
import homeImg from '../../assets/blockes.png'

const Benefit = () => {

    return (
        <section id="aboutus">
            <Container className="benefit-container">
                <div className="title-benefit-container">
                    <h2>About Us</h2>
                    <hr className="hr-style" />
                </div>
                <Row>
                    <Col md="6" className="para">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This works best with 3D models, in order to view a file which is in 3D format our project will first convert it into a generalized format and then make it visible to the end users. The user will have to register and then login before uploading the files.
                            <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once logged in, the user can upload the file (in .dae format) which after conversion will be displayed on the screen and can also be viewed in AR.Such type of projects can be used by any users let it be an architect, a shop owner, interior designer, etc. It can be used by users who work with augmented reality.
                        </p>
                    </Col>
                    <Col md="6">
                        <div className="image-container">
                            <img src={homeImg} alt="Logo" /> 
                        </div>                        
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Benefit;