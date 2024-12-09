// src/components/BasicsInfo.jsx
import React from 'react';

const BasicsInfo = ({ weight, height }) => (
  <div className="basics-info">
    <div className="icon-color">
      <i className="fas fa-weight" style={{ marginRight: '5px' }}></i>
      {weight} kg
    </div>
    <div className="icon-color">
      <i className="fas fa-ruler-vertical" style={{ marginRight: '5px' }}></i>
      {height} m
    </div>
  </div>
);

export default BasicsInfo;
