import React from 'react';

import HomeIcon from './imgs/icon-home.svg';
import AboutIcon from './imgs/icon-info-circle.svg';
import LoginIcon from './imgs/icon-user-alt.svg';
import LogoutIcon from './imgs/icon-power-off.svg';
//import './NavMenu.css';


function About() {
render() {
    return (
      <div className="nav-menu-wrapper-holder">
        <div>
          <div></div>
          <div>
              
              <nav className="app-nav">
                
                        <img src={HomeIcon} alt="Home Icon" />
                        <h2>Home</h2>
                
                
                        <img src={AboutIcon} alt="Sobre Icon" />
                        <h2>Sobre</h2>
               
                <div ></div>
               
                        <img />
                        <h2>Login</h2>
               
               
                        <img  />
                        <h2>Sair</h2>
                
              </nav>
              
          </div>
          
        </div>
      </div>
    );
  };

  export default NavMenu;