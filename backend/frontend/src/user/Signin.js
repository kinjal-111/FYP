import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import loginImg from './images/login.jpg';
import './css/style.css';
import axios from 'axios';

class Signin extends Component {
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
      return this.props.history.push('/fileupload');
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
        {/* <div>
          <div className='container'>
            <div className='form-div'>
              <form onSubmit={this.onSubmit}>
                <input type='text' placeholder='Username' id='inputUsername' onChange={this.handleOnChangeUserName} className= 'form-control form-group'/>

                <input type='password' placeholder='Password' id='inputPassword' onChange={this.handleOnChangePassword} className= 'form-control form-group'/>

                <button type='submit' value='Submit' className= 'btn btn-danger btn-block'>Submit</button>
              </form>
            </div>
          </div>
        </div>   */} 

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
                  <p>Don't have an account? <a href="/register">Create one</a></p>
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

export default  withRouter(Signin);





/*




import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import loginImg from './images/login.jpg'
import './css/style.css';

const Signin = () => {
  return(
    <>
      <div>
        <Container fluid="lg">
          <Row style={{height:"80vh"}}>
            <Col sm={8}>
              <div className="loginImage">
                <img src={loginImg} width="100%" height="650vh" alt=""/>
              </div>
            </Col>
            
            <Col sm={4}>
              <div style={{padding:"100px 0 0 40px",margin:"0 auto"}}>
              <div className="heading" style={{textAlign:"center"}}>
                <h1>LOGIN</h1>
              </div>
              <div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email ID:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your registered Email ID" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Password" />
                  </Form.Group>
                  <Form.Group controlId="formLoginButton">
                    <Button variant="primary" type="submit" block style={{margin:"30px 10px",width:"95%"}}>LOGIN</Button>
                  </Form.Group>
                </Form>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Signin;
*/