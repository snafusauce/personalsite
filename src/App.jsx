import './App.scss';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from './components/portfolio/Portfolio';
import Test from './components/test/Test';
import Contact from './components/contact/Contact';
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Works from "./components/works/Works"



function App() {
  const [menuOpen,setMenuOpen] = useState(false)

//window.addEventListener('scroll',changeBackground);

  return (
  <div className="App">
  
  <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
  <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>

  <div className="sections">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Test/>
    <Contact/>
  </div>
  </div>
    
  );
}

export default App;
