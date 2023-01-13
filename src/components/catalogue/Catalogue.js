import React from 'react';

function Catalogue(props) {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           <code><pre>{'if(user is admin){ show 2 tabs 1.current plan and 2. Explore plan options }'}</pre></code>
           <code><pre>{'if(user is not admin){ DO NOT SHOW THIS TAB-BUTTON IN NAVIGATION BAR}'}</pre></code>
        </div>
    );
}

export default Catalogue;