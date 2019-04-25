import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="hero">
        <img src={require("../Images/LogoTemp.jpg")} alt=""/>
        <nav>            
            <ul>
                <li><a>Home</a></li>
                <li><a>About Me</a></li>
                <li><a>My Work</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;