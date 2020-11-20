import React from 'react';

import 'react-image-lightbox/style.css';
import './Image.css';


function Specifications(props) {
    return (
        <div className="image-gallery">
            <p>{props.body}</p>
            <p>{props.specs}</p>
        </div>
    )
}


export default Specifications;