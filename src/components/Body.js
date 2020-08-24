import React, {Component} from 'react';
import InfoSection from './InfoSection.js';
import InfoSectionTitles from './InfoSectionTitles.js';

import ImgGallery from './ImgGallery.js';
import './Body.css';

class Body extends Component {
	constructor() {
		super();
		this.state = {
			infos: InfoSectionTitles
		}
	}


	createSections() {

		console.log("InfoSectionTitles[1].images = " + InfoSectionTitles[1].images);

		return InfoSectionTitles.map(data =>
			<InfoSection
				key={data.id}
				title={data.title}
			>
				{
					data.type === "text" &&
					<p>
						Thank you for visiting our spacecraft!
					</p>
				}
				{
					data.type === "image" &&
					<ImgGallery props={data.images}
					/>
				}
			</InfoSection>
		);
	}

	render() {
		const sections = this.createSections();
		return (
			<div className="body">
				{/*<div className="parallax"></div>*/}
				{sections}
			</div>
		)
	}

}

export default Body;
