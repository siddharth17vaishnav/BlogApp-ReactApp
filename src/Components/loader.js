import React from 'react';
import loadergif from '../img/loader.gif';

const loader = () => {
    return (
        <div>
            <div>
                <img src={loadergif} alt=""/>
                <div>Loading....</div>
            </div>
  </div>
    )
}

export default loader
