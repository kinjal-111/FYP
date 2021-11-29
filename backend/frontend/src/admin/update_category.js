import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button} from 'react-bootstrap'; 
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './assets/css/style.css';
import './assets/css/header.scss';

class update_category extends React.Component {
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

  fileRedirect = () =>{
    if(this.state.didRedirect){
      return this.props.history.push('/admin/managecategory');
    }
  }

  onUpdate(event) {
    event.preventDefault();
    var catName = this.state.categoryName;
    var category_id = this.state.category_id;
    let request = {
      category_id: category_id,
      categoryname: catName
    }
    axios.post('/api/updatecategory', request)
    .then(res => {
      if(res.data.data === "OK"){
        alert("Category Added Successfully!");
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

  handleOnChangeCategoryName = (e) => { this.setState({categoryName: e.target.value}); };

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
                      <h3><FontAwesomeIcon id="formicon" icon={faEdit} style={{fontSize:"30px"}} />Update Category</h3>
                  </div>
                  <div className="mainpanel-form">
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formlabel">Category Name :</Form.Label>
                        <Form.Control type="text" onChange={this.handleOnChangeCategoryName} value={this.state.categoryName}/>
                      </Form.Group>
                      <Form.Group controlId="formLoginButton">
                        <Button variant="danger" type="button" className="btn-back" onClick={(event)=> this.onBack(event)} style={{marginRight:'40px'}}>Back</Button>
                        <Button variant="primary" type="button" className="btn-submit" onClick={(event)=> this.onUpdate(event)}>Update</Button>       
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

export default withRouter(update_category);


