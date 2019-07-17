import React, {useContext} from 'react';
import fetch from '../../../services/fetch';
import {AppContext} from '../App';
import PokemonList from '../../../components/views/PokemonList';

const Home = () => {
    const {pokemons = []} = useContext(AppContext);
    return <PokemonList list={pokemons} />; 
}

Home.getInitialProps = async() => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    return {
        pokemons: data.results
    }
}

export default Home;