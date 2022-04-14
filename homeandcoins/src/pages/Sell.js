import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import FormSell from '../components/FormSell';
const sell = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Sell home">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <FormSell />
    </>
  );
};

export default sell;
