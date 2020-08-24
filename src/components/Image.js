import React, { Component} from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Image.css';


class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const images = [
            '//placekitten.com/1500/500',
            '//placekitten.com/4000/3000',
            '//placekitten.com/800/1200',
            '//placekitten.com/1500/1500',
        ];
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <img src={images[0]}
                                 width="500" height="600" onClick={() => this.setState({ isOpen: true })}/>
                        </td>
                        <td>
                            <img src={images[1]}
                                 width="500" height="600" onClick={() => this.setState({ isOpen: true })}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={images[2]}
                                 width="500" height="600" onClick={() => this.setState({ isOpen: true })}/>
                        </td>
                        <td>
                            <img src={images[3]}
                                 width="500" height="600" onClick={() => this.setState({ isOpen: true })}/>
                        </td>
                    </tr>
                </table>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
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