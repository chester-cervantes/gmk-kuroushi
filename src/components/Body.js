import React, {Component} from 'react';
import InfoSection from './InfoSection.js';
import InfoSectionTitles from './InfoSectionTitles.js';

import Renders from './Renders.js';
import Kits from './Kits.js';
import Geekhack from './Geekhack.js';
import './Body.css';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            infos: InfoSectionTitles
        }
    }

    createSections() {
        return InfoSectionTitles.map(data =>
            <InfoSection
                id={data.id}
                title={data.title}
                type={data.type}
            >
                {
                    data.type === "text" &&
                    <p>
                        {data.body}
                    </p>
                }
                {
                    data.type === "renders" &&
                    <Renders />
                }
                {
                    data.type === "kits" &&
                    <Kits />
                }
                {
                    data.type === "geekhack" &&
                    <Geekhack link={data.body}/>
                }
            </InfoSection>
        );
    }

    render() {
        const sections = this.createSections();
        return (
            <main>
                {sections}
                <br/>
            </main>
        )
    }

}

export default Body;
