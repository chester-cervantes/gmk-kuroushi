import React, {useState} from 'react';

import 'react-image-lightbox/style.css';
import './Geekhack.css';
import FadeInSection from "./FadeInSection";

function Geekhack(props) {
    return (
        <div className="geekhack-section">
            <form action={props.link}>
                <input id="geekhack-link" type="submit" value="VISIT THE GEEKHACK INTEREST CHECK HERE"/>
            </form>
        </div>
    )
}


export default Geekhack;