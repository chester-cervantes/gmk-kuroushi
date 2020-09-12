import React, {Component} from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Image.css';


class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            imageCount: this.props.images.length
        };
    }

    createTable(images) {
        const COL_LENGTH = 2;
        var rows = [];
        for (var i = 0; i < this.state.imageCount / COL_LENGTH; i++) {
            var cols = [];
            for (var j = 0; j < COL_LENGTH; j++) {
                let index = i * COL_LENGTH + j;
                if (index < this.state.imageCount) {
                    console.log(index)
                    console.log(images[index])
                    cols.push(<td className="image-container">
                        <img
                            className="img-border"
                            src={images[index].image}
                            width="640" height="360" onClick={() => this.setState({isOpen: true})}/>
                        <div className="middle">
                            <div className="text">{images[index].title}</div>
                        </div>
                    </td>);
                }
            }
            rows.push(<tr>{cols}</tr>)
        }
        return <table className="gallery-table">{rows}</table>;
    }

    render() {
        const images = this.props.images;
        console.log(images);
        const {photoIndex, isOpen} = this.state;

        return (
            <div>
                {this.createTable(images)}

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].image}
                        nextSrc={images[(photoIndex + 1) % images.length].image}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].image}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}


export default Image;