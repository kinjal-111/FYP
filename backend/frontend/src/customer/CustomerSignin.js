import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Container,Row,Col,Form,Button} from 'react-bootstrap';
import loginImg from './assets/images/login.jpg';
import axios from 'axios';
import './assets/css/style.css';

class CustomerSignin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
      loginSuccess: false,
      didRedirect:false
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  fileRedirect = () =>{
    if(this.state.didRedirect){
      console.log("About to Redirect!");
      return this.props.history.push('/arshelf');
    }
  }

  handleOnChangeEmail = (e) => {

    this.setState({
      email: e.target.value
    });
  };

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit(event) {
    event.preventDefault();
    console.log("previous username:" +this.state.email);
    var email = this.state.email;
    var pass = this.state.password;
    console.log("User: " + email + " & pass: " +pass);
    let request = {
      email: email,
      password:pass
    }
    console.log(request);
    axios.post('/api/signin', request)
    .then(res => {
      if(res.data.data === "OK"){
        alert("Login Successful!");
        this.setState({didRedirect:true},() => {
          console.log("Callback func!");
          this.fileRedirect();  
        }); 
      }else{
        alert(res.data.data);  
        alert(res.data.data);
      }
      
    }).catch(err => {
      console.log(err);
      alert("Something went wrong, please try again!");
    });

  }

  render(){
    const {history} = this.props;
    return(
      <>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><strong>3d Model</strong>&nbsp;&nbsp;File-Uploader</Navbar.Brand>
        </Navbar>  
      <div>
        <Container fluid="lg">
          <Row style={{height:"80vh"}}>
            <Col sm={8}>
              <div className="loginImage">
                <img src={loginImg} width="100%" height="600vh" alt=""/>
              </div>
            </Col>
            
            <Col sm={4}>
              <div style={{padding:"60px 0 0 40px",margin:"0 auto"}}>
              <div className="heading" style={{textAlign:"center"}}>
                <h1>LOGIN</h1>
              </div>
              <div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email ID:</Form.Label>
                    <Form.Control type="email" onChange={this.handleOnChangeEmail} placeholder="Enter your registered Email ID" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password"  id='inputPassword' onChange={this.handleOnChangePassword} placeholder="Enter your Password" />
                  </Form.Group>
                  <Form.Group controlId="formLoginButton">
                    <Button variant="primary" type="submit" onClick={(event)=> this.onSubmit(event)} block style={{margin:"30px 10px",width:"95%"}}>LOGIN</Button>
                  </Form.Group>
                </Form>
                <div>
                  <p>Don't have an account? <a href="/arshelf/register">Create one</a></p>
                </div>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
  }
}

export default  withRouter(CustomerSignin);