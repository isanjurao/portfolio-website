import "./App.css"
import Topbar from './compound/Topbar';
import Intro from './compound/Intro';
import Portfolio from './compound/Portfolio';
import Menu from './compound/Menu';
import Contact from './compound/Contact';
import Calculator from "./compound/Calculator.jsx";
import Flipkart from "./compound/Flipkart";

import {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [menuOpen,setmenuOpen] = useState()
  return (
    <Router>
      
    <Switch>
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      
      <div className="section">
      <Route exact path="/">
          <Intro/> 
          </Route>
          <Route exact path="/portfolio">
           <Portfolio/> 
           </Route>
           <Route exact path="/calculator">
           <Calculator/> 
           </Route>
           <Route exact path="/flipkart">
           <Flipkart/> 
           </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>

    </div>  
        </Switch>
    </Router>


  );
}

export default App;
