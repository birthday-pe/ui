import React from 'react';

function Catalogue(props) {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            Catalogue
            <br/>
           <code><pre>{'if(user is admin[ check this from the Orgs collection ]){ show 2 tabs 2.current plan and 1. Explore plan options(with order sample option) }'}</pre></code>
           <code><pre>{'if(user is not admin){ DO NOT SHOW THIS TAB-BUTTON IN NAVIGATION BAR}'}</pre></code>
        </div>
    );
}

export default Catalogue;