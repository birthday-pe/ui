import React from 'react';
import { Link } from 'react-router-dom';
import logo from  './../../../src/assets/logo.webp'

function NavigationMobile(props) {

    const { user, authenticated } = props;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100vw', background: 'white', marginLeft: '-15px', position: 'fixed', top: '0px', padding: '8px 0px', zIndex: '9999'}} align="left">
            <Link to="/" 
         style={{ padding: '2px 15px'}}
          >
            <img style={{width: '120px', transform: 'translate(-7px, 5px)'}} src={logo}/>
          </Link>


          {/* {authenticated === null ? null :<Link to="/profile"><img src={user?.photoURL ? user.photoURL : 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'} style={{width: '37px', height: '37px', borderRadius: '50%', marginBottom: '-7px', marginRight: '15px'}}></img></Link> } */}
        </div>
    );
}

export default NavigationMobile;