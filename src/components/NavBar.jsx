import React from 'react';
import Button from './Button';

const NavBar = ({ pokemonIndex, PreviousButton, NextButton }) => {
  return (
    <div>
      {pokemonIndex > 0 && <Button onClick={PreviousButton}>Précédent</Button>}
      {pokemonIndex < 4 && <Button onClick={NextButton}>Suivant</Button>}
    </div>
  );
}

export default NavBar;
