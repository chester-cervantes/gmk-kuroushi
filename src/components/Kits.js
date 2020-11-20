import React, {useState} from 'react';

import Modal from 'react-modal';
import FadeInSection from "./FadeInSection";
import 'react-image-lightbox/style.css';
import './Image.css';
import {SRLWrapper} from 'simple-react-lightbox';

Modal.setAppElement('#root');

function Kits() {

    function createTable() {
        const rows = [];
        rows.push(<div className="image-container render">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/kit-baseoriginalv2.png')}/>
                <div className="middle">
                    <div className="text">{"Base Kit"} </div>
                </div>
            </FadeInSection>
        </div>);
        rows.push(<div className="image-container render">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/gmkkurogewagyunoveltykit.png')}/>
                <div className="middle">
                    <div className="text"> {"Novelty Kit"} </div>
                </div>
            </FadeInSection>
        </div>);
        rows.push(<div className="image-container render">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/gmkkurogewagyuspacebarkit.png')}/>
                <div className="middle">
                    <div className="text">{"Spacebar Kit"} </div>
                </div>
            </FadeInSection>
        </div>);
        return rows;
    }

    return (
        <div className="image-gallery">
            <FadeInSection>
                <SRLWrapper>
                    {createTable()}
                </SRLWrapper>
            </FadeInSection>
        </div>
    )
}


export default Kits;