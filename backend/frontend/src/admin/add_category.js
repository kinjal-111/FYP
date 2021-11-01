import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button} from 'react-bootstrap';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'; 
import './assets/css/style.css';
import './assets/css/header.scss';

class add_category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryName:'',
            didRedirect:false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    fileRedirect = () =>{
        if(this.state.didRedirect){
          return this.props.history.push('/admin/managecategory');
        }
    }

    handleOnChangeCategoryName = (e) => { this.setState({categoryName: e.target.value}) };

    onSubmit(event) {
        event.preventDefault();
        var catName = this.state.categoryName;
        let request = {
          categoryName: catName
        }
        axios.post('/api/addcategory', request)
        .then(res => {
          if(res.data.data === "OK"){
            alert("Category Added Successfully!");
            this.setState({didRedirect:true},() => {
              this.fileRedirect();  
            }); 
          }else{
            alert(res.data.data);
          }
        }).catch(err => {
          console.log(err);
          alert("Something went wrong, please try again!");
        });
    }

    onLogOut = (event) => { return this.props.history.push('/admin/login'); }

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
                                <NavDropdown title="Category" id="basic-nav-dropdown">
                                  <NavDropdown.Item className="active" href="/admin/addcategory">Add</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/admin/managecategory">Manage</NavDropdown.Item>
                                </NavDropdown> 
                                <NavDropdown title="Product" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="/admin/addproduct">Add</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/admin/manageproduct">Manage</NavDropdown.Item>
                                </NavDropdown> 
                                <Nav.Link href="/admin/orderlist">Orders</Nav.Link>
                                <Nav.Link href="/admin/shipment">Shipment Details</Nav.Link>     
                                <Button type="button" className="btn-logout" onClick={(event)=> this.onLogOut(event)}>Log Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="mainpanel">
                    <Container>
                        <Row>
                            {/*<Col md={3}>
                                <div className="left-panel">
                                    <ul className="panel-links">
                                      <Dropdown title="Category">
                                        <Dropdown.Item><a href="admin/addcategory" style={{backgroundColor:"#007bff",color:"#EFEFEF",padding:"10px 173px 10px 20px"}}>Add</a></Dropdown.Item>
                                        <Dropdown.Item><a href="admin/managecategory">Manage</a></Dropdown.Item>
                                      </Dropdown>
                                        
                                      <Dropdown title="Product" className="dropdown">
                                        <Dropdown.Item><a href="admin/addproduct">Add</a></Dropdown.Item>
                                        <Dropdown.Item><a href="admin/addproduct" >Add</a></Dropdown.Item>
                                        <Dropdown.Item><a href="admin/manageproduct">Manage</a></Dropdown.Item>
                                      </Dropdown>
                                        <div className="group">
                                            <li><a href="#" className="group">Order</a></li>
                                            <li><a href="#" className="group">Shipment</a></li>
                                        </div>
                                    </ul>
                                    <div className="footer">
                                        <a href="#" className="group">@</a>
                                        <a href="#" className="group">#</a>
                                    </div>
                                </div>
                            </Col>*/}
                            <Col md={12}>
                                <div>
                                    <div className="heading formheading">
                                        <h3><FontAwesomeIcon id="formicon" icon={faPlusCircle} style={{fontSize:"30px",marginRight:"10px"}} />Add Category</h3>
                                    </div>
                                    <div className="mainpanel-form">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="formlabel">Category Name :</Form.Label>
                                                <Form.Control type="text" onChange={this.handleOnChangeCategoryName} placeholder="Category Name" />
                                            </Form.Group>
                                            <Form.Group controlId="formLoginButton">
                                                <Button variant="primary" type="button" className="btn-submit" onClick={(event)=> this.onSubmit(event)}>Submit</Button>
                                                {/*<Button variant="primary" type="button" style={{width:"20%",marginTop:"30px", marginLeft:"70%"}} onClick={(event)=> this.onSubmit(event)}>Submit</Button>*/}
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default withRouter(add_category);