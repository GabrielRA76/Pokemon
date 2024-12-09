// src/components/TypesContainer.jsx
import React from 'react';

const TypesContainer = ({ types }) => (
  <div className="types-container">
    {types.map((type, index) => (
      <div key={index} className={`type ${type.toLowerCase()}`}>
        {type}
      </div>
    ))}
  </div>
);

export default TypesContainer;
