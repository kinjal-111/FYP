import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar,Nav,NavDropdown,Container,Row,Col,Card,Button} from 'react-bootstrap'; 
import { faCopyright,faCartArrowDown,faHeart,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s1 from './assets/images/s1.jpg';
import s2 from './assets/images/s2.jpg';
import s3 from './assets/images/s3.jpg';
import s4 from './assets/images/s4.jpg';
import e2 from './assets/images/e2.jpg';
import e3 from './assets/images/e3.jpg';
import f1 from './assets/images/f1.jpg';
import f2 from './assets/images/f2.jpg';
import chair from './assets/images/chair.glb';
import chairUsdz from './assets/images/chair.usdz';
import './assets/css/style.css';
import '../admin/assets/css/header.scss';
import './assets/css/footer.scss';

class furnishthegreyspace extends React.Component{

    render(){
        const {history} = this.props;
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        // const hoursMinSecs = { hours : 11, minutes : 12, seconds : 60 } ;
        const renderer = ({ hours = 11, minutes = 12, seconds = 60 }) => (
            <span>{zeroPad(hours)}h :{zeroPad(minutes)}m :{zeroPad(seconds)}s</span>
        );
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
                                <Nav.Link href="/furnishthegreyspace/electronics">Electronics</Nav.Link>
                                <Nav.Link href="/furnishthegreyspace/furniture">Furniture</Nav.Link>
                                <Nav.Link href="/furnishthegreyspace/showpiece">Showpiece</Nav.Link>
                                <Nav.Link href="/furnishthegreyspace/contactus">Contact Us</Nav.Link>
                                <div className="navicon">
                                    <a href="#" className="navbar-icon"><FontAwesomeIcon id="wishlist-icon" icon={faHeart}/></a>
                                    <a href="#" className="navbar-icon"><FontAwesomeIcon id="cart-icon" icon={faCartArrowDown}/></a>
                                </div>
                                <Button type="button" className="btn-logout">Log In</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <section id="home">
                     <Container fluid className="home-container">
                            <Row>
                                <Col md={6}>               
                                    <div className="image-container">
                                        <model-viewer className="viewer" style={{height:"470px",width:"100%",backgroundColor:"#17171A!important"}} src={chair} ios-src={chairUsdz} ar alt='A 3D model of a chair' camera-orbit="-90deg" auto-rotate='' camera-controls='' background-color='#455A64'></model-viewer>
                                        
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="text-container">
                                        
                                        <p className="text">Best deals on furnitures, showpiece and electronics item.</p> 
                                        <h2 style={{color:"#585858", marginBottom:"20px"}}>
                                                Season Sale <span style={{color:"#007bff",fontWeight:"800",fontSize:"40px",margin:"6px"}}>|</span> 
                                                Special Offers <span style={{color:"#007bff",fontWeight:"800",fontSize:"40px",margin:"6px"}}>|</span> Get 20% Dicount
                                        </h2>
                                        <div className="text-small">So what are you waiting for? <strong>Order now!!</strong></div>
                                        <p style={{fontSize:"20px",fontWeight:"600",color:"#808080"}}>SPECIAL DIWALI OFFERS ENDS IN
                                         <span style={{fontSize:"35px",color:"#007bff",margin:"20px"}}><Countdown date={Date.now() + 1000000000} renderer={renderer} />
                                        </span></p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                </section>

                <section id="slider">
                    <Container fluid>
                        <Row>
                            <Col md={12}>
                                <h2> Electronics</h2>
                                <hr/>
                                <Slider {...settings} className="slider">
                                    <div className="img-slider">
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card">
                                                <div className="contain-card-img">
                                                    <Card.Img variant="center" src={s2}  />
                                                </div>
                                                <Card.Body>
                                                    <Card.Text className="container">
                                                        <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                        <p className="para">From ₹ 2,100</p>
                                                        <p className="smallpara">Zauri, Homefull</p>
                                                        <br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card">
                                                <div className="contain-card-img">
                                                    <Card.Img variant="center" src={s2}  />
                                                </div>
                                                <Card.Body>
                                                    <Card.Text className="container">
                                                        <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                        <p className="para">From ₹ 2,100</p>
                                                        <p className="smallpara">Zauri, Homefull</p>
                                                        <br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card">
                                                <div className="contain-card-img">
                                                    <Card.Img variant="center" src={s2}  />
                                                </div>
                                                <Card.Body>
                                                    <Card.Text className="container">
                                                        <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                        <p className="para">From ₹ 2,100</p>
                                                        <p className="smallpara">Zauri, Homefull</p>
                                                        <br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card">
                                                <div className="contain-card-img">
                                                    <Card.Img variant="center" src={s2}  />
                                                </div>
                                                <Card.Body>
                                                    <Card.Text className="container">
                                                        <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                        <p className="para">From ₹ 2,100</p>
                                                        <p className="smallpara">Zauri, Homefull</p>
                                                        <br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card">
                                                <div className="contain-card-img">
                                                    <Card.Img variant="center" src={s2}  />
                                                </div>
                                                <Card.Body>
                                                    <Card.Text className="container">
                                                        <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                        <p className="para">From ₹ 2,100</p>
                                                        <p className="smallpara">Zauri, Homefull</p>
                                                        <br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card">
                                                <div className="contain-card-img">
                                                    <Card.Img variant="center" src={s2}  />
                                                </div>
                                                <Card.Body>
                                                    <Card.Text className="container">
                                                        <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                        <p className="para">From ₹ 2,100</p>
                                                        <p className="smallpara">Zauri, Homefull</p>
                                                        <br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card">
                                                <div className="contain-card-img">
                                                    <Card.Img variant="center" src={s2}  />
                                                </div>
                                                <Card.Body>
                                                    <Card.Text className="container">
                                                        <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                        <p className="para">From ₹ 2,100</p>
                                                        <p className="smallpara">Zauri, Homefull</p>
                                                        <br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                  </div>

                                    <div>
                                        <a href="/furnishthegreyspace/product">
                                            <Card className="card-card" >
                                                <strong style={{fontSize:"30px",marginTop:"140px"}}>View More...</strong>
                                                <a href="customer/electronics"><FontAwesomeIcon id="wishlist-icon" style={{width:"60px",height:"70px",color:"#007bff",margin:"10px",paddingRight:"20px"}} icon={faArrowRight}/></a>
                                            </Card>
                                        </a>
                                  </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="features">
                    <Container fluid>
                        <Row>
                            <Col md={12}>
                                <h2>Furniture</h2>
                                <hr className="hr-style" />
                                <Row>
                                    <Col md="3" className="card-outer" >
                                        <div className="contain-card" >
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <div className="contain-card-img">
                                                        <Card.Img variant="center" src={s3} width="250px!important" />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                            <p className="para">From ₹ 2,100</p>
                                                            <p className="smallpara">Zauri, Homefull</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md="3" className="card-outer">
                                        <div className="contain-card" >
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <div className="contain-card-img">
                                                        <Card.Img variant="center" src={s3} width="250px!important" />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                            <p className="para">From ₹ 2,100</p>
                                                            <p className="smallpara">Zauri, Homefull</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md="3" className="card-outer">
                                        <div className="contain-card" >
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <div className="contain-card-img">
                                                        <Card.Img variant="center" src={s3} width="250px!important" />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                            <p className="para">From ₹ 2,100</p>
                                                            <p className="smallpara">Zauri, Homefull</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md="3" className="card-outer">
                                        <div className="contain-card" >
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <div className="contain-card-img">
                                                        <Card.Img variant="center" src={s3} width="250px!important" />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                            <p className="para">From ₹ 2,100</p>
                                                            <p className="smallpara">Zauri, Homefull</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                      <Col md="3" className="card-outer">
                                        <div className="contain-card" >
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <div className="contain-card-img">
                                                        <Card.Img variant="center" src={s3} width="250px!important" />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                            <p className="para">From ₹ 2,100</p>
                                                            <p className="smallpara">Zauri, Homefull</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md="3" className="card-outer">
                                        <div className="contain-card" >
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <div className="contain-card-img">
                                                        <Card.Img variant="center" src={s3} width="250px!important" />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                            <p className="para">From ₹ 2,100</p>
                                                            <p className="smallpara">Zauri, Homefull</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md="3" className="card-outer">
                                        <div className="contain-card" >
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <div className="contain-card-img">
                                                        <Card.Img variant="center" src={s3} width="250px!important" />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                            <p className="para">From ₹ 2,100</p>
                                                            <p className="smallpara">Zauri, Homefull</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md="3" className="card-outer">
                                        <div className="contain-card">
                                            <a href="/furnishthegreyspace/product">
                                                <Card className="card-card" style={{borderColor:"#007bff",borderWidth:"1px 1px 1px 6px"}}>
                                                    <strong style={{fontSize:"30px",marginTop:"140px"}}>View More...</strong>
                                                    <a href="customer/furniture"><FontAwesomeIcon id="wishlist-icon" style={{width:"60px",height:"70px",color:"#007bff",margin:"10px",paddingRight:"20px"}} icon={faArrowRight}/></a>
                                                </Card>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className="gallery">
                    <Container fluid>
                        <div className="title-container">
                            <h2>Showpiece</h2>
                            <hr className="hr-style" />
                        </div>
                        <Row>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card">
                                        <div className="contain-card-img">
                                            <Card.Img variant="center" src={s4}  />
                                        </div>
                                        <hr />
                                        <Card.Body>
                                            <Card.Text className="container">
                                                <strong style={{fontSize:"20px"}}>Wooden Tv units</strong>
                                                <p className="para">From ₹ 2,100</p>
                                                <p className="smallpara">Zauri, Homefull</p>
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="/furnishthegreyspace/product">
                                    <Card className="card-card" >
                                        <strong style={{fontSize:"30px",marginTop:"140px"}}>View More...</strong>
                                        <a href="customer/showpiece"><FontAwesomeIcon id="wishlist-icon" style={{width:"60px",height:"70px",color:"#007bff",margin:"10px",paddingRight:"20px"}} icon={faArrowRight}/></a>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <section id="footer">
                    <div className="footer-container">
                        <div className="logo-section">
                            <p className="copyrights"><FontAwesomeIcon id="uploadIcon" icon={faCopyright} style={{fontSize:"14px"}} /> 2021 | All rights reserved</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default withRouter(furnishthegreyspace);
