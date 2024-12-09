// src/components/Header.jsx
import React from 'react';

const Header = ({ name, id }) => (
  <div className="header">
    <div className="pokemon-name">{name}</div>
    <div className="pokemon-id">#{id}</div>
  </div>
);

export default Header;
