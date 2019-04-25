import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="hero">
        <img src={require("../Images/LogoTemp.jpg")} alt=""/>
        <nav>            
            <ul>
                <li><Link to ="/Contact">Contact</Link></li>
                <li><Link to ="/About">About Me</Link></li>
                <li><Link to ="/Work">My Work</Link></li>
                <li><Link to ="/">Home</Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;