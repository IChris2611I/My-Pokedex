const NavBar = ({ pokemonList, setPokemonIndex }) => {

  const selectPikachu = (index) => {
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!")
    }
    setPokemonIndex(index)
  }

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => selectPikachu(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  )
}

export default NavBar
