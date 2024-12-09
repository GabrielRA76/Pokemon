// src/components/PokemonSearch.jsx
import React, { useState } from 'react';

const PokemonSearch = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSearch = () => {
    if (pokemonName.trim() !== '') {
      onSearch(pokemonName.trim());
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Busca un Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default PokemonSearch;
