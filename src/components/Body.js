import React, {Component} from 'react';
import InfoSection from './InfoSection.js';
import InfoSectionTitles from './InfoSectionTitles.js';

import Image from './Image.js';
import './Body.css';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            infos: InfoSectionTitles
        }
    }

    createSections() {
        const images = [
            '//placekitten.com/1500/500',
            '//placekitten.com/4000/3000',
            '//placekitten.com/800/1200',
            '//placekitten.com/1500/1500',
        ];
        console.log("InfoSectionTitles[1].images = " + InfoSectionTitles[1].id);

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
                    data.type === "image" &&
                    <Image images={data.images}
                    />
                }
            </InfoSection>
        );
    }

    render() {
        const sections = this.createSections();
        return (
            <main>
                {sections}
            </main>
        )
    }

}

export default Body;
