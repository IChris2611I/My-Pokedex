
import pokemonList from './components/Data'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'
import React, { useState, useEffect } from 'react'



function App() {

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, [])  
  
  const [pokemonIndex, setPokemonIndex] = useState(0);  

  
  

  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App
