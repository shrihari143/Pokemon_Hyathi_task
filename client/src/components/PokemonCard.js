import React from "react";
import "../styles/PokemonCard.css";

const PokemonCard = ({ name, image, adoptLink }) => {
  return (
    <div className="pokemon-card">
      <img className="pokemon-image" src={image} alt={name} />
      <h3 className="pokemon-name">{name}</h3>
      <a className="adopt-button" href={adoptLink}>      
        Deatails
      </a>
    </div>
  );
};

export default PokemonCard;
