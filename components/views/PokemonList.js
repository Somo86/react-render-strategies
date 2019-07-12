import React from 'react';

function PokemonList({list = []}) {
    return (
    <>
    {
        list.map((poke, index) => {
            return (
                <div className="card" key={`poke_${index}`}>
                    <div className="card-body">
                        <h5 className="card-title">
                            {poke.name}
                        </h5>
                        <p>More info:</p>
                        <a>{poke.url}</a>
                    </div>    
                </div>
            );
        })
    }
    </>
    );
  }
  
export default PokemonList;