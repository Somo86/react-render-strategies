import React, {useState, useEffect} from 'react';
import fetch from '../../../services/fetch';
import PokemonList from '../../../components/views/PokemonList';

const HomeNoHydrate = () => {

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
    
    return <PokemonList list={pokemons} />;   
}

export default HomeNoHydrate;