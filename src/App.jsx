import PokemonCard from "./components/PokemonCard";
import Button from "./components/Button";
import React, { useState } from "react";

import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const PreviousButton = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const NextButton = () => {
    if (pokemonIndex < 4) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      {pokemonIndex > 0 && <Button onClick={PreviousButton}>Précédent</Button>}
      {pokemonIndex < 4 && <Button onClick={NextButton}>Suivant</Button>}

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
export default App;
