import React from 'react';

import 'react-image-lightbox/style.css';
import './Geekhack.css';

function Geekhack(props) {
    return (
        <div className="geekhack-section">
            <a href={props.link} id="geekhack-link">VISIT THE GEEKHACK INTEREST CHECK HERE</a>
        </div>
    )
}


export default Geekhack;