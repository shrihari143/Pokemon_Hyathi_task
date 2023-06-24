import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../styles/RegiserStyles.css";
import PokemonCard from "../components/PokemonCard";
import pokemon1Image from "../imges/i1.jpg";
import pokemon2Image from "../imges/i2.jpg";
import pokemon3Image from "../imges/i3.jpg";

const HomePage = () => {
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const pokemonData = [
    {
      name: "Pokémon 1",
      image: pokemon1Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/smp/SM226/",
    },
    {
      name: "pokemon2",
      image: pokemon2Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/dp7/45/",
    },
    {
      name: "Pokémon 3",
      image: pokemon3Image,
      adoptLink: "https://www.pokemon.com/us/pokedex/wartortle",
    },
    {
      name: "Pokémon 4",
      image: pokemon2Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/dp7/45/",
    },
    {
      name: "Pokémon 5",
      image: pokemon2Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/dp7/45/",
    },
    {
      name: "Pokémon 6",
      image: pokemon3Image,
      adoptLink: "https://www.pokemon.com/us/pokedex/wartortle",
    },
    {
      name: "Pokémon 7",
      image: pokemon1Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/smp/SM226/",
    },
    {
      name: "Pokémon 8",
      image: pokemon3Image,
      
      adoptLink: "https://www.pokemon.com/us/pokedex/wartortle",
    },
    {
      name: "Pokémon 9",
      image: pokemon2Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/dp7/45/",
    },
    {
      name: "Pokémon 10",
      image: pokemon1Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/smp/SM226/",
    },
    {
      name: "Pokémon 11",
      image: pokemon2Image,
      adoptLink: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/dp7/45/",
    },
    {
      name: "Pokémon 12",
      image: pokemon3Image,
      
      adoptLink: "https://www.pokemon.com/us/pokedex/wartortle",
    },

  ];

  return (
    <Layout className="home-page-container">
      <h1 className="Headings">Pokéverse</h1>
      <div className="pokemon-grid">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            adoptLink={pokemon.adoptLink}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
