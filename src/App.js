
import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom'
 
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Home from './containers/home';
import Navbar from './components/navbar';
import ParticlesComponent from './utils.js/ParticlesComponent';


function App() {
 
  const location= useLocation();
  console.log(location);

  const renderParticleHomeCheck = location.pathname === "/"
  
  return (

    <div className="App">
    
    {
      renderParticleHomeCheck && <ParticlesComponent id="tsparticles"/>
    }
    
      <Navbar/>
    <div className="App__main-page-content">
    <Routes>
      <Route index path='/' element={<Home/>}></Route>
      <Route index path='/about' element={<About/>}></Route>
      <Route index path='/resume' element={<Resume/>}></Route>
      <Route index path='/portfolio' element={<Portfolio/>}></Route>
        
      <Route index path='/contact' element={<Contact/>}></Route>

      </Routes>

     
      </div>
      </div>
  );
}

export default App;
