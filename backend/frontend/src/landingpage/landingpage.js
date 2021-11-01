import './landingpage.css';
import Benefit from './components/benefit/benefit.component.js';
import Header from './components/header/header.component.js';
import Home from './components/home/home.component.js';
import Feature from './components/feature/feature.component.js';
import Howitworks from './components/howitworks/howitworks.js';
import Getstarted from './components/getstarted/getstarted.component.js';
import Footer from './components/footer/footer.component.js';
import { Container, Button, Link } from 'react-floating-action-button'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Benefit />
      <Feature />
      <Howitworks />
      <Getstarted />
      <Footer />
      <Container>
        <a href="/#" className="a-fab">
          <button className="floating-btn"><FontAwesomeIcon id="uploadIcon" icon={faArrowUp} style={{fontSize:"20px"}} /></button>
        </a>             
          
      </Container>
    </div>
    
  );
}

export default App;
        