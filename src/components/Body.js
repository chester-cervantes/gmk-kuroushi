import React, {useRef}  from 'react';
import InfoSection from './InfoSection.js';
import InfoSectionTitles from './InfoSectionTitles.js';

import Renders from './Renders.js';
import Kits from './Kits.js';
import Geekhack from './Geekhack.js';
import Specifications from "./Specifications.js";
import './Body.css';

function Body() {
    // run this function from an event handler or an effect to execute scroll


    function createSections() {
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
                {
                    data.type === "specifications" &&
                    <Specifications specs={data.specs}/>
                }
            </InfoSection>
        );
    }

    const sections = createSections();

    return (
        <main id="scroll-here">
            <br/>
            {sections}
            <br/>
        </main>
    )


}

export default Body;
