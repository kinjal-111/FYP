import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button,Table} from 'react-bootstrap'; 
import { faEye,faEdit,faTrash,faTasks } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './assets/css/style.css';
import './assets/css/header.scss';

class manage_category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        categories:[],
        didRedirect:false
    };
  }
  async componentDidMount() {
    axios.post('/api/allcategories').then(res=>{
      const data = res.data;
      const categories = [];
      console.log(res.data);
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
      return this.props.history.push('/admin/managecategory');
    }
  }

  updateRedirect = (id) =>{
    if(this.state.didRedirect){
      return this.props.history.push(`/admin/updatecategory/${id}`);
    }
  }

  viewRedirect = (id) =>{
    if(this.state.didRedirect){
      return this.props.history.push(`/admin/viewcategory/${id}`);
    }
  }

  onView=(event,id)=>{
    this.setState({didRedirect:true},() => {
      this.viewRedirect(id);  
    }); 
  }

  onUpdate=(event,id)=>{
    this.setState({didRedirect:true},() => {
      this.updateRedirect(id);  
    }); 
  }

  onDelete=(event,id)=>{
    let request = {
      category_id:id
    }
    axios.post('/api/deletecategory',request).then(res=>{
      if(res.statusText === "OK"){
        alert("Are you sure you want to delete this category?!");
        this.setState({didRedirect:true},() => {
          this.fileRedirect();  
        }); 
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
                      <NavDropdown.Item href="/admin/addcategory">Add</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className="active" href="/admin/managecategory">Manage</NavDropdown.Item>
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
              <Col md={12}>
                <div>
                    <div className="heading formheading">
                        <h3><FontAwesomeIcon id="formicon" icon={faTasks} style={{fontSize:"30px",marginRight:"10px"}} />Manage Category</h3>
                    </div>
                    <div className="mainpanel-table">
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Category Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                           {this.state.categories.map((category,index) => (
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{category.categoryName}</td>
                              <td> 
                                <Button type="button"><FontAwesomeIcon icon={faEye} onClick={(event)=> this.onView(event,category.id)} style={{fontSize:"18px"}} /></Button>
                                <Button type="button"><FontAwesomeIcon icon={faEdit} onClick={(event)=> this.onUpdate(event,category.id)} style={{fontSize:"18px"}} /></Button>
                                <Button className="btn-delete" type="button"><FontAwesomeIcon icon={faTrash} onClick={(event)=> this.onDelete(event,category.id)} style={{fontSize:"18px"}} /></Button>  
                              </td>
                            </tr>
                           ))}
                        </tbody>
                      </Table>
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

export default withRouter(manage_category);


