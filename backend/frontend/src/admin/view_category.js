import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button} from 'react-bootstrap';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './assets/css/header.scss';
import './assets/css/style.css';

class view_category extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        category_id:this.props.match.params.id,
        categoryName:''
    };
  }

  async componentDidMount() {
    let request = {
      category_id:this.state.category_id
    }
    console.log(request);
    axios.post('/api/categoryname',request).then(res=>{
      console.log(res.data);
      this.setState({categoryName:res.data.data.categoryname});
      console.log(this.state.categoryName);
    }).catch(err => {
      console.log(err);
      alert("Something went wrong, please try again!");
    });
  }

  onBack = (e) =>{ return this.props.history.push('/admin/managecategory'); }

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
                      <h3><FontAwesomeIcon id="formicon" icon={faEye} style={{fontSize:"30px",marginRight:"10px"}} />View Category</h3>
                  </div>
                  <div className="mainpanel-form">
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formlabel">Category Name :</Form.Label>
                        <Form.Control type="text" disabled value={this.state.categoryName} />
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

export default withRouter(view_category);


