import './App.scss';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from './components/portfolio/Portfolio';
import Test from './components/test/Test';
import Contact from './components/contact/Contact';
import { useState } from "react";
import Menu from "./components/menu/Menu";



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
  <div className="App">
  <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
  <Menu/>
  <Menu/>

  <div className="sections">
    <Intro/>
    <Portfolio/>
    <Test/>
    <Contact/>
  </div>
  </div>
    
  );
}

export default App;
