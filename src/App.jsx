import React, { useState } from 'react'
import pokemonList from './components/Data'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App
