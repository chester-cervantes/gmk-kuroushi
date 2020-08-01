import React, { Component} from 'react';
import InfoSection from './InfoSection.js';
import InfoSectionTitles from './InfoSectionTitles.js';
import './lightbox.css';

import Gallery from './Gallery.js'

class Body extends Component {
	constructor() {
		super()
		this.state = {
			infos: InfoSectionTitles
		}
	}



	createImageSections(images, width, height) {
		return  <table >
					<tr>
					    <td>
							<a href={images} data-lightbox="image-1" data-title="My caption">
								<img 
									src={images}           
									style={{
										height: 600,
										width: 600
									}}
								/>
							</a>
							
						</td>
					    <td>
							<img 
								src={images}           
								style={{
									height: 600,
									width: 600
								}}
							/>
						</td>
					</tr>
				</table>
	}

	createSections() {
		const infoSectionComponents = InfoSectionTitles.map(data => 
			<InfoSection 
				key={data.id}
				title={data.title}
			>
			{
				data.type == "text" &&
				<p>
					Thank you for visiting our spacecraft!
				</p>
			}
			{
				data.type == "image" &&
                <Gallery imgarr={data.images}/>
			}
			</InfoSection>
		)

		return infoSectionComponents;
	}

	render() {
		const sections = this.createSections();
		return (

			<div className="body">
				<div class="parallax"></div>
				{sections}
			</div>
		)
	}
	/*const infoSectionComponents = InfoSectionTitles.map(data => 
		<InfoSection 
			key={data.id}
			title={data.title}
			text= "filler" 
		/>
	)
	
	return (
		<div className="body">
			<div class="parallax"></div>
			{infoSectionComponents}
			<div>
				<ImageSection
					title={"Kits"}
				/>
			</div>
		</div>
	);
	*/
}

export default Body;
