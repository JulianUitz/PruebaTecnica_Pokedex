import React, { useState } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import PokemonDetailsModal from "./Details";
import "../styles/search.css";

const SearchPokemon: React.FC = () => {
  const {
    suggestions,
    searchSuggestions,
    fetchPokemonDetails,
    selectedPokemon,
    setSelectedPokemon,
  } = usePokemonSearch();

  const [input, setInput] = useState("");

  return (
    <div className="container">
      <h1 className="title">Busca tu Pokémon Favorito</h1>

      <div className="input-container">
        <input
          placeholder="Charizard, MewTwo, Pikachu..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            searchSuggestions(e.target.value);
          }}
        />

        {suggestions.length > 0 && (
          <ul className="dropdown">
            {suggestions.map((pokemon, index) => (
              <li
                key={index}
                onClick={() => {
                  fetchPokemonDetails(pokemon.name);
                  setInput("");
                  searchSuggestions("");
                }}
              >
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width="40"
                />
                <div>
                  <strong>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </strong>
                  <p style={{ margin: 0 }}>#{pokemon.id}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedPokemon && (
        <PokemonDetailsModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};

export default SearchPokemon;