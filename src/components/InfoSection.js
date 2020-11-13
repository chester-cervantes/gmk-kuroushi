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
        console.log(this.props.id)
        console.log("this.props.key")
        return (
            <section className="grid" id={`section-${this.props.title.toLowerCase()}`}>
                <div className="content-wrap">
                    <h1>{this.props.title} {this.props.id}</h1>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default InfoSection;
