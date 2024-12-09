// src/components/ImageContainer.jsx
import React from 'react';

const ImageContainer = ({ imageUrl, altText }) => (
  <div className="image-container">
    <img src={imageUrl} alt={altText} width="200" />
  </div>
);

export default ImageContainer;
