import React from 'react'; 
import Spinner from './fluid-loader (1).gif';

export default () => {
    return(
        <div>
            <img 
            src={Spinner} 
            style={{width: '200px', margin: 'auto', display: 'block'}}
            alt="loading..." />
        </div>
    )
}

