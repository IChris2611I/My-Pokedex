import styles from "./PokemonCard.module.css";

const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

function PokemonCard() {
  const card = {
    width: "200px",
    padding: "1rem",
    backgroundColor: "lightsalmon",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px gray",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "center",
    textShadow: "0px 0px 5px gray",
  };

  const pokemon = pokemonList[0];

  return (
    <div>
      <figure className="card">
        {pokemon.imgSrc ? (
          <img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>

      <figure style={card}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="charmander"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "0.5rem",
            backgroundColor: "white",
            borderRadius: "inherit",
            boxShadow: "inherit",
          }}
        />
        <figcaption>charmander</figcaption>
      </figure>
      <figure className={styles.card}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
          alt="squirtle"
          className={styles.cardImg}
        />
        <figcaption>squirtle</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
