import React from 'react'; 
import logo  from '../../src/assets/logo.webp';


function Loader(props) {
    return (
        <div style={{
            position: 'fixed',
            top:'0px',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            marginLeft: '-15px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            zIndex: '99999999999'
        }}>
            <img style={{width: '200px', transform: 'translate(0px, 3px)'}} src={logo}/>
        </div>
    );
}

export default Loader;