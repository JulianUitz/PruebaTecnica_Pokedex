import React, {useState} from "react";
import { Pokemon } from "../models/Pokemon";
import "../styles/detailsmodal.css";


/// Modal component to display Pokemon details
///Se ven detalles del pokemon seleccionado

interface DetailsProps {
    pokemon: Pokemon;
    onClose: () => void;
}


//Colores asociados a cada tipo de pokemon
const typeColors: { [key: string]: string } = {
    fire: "#FF5733",
    water: "#339FFF",
    electric: "#FFD700",
    grass: "#4CAF50",
    ice: "#76D7EA",
    fighting: "#C70039",
    poison: "#9C27B0",
    ground: "#D4A76A",
    flying: "#BFD6FF",
    psychic: "#FF69B4",
    bug: "#8BC34A",
    rock: "#795548",
    ghost: "#6A5ACD",
    dragon: "#673AB7",
    dark: "#212121",
    steel: "#607D8B",
    fairy: "#F48FB1",
    normal: "#9E9E9E",
  };
  
  const Details: React.FC<DetailsProps> = ({ pokemon, onClose }) => {
    // Controla si se muestra la versión shiny del Pokémon.
    const [showShiny, setShowShiny] = useState(false);
  
    // Alterna entre el sprite normal y el shiny.
    const toggleShiny = () => {
      setShowShiny((prev) => !prev);
    };
  
    return (
      <div className="modal-overlay">
  
        <div className="modal-content">
  
          <h2>{pokemon.name.toUpperCase()}</h2>
  
          <div className="pokemon-image-container">
  
            <img
              className="pokemon-image"
              src={
                showShiny
                  ? pokemon.sprites.front_shiny
                  : pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />
  
            <div
              className={`shiny-star ${showShiny ? "active" : "inactive"}`}
              onClick={toggleShiny}
            >
              ★
            </div>
  
          </div>
  
          <p>
            <strong>#{pokemon.id}</strong>
          </p>
  
          <div className="types-container">
  
            {pokemon.types.map((t, index) => (
              <span
                key={index}
                className="type"
                style={{ backgroundColor: typeColors[t.type.name] || "#333" }}
              >
                {t.type.name.toUpperCase()}
              </span>
            ))}
  
          </div>
  
          <button onClick={onClose} className="close-button">
            Cerrar
          </button>
  
        </div>
        
      </div>
    );
  };
  
  export default Details;
  
