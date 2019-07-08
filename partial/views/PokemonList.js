import React from 'react';

function PokemonList({list = []}) {
    return (
    <>
    {
        list.map((poke, index) => {
            return <p key={`poke_${index}`}>{poke.name}</p>;
        })
    }
    </>
    );
  }
  
export default PokemonList;