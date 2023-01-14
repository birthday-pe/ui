import React from 'react';
import { backgroundColor } from '../App';

function Loader(props) {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            marginLeft: '-15px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <i style={{fontSize: '35px', color: backgroundColor}} className="fa fa-spinner fa-spin"></i>
        </div>
    );
}

export default Loader;