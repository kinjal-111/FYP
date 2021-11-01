import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import loginImg from './images/signup.jpg';
import './css/style.css';
import axios from 'axios';

class Signup extends Component {
	constructor(){
		super()
		this.state = {
			name:'',
			email:'',
			password:'',
			confirmPassword:'',
			didRedirect:false
		}
		this.changeName = this.changeName.bind(this)
		this.changeEmail = this.changeEmail.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.changeConfirmPassword = this.changeConfirmPassword.bind(this)
		this.onSubmit = this.onSubmit.bind(this) 
	}

	fileRedirect = () =>{
	    if(this.state.didRedirect){
	      console.log("About to Redirect!");
	      return this.props.history.push('/login');
	    }
	  }

	changeName(event) {
		this.setState({
			name:event.target.value
		})
	}
	changeEmail(event) {
		this.setState({
			email:event.target.value
		})
	}
	changePassword(event) {
		this.setState({
			password:event.target.value
		})
	}
	changeConfirmPassword(event) {
		this.setState({
			confirmPassword:event.target.value
		})
	}
	onSubmit(event) {
		event.preventDefault()
		console.log("Name: " + this.state.name+ " Email: " +this.state.email+ " Password: "+this.state.password+ " Confirm Password: "+this.state.confirmPassword);
		if(this.state.confirmPassword === this.state.password){
			const registered ={
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			}
			axios.post('/api/signup', registered).then( (res)=> {
				console.log(res.data);
				alert("Registered Successfully!");
				this.setState({didRedirect:true},() => {
		          console.log("Callback func!");
		          this.fileRedirect();  
        		});

			})
			.catch((err)=>{
				console.log("Error: "+err);
				alert("Something went wrong please try again!");
				 
			})
		}else{
			alert("Please enter correct credentials!");
		}

		
	}

	render(){
		const {history} = this.props;
		return(
			<>
			<Navbar bg="light" expand="lg">
	          <Navbar.Brand href="#home"><strong style={{color:"#007BFF"}}>3d Model</strong></Navbar.Brand>
	        </Navbar> 
			<div>
		        <Container fluid="lg">
		          <Row style={{height:"80vh"}}>
		            <Col sm={4}>
		              <div style={{padding:"30px 0 0 40px",margin:"0 auto"}}>
		              <div className="heading" style={{textAlign:"center"}}>
		                <h1>Register</h1>
		              </div>
		              <div>
		                <Form>
		                	<Form.Group controlId="formBasicEmail">
			                    <Form.Label>Name:</Form.Label>
			                    <Form.Control type="text" onChange={this.changeName} placeholder="Enter your Name" />
			                  </Form.Group>
		                  <Form.Group controlId="formBasicEmail">
		                    <Form.Label>Email ID:</Form.Label>
		                    <Form.Control type="email" onChange={this.changeEmail} placeholder="Enter your EmailID" />
		                  </Form.Group>
		                  <Form.Group controlId="formBasicPassword">
		                    <Form.Label>Password:</Form.Label>
		                    <Form.Control type="password" onChange={this.changePassword} placeholder="Enter your password" />
		                  </Form.Group>
		                  <Form.Group controlId="formBasicPassword">
		                    <Form.Label>Confirm Password:</Form.Label>
		                    <Form.Control type="password" onChange={this.changeConfirmPassword} placeholder="Re-enter password" />
		                  </Form.Group>
		                  <Form.Group controlId="formLoginButton">
		                    <Button variant="primary" type="submit" onClick={(event)=> this.onSubmit(event)} block style={{margin:"30px 10px",width:"95%"}}>Register</Button>
		                  </Form.Group>
		                </Form>
		                <div>
		                  <p>Already registered? <a href="/login">Login</a></p>
		                </div>
		              </div>
		              </div>
		            </Col>
		            <Col sm={8}>
		              <div className="loginImage">
		                <img src={loginImg} width="100%" height="600vh" alt=""/>
		              </div>
		            </Col>
		          </Row>
		        </Container>
		      </div>	
		    </>
		);
	}
}

export default withRouter(Signup);