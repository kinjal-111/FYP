import React from 'react';
import './getstarted.styles.scss'
import { Link } from 'react-router-dom'; 

const Header = () =>  {
    return(
        <section id="getstarted">
            <div className="getstarted-container">
                <div className="title-container">
                    <h2>Get Started</h2>
                    <hr className="hr-style"/>
                </div>
                <div className="text-container">
                    <h3 className="text-small"> Upload your 3d files in any of the compatible formats to our platform, hit the upload button, and our backend Algorithm will take care of the rest. Do you have 3D model files for your products but don't know where to find them? There is no need to be concerned. Please contact us, and one of our 3D engineers will assist you in creating a digital 3D model of your product.</h3> 
                    
                    
                </div>
                <div className="btn-section">
                    <a href="/login">
                        <button className="get-started">Get Started</button>
                    </a>
                </div>
            </div>
        </section>
    )
    
}

export default Header;