import React from 'react';
import Layout from '../../components/views/Layout';
import Header from '../../components/views/Header';
import Footer from '../../components/views/Footer';
import PokemonList from '../../components/views/PokemonList';
import ClickableBox from '../../components/atoms/clickableBox';
import withHydration from '../../services/hydration/withHydration';
import HidrationData from '../../services/hydration/HydrationData';

const HydratedPokemonList = withHydration(PokemonList);
const HydratedClickableBox = withHydration(ClickableBox);

function Home({list}) {
  return (
    <Layout>
      <Header />
      <div className="side">
      <HydratedClickableBox />
      <ClickableBox />
      </div>
      <div className="content">
        <HydratedPokemonList list={list} />
      </div>
      <HidrationData />
      <Footer />
    </Layout>
  );
}

export default Home;