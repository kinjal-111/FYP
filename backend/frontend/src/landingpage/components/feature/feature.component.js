import React from 'react';
import './feature.styles.scss';
import {Card,Container,Row,Col} from "react-bootstrap";
import homeImg from '../../assets/homeImg.png';
import img1 from '../../assets/subscription.png';
import img2 from '../../assets/dashboard.png';
import img3 from '../../assets/globe.png';
import img4 from '../../assets/file.png';
import img5 from '../../assets/multiple.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Feature extends React.Component{
//const Feature = () => {
    constructor(props){
        super(props);
        this.state = {
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        }
    }

    render(){
    return (
        <section id="features">
            <div className="feature-container">
                <div className="title-container">
                    <h2>Features</h2>
                    <hr className="hr-style" />
                </div>
                <div>
                <Container>
                	<Row>
	                	<Col md="12">
		                	<div className='slider'>
			                    <OwlCarousel className='owl-theme' autoplay loop margin={10}>
			                        <div className='item'>
			                            <div className='feature-img'>
			                                <img src={img1}/>
			                            </div>
			                            <div className='text'>
			                                <p>Only authorized users who have already registered can upload files.</p>
			                            </div>
			                        </div>
			                        <div className='item'>
			                            <div className='feature-img'>
			                                <img src={img2}/>
			                            </div>
			                            <div className='text'>
			                                <p>This website will take 3D files of .dae format as input and convert it to standardized format (.glb).
											</p>
			                            </div>
			                        </div>
			                        <div className='item'>
			                            <div className='feature-img'>
			                                <img src={img3}/>
			                            </div>
			                            <div className='text'>
			                                <p>This converted file can be displayed on the website.
											</p>
			                            </div>
			                        </div>
			                        <div className='item'>
			                            <div className='feature-img'>
			                                <img src={img4}/>
			                            </div>
			                            <div className='text'>
			                                <p>This file can be viewed in AR on conversion.</p>
			                            </div>
			                        </div>
			                        <div className='item'>
			                            <div className='feature-img'>
			                                <img src={img5}/>
			                            </div>
			                            <div className='text'>
			                                <p>It’s a user-friendly website which can be used by any end users.</p>
			                            </div>
			                        </div>
			                    </OwlCarousel>
			                </div>
		                </Col>
	                </Row>
	            </Container>

	                {/* <Container>
		                <Row>
		                    <Col md="6" className="card-outer">
		                        <div className="contain-card">
		                            <Card style={{ width: '25rem' }} className="card-card">
		                            <div className="contain-card-img">
		                                    <Card.Img variant="top" src={img2} style={{width:"180px",height:"140px"}} />
		                                </div>
		                                <Card.Body>
		                                    <Card.Text className="container">
		                                        <p className="para">No Coding Experience required</p>
		                                        <br />
		                                    </Card.Text>
		                                </Card.Body>
		                            </Card>
		                        </div>
		                    </Col>
		                    <Col md="6" className="card-outer">
		                        <div className="contain-card">
		                            <Card style={{ width: '25rem' }} className="card-card">
		                            <div className="contain-card-img">
		                                    <Card.Img variant="top" src={img3} style={{width:"140px",height:"140px"}} />
		                                </div>
		                                <Card.Body>
		                                    <Card.Text className="container">
		                                        <p className="para">Completely web driven</p>
		                                        <br />
		                                    </Card.Text>
		                                </Card.Body>
		                            </Card>
		                        </div>
		                    </Col>
		                    <Col md="6" className="card-outer" style={{}}>
		                        <div className="contain-card">
		                            <Card style={{ width: '25rem' }} className="card-card">
		                                <div className="contain-card-img">
		                                    <Card.Img variant="top" src={img4} style={{width:"140px",height:"140px"}} />
		                                </div>
		                                <Card.Body>
		                                    <Card.Text className="container">
		                                        <p className="para">Supports all major browsers</p>
		                                        <br />
		                                    </Card.Text>
		                                </Card.Body>
		                            </Card>
		                        </div>
		                    </Col>
		                    <Col md="6" className="card-outer">
		                        <div className="contain-card">
		                            <Card style={{ width: '25rem' }} className="card-card">
		                            <div className="contain-card-img">
		                                    <Card.Img variant="top" src={img5} style={{width:"140px",height:"140px"}} />
		                                </div>
		                                <Card.Body>
		                                    <Card.Text className="container">
		                                        <p className="para">Works on all mobile devices* which supports AR</p>
		                                    </Card.Text>
		                                </Card.Body>
		                            </Card>
		                        </div>
		                    </Col>
		                </Row>
	                </Container> */}
                </div>
        
            </div>

        </section>
    )
}
}
export default Feature;

