// src/App.jsx
import React, { useState } from 'react';
import './styles.css';
import PokemonSearch from './components/PokemonSearch';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import TypesContainer from './components/TypesContainer';
import BasicsInfo from './components/BasicsInfo';
import Description from './components/Description';
import BaseStats from './components/BaseStats';

const App = () => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          id: data.id,
          imageUrl: data.sprites.front_default,
          types: data.types.map((type) => type.type.name),
          weight: data.weight / 10,
          height: data.height / 10,
          description: `Este es un Pokémon de tipo ${data.types[0].type.name}.`,
          stats: data.stats.map((stat) => ({
            name: stat.stat.name.toUpperCase(),
            value: stat.base_stat,
          })),
        });
      })
      .catch((error) => console.error('Error al buscar Pokémon:', error));
  };

  return (
    <div className="app-container">
      <PokemonSearch onSearch={fetchPokemon} />
      {pokemon && (
        <div className="card">
          <Header name={pokemon.name} id={pokemon.id} />
          <ImageContainer imageUrl={pokemon.imageUrl} altText={pokemon.name} />
          <TypesContainer types={pokemon.types} />
          <BasicsInfo weight={pokemon.weight} height={pokemon.height} />
          <Description text={pokemon.description} />
          <BaseStats stats={pokemon.stats} />
        </div>
      )}
    </div>
  );
};

export default App;
