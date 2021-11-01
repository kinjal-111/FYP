import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Toast from 'react-bootstrap/Toast';
import '@google/model-viewer';
import QRCode from "react-weblineindia-qrcode-generator";
import './css/style.css';
import {saveFile, getFilename, delSRCFiles} from './helper/filesapicall';
import sbr from './images/sbr.glb';
import table from './images/TableExample.glb';

import axios from 'axios';
class DisplayGLB extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			glbFilePath:"", 
			getQR:false,			
			didRedirect:false
		};
	}
	componentDidMount = () => {
		console.log("Inside componentDidMount");
		getFilename().then( (resData) => {
			console.log(resData);
			var glbpath = './test/'+resData+'.glb';
			this.setState({glbFilePath: glbpath}); 
			console.log("GLTFPath : " +this.state.glbFilePath);
		}).catch( (err) => {
			alert("Unable to fetch file");
			this.setState({didRedirect:true},() => {
				console.log("Callback func!");
				this.fileRedirect();	
			});
		});
		// saveFile().then( (res) => {
		// 	console.log("save file res data" + res.statusText);
		// 	if(res.statusText === "OK"){
		// 		getFilename().then( (resData) => {
		// 			console.log(resData);
		// 			var glbpath = './test/'+resData+'.glb';
		// 			this.setState({glbFilePath: glbpath}); 
		// 			console.log("GLTFPath : " +this.state.glbFilePath);
		// 		}).catch( (err) => {
		// 			alert("Unable to fetch file");
		// 		});
		// 	}
		// 	else{
		// 		alert("Unable to display!");		
		// 		this.setState({didRedirect:true},() => {
		// 			console.log("Callback func!");
		// 			this.fileRedirect();	
		// 		});	 
		// 	}
		// }).catch( (err) => {
		// 	console.log(err);
		// 	alert("Something went wrong! Retry");
		// 	this.setState({didRedirect:true},() => {
		// 		console.log("Callback func!");
		// 		this.fileRedirect();	
		// 	});	 
		// })
		
		
	};
	componentWillUnmount = () => {
		console.log("Inside display unmount!");
		delSRCFiles().then( (response) => {
			console.log("Response Status:" +response);
		})
		.catch( (err) => console.log("GLB File error: " + err));
	};

	convertUSDZ = () => {
		console.log("Inside USDZ convert");
		axios.get('/api/file/convertToUSDZ').then( (response) =>{
			console.log("inside convertUSDZ : " + response.statusText);
			if(response.statusText === "OK"){
				this.toggleProgressBar();
				this.interval = setInterval(() => {
				    if(this.state.number !== 0) {
				    	console.log("Inside Interval");
				        this.setState({number: this.state.number - 1 });
				    }else{
				    	clearInterval(this.interval);
				    	axios.get('/api/file/saveusdz').then( (res) => {
							console.log("Inside saveUSDZ: " + res.statusText);
							if(res.statusText === "OK"){
								axios.get('/api/file/filename').then( (resData) => {
									if(resData.statusText === "OK"){
										console.log(resData.data.data);
										var fileName = resData.data.data;
										var usdzpath = './test/'+fileName+'.usdz';
										this.setState({usdzFilePath: usdzpath}); 
										console.log("USDZPath : " +this.state.usdzFilePath);	
										this.toggleProgressBar();
									}else{
										alert("Unable to fetch file");
									}
								}).catch( (err) => {
									this.toggleProgressBar();
									alert("Unable to fetch file");
								});			
							}else{

							}
						}).catch ( (err) => {
							this.toggleProgressBar();
							alert("Unable to fetch file");
						});
				    }
				}, 1000);
			}
			
		}).catch ( (err) => {
			this.toggleProgressBar();
			console.log("File Conversion error: "+err);
			alert("Something Went Wrong Re-try!");
		});
	}
	fileRedirect = () =>{
		if(this.state.didRedirect){
    		return this.props.history.push('/');
		}
	};
	toggleProgressBar = () => {
		console.log("Inside TogglePB");
		if(this.state.isProgressBar){
			this.setState({isProgressBar:false});
		}else{
			this.setState({isProgressBar:true});
		}
	}
	getProgressBar = () =>{
		if(this.state.isProgressBar){
			return(
				<div style={{backgroundColor:'rgba(0,0,0,0.6)',position: 'absolute',top:'0%',left:'0%', height:'100%',width:"100%",zIndex:"9999"}}>
					<Button style={{backgroundColor:'rgba(0,0,0,0.0)',color:'#FFF',border:'none', position:'absolute',top:'2%',right:'2%'}} onClick={this.toggleProgressBar}>X</Button>
					<div className="overlay">
						<div className="loader"></div>
					</div>		
				</div>
			);
		}
	}
	toggleQRToast = () => {
		if(this.state.getQR){
			this.setState({getQR:false});
		}else{
			this.setState({getQR:true});
		}
	}
	getQRCode = () =>{
		if(this.state.getQR){
			return(
				<div style={{backgroundColor:'rgba(0,0,0,0.6)',position: 'absolute',top:'0%',left:'0%', height:'100%',width:"100%",zIndex:"9999"}}>
					<Button style={{backgroundColor:'rgba(0,0,0,0.0)',color:'#FFF',border:'none', position:'absolute',top:'2%',right:'2%'}} onClick={this.toggleQRToast}>X</Button>
					<Toast style={{backgroundColor:'rgba(0,0,0,0.0)',boxShadow:'none',border:'none',height:'100%',position:'absolute',left:'35%',top:'10%'}}>
						<Toast.Body id="qrBody">
							<QRCode value="192.168.0.105:3000/filedisplay" />
							<hr style={{backgroundColor:'#FEFEFE'}}></hr>
							<a href="192.168.0.105:3000/filedisplay" style={{color:"#007BFF",letterSpacing:"2px",fontSize:"15px"}}><span>{window.location.href}</span></a>
						</Toast.Body>
					</Toast>
				</div>
			);
		}
		else{}
	}
	
	getGLBFilePath = () => {
		return this.state.glbFilePath;
	};
	getUSDZFilePath = () =>{
		return this.state.usdzFilePath;
	}
	
	downloadUSDZ = () => {
		if(this.state.usdzFilePath === ""){
			alert("No usdz file found, Create One!");
		}
	}
	downloadGLB = () => {
		if(this.state.glbFilePath === ""){
			alert("Wait for few seconds OR Reload the page!");
		}
	}
	
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
			  	<Container fluid="lg">
				  	<Row>
				    	<Col>
				    		<div style={{textAlign:"center",marginTop:"10px"}}>
							</div>
							<div style={{position:"relative",textAlign:"center",marginTop:"50px",border:"2px solid #007BFF"}}>
								{this.getQRCode()}
								{this.getProgressBar()}
								<model-viewer style={{height:"400px",width:"100%",backgroundColor:"#FFF"}} src={table} ios-src="" ar alt='A 3D model of a robot' auto-rotate='' camera-controls='' background-color='#455A64'></model-viewer>
								<Button variant="primary" type="button" onClick="" style={{margin:"0 15px",fontSize:"18px",letterSpacing:"1px",position:"absolute",right:"15%",bottom:"4.5%"}}>Share</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
		
		);
	}
}
export default withRouter(DisplayGLB);
