import React, { Component} from 'react';
import Tile from './Tile.js';
import InfoSection from './InfoSection.js';

class Gallery extends Component {
	this() {
		console.log(this.props.name)
		return (
			<InfoSection 
				key={this.props.id}
				title={this.props.name}
			/>
			)
	}
	render() {
		// Create tile for each item in data array
		// Pass data to each tile and assign a key
		return (
			<div className="tiles">
				{this.props.data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
		);
	}
}
export default Gallery;
