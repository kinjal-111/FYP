import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button} from 'react-bootstrap';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './assets/css/header.scss';
import './assets/css/style.css';
import {saveFile,convertFile,saveImg,checkFile,makeDir,saveToSRC} from '../user/helper/filesapicall';
import GLBFile from './assets/images/TableExample.glb';

class view_product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product_id:this.props.match.params.id,
            productName:'',
            productDescription:'',
            productCategory:'',
            category_id:'',
            price:'',
            quantity:'',
            eoq:'',
            categories:[], 
            glbPath:"./assets/images/TableExample.glb",
            usdzPath:"E://Web/React/Filer/backend/frontend/src/admin/assets/images/sbr.usdz",
            didRedirect:false
        };
    }
    async componentDidMount() {
        //Getting Product details of a specified id
        let request = {
            product_id:this.state.product_id
        }
        console.log(request);
        axios.post('/api/viewproduct',request).then(res=>{
            const data = res.data.data;
            console.log(data);
            this.setState({productName: data.name});
            this.setState({productDescription: data.description});
            this.setState({category_id: data.category_id});
            this.setState({price: data.price});
            this.setState({quantity: data.quantity});
            this.setState({eoq: data.eoq});

            //Getting categoryname for the product
            let req = {
                category_id:this.state.category_id
            }
            console.log(req);
            axios.post('/api/categoryname',req).then(resp=>{
                console.log(resp.data);
                this.setState({productCategory:resp.data.data.categoryname});
                console.log(this.state.productCategory);
            });
        });
        this.setState({glbPath:"E://Web/React/Filer/backend/frontend/public/test/"+ this.state.filename+".glb"});
        console.log("GLB PAth"+this.state.glbPath);
    }

    onBack = (e) =>{ return this.props.history.push('/admin/manageproduct'); }

    onLogOut = (event) => { return this.props.history.push('/admin/login'); }

    render(){
        const {history} = this.props;
        return (
          <>
            <div id="nav-section">
                <Navbar expand="lg" className="grey-bg">
                    <Navbar.Brand className="brand" href="#home">
                      Arshelf
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">    
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/admin/addcategory">Add</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/admin/managecategory">Manage</NavDropdown.Item>
                        </NavDropdown> 
                        <NavDropdown title="Product" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/admin/addproduct">Add</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item className="active" href="/admin/manageproduct">Manage</NavDropdown.Item>
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
                        <Col md={12}>
                            <div>
                                <div className="heading formheading">
                                    <h3><FontAwesomeIcon id="formicon" icon={faEye} style={{fontSize:"30px",marginRight:"10px"}} />View Product</h3>
                                </div>
                                <div className="mainpanel-form">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="formlabel">Product Name :</Form.Label>
                                            <Form.Control type="text" value={this.state.productName} disabled />
                                        </Form.Group>
                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label className="formlabel">Product Description:</Form.Label>
                                            <Form.Control type="text"as="textarea" className="form-textarea" rows={3} style={{resize:'none'}} value={this.state.productDescription} disabled />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Label className="formlabel">Category:</Form.Label>
                                            <Form.Control type="text" value={this.state.productCategory} disabled />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                            <Form.Label className="formlabel">Price:</Form.Label>
                                            <Form.Control type="text" value={this.state.price} disabled />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                            <Form.Label className="formlabel">Quantity:</Form.Label>
                                            <Form.Control type="text" value={this.state.quantity} disabled />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                                            <Form.Label className="formlabel">EOQ:</Form.Label>
                                            <Form.Control type="text" value={this.state.eoq} disabled />
                                        </Form.Group>
                                        <Form.Group controlId="formLoginButton">
                                            <Button variant="danger" type="button" className="btn-back" onClick={(event)=> this.onBack(event)}>Back</Button>
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

export default withRouter(view_product);


