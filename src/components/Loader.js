import React from 'react';

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
            <i style={{fontSize: '35px', color: '#1a73e8'}} className="fa fa-spinner fa-spin"></i>
        </div>
    );
}

export default Loader;