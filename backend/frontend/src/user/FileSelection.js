import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/style.css';
import {saveFile,convertFile,saveImg,checkFile,makeDir,saveToSRC} from './helper/filesapicall';
import axios from 'axios';
class FileSelection extends React.Component{
	constructor(props){
		super(props);
		// Initially, no file is selected
		this.state= {
			selectedFile:null,
			selectedImg:null,
			fileCopied:false,
			isProgressBar:false,
			saveGLB:true,
			progressVal:0,
			number:10, 
			didRedirect:false
		};

	}
	componentWillUnmount(){

		console.log("Inside componentWillUnMount");
		clearInterval(this.interval);
	}
	onFileSelection = event => {
		this.setState({selectedFile: event.target.files[0]});
	}
	onImgSelection = event => {
		this.setState({selectedImg: event.target.files});
	}
	fileRedirect = () =>{
		if(this.state.didRedirect){
			console.log("About to Redirect!");
			return this.props.history.push('/filedisplay');
		}
	}
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

	convertUSDZ = () => {
		console.log("Inside USDZ convert");
		axios.get('/api/file/convertToUSDZ').then( (response) =>{
			console.log("USDZ : " +response.statusText);
			console.log("state num: "+ this.state.number);
			if(response.statusText === "OK"){
				this.interval = setInterval(() => {
				    if(this.state.number !==0) {
				        this.setState({number: this.state.number - 1 });
				    }else{
				    	clearInterval(this.interval);
				    	this.setState({isProgressBar:false});
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
			if(this.state.selectedFile != null){
				formData.append(
					"myFile",
					this.state.selectedFile,
					this.state.selectedFile.name
				);
				convertFile(formData).then( (res) => {
	    			console.log("data File Save from convertGLB: " +res.statusText);
	    			if(res.statusText === "OK"){
	    				this.interval = setInterval(() => {
						    if(this.state.number !==0) {
						        this.setState({number: this.state.number - 1 });
						        console.log("Number while interval : "+ this.state.number);
						    }else{
						    	clearInterval(this.interval);
						    	console.log("number : " + this.state.number);
						    	this.setState({isProgressBar:false});
						    	saveFile().then( (res) => {
									console.log("save file res data" + res.statusText);
									if(res.statusText === "OK"){
										this.setState({didRedirect:true},() => {
											console.log("Callback func!");
											this.fileRedirect();	
										});
									}
									else{
										alert("Something went wrong!"); 
									}
								}).catch( (err) => {
									console.log(err);
								})
									 
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
	fileUpload = (event) =>{
		event.target.disabled = true;
		event.preventDefault();
		var formData = new FormData();
		var formImg = new FormData();
		const config = {
	        headers: {
	            Accept: "application/json",
	            "Content-Type": "multipart/form-data"
	        }
	    };
		if(this.state.selectedFile != null){
			formData.append(
				"myFile",
				this.state.selectedFile,
				this.state.selectedFile.name
			);
			
			checkFile(formData).then( (res)=>{
				console.log("Check File response: " + res.statusText);
				
					this.toggleProgressBar();
				console.log("Res from Check" + res);
				// if(res === "InvalidFile"){
				// 	alert("Invalid File");
				// }
				if(res.statusText == "OK"){
					makeDir(formData).then( (response) =>{
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
	
	fileData = () =>{
		if(this.state.selectedFile){
			return(
				<div>
					<h2>File Details :</h2>
					<p>File Name: {this.state.selectedFile.name}</p>
					<p>File Type : 3D Object</p>
					<p>Last Modified :{this.state.selectedFile.lastModifiedDate.toDateString()}</p>
				</div>
			);
		}else{
			return(
				<div> 
            		<br /> 
            		<h4>Choose before Pressing the Upload button</h4> 
          		</div>
			);
		}
	};
	render(){
		const {history} = this.props;
		return(
		<>
		<Navbar bg="light" expand="lg" style={{position:'relative'}}>
          	<Navbar.Brand href="#home"><strong style={{color:"#007BFF"}}>3d Model</strong></Navbar.Brand>
          	<div style={{position:'absolute',right:'40px'}}>
          		<a href="/" style={{textDecoration:'none',fontSize:'17px',fontWeight:'400',color:'#007bff'}}>LOGOUT</a>
          	</div>
        </Navbar> 
			<div>
			  	<Container fluid="lg" className="upload-container">
				  	<Row>
				    	<Col>
							<div className="fileUpload">
								<div className="heading">
									<FontAwesomeIcon id="uploadIcon" icon={faCloudUploadAlt} style={{fontSize:"100px",color:"#007bff"}} />
								
									<hr />
								</div>
								<form>

									<div style={{textAlign:"center"}}>
										<label style={{color:"#222"}}>&nbsp;&nbsp;&nbsp;3D File:&nbsp;&nbsp;&nbsp;&nbsp;</label>
										<input type="file" required='' accept=".obj,.fbx,.dae,.glb" onChange={this.onFileSelection} style={{color:"#222",padding:"10px 0 35px"}}/>
										
										<div>
											<Button variant="primary" type="button" id="btn-submit"  onClick={(event) => this.fileUpload(event)}>Upload</Button>
										</div>
										<div style={{position:"relative"}}>
											{this.getProgressBar()}
										</div>						
									</div>
								</form>
							</div>
						</Col>
					</Row>
				</Container>
				<div>
					
				</div>
			</div>
		</>
		);
	}
}
export default withRouter(FileSelection);