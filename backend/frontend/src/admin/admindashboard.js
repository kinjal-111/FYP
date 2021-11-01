import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,Row,Col,Form,Button} from 'react-bootstrap';
import axios from 'axios'; 
import sampleimg from './assets/images/register.png';
import GLBFile from './assets/images/modelfiles/sofa/source/Sofa.glb';
import usdzFile from './assets/images/modelfiles/sofa/Sofa.usdz';
import './assets/css/style.css';


class admindashboard extends React.Component{
    onLogin = (event) =>{
        return this.props.history.push('/admin/Login');
    }
    onRegister = (event) =>{
        return this.props.history.push('/admin/register');
    }
    render(){
        const {history} = this.props;
        return (
          <>
            <div id="nav-section">
                <Navbar expand="lg" className="grey-bg">
                    <Navbar.Brand className="brand" href="#home">
                        Furnish the <strong>GreySpace</strong> - 3D Model
                    </Navbar.Brand>
                </Navbar>
            </div>
            <div id="admindashboard">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <div>
                                <model-viewer style={{height:"400px",width:"100%",backgroundColor:"#007BFF"}} src={GLBFile} ios-src={usdzFile} ar alt='A 3D model of a robot' camera-orbit="0deg" auto-rotate='' camera-controls='' background-color='#455A64'></model-viewer>
                            </div>
                        </Col>
                        <Col md={5}>
                            <Button className="btn-login btn-semiblock" onClick={(event)=> this.onLogin(event)}>SIGNIN</Button>
                        </Col>
                        <Col md={2}>
                            <p> -&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;- </p>
                        </Col>
                        <Col md={5}>
                            <Button className="btn-login btn-register btn-semiblock" onClick={(event)=> this.onRegister(event)}>SIGNUP</Button>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
          </>
        )
    }
}
export default withRouter(admindashboard);
