import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Form,Button} from 'react-bootstrap'; 
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './assets/css/style.css';
import './assets/css/header.scss';

class update_product extends React.Component{
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
            filename:'',
            categories:[], 
            selectedFileName:null,
            fileCopied:false,
            isProgressBar:false,
            saveGLB:true,
            progressVal:0,
            number:10, 
            didRedirect:false
        };
    }
    async componentDidMount() {
        //Getting Product details of a specified id
        let request = {
            product_id:this.state.product_id
        }
        axios.post('/api/viewproduct',request).then(res=>{
            const data = res.data.data;
            console.log(data);
            this.setState({productName: data.name});
            this.setState({productDescription: data.description});
            this.setState({category_id: data.category_id});
            this.setState({price: data.price});
            this.setState({quantity: data.quantity});
            this.setState({eoq: data.eoq});
            this.setState({filename: data.filename});

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
        axios.post('/api/allcategories').then(res=>{
            const data = res.data;
            const categories = [];
            console.log(data.data);
            for(let i =0; i< data.data.length; i++){
                categories.push({
                id: data.data[i]._id,
                categoryName:data.data[i].categoryname
                });
            };
            this.setState({categories:categories});
            console.log(this.state.categories);
        });        
        console.log("Product ID: "+ this.state.product_id);
    }

    componentWillUnmount(){ clearInterval(this.interval); }

    fileRedirect = () =>{
        if(this.state.didRedirect){
          return this.props.history.push('/admin/manageproduct');
        }
    }
    onCancel = (e) =>{ return this.props.history.push('/admin/manageproduct'); }

    handleOnChangeProductName = (e) => { this.setState({productName: e.target.value}); };

    handleOnChangeProductDescription = (e) => { this.setState({productDescription: e.target.value}); }
    handleOnChangeCategory = (e) => { this.setState({category_id: e.target.value}); }
    handleOnChangePrice = (e) => { this.setState({price: e.target.value}); }
    handleOnChangeQuantity = (e) => { this.setState({quantity: e.target.value}); }
    handleOnChangeEOQ = (e) => { this.setState({eoq: e.target.value}); }
    onFileSelection = event => { this.setState({selectedFileName: event.target.files[0]}); }

    toggleProgressBar = () => {
        if(this.state.isProgressBar){
            this.setState({isProgressBar:false});
        }else{
            this.setState({isProgressBar:true});
        }
    }

    getProgressBar = () =>{
        if(this.state.isProgressBar){
            return(
                <div className="overlay">
                    <div className="loader"></div>
                </div>
            );
        }
    }

    /*convertUSDZ = () => {
        console.log("Inside USDZ convert");
        axios.get('/api/file/convertToUSDZ').then( (response) =>{
            console.log("USDZ : " +response.statusText);
            console.log("state num: "+ this.state.number);
            if(response.statusText === "OK"){
                this.interval = setInterval(() => {
                    if(this.state.number !==0) {
                        this.setState({number: this.state.number - 1 });
                        console.log("Number while USDZ interval : "+ this.state.number);
                    }else{
                        clearInterval(this.interval);
                        this.setState({didRedirect:true},() => {
                          console.log("Callback func!");
                          this.fileRedirect();  
                        }); 
                    }
                }, 1000);
                
            }else{
                this.setState({isProgressBar:false});
                alert("Something Went Wrong Re-try!");
            }
        }).catch ( (err) => {
            console.log("File Conversion error: "+err);
            this.setState({isProgressBar:false});
            alert("Something Went Wrong Re-try!");
        });
    }

    convertGLB = () =>{
        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };
        const formData = new FormData();
        if(this.state.fileCopied){
            console.log("File Copied Status: " +this.state.fileCopied);
            if(this.state.selectedFileName != null){
                formData.append(
                    "myFile",
                    this.state.selectedFileName,
                    this.state.selectedFileName.name
                );
               convertFile(formData).then( (resp) => {
                    console.log("data File Save from convertGLB: " +resp.statusText);
                    if(resp.statusText === "OK"){
                        this.interval = setInterval(() => {
                            if(this.state.number !==0) {
                                this.setState({number: this.state.number - 1 });
                                console.log("Number while GLB interval : "+ this.state.number);
                            }else{
                                clearInterval(this.interval);
                                this.setState({number:10});
                                
                                console.log("Interval number from usdz: "+this.state.number);
                                console.log("Category Id:" +this.state.productCategory);
                                console.log("Product Name:" +this.state.productName);
                                console.log("Product Description:" +this.state.productDescription);
                                console.log("Quantity:" +this.state.quantity);
                                console.log("Price :" +this.state.price);
                                console.log("EOQ:" +this.state.eoq);
                                console.log("File Name:" +this.state.selectedFileName.name);
                                let request = {
                                    productCategory: this.state.productCategory,
                                    productName: this.state.productName,
                                    productDescription: this.state.productDescription,
                                    quantity: this.state.quantity,
                                    price: this.state.price,
                                    eoq: this.state.eoq,
                                    selectedFileName: this.state.selectedFileName.name
                                }
                                console.log(request);
                                axios.post('/api/addproduct', request).then((response) => {
                                    console.log("Res dat Add Product: "+ response.data.data);
                                    if(response.data.data === "OK"){
                                        alert("Product Added Successfully!");
                                        this.convertUSDZ();
                                    }else{
                                        alert(response.data.data);  
                                 
                                    }
                                  
                                }).catch(err => {
                                  console.log(err);
                                  alert("Something went wrong while adding product to the DB, please try again!");
                                }); 
                            }
                        }, 1000);
                    }else{
                        alert("Something Went Wrong Re-try! - convert file else");
                        this.setState({isProgressBar:false});
                    }
                })
                .catch( (err) => {
                    this.setState({isProgressBar:false});
                });
            }else{
                alert("File Upload Unsuccessful");
            }
        }else{
            alert("File Upload Error! Please Re-try!");
        }
    }
    onSubmit(event) {
        event.preventDefault();
        // event.target.disabled = true;
        var formData = new FormData();
        var formImg = new FormData();
        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };
        if(this.state.selectedFileName != null){
            formData.append(
                "myFile",
                this.state.selectedFileName,
                this.state.selectedFileName.name
            );
            
            axios.post('/api/file/checkFile',formData,config).then( (res)=>{
                console.log("Check File response: " + res.statusText);
                
                    this.toggleProgressBar();
                console.log("Res from Check" + res);
                
                if(res.statusText == "OK"){
                    axios.post('/api/file/makeDir',formData,config).then( (response) =>{
                        console.log("From makeDir , response : " + response.statusText);
                        if(response.statusText === "OK"){
                                this.setState({fileCopied:true});
                                this.convertGLB();
                         }else{
                            this.setState({fileCopied:false});
                            this.setState({isProgressBar:false});
                            alert("Something Went Wrong Re-try!");
                        }
                    })
                    .catch( (err) => {
                        console.log("From makedir : "); 
                        alert("Something Went Wrong Re-try! - make Dir");
                        this.setState({isProgressBar:false});
                    });
                }
            })
            .catch( (err) => {
                alert("Upload a Valid File!");
            });
        }else{
            alert("Please Select a File!");
        }
    }
    */


    onUpdate = (event) =>{
        event.preventDefault();
        let request = {
            product_id: this.state.product_id,
            category_id:this.state.category_id,
            name: this.state.productName,
            description: this.state.productDescription,
            quantity:this.state.quantity,
            price: this.state.price,
            eoq: this.state.eoq,
            filename: this.state.filename
        }
        console.log(request);
        axios.post('/api/updateproduct', request)
        .then(res => {
            if(res.data.data === "OK"){
                alert("Product Updated Successfully!");
                this.setState({didRedirect:true},() => {
                  console.log("Callback func!");
                  this.fileRedirect();  
                }); 
            }else{ alert(res.data.data); }
        }).catch(err => {
          console.log(err);
          alert("Something went wrong, please try again!");
        });
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
                              <h3><FontAwesomeIcon id="formicon" icon={faEdit} style={{fontSize:"30px"}} />Update Product</h3>
                          </div>
                          <div className="mainpanel-form">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="formlabel">Category Name :</Form.Label>
                                    <Form.Control type="text" onChange={this.handleOnChangeProductName} value={this.state.productName} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label className="formlabel">Product Description:</Form.Label>
                                    <Form.Control type="text"as="textarea" className="form-textarea" rows={3} style={{resize:'none'}} onChange={this.handleOnChangeProductDescription} value={this.state.productDescription} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label className="formlabel">Category:</Form.Label>
                                    <br />
                                    <select onChange={this.handleOnChangeCategory}>
                                        <option value={this.state.category_id}>{this.state.productCategory}</option>
                                        {this.state.categories.map((category,index) => (
                                            <option key={index} value={category.id}>{category.categoryName}</option>
                                         ))}
                                    </select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                    <Form.Label className="formlabel">Price:</Form.Label>
                                    <Form.Control type="text" onChange={this.handleOnChangePrice} value={this.state.price} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                    <Form.Label className="formlabel">Quantity:</Form.Label>
                                    <Form.Control type="text" onChange={this.handleOnChangeQuantity} value={this.state.quantity} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                                    <Form.Label className="formlabel">EOQ:</Form.Label>
                                    <Form.Control type="text" onChange={this.handleOnChangeEOQ} value={this.state.eoq} />
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

export default withRouter(update_product);


