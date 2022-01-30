import "./menu.css"

import React from 'react';
import { Link } from "react-router-dom";

export default function menu({menuOpen,setmenuOpen}) {
  return <div className={"menu " +  (menuOpen &&  "active")}>
      <ul>
          <li onClick={()=>setmenuOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={()=>setmenuOpen(false)}><Link to="/portfolio">Portfolio</Link></li>
          <li onClick={()=>setmenuOpen(false)}><Link to="/contact">Contact</Link></li>
      </ul>
  </div>;
}


