import React, { useState } from "react";
import pokemonList from "./components/Data";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";


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
      <NavBar pokemonIndex={pokemonIndex} PreviousButton={PreviousButton} NextButton={NextButton} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
export default App;
