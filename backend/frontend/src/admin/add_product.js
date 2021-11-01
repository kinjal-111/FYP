import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button} from 'react-bootstrap';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'; 
import './assets/css/style.css';
import './assets/css/header.scss';

class add_product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories:[],
            productName:'',
            productDescription:'',
            productCategory:'',
            price:'',
            quantity:'',
            eoq:'',
            didRedirect:false
        };
    }

    async componentDidMount() {
        axios.post('/api/allcategories').then(res=>{
          const data = res.data;
          const categories = [];
          for(let i =0; i< data.data.length; i++){
            categories.push({
              id: data.data[i]._id,
              categoryName:data.data[i].categoryname
            });
          };
          this.setState({categories:categories});
        }).catch(err => {
          console.log(err);
          alert("Something went wrong, please try again!");
        });
    }


    fileRedirect = () =>{
        if(this.state.didRedirect){
          return this.props.history.push('/admin/manageproduct');
        }
    }


    handleOnChangeProductName = (e) => { this.setState({productName: e.target.value}); }

    handleOnChangeProductDescription = (e) => { this.setState({ productDescription: e.target.value}); }

    handleOnChangeCategory = (e) => { this.setState({productCategory: e.target.value}); }

    handleOnChangePrice = (e) => { this.setState({price: e.target.value}); }

    handleOnChangeQuantity = (e) => { this.setState({quantity: e.target.value}); }

    handleOnChangeEOQ = (e) => { this.setState({eoq: e.target.value}); }

    onSubmit(event) {
        event.preventDefault();
        let request = {
            productCategory: this.state.productCategory,
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            quantity: this.state.quantity,
            price: this.state.price,
            eoq: this.state.eoq
        }
        axios.post('/api/addproduct', request).then((response) => {
            alert("Product Added Successfully");
            this.setState({didRedirect:true},() => {
              this.fileRedirect();  
            });
        }).catch(err => {
          alert("Something went wrong while adding product to the DB, please try again!");
        }); 
    }

    onLogOut = (event) => { return this.props.history.push('/admin/login'); }

    render(){
        const {history} = this.props;
        return (
            <>
                <div id="nav-section">
                    <Navbar expand="lg" className="grey-bg">
                        <Navbar.Brand className="brand" href="">
                            Furnish the <strong>GreySpace</strong> - 3D Model
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
                                  <NavDropdown.Item className="active" href="/admin/addproduct">Add</NavDropdown.Item>
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
                            <Col md={12}>
                                <div>
                                    <div className="heading formheading">
                                        <h3><FontAwesomeIcon id="formicon" icon={faPlusCircle} style={{fontSize:"30px",marginRight:"10px"}} />Add Product</h3>
                                    </div>
                                    <div className="mainpanel-form">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="formlabel">Product Name :</Form.Label>
                                                <Form.Control type="text" onChange={this.handleOnChangeProductName} placeholder="Product Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                <Form.Label className="formlabel">Product Description:</Form.Label>
                                                <Form.Control type="text"as="textarea" className="form-textarea" rows={3} style={{resize:'none'}} onChange={this.handleOnChangeProductDescription} placeholder="This is the description of the product" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                <Form.Label className="formlabel">Category:</Form.Label>
                                                <br />
                                                <select onChange={this.handleOnChangeCategory}>
                                                    <option value="0">-&nbsp;- &nbsp;Select&nbsp; -&nbsp;-</option>
                                                    {this.state.categories.map((category,index) => (
                                                        <option value={category.id}>{category.categoryName}</option>
                                                     ))}
                                                </select>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                                <Form.Label className="formlabel">Price:</Form.Label>
                                                <Form.Control type="text" onChange={this.handleOnChangePrice} placeholder="00" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                                <Form.Label className="formlabel">Quantity:</Form.Label>
                                                <Form.Control type="text" onChange={this.handleOnChangeQuantity} placeholder="0" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                                                <Form.Label className="formlabel">EOQ:</Form.Label>
                                                <Form.Control type="text" onChange={this.handleOnChangeEOQ} placeholder="0" />
                                            </Form.Group>
                                            <Form.Group controlId="formLoginButton">
                                                <Button variant="primary" type="submit" className="btn-submit" onClick={(event)=> this.onSubmit(event)}>Submit</Button>
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

export default withRouter(add_product);


