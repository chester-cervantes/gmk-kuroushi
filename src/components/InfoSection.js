import React, {Component} from 'react';
import './InfoSection.css';


class InfoSection extends Component {
    constructor() {
        super();
        this.state = {
            infos: "test"
        }
    }

    render() {
        return (
            <section className="grid" id={`section-${this.props.title.toLowerCase()}`}>
                <div className="content-wrap">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default InfoSection;
