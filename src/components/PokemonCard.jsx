import PropTypes from "prop-types"
import "../App.css"


function PokemonCard({ pokemon }) {
  
  return (
    <div>
      <figure className="card-bulsasaur">
        {pokemon.imgSrc ? (
          <img className="img" src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>

      {/* <figure className="card-charmander">
        <img
          className="img"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
        <figcaption>Charmander</figcaption>
      </figure>

      <figure className="card-squirtle">
        <img
          className="img"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
          alt="squirtle"
        />
        <figcaption>squirtle</figcaption>
      </figure> */}
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  
  }).isRequired,
}

export default PokemonCard
