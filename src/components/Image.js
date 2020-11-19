// import React, {useState} from 'react';
//
// import Modal from 'react-modal';
// import 'react-image-lightbox/style.css';
// import './Image.css';
// import { SRLWrapper } from 'simple-react-lightbox';
//
// Modal.setAppElement('#root');
//
// function Image(props) {
//     const imageCount = props.images.length;
//     const images = props.images;
//
//     function createTable(images) {
//         const COL_LENGTH = 2;
//         const rows = [];
//         for (let i = 0; i < imageCount / COL_LENGTH; i++) {
//             const cols = [];
//             for (let j = 0; j < COL_LENGTH; j++) {
//                 let index = i * COL_LENGTH + j;
//                 console.log("index = ", index);
//                 if (index < imageCount) {
//                     cols.push(<li className="image-container">
//                         <img
//                             className="img-border"
//                             src={images[index].image}/>
//                         <div className="middle">
//                             <div className="text"> {images[index].image} {index} {images[index].title}</div>
//                         </div>
//                     </li>);
//                 }
//             }
//             rows.push(<ul>{cols}</ul>)
//         }
//         return rows;
//     }
//
//     return (
//         <div className="image-gallery">
//             <SRLWrapper>
//                 {createTable(images)}
//             </SRLWrapper>
//         </div>
//     )
// }
//
//
// export default Image;