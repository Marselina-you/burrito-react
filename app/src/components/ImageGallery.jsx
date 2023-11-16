import React from 'react';
const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));


const ImageGallery = () => {
    return (
        <div>
         <div>
      {imageList.map((image, index) => (
        <img key={index} src={image.default} alt={`p-${index}`} />
      ))}
    </div>   
        </div>
    );
};



export default ImageGallery;