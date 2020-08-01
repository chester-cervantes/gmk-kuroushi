import React, { Component} from 'react';
import './InfoSection.css';


class InfoSection extends Component {
	constructor() {
		super()
		this.state = {
			infos: "test"
		}
	}
	render() {
		return (
			<div className="info-section">
				<h1>{this.props.title}</h1>
				{this.props.children}
			</div>
		);
	}
}

export default InfoSection;
