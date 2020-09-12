import React, { Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Image from './Image.js';

class ImgGallery extends Component {

    createSections() {
		return this.props.images.map(data =>
            <Image
                image={data}
            />
		);
	}

    render() {
        const images = [
         '//placekitten.com/1500/500',
         '//placekitten.com/4000/3000',
         '//placekitten.com/800/1200',
         '//placekitten.com/1500/1500',
        ];


        return (
            <div>
                <Image
                    images={images}
                />
            </div>
        );
    }


}


export default ImgGallery;