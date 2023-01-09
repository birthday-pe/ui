import React from 'react';

function Card(props) {
    return (
        <div style={{
            padding: '15px 15px',
            width: '28vw',
            textAlign: 'left',
            background: '#e9ecef',
            opacity: props.dummy === true ? 0 : 1
        }}>
            {props.children}
        </div>
    );
}

export default Card;