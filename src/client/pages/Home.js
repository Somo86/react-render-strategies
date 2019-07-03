import React, {useContext} from 'react';
import fetch from '../../services/fetch';
import {AppContext} from '../App';

const Home = (props) => {
    const {pokemons = []} = useContext(AppContext);
    
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

Home.getInitialProps = async() => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    return {
        pokemons: data.results
    }
}

export default Home;