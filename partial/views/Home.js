import React from 'react';
import Layout from './Layout';
import Header from './Header';
import PokemonList from './PokemonList';
import withHydration from '../server/withHydration';
import HidrationData from '../server/HydrationData';

const HydratedPokemonList = withHydration(PokemonList);

function Home({list}) {
  return (
    <Layout>
      <Header />
      <HydratedPokemonList list={list} />
      <HidrationData />
    </Layout>
  );
}

export default Home;