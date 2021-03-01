import 'style.scss';
import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (<div id="header">
      <NavLink to="/" className="link">Home</NavLink>
  <NavLink to='/about' className="link">About</NavLink> 
<NavLink to='/projects' className="link">Projects</NavLink>
 </div>
  );
}