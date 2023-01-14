import React from 'react';
import { Link } from 'react-router-dom';
import logo from  './../../../src/assets/logo.webp'

function NavigationMobile(props) {
    return (
        <div style={{width: '100vw', background: 'white', marginLeft: '-15px', position: 'fixed', top: '0px', padding: '8px 0px', zIndex: '9999'}} align="left">
            <Link to="/" 
         style={{ padding: '2px 15px'}}
          >
            <img style={{width: '120px', transform: 'translate(0px, 5px)'}} src={logo}/>
          </Link>
        </div>
    );
}

export default NavigationMobile;