import React, {useState, useEffect} from 'react';
import fetch from '../../services/fetch';
import {AppContext} from '../App';

const HomeNoHydrate = (props) => {

    const [pokemons, setPokemons] = useState([])

    /**
     * Executing initial data on client
     * no hydrate
     */
    useEffect(async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setPokemons(data.results);
    }, []);
    
    return (
        <>
        {
            pokemons.map(poke => {
                return <p>{poke.name}</p>;
            })
        }
        </>
    )
        
}

export default HomeNoHydrate;