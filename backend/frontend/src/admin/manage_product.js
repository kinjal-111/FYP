import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Navbar,Nav,NavDropdown,Container,Row,Col,Table,Button} from 'react-bootstrap';
import { faEye, faEdit, faTrash,faTasks } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './assets/css/style.css';
import './assets/css/header.scss';

class manage_product extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products:[],
      categories:[],
      categoryName:''
    };
  }

  async componentDidMount() {
    axios.post('/api/allproducts').then(res=>{
      const data = res.data;
      const products = [];
      for(let i =0; i< data.data.length; i++){
        products.push({
          id: data.data[i]._id,
          category_id: data.data[i].category_id,
          productName: data.data[i].name,
          description: data.data[i].description,
          quantity: data.data[i].quantity,
          price: data.data[i].price,
          eoq: data.data[i].eoq,
          filename: data.data[i].filename
        });
      };
      this.setState({products:products});
    }).catch(err => {
      console.log(err);
      //alert("Something went wrong, please try again!");
    });

    axios.post('/api/allcategories').then(response=>{
      const data = response.data;
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
      //alert("Something went wrong, please try again!");
    });
  }

  getCategory(id){
    var categoryName;
    this.state.categories.map((category,index) => {
      if(category.id == id){
        categoryName = category.categoryName;
        console.log(categoryName);
      }
    });
    return categoryName;
  }

  fileRedirect = () =>{
    if(this.state.didRedirect){
      return this.props.history.push('/admin/manageproduct');
    }
  }
  
  updateRedirect = (id) =>{
    if(this.state.didRedirect){
      return this.props.history.push(`/admin/updateproduct/${id}`);
    }
  }

  viewRedirect = (id) =>{
    if(this.state.didRedirect){
      return this.props.history.push(`/admin/viewproduct/${id}`);
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
    event.preventDefault();
    let request = {
      product_id:id
    }
    if(window.confirm("Are you sure you want to delete this product?")){
      axios.post('/api/deleteproduct',request).then(res=>{
        console.log(res.data);
        if(res.statusText === "OK"){
          alert("Product Deleted Successfully!");
          this.setState({didRedirect:true},() => {
            this.fileRedirect();  
          }); 
        }
      }).catch(err => {
        console.log(err);
        alert("Unable to delete this product, please try again!");
      });
    }
  }

  onLogOut = (event) => { return this.props.history.push('/admin/login'); }
  
  render(){
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

        <div class="mainpanel">
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
                          <th>Category</th>
                          <th>Product Name</th>
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>EPQ</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.products.map((product,index) => (
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{this.getCategory(product.category_id)}</td>
                            <td>{product.productName}</td>
                            <td>{product.description}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>{product.eoq}</td>
                            <td>
                                <Button type="button"><FontAwesomeIcon icon={faEye} onClick={(event)=> this.onView(event,product.id)} style={{fontSize:"18px"}} /></Button>
                                <Button type="button"><FontAwesomeIcon icon={faEdit} onClick={(event)=> this.onUpdate(event,product.id)} style={{fontSize:"18px"}} /></Button>
                                <Button className="btn-delete" type="button"><FontAwesomeIcon icon={faTrash} onClick={(event)=> this.onDelete(event,product.id)} style={{fontSize:"18px"}} /></Button>
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

export default withRouter(manage_product);

