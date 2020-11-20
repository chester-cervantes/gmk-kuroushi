import React from 'react';

import FadeInSection from "./FadeInSection";
import 'react-image-lightbox/style.css';
import './Image.css';
import {SRLWrapper} from 'simple-react-lightbox';

function Renders() {
    function createTable() {
        const rows = [];

        let cols = [];
        cols.push(<li className="image-container">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/gmkkurogewagyuiron165.png')}/>
                <div className="middle">
                    <div className="text">{"Iron165 by Smith + Rune"} </div>
                </div>
            </FadeInSection>
        </li>);
        cols.push(<li className="image-container">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/04.png')}/>
                <div className="middle">
                    <div className="text">{"Iron165 by Smith + Rune"} </div>
                </div>
            </FadeInSection>
        </li>);
        rows.push(<ul>{cols}</ul>);

        cols = [];
        cols.push(<li className="image-container">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/gmkkurogewagyuu80.png')}/>
                <div className="middle">
                    <div className="text">{"U80 by RAMA"} </div>
                </div>
            </FadeInSection>
        </li>);
        cols.push(<li className="image-container">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/gmkkurogewagyutgr910.png')}/>
                <div className="middle">
                    <div className="text">{"TGR 910 by Yuktsi"} </div>
                </div>
            </FadeInSection>
        </li>);
        rows.push(<ul>{cols}</ul>);

        cols = [];
        cols.push(<li className="image-container">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/05.png')}/>
                <div className="middle">
                    <div className="text">{"Dawn by crykn"} </div>
                </div>
            </FadeInSection>
        </li>);
        cols.push(<li className="image-container">
            <FadeInSection>
                <img
                    className="img-border"
                    src={require('../images/06.png')}/>
                <div className="middle">
                    <div className="text">{"Dawn by crykn"} </div>
                </div>
            </FadeInSection>
        </li>);
        rows.push(<ul>{cols}</ul>);


        return rows;
    }

    return (
        <div className="image-gallery">
            <SRLWrapper>
                {createTable()}
            </SRLWrapper>
        </div>
    )
}


export default Renders;