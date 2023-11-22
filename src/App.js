import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import AboutUs from './components/AboutUs.tsx';
import Projects from './components/Projects.tsx';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import backgroundImage from './img/ektiren-background.jpg'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import {BackgroundDiv, BackgroundTextDiv, BackgroundTextHead, BackgroundTextExplanation} from './components/StyledElements.tsx';
import Services from './components/Services.tsx';
import Footer from './components/Footer.tsx';

const links = ['home-page', 'about-us-page', 'services-page', 'project-page', 'contact-page',];
function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;
  return (
    <div id='home-page' className="App">
      <Navbar style={{zIndex:'3'}} links={links}></Navbar>
      <div style={{height: '100vh', position: 'relative', overflow: 'hidden', marginBottom: '20px'}}>
        <BackgroundDiv className='home-page-backgroud-div'>
          <div class="dotted-img"></div>
          <img className='home-page-backgroud-image' src={backgroundImage}></img>
        </BackgroundDiv>
        <BackgroundTextDiv className='home-page-background-texts'>
          <BackgroundTextHead>Ektiren İnşaat</BackgroundTextHead>
          <BackgroundTextExplanation>Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac purus sit amet fermentum vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. </BackgroundTextExplanation>
          <Button href='#about-us-page' style={{backgroundColor: "rgba(183,55,40,255)", color: 'white',paddingLeft: '20px', paddingRight: '20px'}} >
            Daha Fazla Bilgi »
          </Button>
        </BackgroundTextDiv>

      </div>
      <div id='about-us-page'></div>
      <AboutUs ></AboutUs>
      <div id='services-page'></div>
      <Projects></Projects>
      <div id='project-page'></div>
      <Services ></Services>
      <div id='contact-page' style={{margin:'0', padding:'0', marginBottom: '35px'}}></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
